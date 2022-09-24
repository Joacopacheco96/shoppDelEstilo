import React from "react";
import Scroll from "react-scroll";
import "./Album.css";

const Album = () => {
  let Element = Scroll.Element;

  return (
    <Element name="Album" className="album">
      <div>
        <section class="py-5 text-center container">
          <div class="row">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Algunos de nuestros trabajos</h1>
              <p class="lead text-muted">
                Algunos ejemplos de trabajos realizados en nuestro estudio y que
                hemos compartido en nuestras redes.
              </p>
              <div className="btnContainer2">
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/shopping_del_estilo/"
                  class="btn instagram btn-primary"
                >
                  Nuestro Instagram
                </a>
                <a
                  type="button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://m.facebook.com/shoppingdelestilo"
                  class="btn facebook btn-secondary"
                >
                  Nuestro Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
        <div class="justify-content-center album albumContainer">
<iframe title="ig" src="https://snapwidget.com/embed/1011389" class="justify-content-center iframe snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no"></iframe>          </div>
        </div>
    </Element>
  );
};

export default Album;
