import React from "react";
import { useDispatch } from 'react-redux';

import './CourseItem.css';

function CourseItem({courseItem}) {
  const dispatch = useDispatch();

  const handleAddCourse = (courseItem) => {
    // console.log('working');
    // console.log(courseItem.id);
    dispatch({ type: 'ADD_COURSES', payload: courseItem})
  }

    return (
        <div>
          {/* break off the course to be styled alone */}
          <div className="courses">
            {/* break off again to align these components together */}
            <div className="course-main">
              <h3 className="course-name">{courseItem.course_name}</h3>
              <div className="course-desc-sect">
                <h4 className="course-desc-name">Description:</h4>
                <p className="course-desc">{courseItem.description}</p>
              </div>
            </div>
    
            {/* Leave this one out */}
            <h4 className="course-holes">Holes: {courseItem.holes}</h4>
            {/* break off to align together */}
            <div className="course-sub">
              <h4 className="course-par">Par: {courseItem.par}</h4>
              <button className="course-button" onClick={() => handleAddCourse(courseItem)}>Add</button>
            </div>
          </div>
        </div>
      );
};

export default CourseItem;