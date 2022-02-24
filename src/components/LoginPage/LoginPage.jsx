import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";

import "./LoginPage.css";

function LoginPage() {
  const history = useHistory();

  return (
    <div className="container">
      <div className="grid">
        <LoginForm />

        <center>
          <button
            className="login-subtext"
            type="button"
            onClick={() => {
              history.push("/registration");
            }}
          >
            Register
          </button>
        </center>
      </div>
    </div>
  );
}

export default LoginPage;
