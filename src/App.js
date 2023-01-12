// import logo from '../assets/images/logo.png';
// import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Skills from "./Pages/Skills/Skills";
import ArtWork from "./Pages/Art/ArtWork";
import Podcast from "./Pages/Podcast/Podcast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Resume from "./Pages/Resume/Resume";

function App() {
  // const [activeLink, setActiveLink] = useState("home");
  return (
    <BrowserRouter>
      {/* <div className="App">
        <Header activeLink={activeLink} setActiveLink={setActiveLink} /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/ArtWork" element={<ArtWork />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        {/* <Main />
        <Portfolio />
        <Skills />
        <ArtWork />
        <Podcast /> */}
        <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
