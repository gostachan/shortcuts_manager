"use client";

import { useContext, useState } from "react";

import { Context } from "@/utils/context";
import apiClient from "@/utils/apiClient";
import BasicButton from "@/components/root/layout/basicButton/basicButton";
import InputTable from "./inputTable/inputTable";
import Keyboard from "./keyboard/keyboard";
import "./shortcutModalContainer.css";


export default function ShortcutModalContainer({closeModal}) {
  const { renderShortcutTable } = useContext(Context);
  const [shortcutInfo, setShortcutInfo] = useState({ command:        "",
                                     keybinding:     "",
                                     when:           "",
                                     environment_id: 0 });

  function handleClick() {

    const shortcut_info = { "shortcut_info": {
      ...shortcutInfo
    }}

    apiClient.post("/shortcuts", shortcut_info) 
      .then(function (response) {
        if (response.status == 201) {
          closeModal();
          renderShortcutTable();
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (

    <div className="container">
      <div className="new-table">
        <InputTable shortcutInfo={shortcutInfo}
                    setShortcutInfo={setShortcutInfo} />
      </div>
      <div className="keyboard">
        <Keyboard/>
      </div>
        <BasicButton onclick={handleClick} 
                     value={"save"}/>
    </div>
  );
}