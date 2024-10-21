"use client";
import ReactCurvedText from "react-curved-text";
import TextRevealByWord from "./ui/text-reveal";
import IconCloud from "./ui/icon-cloud";

const Skills = () => {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "swift",
    "xcode",
    "android",
    "mysql",
    "langchain",
    "xml",
    "openai",
    "tailwindcss",
    "python",
    "aws",
  ];

  return (
    <div className="mt-40 flex flex-col relative items-center p-5 justify-between h-[120vh]">
      <div className="flex-col font-body flex px-5 text-lg max-w-4xl mb-20">
        <span className="font-header text-4xl font-bold px-[3rem]">Skills</span>
        <span className="mt-10 font-body text-xl font-light text-start px-[3rem]">
          I started coding in the 6th grade, and over the years, I’ve developed
          a deep passion for building impactful projects. Through continuous
          learning and experimentation, I’ve gained experience in full-stack
          mobile and app development, as well as RAG LLM solutions.
        </span>
        <span className="mt-8 font-body text-xl font-light text-start px-[3rem]">
          My journey has involved integrating these technologies, allowing me to
          create robust, data-driven applications that leverage modern AI
          advancements.
        </span>
      </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default Skills;
