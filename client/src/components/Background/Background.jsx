// Background.jsx
import React from "react";
import "./Background.css";
import FinanzasBackground from "/workspaces/felinanzas/client/src/assets/FinanzasBackground.jpg";

const Background = () => {
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${FinanzasBackground})` }}
    />
  );
};

export default Background;