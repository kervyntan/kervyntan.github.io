import "./assets/styles.css";
import React from "react";
import cloud from "./assets/cloud.png";
import technology from "./assets/technology.png";
import reactIcon from "./assets/react-icon.png";
import sun from "./assets/sun.png";
import webdev from "./assets/web-dev.png";
import networkIcon from "./assets/network-icon.png";
import { BrowserRouter, Routes, Switch } from "react-router-dom";
import Navbar from "./shared/Navbar";
import AboutOnLanding from "./components/AboutOnLanding";
import Hero from "./components/Hero";
import WorksOnLanding from "./components/WorksOnLanding";

export default function App() {
  return (
    <div className="container">
      <Navbar
        img={cloud}
        firstItem="About"
        secondItem="Portfolio"
        thirdItem="Contact"
      />
      <Hero img={technology} />
      <AboutOnLanding />
      <WorksOnLanding />
    </div>
  );
}
