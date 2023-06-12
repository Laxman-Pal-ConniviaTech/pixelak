import React, { useEffect } from "react";
import Slider from "react-slick";
import img1 from "../../Images/hero-img-1.png";
import img2 from "../../Images/hero-img-2.png";
import img3 from "../../Images/hero-img-3.png";
import img4 from "../../Images/hero-img-4.png";
import img5 from "../../Images/hero-img-5.png";

const HeroImgSlider = (props) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
  };

  const images = [img1, img2, img3, img4, img5];

  useEffect(()=>{
    const parallax = document.querySelector(".parallax");
    const heroImg1 = document.querySelector(".img1");
    const heroImg2 = document.querySelector(".img2");
    const heroImg3 = document.querySelector(".img3");
    const heroImg4 = document.querySelector(".img4");
    const heroImg5 = document.querySelector(".img5");

    parallax.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      heroImg1.style.transform = `translate(${x / 800}% , ${y / 400}%)`;
      heroImg2.style.transform = `translate(${x / 800}% , ${y / 400}%)`;
      heroImg3.style.transform = `translate(${x / 800}% , ${y / 400}%)`;
      heroImg4.style.transform = `translate(${x / 800}% , ${y / 400}%)`;
      heroImg5.style.transform = `translate(${x / 800}% , ${y / 400}%)`;
    });
  })

  return (
    <Slider {...settings}>
      {images.map((img, i) => (
        <div key={i}>
          <img className={`hero-img img${i + 1}`} src={img} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default HeroImgSlider;
