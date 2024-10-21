'use client'
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
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.querySelector("#contact") as HTMLElement;
    if (contactElement) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="contact" className="relative flex h-[100vh] w-full flex-col items-center justify-center rounded-lg border bg-white md:shadow-xl">
      <div className="max-w-4xl p-5 flex flex-col">
        <span className="pointer-events-none z-10 whitespace-pre-wrap font-header text-start text-4xl font-bold leading-none tracking-tighter ">
          Contact Me
        </span>
        <span className="font-body mt-8">
          Now that you&apos;ve had a chance to learn a bit about me and my
          journey, I&apos;d love the opportunity to get to know you. Whether
          you&apos;re looking to collaborate on a project, share ideas, or
          explore potential opportunities, I&apos;m excited to hear your story
          and see how we can work together. Feel free to reach out—let&apos;s
          create something meaningful!
        </span>
        <span className="font-body mt-8">
          Email me at{" "}
          <span className="font-semibold">gharatayush27@gmail.com</span> or
          connect with me on the following platforms
        </span>
        <div className="flex gap-x-8 mt-20 font-body">
          <Button className="flex gap-x-3" onClick={scrollToContact}>
            <Link
              href={`https://www.linkedin.com/in/ayush-gharat/`}
              className="flex gap-x-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </Link>
          </Button>
          <Button onClick={scrollToContact}>
            <Link
              href={`https://github.com/ayushgharat`}
              className="flex gap-x-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={16} />
              Github
            </Link>
          </Button>
          <Button className="flex gap-x-3" variant={`secondary`} onClick={scrollToContact}>
            <Link
              href={`https://drive.google.com/file/d/1OgTktpPk-lxh0oefO5Zfwcn73k0bpazR/view?usp=sharing`}
              className="flex gap-x-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf size={16} />
              Resume
            </Link>
          </Button>
        </div>
      </div>
      <RetroGrid className="h-full w-full" />
    </div>
  );
};

export default Contact;
