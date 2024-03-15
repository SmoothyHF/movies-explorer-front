import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm';
import React from 'react';

function Movies({ onSubmit, cards, isLoading, errorMessage, onSaveMovie }) {

    const [cardsCount, setCardsCount] = React.useState(12);
    const [width, setWidth] = React.useState(0);
    const [cardsCountScale, setCardsCountScale] = React.useState(3);

    React.useEffect(() => {
        const handleWidthChange = () => {
            setTimeout(() => {
                setWidth(window.innerWidth);
            }, 5000);
        };

        setWidth(window.innerWidth);

        window.addEventListener('resize', handleWidthChange);

        return () => window.removeEventListener('resize', handleWidthChange);
    }, []);

    React.useEffect(() => {
        if (width > 1145) {
            setCardsCount(12);
            setCardsCountScale(3);

            return;
        };

        if (width <= 1145) {
            setCardsCount(8);
            setCardsCountScale(2);
        };

        if (width <= 715) {
            setCardsCount(5);

            return;
        };
    }, [width, isLoading]);

    const handleButtonClick = () => {
        setCardsCount(cardsCount + cardsCountScale);
    };

    function handleSubmit(values) {
        onSubmit(values)
    }
    return (
        <section className='movies'>
            <SearchForm onSubmit={handleSubmit} />
            <p className="movies__error">{errorMessage}</p>
            {
                isLoading ?
                    <Preloader />
                    :
                    <MoviesCardList>
                        {cards.slice(0, cardsCount).map(card => {

                            return <MoviesCard key={card.id} card={{
                                country: card.country,
                                director: card.director,
                                duration: card.duration,
                                year: card.year,
                                description: card.description,
                                image: `https://api.nomoreparties.co${card.image.url}`,
                                trailerLink: card.trailerLink,
                                thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
                                movieId: card.id,
                                nameRU: card.nameRU,
                                nameEN: card.nameEN,
                            }} onSaveMovie={onSaveMovie} />
                        })}
                    </MoviesCardList>
            }
            {cardsCount >= cards.length || isLoading ? '' : <button className="movies__button" onClick={handleButtonClick}>Ещё</button>}
        </section>
    )
}

export default Movies;