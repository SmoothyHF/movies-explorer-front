import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function moviesCardList() {
    return (
        <section className="moviesCardList">
            <div className="moviesCardList__elements">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
        </section>
    )
}

export default moviesCardList;