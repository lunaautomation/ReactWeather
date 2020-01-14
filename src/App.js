import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCard from './WeatherCard';
import APIresult from './api.js';
const items = [{day:"Mon", image:"sun"},{day:"Tue", image:"rain"}]

function App() {
   
  return (
    <div className="App">
      <APIresult/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {items.map(thing =>(<WeatherCard className="App-logo" day={thing.day}image={thing.image}></WeatherCard>))}
      </header>
    </div>
  );
}

export default App;
