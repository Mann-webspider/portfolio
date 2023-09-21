// import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Connect from "./components/Connect";
import WhatIDo from "./components/WhatIDo";
import Works from "./components/Works";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="">
      <Hero></Hero>
      <About />
      <WhatIDo></WhatIDo>
      <Experience />
      <Works />
      <Connect />
      <Footer></Footer>
    </div>
  );
}

export default App;
