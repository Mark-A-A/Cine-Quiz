import React from 'react';

import { FaRegCopyright } from 'react-icons/fa';
import { QuizCarousel } from './QuizCarousel'

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg" /><FaRegCopyright/> CineQuiz</h1>
      <QuizCarousel/>
      <p>Created by Mark A.</p>
    </div>
  );
}

export default App;
