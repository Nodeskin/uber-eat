import React, {useState} from "react";
import Hamburger from 'hamburger-react'
import {FaUser} from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>

      <div className="Navbar">

       <div className="left-nav">   
        <Hamburger size={25}  toggled={isOpen} toggle={setOpen}/>
          <h1>
            Uber <span className="eat-style">Eats</span>
          </h1>
        </div>

        <div className="right-nav">
          <button className="log-button"><FaUser/>  Log in</button>
          <button className="sign-button">Sign up</button>
        </div>


      </div>

    </div>
  );
};

export default NavBar;
