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
      href: "www.github.com/marcorlino",
    },
    {
      id: 2,
      icons: <BsLinkedin />,
      href: "www.linkedin.com/marcangeloorlino114925",
    },
    {
      id: 3,
      icons: <BsFacebook />,
      href: "www.facebook.com/marcangeloorlino",
    },
    {
      id: 4,
      icons: <BsInstagram />,
      href: "www.instagram.com/marc.orlinooooo",
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
      <div className="flex flex-col items-center justify-center pt-52">
        <p className={"text-[40px]"}>Hello there! I'm</p>

        <div className="font-bold text-[60px] bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">
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
              className="p-3 rounded-full shadow-xl shadow-orange-400 animate-bounce bg-white"
            >
              <Link href={link.href} className="text-2xl text-black">
                {link.icons}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center pt-14">
        <div className="relative">
          <span className="absolute bg-orange-500 top-1 w-full bottom-[-5px] rounded-md -left-2">
            &nbsp;
          </span>
          <Link href={"#about"}>
            <button className="rounded-md -translate-x-3 hover:-translate-x-2 hover:translate-y-1 p-2 bg-white text-black font-bold text-2xl px-6 hover:border-2 border-white duration-200 ease-out">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
