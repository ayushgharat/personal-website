"use client";
import { useEffect, useState } from "react";
import anime from "animejs";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col h-[100vh] bg-black items ps-20 justify-center w-100% overflow-hidden">
      <div className="overflow-visible">
        <Image
          src={"/images/ccchaos.svg"}
          alt="Chaos SVG"
          height={1200}
          width={1200}
          className="absolute -right-[500px] -top-[400px]"
        />
      </div>

      <span className="text-white text-[70px] font-dm font-semibold">
        Ayush Gharat
      </span>
      <span className="text-white text-[48px] font-dm font-medium">
        Welcome to my world
      </span>
    </div>
  );
};

export default Homepage;
