import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function StartItem({courseItem}) {
    const history = useHistory();
    const dispatch = useDispatch();


    const toHoles = (courseItem) => {
        dispatch({ type: 'FETCH_HOLES', payload: courseItem.id})
        history.push(`/start/${courseItem.id}/holes/1`);
    };

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
                <button className="start-button" onClick={() => toHoles(courseItem)}>Play</button>
            </div>
        </div>
    )
};

export default StartItem;