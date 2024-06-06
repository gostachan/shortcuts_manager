import "./modal.css"

export default function Modal({modalType}) {

  return (
    <div id="modal">
      {(() => {
        if (modalType.createShortcut) {
          return (
            <h1>shortcut</h1>
          );
        } else if (modalType.createGroup) {
          return (
            <h1>group</h1>
          );
        }
      }) () }
      <div className="container">
      </div>
    </div>
  );
}