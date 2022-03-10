import React from 'react';

import './styles.css';

const AboutUs = () => {

  return (
    <section id="about-us" class="parallax">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="about-info wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
              <h2>Sobre</h2>
              <p>Fundada em 2017, a Exímio Solutions jr é uma empresa, júnior, formada e gerida exclusivamentos pos estudantes de graduação nos cursos de Engenharia de Produção,Tecnologia de Alimentos e Tecnologia em Análise e Desenvolvimento de Sistemas da Uepa campus XX, localizada em Castanhal - PA. Os membros da empresa trazem consigo, como principais pontos fortes, comprometimento, proatividade, e a busca por melhorias constantes e o diferencial no mercado de trabalho. A empresa fornece ao mercado serviços de qualidade e baixo custo, colocando a satisfação do cliente em primeiro lugar.</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="our-skills wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
            <div class="single-skill wow fadeInDown col-sm-4" data-wow-duration="1000ms" data-wow-delay="300ms">
              <div class="text-center">
              <i class="fa fa-rocket fa-4x"></i>
              <h3>Missão</h3>
              </div>
              <div class="text-center">
                <span class="">Os membros da empresa trazem consigo, como principais pontos fortes, comprometimento, proatividade, e a busca por melhorias constantes e o diferencial no mercado de trabalho.</span>
              </div> 
            </div>
            <div class="single-skill wow fadeInDown col-sm-4" data-wow-duration="1000ms" data-wow-delay="300ms">
              <div class="text-center">
              <i class="fa fa-eye fa-4x"></i>
              <h3>Visão</h3>
              </div>
              <div class="text-center">
                <span class="">Os membros da empresa trazem consigo, como principais pontos fortes, comprometimento, proatividade, e a busca por melhorias constantes e o diferencial no mercado de trabalho.</span>
              </div> 
            </div>
            <div class="single-skill wow fadeInDown col-sm-4" data-wow-duration="1000ms" data-wow-delay="300ms">
              <div class="text-center">
              <i class="fa fa-heart fa-4x"></i>
              <h3>Valores</h3>
              </div>
              <div class="text-center">
                <span class="">Os membros da empresa trazem consigo, como principais pontos fortes, comprometimento, proatividade, e a busca por melhorias constantes e o diferencial no mercado de trabalho.</span>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
