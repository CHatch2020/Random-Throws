import React from "react";

function StartItem({courseItem}) {
    return (
        <div>
            <div className="start-main">
                <h3 className="start-name">{courseItem.course_name}</h3>
                <div className="start-sub">
                    <h4 className="start-holes">Holes: {courseItem.holes}</h4>
                    <h4 className="start-par">Par: {courseItem.par}</h4>
                </div>
            </div>
            <div className="button-body">
                <button className="start-button">Play</button>
            </div>
        </div>
    )
};

export default StartItem;