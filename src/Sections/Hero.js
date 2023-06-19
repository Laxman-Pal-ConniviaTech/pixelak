import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Social from "../Components/Social";
import TextSlider from "../Components/Sliders/TextSlider";
import { AiFillPlayCircle } from "react-icons/ai";
import VideoModal from "../Components/VideoModal";
import HeroImgSlider from "../Components/Sliders/HeroImgSlider";


const Hero = () => {
  const [showVideo, setshowVideo] = useState(false);

  const playVideo = () => {
    setshowVideo(true);
  };

  const closeVideo = () => {
    setshowVideo(false);
  };

  return (
    <>
      {showVideo && <VideoModal close={closeVideo} />}
      <div className="hero-container parallax">
        <Navbar />
        <div className="hero">
          <div className="hero-text-container">
            <div className="text-container">
              <div className="hero-text">
                We're <span className="batman-font">PIXELAK</span> <span className="rainbow-text">  Films</span>
                <br />
              </div>
              <div className="hero-text-italic-container">
                <p className="hero-text-italic">Let's make a</p>
                <button onClick={playVideo} className="play-btn">
                  <AiFillPlayCircle />
                </button>
              </div>
              <TextSlider />
              <div className="hero-social">
                <Social />
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="card">
                <HeroImgSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
