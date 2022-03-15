import React from 'react';

import './styles.css';

const TwitterComments = () => {
  return (
    <div>
      <section id="twitter">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <div className="twitter-o-icon text-center">
                  <i className="fa fa-twitter-square"></i>
                  <h4>Por que contratar nossa empresa?</h4>
                </div>
                <div id="twitter-carousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="item active wow fadeIn" data-wow-duration="1500ms" data-wow-delay="300ms">
                      <blockquote>Introducing Shortcode generator for Helix V2 based templates <a href="/"><span>#helixframework #joomla</span></a></blockquote>
                    </div>
                    <div className="item">
                      <blockquote>Introducing Shortcode generator for Helix V2 based templates <a href="/"><span>#helixframework #joomla</span></a></blockquote>
                    </div>
                  </div>                        
                </div>                    
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TwitterComments;