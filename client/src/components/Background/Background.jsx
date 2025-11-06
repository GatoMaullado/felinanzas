// Background.jsx
import React, { useEffect } from "react";
import "./Background.css";
import FinanzasBackground from "/workspaces/felinanzas/client/src/assets/FinanzasBackground.jpg";

const Background = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = document.querySelector(".background-container");
      if (bg) {
        // mueve el fondo más lento que el scroll → parallax
        bg.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${FinanzasBackground})` }}
    />
  );
};

export default Background;
