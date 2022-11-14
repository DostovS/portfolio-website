import { useState, useEffect } from "react";
import headerImg from "../../assets/images/header-img.svg";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Home.scss';
export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 
    ['H','i',' ',"I'",'m',' ', 'S','o','k','h','i','b','j','o','n']
  const jobArray = [
    'F','r','o','n','t','e','n','d',' ', 'D','e','v','e','l','o','p','e','r'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <main>
      <div className="container flex">
        <div className="home-content">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />            
          </p>
        </div>
        <div className="home-img">
          <img src={headerImg} alt="" />
        </div>        
      </div>
      
    </main>
  )
}