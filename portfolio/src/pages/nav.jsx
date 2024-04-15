import React from "react";
import '../App.css';

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
                <li>Home</li>
                <li>About</li>
                <li>Research</li>
                <li>Projects</li>
            </ul>
        </div>
        </div>
    );
}
export default Nav;