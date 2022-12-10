import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";



export default function NavBar({ activeLink, setActiveLink}) {
 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
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
          <img src={logo} alt="logo" width={100}/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Portfolio"
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
              href="#Skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#ArtWork"
              className={
                activeLink === "art" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("art")}
            >
              Art
            </Nav.Link>
            <Nav.Link
              href="#PodCast"
              className={
                activeLink === "podcast" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("podcast")}
            >
              Podcast
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
