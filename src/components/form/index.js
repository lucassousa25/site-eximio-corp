import React from 'react';

import './styles.css';

const Form = () => {

  return (
    <form id="main-contact-form" name="contact-form" method="post" action="#">
      <div className="row  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
        <div className="col-sm-6">
          <div className="form-group">
            <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder="Email Address" required="required" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <input type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
      </div>
      <div className="form-group">
        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Enter your message" required="required"></textarea>
      </div>                        
      <div className="form-group">
        <button type="submit" className="btn-submit">Send Now</button>
      </div>
    </form>
  )
}

export default Form;