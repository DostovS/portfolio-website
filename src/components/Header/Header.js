import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function Header({toggleClass, toggle}) {
  return (
    <header>
      <div className="container">
          <div className="logo">
          <h2>SOHIBJON.UZ</h2>
        </div>
        <nav>
          <ul>
            <Link to='/about'>
              About
            </Link>
            <Link to='/blog'>
              Blog
            </Link>
            <Link to='/contact'>
              Contact
            </Link>
          </ul>
        </nav>
        <i 
              onClick={toggleClass}>
              {toggle ? (
                <WbSunnyIcon />
              ) : <Brightness4Icon />}
            </i>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      
    </header>
  )
}
