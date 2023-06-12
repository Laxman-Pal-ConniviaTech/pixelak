import React from "react";

import ClientsSlider from "../Components/Sliders/ClientsSlider";

const Clients = () => {
  return (
    <section id="clients" className="clients-container">
      <h2 className="section-heading rainbow-text">clientele</h2>
      <div className="client-slider-container">
        <ClientsSlider />
      </div>
    </section>
  );
};

export default Clients;
