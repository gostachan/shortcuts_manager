import BasicButton from "../../layout/basicButton/basicButton";
import "./environmentTable.css";
import EnvironmentTableRecord from "./environmentTableRecord/environmentTableRecord";

export default function EnvironmentTable() {

  return (
    <div className="environment-table-area">
      <div className="environment-table">
        <div className="record record-first record-title">
          <h5>Environment</h5>
        </div>

        <EnvironmentTableRecord 
          environment={{name: "chrome"}}/>
        <EnvironmentTableRecord 
          environment={{name: "OS"}}/>
        <EnvironmentTableRecord 
          environment={{name: "VSCode"}}/>
        <EnvironmentTableRecord 
          environment={{name: "tmux"}}/>
        <EnvironmentTableRecord 
          environment={{name: "vim", 
          className: "record-last"}}/>

        <BasicButton props={{value: "+",
                             className: "create-environment"}}/>
        <BasicButton props={{value: "ショートカットを作成",
                             className: "create-shortcut"}}/>
      </div>
    </div>
  );
}