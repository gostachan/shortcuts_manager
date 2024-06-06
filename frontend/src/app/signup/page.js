import "./page.css"

export default function Signup() {

  return (
    <div className="container">
      <div className="login-form">
        <div className="content">
          <form action="/signup" method="post">
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
            <div className="form-group">
              <input
                type="password"
                id="password-confirmation"
                name="password-confirmation"
                required=""
                placeholder="password confirmation"
              />
            </div>
            <div className="form-button form-group">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}