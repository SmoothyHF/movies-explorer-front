import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

function SearchForm({ onSubmit }) {

    const [words, setWords] = React.useState('');
    const [isShortFilm, setIsShortFilm] = React.useState(false)
    const [errorText, setErrorText] = React.useState('');
    const { pathname } = useLocation();

    const moviesPage = pathname === '/movies'

    React.useEffect(() => {
        if (moviesPage) {
            const savedWords = localStorage.getItem('SearchForm') || '';
            const savedCheckBox = localStorage.getItem('filterCheckBox');
            setIsShortFilm(savedCheckBox === 'true');
            setWords(savedWords);
        }
    }, [moviesPage]);

    function handleChange(e) {
        setWords(e.target.value);
    }

    function handleSwitch(e) {
        setIsShortFilm(e.target.checked);

        if (words.trim() === '') {
            setErrorText('Введите ключевое слово');
        } else {
            onSubmit({ words, isShortFilm: e.target.checked });
            if (moviesPage) {
                localStorage.setItem('SearchForm', words);
                localStorage.setItem('filterCheckBox', e.target.checked);
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (words.trim() === '') {
            setErrorText('Введите ключевое слово');
        } else {
            setErrorText('');
            onSubmit({ words, isShortFilm });

            if (moviesPage) {
                localStorage.setItem('SearchForm', words);
            }
        }
    }

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <div className="searchForm__container-input">
                <input className="searchForm__input" type="text" placeholder="Фильм" value={words} onChange={handleChange} />
                <button className="searchForm__button"></button>
            </div>
            <span className="searchForm__error">{errorText}</span>
            <div className="searchForm__container-checkbox">
                <FilterCheckbox checked={isShortFilm} onClick={handleSwitch} />
                <p className="searchForm__text">Короткометражки</p>
            </div>
        </form>
    )
}

export default SearchForm;