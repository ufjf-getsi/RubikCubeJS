import React from "react";
import "./SingleSquare.css";

export default function SingleSquare({ value }) {
  const className = `single-square color-${value}`;
  return <div className={className}>{value}</div>;
}
