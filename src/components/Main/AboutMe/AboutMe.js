import React from "react";
import img from "../../../images/me.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <section id="AboutMe" className="AboutMe">
            <h2 className="AboutMe__title">{'Студент'}</h2>
            <div className="AboutMe__info">
                <h3 className="AboutMe__info-name">{'Арманд'}</h3>
                <p className="AboutMe__info-work">{'Фронтенд-разработчик, 22 года'}</p>
                <p className="AboutMe__info-about">{'Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.'}</p>
                <a className="AboutMe__info-link" href="https://github.com/SmoothyHF" target="_blank" rel="noreferrer">Github</a>
                <img className="AboutMe__info-image" src={img} alt="Мое фото"></img>
            </div>
            <Portfolio />
        </section>
    )
}

export default AboutMe;