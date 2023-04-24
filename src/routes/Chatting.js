import React from 'react'
import Footer from '../components/Footer';
import Statusbar from '../components/Statusbar';
import '../styles/Chatting.scss';

function Chatting() {
  return (
    <>
      <header>
        <div className="status_bar">
          <Statusbar />
        </div>
        <div>
          <div className="title_bar">
          <h1>Friend Name</h1>
            <div class="left_item"><a href="chat.html"><i class="fas fa-angle-left"></i></a></div>
            <div class="right_item"><a href="#"><i class="fa-solid fa-magnifying-glass"></i><i class="fa-solid fa-bars"></i></a></div>
          </div>
        </div>
      </header>
      <hr />
      <main>
        <span className="date_info">Thursday,March23, 2023</span>
          <div className="chat_box my">
          <span class="chat">Hello!</span>
          <span class="chat">Hello! This is a test message. Hello! this is a test message. Hello! this is a test message.</span>
          <span class="chat">This is a test message.</span>
          <span class="chat_time"><span>15</span>:<span>33</span></span>
        </div>
        <div className="chat_box other">
          <div class="other_info">
              <a href="#"><span class="profile_img empty"></span></a>
              <span class="profile_name">Friends Name</span>
          </div>
          <span class="chat">And this is an answer</span>
          <span class="chat">And this is an answer And this is an answer</span>
          <span class="chat">And this is an answer</span>
          <span class="chat_time"><span>17</span>:<span>33</span></span>
        </div>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Chatting