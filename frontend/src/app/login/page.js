"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import "./page.css";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({email:    "",
                                    password: ""})

  function handleForm(element) {
    setForm({
      ...form,
      [element.target.name]: element.target.value
    });
  };

  function handleClick() {
    let login_info = { "login_info": { "email":    form.email,
                                       "password": form.password } }

    console.log(login_info);

    axios.post("http://localhost:3000/login", 
               login_info, 
               { withCredentials: true })
    .then(function (response) {
      if (response.status == 200) router.push('/');
    })
    .catch(function (error) {
      console.log(error);
    });
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