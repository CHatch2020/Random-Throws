import "./Disc.css";

function Disc() {
  return (
    <div className="back">
      <div className="disc-main">
        <div className="disc-name">Name</div>
        <div className="disc-top">
          <div className="disc-image">Image</div>
          <div>
            Flight Numbers
            <div className="flight-numbers">
              <div>Speed: Glide:</div>
              <div>Turn: Fade:</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <div>Stability</div>
        </div>
      </div>
    </div>
  );
}

export default Disc;
