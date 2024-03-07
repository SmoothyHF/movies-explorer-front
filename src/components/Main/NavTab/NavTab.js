import React from "react";

function NavTab() {

    return (
        <section className="NavTab">
            <a className="NavTab__item" href="#AboutProject">{'О проекте'}</a>
            <a className="NavTab__item" href="#Techs">{'Технологии'}</a>
            <a className="NavTab__item" href="#AboutMe">{'Студент'}</a>
        </section>
    )
}

export default NavTab;