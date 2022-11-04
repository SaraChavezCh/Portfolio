import projects from "../../data/projects.json";
import Card from "react-bootstrap/Card";
import "../../css/pages/projects.css";

export const Projects = () => {
  return (
    <div className="section-separation projects__container_bg">
      <h1 className="heading__primary ">Projects</h1>

      <section className="proj__cardContainer">
        {projects.map((data) => (
          <div className="relative" key={data.id}>
            <div className=" proj__card">
              <div className="proj__card__text">
                <Card.Title className="cardContainer__name">
                  {data.name}
                </Card.Title>
                <Card.Title className="cardContainer__name">
                  <small className="name">{data.company}</small>
                </Card.Title>
                <Card.Subtitle className="card__subtitle">
                  {data.Technologies}
                </Card.Subtitle>
                <Card.Text className="cardContainer__description">
                  {data.description}{" "}
                </Card.Text>
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
          </div>
        ))}
      </section>
    </div>
  );
};
