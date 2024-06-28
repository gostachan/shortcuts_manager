"use client";

import { useContext, useState } from "react";
import { Context } from "@/utils/context";

import apiClient from "@/utils/apiClient";
import "./envButtonForm.scss";


export default function EnvButtonForm({ values, className }) {
  const { renderShortcutTable } = useContext(Context); 
  const [fixedEnvName, setFixedEnvName] = useState("");
  const [isForcus, setIsForcus] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const input_field = document.getElementById(`env-${values.id}`);
    input_field.blur();
    console.log(fixedEnvName);
    const environment_info = { "environment_info": { "name": fixedEnvName } }
    apiClient.put(`/environments/${values.id}`, environment_info)
    .then((res) => {
      renderShortcutTable();
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function handleFocus() {
    setIsForcus(true);
  }

  function handleBlur() {
    setIsForcus(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className={`env-button-form 
                         ${className} 
                         ${isForcus ? "forcus" : "blur"}` }
             autoComplete="off"
             id={`env-${values.id}`}
             value={fixedEnvName}
             placeholder={isForcus ? "" : values.name}
             onChange={(e) => setFixedEnvName(e.target.value)}
             onFocus={handleFocus}
             onBlur={handleBlur}
             />
    </form>
  );
} 