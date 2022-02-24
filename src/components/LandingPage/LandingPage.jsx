import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <div className="grid">
          <RegisterForm />

          <center>
            <h4 className="subtext">Already a Member?</h4>
            <button className="landing-sub-button" onClick={onLogin}>
              Login
            </button>
          </center>
      </div>
    </div>
  );
}

export default LandingPage;
