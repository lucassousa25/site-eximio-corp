import React from 'react';

import './styles.css';

const ServiceCell = ({ title, icon, animate, delay, children }) => {
  return (
    <>
      <div className={"col-sm-4 wow " + animate} data-wow-duration="1000ms" data-wow-delay={delay}>
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <div className="service-info">
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceCell;
