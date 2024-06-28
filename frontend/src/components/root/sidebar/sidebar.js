"use client";

import React, { useContext, useEffect, useState } from "react";

import "./sidebar.css";

import { Context } from "@/utils/context";
import Modal from "../main/modals/modal";
import ToggleButton from "../layout/toggleButton/toggleButton";
import BasicButton from "../layout/basicButton/basicButton";
import EnvButton from "../layout/envButton/envButton";
import apiClient from "@/utils/apiClient";
import EnvButtonForm from "../layout/envButtonForm/envButtonForm";

export default function Sidebar() {
  const { editBtnClicked, toggleEditBtn} = useContext(Context);

  const [environments, setEnvironments] = useState([]);
  const [envName, setEnvName] = useState("");
  const [createShortcutClicked, toggleShorcutModal] = useState(false);
  const [createGroupClicked, toggleGroupModal] = useState(false);
  const [isEnvFormVisible, setEnvForm] = useState(false);

  // HACK: 名前を変える サイドバーの環境ボタンを更新する仮数であるとわかるように
  // HACK: 外部ファイルに記述してexport defaultする
  function fetchEnvs() {
    // HACK: ここでenvそのものをpushするよりenv.nameとenv.idを分けてpushした方が良いかも
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
    fetchEnvs();
  }, []); 

  function handleToggleShortcut() {
    toggleShorcutModal(!createShortcutClicked);
    toggleGroupModal(false);
    toggleEditBtn(false);
  }

  function handleToggleGroup() {
    toggleGroupModal(!createGroupClicked);
    toggleShorcutModal(false);
    toggleEditBtn(false);
  }

  function handleToggleEdit() {
    if (editBtnClicked) {
      fetchEnvs();
    }
    toggleEditBtn(!editBtnClicked);
    toggleShorcutModal(false);
    toggleGroupModal(false);
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
          fetchEnvs();
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

                  {/* FIXME */}
                  { editBtnClicked ? (
                    <EnvButtonForm 
                      fetchEnvs={fetchEnvs}
                      values={environment}
                      className={`${environment.name} ${classNameOption}-form`}/>
                  ) : (
                    <EnvButton 
                      value={environment.name}
                      className={`${environment.name} ${classNameOption}`}/>
                  )}
                  {/* --------- */}
                </React.Fragment>
              );
            })}
          </div>

          <dev className={`env-form-area ${isEnvFormVisible ? "visible" : ""}`}>
            <form className="env-form"
                  onSubmit={handleSubmit}> 
              <input type="text" 
                     autoComplete="off"
                     className="env-form-input"
                     name="name"
                     value={envName}
                     onChange={onUpdate}
                     placeholder="New Environment Name"
                     />
            </form>
          </dev>
          <BasicButton 
            className={ isEnvFormVisible ? "" : "down-env-form-btn"}
            onclick={makeEnvFormVisible}
            value={isEnvFormVisible ? "-" : "+"}
          />

          <ToggleButton 
            onToggle={handleToggleShortcut} 
            value={"Create Shortcut"}
            className={(createShortcutClicked) ? "clicked" : "non-clicked"}/>
          <ToggleButton 
            onToggle={handleToggleGroup}
            value={"Create Group"}
            className={(createGroupClicked) ? "clicked" : "non-clicked"}/>
          <ToggleButton 
            onToggle={handleToggleEdit}
            value={editBtnClicked ? "Quit" : "Edit"}
            className={(editBtnClicked) ? "clicked" : "non-clicked"}/>

          <div className="logout">
            <BasicButton 
              value={"Log out"}
              onclick={handleLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
}