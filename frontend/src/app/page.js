"use client";

import ShortcutTable from "@/components/root/main/shortcutTable/shortcutTable";
import Sidebar from "@/components/root/sidebar/sidebar";
import "./page.css";
import ContextComponent from "@/utils/context";


export default function Home() {

  return (
    <ContextComponent>
      <Sidebar/>
      <div className="main">
        <div className="main-container">
          <div className="shortcut-table-area">
            <ShortcutTable/>
          </div>
        </div>
      </div>
    </ContextComponent>
  );
}