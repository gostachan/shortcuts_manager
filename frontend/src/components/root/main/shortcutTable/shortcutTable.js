"use client";

import React, { useContext, useEffect, useState } from "react";

import { MyAppContext } from "@/app/page";
import ShortcutTableRecord from "./shortcutTableRecord/shortcutTableRecord";
import "./shortcutTable.css";

export default function ShortcutTable() {
  const { editBtnClicked ,valueSets, updateValueSets } = useContext(MyAppContext);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (editBtnClicked) {
      setColumns(["remove", "keybinding", "command", "when", "environment"]);
    } else {
      setColumns(["favorite", "keybinding", "command", "when", "environment"]);
    }
  }, [editBtnClicked])

  // HACK:  updateValueSetsをexport defaultするファイルを作成する
  useEffect(() => {
    updateValueSets();
  }, []);

  return (
    <div className="shortcut-table">
      <div className="record record-first">
        {columns.map((column, index) => {
          return (
            <React.Fragment key={index}>
              <div className={`column column-${index + 1}`}>
                <h5>{column}</h5>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {valueSets.map((valueSet, index) => {
        return (
          <React.Fragment key={valueSet.id}>
            <ShortcutTableRecord value={valueSet}
                                 className={((index === valueSets.length - 1) ? "record-last" : "")} />
          </React.Fragment>
        );
      })}
    </div>
  );
}