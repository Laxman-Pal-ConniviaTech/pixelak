import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Social from "../Components/Social";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          <AiOutlineCopyrightCircle /> Copyright 2023 | All Rights Reserved By
          <span> Pixelak Films</span>
        </p>
      </div>
      <div className="footer-scocial">
        <Social />
      </div>
      <div className="address">
        <p>
          Pixelak Films <br /> Cabin Cross road, Mumbai - 401105 <br />
          Maharashtra, India
        </p>
      </div>
    </div>
  );
};

export default Footer;
