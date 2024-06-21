"use client";
import { useState } from "react";

import BasicButton from "@/components/root/layout/basicButton/basicButton";
import InputTable from "./inputTable/inputTable";
import Keyboard from "./keyboard/keyboard";
import "./shortcutModalContainer.css";

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
  }

  function handleClick() {
    // TODO: backendのショートカット登録アクションを叩く
    console.log(form);
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