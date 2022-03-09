import React from 'react';
import NavBar from '../../components/navbar';
import WelcomeCarousel from '../../components/welcome-carousel';

import './styles.css';

const Header = () => {

  return ( 
    <header id="home">
      <WelcomeCarousel />
      <NavBar />
    </header>
  )
}

export default Header;
