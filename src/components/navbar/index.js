import React from 'react';

import './styles.css';

const NavBar = () => {
  return (
    <>
      <div className="main-nav">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <h1><img className="img-responsive" src="img/logo-eximio.png" alt="logo" /></h1>
          </a>                    
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">                 
            <li className="scroll active"><a href="#home">Página Inicial</a></li>
            <li className="scroll"><a href="#services">Serviços</a></li> 
            <li className="scroll"><a href="#about-us">Sobre</a></li>                     
            <li className="scroll"><a href="#team">Equipe</a></li>
            <li className="scroll"><a href="#contact">Contatos</a></li>       
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar;