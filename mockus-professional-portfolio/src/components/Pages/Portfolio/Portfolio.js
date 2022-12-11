import React from "react";
import "./Portfolio.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function portfolioCards() {
  return (
    <Row className="g-4 mx-auto cards">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="/images/Portfolio/gopher-a-friend.png" />
            <Card.Body>
              <Card.Title>Gopher A Friend</Card.Title>
              <Card.Text>
              Gopher a Friend is a place for kids to discuss their interests with other kids that share those interests. An 8 year old kid who is obsessed with Uzbekistan is unlikely to find another kid that even knows that the country exists let alone wants to talk about it. Gopher a Friend is the place where that kid can find the 10 other kids spread across the country who are also enthralled with Uzbekistan and can talk about it and learn from each other.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="/images/Portfolio/rainbowchaser.png" />
            <Card.Body>
              <Card.Title>Rainbow Chaser</Card.Title>
              <Card.Text>
			  A tracker app made fun! Keep track of rainbows in your area, while finding and pinning them to a map with a custom playlist. For this App we used Mapbox API and Genius API. The user is able to click their location on a map anywhere in the world they are currently viewing a rainbow. The app allows you to track your cordinates and drop a pin when you are viewing a rainbow. It then generates a random Rainbow Kitten Surprise song for you to play as a rainbow spotting prize!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="/images/Portfolio/e-commerce.png" />
            <Card.Body>
              <Card.Title>eCommerce Back-End</Card.Title>
              <Card.Text>
			  This is a backend server database for an eCommerce business website. The database has relational tables that have information on products, categories, and tags. Routes are provided to get, post, put, and delete information on each table. To create this backend erver we used a MySQL database using the MySQL2 and Sequelize packages. I used Insomnia to continually test routes and make sure the backend was working properly.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="/images/Portfolio/mvc.png" />
            <Card.Body>
              <Card.Title>MVC Tech Blog</Card.Title>
              <Card.Text>
			  This project uses the Model-View-Controller (MVC) structure to build a website similar to Wordpress. This is a place where developers can publish blog posts, as well as comment on other blog posts. To begin a User signs up for an account. They are able to then login, go to their dashboard to view all of their blog posts, comment on others blog posts, edit their posts, and delete their posts. This was created with multiple node packages including, espress-handlebars, MySQL2, Sequalize, dotenv, bcrypt, espress-session, and connect-session-sequalize.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

