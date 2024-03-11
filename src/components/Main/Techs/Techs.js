import React from "react";

function Techs() {
    return (
        <section id="Techs" className="Techs">
            <h2 className="Techs__title">{'Технологии'}</h2>
                <h3 className="Techs__subtitle">{'7 технологий'}</h3>
                <p className="Techs__text">{'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.'}</p>
            <ul className="Techs__list">
                <li className="Techs__item">{'HTML'}</li>
                <li className="Techs__item">{'CSS'}</li>
                <li className="Techs__item">{'JS'}</li>
                <li className="Techs__item">{'React'}</li>
                <li className="Techs__item">{'Git'}</li>
                <li className="Techs__item">{'Express.js'}</li>
                <li className="Techs__item">{'mongoDB'}</li>
            </ul>
        </section>
    )
}

export default Techs;