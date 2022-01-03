import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BagsItem from "../BagsItem/BagsItem";

function Bags() {
  const dispatch = useDispatch();
  const bags = useSelector((store) => store.bags);

  useEffect(() => {
    dispatch({ type: "FETCH_BAGS" });
  }, []);

  return (
    <div>
      <div className="bags">
        {bags.map((bag) => {
          return <BagsItem key={bag.id} bagItem={bag} />;
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

export default Bags;
