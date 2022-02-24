import React from "react";

import { useHistory } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";

function RegisterPage() {
  const history = useHistory();

  return (
    <div className="container">
      <div className="grid">
        <RegisterForm />

        <center>
          <button
            type="button"
            className="login-subtext"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </button>
        </center>
      </div>
    </div>
  );
}

export default RegisterPage;
