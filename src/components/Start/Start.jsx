import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import './Start.css';
import StartItem from "../StartItem/StartItem";

function Start () {
    const dispatch = useDispatch();
    const selectedCourses = useSelector(store => store.selectedCourses);

    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_COURSES'})
    }, []);

    return (
        // Will need to move all of this to Start Item component for functionality - along with styling
        <div className="start">
            {selectedCourses.map((course) => {
                return <StartItem key={course.id} courseItem={course}/>
            })}
        </div>
    )
}

export default Start;