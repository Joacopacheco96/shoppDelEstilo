import React from 'react'

import imgHero from '../Images/imgHero.png'
import './Hero.css'


const Hero = () => {
  return (
    <div class='dark'>

<div class="dark container col-xxl-8 px-4 py-5">
    <div class="dark row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class=" dark imgHero col-10 col-sm-8 col-lg-6">
        <img src={imgHero} class="imgHero d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500"/>
      </div>
      <div class="dark col-lg-6">
        <h1 class="dark display-5 fw-bold lh-1 mb-3">Sobre Nosotros</h1>
        <p class="dark lead">Somos Shopping del estilo, dia a dia tenemos las ultimas tendencias entorno al cuidado del cabello y estetica femenina y masculina, pero sin descuidar de que tu visita sea un momento de relax y tranquilidad agradable.</p>
        <div class="dark d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>


    </div>
  )
}

export default Hero;