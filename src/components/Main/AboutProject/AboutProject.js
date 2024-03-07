import React from "react";

function AboutProject() {

    return (
        <section id="AboutProject" className="AboutProject">
            <h2 className="AboutProject__title">{'О проекте'}</h2>
            <div className="AboutProject__info">
                <div>
                    <h3 className="AboutProject__info-title">{'Дипломный проект включал 5 этапов'}</h3>
                    <p className="AboutProject__info-text">{'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'}</p>
                </div>
                <div>
                    <h3 className="AboutProject__info-title">{'На выполнение диплома ушло 5 недель'}</h3>
                    <p className="AboutProject__info-text">{'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'}</p>
                </div>
            </div>
            <div className="AboutProject__stages">
                <div className="AboutProject__stages-back">
                    <h3 className="AboutProject__stages-back_title">{'1 неделя'}</h3>
                </div>
                <div className="AboutProject__stages-front">
                    <h3 className="AboutProject__stages-front_title">{'4 недели'}</h3>
                </div>
                <p className="AboutProject__stages-back_text">{'Back-end'}</p>
                <p className="AboutProject__stages-front_text">{'Front-end'}</p>
            </div>
        </section>
    )
}

export default AboutProject;