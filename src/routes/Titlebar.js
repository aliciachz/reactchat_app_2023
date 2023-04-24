import React from 'react'
import '../styles/Common.scss';

function Titlebar() {
  return (
    <div>
      <div className="title_bar">
        <h1>Friend Name</h1>
        <div className="left_item">
          <a href="chat.html">
            <i className="fas fa-angle-left"></i>
          </a>
        </div>
        <div className="right_item">
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Titlebar