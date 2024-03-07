import React from "react";

function FilterCheckbox() {
    return (
        <div className="FilterCheckbox">
           <input className="FilterCheckbox__input" id="short" type="checkbox" name="isShortFilm" />
           <div className="FilterCheckbox__slider"></div>
           <label className="FilterCheckbox" for="short"></label>
        </div>
    )
}

export default FilterCheckbox;