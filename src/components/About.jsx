import React, { useState } from "react";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import Button from "../shared/Button";
import person from "../assets/person.svg";
import skills from "../shared/skills.js";

const About = () => {
  // onClickHandler to display text about skill
  // onClick -> should:
  // 1. add a class to allow for inputto be white
  // 2. appropriate text should fade in for the specific skill

  // storing value of each skill in 1 state
  // update each value as true or false
  const [skillChecked, setSkillChecked] = useState({
    "1": true,
    "2": false,
    "3": false,
    "4": false
  });
  // const [skillTwoChecked, setSkillTwoChecked] = useState(false);
  // const [skillThreeChecked, setSkillThreeChecked] = useState(false);
  // const [skillFourChecked, setSkillFourChecked] = useState(false);

  // const radios = document.getElementsByTagName("input");
  // // console.log(radios);
  // for (let i = 0; i < radios.length; i++) {
  //   if (radios[i].type === "radio" && radios[i].checked) {
  //   }
  // }
  const showSkillHandler = (e) => {
    if (e.target.checked) {
      // if (e.target.id === "skill 1") {
      //   setSkillOneChecked(!skillOneChecked);
      // }
      switch (e.target.id) {
        case "skill 1":
          setSkillChecked({ "1": true, "2": false, "3": false, "4": false });
          break;
        case "skill 2":
          // setSkillTwoChecked(true);
          // setSkillThreeChecked(false);
          // setSkillFourChecked(false);
          // setSkillOneChecked(false);
          setSkillChecked({ "1": false, "2": true, "3": false, "4": false });
          break;
        case "skill 3":
          // setSkillThreeChecked(true);
          // setSkillOneChecked(false);
          // setSkillTwoChecked(false);
          // setSkillFourChecked(false);
          setSkillChecked({ "1": false, "2": false, "3": true, "4": false });
          break;
        case "skill 4":
          // setSkillFourChecked(true);
          // setSkillOneChecked(false);
          // setSkillTwoChecked(false);
          // setSkillThreeChecked(false);
          setSkillChecked({ "1": false, "2": false, "3": false, "4": true });
          break;
        default:
          break;
      }
    }
  };

  // map method for the skills
  // should fetch the skills or use from a shared data file
  const arrSkills = skills();

  const mapSkills = (item, index) => {
    // use checkbox/radio buttons to allow for switching of state
    if (index === 0) {
      return (
        <li className="skill">
          <input
            type="radio"
            id={`skill ${index + 1}`}
            name="skill"
            value={`${index + 1}. ${item}`}
            onClick={showSkillHandler}
            defaultChecked
          />
          <label for={`skill ${index + 1}`}> {`${index + 1}. ${item}`} </label>
          <br />
        </li>
      );
    } else {
      return (
        <li className="skill">
          <input
            type="radio"
            id={`skill ${index + 1}`}
            name="skill"
            value={`${index + 1}. ${item}`}
            onClick={showSkillHandler}
          />
          <label for={`skill ${index + 1}`}> {`${index + 1}. ${item}`} </label>
          <br />
        </li>
      );
    }
    // <Button
    //   className={`btn skill ${index}`}
    //   onClickHandler={showSkillHandler}
    //   text={`${index + 1}. ${item}`}
    //   type="button"
    // />
  };

  return (
    <div className="about">
      <div className="cloud-and-sun center">
        <img className="cloud" src={cloud} alt="cloud" />
        <img className="sun" src={sun} alt="sun" />
      </div>

      <div className="about__heading center">About Me</div>

      {/* For the git branch */}
      <div className="git__branch__container">
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
        <h2 className="git__branch__content__heading"> Skills </h2>
      </div>

      <div className="git__branch__container flex">
        <div className="git__branch two-hundred"> </div>
        <div className="git__branch__content">
          <div className="git__curve">
            <svg
              width="50"
              height="64"
              viewBox="0 0 50 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="git-curve"
            >
              <path
                d="M1 0C1 17 9 20 23.5 29.5C38 39 49 43.5 49 63.5"
                stroke="#B1B5C4"
                stroke-dashoffset="0px"
                stroke-dasharray="84.78448486328125px 84.78448486328125px"
              ></path>
            </svg>
            <div className="git__branch__circle flex">
              <div className="git__branch__circle__left">
                <div className="circle"></div>
                <div className="git__branch__circle__straight hundred"></div>
                <svg
                  width="50"
                  height="64"
                  viewBox="0 0 50 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="git-curve-reversed"
                >
                  <path
                    d="M1 0C1 17 9 20 23.5 29.5C38 39 49 43.5 49 63.5"
                    stroke="#B1B5C4"
                    stroke-dashoffset="0px"
                    stroke-dasharray="84.78448486328125px 84.78448486328125px"
                  ></path>
                </svg>
              </div>

              <div className="git__branch__circle__center">
                {/* <div className="skill one"></div>
                <div className="skill two"></div>
                <div className="skill three"></div>
                <div className="skill four"></div> */}
                <ul className="skills__list">{arrSkills.map(mapSkills)}</ul>
              </div>

              <div className="git__branch__circle__right">
                {skillChecked["1"] && (
                  <>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Unde eum obcaecati ratione aliquam officiis repellat
                      perspiciatis officia iusto tenetur. Ut quidem perferendis
                      dolorem aliquam laborum officiis a in quibusdam molestiae.
                    </p>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam soluta harum tempora? Eius sunt perspiciatis
                      dolorem laboriosam, enim ex? Illo aspernatur corrupti
                      placeat ipsam fugiat fugit aperiam sit, distinctio id?
                    </p>
                  </>
                )}
                {skillChecked["2"] && (
                  <>
                    <p className="git__branch__circle__right__para">Flying</p>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam soluta harum tempora? Eius sunt perspiciatis
                      dolorem laboriosam, enim ex? Illo aspernatur corrupti
                      placeat ipsam fugiat fugit aperiam sit, distinctio id?
                    </p>
                  </>
                )}
                {skillChecked["3"] && (
                  <>
                    <p className="git__branch__circle__right__para">Three</p>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam soluta harum tempora? Eius sunt perspiciatis
                      dolorem laboriosam, enim ex? Illo aspernatur corrupti
                      placeat ipsam fugiat fugit aperiam sit, distinctio id?
                    </p>
                  </>
                )}
                {skillChecked["4"] && (
                  <>
                    <p className="git__branch__circle__right__para">Four</p>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam soluta harum tempora? Eius sunt perspiciatis
                      dolorem laboriosam, enim ex? Illo aspernatur corrupti
                      placeat ipsam fugiat fugit aperiam sit, distinctio id?
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
