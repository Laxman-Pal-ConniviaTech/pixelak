import React from "react";
import Slider from "react-slick";
import MotionGraphics from "../SVG/MotionGraphics";
import Video from "../SVG/Video";
import Animation from "../SVG/Animation";
import ImmersiveTech from "../SVG/ImmersiveTech";
import FlimProducts from "../SVG/FlimProducts";

const TextSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    vertical: true,
  };
  return (
    <div className="slider-text-container">
      <Slider {...settings}>
        <div>
          <h2>
            Video <Video className="hero-icons" />
          </h2>
        </div>
        <div>
          <h2>
            Animation <Animation className="hero-icons" />
          </h2>
        </div>
        <div>
          <h2 className="motion-graphics">
            Motion Graphics <MotionGraphics className="hero-icons" />
          </h2>
        </div>
        <div>
          <h2 className="immersive-tech">
            Immersive Technology
            <ImmersiveTech className="hero-icons" />
          </h2>
        </div>
        <div>
          <h2>
            Product Films <FlimProducts className="hero-icons" />
          </h2>
        </div>
      </Slider>
    </div>
  );
};

export default TextSlider;
