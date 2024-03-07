import React from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header(props) {
    const { pathname } = useLocation();
    
    return (
        <header className='header'>
            <Link to="/"><img className='header__logo' src={logo} alt='логотип' /></Link>
            {props.loggedIn ?
            <>
            <nav className="header__link-container">
                <Link className={`header__link ${pathname === '/movies' ? 'header__link_active' : ''}`} to="/movies">Фильмы</Link>
                <Link className={`header__link ${pathname === '/saved-movies' ? 'header__link_active' : ''}`} to="/saved-movies">Сохраненные фильмы</Link>
            </nav>
            <Link to='/profile'>
            <button className='header__button-account'>{'Аккаунт'}</button>
            </Link>
            <button className="header__button-menu" onClick={props.onMenuClick}></button>
            </>
            :
            <div>
                <Link to="/signup">
                <button className='header__button-register'>{'Регистрация'}</button>
                </Link>
                <Link to="signin">
                <button className='header__button-login'>{'Войти'}</button>
                </Link>
            </div>
        }
        </header>
    )
}

export default Header;