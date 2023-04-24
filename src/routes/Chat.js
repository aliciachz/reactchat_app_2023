import React from 'react';
import 'styles/Chat.scss';
import Statusbar from 'components/Statusbar';
import Searchbox from 'components/Searchbox';
import Tabbar from 'components/Tabbar';
import { Link } from 'react-router-dom';
import photosData from 'data/friendsData.json';

function Chat() {
  const friends = photosData.map((photo) => ({
    id: photo.id,
    name: photo.name,
    latestMessage: photo.messages,
    imageUrl: photo.images
  }));

  return (
    <>
      <header>
        <Statusbar />
        <div>
          <div className="title_bar">
            <h1>
              Chats<span>10</span>
            </h1>
            <div className="left_item">
              <a href="#">Edit</a>
            </div>
            <div className="right_item">
              <a href="#">
              </a>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <main>
        <Searchbox />
        <section className="main_section">
          <header className="blind">
            <h2>Friends</h2>
          </header>
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>
                <Link to={`/chatting/${friend.id}`}>
                <span className="chats_img" style={{ backgroundImage: `url(${friend.imageUrl})` }}></span>
                  <span className="chats_cont">
                    <span className="chats_name">{friend.name}</span>
                    <span className="chats_latest">{friend.latestMessage}</span>
                  </span>
                  <span className="chats_time">
                    <span>15</span>:<span>33</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <hr />
      <nav className="tab_bar">
        <Tabbar />
      </nav>
    </>
  );
}

export default Chat;
