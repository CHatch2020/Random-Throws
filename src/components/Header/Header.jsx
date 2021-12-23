import React from "react";
import { useSelector } from 'react-redux';

import LogOutButton from "../LogOutButton/LogOutButton";
import "./Header.css"

function Header() {
    const user = useSelector(store => store.user);
  return (
    <div className="header">
      <h2 className="header-title">Random Throws</h2>
      {user.id && (
        <>
          <LogOutButton className="logout" />
        </>
      )}
    </div>
  );
}

export default Header;
