import "./shortcutTable.css";
import ShortcutTableRecord from "./shortcutTableRecord/shortcutTableRecord";

export default function ShortcutTable() {

  return (
    <div className="shortcut-table">
      <div className="record record-first">
        <div className="column-1">
          <h5>Favorite</h5>
        </div>
        <div className="column-2">
          <h5>Command</h5>
        </div>
        <div className="column-3">
          <h5>Keybiding</h5>
        </div>
        <div className="column-4">
          <h5>When</h5>
        </div>
        <div className="column-5">
          <h5>Environment</h5>
        </div>
      </div>

      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: ""}} />
      <ShortcutTableRecord props={{value :{favorite: true, 
                                   command: "コマンド", 
                                   keybinding: "ctrl j",
                                   when: "when focuson hoge",
                                   environment: "hoge"},
                                   className: "record-last"}} />


    </div>
  );
}