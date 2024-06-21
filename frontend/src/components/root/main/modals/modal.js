import "./modal.css"
import ShortcutModalContainer from "./shortcutModalContainer/shortcutModalContainer";
import GroupModalContainer from "./groupModalContainer/groupModal";


export default function Modal({modalType}) {

  return (
    <>
      {(() => {
        if (modalType.createShortcut) {
          return (
            <div className="shortcut-modal">
              <ShortcutModalContainer/>
            </div>
          );
        } else if (modalType.createGroup) {
          return (
            <div className="group-modal">
              <GroupModalContainer/>
            </div>
          );
        }
      }) () }
    </>
  );
}