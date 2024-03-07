import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Login() {
    return (
        <form className="auth auth_type_register">
            <Link className="auth__link" to={"/"}><img className="auth__logo" src={logo} alt="Логотип"></img></Link>
            <h2 className="auth__title">Рады видеть!</h2>
            <p className="auth__input_text">E-mail</p>
            <input className="auth__input" type="email" required />
            <p className="auth__input_text">Пароль</p>
            <input className="auth__input"  type="password" required />
            <button className="auth__button" type="submit">Войти</button>
            <p className="auth__button_text">Ещё не зарегистрированы? <button className="auth__button_login">Регистрация</button></p>
        </form>
    )
}

export default Login;