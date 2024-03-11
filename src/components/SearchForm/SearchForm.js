import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <form className="searchForm">
            <div className="searchForm__container-input">
                <input className="searchForm__input" type="text" placeholder="Фильм" />
                <button className="searchForm__button"></button>
            </div>
            <div className="searchForm__container-checkbox">
                <FilterCheckbox />
                <p className="searchForm__text">Короткометражки</p>
            </div>
        </form>
    )
}

export default SearchForm;