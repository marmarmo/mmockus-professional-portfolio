import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import marmologo from "../assets/images/Logos/marmologo.png";
import "./Styles/Header.css";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { ImMail4 } from "react-icons/im";

export default function NavBar({ activeLink, setActiveLink }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      // className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand to="/">
          <img src={marmologo} alt="logo" width={100} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-link">
            <Link className="navLink d-flex justify-content-center" to="/">Home</Link>
            <Link className="navLink d-flex justify-content-center" to="/Profile">Profile</Link>
            <Link className="navLink d-flex justify-content-center" to="/Portfolio">Portfolio</Link>
            <Link className="navLink d-flex justify-content-center" to="/Skills">Skills</Link>
            <Link className="navLink d-flex justify-content-center" to="/ArtWork">Art</Link>
            <Link className="navLink d-flex justify-content-center" to="/PodCast">Podcast</Link>
            <Link className="navLink d-flex justify-content-center" to="/Resume">Resume</Link>
          </Nav>

          <div className="social-icons d-flex justify-content-center">
            <a title="LinkedIn" href="https://www.linkedin.com/in/marlamockus/">
              <TiSocialLinkedinCircular size={65} color="grey" />
            </a>
            <a className= "email" title="Email" href="mailto:marlamockus@gmail.com">
              <ImMail4 size={50} color="grey" />
            </a>
            <a title="GitHub" href="https://github.com/MMockus15">
              <TiSocialGithubCircular size={65} color="grey" />
            </a>
          </div>
          <span className="navbar-text d-flex justify-content-center">
            <a href="/Contact">
              <button
                className="vvd"
                onClick={() => onUpdateActiveLink("connect")}
              >
                Let's Connect
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}