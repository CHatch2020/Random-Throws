import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import './AddDisc.css';

function AddDisc() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const bagId = params.id;

  const [img, setImg] = useState([]);
  const [name, setName] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [glide, setGlide] = useState([]);
  const [turn, setTurn] = useState([]);
  const [fade, setFade] = useState([]);
  const [stability, setStability] = useState([]);

  const addDisc = (e) => {
    e.preventDefault;
    dispatch({
      type: "ADD_DISC",
      payload: { img, name, speed, glide, turn, fade, stability, bagId },
    });
    history.push("/bags/:id");
  };

  return (
    <div>
      <h2 className="addDisc-title">Add a Disc</h2>
      <form onSubmit={addDisc}>
        <input
          className="addDisc-text"
          type="text"
          placeholder="Image"
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          className="addDisc-text"
          type="text"
          placeholder="Disc Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="addDisc-num"
          type="number"
          placeholder="Speed"
          onChange={(e) => setSpeed(e.target.value)}
        />
        <input
          className="addDisc-num"
          type="number"
          placeholder="Glide"
          onChange={(e) => setGlide(e.target.value)}
        />
        <input
          className="addDisc-num"
          type="number"
          placeholder="Turn"
          onChange={(e) => setTurn(e.target.value)}
        />
        <input
          className="addDisc-num"
          type="number"
          placeholder="Fade"
          onChange={(e) => setFade(e.target.value)}
        />
        <input
          className="addDisc-text"
          type="text"
          placeholder="Stability"
          onChange={(e) => setStability(e.target.value)}
        />
        <button className="addDisc-button">Add</button>
      </form>
    </div>
  );
}

export default AddDisc;
