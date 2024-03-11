import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate()
    return (
        <section className="NotFound">
            <h2 className="NotFound__title">404</h2>
            <p className="NotFound__text">Страница не найдена</p>
            <button className="NotFound__button" onClick={() => navigate(-1)}>Назад</button>
        </section>
    )
}

export default NotFound;