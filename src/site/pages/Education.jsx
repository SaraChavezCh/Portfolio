import React from 'react';
import "../../css/pages/education.css";
import academlo from "../../assets/img/academlo.png";
import udg from "../../assets/img/udg.png";
import uvm from "../../assets/img/uvm.jpg";
import via from "../../assets/img/VIA.jpg";

export const Education = () => {
  return (
    <div className="education__container_bg">
      <header className="section-separation">
        <h1 className="heading__primary">Education</h1>
      </header>

      <main className="section-separation">
        <div className="about__values ">

          <div className="value ">
            <div className="value__text">
              <h2 className="value__heading">Academlo</h2>
              <p>Front-end Developer Jr.</p>
              <i>2022</i>
              <div className="value__imageBox prueba">
                <img
                  src={academlo}
                  alt="bootcamp logo"
                  className="value__image"
                />
              </div>
            </div>
          </div>

          <div className="value ">
            <div className="value__text">
              <h2 className="value__heading">
                Universidad del Valle de México
              </h2>
              <p>Master Degree: Education.</p>
              <i>2021</i>
              <div className="value__imageBox prueba">
                <img src={uvm} alt="university logo" className="value__image" />
              </div>
            </div>
          </div>

          <div className="value">
            <div className="value__text">
              <div className="value__imageBox prueba">
                <img src={via} alt="englis school logo" className="value__image" />
              </div>
              <h2 className="value__heading">English </h2>
              <p>Level: B2 advanced</p>
              <i>2019</i>
            </div>
          </div>

          <div className="value ">
            <div className="value__text ">
              <h2 className="value__heading">Universidad de Guadalajara</h2>
              <p>Bachelor´s degree: </p>
              <strong>Civil Engineering</strong>
              <i>2017</i>
              <div className="value__imageBox prueba">
                <img src={udg} alt="university logo" className="value__image" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
