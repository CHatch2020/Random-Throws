import "./Courses.css";

function Courses() {
  return (
    <div>
      <div className="courses">
        <div className="main">
          <h3 className="name">Name</h3>
          <h4 className="desc">Description:</h4>
        </div>

        <h4 className="holes">Holes:</h4>
        <div className="sub">
          <h4 className="par">Par:</h4>
          <button className="button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
