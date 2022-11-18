import React from "react";
import { SocialMediaList } from "../components";
import hero from "../../assets/img/perfil.png";
import logo from "../../assets/img/logosn.png";
import "../../css/pages/home.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


export const Home = () => {
  const translate = useSelector(state => state.translate);

   
  return (
    <div className="home">
      <section className="hero__grid">
        <div className="hero__information">
          <h1 className="heading__primary"> Sara Chávez</h1>
          <p className="heading__secondary">Front-end Developer Jr.</p>

          <button href={"/contacto"} className="btn btn__center">
            {" "}
            { translate ? 'Saludar' : 'Contact'}
            <Link
              className="btn__box"
              onClick={() => window.scrollTo(0, 0)}
              to="/contacto"
            ></Link>
          </button>
        </div>

        <div className="hero__image">
          <img src={hero} alt="Hero image" />
        </div>
      </section>

      <section className="description">
        <h2 className="description__title">
        { translate ? 'Quien soy:' : 'Who I am:'}
        </h2>
        <div className="description__grid">
          <div className="description__image">
            <img src={logo} alt="Logo" />
          </div>

          <div className="description__text">
            <p>
            { translate ? 'Me considero una persona organizada, responsable y comprometida con lo que sea que me proponga. Me gusta compartir mi conocimiento con los demas y a su vez aprender de ellos, siempre busco incrementar mis competencias laborales y profesionales. Quiero trabajar con personas que constantemente me motiven a seguir creciendo y fungan como guia  y apoyo hacia mi persona ya que yo me comprometeré a ser lo mismo para ellos' : 'I consider myself organized, responsible and committed to what I propose. I like to share my knowledge with others and learn from them, Im always looking to increase my job and personal competencies. I want to work at a company who guie, promove and care my profesional develoment because I'}
               
            </p>
          </div>
        </div>
      </section>

      <section className="social ">
       
          <h2 className="heading__secondary">{ translate ? 'Redes Sociales' : 'Social Media'}</h2>
          <SocialMediaList />
      </section> 
    </div>
  );
};
