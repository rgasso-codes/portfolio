import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="purple-gradient_text">Rebeca Gasso</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-purple-800': 'text-black'}>
          About
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-purple-800': 'text-black'}>
          Contact
        </NavLink>
        <a href="">Download CV</a>
      </nav>
    </header>
  );
};

export default Navbar;
