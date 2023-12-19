import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/HeroSection/Hero";
import HeadSetLogo from "./assets/HeadSet.svg";
function App() {
  return (
    <>
      <NavBar />
      <Hero props={HeadSetLogo} />
    </>
  );
}

export default App;
