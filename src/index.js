import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Signup } from './components/SignUp'
import { Login } from './components/Login'
import { Notes } from './components/Notes';
import { Note } from './components/Note'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>        
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />}/>
      <Route path='/' element={<Login />} />
      <Route path='/notes' element={<Notes />} />
      <Route path="notes/:id" element={<Note />} />
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
