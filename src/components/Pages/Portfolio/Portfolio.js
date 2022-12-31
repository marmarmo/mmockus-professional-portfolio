import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Portfolio.css";
import { projects } from "./data.js";

export default function portfolioCards() {
  return (
    <>
      <Carousel
        className="photo-carousel carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        {projects.map((project) => (
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={project.imagePath}
              alt={project.alt}
            />
            <div>
            <Carousel.Caption>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="projectLinks" href={project.gitHub}><p className= "projectLabel" >GitHub</p>
                </a>
              <a className="projectLinks" href={project.appLink}><p className= "projectLabel" >App</p>
                </a>
            </Carousel.Caption>
          </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

