import React from "react";
import "./MoveButton.css";

export default function MoveButton({ value }) {
    let character = value;
    if (value == value.toLowerCase()) {
        character = character.toUpperCase();
        character += "'";
    }
    return <button className="MoveButton">{character}</button>;
}
