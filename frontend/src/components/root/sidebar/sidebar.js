"use client";

import React, { useEffect, useState } from "react";

import "./sidebar.css";

import Modal from "../main/modals/modal";
import ToggleButton from "../layout/toggleButton/toggleButton";
import BasicButton from "../layout/basicButton/basicButton";
import EnvButton from "../layout/envButton/envButton";
import { logged_in } from "@/utils/session_helper";
import apiClient from "@/utils/apiClient";

export default function Sidebar() {


  const [environments, setEnvironments] = useState([]);
  const [createShortcutClicked, toggleShorcutModal] = useState(false);
  const [createGroupClicked, toggleGroupModal] = useState(false);

  useEffect(() => {
    apiClient.get(`/environments`)
    .then(function (response) {
      setEnvironments(response.data.environments);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []); 

  function handleToggleShortcut() {
    toggleShorcutModal(!createShortcutClicked);
    toggleGroupModal(false);
  }

  function handleToggleGroup() {
    toggleGroupModal(!createGroupClicked);
    toggleShorcutModal(false);
  }

  function handleLogout() {
    if (logged_in()) {
      console.log("ログインしてる");
    } else {
      console.log("ログインしていない");
    }
  } 


  return (
    <>
      <div className="side-bar">
        <div className={`modal-area ${(createShortcutClicked || createGroupClicked) ? "" : "display-none"}`}>
          <Modal modalType={{ createShortcut: createShortcutClicked,
                              createGroup:   createGroupClicked 
                            }}/>
        </div>
        <div className="sidebar-container">
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


          <div className="logout">
            <BasicButton 
              value={"ログアウト"}
              func={handleLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
}