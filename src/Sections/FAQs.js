import React from "react";
import Accordion from "../Components/Accordion";
import ReactPlayer from "react-player";

const FAQs = () => {
  var acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  return (
    <section id="faqs" className="faqs-section ">
      <div className="shell-container">
        <div className="reel-container ">
          <div className="video">
          <ReactPlayer
          className='react-player'
            url='https://conniviatechlaxman.wistia.com/medias/kg5jcqldpt'
            playing
            muted
            controls={false}
          />
          </div>
        </div>
        <div className="faqs">
          <h5 className="faq-heading rainbow-text">You might ask...</h5>
          <div className="accordion-container">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
