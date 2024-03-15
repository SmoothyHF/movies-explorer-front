import React from "react";

function FilterCheckbox({ onClick, checked }) {

    return (
        <div className="FilterCheckbox">
           <input className="FilterCheckbox__input" id="short" checked={checked} type="checkbox" name="isShortFilm" onChange={onClick} />
           <div className="FilterCheckbox__slider"></div>
           <label className="FilterCheckbox" htmlFor="short"></label>
        </div>
    )
}

export default FilterCheckbox;