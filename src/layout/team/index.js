import React from 'react';
import StaffMember from '../../components/staff-member';

import './styles.css';

const Team = () => {
  return (
    <section id="team">
    <div class="container">
      <div class="row">
        <div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
          <h2>Equipe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
        </div>
      </div>
      
        <div class="team-members">
          <div id="team-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
             
              <div class="item active wow fadeIn">
                <StaffMember />
                <StaffMember />
                <StaffMember />
                <StaffMember />
              </div>
              <div class="item">
                <StaffMember />
                <StaffMember />
                <StaffMember />
              </div>

            </div>
              
            {/*<a class="team-left-control" href="#team-carousel" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a>
            <a class="team-right-control" href="#team-carousel" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>*/}
              
          </div>
        </div>
    </div>            
  </section>
  )
}

export default Team;