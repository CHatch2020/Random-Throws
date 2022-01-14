import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./Holes.css";

function Holes() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const randomDisc = useSelector((store) => store.randomDisc);
  const holes = useSelector((store) => store.holes);
  const currentHole = params.hole_number;
  const currentCourse = params.course_id;
  console.log("The random disc", randomDisc);

  // let [randomDisc, setRandomDisc] = useState([]);
  let [score, setScore] = useState(0);
  console.log("This is the score", score);

  useEffect(() => {
    dispatch({ type: "FETCH_RANDOM_DISC", payload: params.bag_id });
  }, [params.bag_id]);

  const goToNext = () => {
    history.push(
      `/start/${currentCourse}/bags/${params.bag_id}/holes/${
        Number(currentHole) + 1
      }`
    );
    dispatch({
      type: "SEND_SCORE",
      payload: { score, currentHole, currentCourse },
    });
    randomDisc;
  };

  const endRound = () => {
    dispatch({
      type: "SEND_SCORE",
      payload: { score, currentHole, currentCourse },
    });
    history.push(`/start/${currentCourse}/recap`);
  };

  return (
    <div className="holes-main">
      <div className="holes-sub">
        <div className="holes-data">
          <p>Hole: {currentHole}</p>
          <p>Par: {holes.length && holes[currentHole - 1].par}</p>
          <p>Distance: {holes.length && holes[currentHole - 1].distance}</p>
        </div>
        <div className="holes-discs">
          {randomDisc.map((disc) => {
            return <h4 className="randomDisc">{disc.disc_name}</h4>;
          })}
        </div>
        <form onSubmit={goToNext}>
          <div className="holes-outside-input">
            <input
              className="holes-input"
              placeholder="Score"
              onChange={(e) => setScore(Number(e.target.value))}
            />
          </div>
          {Number(currentHole) < holes.length ? (
            <button className="holes-next">Next</button>
          ) : null}
          {Number(currentHole) === holes.length ? (
            <button className="holes-end" onClick={endRound}>
              End Round
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Holes;
