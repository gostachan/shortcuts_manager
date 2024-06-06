"use client";
import { useState } from "react";
import "./page.css";

export default function Login() {
  const [form, setForm] = useState({email:    "",
                                    password: ""})

  function handleForm(element) {
    setForm({
      ...form,
      [element.target.name]: element.target.value
    });
  };

  function handleClick() {
    console.log(form);
  }

  return (

    // TODO: コンポーネント化してログインフォームと統合
    <div className="container">
      <div className="login-form">
        <div className="content">
          <form>
            <h1 className="form-title">log in</h1>
            <div className="form-group">
              <input
                type=       "text"
                id=         "email"
                name=       "email"
                placeholder="email"
                required
                onChange={handleForm}
                value=   {form.email}
              />
            </div>
            <div className="form-group">
              <input
                type=       "password"
                id=         "password"
                name=       "password"
                placeholder="password"
                required
                onChange={handleForm}
                value=   {form.password}
              />
            </div>
            <div className="forgot-pass">
            <a href="#">パスワードを忘れた</a>
          </div>
          </form>
        </div>
        <button className="form-button" 
                onClick={handleClick}>
          submit
        </button>
      </div>
    </div>
  )
}