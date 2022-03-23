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
                      <blockquote>A Eximio Solutions alanvacou os processos e visibilidade da nossa empresa, graças a essa equipe empenhada e com espírito de inovação. <a href="/"><span>#EximioSolutions #EmpresaJr</span></a></blockquote>
                      <p> - Gerente Supersivor da Empresa <span>Insigne Inc.</span> - </p>
                    </div>
                    <div className="item">
                    <blockquote>A Eximio Solutions alanvacou os processos e visibilidade da nossa empresa, graças a essa equipe empenhada e com espírito de inovação. <a href="/"><span>#EximioSolutions #EmpresaJr</span></a></blockquote>
                      <p> - Gerente Supersivor da Empresa <span>Insigne Inc.</span> - </p>
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