import React from "react";
import { FaCode } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
export const Navbar = () => {
  const navList: { text: string; link: string }[] = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "My Skills",
      link: "/skills",
    },
    {
      text: "My Projects",
      link: "/projects",
    },
    {
      text: "Contact Me",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full h-[80px] bg-black flex items-center justify-between">
      <div className="w-[50%] p-5 flex items-center justify-start">
        <div className="text-white text-2xl px-4">
          <FaCode />
        </div>
        <h1 className="text-white font-semibold text-2xl">Portfolio</h1>
      </div>
      <div className="w-[50%] p-5 flex items-center justify-between text-white font-semibold ">
        {navList.map((element, index) => (
          <span
            key={index}
            className="hidden md:block  hover:text-2xl transition-all cursor-pointer rounded-full"
          >
            {element.text}
          </span>
        ))}
      </div>
    </div>
  );
};
