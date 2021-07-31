import React from "react";
import "./Slider.css";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  if (!flipped) {
    return (
      <div className={"slider"}>
        <img src={imageSrc} alt="" className="slider__image" />
        <div className="slider__content">
          <h1 className="slider__title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"slider"}>
        <div className="slider__content">
          <h1 className="slider__title">{title}</h1>
          <p>{subtitle}</p>
        </div>
        <img src={imageSrc} alt="" className="slider__image" />
      </div>
    );
  }
};

export default Slider;
