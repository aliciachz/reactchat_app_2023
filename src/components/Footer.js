import React from 'react';
import { FaPlus, FaMicrophone } from 'react-icons/fa';
import { FiSmile } from 'react-icons/fi';

function Footer() {
  return (
    <footer>
      <span className="plus_btn">
        <a href="#">
          <FaPlus />
        </a>
      </span>
      <form action="/" method="post">
        <fieldset className="text_box">
          <legend className="blind">채팅 입력창</legend>
          <label htmlFor="chatting" className="blind">
            채팅입력
          </label>
          <input type="text" id="chatting" className="text_field" />
          <span className="emoticon_btn">
            <a href="#">
              <FiSmile />
            </a>
          </span>
          <span className="voice_btn">
            <a href="#">
              <FaMicrophone />
            </a>
          </span>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer;
