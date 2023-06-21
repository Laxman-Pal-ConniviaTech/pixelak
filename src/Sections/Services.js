import React from "react";
import ImmersiveTech from "../Components/SVG/ImmersiveTech";
import Animation from "../Components/SVG/Animation";
import FlimProducts from "../Components/SVG/FlimProducts";
import DgMarketing from "../Components/SVG/DgMarketing";
import WebDev from "../Components/SVG/WebDev";
import Event from "../Components/SVG/Event";

const Services = () => {
  
  return (
    <section id="services">
      <h2 className="section-heading rainbow-text">What We Offer</h2>
      <div className="services-container">
        <div className="row">
          <div className="service-container">
            <div className="service">
              <div className="icon">
                <ImmersiveTech className="service-icons" />
              </div>
              <h5 className="">Immersive Technology</h5>
              <p>
                Immerse audiences with AR, VR, and MR cinema. Leave a lasting
                impression.
              </p>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="icon">
                <Animation className="service-icons" />
              </div>
              <h5 className="">Animation</h5>
              <p>
                Captivate with captivating characters. Blend fiction and reality
                through seamless 2D and 3D animation to captivate customers.
              </p>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="icon">
                <FlimProducts className="service-icons" />
              </div>
              <h5 className="">Marketing Films</h5>
              <p>
                A video creates credibility, leaves a lasting impression, and
                lets customers experience your brand through narrative and
                metaphor.
              </p>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="icon">
                <Event className="service-icons" />
              </div>
              <h5 className="">ATL, BTL, TTL</h5>
              <p>
                TV ads engage audiences, enhance digital presence, and portray
                captivating experiences and company culture.
              </p>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="icon">
                <WebDev className="service-icons" />
              </div>
              <h5 className="">Website | Software Development</h5>
              <p>
                Build a captivating website, go mobile-friendly, and establish
                your online presence. Streamline operations and save costs with
                our IT consulting solutions.
              </p>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="icon">
                <DgMarketing className="service-icons" />
              </div>
              <h5 className="">Digital Marketing</h5>
              <p>
                Social media marketing promotes brands. SEO generates organic
                website traffic. Google My Business connects businesses and
                customers based on location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
