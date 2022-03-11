import React from 'react';
import StaffMember from '../../components/staff-member';

import './styles.css';

const Team = () => {
  return (
    <section id="team">
    <div className="container">
      <div className="row">
        <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
          <h2>Equipe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
        </div>
      </div>
      
        <div className="team-members">
          <div id="team-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
             
              <div className="item active wow fadeIn">
                <StaffMember
                  image="img/team/img-padrao.jpg"
                  delay="300ms"
                  name="Jhon Legend"
                  cargo="CTO"
                  description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt"
                />
                <StaffMember
                  image="img/team/girl-people.jpg"
                  delay="400ms"
                  name="Louis Katherine"
                  cargo="Designer"
                  description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt"
                />
                <StaffMember
                  image="img/team/img-padrao.jpg"
                  delay="300ms"
                  name="Jhon Legend"
                  cargo="CTO"
                  description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt"
                />
                <StaffMember
                  image="img/team/girl-people.jpg"
                  delay="400ms"
                  name="Louis Katherine"
                  cargo="Designer"
                  description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt"
                />
              </div>
              <div className="item">
              <StaffMember
                image="img/team/img-padrao.jpg"
                delay="300ms"
                name="Jhon Legend"
                cargo="CTO"
                description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt"
              />
              <StaffMember
                image="img/team/girl-people.jpg"
                delay="400ms"
                name="Louis Katherine"
                cargo="Designer"
                description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt"
              />
              <StaffMember
                image="img/team/img-padrao.jpg"
                delay="300ms"
                name="Jhon Legend"
                cargo="CTO"
                description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt"
              />
              </div>

            </div>              
          </div>
        </div>
    </div>            
    </section>
  )
}

export default Team;