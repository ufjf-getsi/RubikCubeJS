import React from "react";
import "./SingleSquare.css";

export default function SingleSquare({ valor }) {
  let classN = "SingleSquare color_" + valor;
  return <div className={classN}></div>;
}
