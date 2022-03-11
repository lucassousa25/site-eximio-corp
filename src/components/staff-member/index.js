import React from 'react';

const StaffMember = ({image, name, cargo, description, fadeDaley}) => {

  return (
    <div className="col-sm-3">
      <div className="team-member wow" data-wow-duration="1000ms" data-wow-delay={fadeDaley}>
        <div className="member-image">
          <img className="img-responsive img-rounded" src={image} alt="Staff Member" style={{height: "300px", width: "300px"}} />
        </div>
        <div className="member-info">
          <h3>{name}</h3>
          <h4>{cargo}</h4>
          <p>{description}</p>
        </div>
        <div className="social-icons">
          <ul>
            <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
            <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StaffMember;