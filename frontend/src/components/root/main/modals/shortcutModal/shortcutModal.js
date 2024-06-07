import InputTable from "./inputTable/inputTable";
import Keyboard from "./keyboard/keyboard";
import "./shortcutModal.css";

export default function ShortcutModal() {

  return (
    <div className="container">
      <div className="new-table">
        <InputTable/>
      </div>
      <div className="keyboard">
        <Keyboard/>
      </div>
    </div>
  );
}