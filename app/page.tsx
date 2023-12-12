"use client";
import { useState } from "react";
import { Navbar } from "@/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJava,
  FaBootstrap,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiPostman,
  SiFirebase,
} from "react-icons/si";

export default function Home(props: any) {
  const skillsFrontend: { name: string; icon: any }[] = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next js",
      icon: <TbBrandNextjs />,
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
    },
  ];

  const socialLinks: { icon: any; url: string }[] = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/hrishit-sarkar-2b0095261/",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/hrishitsarkar",
    },
    {
      icon: <FaXTwitter />,
      url: "https://twitter.com/hrishit9",
    },
  ];
  const techLinks: { icon: any }[] = [
    {
      icon: <TbBrandNextjs />,
    },
    {
      icon: <FaReact />,
    },
    {
      icon: <SiRedux />,
    },
    {
      icon: <FaNodeJs />,
    },
    {
      icon: <SiTailwindcss />,
    },
    {
      icon: <SiExpress />,
    },
    {
      icon: <SiMongodb />,
    },
    {
      icon: <SiFirebase />,
    },
    {
      icon: <SiMysql />,
    },
    {
      icon: <FaHtml5 />,
    },
    {
      icon: <FaCss3 />,
    },
    {
      icon: <IoLogoJavascript />,
    },
    {
      icon: <SiTypescript />,
    },
    {
      icon: <SiPostman />,
    },
    {
      icon: <FaJava />,
    },
  ];
  const [whiteToBlack, setWhiteToBlack] = useState<string>("white");
  const [blackToWhite, setBlackToWhite] = useState<string>("black");
  return (
    <>
      <Navbar
        whiteToBlack={whiteToBlack}
        blackToWhite={blackToWhite}
        setWhiteToBlack={setWhiteToBlack}
        setBlackToWhite={setBlackToWhite}
      />
      <main
        className={`flex items-center justify-between ${
          whiteToBlack === "white" ? "bg-white" : "bg-black"
        }`}
      >
        <div className="w-[50%] h-[100vh] flex flex-col items-center justify-center p-10  ">
          <h1
            className={`text-[3rem] text-${blackToWhite} font-bold text-center mt-[100px]`}
          >
            Full Stack Web Developer
          </h1>
          <div
            className={`flex text-${blackToWhite}  items-center justify-between w-[70%] text-2xl mt-5`}
          >
            {techLinks.map((element) => (
              <span className="hover:scale-[1.5] transition-all">
                {element.icon}
              </span>
            ))}
          </div>
          <p className={`text-xl m-10 text-${blackToWhite}`}>
            Dedicated Full Stack Web Developer with strong expertise in
            JavaScript, React.js, and Node.js. Experienced in crafting and
            sustaining web applications, leveraging Redux Toolkit for efficient
            state management. Proficient in implementing responsive designs for
            seamless user experiences on various devices. Possess exceptional
            problem-solving and debugging abilities. Demonstrated track record
            of meeting project deadlines and delivering results even in
            high-pressure situations.
          </p>
          <div
            className={`text-xl ${
              whiteToBlack === "white" ? "bg-white" : "bg-black"
            } text-${blackToWhite}  rounded-full border-gray-200 hover:bg-sky-600 hover:text-${whiteToBlack} transition-all  p-2 font-bold hover:shadow-2xl`}
          >
            <Link href="https://drive.google.com/file/d/1GuAWf0oVKZyLHssbkdFS4rKIo2PAwpIF/view?usp=sharing">
              <span className="flex items-center justify-between">
                <p className={`m-1`}>Resume</p>
                <FaExternalLinkAlt />
              </span>
            </Link>
          </div>
          <div
            className={`flex mt-10 p-2 text-${blackToWhite} items-center justify-between w-[20%] h-[200px]`}
          >
            {socialLinks.map((element) => (
              <Link href={element.url}>
                <span className="flex hover:scale-[1.5] items-center justify-between text-xl  hover:shadow-2xl transition-all">
                  {element.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[50%] h-[80vh] flex flex-col items-center justify-between">
          <Image
            alt="profile-pic"
            src="/dp.jpg"
            height={450}
            width={450}
            className="rounded-full m-10 hover:shadow-2xl transition-all"
          />
        </div>
      </main>
      <section
        id="skills"
        className={`w-full ${
          whiteToBlack === "white" ? "bg-white" : "bg-black"
        } flex flex-col p-5`}
      >
        <h1
          className={`text-center font-bold text-6xl text-${blackToWhite} m-2`}
        >
          My Skills
        </h1>
        <h1 className={`font-bold text-4xl text-${blackToWhite} m-5 `}>
          Front-end
        </h1>
        <div className="flex items-center justify-between flex-wrap p-5 ">
          {skillsFrontend.map((element) => (
            <div className="flex items-center justify-between  flex-col p-5">
              <span className={`text-9xl text-${blackToWhite}`}>
                {element.icon}
              </span>
              <p className={`text-4xl m-2 text-${blackToWhite}`}>
                {element.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
