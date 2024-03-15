import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Register({ onRegister }) {
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [formError, setFormError] = useState('');

  console.log();

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  }

  function handleErrorText(code) {
    switch (code) {
      case 409:
        setFormError('Этот email уже используется');
        break;
      case 400:
        setFormError('Переданы некорректные данные');
        break;
      default:
        setFormError('Произошла ошибка, попробуйте ещё раз');
    };
  };

  function handleSubmit(e) {
    e.preventDefault();

    setFormError('');

    onRegister(values, handleErrorText);
  };

  return (
    <form className="auth auth_type_register" onSubmit={handleSubmit} noValidate>
      <Link className="auth__link" to={"/"}><img className="auth__logo" src={logo} alt="Логотип"></img></Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <p className="auth__input_text">Имя</p>
      <input
        className={`auth__input ${errors.name ? 'auth__input_error' : ''}`}
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        maxLength="30"
        minLength="2"
        pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
        required
      />
      <span className="auth__error-message">{errors.name && 'Поле "Имя" может содержать только латиницу, кириллицу, пробел или дефис. '}{errors.name}</span>
      <p className="auth__input_text">E-mail</p>
      <input
        className={`auth__input ${errors.email ? 'auth__input_error' : ''}`}
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        required
      />
      <span className="auth__error-message">{errors.email}</span>
      <p className="auth__input_text">Пароль</p>
      <input
        className={`auth__input ${errors.password ? 'auth__input_error' : ''}`}
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        required
      />
      <span className="auth__error-message">{errors.password}</span>
      <span className="auth__error-message">{formError}</span>
      <button className={`auth__button ${isValid ? '' : 'auth__button_disabled '}`} disabled={!isValid} type="submit">Зарегистрироваться</button>
      <p className="auth__button_text">Уже зарегистрированы?
        <Link to='/signin'>
          <button className='auth__button_login'>Войти</button>
        </Link></p>
    </form>
  )
}

export default Register;