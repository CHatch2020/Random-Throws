import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function AddBag() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState([]);

    const addBag = () => {
        dispatch({ type: 'ADD_BAG', payload: {name}});
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Bag Name"
                onChange={(e) => setName(e.target.value)}/>
            <button onClick={addBag}>Add</button>
        </div>
    )
};

export default AddBag;