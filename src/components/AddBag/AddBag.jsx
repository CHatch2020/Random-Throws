import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./AddBag.css";

function AddBag() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState([]);

  const addBag = () => {
    dispatch({ type: "ADD_BAG", payload: { name } });
    history.push("/bags");
  };

  return (
    <div>
      <h2 className="addbag-title">Add a Bag</h2>
      <div className="addbag-main">
        <input
          className="addbag-name"
          type="text"
          placeholder="Bag Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="addbag-but">
        <button className="addbag-button" onClick={addBag}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddBag;
