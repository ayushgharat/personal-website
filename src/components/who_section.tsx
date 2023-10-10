"use client";
import ReactCurvedText from "react-curved-text";

const WhoAmI = () => {
  return (
    <div className="flex items-center justify-between gap-80 bg-gradient-to-b from-[#004e92] to-green-500 h-[100vh] px-40 w-100% overflow-hidden">
      <div className="flex flex-col gap-5 items-center justify-center">
        <span className="text-white">
          I am an avid learner, and an opportunity which resonates with me will
          fuel any desire to learn and upskill rapidly.
        </span>
        <span className="text-white">
          Furthermore, my experiences working on social initiatives and
          presenting projects on an international scale have sharpened my soft
          skills, enabling me to be an empathetic, effective communicator and a
          constructive collaborator.
        </span>
      </div>
      <div className="relative flex items-center justify-center overflow-visible">
        <span className="text-white text-[60px]">Skills</span>
        {/* <span className="text-white spinningText">Web Development</span> */}
        {/* <svg className="w-12 h-12 bg-red-500"></svg> */}
        <div className="absolute">
          <ReactCurvedText
            width={500}
            height={500}
            cx={250}
            cy={250}
            rx={200}
            ry={200}
            startOffset={0}
            reversed={true}
            text="Entrepreneur | Web Development | App Development | Product Management |"
            textProps={{ className: "text-[29px]" }}
            textPathProps={{ fill: "white" }}
            svgProps={{ className: "rotate-1" }}
          />
        </div>

        <div className="absolute">
          <ReactCurvedText
            width={700}
            height={700}
            cx={350}
            cy={350}
            rx={265}
            ry={265}
            startOffset={0}
            reversed={true}
            text=" Java | Javascript | Typescript | React | JSX | Python | XML | Dart | SQL"
            textProps={{ className: "text-[32px] opacity-70" }}
            textPathProps={{ fill: "white" }}
            svgProps={{ className: "rotate-2" }}
          />
        </div>

        <div className="absolute">
          <ReactCurvedText
            width={900}
            height={900}
            cx={450}
            cy={450}
            rx={335}
            ry={335}
            startOffset={0}
            reversed={true}
            text="Next.js | React Native | Node.js | Express.js | Flutter | MongoDB | PostgresQL | MySQL | OpenCV | Tauri | "
            textProps={{ className: "text-[33px] text-bold opacity-50" }}
            textPathProps={{ fill: "white" }}
            svgProps={{ className: "rotate-3" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
