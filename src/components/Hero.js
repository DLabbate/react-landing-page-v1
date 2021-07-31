import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} width="100%" alt="" className="hero__image" />
      <h1 className="hero__title">Travel made simple.</h1>
    </div>
  );
};

export default Hero;
