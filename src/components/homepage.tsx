"use client";
import { useEffect, useState } from "react";
import Ripple from "./ui/ripple";

const Homepage = () => {
  const [menuValue, setMenuValue] = useState("Initial");


  return (
    <div className=" flex h-[90vh] w-full flex-col items-center justify-center bg-background">
      <span className="z-10 whitespace-pre-wrap text-center text-5xl font-bold font-header tracking-tighter text-black">
        Hey, it's Ayush!
      </span>
      <Ripple />
    </div>
  );
};

export default Homepage;

