"use client";

import Link from "next/link";
import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsTiktok,
  BsThreads,
  BsTwitterX,
} from "react-icons/bs";

import Typewriter from "typewriter-effect";

function Home() {
  const links = [
    {
      id: 1,
      icons: <BsGithub />,
      href: "",
    },
    {
      id: 2,
      icons: <BsLinkedin />,
      href: "",
    },
    {
      id: 3,
      icons: <BsFacebook />,
      href: "",
    },
    {
      id: 4,
      icons: <BsInstagram />,
      href: "",
    },
    {
      id: 5,
      icons: <BsTiktok />,
      href: "",
    },
    {
      id: 6,
      icons: <BsTwitterX />,
      href: "",
    },
    {
      id: 7,
      icons: <BsThreads />,
      href: "",
    },
  ];

  return (
    <div className="h-screen">
      <div className="text-center pt-20">
        <p className={"text-[40px]"}>Hello there! I'm</p>

        <div className="font-bold text-[60px]">
          <Typewriter
            options={{
              strings: ["Marc Angelo Orlino"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* <p className="font-bold text-[58px]">Marc Angelo Orlino</p> */}
        <p className="text-[40px]">an aspiring Full-stack Developer</p>
      </div>

      <div>
        <ul className="flex justify-center items-center space-x-8 pt-8">
          {links.map((link) => (
            <li
              key={link.id}
              className="p-3 rounded-full shadow-md animate-bounce bg-white"
            >
              <Link href={link.href} className="text-2xl">
                {link.icons}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex items-center justify-center pt-14">
        <button className="rounded-md p-2 bg-secondary text-white font-bold text-2xl px-6 hover:text-black hover:bg-transparent hover:border-2 border-black duration-300 ease-out">
          <Link href={"#about"}> About Me</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
