import './App.css';
import Nav from './Components/Nav/Nav.js';
import Header from './Components/Header/Header.js'
import Hero from './Components/Hero/Hero.jsx'
import Album from './Components/Album/Album.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div className='classContainer'>
    
    <Nav/>
    <Header/>
    <Hero/>
    <Album/>
    <Footer/>
    
    </div>
  );
}

export default App;
