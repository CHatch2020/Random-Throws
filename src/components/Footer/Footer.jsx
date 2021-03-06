import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";

import NavBar from "../NavBar/NavBar";
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const user = useSelector((store) => store.user);
  return (
    <div>
      {user.id && (
        <>
          <NavBar />
        </>
      )}
    </div>
  );
}

export default Footer;
