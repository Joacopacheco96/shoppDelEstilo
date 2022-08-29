import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'


function Header(){
    return(
      <div class="divContainer px-4 text-center">
        <div class="txtContainer col-lg-6 mx-auto bg-transparent" >
          <h1 class="display-5 fw-bold">Tan Bella como la vida</h1>
          <p class="txtHeader lead mb-4 ">Somos Shopping del estilo, dia a dia tenemos las ultimas tendencias entorno al cuidado del cabello y estetica femenina y masculina, pero sin descuidar de que tu visita sea un momento de relax y tranquilidad agradable.</p>
          <div class="btnContainer d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a type="button" target='_blank' rel='noreferrer' href='https://wa.me/+59898986760?text=Hola,como%20estan!%20me%20interesaria%20agendar%20una%20cita' class="btn btn-light btn-lg px-4 gap-3">Whatsapp </a>
            <button type="button" class="btn btn-secondary btn-lg px-4">Agendate!</button>
            <a type="button" target='_blank' rel='noreferrer' href='https://www.instagram.com/shopping_del_estilo/' class="btn btn-light btn-lg px-4 gap-3">Instagram</a>
          </div>
        </div>
      </div>
    )
}

export default Header;