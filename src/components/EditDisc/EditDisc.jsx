import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./EditDisc.css";

function EditDisc() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(params.disc_id);

  const [name, setName] = useState("");
  const [speed, setSpeed] = useState(0);
  const [glide, setGlide] = useState(0);
  const [turn, setTurn] = useState(0);
  const [fade, setFade] = useState(0);
  const [stability, setStability] = useState(0);

  useEffect(() => {
    dispatch({ type: "FETCH_ONE_DISC", payload: params.disc_id });
  }, []);

  const discToEdit = useSelector((store) => store.discToEdit);

  const handleNameChange = (e) => {
    dispatch({ type: "CHANGE_NAME", payload: e.target.value });
  };

  const handleSpeedChange = (e) => {
    dispatch({ type: "CHANGE_SPEED", payload: e.target.value });
  };

  const handleGlideChange = (e) => {
    dispatch({ type: "CHANGE_GLIDE", payload: e.target.value });
  };

  const handleTurnChange = (e) => {
    dispatch({ type: "CHANGE_TURN", payload: e.target.value });
  };

  const handleFadeChange = (e) => {
    dispatch({ type: "CHANGE_FADE", payload: e.target.value });
  };

  const handleStabilityChange = (e) => {
    dispatch({ type: "CHANGE_STABILITY", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_DISC",
      payload: {
        disc_id: params.disc_id,
        disc_name: discToEdit.disc_name,
        speed: discToEdit.speed,
        glide: discToEdit.glide,
        turn: discToEdit.turn,
        fade: discToEdit.fade,
        stability: discToEdit.stability,
        bag_id: params.id,
      },
    });
    history.push(`/bags/${params.id}`);
  };

  return (
    <div>
      <h2 className="title">Edit Your {discToEdit.disc_name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          type="text"
          placeholder="Disc Name"
          value={discToEdit.disc_name || ""}
          onChange={handleNameChange}
        />
        <input
          className="number-input"
          type="number"
          placeholder="Speed"
          value={discToEdit.speed}
          onChange={handleSpeedChange}
        />
        <input
          className="number-input"
          type="number"
          placeholder="Glide"
          value={discToEdit.glide}
          onChange={handleGlideChange}
        />
        <input
          className="number-input"
          type="number"
          placeholder="Turn"
          value={discToEdit.turn}
          onChange={handleTurnChange}
        />
        <input
          className="number-input"
          type="number"
          placeholder="Fade"
          value={discToEdit.fade}
          onChange={handleFadeChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Stability"
          value={discToEdit.stability || ""}
          onChange={handleStabilityChange}
        />
        <div className="buttons">
          <button className="edit-update">Update</button>
          <button className="edit-cancel" onClick={(e) => history.push(`/bags/${params.id}`)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditDisc;
