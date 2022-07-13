import React from "react";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import Button from "../shared/Button";
import person from "../assets/person.svg";

const About = () => {
  return (
    <div className="about">
      <div className="cloud-and-sun center">
        <img className="cloud" src={cloud} alt="cloud" />
        <img className="sun" src={sun} alt="sun" />
      </div>

      <div className="about__heading center">About Me</div>

      {/* For the git branch */}
      <div className="git__branch__container">
        {/* <svg
          className="git__person"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 9.75C6.1005 9.75 3.75 12.1005 3.75 15V16.5C3.75 16.9142 3.41421 17.25 3 17.25C2.58579 17.25 2.25 16.9142 2.25 16.5V15C2.25 11.2721 5.27208 8.25 9 8.25C12.7279 8.25 15.75 11.2721 15.75 15V16.5C15.75 16.9142 15.4142 17.25 15 17.25C14.5858 17.25 14.25 16.9142 14.25 16.5V15C14.25 12.1005 11.8995 9.75 9 9.75Z"
            fill="#B1B5C4"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 9.75C11.4853 9.75 13.5 7.73528 13.5 5.25C13.5 2.76472 11.4853 0.75 9 0.75C6.51472 0.75 4.5 2.76472 4.5 5.25C4.5 7.73528 6.51472 9.75 9 9.75Z"
            fill="#B1B5C4"
          ></path>
        </svg> */}
        <img src={person} alt="person" />
        <div className="git__branch fifty"> </div>
      </div>

      <div className="about__section__one">
        <div className="about__section__one__image">
          <img src={cloud} alt="cloud" width="150" />
        </div>
        <div className="about__section__one__text">
          <p className="about__section__one__text__para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            minima nam dignissimos, eveniet debitis soluta iusto aliquam tempora
            natus odit rem exercitationem maxime, quaerat asperiores voluptatem
            ab animi. Ea, possimus.
          </p>
          <p className="about__section__one__text__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            temporibus voluptas libero voluptatibus, minima numquam! Molestiae
            cum animi enim soluta.
          </p>
          <p className="about__section__one__text__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illo
            perferendis incidunt voluptatibus distinctio molestias?
          </p>
        </div>
      </div>

      <div className="git__branch__container">
        <div className="git__branch fifty"> </div>
        <svg
          className="git__person"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 9.75C6.1005 9.75 3.75 12.1005 3.75 15V16.5C3.75 16.9142 3.41421 17.25 3 17.25C2.58579 17.25 2.25 16.9142 2.25 16.5V15C2.25 11.2721 5.27208 8.25 9 8.25C12.7279 8.25 15.75 11.2721 15.75 15V16.5C15.75 16.9142 15.4142 17.25 15 17.25C14.5858 17.25 14.25 16.9142 14.25 16.5V15C14.25 12.1005 11.8995 9.75 9 9.75Z"
            fill="#B1B5C4"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 9.75C11.4853 9.75 13.5 7.73528 13.5 5.25C13.5 2.76472 11.4853 0.75 9 0.75C6.51472 0.75 4.5 2.76472 4.5 5.25C4.5 7.73528 6.51472 9.75 9 9.75Z"
            fill="#B1B5C4"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;