"use client";
import "./envButton.scss";
import { useState } from "react";

export default function EnvButton({value, className}) {
  const [clicked, setClicked] = useState(false);

  function toggleClicked() {
    setClicked(!clicked);
  }

  // HACK: value が last や first だと角が曲がる
  return (
    <button className={`env-button ${clicked ? "env-on" : "env-off"} ${className}`}
            onClick={toggleClicked}>
      {value}
    </button>
  );
} 