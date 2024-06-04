import BasicButton from "../layout/basicButton/basicButton";
import EnvironmentTable from "./environmentTable/environmentTable";
import "./sidebar.css";

export default function Sidebar() {


  return (
    <>
      <div className="side-bar">
        <div className="side-bar-container">
          <EnvironmentTable/>
          <BasicButton props={{value: "ログアウト", 
                               className: "logout"}} />
        </div>
      </div>
    </>
  );
}