// import logo from '../assets/images/logo.png';
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home/Home";
import Profile from "./components/Pages/Profile/Profile";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Skills from "./components/Pages/Skills/Skills";
import ArtWork from "./components/Pages/Art/ArtWork";
import Podcast from "./components/Pages/Podcast/Podcast";
import {Routes, Route} from 'react-router-dom';

function App() {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <>
      <div className="App">
        <Header activeLink={activeLink} setActiveLink={setActiveLink} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/ArtWork" element={<ArtWork />} />
          <Route path="/Podcast" element={<Podcast />} />

        </Routes>
        {/* <Main />
        <Portfolio />
        <Skills />
        <ArtWork />
        <Podcast /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
