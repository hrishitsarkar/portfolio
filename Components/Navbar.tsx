import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { CiDark, CiLight } from "react-icons/ci";
import Link from "next/link";
interface NavbarProps {
  whiteToBlack: string;
  blackToWhite: string;
  setWhiteToBlack: (color: string) => void;
  setBlackToWhite: (color: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  whiteToBlack,
  blackToWhite,
  setWhiteToBlack,
  setBlackToWhite,
}) => {
  const navList: { text: string; link: string }[] = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "My Skills",
      link: "#skills",
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
  const toggleDark = () => {
    setWhiteToBlack("black");
    setBlackToWhite("white");
  };
  const toggleLight = () => {
    setWhiteToBlack("white");
    setBlackToWhite("black");
  };
  return (
    <div
      className={`w-full h-[80px] fixed ${
        whiteToBlack === "white" ? "bg-white" : "bg-black"
      } flex items-center justify-between`}
    >
      <div className="w-[50%] p-5 flex items-center justify-start">
        <div
          className={`${
            blackToWhite === "black" ? "text-black" : "text-white"
          } text-2xl px-4`}
        >
          <FaCode />
        </div>
        <h1
          className={`${
            blackToWhite === "black" ? "text-black" : "text-white"
          } font-semibold text-2xl`}
        >
          <span className="text-4xl">H</span>rishit{" "}
          <span className="text-4xl">S</span>arkar
        </h1>
      </div>
      <div
        className={`w-[40%] p-5 flex items-center  justify-between ${
          blackToWhite === "black" ? "text-black" : "text-white"
        } font-semibold`}
      >
        {navList.map((element, index) => (
          <Link href={element.link}>
            <span
              key={index}
              className={`hidden md:block hover:scale-[1.5]  hover:${
                blackToWhite === "black" ? "text-black" : "text-white"
              } transition-all cursor-pointer rounded-full`}
            >
              {element.text}
            </span>
          </Link>
        ))}
      </div>
      {whiteToBlack === "white" && (
        <div
          className={`${
            blackToWhite === "black" ? "text-black" : "text-white"
          }}  cursor-pointer shadow-lg flex items-center justify-center p-3 mr-2 text-2xl font-bold rounded-full border-[1px] ${
            blackToWhite === "black" ? "border-black" : "border-white"
          }`}
          onClick={toggleDark}
        >
          <CiDark />
        </div>
      )}
      {blackToWhite === "white" && (
        <div
          className={`text-${blackToWhite} cursor-pointer shadow-lg flex items-center justify-center p-3 mr-2 text-2xl font-bold rounded-full border-[1px] border-${blackToWhite}`}
          onClick={toggleLight}
        >
          <CiLight />
        </div>
      )}
    </div>
  );
};
