import React from "react";
import {
  CDBFooter,
  // CDBFooterLink,
  CDBContainer,
  CDBBox,
} from "cdbreact";
// import logo from "../assets/images/logo.png";
// import github from "../assets/images/Logos/github-mark.png";
// import mail from "../assets/images/Logos/envelope.png";
// import linkedin from "../assets/images/Logos/linkedin.png";
import "./Styles/Footer.css";


export default function Footer () {
  return (
    <>
      <CDBContainer>
        <CDBFooter className="footerEl">
          <CDBBox
            display="flex"
            flex="column"
            className="mx-auto py-6"
            style={{ width: "90%" }}
          >
            {/* <CDBBox
              display="flex"
              justifyContent="between"
              className="flex-wrap"
            >
              <CDBBox alignSelf="center">
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                  <img alt="logo" src={logo} width="60px" />
                  <span className="ml-3 h5 font-weight-bold">Find me...</span>
                </a>
                <CDBBox className="mt-5" display="flex">
                  <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="mx-3 p-2">
                    <CDBIcon fab icon="twitter" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="instagram" />
                  </CDBBtn>
                </CDBBox>
                <div className="social-icons">
          {/* find sourced social media icons to add */}
          {/* <a href="https://www.linkedin.com/in/marlamockus/">
                <img src={linkedin} alt="icon" width={50} />
              </a>
              <a href="https://github.com/MMockus15">
                <img src={github} alt="icon" width={50} />
              </a>
              <a href="mailto:marlamockus@gmail.com">
                <img src={mail} alt="icon" width={50}/>
              </a>
            </div>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Portfolio
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer" }}
                >
                  <CDBFooterLink href="/">Resources</CDBFooterLink>
                  <CDBFooterLink href="/">About Us</CDBFooterLink>
                  <CDBFooterLink href="/">Contact</CDBFooterLink>
                  <CDBFooterLink href="/">Blog</CDBFooterLink>
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                 Art
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer" }}
                >
                  <CDBFooterLink href="/">Windframe</CDBFooterLink>
                  <CDBFooterLink href="/">Loop</CDBFooterLink>
                  <CDBFooterLink href="/">Contrast</CDBFooterLink>
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Skills
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer" }}
                >
                  <CDBFooterLink href="/">Support</CDBFooterLink>
                  <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                  <CDBFooterLink href="/">Sign In</CDBFooterLink>
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Podcast
                </p>
                <CDBBox
                  display="flex"
                  flex="column"
                  style={{ cursor: "pointer" }}
                >
                  <CDBFooterLink href="/">Support</CDBFooterLink>
                  <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                  <CDBFooterLink href="/">Sign In</CDBFooterLink>
                </CDBBox>
              </CDBBox>
            </CDBBox> */} 
            <small className="text-center mt-5">
              &copy; 2022. Marla Mockus.
            </small>
          </CDBBox>
        </CDBFooter>
      </CDBContainer>
    </>
  );
};

