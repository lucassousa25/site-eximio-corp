import React from 'react';

const StaffMember = () => {

  return (
    <div class="col-sm-3">
      <div class="team-member wow" data-wow-duration="1000ms" data-wow-delay="300ms">
        <div class="member-image">
          <img class="img-responsive img-rounded" src="img/team/img-padrao.jpg" alt="Staff Member" />
        </div>
        <div class="member-info">
          <h3>Yuri Corrêa</h3>
          <h4>Presidente</h4>
          <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
        </div>
        <div class="social-icons">
          <ul>
            <li><a class="facebook" href="/"><i class="fa fa-facebook"></i></a></li>
            <li><a class="twitter" href="/"><i class="fa fa-twitter"></i></a></li>
            <li><a class="linkedin" href="/"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StaffMember;