import React from "react";
import { BrowserRouter, Routes, Switch } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* props.img in the future */}
        {/* <h1> KERVYN </h1> */}
        <img class="cloud" src={props.img} alt="logo" />
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
    </div>
  );
};

export default Navbar;
