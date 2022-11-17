import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import './App.scss';

function App() {
  const [toggle,setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <Header toggleHandler={toggleHandler} toggle={toggle}/>
      <Home />
      <Footer />
    </>

  );
}

export default App;
