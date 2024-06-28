'use client';

import React, { useContext, useEffect, useState } from "react";

import "./sidebar.scss";

import apiClient     from "@/utils/apiClient";
import { Context }   from "@/utils/context";
import Modal         from "../main/modals/modal";
import ToggleButton  from "../layout/toggleButton/toggleButton";
import BasicButton   from "../layout/basicButton/basicButton";
import EnvButton     from "../layout/envButton/envButton";
import EnvButtonForm from "../layout/envButtonForm/envButtonForm";

export default function Sidebar() {
  const { editBtnClicked, toggleEditBtn, renderEnvBtns, environments } = useContext(Context);

  const [newEnvName,          setNewEnvName]          = useState("");
  const [isShortcutModalOpen, setIsShortcutModalOpen] = useState(false);
  const [isGroupModalOpen,    setIsGroupModalOpen]    = useState(false);
  const [isNewEnvFormOpen,    setIsNewEnvFormOpen]    = useState(false);

  useEffect(() => {
    renderEnvBtns();
  }, []); 

  function handleToggleEnv() {
    setIsNewEnvFormOpen(!isNewEnvFormOpen);
  }

  function handleToggleShortcut() {
    setIsShortcutModalOpen(!isShortcutModalOpen);
    setIsGroupModalOpen(false);
    toggleEditBtn(false);
  }

  function handleToggleGroup() {
    setIsGroupModalOpen(!isGroupModalOpen);
    setIsShortcutModalOpen(false);
    toggleEditBtn(false);
  }

  function closeModal() {
    setIsShortcutModalOpen(false);
    setIsGroupModalOpen(false);
  }

  function handleToggleEdit() {
    if (editBtnClicked) {
      renderEnvBtns();
    }
    toggleEditBtn(!editBtnClicked);
    closeModal();
  }

  function logout() {
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


  function createEnv(event) {
    event.preventDefault();
    const environment_info = { "environment_info": { "name": newEnvName } }

    apiClient.post("/environments", environment_info) 
      .then(function (response) {
        if (response.status == 201) {
          setIsNewEnvFormOpen(false);
          setNewEnvName("");
          renderEnvBtns();
        }
      })
      .catch(function (error) {
      })
  }

  function updateNewEnvForm(element) {
    setNewEnvName(element.target.value);
  }



  return (
    <>
      <div className="side-bar">

        <div className={`modal-area ${(isShortcutModalOpen || isGroupModalOpen) ? "" : "display-none"}`}>
          <Modal modalType={{ createShortcut: isShortcutModalOpen,
                              createGroup:   isGroupModalOpen 
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
                  { editBtnClicked ? (
                    <EnvButtonForm 
                      values={environment}
                      className={`${classNameOption}-form`}/>
                  ) : (
                    <EnvButton 
                      value={environment.name}
                      className={`${classNameOption}`}/>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <dev className={`env-form-area ${isNewEnvFormOpen ? "visible" : ""}`}>
            <form className="env-form"
                  onSubmit={createEnv}> 
              <input type="text" 
                     autoComplete="off"
                     className="env-form-input"
                     name="name"
                     value={newEnvName}
                     onChange={updateNewEnvForm}
                     placeholder="New Environment Name"
                     />
            </form>
          </dev>
          <BasicButton 
            className={ isNewEnvFormOpen ? "" : "down-env-form-btn"}
            onclick={handleToggleEnv}
            value={isNewEnvFormOpen ? "-" : "+"}
          />

          <ToggleButton 
            onToggle={handleToggleShortcut} 
            value={"Create Shortcut"}
            className={(isShortcutModalOpen) ? "clicked" : "non-clicked"}/>
          <ToggleButton 
            onToggle={handleToggleGroup}
            value={"Create Group"}
            className={(isGroupModalOpen) ? "clicked" : "non-clicked"}/>
          <ToggleButton 
            onToggle={handleToggleEdit}
            value={editBtnClicked ? "Quit" : "Edit"}
            className={(editBtnClicked) ? "clicked" : "non-clicked"}/>

          <div className="logout">
            <BasicButton 
              value={"Log out"}
              onclick={logout}
            />
          </div>
        </div>
      </div>
    </>
  );
}