import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./Recap.css";

function Recap() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const scores = useSelector((store) => store.scores);
  const courses = useSelector((store) => store.courses);
  const currentCourse = params.course_id;

  useEffect(() => {
    dispatch({ type: "FETCH_SCORES", payload: params.course_id });
  }, [params.course_id]);

  return (
    <div className="recap-main">
      <div className="recap-sub">
        <table className="recap-table">
          <thead className="recap-head">
            <tr>
              <th>Score</th>
              <th>Hole</th>
            </tr>
          </thead>
          <tbody className="recap-body">
            {scores.map((score) => {
              return (
                <tr className="recap-rows">
                  <td>{score.score}</td>
                  <td>{score.hole_id}</td>
                </tr>
              );
            })}
          </tbody>
          <div>
            <h3>Total: {currentCourse.par}</h3>
            <h3>Your Score: </h3>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Recap;
