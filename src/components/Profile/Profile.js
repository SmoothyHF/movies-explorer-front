import React from "react";

function Profile() {
    return (
        
        <form className="profile__form">
            <h2 className="profile__form_title">Привет, Виталий!</h2>
            <div className="profile__form_text-container">
                <p className="profile__form_text">Имя</p>
                <p className="profile__form_text">Виталий</p>
            </div>
            <div className="profile__form_text-container">
                <p className="profile__form_text">Ε-mail</p>
                <p className="profile__form_text">pochta@yandex.ru</p>
            </div>
            <button className="profile__form_button">Редактировать</button>
            <button className="profile__form_button">Выйти из аккаунта</button>
        </form>
    )
}

export default Profile;