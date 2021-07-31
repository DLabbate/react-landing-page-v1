import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  if (!flipped) {
    return (
      <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
        <img src={imageSrc} alt="" className="slider__image" />
        <div className="slider__content">
          <h1 className="slider__title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
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
