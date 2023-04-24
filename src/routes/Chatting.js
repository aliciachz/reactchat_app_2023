import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Statusbar from 'components/Statusbar';
import friendsData from 'data/friendsData.json';
import { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from 'fbase'; 
import { FaMicrophone, FaPlus } from 'react-icons/fa';
import { FiSmile } from 'react-icons/fi';
import { IoSend } from 'react-icons/io5';
import { MdEdit, MdDelete } from 'react-icons/md';
import { deleteObject, ref } from 'firebase/storage';
import { AiOutlineLeft, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import 'styles/Chatting.scss';

function Chatting({ id, friendId }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [editing, setEditing] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(null);


  const friend = useMemo(() => {
    return friendsData.find((f) => f.id === friendId);
  }, [friendId]);

  const goBackToChat = () => {
    navigate('/chat');
  };

  const onChange = (e) => {
    e.preventDefault();
    const { target: { value } } = e;
    setMessage(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (editing) {
      try {
        const newMessageRef = doc(db, "messages", editingMessageId);
        await updateDoc(newMessageRef, {
          text: message,
          createdAt: Date.now(),
        });
  
        setEditing(false);
        setEditingMessageId(null);
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    } else {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          text: message,
          createdAt: Date.now(),
          friendId: friendId,
          imageURL: "",
        });
  
        let imageURLInStorage = "";
        if (imageFile) {
          const storageRef = storage.ref();
          const fileRef = storageRef.child(`images/${docRef.id}`);
          await fileRef.put(imageFile);
          imageURLInStorage = await fileRef.getDownloadURL();
          console.log("Image uploaded successfully");
  
          await updateDoc(doc(db, "messages", docRef.id), {
            imageURL: imageURLInStorage,
          });
        }
  
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  
    setMessage("");
    setImageFile(null);
    setImageURL("");
  };
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageURL(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageURL("");
    }
  };

  useEffect(() => {
    const q = query(collection(db, "messages"), 
              orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        newArray.push({...doc.data(), id:doc.id });
      });
      console.log("Fetched messages:", newArray);
      setMessages(newArray);
    });
  }, []);
  
  const handleFileUploadClick = () => {
    document.getElementById("fileUpload").click();
  };

  const editMessage = (id, text, imageURL) => {
    setMessage(text);
    setEditing(true);
    setEditingMessageId(id);
    setImageFile(null);
    setImageURL(imageURL);
  };
  
  const deleteMessage = async (messageId, imageMessageURL) => {
    const ok = window.confirm("삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(doc(db, "messages", messageId));
      if (imageMessageURL !== "") {
        const storageRef = ref(storage);
        const imageRef = storageRef.child(`images/${messageId}`);
        await deleteObject(imageRef);
      }
    }
  };
  
  
  return (
    <>
    <header>
        <Statusbar />
        <div>
          <div className="title_bar">
          <h1>{friend.name}</h1>
            <div className="left_item"><AiOutlineLeft onClick={goBackToChat}/></div>
            <div className="right_item"><a href="#"><AiOutlineSearch /><AiOutlineMenu /></a></div>
          </div>
        </div>
      </header>
      <hr />

      {/* 눈 */}
      <div className='section'>
        {Array(100).fill().map((_, i) => (
          <div key={i} className='b'></div>
        ))}

        <span className="date_info">Thursday,March23, 2023</span>
          <div className="chat_box my">
          <span className="chat">Hello!</span>
          <span className="chat">Hello! This is a test message. Hello! this is a test message. Hello! this is a test message.</span>
          <span className="chat">This is a test message.</span>
          <span className="chat_time"><span>11</span>:<span>00</span></span>
          </div>

        <div className="chat_box other">
        <div className="other_info">
        <span className="profile_img">{friend.imageUrl}</span>
          <span className="profile_name">{friend.name}</span>
        </div>
          <span className="chat">And this is an answer</span>
          <span className="chat">And this is an answer And this is an answer</span>
          <span className="chat">And this is an answer</span>
          <span className="chat_time"><span>17</span>:<span>33</span></span>
        </div>

        {/* 새로운 챗팅 */}
        <div className="chat_box my">

        {messages.map((msg) => (
            msg.friendId === friendId && (
              <div key={msg.id} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                  <MdEdit onClick={() => editMessage(msg.id, msg.text, msg.imageURL)} style={{ marginRight: '5px', color: '#fff', opacity: '0.7' }} />
                  <MdDelete onClick={() => deleteMessage(msg.id, msg.imageURL)} style={{ color: '#fff', opacity: '0.7' }} />
                </div>
                <span className="chat">
                  {msg.text}
                  {msg.imageURL && (
                    <div>
                      <img src={msg.imageURL} alt="Message" style={{ maxWidth: '100%' }} />
                    </div>
                  )}
                </span>
              </div>
            )
          ))}
        {imageURL && (
          <span className="chat">
            <img src={imageURL} alt="Selected" style={{ maxWidth: '100%'}} />
          </span>
        )}
      </div>
      </div>

      <hr />
      <footer>
      <span className="plus_btn">
      <a href="#" onClick={handleFileUploadClick}>
      <FaPlus />
      <input
        type="file"
        id="fileUpload"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      </a>
      </span>
      <form onSubmit={onSubmit}>
      <fieldset className="text_box">
      <legend className="blind">채팅 입력창</legend>
      <label htmlFor="chatting" className="blind">
      채팅입력
      </label>
      <input
        type="text"
        id="chatting"
        className="text_field"
        placeholder="Type something..."
        value={message} 
        onChange={onChange}
      />

      <button type="submit" style={{ background: 'none', border: 'none' }}>
        {editing ? (
          <span>Edit</span>
        ) : message ? (
          <IoSend />
        ) : (
          <FaMicrophone />
        )}
      </button>

      <span className="emoticon_btn">
      <a href="#">
      <FiSmile />
      </a>
      </span>
      </fieldset>
      </form>
      </footer>
    </>
  )
}

export default Chatting;
