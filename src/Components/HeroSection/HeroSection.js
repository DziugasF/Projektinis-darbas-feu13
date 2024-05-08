import React from "react";
import "../../styles/HeroSection.css";
import "../../App.css";
import Video from "../../videos/video-2.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
      <h1>Welcome to Computer Store</h1>
      <p>What are you waiting for?</p>
      <div>
        <Link to="/computers">
          <button>Shop at our store!</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
