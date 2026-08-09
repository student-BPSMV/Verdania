import { useEffect } from "react";
import "./App.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import About from "./components/About";
import Contact from "./components/Contact";
import Flowers from "./components/Flowers";
import Gardentips from "./components/Gardentips";
import Plants from "./components/Plants";
import Worldwide from "./components/Worldwide";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: false,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HeroSection></HeroSection>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/explore" element={<Cards></Cards>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/flowers" element={<Flowers></Flowers>}></Route>
          <Route path="/garden" element={<Gardentips></Gardentips>}></Route>
          <Route path="/plants" element={<Plants></Plants>}></Route>
          <Route path="/worldwide" element={<Worldwide></Worldwide>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
