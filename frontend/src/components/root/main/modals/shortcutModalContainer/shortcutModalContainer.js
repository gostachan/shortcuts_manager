"use client";
import { useState } from "react";

import BasicButton from "@/components/root/layout/basicButton/basicButton";
import InputTable from "./inputTable/inputTable";
import Keyboard from "./keyboard/keyboard";
import "./shortcutModalContainer.css";
import apiClient from "@/utils/apiClient";

export default function ShortcutModalContainer() {
  const [form, setForm] = useState({ command:     "",
                                     keybinding:  "",
                                     when:        "",
                                     environment: "" });

  function handleForm(element) {
    setForm({
      ...form,
      [element.target.name]: element.target.value
    });
    console.log(form);
  }

  function handleClick() {
    const shortcut_info = { "shortcut_info": { "command":        "command value",
                                               "keybinding":     "keybinding value",
                                               "when":           "when value",          
                                               "environment_id": 13 } }
    apiClient.post("/environments", shortcut_info) 
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (

    <div className="container">
      <div className="new-table">
        <InputTable onUpdate={handleForm}/>
      </div>
      <div className="keyboard">
        <Keyboard/>
      </div>
        <BasicButton func={handleClick} value={"save"}/>
    </div>
  );
}