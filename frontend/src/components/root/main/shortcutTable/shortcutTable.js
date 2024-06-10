import React from "react";
import "./shortcutTable.css";
import ShortcutTableRecord from "./shortcutTableRecord/shortcutTableRecord";

export default function ShortcutTable() {
  let columns = ["favorite", "command", "keybinding", "when", "environment"]
  let valueSets = [];

  for (let i = 1; i <= 100; ++i) {
    valueSets.push({favorite:   (i % 2 === 0 ? true : false),
                    command:     `command${i}`,
                    keybinding:  `keybinding${i}`,
                    when:        `when${i}`,
                    environment: `environment${i}`,
                    id: i
                    })
  }


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