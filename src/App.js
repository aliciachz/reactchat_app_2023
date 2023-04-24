import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './routes/Home';
import Chat from './routes/Chat';
import Statusbar from './components/Statusbar';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      
      <Chat />

    </BrowserRouter>
  )
}

export default App
