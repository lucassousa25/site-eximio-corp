import React from 'react';

import './styles.css';

const Features = () => {
  
  return (
    <div>
      <section id="features" className="parallax">
        <div className="container">
          <div className="row count">
            <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
              <i className="fa fa-user"></i>
              <h3 className="timer">4000</h3>
              <p>Happy Clients</p>
            </div>
            <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
              <i className="fa fa-desktop"></i>
              <h3 className="timer">200</h3>                    
              <p>Modern Websites</p>
            </div> 
            <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="700ms">
              <i className="fa fa-trophy"></i>
              <h3 className="timer">10</h3>                    
              <p>WINNING AWARDS</p>
            </div> 
            <div className="col-sm-3 col-xs-6 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="900ms">
              <i className="fa fa-comment-o"></i>                    
              <h3>24/7</h3>
              <p>Fast Support</p>
            </div>                 
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features;