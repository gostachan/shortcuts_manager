"use client";

import { createContext, useState } from "react";

import apiClient from "@/utils/apiClient";
import ShortcutTable from "@/components/root/main/shortcutTable/shortcutTable";
import Sidebar from "@/components/root/sidebar/sidebar";
import "./page.css";

export const MyAppContext = createContext();


export default function Home() {
  const [valueSets, setValueSets] = useState([]);

  function updateValueSets() {
    console.log("リクエストが送信されました");
    apiClient.get(`/shortcuts`)
      .then(function (response) {
        setValueSets(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <MyAppContext.Provider value={{ valueSets, updateValueSets }}>
        <Sidebar/>
        <div className="main">
          <div className="main-container">
            <div className="shortcut-table-area">
              <ShortcutTable/>
            </div>
          </div>
        </div>
      </MyAppContext.Provider>
    </>
  );
}