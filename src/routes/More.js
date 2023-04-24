import React from 'react'
import Statusbar from '../components/Statusbar';
import Tabbar from '../components/Tabbar';
import '../styles/More.scss';

function More() {
  return (
    <>
      <header>
        <div>
        <div class="title_bar">
            <h1>More</h1>
            <div class="left_item"></div>
            <div class="right_item"><a href="#"><i class="fa-solid fa-gear"></i></a></div>
        </div>
        </div>
      </header>
      <hr />
      <main>
      <section class="user_info">
        <h2 class="blind">사용자 정보</h2>
        <span class="profile_img empty"></span>
        <span class="profile_info">
            <span class="profile_name">My Name</span>
            <span class="profile_email">Userid@gmail.com</span>
        </span>
        <span class="chat_img"><a href="#"><i class="fa-regular fa-comment"></i></a></span>
      </section>
      <section class="user_menu">
        <h2 class="blind">사용자 메뉴</h2>
        <ul>
            <li><a href="#"><i class="fa-regular fa-face-smile"></i>Emoticons</a></li>
            <li><a href="#"><i class="fa-solid fa-paintbrush"></i>Themes</a></li>
            <li><a href="#"><i class="fa-regular fa-hand-peace"></i>Plus Friend</a></li>
            <li><a href="#"><i class="fa-solid fa-circle-user"></i>Account</a></li>
        </ul>
      </section>
      <section class="plus_friends">
        <header>
            <h2>Plus Friends</h2>
            <span><i class="fas fa-info-circle"></i>Learn More</span>
        </header>
        <ul class="plus_list">
            <li><a href="#"><i class="fa-solid fa-utensils"></i>Order</a></li>
            <li><a href="#"><i class="fa-solid fa-house-chimney"></i>Store</a></li>
            <li><a href="#"><i class="fa-solid fa-tv"></i>Creation</a></li>
            <li><a href="#"><i class="fa-solid fa-pencil"></i>Education</a></li>
            <li><a href="#"><i class="fa-solid fa-buliding-columns"></i>Politics/Society</a></li>
            <li><a href="#"><i class="fa-solid fa-won-sign"></i>Finance</a></li>
            <li><a href="#"><i class="fa-solid fa-video"></i>Movies/Music</a></li>
        </ul>
    </section>
    <section class="more_app">
        <h2 class="blind">앱 더보기</h2>
        <ul>
            <li><a href="#"><span class="app_icon"></span>Kakao Story</a></li>
            <li><a href="#"><span class="app_icon"></span>Path</a></li>
            <li><a href="#"><span class="app_icon"></span>Kakao friends</a></li>
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