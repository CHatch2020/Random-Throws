import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DiscItem from "../DiscItem/DiscItem";
import { useParams } from "react-router-dom";

import "./Disc.css";

function Disc() {
  const dispatch = useDispatch();
  const discs = useSelector((store) => store.discs);
  const params = useParams();

  useEffect(() => {
    console.log('params', params);
    dispatch({ type: "FETCH_DISCS", payload: params.id });
  }, [params.id]);

  return (
    <div>
      <div className="back">
        {discs.map((disc) => {
          return <DiscItem key={disc.id} discItem={disc} />;
        })}
      </div>

      <div>
        <div className="bags-button">
          <button className="bags-add">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Disc;
