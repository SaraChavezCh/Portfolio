import React from "react";
import { SocialMediaList } from "../components";
import hero from "../../assets/img/perfil.png";
import logo from "../../assets/img/logosn.png";
import "../../css/pages/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <section className="hero__grid">
        <div className="hero__information">
          <h1 className="heading__primary"> Sara Chávez</h1>
          <p className="heading__secondary">Front-end Developer Jr.</p>

          <button href={"/contacto"} className="btn btn__center">
            {" "}
            Contact
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
          Quien soy:
        </h2>
        <div className="description__grid">
          <div className="description__image">
            <img src={logo} alt="Logo" />
          </div>

          <div className="description__text">
            <p>
              I consider myself organized, responsible and committed to what I
              propose. I like to share my knowledge with others and learn from
              them, I'm always looking to increase my job and personal
              competencies.
            </p>
          </div>
        </div>
      </section>

      <section className="social ">
       
          <h2 className="heading__secondary">Social Media</h2>
          <SocialMediaList />
      </section> 
    </div>
  );
};
