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
                    <p className="disc-flight">Flight Numbers</p>
                    <div className="flight-numbers">
                      <div>Speed: {discItem.speed} Glide: {discItem.glide}</div>
                      <div>Turn: {discItem.turn} Fade: {discItem.fade}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="disc-buttons">
                    <button className="disc-edit">Edit</button>
                    <button className="disc-delete">Delete</button>
                  </div>
                  <div className="disc-stability">Stability: {discItem.stability}</div>
                </div>
              </div>
        );
};

export default DiscItem;
