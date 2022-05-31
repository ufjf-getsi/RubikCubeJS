import React from "react";
import "./MoveButton.css";

export default function MoveButton({ valor }) {
    let character = valor;
    if (valor == valor.toLowerCase()) {
        character = character.toUpperCase();
        character += "'";
    }
    return <button className="MoveButton">{character}</button>;
}
