import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
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
        <Navbar.Brand href="#home">
          <img src={marmologo} alt="logo" width={100} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="/Profile"
              className={
                activeLink === "profile" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("portfolio")}
            >
              Profile
            </Nav.Link>

            <Nav.Link
              href="/Portfolio"
              className={
                activeLink === "portfolio"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("portfolio")}
            >
              Portfolio
            </Nav.Link>

            <Nav.Link
              href="/Skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="/ArtWork"
              className={
                activeLink === "art" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("art")}
            >
              Art
            </Nav.Link>

            <Nav.Link
              href="/PodCast"
              className={
                activeLink === "podcast" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("podcast")}
            >
              Podcast
            </Nav.Link>
            <Nav.Link
              href="/Resume"
              className={
                activeLink === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
          
          <div className="social-icons">

          
            <a title="LinkedIn" href="https://www.linkedin.com/in/marlamockus/">
              <TiSocialLinkedinCircular size={65} color="grey" />
            </a>
            <a title="Email" href="mailto:marlamockus@gmail.com">
              <ImMail4 size={50} color="grey" />
            </a>
            <a title="GitHub" href="https://github.com/MMockus15">
              <TiSocialGithubCircular size={65} color="grey" />
            </a>
          </div>
          <span className="navbar-text">
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
