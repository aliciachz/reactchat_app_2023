import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Searchbox from 'components/Searchbox';
import Statusbar from 'components/Statusbar';
import Tabbar from 'components/Tabbar';
import 'styles/Main.scss';
import setting from '../images/setting.gif';
import friendsData from 'data/friendsData.json';

const Friend = ({ name, imageUrl, message, onClick }) => (
  <li>
    <a href="#" onClick={onClick}>
      <span className="profile_img">
        <img src={imageUrl} alt={name} width="50" height="50" />
      </span>
      <span className="profile_name">{name}</span>
      {message && <span className="profile_messages">{message}</span>}
    </a>
  </li>
);

function Home({ userObj }) {

  useEffect(() => {
    document.body.classList.add('home-component-active');

    return () => {
      document.body.classList.remove('home-component-active');
    };
  }, []);
  

  const navigate = useNavigate();
  const [selectedFriend, setSelectedFriend] = useState(null);
  const displayName = userObj ? (userObj.displayName || userObj.email.split('@')[0]) : 'My Name';
  const [profileImage, setProfileImage] = useState("");
  const friends = friendsData;

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
    navigate(`/profile/${friend.id}`);
  };

  const handleMyProfileClick = () => {
    navigate('/MyProfile');
  };


  useEffect(() => {
    localStorage.setItem('profileImage', profileImage);
  }, [profileImage]);
  const savedProfileImage = localStorage.getItem('profileImage');
  useEffect(() => {
    setProfileImage(savedProfileImage);
  }, []);

  return (
    <>
      <header>
        <Statusbar />
        <div>
          <div className="title_bar">
            <h1>
              Friends<span>10</span>
            </h1>
            <div className="left_item">
              <a href="#">Manage</a>
            </div>
            <div className="right_item">
              <a href="#">
              <img src={setting} alt='setting' style={{width: '30px', height: '30px'}}/>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Searchbox />
        <section className="main_section">
        <h2>My Profile</h2>
        <ul>
        <li>
          <a href="#" onClick={handleMyProfileClick}>
            <span className="profile_img empty" style={{ backgroundImage: profileImage ? `url(${profileImage})` : `url(../images/profile.gif)` }}></span>
            <span className="profile_name" style={{fontWeight: 'bold'}}>{displayName}</span>
          </a>
        </li>
        </ul>
        </section>
        <section className="main_section friends">
          <h2>Friends</h2>
          <ul>
            {friends.map((friend) => (
              <Friend 
                key={friend.id}
                name={friend.name}
                imageUrl={friend.images}
                message={friend.messages}
                onClick={() => handleFriendClick(friend)}
              />
            ))}
          </ul>
        </section>
        {selectedFriend && (
          <Friend
          name={selectedFriend.name} 
          email={selectedFriend.email}
          imageURL={selectedFriend.images}
          message={selectedFriend.message} 
          background={selectedFriend.background}
          />
        )}
      </main>
      <Tabbar />
    </>
  );
}

export default Home;
