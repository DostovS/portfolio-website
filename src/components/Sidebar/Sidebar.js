import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const body = document.querySelector('#root');
  const toggleClass = () => {
    setToggle(!toggle);
    body.classList.toggle("dark");
    };
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>S</h1>
      </div>
      <i 
        onClick={toggleClass}>
        {toggle ? (
          <FontAwesomeIcon icon={faSun} />
        ) : <FontAwesomeIcon icon={faMoon} />}
      </i>
      <nav>
        <Link to='/home'>
          <FontAwesomeIcon 
            icon={faHome} 
            color="#4d4d4e" />
        </Link>
        <Link to='/about'>
        <FontAwesomeIcon 
          icon={faUser} 
          color="#4d4d4e" />
        </Link>
        <Link to='/portfolio'>
          <FontAwesomeIcon 
            icon={faSuitcase} 
            color="#4d4d4e" />
        </Link>
        <Link to='/contact'>
          <FontAwesomeIcon 
            icon={faEnvelope} 
            color="#4d4d4e" />
        </Link>
      </nav>
      
      <div className='social-links'>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          <a
            href="https://github.com/DostovS"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          <a
            href="https://www.youtube.com/sohibjondostov"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          <a href="skype:live:dostovs" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
      </div>
    </div>
  )
}
