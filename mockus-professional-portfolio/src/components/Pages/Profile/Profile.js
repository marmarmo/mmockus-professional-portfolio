import React from "react";
import Card from 'react-bootstrap/Card';
import "./Profile.css";


export default function profilePage() {
  return (
    <>
    <Card className="bg-dark text-white">
      <div>
      <Card.Img  src="/images/Headshot/img1.png" alt="Ceramic Alien" width={100} />
      </div>
      <Card.ImgOverlay>
        <Card.Title style={{fontSize: "100px", fontWeight: "bold"}}>Marla Mockus</Card.Title>
        <Card.Title style={{fontSize: "65px", color: "white"}}>About Me</Card.Title>
        <Card.Text style={{fontSize: "25px"}}>
          Hi! My name is Marla. I am a full stack web developer located in Longmont, CO. My background is in studio art with an emphasis in ceramics. If you want to take a peak at some of my ceramic works, check out my Art page! Music is my happy place and I frequently make playlists that seem to help me navigate life. I also have a podcast called "Mornings with Marla." It's a podcast about how to cultivate more joy in the mundane. I thrive when I am learning an growing both in my personal and professional life. When I am passionate about something I dive in to learn and become an expert in that field. When I am not coding, you can find me in the ceramic studio, practicing guitar, traveling to new countries, and hanging out with my fur babies.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </>
  );
}

