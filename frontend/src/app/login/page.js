import "./page.css";

export default function Login() {

  return (
    <div className="container">
      <div className="login-form">
        <div className="content">
          <form action="/login" method="post">
            <h1 className="form-title">log in</h1>
            <div className="form-group">
              <input
                type="text"
                id="email"
                name="email"
                required=""
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                required=""
                placeholder="password"
              />
            </div>
            <div className="forget-pass">
              <a href="#">パスワードを忘れた</a>
            </div>
            <div className="form-button form-group">
              <button type="submit">log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}