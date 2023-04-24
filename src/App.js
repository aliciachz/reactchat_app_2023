import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Chat from 'routes/Chat';
import Find from 'routes/Find';
import More from 'routes/More';
import Chatting from 'routes/Chatting';
import Auth from 'routes/Auth';
import 'styles/Auth.scss';
import { authService } from 'fbase';
import MyProfile from 'routes/MyProfile';
import { onAuthStateChanged } from "firebase/auth";
import Loading from 'components/Loading';

function FriendProfile() {
  const { friendId } = useParams();
  return <Profile friendId={friendId} />;
}

function FriendChatting() {
  const { id } = useParams();
  return <Chatting friendId={id} />;
}

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Home userObj={userObj} />} />
                <Route path="/profile/:friendId" element={<FriendProfile />} />
                <Route path='/myprofile' element={<MyProfile userObj={userObj}/>} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chatting/:id" element={<FriendChatting />} />
                <Route path="/find" element={<Find />} />
                <Route path="/more" element={<More userObj={userObj}/>} />
              </>
            ) : (
              <Route path="/" element={<Auth />} />
            )}
          </Routes>
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
