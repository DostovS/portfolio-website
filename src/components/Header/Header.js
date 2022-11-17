import React, {useState,useEffect} from 'react';
import './Header.scss';
import { Link,NavLink } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

function Header({toggleHandler,toggle}) {
  const [letterClass, setLetterClass] = useState('text-animate')

  const logoArray = 
    ['S','o','h','i','b','j','o','n','.','u','z'];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <header className='flex'>
      <div className="container flex">
        <div className="site-logo">
          <Link to=''>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={logoArray}
              idx={10}
            />
          </Link>
        </div>
         <nav className={toggle ? "open" : "close"}>
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
        <div className="hamburger"
          onClick={toggleHandler}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;