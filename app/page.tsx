
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Connect from "@/app/components/Connect";
import WhatIDo from "@/app/components/WhatIDo";
import Works from "@/app/components/Works";
import Footer from "@/app/components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      
      <Hero></Hero>
      <About />
      <WhatIDo></WhatIDo>
      {/* <Experience /> */}
      <Works />
      <Connect />
      <Footer></Footer>
    </div>
  );
}



