import React from 'react';
import './styles.css';

const WelcomeCarousel = () => {
  return (
    <>
      <div id="home-slider" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="item active" style={{ backgroundImage: "url(img/slider/1.png)" }}>
          <div class="caption">
            <h1 class="animated fadeInLeftBig">Bem-Vindo a <span>Eximio</span></h1>
            <p class="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
          </div>
        </div>
        <div class="item" style={{ backgroundImage: "url(img/slider/2.png)" }}>
          <div class="caption">
            <h1 class="animated fadeInLeftBig">Say Hello to <span>Oxygen</span></h1>
            <p class="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
          </div>
        </div>
        <div class="item" style={{ backgroundImage: "url(img/slider/3.png)" }}>
          <div class="caption">
            <h1 class="animated fadeInLeftBig">We are <span>Creative</span></h1>
            <p class="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
          </div>
        </div>
      </div>
      <a class="left-control" href="#home-slider" data-slide="prev"><i class="fa fa-angle-left"></i></a>
      <a class="right-control" href="#home-slider" data-slide="next"><i class="fa fa-angle-right"></i></a>

      <a id="tohash" href="#services"><i class="fa fa-angle-down"></i></a>

    </div>
    </>
  )
}

export default WelcomeCarousel;
