import React from "react";
import "./Resume.css";
import resume1 from "./resume1.png";
// import resume2 from "./resume2.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Resume() {
	return (
		<Card style={{ width: '40rem' }}>
		<Card.Body>
		  <Card.Title>MarMo Resume</Card.Title>
		<Card.Img variant="top" src = {resume1} />
		  <Card.Text>
			BLUB
		  </Card.Text>
		  <Button >Download</Button>
		</Card.Body>
	  </Card>
	);
}