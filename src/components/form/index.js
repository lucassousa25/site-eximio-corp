import React from 'react';

import './styles.css';

const Form = () => {

  return (
    <form id="main-contact-form" name="contact-form" method="post" action="#">
      <div class="row  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
        <div class="col-sm-6">
          <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="Name" required="required" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <input type="email" name="email" class="form-control" placeholder="Email Address" required="required" />
          </div>
        </div>
      </div>
      <div class="form-group">
        <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" />
      </div>
      <div class="form-group">
        <textarea name="message" id="message" class="form-control" rows="4" placeholder="Enter your message" required="required"></textarea>
      </div>                        
      <div class="form-group">
        <button type="submit" class="btn-submit">Send Now</button>
      </div>
    </form>
  )
}

export default Form;