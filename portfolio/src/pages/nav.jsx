import React from "react";
import '../App.css';
import '../App.js';
import '../index.js';
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
               {/* <Link to ="/"> <li>Home</li></Link>
               <Link to ="/about"> <li>About</li></Link>
               < to ="/projects"> <li>Projects</li></> */}
               <a href="home.jsx"><li>Home</li></a>
               <a href="about.jsx"><li>About</li></a>
               <a href="projects.jsx"><li>Projects</li></a>
               
                {/* <li>Research</li> */}
                {/* <li>Projects</li> */}
            </ul>
        </div>
        </div>
    );
}
export default Nav;