import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {
    const { pathname } = useLocation();

    return (
        <div className={`Navigation ${props.isOpen ? 'Navigation_opened' : ''}`}>
            <button className="Navigation__button-close" onClick={props.onClose}></button>
            <menu className="Navigation__menu">
                <Link className={`Navigation__link ${pathname === '/' ? 'Navigation__link_active' : ''}`} to="/" onClick={props.onClose}>Главная</Link>
                <Link className={`Navigation__link ${pathname === '/movies' ? 'Navigation__link_active' : ''}`} to="/movies" onClick={props.onClose}>Фильмы</Link>
                <Link className={`Navigation__link ${pathname === '/saved-movies' ? 'Navigation__link_active' : ''}`} to="/saved-movies" onClick={props.onClose}>Сохранённые фильмы</Link>
                <Link className="Navigation__link-account" to="/profile" onClick={props.onClose}>
                    <button className="Navigation__button-account">Аккаунт</button>
                </Link>
            </menu>
        </div>
    )
}

export default Navigation;