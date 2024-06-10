"use client";

import axios from 'axios';

import "./page.css";
import Sidebar from "@/components/root/sidebar/sidebar";
import ShortcutTable from "@/components/root/main/shortcutTable/shortcutTable";

export default function Home() {

  function submit() {
    axios.get("http://localhost:3000/test")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

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
        <button style={{ color: 'white', backgroundColor: 'blue' }} onClick={submit}>test</button>
    </>
  );
}
