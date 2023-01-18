import React from "react";
import "./Resume.css";
import resume1 from "./resume1.png";
import Card from "react-bootstrap/Card";

export default function Resume() {
  return (
    <Card className="resumeCard mx-auto" style={{ width: "40rem" }}>
      <Card.Title className="resumeTitle">MarMo's Resume</Card.Title>
      <Card.Img variant="top" src={resume1} />
      <Card.Body className="resumeBody">
        <a
          className="d-flex justify-content-center"
          href="https://docs.google.com/document/d/1TDefJ9FoJi418yB2vs2B2zuZKN6Q1hXYLCJAIsO9lzI/edit"
          download
        >
          Download CV
        </a>
      </Card.Body>
    </Card>
  );
}
