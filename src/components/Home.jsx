import React, { useState, useEffect, useRef } from "react";
import AboutOnLanding from "./AboutOnLanding";
import Hero from "./Hero";
import WorksOnLanding from "./WorksOnLanding";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ReachMe from "../shared/ReachMe";
import technology from "../assets/technology.png";
import cloud from "../assets/cloud.png";

const Home = () => {
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

  return (
    <>
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
    </>
  );
};

export default Home;
