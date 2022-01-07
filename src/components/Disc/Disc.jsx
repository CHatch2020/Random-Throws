import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";

import DiscItem from "../DiscItem/DiscItem";


import "./Disc.css";

function Disc() {
  const dispatch = useDispatch();
  const history = useHistory();
  const discs = useSelector((store) => store.discs);
  const params = useParams();

  useEffect(() => {
    console.log('params', params);
    dispatch({ type: "FETCH_DISCS", payload: params.id });
  }, [params.id]);

  const goToAddDisc = () => {
    history.push(`/bags/${params.id}/add_disc`);
  };

  return (
    <div>
      <div className="back">
        {discs.map((disc) => {
          return <DiscItem key={disc.id} discItem={disc} />;
        })}
      </div>

      <div>
        <div className="disc-button">
          <button className="disc-add" onClick={goToAddDisc}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Disc;
