"use client";

import React, { useEffect, useState } from "react";

import "./sidebar.css";

import Modal from "../main/modals/modal";
import ToggleButton from "../layout/toggleButton/toggleButton";
import BasicButton from "../layout/basicButton/basicButton";
import EnvButton from "../layout/envButton/envButton";
import apiClient from "@/utils/apiClient";

export default function Sidebar() {


  const [environments, setEnvironments] = useState([]);
  const [envName, setEnvName] = useState("");
  const [createShortcutClicked, toggleShorcutModal] = useState(false);
  const [createGroupClicked, toggleGroupModal] = useState(false);
  const [isEnvFormVisible, setEnvForm] = useState(false);

  function updateEnvironments() {
    // FIXME: ここでenvそのものをpushするよりenv.nameとenv.idを分けてpushした方が良いかも
    apiClient.get(`/environments`)
    .then(function (response) {
      const tmp_envs = [];
      for (const env of response.data.environments) {
        tmp_envs.push(env);
      }
      setEnvironments(tmp_envs);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    updateEnvironments();
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
    apiClient.delete("/logout")
    .then(function (response) {
      if (response.status == 200) {
        router.push('/login');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  } 

  function makeEnvFormVisible() {
    setEnvForm(!isEnvFormVisible);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const environment_info = { "environment_info": { "name": envName } }

    apiClient.post("/environments", environment_info) 
      .then(function (response) {
        if (response.status == 201) {
          setEnvForm(false);
          setEnvName("");
          updateEnvironments();
        }
      })
      .catch(function (error) {
      })
  }

  function onUpdate(element) {
    setEnvName(element.target.value);
  }

  function closeModal() {
    toggleShorcutModal(false);
    toggleGroupModal(false);
  }

  return (
    <>
      <div className="side-bar">
        <div className={`modal-area ${(createShortcutClicked || createGroupClicked) ? "" : "display-none"}`}>
          <Modal modalType={{ createShortcut: createShortcutClicked,
                              createGroup:   createGroupClicked 
                            }}
                 closeModal={closeModal}
                 />
        </div>
        <div className="sidebar-container">
          <div className="env-buttons">
            {environments.map((environment, index) => {
              let classNameOption = "";

              if (index === 0) classNameOption = "first"; 
              else if (index === environments.length - 1) classNameOption = "last";

              return (
                <React.Fragment key={environment.id}>
                  <EnvButton 
                    value={environment.name}
                    className={`${environment.name} ${classNameOption}`}/>
                </React.Fragment>
              );
            })}
          </div>
          <dev className={`env-form-area ${isEnvFormVisible ? "visible" : ""}`}>
            <form className="env-form"
                  onSubmit={handleSubmit}> 
              <input type="text" 
                     className="env-form-input"
                     name="name"
                     value={envName}
                     onChange={onUpdate}
                     placeholder="New Environment Name"
                     />
            </form>
          </dev>
          <BasicButton 
            onclick={makeEnvFormVisible}
            value={isEnvFormVisible ? "-" : "+"}
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
              onclick={handleLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
}