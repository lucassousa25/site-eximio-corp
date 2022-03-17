import React from 'react';

import './styles.css';

const Footer = () => {
  return (

    <div>
      <footer id="footer">
        <div className="footer-top wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
          <div className="container text-center">
            <div className="footer-logo">
              <a href="index.html"><img className="img-responsive" src="img/logo-eximio.png" alt="Logo Eximio" /></a>
            </div>
            <div className="social-icons">
              <ul>
                <li><a className="envelope" href="/"><i className="fa fa-envelope"></i></a></li>
                <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li> 
                <li><a className="dribbble" href="/"><i className="fa fa-dribbble"></i></a></li>
                <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
                <li><a className="tumblr" href="/"><i className="fa fa-tumblr-square"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p>&copy; Eximio Solutions Jr.</p>
              </div>
              <div className="col-sm-6">
                <p className="pull-right">Desenvolvido por <a href="https://www.linkedin.com/in/lucassoliv/" target="_blank" rel="noreferrer">Lucas Oliveira</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;