import "./Bags.css";
function Bags() {
  return (
    <div>
      <div className="bags">

        <div className="bags-outside">
          <div className="bags-inside">
            <p>bag 1</p>
          </div>
        </div>

        <div className="bags-outside">
          <div className="bags-inside">
            <p>bag 2</p>
          </div>
        </div>

        <div className="bags-outside">
          <div className="bags-inside">
            <p>bag 3</p>
          </div>
        </div>

      </div>

      <div className="bags-button">
        <button className="bags-add">Add</button>
      </div>
    </div>
  );
}

export default Bags;
