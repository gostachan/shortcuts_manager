import React from "react";
import "./shortcutTable.css";
import ShortcutTableRecord from "./shortcutTableRecord/shortcutTableRecord";

export default function ShortcutTable() {
  let columns = ["favorite", "command", "keybinding", "when", "environment"]
  let valueSets = [{favorite:   true,
                    command:    "command1",
                    keybinding: "keybinding1",
                    when:       "when1",
                    environment: "environment1",
                    id: 1
                   },
                   {favorite:   true,
                    command:    "command2",
                    keybinding: "keybinding2",
                    when:       "when2",
                    environment: "environment2",
                    id: 2
                   },
                   {favorite:   false,
                    command:    "command3",
                    keybinding: "keybinding3",
                    when:       "when3",
                    environment: "environment3",
                    id: 3 
                   },
                   {favorite:   false,
                    command:    "command4",
                    keybinding: "keybinding4",
                    when:       "when4",
                    environment: "environment4",
                    id: 4 
                   }]

  return (
    <div className="shortcut-table">
      <div className="record record-first">
        {columns.map((column, index) => {
          return (
          <div className={`column-${index + 1}`}>
            <h5>{column}</h5>
          </div>
          )
        })}
      </div>
      {valueSets.map((valueSet, index) => {
        return (
          <React.Fragment key={valueSet.id}>
            {/* <ShortcutTableRecord props={{value: valueSet,
                                        className: ((index === valueSets.length - 1) ? "record-last" : ""),
            }} /> */}

            <ShortcutTableRecord value={valueSet}
                                 className={((index === valueSets.length - 1) ? "record-last" : "")} />
          </React.Fragment>
        )
      })}
    </div>
  );
}