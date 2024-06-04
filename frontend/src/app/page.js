import Sidebar from "@/components/root/sidebar/sidebar";
import "./page.css";
import ShortcutTable from "@/components/root/main/shortcutTable/shortcutTable";
import CreateShortcut from "@/components/root/main/modals/createShortcut/createShortcut";

export default function Home() {
  return (
    <>
      <Sidebar/>
      <div className="main">
        <CreateShortcut id="create-modal"
                        props={{}}/>
        <div className="main-container">
          <div className="shortcut-table-area">
            <ShortcutTable/>
          </div>
        </div>
      </div>
    </>
  );
}
