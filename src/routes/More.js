import React, { useEffect, useState } from 'react';
import 'styles/More.scss';
import Statusbar from 'components/Statusbar';
import Tabbar from 'components/Tabbar';
import { FaCog, FaInfoCircle, FaUtensils, FaHome, FaTv, FaPencilAlt, FaColumns, FaWonSign, FaVideo } from 'react-icons/fa';
import { authService } from 'fbase';
import { useNavigate } from 'react-router-dom';

function More({ userObj }) {
  const navigate = useNavigate()
  const displayName = userObj ? (userObj.displayName || userObj.email.split('@')[0]) : 'My Name';
  const [profileImage, setProfileImage] = useState("");

  const onLogOutClick = () => {
   authService.signOut();
    navigate('/'); //첫 화면으로 이동 즉 리다이렉트 기능이다.
  }

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
        <div>
        <Statusbar />
        </div>
        <div class="title_bar">
            <h1>More</h1>
            <div class="left_item"></div>
            <div class="right_item"><a href="#"><FaCog /></a></div>
        </div>
      </header>
      <hr />
      <main>
      <section className="user_info">
        <h2 className="blind">사용자 정보</h2>
        <span className="profile_img empty" onClick={handleMyProfileClick} style={{ backgroundImage: profileImage ? `url(${profileImage})` : '' }}></span>
        <span className="profile_info">
          <span className="profile_name">{displayName}</span>
          <span className="profile_email">{userObj.email}</span>
        </span>
        <span className="logout" onClick={onLogOutClick}></span>
      </section>
      <section class="user_menu">
        <h2 class="blind">사용자 메뉴</h2>
        <ul>
            <li><a href="#"><span className='smile'></span>Emoticons</a></li>
            <li><a href="#"><span className='themes'></span>Themes</a></li>
            <li><a href="#"><span className='plus_friend'></span>Plus Friend</a></li>
            <li><a href="#"><span className='account'></span>Account</a></li>
        </ul>
      </section>
      <section class="plus_friends">
            <h2>Plus Friends<span><FaInfoCircle />Learn More</span></h2>
        <ul class="plus_list">
            <li><a href="#"><FaUtensils />Order</a></li>
            <li><a href="#"><FaHome />Store</a></li>
            <li><a href="#"><FaTv />Creation</a></li>
            <li><a href="#"><FaPencilAlt />Education</a></li>
            <li><a href="#"><FaColumns />Politics/Society</a></li>
            <li><a href="#"><FaWonSign />Finance</a></li>
            <li><a href="#"><FaVideo />Movies/Music</a></li>
        </ul>
    </section>
      </main>
      <hr />
      <nav className="tab_bar">
        <Tabbar />
      </nav>
    </>
  )
}

export default More