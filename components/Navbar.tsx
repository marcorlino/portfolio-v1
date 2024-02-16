import Image from "next/image";
import React from "react";
import Logo from "/assets/logo.png";

function Navbar() {
  const links = [
    {
      id: 1,
      name: "About",
      url: "#about",
    },
    {
      id: 2,
      name: "Skills",
      url: "#skills",
    },
    {
      id: 3,
      name: "Projects",
      url: "#projects",
    },
    {
      id: 4,
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <>
      <div className="px-[80px] py-[10px] flex items-center justify-between bg-orange-400 fixed w-full z-50">
        <a href="#Home">
          <Image src={Logo} className="w-20" alt="logo" />
        </a>
        <ul className="justify-center space-x-10 hidden sm:flex">
          {links.map((link) => (
            <li key={link.id} className="font-bold relative group">
              <a href={link.url} className="text-l">
                {link.name}
              </a>
              <div className="absolute duration-200 ease-linear w-0 group-hover:w-full h-[2px] bg-black" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
