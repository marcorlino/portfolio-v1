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

import ACE from "@/assets/ACE.jpg";
import AZ from "@/assets/AZ.jpg";
import GWA from "@/assets/GWA.jpg";

import Typewriter from "typewriter-effect";
import Layout from "./Layout";
import Image, { StaticImageData } from "next/image";

interface CertiProps {
  id: number;
  name: string;
  date: string;
  href: string;
  src: StaticImageData;
}

function Home() {
  const links = [
    {
      id: 1,
      icons: <BsGithub />,
      href: "https://www.github.com/marcorlino",
    },
    {
      id: 2,
      icons: <BsLinkedin />,
      href: "https://www.linkedin.com/marcangeloorlino114925",
    },
    {
      id: 3,
      icons: <BsFacebook />,
      href: "https://www.facebook.com/marcangeloorlino",
    },
    {
      id: 4,
      icons: <BsInstagram />,
      href: "https://www.instagram.com/marc.orlinooooo",
    },
    {
      id: 5,
      icons: <BsTiktok />,
      href: "https://www.tiktok.com",
    },
    {
      id: 6,
      icons: <BsTwitterX />,
      href: "https://www.twitter.com",
    },
    {
      id: 7,
      icons: <BsThreads />,
      href: "https://threads.net",
    },
  ];

  const certi: CertiProps[] = [
    {
      id: 1,
      name: "Microsoft: Azure Fundamentals",
      date: "November 11, 2023",
      href: "https://learn.microsoft.com/api/credentials/share/en-us/MarcAngeloOrlino-3524/41BF2177D332C5C8?sharingId=651AAE8D8EB3335E",
      src: AZ,
    },
    {
      id: 2,
      name: "Google Workspace Administrator",
      date: "December 04, 2023",
      href: "https://google.accredible.com/09adfd94-4e0f-4c0a-b822-47bcd56b1acb#gs.4oreqk",
      src: GWA,
    },
    {
      id: 3,
      name: "Google Associate Cloud Engineer",
      date: "February 09, 2024",
      href: "https://google.accredible.com/84bd414e-7b77-4c30-914f-74709a5fb56d#gs.4orjqj",
      src: ACE,
    },
  ];

  return (
    <Layout>
      <div className="">
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
                <Link
                  target="_blank"
                  href={link.href}
                  className="text-2xl text-black"
                >
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
        <div className="flex justify-center items-center gap-5">
          {certi.map((cert) => (
            <div className="h-[375px] w-[350px] mt-16 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
              <div className="mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-60">
                <div key={cert.id} className="flex items-center justify-center">
                  <Link href={cert.href} target="_blank">
                    <Image
                      src={cert.src}
                      alt="certification"
                      className="h-60"
                    />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-2 mt-6 text-xl font-bold leading-snug tracking-normal text-black">
                  {cert.name}
                </p>
              </div>

              <div className="text-center">
                <p className="mt-6 text-md text-gray-400">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
