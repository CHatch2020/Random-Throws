import React from "react";
import { useSelector } from "react-redux";

import StartItem from "../StartItem/StartItem";

function Start() {
  const selectedCourses = useSelector((store) => store.selectedCourses);

  return (
    <div className="padding-bottom">
      {selectedCourses.map((course) => {
        return <StartItem key={course.id} courseItem={course} />;
      })}
    </div>
  );
}

export default Start;
