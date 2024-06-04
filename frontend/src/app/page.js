import Sidebar from "@/components/root/sidebar/sidebar";
import "./page.css";
import ShortcutTable from "@/components/root/main/shortcutTable/shortcutTable";

export default function Home() {
  return (
    <>
      <Sidebar/>
      <div className="main">
        <div className="main-container">
          <div className="shortcut-table-area">
            <ShortcutTable/>
          </div>
        </div>
      </div>
    </>
  );
}
