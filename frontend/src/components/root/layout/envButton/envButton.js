"use client";
import "./envButton.css";
import { useState } from "react";

export default function EnvButton({props}) {
  const [clicked, setClicked] = useState(false);

  function toggleClicked() {
    setClicked(!clicked);
  }

  return (
    <button className={`env-button ${clicked ? "env-on" : "env-off"} ${props.className}`}
            onClick={toggleClicked}>
      {props.value}
    </button>
  );
} 