import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import{ init, sendForm } from '@emailjs/browser';

import './styles.css';

init(process.env.REACT_APP_EMAILJS_ID);

const Form = () => {
  
  const { register, handleSubmit } = useForm();
  const [contactNumber, setContactNumber] = useState("000000");
  const [notifyMessage, setNotifyMessage] = useState("");
  const [notifyMessageClass, setNotifyMessageClass] = useState("");
  const [iconMessage, setIconMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    const form = document.querySelector('#contact-form');

    generateContactNumber();
    setIsLoading(true);
    
    setTimeout(() => {
      console.log(data);

      sendForm('default_service', process.env.REACT_APP_EMAILJS_TEMPLATE_ID, '#contact-form')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          setNotifyMessage("Obrigado por entrar em contato conosco!");
          setNotifyMessageClass("text-success");
          setIconMessage("fa fa-check");
          form.reset();
        }, function(error) {
          console.log('FAILED...', error);
          setNotifyMessage("Erro ao enviar dados!" + error.text);
          setNotifyMessageClass("text-danger");
          setIconMessage("fa fa-exclamation-circle");
        });

        setIsLoading(false);
      }, 3000);

  }
  

  return (
    <>
    {isLoading ? (
      <p><i className="fa fa-spinner fa-spin"></i> Email is sending...</p>
    ) : (
      <p className={notifyMessageClass}><i className={iconMessage}></i> <b>{notifyMessage ? notifyMessage : ""}</b></p>
    )
    }

    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
        <div className="col-sm-6">
          <div className="form-group">
            <input type="text" {...register("name", {required: true, maxLength: 45})} className="form-control" placeholder="Nome..." />
            <input type="hidden" name="contact_number" value={contactNumber} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input type="email" {...register("email", {required: true})} className="form-control" placeholder="Endereço de E-mail..." />
          </div>
        </div>
      </div>
      <div className="form-group">
        <input type="text" {...register("subject", {required: true, maxLength: 60})} className="form-control" placeholder="Assunto.." />
      </div>
      <div className="form-group">
        <textarea {...register("message", {required: true, maxLength: 350})} id="message" className="form-control" rows="4" placeholder="Digite sua mensagem..."></textarea>
      </div>                        
      <div className="form-group">
        <input type="submit" value="Enviar" className="btn-submit" />
      </div>
    </form>
    </>
  )
}

export default Form;