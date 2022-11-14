import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="container flex">
        <div className="site-logo">
          <h1>Sohibjon</h1>
        </div>
        <nav>
          <NavLink to=''>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/portfolio'>
            Portfolio
          </NavLink>
          <NavLink to='/blog'>
            Blog
          </NavLink>
        </nav>        
      </div>
      
    </header>
  );
}

export default Header;