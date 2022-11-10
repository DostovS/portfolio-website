import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [toggle, setToggle] = useState(false);
  const body = document.querySelector('#root');
  const toggleClass = () => {
    setToggle(!toggle);
    body.classList.toggle("dark");
    };
    
  return (
    <div>
      <Header toggleClass={toggleClass} toggle={toggle}/>
      <section className="container">
        <Main />
        <Footer />
      </section>
    </div>
  );
}

export default App;
