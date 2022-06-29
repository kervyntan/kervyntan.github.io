import "./assets/styles.css";
import React from "react";
import { BrowserRouter, Routes, Switch } from "react-router-dom";
import Navbar from "./shared/Navbar";
import AboutOnLanding from "./components/AboutOnLanding";
import Hero from "./components/Hero";
import WorksOnLanding from "./components/WorksOnLanding";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
