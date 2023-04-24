import React, { useState, useEffect } from 'react';
import { FaUser, FaComment, FaSearch, FaEllipsisH } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import 'styles/Tab.scss';

function Tabbar() {
  const location = useLocation();
  const [selectorLeft, setSelectorLeft] = useState("10%");

  const calculateSelectorPosition = () => {
    switch (location.pathname) {
      case "/":
        return "10%";
      case "/chat":
        return "35%";
      case "/find":
        return "60%";
      case "/more":
        return "85%";
      default:
        return "10%";
    }
  };

  useEffect(() => {
    setSelectorLeft(calculateSelectorPosition());
  }, [location]);

  return (
    <nav className="menu">
      <input type="radio" name="nav-item" id="m-home" checked={location.pathname === '/'} />
      <label htmlFor="m-home">
        <Link to="/">
          <FaUser /><span>Friends</span>
        </Link>
      </label>
      <input type="radio" name="nav-item" id="m-chat" checked={location.pathname === '/chat'} />
      <label htmlFor="m-chat">
        <Link to="/chat">
          <FaComment /><span>Chats</span>
        </Link>
      </label>
      <input type="radio" name="nav-item" id="m-find" checked={location.pathname === '/find'} />
      <label htmlFor="m-find">
        <Link to="/find">
          <FaSearch /><span>Find</span>
        </Link>
      </label>
      <input type="radio" name="nav-item" id="m-more" checked={location.pathname === '/more'} />
      <label htmlFor="m-more">
        <Link to="/more">
          <FaEllipsisH /><span>More</span>
        </Link>
      </label>
      <div
        className="selector"
        style={{
          left: selectorLeft,
          transition: "left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
      ></div>
    </nav>
  );
}

export default Tabbar;


