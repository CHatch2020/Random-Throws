import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

import "./StartItem.css";

function StartItem({ courseItem }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const bags = useSelector((store) => store.bags);

  const [bag_id, setBag_id] = useState(0);

  useEffect(() => {
    dispatch({ type: "FETCH_BAGS" });
  }, []);
  console.log(bags);

  const toHoles = (courseItem) => {
    dispatch({ type: "FETCH_HOLES", payload: courseItem.id });
    history.push(`/start/${courseItem.id}/bags/${bag_id}/holes/1`);
  };

  return (
    <div className="start-whole">
      <div className="start-main">
        <h3 className="start-name">{courseItem.course_name}</h3>
        <div className="start-data">
          <div className="start-sub">
            <h4 className="start-holes">Holes: {courseItem.holes}</h4>
            <h4 className="start-par">Par: {courseItem.par}</h4>
          </div>
          <select
            className="drop-down"
            value={bag_id}
            onChange={(e) => setBag_id(e.target.value)}
          >
            <option disabled value="0">
              What Bag?
            </option>
            {bags.map((bag) => {
              return (
                <option key={bag.id} value={bag.id}>
                  {bag.bag_name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="button-body">
        <button className="start-button" onClick={() => toHoles(courseItem)}>
          Play
        </button>
      </div>
    </div>
  );
}

export default StartItem;
