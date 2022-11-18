import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "../../css/footer.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useSelector} from 'react-redux';


export const Footer = () => {
  const form = useRef();
  const translate = useSelector(state => state.translate);


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
    <Row className="footer m-0 p-2 pb-0 small-5 bg-dark text-white ">
      <div className="footer__grid">
        <Col xs={12} md={6} lg={4}>
          <div className="footer__information">
            <h3 className="footer__heading">{translate ? 'Información:' : 'Information:'}</h3>

            <ul className="footer__list">
              <li className="footer__link">
                Front End Developer
              </li>
              <li className="footer__link">
                Sara Esther Chávez Chávez
              </li>
              <li className="footer__link">
                Puerto Vallarta, Jalisco, México
              </li>
              <li className="footer__link"> Email: <a href="mailto: sarachavez856@gmail.com">sarachavez856@gmail.com</a>
              </li>
             
              <li className="footer__link">
                Whatsapp:{" "}
                <a href="https://wa.me/526142277453?text= " target="_blank">
                  (614) 22 77 453
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <div className="footer__menu">
            <h3 className="footer__heading">{translate ? 'Menú:' : 'Menu:'} </h3>

            <ul className="footer__list">
              <li className="footer__link">
                <Link onClick={() => window.scrollTo(0, 0)} to="/home">
                 { translate ? 'Acerca de mi' : 'About me'}
                </Link>
              </li>
              <li className="footer__link">
                <Link onClick={() => window.scrollTo(0, 0)} to="/technologies">
                {translate ? 'Tecnologías' : 'Technologies'}
                </Link>
              </li>
              <li className="footer__link">
                <Link onClick={() => window.scrollTo(0, 0)} to="/education">
                {translate ? 'Educación' : 'Education'}
                </Link>
              </li>
              <li className="footer__link">
                <Link onClick={() => window.scrollTo(0, 0)} to="/projects">
                {translate ? 'Proyectos' : 'Projects'}
                </Link>
                </li>
                <li className="footer__link">
                  <Link onClick={() => window.scrollTo(0, 0)} to="/contacto">
                  {translate ? 'Contactame' : 'Contact'}
                  </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="mt-3" xs={12} md={6} lg={4}>
          <div className="footer__contact">
            <h3 className="footer__heading">
            {translate ? 'Contáctame:' : 'Contact me:'} 
            </h3>

            <form onSubmit={sendEmail} id="form" href={form} className="footer__form">
              <div className="footer__form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="tucorreo@correo.com" />
              </div>
              <button value="Send Email" id="button" type="onSubmit" className="btn" >
              {translate ? 'Enviar' : 'Send'} 
              </button>
            </form>
          </div>
        </Col>
      </div>

      <p className="footer__copy">Derechos Reservados &copy; 2022</p>
    </Row>
  );
};
