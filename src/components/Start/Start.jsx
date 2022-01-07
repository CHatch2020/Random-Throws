import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import StartItem from "../StartItem/StartItem";

function Start () {
    const dispatch = useDispatch();
    const selectedCourses = useSelector(store => store.selectedCourses);

    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_COURSES'})
    }, []);

    return (
            <div>
                {selectedCourses.map((course) => {
                    return <StartItem key={course.id} courseItem={course}/>
                })}
            </div>
    )
}

export default Start;