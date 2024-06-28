"use client";

import { createContext, useContext, useState } from "react";
import apiClient from "@/utils/apiClient";

export const Context = createContext();

export default function ContextComponent({ children }) {
  const [shortcutValues, setShortcutValues] = useState([]);
  const [editBtnClicked, toggleEditBtn] = useState(false);

  function renderShortcutTable() {
    apiClient.get(`/shortcuts`)
      .then(function (response) {
        setShortcutValues(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Context.Provider value={{ shortcutValues, 
                               renderShortcutTable, 
                               editBtnClicked, 
                               toggleEditBtn }}>
      {children}
    </Context.Provider>
  );
}