

import './Start.css';

function Start () {
    return (
        // Will need to move all of this to Start Item component for functionality - along with styling
        <div className="start">
            <div className="start-main">
                <h3 className="start-name">Name</h3>
                <div className="start-sub">
                    <h4 className="start-holes">Holes:</h4>
                    <h4 className="start-par">Par:</h4>
                </div>
            </div>
            <div className="button-body">
                <button className="start-button">Play</button>
            </div>
        </div>
    )
}

export default Start;