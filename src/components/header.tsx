import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="z-20 w-full sticky top-0 flex items-center justify-center px-5 h-16 font-header bg-background/80 backdrop-blur-sm shadow-lg">
      <div className="flex items-center justify-center gap-10">
        <button className="">
          <span className="text-slate-800">About Me</span>
        </button>
        <button className="">
          <span className="text-slate-800">Projects</span>
        </button>
        <button className="">
          <span className="text-slate-800">Experiences</span>
        </button>
        <button className="">
          <span className="text-slate-800">Skills</span>
        </button>
        <button className="">
          <span className="text-slate-800">Contact me</span>
        </button>
      </div>
      <div className="absolute right-10 flex gap-x-8">
        <Link
          href="https://github.com/ayushgharat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ayush-gharat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
