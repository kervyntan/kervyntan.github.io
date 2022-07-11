import "./assets/styles.css";
import React, { useState, useEffect, useRef } from "react";
import cloud from "./assets/cloud.png";
import technology from "./assets/technology.png";
import reactIcon from "./assets/react-icon.png";
import sun from "./assets/sun.png";
import webdev from "./assets/web-dev.png";
import networkIcon from "./assets/network-icon.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import AboutOnLanding from "./components/AboutOnLanding";
import Hero from "./components/Hero";
import WorksOnLanding from "./components/WorksOnLanding";
import ReachMe from "./shared/ReachMe";
import Footer from "./shared/Footer";
import "./shared/observer";

export default function App() {
  // window.onscroll = () => {
  //   console.log(window.scrollY); // Value of scroll Y in px
  // };
  let path = "./data/data.json";
  const works = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((json) => {
        works.current = json;
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(works.current);

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  };
  const faders = document.querySelectorAll(".fader");
  const sliders = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return; // if the section is not in the current viewport, exit loop
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
  sliders.forEach((slider) => {
    appearOnScroll.observe(slider);
  });

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
      {!loading && <WorksOnLanding works={works.current} />}
      <ReachMe />
      <Footer />
    </div>
  );
}
