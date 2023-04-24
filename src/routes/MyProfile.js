import React, { useEffect, useState } from 'react';
import { FaTimes, FaUser, FaImages, FaCamera } from 'react-icons/fa';
import 'firebase/database';
import 'styles/MyProfile.scss';
import Statusbar from 'components/Statusbar';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '@firebase/auth';
import pencilIcon from '../images/pencil.gif';
import saveIcon from '../images/user.gif';
import chat from '../images/chat.gif';

function MyProfile({ userObj }) {
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj ? userObj.displayName : '');
  const displayName = userObj ? (userObj.displayName || userObj.email.split('@')[0]) : '';

  const [backgroundImage, setBackgroundImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [showEditIcons, setShowEditIcons] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const goBackToHome = () => {
    navigate('/');
  };

  const handleEditProfileClick = () => {
    setShowEditIcons(!showEditIcons);
    setEditMode(!editMode);
  }

  const onNameChange = (e) => {
    const {target : {value}} = e;
    setNewDisplayName(value);
  }

  const handleUpdateBackground = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setBackgroundImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfileImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }


  useEffect(() => {
    localStorage.setItem('backgroundImage', backgroundImage);
  }, [backgroundImage]);
  const savedBackgroundImage = localStorage.getItem('backgroundImage');
  useEffect(() => {
    setBackgroundImage(savedBackgroundImage);
  }, []);


  useEffect(() => {
    localStorage.setItem('profileImage', profileImage);
  }, [profileImage]);
  const savedProfileImage = localStorage.getItem('profileImage');
  useEffect(() => {
    setProfileImage(savedProfileImage);
  }, []);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName){
      await updateProfile(userObj,{
        displayName:newDisplayName,
        // photoURL:,
      })
    }
  }

  return (
    <>
      <header>
        <Statusbar />
        <div>
          <div className="title_bar">
            <h1 className="blind">My Profile</h1>
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

    {/* 배경이미지 */}
      <section 
        className="background" 
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : '' }}
      >
        <h2 className="blind">My Profile background image</h2>

        {showEditIcons && ( 
            <div className="edit_background">
              <label htmlFor="background_input" className="edit_label">
                <FaImages />
              </label>
              <input className='file blind'
                type="file"
                id="background_input"
                accept="image/*"
                onChange={handleUpdateBackground}
              />
            </div>
          )}
      </section>

      {/* 프로파일이미지 */}
        <section className="profile my_profile">
          <h2 className="blind">My profile info</h2>
          <div
            className="profile_img empty"
            style={{ backgroundImage: profileImage ? `url(${profileImage})` : '' }}
          ></div>

      {showEditIcons && ( 
        <div className='edit_profile'>
          <label htmlFor='profile_input' className='edit_label'>
            <FaCamera className='camera' />
          </label>
          <input className='file blind' 
          type='file'
          id='profile_input'
          accept='image/*'
          onChange={handleUpdateProfile}
          />
        </div>
      )}
          <div className="profile_cont">
          <form onSubmit={onSubmit} className="profileForm">
              <input
                type="text"
                onChange={onNameChange}
                value={newDisplayName}
                placeholder={displayName}
                className="formInput"
              />
              <input
                type="email"
                value={userObj.email}
                className="profile_email"
                placeholder={userObj.email}
              />

            <ul className="profile_menu">
              <li>
                <a href="#">
                  <span className="icon">
                  <img src={chat} alt="chat" />
                  </span>
                  My Chatroom
                </a>
              </li>
              <li>
              <a href="#" onClick={handleEditProfileClick}>
                  <span className="icon">
                  {editMode ? <img src={saveIcon} alt="Pencil" /> : <img src={pencilIcon} alt="Pencil" />}
                  </span>
                  {editMode ? "Save Profile" : "Edit profile"}
                </a>
              </li>
              <input type="submit" value="Update Profile" className="formBtn blind" />
            </ul>
            </form>
          </div>
        </section>
      </main>
      <hr />
    </>
  );
}

export default MyProfile;
