import React from "react";
import "./SingleSquare.css";

export default function SingleSquare({ value }) {
  let classN = "SingleSquare color_" + value;
  return <div className={classN}></div>;
}
