import React from 'react'
import Statusbar from '../components/Statusbar';
import Tabbar from '../components/Tabbar';
import '../styles/Find.scss';

function Find() {
  return (
    <>
      <header>
      <div>
        <div class="title_bar">
            <h1>Find</h1>
            <div class="left_item"><a href="#">Edit</a></div>
        </div>
      </div>
      </header>
      <hr />
      <main>
        <ul className="find_method">
        <li><a href="#"><i class="fa-solid fa-address-book"></i>Find</a></li>
        <li><a href="#"><i class="fa-solid fa-qrcode"></i>QR code</a></li>
        <li><a href="#"><i class="fa-solid fa-mobile-screen-button"></i>Shake</a></li>
        <li><a href="#"><i class="fa-regular fa-envelope"></i>Invite via SNS</a></li>
        </ul>
        <section className="recommend_section">
        <header><h2>Recommended Friends</h2></header>
        <ul>
            <li>You Have no recommended friends</li>
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

export default Find