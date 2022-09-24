import React from "react";
import Scroll from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/logo.jpg";
import "./Nav.css";

function Nav() {
let Element   = Scroll.Element;
let Link= Scroll.Link;
  return (
    <Element name="Nav" class="flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a
        href="/"
        class="logoContainer align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <img className="logo" src={logo} alt="logo" />
      </a>
      <div class="navContainer">
        <div class="btn nav-link px-2 text-white"><Link
              class="white nav-link p-0"
              activeClass="active"
              className="Nav"
              to="Nav"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link></div>
        <div class="btn nav-link px-2 text-white"><Link
              class="white nav-link p-0"
              activeClass="active"
              className="Hero"
              to="Hero"
              spy={true}
              smooth={true}
              duration={500}
            >
              Sobre Nosotros
            </Link></div>
        <div class="btn nav-link px-2 text-white"><Link
              class="white nav-link p-0"
              activeClass="active"
              className="Album"
              to="Album"
              spy={true}
              smooth={true}
              duration={500}
            >
              Nuestros trabajos
            </Link></div>
        <div class="btn nav-link px-2 text-white"><Link
              class="white nav-link p-0"
              activeClass="active"
              className="Footer"
              to="Footer"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contacto
            </Link></div>
      </div>
    </Element>
  );
}
export default Nav;
