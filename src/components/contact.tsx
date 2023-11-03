import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b from-red-400 to-indigo-700 h-fit py-20 px-20 pb-80">
      <span className="text-white text-[60px]">Contact Me</span>

      <span className="text-white px-5 my-20 text-xl leading-loose">
        Thanks for visiting my corner of the web 🌐. Let&apos;s break the virtual ice
        and connect! Whether you&apos;re interested in discussing future
        opportunities, sharing insights, or just having a friendly chat, I&apos;m
        here to make it happen. So, why not take the plunge and reach out? The
        possibilities are endless!
      </span>

      <div className="grid grid-cols-2 gap-10 w-full ps-10 pe-20">
        <Link href={"mailto:gharatayush27@gmail.com?subject=I%20Want%20To%20Connect"} className="bg-white border-red-500 rounded-lg border-1 px-6 py-4 border-2 flex items-center justify-center gap-5 hover:bg-red-500 hover:text-white">
          <Image
            src={"/GmailIcon.png"}
            alt="Gmail Icon"
            width={20}
            height={20}
          ></Image>
          <span className="text-xl">Send me an Email</span>
        </Link>
        <Link href={"https://www.linkedin.com/in/ayush-gharat"} className="bg-white border-[#0072b1] rounded-lg border-1 px-6 py-4 border-2 flex items-center justify-center gap-5 hover:bg-[#0072b1] hover:text-white">
          <Image
            src={"/LinkedinIcon.png"}
            alt="LinkedIn Icon"
            width={20}
            height={20}
          ></Image>
          <span className="text-xl">Connect on LinkedIn</span>
        </Link>

        <Link href={"https://www.github.com/ayushgharat"} className="bg-white border-black rounded-lg border-1 px-6 py-4 border-2 flex items-center justify-center gap-5 hover:bg-black hover:text-white">
          <Image
            src={"/githubIcon.png"}
            alt="Github Icon"
            width={20}
            height={20}
          ></Image>
          <span className="text-xl">Follow on Github</span>
        </Link>

        <div className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-lg p-[2px]">
          <Link href={"https://www.instagram.com/ayush_gharat27/"} className="w-full bg-white border-transparent rounded-lg px-6 py-4 border-2 flex items-center justify-center gap-5 hover:bg-transparent hover:text-white">
            <Image
              src={"/instagramIcon.png"}
              alt="Instagram Icon"
              width={20}
              height={20}
            ></Image>
            <span className="text-xl">Follow on Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
