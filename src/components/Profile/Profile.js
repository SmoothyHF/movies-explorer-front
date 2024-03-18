import React, { useState } from "react";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";

function Profile({ onSignOut, onUpdateUserData }) {

    const [values, setValues] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setValues(currentUser)
    }, [currentUser]);

    function handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
    }

    const handleErrorText = (code) => {
        switch (code) {
            case 409:
                setFormError('Этот email уже используется');
                break;
            case 400:
                setFormError('Переданы некорректные данные');
                break;
            case 200:
                setFormError('');
                break;
            default:
                setFormError('Произошла ошибка, попробуйте ещё раз');
        };
    };

    function handleSubmit(e) {
        e.preventDefault();

        setFormError('');
        setFormSuccess('');
        
        if (values.name === currentUser.name && values.email === currentUser.email) {
            setFormError('Эти данные уже используются');
        } else {
            onUpdateUserData(values, setFormSuccess, handleErrorText)
        }
    }

    return (
        <form className="profile__form" onSubmit={handleSubmit}>
            <h2 className="profile__form_title">Привет, {currentUser.name}</h2>
            <div className="profile__form_text-container">
                <p className="profile__form_text">Имя</p>
                <input
                    value={values.name}
                    onChange={handleChange}
                    className="profile__form_input"
                    name="name"
                    id="name"
                    maxLength="30"
                    minLength="2"
                    pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
                    required
                />
            </div>
            <span className="profile__error-message">{errors.name && 'Поле "Имя" может содержать только латиницу, кириллицу, пробел или дефис. '}{errors.name}</span>
            <div className="profile__form_text-container">
                <p className="profile__form_text">E-mail</p>
                <input
                    value={values.email}
                    onChange={handleChange}
                    className="profile__form_input"
                    name="email"
                    id="email"
                    maxLength="30"
                    minLength="2"
                    type="email"
                    pattern="^\S+@\S+\.\S+$"
                    required
                />
            </div>
            <span className="profile__error-message">{errors.email}</span>
            <span className="profile__error">{formError}</span>
            <span className="profile__success">{formSuccess}</span>
            <button className={`profile__form_button ${isValid ? '' : 'profile__form_button_disabled'}`} disabled={!isValid} type="submit">Редактировать</button>
            <button className="profile__form_button" onClick={() => onSignOut()}>Выйти из аккаунта</button>
        </form>
    )
}

export default Profile;