import React from 'react';
import styles from '../styles/Chat.module.scss';
import Statusbar from '../components/Statusbar';
import Searchbox from '../components/Searchbox';
import Tabbar from '../components/Tabbar';
import { FaCog, FaComment } from 'react-icons/fa';

function Chat() {
  const friends = [
    { id: 1, name: 'Friends Name', latestMessage: 'Hello! This is a text message!' },
    { id: 2, name: 'Friends Name', latestMessage: 'Hello! This is a text message!' },
    { id: 3, name: 'Friends Name', latestMessage: 'Hello! This is a text message!' },
    { id: 4, name: 'Friends Name', latestMessage: 'Hello! This is a text message!' },
    { id: 5, name: 'Friends Name', latestMessage: 'Hello! This is a text message!' },
    { id: 6, name: 'Friends Name', latestMessage: 'Hello! This is a text message!' },
    { id: 7, name: 'Friends Name', latestMessage: 'Hello! This is a text message!' },
  ];

  return (
    <>
      <header>
        <Statusbar />
        <div>
          <div className="title_bar">
            <h1>
              Friends<span>1</span>
            </h1>
            <div className="left_item">
              <a href="#">Edit</a>
            </div>
            <div className="right_item">
              <a href="#">
                <FaCog />
              </a>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <main>
        <form className="search_box">
          <Searchbox />
        </form>
        <section className="main_section">
          <header className="blind">
            <h2>Friends</h2>
          </header>
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>
                <a href="chatting.html">
                  <span className="chats_img empty"></span>
                  <span className="chats_cont">
                    <span className="chats_name">{friend.name}</span>
                    <span className="chats_latest">{friend.latestMessage}</span>
                  </span>
                  <span className="chats_time">
                    <span>15</span>:<span>33</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <div className="chat_fa_btn">
          <a href="#">
            <FaComment />
          </a>
        </div>
      </main>
      <hr />
      <nav className="tab_bar">
        <Tabbar />
      </nav>
    </>
  );
}

export default Chat;
