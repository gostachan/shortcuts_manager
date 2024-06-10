"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";

import "./shortcutTable.css";
import ShortcutTableRecord from "./shortcutTableRecord/shortcutTableRecord";

export default function ShortcutTable() {
  const columns = ["favorite", "command", "keybinding", "when", "environment"]
  const [valueSets, setValueSets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/shortcuts")
    .then(function (response) {
      // handle success
      setValueSets(response.data);
      console.log(valueSets.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
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