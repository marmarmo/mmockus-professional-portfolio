// import logo from '../assets/images/logo.png';
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ArtWork from "./components/ArtWork/ArtWork";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <>
    <div className="App">
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <Main />
      <ArtWork />
      < Footer />
    </div>
    </>
  );
}

export default App;
