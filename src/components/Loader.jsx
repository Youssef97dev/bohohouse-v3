"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Toolbar from "./Toolbar";
import Hero from "./Hero";
import About from "./About";
import Rooms from "./Rooms";
import Events from "./Events";
import Footer from "./Footer";
import SmallGallery from "./SmallGallery";
import Where from "./Where";
//import Events from "./Events";
//import Activities from "./Activities";
//import Kitchen from "./Kitchen";
//import Footer from "./Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient && (
        <div className="">
          <Toolbar />
          <Hero />
          <About />
          <Rooms />
          <Events />
          <SmallGallery />
          <Where />
          <Footer />
          {/* <Intro />*/}
          {/*<div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <Buttons />
          </div>*/}
        </div>
      )}
    </>
  );
};

export default Loader;
