import React from "react";
import './Home.scss';
import headerImg from "../../assets/images/header-img.svg";
export default function Home() {

  return (
    <main>
      <div className="container flex">
        <div className="home-content">
          <h1>
            Hi! I'm Sohibjon
          </h1>
          <p>
            I'm Frontend developer <br />
            Welcome to my web site!
          </p>
        </div>
        <div className="home-img">
          <img src={headerImg} alt="" />
        </div>        
      </div>
      
    </main>
  )
}