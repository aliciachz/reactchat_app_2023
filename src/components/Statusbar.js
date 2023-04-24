import React from 'react';
import { FaPlane, FaWifi, FaMoon, FaBatteryFull } from 'react-icons/fa';
import { FiBluetooth } from 'react-icons/fi';
import 'styles/Common.scss';

function Statusbar() {
  return (
    <div className="status_bar">
      <div className="left_item">
        <FaPlane className="icon" />
        <FaWifi className="icon" />
      </div>
      <div className="center_item">
        <span>15</span>:<span>33</span>
      </div>
      <div className="right_item">
        <FaMoon className="icon" />
        <FiBluetooth className="icon" />
        <FaBatteryFull className="icon" style={{color: '#1ed937'}}/>
      </div>
    </div>
  );
}

export default Statusbar;
