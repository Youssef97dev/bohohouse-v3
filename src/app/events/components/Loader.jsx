"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Footer from "@/components/Footer";
import Toolbar from "@/components/Toolbar";
import Hero from "./Hero";
import Wedding from "./Wedding";
import SectionEv from "./SectionEv";
import Experts from "./Experts";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="">
          <Toolbar />
          <Hero />
          <Wedding />
          <SectionEv />
          <Experts />
          <Footer />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <CircleLoader color="#ad9071" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
