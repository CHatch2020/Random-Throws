import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DiscItem from "../DiscItem/DiscItem";

import "./Disc.css";

function Disc() {
  const dispatch = useDispatch();
  const discs = useSelector((store) => store.discs);

  useEffect(() => {
    dispatch({ type: "FETCH_DISCS" });
  }, []);

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
