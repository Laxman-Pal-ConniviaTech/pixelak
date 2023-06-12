import React from "react";
const Preloader = () => {
  return (
    <div className="border-animation">
      <div class="cube">
        <div class="face front"> </div> <div class="face back"> </div>
        <div class="face right"> </div> <div class="face left"> </div>
        <div class="face top"> </div> <div class="face bottom"> </div>
      </div>
    </div>
  );
};

export default Preloader;