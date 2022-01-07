import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Holes () {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    const randomDisc = useSelector((store) => store.randomDisc);
    const holes = useSelector(store => store.holes);
    const currentHole = params.hole_number;
    const currentCourse = params.course_id;
    console.log("The random disc", randomDisc);

    // let [randomDisc, setRandomDisc] = useState([]);
    let [score, setScore] = useState(0);
    console.log('This is the score', score);

    useEffect(() => {
        dispatch({ type: 'FETCH_RANDOM_DISC', payload: params.bag_id});
    }, [params.bag_id]);

    const goToNext = () => {
        history.push(`/start/${currentCourse}/bags/${params.bag_id}/holes/${Number(currentHole) + 1}`);
        dispatch({ type: 'SEND_SCORE', payload: {score, currentHole, currentCourse}})
        randomDisc;
    }

    return (
        <div>
            <p>Hole: {currentHole}</p>
            <p>Par: {holes.length && holes[currentHole - 1].par}</p>
            <p>Distance: {holes.length && holes[currentHole - 1].distance}</p>
            {randomDisc.map((disc) => {
                return <h4>{disc.disc_name}</h4>
            })}
            <input placeholder="Score" onChange={(e) => setScore(Number(e.target.value))}/>
            <button onClick={() => goToNext()}>Next</button>
        </div>
    )
}

export default Holes;