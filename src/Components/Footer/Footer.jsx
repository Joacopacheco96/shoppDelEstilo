import React from "react";
import "./Footer.css";
import Facebook from "../Images/facebook.png";
import Instagram from "../Images/instagram.png";
import Scroll from "react-scroll";

const Footer = () => {
  let Link = Scroll.Link;
  let Element= Scroll.Element;

  return (
    <footer class="container py-5">
      <Element name="Footer" class="row">
        <div class="col-6 col-md-2 mb-3">
          <h3 className="white">Section</h3>
          <ul class="nav flex-column">
          <li class="nav-item mb-2">
              <Link
              class="white nav-link p-0"
              activeClass="active"
              className="Nav"
              to="Nav"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
              class="white nav-link p-0"
              activeClass="active"
              className="Hero"
              to="Hero"
              spy={true}
              smooth={true}
              duration={500}
            >
              Nosotros
            </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
              class="white nav-link p-0"
              activeClass="active"
              className="Album"
              to="Album"
              spy={true}
              smooth={true}
              duration={500}
            >
              Nuestro trabajos
            </Link>
            </li>
            <li class="nav-item mb-2">
              <Link
              class="white nav-link p-0"
              activeClass="active"
              className="Album"
              to="Album"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            </li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h3 className="white">Subscribete a nuestras newsletter</h3>
            <p className="white">
              Menusalmente te enviaremos las mejores promociones y descuentos.
            </p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Element>

      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <div class=" d-flex">
          <a
            type="button"
            target="_blank"
            rel="noreferrer"
            href="https://m.facebook.com/shoppingdelestilo"
          >
            <img class="icon " alt="facebook" src={Facebook} />
          </a>
          <a
            type="button"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/shopping_del_estilo/"
          >
            <img class="icon" alt="instagram" src={Instagram} />
          </a>
        </div>
        <p>Shopping del estilo, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
