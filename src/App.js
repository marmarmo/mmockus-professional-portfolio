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
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/mmockus-professional-portfolio/" element={<Home />} />
          <Route path="/mmockus-professional-portfolio/Profile" element={<Profile />} />
          <Route path="/mmockus-professional-portfolio/Portfolio" element={<Portfolio />} />
          <Route path="/mmockus-professional-portfolio/Skills" element={<Skills />} />
          <Route path="/mmockus-professional-portfolio/ArtWork" element={<ArtWork />} />
          <Route path="/mmockus-professional-portfolio/Podcast" element={<Podcast />} />
          <Route path="/mmockus-professional-portfolio/Contact" element={<Contact />} />
          <Route path="/mmockus-professional-portfolio/Resume" element={<Resume />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
