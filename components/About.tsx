import Image from "next/image";
import React from "react";
import me from "@/assets/profile.jpeg";
import Layout from "./Layout";
import Link from "next/link";

function About() {
  return (
    <Layout>
      <p className="pt-10 pb-10 text-4xl font-bold text-center  ">About Me</p>
      <div className="flex justify-evenly items-center w-full">
        <div className="shadow-2xl shadow-orange-400 group h-[400px] w-[400px] bg-white rounded-full overflow-hidden mb-16">
          <Image
            src={me}
            alt="profile"
            className=" h-[400px] w-[400px] object-cover rotate-90 group-hover:scale-110 duration-300 ease-out "
          ></Image>
        </div>

        <div className="text-xl text-justify w-[600px]">
          <p>
            Welcome to my web portfolio! I'm{" "}
            <span className="text-orange-400">Marc Angelo Orlino</span>, a
            passionate individual who holds a degree in Bachelor of Science in
            Information Technology, with a focused specialization in Web and
            Mobile Application Development.
          </p>
          <p className="mt-4">
            Throughout my academic journey I've acquired a solid foundation in
            various technologies, showcasing expertise in programming languages
            such as{" "}
            <span className="text-orange-400">.NET Core, Angular, and PHP</span>
            . My commitment to delivering exceptional user experiences extends
            to my proficiency in crafting responsive and visually appealing
            interfaces, utilizing tools like{" "}
            <span className="text-orange-400">Tailwind CSS</span>.
          </p>
          <p className="mt-4">
            As an aspiring full-stack developer, I am dedicated to continuous
            learning and innovation in the ever-evolving world of technology
          </p>
          <div className="flex items-center justify-center pt-5">
            <div className="relative">
              <span className="absolute bg-orange-500 top-1 w-full bottom-[-5px] rounded-md -left-2">
                &nbsp;
              </span>
              <Link href={"/CV.pdf"} target="_blank">
                <button className="rounded-md -translate-x-3 hover:-translate-x-2 hover:translate-y-1 p-2 bg-white text-black font-bold text-2xl px-6 hover:border-2 border-white duration-200 ease-out">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
