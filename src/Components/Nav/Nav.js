import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Images/logo.jpg'
import './Nav.css'


function Nav(){
    return (
<nav class="black d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    
      <a href="/" class="black d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <img class="d-block mx-auto mb-4" src={Logo} alt="" width="100" height="80"/>
        <span class="black fs-2 fw-bold">Shopping del estilo</span>
      </a>

      <ul class="nav nav-pills">
        <li class="btn nav-item"><a href="#" class="nav-link fw-bold">Nosotros</a></li>
        <li class="btn nav-item"><a href="#" class="nav-link fw-bold">Productos</a></li>
        <li class="btn nav-item"><a href="#" class="nav-link fw-bold">Contactanos</a></li>
        <li class="btn nav-item"><a href="#" class="nav-link fw-bold active" aria-current="page">Home</a></li>
      </ul>
</nav>
    )
}
export default Nav;