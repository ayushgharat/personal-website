"use client";
import { useEffect, useState } from "react";
import anime from "animejs";
import TypewriterComponent from "typewriter-effect";

const Homepage = () => {
  const [menuValue, setMenuValue] = useState("Initial");

  useEffect(() => {
    
    anime({
      targets: "#menuheader",
      duration: 3000,
      easing: "easeInOutExpo",
      value: [0, 1000],
      update: function () {
        setMenuValue("new Value");
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#000428] to-[#004e92] h-[100vh] font-mono px-20">
      <div className="flex flex-col items-start gap-5">
        <TypewriterComponent
          options={{
            strings: ["Hey There"],
            autoStart: true,
            loop: true,
            wrapperClassName: "text-white text-[60px]",
            cursorClassName:"text-white text-[60px]",
            
          }}
        />
        <span className="text-white text-3xl">My name is Ayush Gharat</span>
        <span className="text-white text-xl">
          I am a passionate product-oriented full stack developer with a passion
          to build tools that positively impact people
        </span>
      </div>
    </div>
  );
};

export default Homepage;
