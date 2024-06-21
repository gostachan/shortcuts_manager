"use client";

import React, { useEffect, useState } from "react";


import "./shortcutTable.css";
import apiClient from "@/utils/apiClient";
import ShortcutTableRecord from "./shortcutTableRecord/shortcutTableRecord";


export default function ShortcutTable() {
  const columns = ["favorite", "command", "keybinding", "when", "environment"]
  const [valueSets, setValueSets] = useState([]);

  function click() {
    console.log(`id: ${session_id}`);
    console.log(`value: ${session_value}`);
  }

  useEffect(() => {
    apiClient.get(`/shortcuts`)
    .then(function (response) {
      setValueSets(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])


  return (
    <div className="shortcut-table">
      <div className="record record-first">
        {columns.map((column, index) => {
          return (
          <React.Fragment key={index}>
            <div className={`column-${index + 1}`}>
              <h5>{column}</h5>
            </div>
          </React.Fragment>
          )
        })}
      </div>
      {valueSets.map((valueSet, index) => {
        return (
          <React.Fragment key={valueSet.id}>
            <ShortcutTableRecord value={valueSet}
                                 className={((index === valueSets.length - 1) ? "record-last" : "")} />
          </React.Fragment>
        )
      })}
    </div>
  );
}