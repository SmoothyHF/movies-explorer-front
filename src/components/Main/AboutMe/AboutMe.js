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
                <p className="AboutMe__info-about">{'Я родился и живу в Новосибирске. Имею среднее специальное образование по специальности "Право и организация социального обеспечения" НППК. Также есть незаконченное высшее образование по специальности "Юриспруденция" НГАУ. Я люблю проводить свободное время за играми или кодингом и хожу в спортзал. Увлекся программированием в 20 лет. В моих планах зарабатывать на жизнь написанием кода, потому что это занятие мне по душе, а получать деньги за любимое дело – то к чему стремится каждый человек.'}</p>
                <a className="AboutMe__info-link" href="https://github.com/SmoothyHF" target="_blank" rel="noreferrer">Github</a>
                <img className="AboutMe__info-image" src={img} alt="Мое фото"></img>
            </div>
            <Portfolio />
        </section>
    )
}

export default AboutMe;