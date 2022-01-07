import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./Courses.css";
import CourseItem from "../CourseItem/CourseItem";

function Courses() {
  const courses = useSelector((store) => store.courses);

  return (
    <div className="padding-bottom">
      {courses.map((course) => {
        return <CourseItem key={course.id} courseItem={course} />;
      })}
    </div>
  );
}

export default Courses;
