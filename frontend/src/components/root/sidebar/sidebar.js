import BasicButton from "../layout/basicButton/basicButton";
import EnvButton from "../layout/envButton/envButton";
import CreateGroup from "../main/modals/createGroup/createGroup";
import CreateShortcut from "../main/modals/createShortcut/createShortcut";
import "./sidebar.css";

export default function Sidebar() {


  return (
    <>
      <div className="side-bar">
        <div className="create-shortcut-modal">
          <CreateShortcut/>
        </div>
        <div className="create-group-modal">
          <CreateGroup/>
        </div>
        <div className="side-bar-container">
            <div className="env-buttons">
            <EnvButton props={{value: "vim", 
                                className: "first"}} />
            <EnvButton props={{value: "ショートカットを作成", 
                                className: ""}} />
            <EnvButton props={{value: "ショートカットを作成", 
                                className: ""}} />
            <EnvButton props={{value: "ショートカットを作成", 
                                className: ""}} />
            <EnvButton props={{value: "ショートカットを作成", 
                                className: ""}} />

            <EnvButton props={{value: "vim", 
                                className: ""}} />
            <EnvButton props={{value: "ショートカットを作成", 
                                className: ""}} />
            <EnvButton props={{value: "ショートカットを作成", 
                                className: ""}} />
            <EnvButton props={{value: "ショートカットを作成", 
                                className: ""}} />
            <EnvButton props={{value: "ショートカットを作成", 
                                className: "last"}} />

          </div>
          <BasicButton props={{value: "+", 
                              className: ""}} />


          <BasicButton props={{value: "ショートカットを作成", 
                               className: "create-shortcut",
                               modal: true}} />
          <BasicButton props={{value: "グループを作成", 
                               className: "create-group",
                               modal: true}} />
          <BasicButton props={{value: "ログアウト", 
                               className: "logout"}} />
        </div>
      </div>
    </>
  );
}