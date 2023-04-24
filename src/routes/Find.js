import React from 'react';
import Statusbar from 'components/Statusbar';
import Tabbar from 'components/Tabbar';
import 'styles/Find.scss';

function Find() {
  return (
    <>
      <header>
        <Statusbar />
        <div>
          <div className="title_bar">
            <h1>
              Find
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
        <ul className="find_method">
          <li><a href="#"><span className='find'></span>Find</a></li>
          <li><a href="#"><span className='qr_code'></span>QR code</a></li>
          <li><a href="#"><span className='shake'></span>Shake</a></li>
          <li><a href="#"><span className='invite'></span>Invite via SNS</a></li>
        </ul>
        <section className="recommend_section">
          <h2>Recommended Friends</h2>
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

export default Find;
