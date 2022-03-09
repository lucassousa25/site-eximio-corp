import React from 'react';
import ServiceCell from '../../components/servicecell';

import './styles.css';

const InfoServices = () => {

  return (
    <section id="services">
    <div class="container">
      <div class="heading wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
        <div class="row">
          <div class="text-center col-sm-8 col-sm-offset-2">
            <h2>Serviços</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
          </div>
        </div> 
      </div>
      <div class="text-center our-services">
        <div class="row">
          <ServiceCell 
            title="Brand Identity"
            icon="fa fa-flag"
            animate="fadeInDown"
            delay="300ms"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </ServiceCell>
          <ServiceCell 
            title="Creative Idea"
            icon="fa fa-umbrella"
            animate="fadeInDown"
            delay="450ms"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </ServiceCell>
          <ServiceCell 
            title="Cloud Service"
            icon="fa fa-cloud"
            animate="fadeInDown"
            delay="550ms"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </ServiceCell>
          <ServiceCell 
            title="Professional Design"
            icon="fa fa-coffee"
            animate="fadeInUp"
            delay="650ms"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </ServiceCell>
          <ServiceCell 
            title="App Development"
            icon="fa fa-android"
            animate="fadeInUp"
            delay="750ms"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </ServiceCell>
          <ServiceCell 
            title="Clean Code"
            icon="fa fa-code"
            animate="fadeInUp"
            delay="850ms"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </ServiceCell>
        </div>
      </div>
    </div>
    </section>

  )
}

export default InfoServices;
