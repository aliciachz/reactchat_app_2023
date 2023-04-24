import React, { useMemo, useState } from 'react';
import Statusbar from 'components/Statusbar';
import 'styles/Profile.scss';
import { FaTimes, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import friendsData from 'data/friendsData.json';
import chat from '../images/comment.gif';
import call from '../images/shake.gif';


function Profile({ friendId }) {
  const navigate = useNavigate();
  
  const navigateToChat = () => {
    navigate(`/chatting/${friendId}`);
  };
  
  const goBackToHome = () => {
    navigate('/');
  };

  const friend = useMemo(() => {
    return friendsData.find((f) => f.id === friendId);
  }, [friendId]);

  const [backgroundImage, setBackgroundImage] = useState(friend.background);

  return (
    <>
      <header>
        <Statusbar />
        <div>
          <div className="title_bar">
            <h1 className="blind">Friend Profile</h1>
            <div className="left_item">
              <FaTimes onClick={goBackToHome} />
            </div>
            <div className="right_item">
              <a href="#">
                <FaUser />
              </a>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <main>
        {friend && (
          <>
            <section 
              className="background" 
              style={{ backgroundImage: `url(${backgroundImage})`, height: '73vh' }}
            >
              <h2 className="blind">Friend Profile background image</h2>
            </section>
            
            <section className="profile">
              <h2 className="blind">Friend profile info</h2>
              <div
                className="profile_img" 
                style={{ backgroundImage: `url(${friend.images})` }}
              ></div>
              <div className="profile_cont">
                <span className="profile_name">{friend.name}</span>
                <input
                  type="email"
                  className="profile_email"
                  placeholder={friend.email}
                />
                <ul className="profile_menu">
                  <li>
                    <a href="#" onClick={navigateToChat}>
                      <span className="icon">
                      <img src={chat} alt="chat" />
                      </span>
                      Chatroom
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <img src={call} alt='call' />
                      </span>
                      Call
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </>
        )}
      </main>
      <hr />
    </>
  );
}

export default Profile;


