import Image from "next/image";
import styles from "./page.module.css";
import "./page.css";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="page.css" />
        <title>Document</title>
        <div className="side-bar">
          <div className="side-bar-container">
            <div className="environment-table-area">
              {/* <h3>環境を選択</h3> */}
              <div className="environment-table">
                <div className="record record-first record-title">
                  <h3>Environment</h3>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="VSCode" />
                  </div>
                  <div className="column-2">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="chrome" />
                  </div>
                  <div className="column-2">
                    <p>chrome</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="OS" />
                  </div>
                  <div className="column-2">
                    <p>OS</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="vim" />
                  </div>
                  <div className="column-2">
                    <p>vim</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="tmux" />
                  </div>
                  <div className="column-2">
                    <p>tmux</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="VSCode" />
                  </div>
                  <div className="column-2">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="chrome" />
                  </div>
                  <div className="column-2">
                    <p>chrome</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="OS" />
                  </div>
                  <div className="column-2">
                    <p>OS</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <input type="checkbox" id="vim" />
                  </div>
                  <div className="column-2">
                    <p>vim</p>
                  </div>
                </div>
                <div className="record record-last">
                  <div className="column-1">
                    <input type="checkbox" id="tmux" />
                  </div>
                  <div className="column-2">
                    <p>tmux</p>
                  </div>
                </div>
                <button className="create-environment">+</button>
                <button className="create-shortcut">ショートカット作成</button>
              </div>
            </div>
            <button className="logout">ログアウト</button>
          </div>
        </div>
        <div className="main">
          <div className="main-container">
            <div className="shortcut-table-area">
              <div className="shortcut-table">
                <div className="record record-first">
                  <div className="column-1">
                    <h5>Favorite</h5>
                  </div>
                  <div className="column-2">
                    <h5>Command</h5>
                  </div>
                  <div className="column-3">
                    <h5>Keybiding</h5>
                  </div>
                  <div className="column-4">
                    <h5>When</h5>
                  </div>
                  <div className="column-5">
                    <h5>Environment</h5>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
                <div className="record record-last">
                  <div className="column-1">
                    <p>❤️</p>
                  </div>
                  <div className="column-2">
                    <p>右のウィンドウに移動</p>
                  </div>
                  <div className="column-3">
                    <p>ctrl .</p>
                  </div>
                  <div className="column-4">
                    <p>when focus on window.</p>
                  </div>
                  <div className="column-5">
                    <p>VSCode</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
