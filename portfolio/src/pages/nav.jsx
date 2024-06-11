import React from "react";
import '../App.css';
import '../App.js';
import '../index.js';
import { Link } from "react-router-dom";
// import About from './pages/about';
// import Home from './pages/home';
// import Projects from './pages/projects';



function Nav(){
    return(
        <div className="nav">
             <div className="logo">
            <img src="me.jpg" alt="mypicture" />
            <p><span className="name">Amoako Heskey</span> 
             <br />
            Software Engineer (ML)</p>
              </div>
        <div className="list">
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to = {'/projects'}>Projects</Link>
              </li>

               
                {/* <li>Research</li> */}
                {/* <li>Projects</li> */}
            </ul>
        </div>
        </div>
    );
}
export default Nav;