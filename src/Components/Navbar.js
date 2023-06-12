import React, { useState } from "react";
import darkLogo from "../Images/logoDark.png";
import lightLogo from "../Images/logowhite.png";
import talk from "../Images/talk.png";
import { BsMoonStars, BsSun } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [logo, setLogo] = useState(darkLogo);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setTheme("light");
    setLogo(lightLogo);
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setTheme("dark");
    setLogo(darkLogo);
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setDarkMode();
      document.querySelectorAll(".service").forEach(e=>{
        e.classList.add("dark-border")
      })
      document.querySelectorAll(".client-img").forEach(e=>{
        e.classList.add("dark-background")
      })
    } else {
      setLightMode();
      document.querySelectorAll(".service").forEach(e=>{
        e.classList.remove("dark-border")
      })
      document.querySelectorAll(".client-img").forEach(e=>{
        e.classList.remove("dark-background")
      })
    }
  };
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div onClick={toggleTheme} className="theme-background">
        {theme === "dark" ? <BsMoonStars /> : <BsSun />}
      </div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="lt">
        <div onClick={handleClick}>
          <img src={talk} alt="" />
          <span>Let's talk</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
