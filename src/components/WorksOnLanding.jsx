import React from "react";
import react from "../assets/react-icon.png";
import webDev from "../assets/web-dev.png";
import CSS from "../assets/css.png";
import JS from "../assets/js.png";
import HTML from "../assets/html5.png";

const WorksOnLanding = ({ works }) => {
  const loopSkills = (item, index) => {
    return (
      <div className="skill">
        <img width="20" src={require(item.path)} alt={item.skill} />
        <p className="skill__para"> {item.skill} </p>
      </div>
    );
  };

  const loopWork = (item, index) => {
    return (
      <div className="works__container">
        <div className="skills">{item.skills.map(loopSkills)}</div>
        <div className="works__title"> {item.title} </div>
        {/* <div className="works__img"> </div> */}
      </div>
    );
  };
  return (
    <div className="works fader">
      <div className="works__heading">
        <h2> Featured Works </h2>
      </div>
      <div className="works__display">{works.map(loopWork)}</div>
    </div>
  );
};

export default WorksOnLanding;
