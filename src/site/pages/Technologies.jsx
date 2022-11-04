import React from "react";
import "../../css/pages/technologies.css";
import Card from "react-bootstrap/Card";
import technologies from '../../data/technologies.json'

export const Technologies = () => {
  return (
    <div className="tech__container_bg">
      <h1 className="heading__primary">Technologies</h1>
      <section className="tech__cardContainer">
        {technologies.map((data) => (
          <Card style={{ width: "200px", height:"200px", borderRadius:"50%" }} className=" tech__card mb-4 mt-4" key={data.id}>
            <Card.Img
              style={{ width: "100%", margin: "0 auto"}}
              variant="top"
              src={data.logo}
            />
            <Card.Body>
              <Card.Title className="cardContainer__name">
                {data.name}
              </Card.Title>
              <Card.Title className="cardContainer__name">
                <small className="name">{data.role}</small>
              </Card.Title>
              <Card.Text className="cardContainer__description" style={{ width: "100%" }}>
                {data.description}{" "}
              </Card.Text>
              <strong className="cardContainer__text cardContainer__text-center">
                {data.company}
              </strong>
            </Card.Body>
          </Card>
        ))}
      </section>
      
    </div>
  );
};
