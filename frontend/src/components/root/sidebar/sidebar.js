"use client";

import React, { useState } from "react";

import "./sidebar.css";

import Modal from "../main/modals/modal";
import ToggleButton from "../layout/toggleButton/toggleButton";
import BasicButton from "../layout/basicButton/basicButton";
import EnvButton from "../layout/envButton/envButton";

export default function Sidebar() {

  const environments = ["VSCode", "vim", "OS", "chrome", "tmux"];

  const [createShortcutClicked, toggleShorcutModal] = useState(false);
  const [createGroupClicked, toggleGroupModal] = useState(false);


  function handleToggleShortcut() {
    toggleShorcutModal(!createShortcutClicked);
    toggleGroupModal(false);
  }

  function handleToggleGroup() {
    toggleGroupModal(!createGroupClicked);
    toggleShorcutModal(false);
  }


  return (
    <>
      <div className="side-bar">
        <div className={`modal-area ${(createShortcutClicked || createGroupClicked) ? "" : "display-none"}`}>
          <Modal modalType={{ createShortcut: createShortcutClicked,
                              createGroup:   createGroupClicked 
                            }}/>
        </div>
        <div className="side-bar-container">
          <div className="env-buttons">
            {environments.map((environment, index) => {
              let classNameOption = "";

              if (index === 0) classNameOption = "first"; 
              else if (index === environments.length - 1) classNameOption = "last";

              return (
                <React.Fragment key={environment}>
                  <EnvButton 
                    value={environment}
                    className={`${environment} ${classNameOption}`}/>
                </React.Fragment>
              );
            })}
          </div>
          <BasicButton 
            value={"+"}
          />

          <ToggleButton 
            onToggle={handleToggleShortcut} 
            value={"ショートカットを作成"}
            className={(createShortcutClicked) ? "clicked" : "non-clicked"}/>
          <ToggleButton 
            onToggle={handleToggleGroup}
            value={"グループを作成"}
            className={(createGroupClicked) ? "clicked" : "non-clicked"}/>


          <BasicButton 
            value={"ログアウト"}
            className={"logout"}
          />
        </div>
      </div>
    </>
  );
}