import React from 'react';
import { useHistory } from 'react-router-dom';

import './BagsItem.css';


function BagsItem({bagItem}) {
    const history = useHistory();

    const toDiscs = (bagItem) => {
        history.push(`/bags/${bagItem.id}`);
    };

    return (
        <div>
    
            <div className="bags-outside" key={bagItem.id}>
              <div className="bags-inside">
                <p onClick={() => toDiscs(bagItem)}>{bagItem.bag_name}</p>
              </div>
            </div>

        </div>
      );
}

export default BagsItem;
