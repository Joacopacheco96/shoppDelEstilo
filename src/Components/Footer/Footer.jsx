import React from 'react';

import './Footer.css';

import Facebook from '../Images/facebook.png'
import Instagram from '../Images/instagram.png'


const Footer = () => {
  return (
<footer class="container py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><div  class="nav-link p-0 text-muted">Home</div></li>
          <li class="nav-item mb-2"><div  class="nav-link p-0 text-muted">Features</div></li>
          <li class="nav-item mb-2"><div  class="nav-link p-0 text-muted">Pricing</div></li>
          <li class="nav-item mb-2"><div  class="nav-link p-0 text-muted">FAQs</div></li>
          <li class="nav-item mb-2"><div  class="nav-link p-0 text-muted">About</div></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h3 className='white'>Subscribe to our newsletter</h3>
          <p className='white'>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2022 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><div class="link-dark"><img class="bi" alt='facebook' src={Facebook} width="24" height="24"/></div></li>
        <li class="ms-3"><div class="link-dark"><img class="bi" alt='instagram' src={Instagram} width="24" height="24"/></div></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer