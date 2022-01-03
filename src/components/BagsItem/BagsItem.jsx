import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './BagsItem.css';


function BagsItem({bagItem}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelectBag = (bagItem) => {
        dispatch({ type: "SET_SELECTED_BAG", payload: bagItem});
        history.push('/discs');
    }

    return (
        <div>
    
            <div className="bags-outside" key={bagItem.id}>
              <div className="bags-inside">
                <p onClick={() => handleSelectBag(bagItem)}>{bagItem.bag_name}</p>
              </div>
            </div>

        </div>
      );
}

export default BagsItem;
