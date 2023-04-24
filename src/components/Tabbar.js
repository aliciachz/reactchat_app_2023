import React from 'react';
import '../styles/Chat.scss'; 
import { FaUser, FaComment, FaSearch, FaEllipsisH } from 'react-icons/fa';

function Tabbar() {
  return (
    <nav className="tab_bar">
      <ul>
        <li>
          <a href="index.html">
            <FaUser className="icon" />Friends
          </a>
        </li>
        <li>
          <a href="chat.html">
            <FaComment className="icon" />Chats
          </a>
        </li>
        <li>
          <a href="find.html">
            <FaSearch className="icon" />Find
          </a>
        </li>
        <li>
          <a href="more.html">
            <FaEllipsisH className="icon" />More
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Tabbar;
