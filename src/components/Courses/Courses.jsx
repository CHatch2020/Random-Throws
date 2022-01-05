import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./Courses.css";
import CourseItem from "../CourseItem/CourseItem";

function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector(store => store.courses);

  useEffect(() => {
    dispatch({ type: 'FETCH_COURSES'});
  }, [])
  return (
    <div>
      {courses.map((course) => {
        return <CourseItem key={course.id} courseItem={course}/>
      })}
    </div>
  )
}

export default Courses;
