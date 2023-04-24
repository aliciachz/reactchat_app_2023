import React from 'react';
import { FaPlane, FaWifi, FaMoon, FaBatteryFull } from 'react-icons/fa';
import { FiBluetooth } from 'react-icons/fi';
import '../styles/Common.scss';

function Statusbar() {
  return (
    <div className="status_bar">
      <div className="left_item">
        <FaPlane />
        <FaWifi />
      </div>
      <div className="center_item">
        <span>15</span>:<span>33</span>
      </div>
      <div className="right_item">
        <FaMoon />
        <FiBluetooth />
        <span>
          <span>100</span>%
        </span>
        <FaBatteryFull />
      </div>
    </div>
  );
}

export default Statusbar;
