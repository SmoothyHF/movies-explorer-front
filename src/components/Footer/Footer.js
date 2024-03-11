import React from "react";

function Footer() {
    return (
        <footer className="Footer">
            <h2 className="Footer__title">{'Учебный проект Яндекс.Практикум х BeatFilm.'}</h2>
            <div className="Footer__links">
                <p className="Footer__year">{'© 2024'}</p>
                <div className="Footer__links-container">
                    <a className="Footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">{'Яндекс.Практикум'}</a>
                    <a className="Footer__link" href="https://github.com/" target="_blank" rel="noreferrer">{'Github'}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;