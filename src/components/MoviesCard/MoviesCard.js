import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ card, onSaveMovie }) {

    const location = useLocation();
    const isMoviesPage = location.pathname === '/movies';

    const savedMovies = JSON.parse(localStorage.getItem('saved-movies')) || [];
    const isSaved = savedMovies.some(c => c.movieId === `${card.movieId}`);
    
    function handleFilterCard(card) {
        const defaultValues = {
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        };

        const filteredCard = { ...card };

        for (const key in filteredCard) {
            if (filteredCard[key] === null || filteredCard[key] === undefined) {
                filteredCard[key] = defaultValues[key] || ' ';
            }
        }

        return filteredCard;
    }

    const filteredCard = handleFilterCard(card);

    const hours = Math.floor(filteredCard.duration / 60);
    const minutes = filteredCard.duration % 60;

    const hoursDisplay = hours >= 1 ? `${hours} ч` : '';
    const minutesDisplay = minutes >= 1 ? `${minutes} м` : '';

    function handleSave() {
        onSaveMovie(card, isSaved)
    }

    return (
        <div className="moviesCard">
            <a className="moviesCard__link" href={filteredCard.trailerLink} target="_blank" rel="noreferrer">
                <img className="moviesCard-image" src={filteredCard.image} alt="Превью фильма" />
            </a>
            <button className={`moviesCard__button
                ${isSaved ?
                    isMoviesPage ?
                        'moviesCard__button_active_movies'
                        :
                        'moviesCard__button_active_saved-movies'
                        :
                        ''
                }`
            } onClick={handleSave} >{isSaved ? '' : 'сохранить'}</button>
            <div className="moviesCard__container">
                <p className="moviesCard__title">{filteredCard.nameRU}</p>
                <p className="moviesCard__duration">{`${hoursDisplay} ${minutesDisplay}`}</p>
            </div>
        </div>
    )
}

export default MoviesCard;