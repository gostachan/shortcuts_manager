"use client";
import "./basicButton.css"
import { useState } from "react";

export default function BasicButton({props}) {

  const [clicked, setClicked] = useState(false);
  function toggleClicked() {
    if (props.modal) {
      setClicked(!clicked);
    }
  }

  return (
    <button className={`basic-button 
                        ${props.className} 
                        ${props.modal ? "modal" : ""} 
                        ${clicked? "modal-on" : "modal-off"}`}
            onClick={toggleClicked}>
      {props.value}
    </button>
  );
}