import Image from "next/image";
import Link from "next/link";
import FlickeringGrid from "./ui/flickering-grid";
import RetroGrid from "./ui/retro-grid";
import { Button } from "./ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaRegFilePdf,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center  rounded-lg border bg-white md:shadow-xl">
      <div className="max-w-4xl p-5 flex flex-col">
        <span className="pointer-events-none z-10 whitespace-pre-wrap font-header text-start text-4xl font-bold leading-none tracking-tighter ">
          Contact Me
        </span>
        <span className="font-body mt-8">
          Now that you’ve had a chance to learn a bit about me and my journey,
          I’d love the opportunity to get to know you. Whether you’re looking to
          collaborate on a project, share ideas, or explore potential
          opportunities, I’m excited to hear your story and see how we can work
          together. Feel free to reach out—let’s create something meaningful!
        </span>
        <div className="flex gap-x-8 mt-20 font-body">
          <Button className="flex gap-x-3">
            <FaRegEnvelope size={16} />
            Email
          </Button>
          <Button className="flex gap-x-3">
            <FaLinkedin size={16} />
            LinkedIn
          </Button>
          <Button className="flex gap-x-3">
            <FaGithub size={16} />
            Github
          </Button>
          <Button className="flex gap-x-3" variant={`secondary`}>
            {" "}
            <FaRegFilePdf size={16} />
            Resume
          </Button>
        </div>
      </div>
      <RetroGrid className="h-full w-full" />
    </div>
  );
};

export default Contact;
