import React from 'react';
import './styles.css';

const WelcomeCarousel = () => {
  return (
    <>
      <div id="home-slider" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="item active" style={{ backgroundImage: "url(img/slider/1.png)" }}>
          <div className="caption">
            <h1 className="animated fadeInLeftBig">Bem-Vindo a <span>Eximio</span></h1>
            <p className="animated fadeInRightBig">Empresa Jr. - Tecnologia - Criatividade - Aplicação</p>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(img/slider/2.png)" }}>
          <div className="caption">
            <h1 className="animated fadeInLeftBig">Bem-Vindo a <span>Eximio</span></h1>
            <p className="animated fadeInRightBig">Empresa Jr. - Tecnologia - Criatividade - Aplicação</p>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: "url(img/slider/3.png)" }}>
          <div className="caption">
            <h1 className="animated fadeInLeftBig">Bem-Vindo a <span>Eximio</span></h1>
            <p className="animated fadeInRightBig">Empresa Jr. - Tecnologia - Criatividade - Aplicação</p>
          </div>
        </div>
      </div>
      <a className="left-control" href="#home-slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
      <a className="right-control" href="#home-slider" data-slide="next"><i className="fa fa-angle-right"></i></a>

      <a id="tohash" href="#services"><i className="fa fa-angle-down"></i></a>
    </div>
    </>
  )
}

export default WelcomeCarousel;
