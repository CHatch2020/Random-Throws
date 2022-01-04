import React from "react";

function CourseItem({courseItem}) {
    return (
        <div>
          {/* break off the course to be styled alone */}
          <div className="courses">
            {/* break off again to align these components together */}
            <div className="course-main">
              <h3 className="course-name">{courseItem.course_name}</h3>
              <h4 className="course-desc">Description:</h4>
              <p>{courseItem.description}</p>
            </div>
    
            {/* Leave this one out */}
            <h4 className="course-holes">Holes: {courseItem.holes}</h4>
            {/* break off to align together */}
            <div className="course-sub">
              <h4 className="course-par">Par: {courseItem.par}</h4>
              <button className="course-button">Add</button>
            </div>
          </div>
        </div>
      );
};

export default CourseItem;