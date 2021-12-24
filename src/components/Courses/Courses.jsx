import "./Courses.css";


function Courses() {
  return (
    // bring to course Item for functionality - along with the styling
    <div>
      {/* break off the course to be styled alone */}
      <div className="courses">
        {/* break off again to align these components together */}
        <div className="course-main">
          <h3 className="course-name">Name</h3>
          <h4 className="course-desc">Description:</h4>
        </div>

        {/* Leave this one out */}
        <h4 className="course-holes">Holes:</h4>
        {/* break off to align together */}
        <div className="course-sub">
          <h4 className="course-par">Par:</h4>
          <button className="course-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
