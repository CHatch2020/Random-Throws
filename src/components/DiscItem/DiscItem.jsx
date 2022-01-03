import React from 'react';
import { useDispatch } from 'react-redux';

import './DiscItem.css';

function DiscItem({discItem}) {

    return (
              <div className="disc-main">
                <div className="disc-name">{discItem.disc_name}</div>
                <div className="disc-top">
                  <div className="disc-image">
                      <img src={discItem.image} alt={discItem.disc_name}/>
                  </div>
                  <div>
                    Flight Numbers
                    <div className="flight-numbers">
                      <div>Speed: {discItem.speed} Glide: {discItem.glide}</div>
                      <div>Turn: {discItem.turn} Fade: {discItem.fade}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                  <div>Stability: {discItem.stability}</div>
                </div>
              </div>
        );
};

export default DiscItem;
