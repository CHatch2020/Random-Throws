import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Recap() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const scores = useSelector((store) => store.scores);

  useEffect(() => {
    dispatch({ type: "FETCH_SCORES", payload: params.course_id });
  }, [params.course_id]);

  return (
    <div>
      <table>
        <tbody>
          <thead>
            <tr>
              <td>Score</td>
              <td>Hole</td>
            </tr>
          </thead>
          {scores.map((score) => {
            return (
              <tr>
                <td>{score.score}</td>
                <td>{score.hole_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Recap;
