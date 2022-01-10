import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function EditDisc() {
  const params = useParams();
  const dispatch = useDispatch();

  console.log(params.disc_id);

  useEffect(() => {
    dispatch({ type: 'FETCH_ONE_DISC', payload: params.disc_id })
  },[])

  const discToEdit = useSelector(store => store.discToEdit);

  return (
    <div>
      <h2>Edit This Disc</h2>
      <form>
        <input
          type="text"
          placeholder="Disc Name"
          value={discToEdit.disc_name}
          //   onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Speed"
          value={discToEdit.speed}
          //   onChange={(e) => setSpeed(e.target.value)}
        />
        <input
          type="number"
          placeholder="Glide"
          value={discToEdit.glide}
          //   onChange={(e) => setGlide(e.target.value)}
        />
        <input
          type="number"
          placeholder="Turn"
          value={discToEdit.turn}
          //   onChange={(e) => setTurn(e.target.value)}
        />
        <input
          type="number"
          placeholder="Fade"
          value={discToEdit.fade}
          //   onChange={(e) => setFade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Stability"
          value={discToEdit.stability}
          //   onChange={(e) => setStability(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default EditDisc;
