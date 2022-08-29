import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/logo.jpg'
import './Nav.css'


function Nav(){
    return (
<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="logoContainer d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img className='logo' src={logo} alt='logo'/>
        </a>

        <div class="navContainer">
          <button  class="btn nav-link px-2 text-white">Home</button>
          <button  class="btn nav-link px-2 text-white">Sobre Nosotros</button>
          <button  class="btn nav-link px-2 text-white">Nuestros trabajos</button>
          <button  class="btn nav-link px-2 text-white">Contacto</button>
        </div>


      </div>
    )
}
export default Nav;