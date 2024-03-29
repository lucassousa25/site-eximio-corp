import React from 'react';
import Form from '../../components/form';
import Map from '../../components/map';

import './styles.css';

const Contact = () => {

  const location = {
    address: 'UEPA Campus XX, Castanhal.',
    lat: -1.280999,
    lng: -47.909718,
  }

  return (
    <section id="contact">
      <div id="contact-us" className="parallax">
        <div className="container">
          <div className="row">
            <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
              <h2>Contate-nos</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
            </div>
          </div>
          <div className="contact-form wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
            <div className="row">
              <div className="col-sm-6">
                <Form />   
              </div>
              <div className="col-sm-6">
                <Map location={location} zoomLevel={17} />
                <div className="contact-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <ul className="address">
                    <li><i className="fa fa-map-marker"></i> <span> Endereço:</span> R. Pedro Porpino da Siva - São José, Castanhal </li>
                    <li><i className="fa fa-phone"></i> <span> Phone:</span> (91) 3721-1231  </li>
                    <li><i className="fa fa-envelope"></i> <span> Email:</span><a href="mailto:someone@yoursite.com"> eximiosolutionsjr@gmail.com</a></li>
                    <li><i className="fa fa-globe"></i> <span> Website:</span> <a href="index.html">www.eximiosolutionsjr.com</a></li>
                  </ul>
                </div>                            
              </div>
            </div>
          </div>
        </div>
      </div>        
    </section>
  )
}

export default Contact;
