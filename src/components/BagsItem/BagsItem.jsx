import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

import './BagsItem.css';


function BagsItem({bagItem}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const toDiscs = (bagItem) => {
        history.push(`/bags/${bagItem.id}`);
    };

    const handleDelete = () => {
      dispatch({ type: 'DELETE_BAG', payload: bagItem});
    }

    return (
        <div>
    
            <div className="bags-outside" key={bagItem.id}>
              <div className="bags-inside">
                <p onClick={() => toDiscs(bagItem)}>{bagItem.bag_name}</p>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>

        </div>
      );
}

export default BagsItem;
