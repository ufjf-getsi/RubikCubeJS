import React from "react";
import "./MoveButton.css";

export default function MoveButton({ value, onClick }) {
    let character = value;
    if (value === value.toLowerCase()) {
        character = character.toUpperCase();
        character += "'";
    }
    return <button
        className="MoveButton"
        onClick={onClick}
    >{character}</button>;
}
