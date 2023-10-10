import Image from "next/image";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-full fixed top-0 flex items-center justify-between px-5 h-16 font-mono">
      <div>
      </div>
      <div className="flex items-center gap-10">
        <button className="">
          <span className="text-white">About Me</span>
        </button>
        <button className="">
          <span className="text-white">Projects</span>
        </button>
        <button className="">
          <span className="text-white">My Aspirations</span>
        </button>
        <button className="">
          <span className="text-white">Contact me</span>
        </button>
        <div className="w-5"></div>
      </div>
    </div>
  );
};

export default Header;
