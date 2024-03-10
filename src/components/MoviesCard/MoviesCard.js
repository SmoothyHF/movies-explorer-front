import React, { useEffect } from "react";
import img from "../../images/card-photo.jpg";
import { useLocation } from "react-router-dom";

function MoviesCard() {

    const [button, setButton] = React.useState([]);
    
    const location = useLocation();

    const movies = location.pathname === '/movies';
    const savedMovies = location.pathname === '/saved-movies';

    useEffect(() => {
        if (movies) {
            setButton(<button className="moviesCard__button-save">сохранить</button>)
        } if (savedMovies) {
            setButton(<button className="moviesCard__button-delete"></button>)
        }
    }, [movies, savedMovies])
    return (
        <div className="moviesCard">
            <img className="moviesCard-image" src={img} alt="Превью фильма"/>
            {button}
            <div className="moviesCard__container">
                <p className="moviesCard__title">Баския: Взрыв реальности</p>
                <p className="moviesCard__duration">1ч 17м</p>
            </div>
        </div>
    )
}

export default MoviesCard;