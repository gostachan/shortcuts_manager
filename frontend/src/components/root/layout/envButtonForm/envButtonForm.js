"use client";
import apiClient from "@/utils/apiClient";
import "./envButtonForm.css";
import { useState } from "react";

export default function EnvButtonForm({ values, className }) {
  const [fixedEnvName, setFixedEnvName] = useState("");
  const [isForcus, setIsForcus] = useState(false);

  // FIXME: フォームに文字を入力してからreturnを押さないと変更が適応されない
  // 多分編集した環境のIDを配列に記録して保存したタイミングでfor文でクエストすればOK
  function handleSubmit(event) {
    event.preventDefault();
    const input_field = document.getElementById(`env-${values.id}`);
    input_field.blur();
    console.log(fixedEnvName);
    const environment_info = { "environment_info": { "name": fixedEnvName } }
    apiClient.put(`/environments/${values.id}`, environment_info)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function handleFocus() {
    setIsForcus(true);
  }

  function handleBlur() {
    setIsForcus(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className={`env-button-form ${className}` }
             id={`env-${values.id}`}
             value={fixedEnvName}
             placeholder={isForcus ? "" : values.name}
             onChange={(e) => setFixedEnvName(e.target.value)}
             onFocus={handleFocus}
             onBlur={handleBlur}
             />
    </form>
  );
} 