// src/App.js
import React from 'react';
import HomePage from './components/Home/HomePage';
import './App.css';
import Header from "./components/Header/Header";

function App() {
  return (
      <div className="App">
          <Header/>
        <HomePage />
      </div>
  );
}

export default App;
