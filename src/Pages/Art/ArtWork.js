import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ArtWork.css";
import { ceramics } from "./data.js";

export default function artWorks() {
  return (
    <>
      <Carousel
        className="photo-carousel carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        {ceramics.map((ceramic) => (
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={ceramic.imagePath}
              alt={ceramic.alt}
            />
            <Carousel.Caption>
              <h3>{ceramic.title}</h3>
              <p>{ceramic.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
