"use client";

import { useState } from "react"

import axios from "axios";

import "./page.css"

export default function Signup() {
  const [form, setForm] = useState({email:                "",
                                    password:             "",
                                    passwordConfirmation: ""})

  function handleForm(element) {
    setForm({
      ...form,
      [element.target.name]: element.target.value
    })
  }

  function handleClick() {
    router.push("localhost:3001");
  }  

  function handleClick() {
    const singup_info = {"signup_info": {
      "email":                form.email,
      "password":             form.password,
      "psssword_confirmation": form.passwordConfirmation
    }} 

    axios.post('http://localhost:3000/users', singup_info)
    .then(function (response) {
    })
    .catch(function (error) {
    });

    console.log(singup_info);
  }

  return (

    // TODO: コンポーネント化してログインフォームと統合
    <div className="container">
      <div className="login-form">
        <div className="content">
          <form>
            <h1 className="form-title">sign up</h1>
            <div className="form-group">
              <input
                type=       "text"
                id=         "email"
                name=       "email"
                placeholder="email"
                required
                onChange={handleForm}
                value=   {form.value}
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
                value=   {form.value}
              />
            </div>
            <div className="form-group">
              <input
                type=       "password"
                id=         "password-confirmation"
                name=       "passwordConfirmation"
                placeholder="password confirmation"
                required
                onChange={handleForm}
                value=   {form.value}
              />
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