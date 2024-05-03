import React from "react";
import '../App.css';
import '../App.js';
import '../index.js';
import { Link } from 'react-router-dom';


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
               <Link to ="/"> <li>Home</li></Link>
               <Link to ="/about"> <li>About</li></Link>
               <Link to ="/projects"> <li>Projects</li></Link>
               
                {/* <li>Research</li> */}
                {/* <li>Projects</li> */}
            </ul>
        </div>
        </div>
    );
}
export default Nav;