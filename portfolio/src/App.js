import React from 'react';
import './App.css';
// import About from './pages/about';
import Home from './pages/home';
// import Projects from './pages/projects';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <header className="App-header">
    <Home />
   
    <div id="detail">
    <Outlet />
  </div>
    </header>
  );
}


export default App;



