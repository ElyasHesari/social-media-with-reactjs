import React from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import Message from "./Message";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const isLoggedIn = false;
  return (
    // <Homepage />
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </React.Fragment>
  );

  /* <Router>
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
    <Routes>
      <Route exact path="/homepage" element={<Homepage />} />
    </Routes>
    </Router> */
}

export default App;
