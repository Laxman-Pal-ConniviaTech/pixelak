import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`top-link ${isVisible ? "show-link" : ""}`}
      onClick={handleClick}
    >
      <FaArrowUp />
    </div>
  );
};

export default Top;
