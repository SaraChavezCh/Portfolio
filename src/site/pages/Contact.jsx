import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../css/pages/contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5d3an4u', 'template_o9i20ra', e.target, 'GekHIjK3GW9rBETQE')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito')
      }, (error) => {
          console.log(error.text);
          alert(error.message)
      });
      e.target.reset();
  };

  
  return (
    <div className="contact section-separation-contact animation">
      
      <span style={{animationDuration:'1.1s'}}></span>
      <span style={{animationDuration:'1.2s'}}></span>
      <span style={{animationDuration:'2.5s'}}></span>
      <span style={{animationDuration:'1.0s'}}></span>
      <span style={{animationDuration:'1.4s'}}></span>
      <span style={{animationDuration:'2.3s'}}></span>
      <span style={{animationDuration:'1.8s'}}></span>
      <span style={{animationDuration:'1.6s'}}></span>
      <span style={{animationDuration:'1.9s'}}></span>
      <span style={{animationDuration:'2.0s'}}></span>
      <span style={{animationDuration:'1.8s'}}></span>
      <span style={{animationDuration:'2.5s'}}></span>
      <span style={{animationDuration:'2.0s'}}></span>
      <span style={{animationDuration:'2.2s'}}></span>
      <span style={{animationDuration:'2.5s'}}></span>
      <span style={{animationDuration:'1.8s'}}></span>
      <span style={{animationDuration:'2.1s'}}></span>
      <span style={{animationDuration:'1.5s'}}></span>
      <span style={{animationDuration:'1.3s'}}></span>
      <span style={{animationDuration:'2.6s'}}></span>
      <span style={{animationDuration:'1.8s'}}></span>
      <span style={{animationDuration:'1.5s'}}></span>
      <span style={{animationDuration:'2.0s'}}></span>
      <span style={{animationDuration:'1.1s'}}></span>
      <span style={{animationDuration:'1.2s'}}></span>
      <span style={{animationDuration:'2.5s'}}></span>
      <span style={{animationDuration:'1.0s'}}></span>
      <span style={{animationDuration:'1.4s'}}></span>
      <span style={{animationDuration:'2.3s'}}></span>
      <span style={{animationDuration:'1.8s'}}></span>
      <span style={{animationDuration:'1.6s'}}></span>
      <span style={{animationDuration:'1.1s'}}></span>
      <span style={{animationDuration:'1.2s'}}></span>
      <span style={{animationDuration:'2.5s'}}></span>
      <span style={{animationDuration:'1.0s'}}></span>
      <span style={{animationDuration:'1.4s'}}></span>
      <span style={{animationDuration:'2.3s'}}></span>
      <span style={{animationDuration:'1.8s'}}></span>
      <span style={{animationDuration:'1.6s'}}></span>
     
     
    
      
      <div className="over">
      <p className="heading__primary heading__primary-center">
        Contact
      </p>

      <div className="contact__main">
        <section className="contact__mainSection">
          <h1 className="heading__secondary">Send me an email</h1>


          <Form href={form} id="form" onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Full name</Form.Label>
              <Form.Control id="text" name="name" type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="number">Phone</Form.Label>
              <Form.Control id="number" name="number" type="number" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmfor="text">
                Email - text
              </Form.Label>
              <Form.Control id="text" name="text" type="text" />
            </Form.Group>

            <Button  value="Send Email" id="button"  type='submit' className="ms-auto" variant="danger" >
              Enviar
            </Button>
          </Form>
        </section>
      </div>
      </div>
    </div>
  );
};
