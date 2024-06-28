"use client";

import { createContext, useState } from "react";
import apiClient from "@/utils/apiClient";

export const Context = createContext();

export default function ContextComponent({ children }) {
  const [shortcutValues, setShortcutValues] = useState([]);
  const [environments,   setEnvironments]   = useState([]);
  const [editBtnClicked, toggleEditBtn]     = useState(false);

  function renderShortcutTable() {
    apiClient.get(`/shortcuts`)
      .then(function (response) {
        setShortcutValues(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function renderEnvBtns() {
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

  return (
    <Context.Provider value={{ shortcutValues, 
                               environments,
                               editBtnClicked, 
                               toggleEditBtn,
                               renderShortcutTable,
                               renderEnvBtns }}>
      {children}
    </Context.Provider>
  );
}