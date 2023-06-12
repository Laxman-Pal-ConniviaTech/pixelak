import React from "react";
import Marquee from "react-fast-marquee";
import bhelLogo from "../../Images/bhel.png";
import bwLogo from "../../Images/bombayWeave.png";
import dpLogo from "../../Images/detpack.png";
import galaLogo from "../../Images/gala.png";
import halLogo from "../../Images/hal.png";
import mpcLogo from "../../Images/manitowocPotainCranes.png";
import praxisLogo from "../../Images/praxis.png";
import shirijiLogo from "../../Images/shriji.png";
import spLogo from "../../Images/sp.png";

const ClientsSlider = () => {
  const images = [
    bhelLogo,
    bwLogo,
    dpLogo,
    galaLogo,
    halLogo,
    mpcLogo,
    praxisLogo,
    shirijiLogo,
    spLogo,
  ];


  return (
    <Marquee pauseOnHover={true} speed={150}>
            {images.map((img, i) => (
      <div key={i} className="item">
        <div className="clients-slider-img-container">
          <img className="client-img" src={img} alt="" />
        </div>
      </div>
    ))}
    </Marquee>

  );
};

export default ClientsSlider;
