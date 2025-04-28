import { useState } from 'react';
import { Link } from 'react-scroll'; // Importing the Link component from react-scroll
import Navbar from './components/Navbar';
import Home from './components/Home';
import Overview from './components/Overview';
import './App.css';
import Architecture from './components/Architecture';
import Subsystem from './components/subsystem';
import  Testing from './components/testing';
import Demo from './components/Demo';

function App() {
  return (
    <>
      <Navbar />
      
      <div id="home">
        <Home />
      </div>
      
      <div id="overview">
        <Overview />
      </div>

      <div id="architecture">
        <Architecture />
      </div>
      
      <div id="subsystem">
        <Subsystem />
      </div>

      <div id="testing-plan">
        <Testing />
      </div>

      <div id= "demo">
      <Demo/>
      </div>
    </>
  );
}

export default App;
