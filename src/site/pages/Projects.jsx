import React from "react";
import projects from "../../data/projects.json";
import Card from "react-bootstrap/Card";
import "../../css/pages/projects.css";
import { useSelector} from 'react-redux';

export const Projects = () => {
  const translate = useSelector(state => state.translate);
  return (
    <div className="projects__container_bg">
      <h1 className="heading__primary ">{ translate ? 'Proyectos' : 'Projects'}</h1>

    <section className="back">
    <span style={{ animationDuration: "1.1s" }}></span>
        <span style={{ animationDuration: "1.2s" }}></span>
        <span style={{ animationDuration: "2.5s" }}></span>
        <span style={{ animationDuration: "1.0s" }}></span>
        <span style={{ animationDuration: "1.4s" }}></span>
        <span style={{ animationDuration: "2.3s" }}></span>
        <span style={{ animationDuration: "1.8s" }}></span>
        <span style={{ animationDuration: "1.6s" }}></span>
        <span style={{ animationDuration: "1.9s" }}></span>
        <span style={{ animationDuration: "2.0s" }}></span>
        <span style={{ animationDuration: "1.8s" }}></span>
        <span style={{ animationDuration: "2.5s" }}></span>
        <span style={{ animationDuration: "2.0s" }}></span>
        <span style={{ animationDuration: "2.2s" }}></span>
        <span style={{ animationDuration: "2.5s" }}></span>
        <span style={{ animationDuration: "1.8s" }}></span>
        <span style={{ animationDuration: "2.1s" }}></span>
        <span style={{ animationDuration: "1.5s" }}></span>
        <span style={{ animationDuration: "1.3s" }}></span>
        <span style={{ animationDuration: "2.6s" }}></span>
        <span style={{ animationDuration: "1.8s" }}></span>
        <span style={{ animationDuration: "1.5s" }}></span>
        <span style={{ animationDuration: "2.0s" }}></span>
        <span style={{ animationDuration: "1.1s" }}></span>
        <span style={{ animationDuration: "1.2s" }}></span>
        <span style={{ animationDuration: "2.5s" }}></span>
        <span style={{ animationDuration: "1.0s" }}></span>
        <span style={{ animationDuration: "1.4s" }}></span>
        <span style={{ animationDuration: "2.3s" }}></span>
        <span style={{ animationDuration: "1.8s" }}></span>
        <span style={{ animationDuration: "1.6s" }}></span>
        <span style={{ animationDuration: "1.1s" }}></span>
        <span style={{ animationDuration: "1.2s" }}></span>
        <span style={{ animationDuration: "2.5s" }}></span>
        <span style={{ animationDuration: "1.0s" }}></span>
        <span style={{ animationDuration: "1.4s" }}></span>
        <span style={{ animationDuration: "2.3s" }}></span>
        <span style={{ animationDuration: "1.8s" }}></span>
        <span style={{ animationDuration: "1.6s" }}></span>

    </section>

    <section className= "principal__container">

 
      {projects.map((data) => (
          <section className="container__projects" key={data.id}>
            <div className=" proj__card ">
              <div className="proj__card__text">
                <a className="center" href={data.url}>
                  <Card.Title className="cardContainer__name">
                    {data.name}
                  </Card.Title>
                </a>
                <Card.Title className="cardContainer__name">
                  <small className="name">{data.company}</small>
                </Card.Title>
                <Card.Subtitle className="card__subtitle">
                  {data.Technologies}
                </Card.Subtitle>
                {translate ? 
                <Card.Text className="cardContainer__description">
                  {data.descriptionEs}{" "}
                </Card.Text> :
                <Card.Text className="cardContainer__description">
                {data.description}{" "}
              </Card.Text>
}

                <Card.Link href={data.url}>{data.url}</Card.Link>
              </div>
            </div>

            <div className="circle__container">
              <Card.Img
                className="circle__container__img"
                variant="top"
                src={data.logo}
                
              />
            </div>
            </section>
        ))}

</section>
    </div>
  );
};
