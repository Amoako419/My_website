import React from 'react';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Projects from './pages/projects';

function App() {
  return (
    <header className="App-header">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} /> 
        <Route path="/projects" element={<Projects />} />  
        
        </Routes>
      </BrowserRouter>
    </header>
  );
}


export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

