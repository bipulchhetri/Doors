import "./App.css";
import About from "./Components/About";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

import Home from "./Components/Home";
import Hotel from "./Components/Hotel";
import Navbar from "./Components/Navbar";
import Place from "./Components/Place";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Hero />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/BestHotel" element={<Hotel />} />
          <Route path="/" element={<About />} />
          <Route path="/Place" element={<Place />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
