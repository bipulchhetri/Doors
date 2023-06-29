
import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaHamburger,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>E</span>xplore
            <span>D</span>oors
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/Place"}>Best Places</Link>
            </li>
            <li>
              <Link to={"/BestHotel"}>Best Hotel</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <FaFacebookSquare className="facebook" />
            </li>
            <li>
              <FaInstagramSquare className="instagram" />
            </li>
            <li>
              <FaTwitterSquare className="twitter" />
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <FaHamburger />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
