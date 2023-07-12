import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Login() {
  return (
    <div class="login-form">
      <h2>Login Application</h2>
      <form>
        <div class="form-group">
          <label for="username">username</label>
          <input
            type="text"
            value="ElyasHesari"
            id="username"
            name="username"
            placeholder="Enter username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">password</label>
          <input
            type="password"
            value="00000000000"
            id="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit">
          <Link to="/homepage">submit</Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
