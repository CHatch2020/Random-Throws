import React from 'react';
import {useSelector} from 'react-redux';

import UploadButtons from '../UploadButton/UploadButton';
import "./UserPage.css";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="body">
      <h2>Welcome, {user.username}!</h2>
      <UploadButtons />
      <p>Select your profile Picture!</p>
      <h3 className="intro">You will get three random discs per hole! Goodluck and have fun!</h3>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
