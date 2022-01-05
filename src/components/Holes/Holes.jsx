import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Holes () {
    const dispatch = useDispatch();
    const params = useParams();
    const holes = useSelector(store => store.holes);
    const currentHole = params.hole_number;
    const history = useHistory();

    const goToNext = () => {
        history.push(`/start/${params.course_id}/holes/${Number(currentHole) + 1}`);
    }

    return (
        <div>
            <p>Hole: {currentHole}</p>
            <p>Par: {holes.length && holes[currentHole - 1].par}</p>
            <p>Distance: {holes.length && holes[currentHole - 1].distance}</p>
            <input placeholder="Score"/>
            <button onClick={() => goToNext()}>Next</button>
        </div>
    )
}

export default Holes;