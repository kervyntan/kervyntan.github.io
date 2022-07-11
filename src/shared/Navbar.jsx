import React from "react";
import { BrowserRouter, Routes, Switch } from "react-router-dom";

const Navbar = (props) => {
  const showHamburger = () => {
    var x = document.getElementById("container-nav-hamb");
    if (x.style.display === "block") {
      x.style.display = "none";
      // document.body.style.overflow = "hidden";
    } else {
      x.style.display = "block";
      // document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        {/* props.img in the future */}
        {/* <h1> KERVYN </h1> */}
        <img className="cloud" src={props.img} alt="logo" />
      </div>

      <ul className="nav-list">
        {/* change to routes  */}
        <a href="#">
          <li className="nav-list-item"> {props.firstItem} </li>
        </a>
        <a href="#">
          <li className="nav-list-item"> {props.secondItem} </li>
        </a>
        <a href="#">
          <li className="nav-list-item"> {props.thirdItem} </li>
        </a>
      </ul>

      <div className="hamburger" onClick={showHamburger}>
        <div className="hamb"></div>
        <div className="hamb"></div>
        <div className="hamb"></div>

        <div id="container-nav-hamb">
          <ul className="nav-list-hamb">
            {/* change to routes  */}
            <div className="hamburger-inside" onClick={showHamburger}>
              <div className="hamb"></div>
              <div className="hamb"></div>
              <div className="hamb"></div>
            </div>
            <a href="#">
              <li className="nav-list-hamb-item"> {props.firstItem} </li>
            </a>
            <a href="#">
              <li className="nav-list-hamb-item"> {props.secondItem} </li>
            </a>
            <a href="#">
              <li className="nav-list-hamb-item"> {props.thirdItem} </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
