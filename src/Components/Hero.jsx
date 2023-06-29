import React from "react";
import "../index.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="hero-text">Explore Doors</h1>
        <h1 className="hero-text">Amzing place to visit Doors</h1>
        <button className="btn">Explore Now</button>
      </div>
      <img
        className="img"
        src="https://holidify.com/images/bgImages/NEW-ZEALAND.jpg"
        alt="/"
      />
    </div>
  );
};

export default Hero;
