import React from "react";

function moviesCardList({ children }) {
    return (
        <section className="moviesCardList">
            <div className="moviesCardList__elements">
                {children}
            </div>
        </section>
    )
}

export default moviesCardList;