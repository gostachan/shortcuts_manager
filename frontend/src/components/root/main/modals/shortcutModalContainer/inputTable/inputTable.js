import React from "react";
import "./inputTable.css"

export default function InputTable({onUpdate}) {
  let columns = ["command", "keybinding", "when", "environment"]


  return (
    <div className="input-table">
      <div className="record record-first">
        {columns.map((column, index) => {
          return (
            <React.Fragment key={index}>
              <div className={`column column-${index + 1}`}>
                <h5>{column}</h5>
              </div>
            </React.Fragment>
          )
        })}
      </div> 

      <div className="record record-last">
        <div className="column column-1">
          <input type="text" 
                 name="command"
                 onChange={onUpdate}/>
        </div>
        <div className="column column-2">
          <input type="text" 
                 name="keybinding"
                 onChange={onUpdate}/>
        </div>
        <div className="column column-3">
          <input type="text" 
                 name="when"
                 onChange={onUpdate}/>
        </div>
        <div className="column column-4">
          <input type="text" 
                 name="environment"
                 onChange={onUpdate}/>
        </div>
      </div>
    </div>
  );
}