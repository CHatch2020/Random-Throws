import React from 'react';
import {useSelector} from 'react-redux';

import UploadButtons from '../UploadButton/UploadButton';
import "./UserPage.css";

function UserPage() {
  // Render a welcome for the user
  const user = useSelector((store) => store.user);
  return (
    <div className="body">
      <h2>Welcome, {user.username}!</h2>
      {/* Allow user to upload a profile picture */}
      <UploadButtons />
      {/* intro */}
      <p>Select your profile Picture!</p>
      <h3 className="intro">You will get three random discs per hole! Goodluck and have fun!</h3>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
