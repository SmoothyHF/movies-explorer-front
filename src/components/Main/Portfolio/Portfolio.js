import React from "react";

function Portfolio() {

    return (
        <section className="Portfolio">
            <h2 className="Portfolio__title">{'Портфолио'}</h2>
            <ul className="Portfolio__list">
                <li className="Portfolio__item">
                    <a href="https://smoothyhf.github.io/russian-travel/" target="_blank" rel="noreferrer">
                        <button className="portfolio__button">Статичный сайт</button>
                    </a>
                </li>
                <li className="Portfolio__item">
                    <a href="https://smoothyhf.github.io/russian-travel/" target="_blank" rel="noreferrer">
                        <button className="portfolio__button">Адаптивный сайт</button>
                    </a>
                </li>
                <li className="Portfolio__item">
                    <a href="https://github.com/SmoothyHF/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
                        <button className="portfolio__button">Одностраничное приложение</button>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;