import "./shortcutTable.css";
import ShortcutTableRecord from "./shortcutTableRecord/shortcutTableRecord";

export default function ShortcutTable() {
  let columns = ["favorite", "command", "keybinding", "when", "environment"]
  let valueSets = [{favorite:   false,
                 command:    "command1",
                 keybinding: "keybinding1",
                 when:       "when1",
                 environment: "environment1"
                },
                {favorite:   false,
                 command:    "command2",
                 keybinding: "keybinding2",
                 when:       "when2",
                 environment: "environment2"
                },
                {favorite:   false,
                 command:    "command3",
                 keybinding: "keybinding3",
                 when:       "when3",
                 environment: "environment3"
                },
                {favorite:   false,
                 command:    "command4",
                 keybinding: "keybinding4",
                 when:       "when4",
                 environment: "environment4"
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
          <ShortcutTableRecord props={{value: valueSet,
                                      className: ((index === valueSets.length - 1) ? "record-last" : "")
          }}
          />
        )
      })}
    </div>
  );
}