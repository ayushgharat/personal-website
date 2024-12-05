"use client";

import { FC, ReactNode, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import { RainbowButton } from "./rainbow-button";
import Link from "next/link";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isLastWordVisible, setIsLastWordVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex flex-col h-[30%] max-w-4xl items-start bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/5 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
        <span className="font-body text-2xl text-start px-[3rem]">
          I am a CS Junior at Georgia Tech passionate about building modern,
          ambitious tools that can positively impact people.
        </span>
        <RainbowButton className="mt-8 ms-[3rem] font-body">
          <Link
            href="https://www.linkedin.com/in/ayush-gharat/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            Let&apos;s connect
          </Link>
        </RainbowButton>

        <span className="mt-12 font-body text-xl font-light text-start px-[3rem]">
          Or keep scrolling and learn more about what I have been working on ...
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
