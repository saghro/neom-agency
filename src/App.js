// src/App.js
import React from 'react';
import HomePage from './components/Home/HomePage';
import './App.css';
import Header from "./components/Header/Header";
import NewsSection from "./components/Main/NewsSection";

function App() {
  return (
      <div className="App">
          <Header/>
        <HomePage />
          <NewsSection />

      </div>
  );
}

export default App;
