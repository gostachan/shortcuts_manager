import GroupModal from "./groupModal/groupModal";
import "./modal.css"
import ShortcutModal from "./shortcutModal/shortcutModal";

export default function Modal({modalType}) {

  return (
    <div id="modal">
      {(() => {
        if (modalType.createShortcut) {
          return (
            <ShortcutModal/>
          );
        } else if (modalType.createGroup) {
          return (
            <GroupModal/>
          );
        }
      }) () }
    </div>
  );
}