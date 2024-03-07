import React from "react";
import img from "../../images/card-photo.jpg"

function MoviesCard() {
    return (
        <div className="moviesCard">
            <img className="moviesCard-image" src={img} alt="Превью фильма"></img>
            <button className="moviesCard__button-save">сохранить</button>
            <div className="moviesCard__container">
                <p className="moviesCard__title">Баския: Взрыв реальности</p>
                <p className="moviesCard__duration">1ч 17м</p>
            </div>
        </div>
    )
}

export default MoviesCard;