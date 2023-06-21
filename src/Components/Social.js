import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsVimeo } from "react-icons/bs";
const Social = () => {
  return (
    <>
      <ul className="social-container">
        <li className="social facebook">
          <a href="https://m.facebook.com/pixelak.in/">
            <FaFacebook />
          </a>
        </li>
        <li className="social insta">
          <a href="https://www.instagram.com/pixelakfilms/">
            <FaInstagram />
          </a>
        </li>
        <li className="social linkedin">
          <a href="https://www.linkedin.com/in/pixelak/">
            <FaLinkedin />
          </a>
        </li>
        <li className="social vimeo">
          <a href="https://vimeo.com/user115128453">
            <BsVimeo />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
