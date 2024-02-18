import Image from "next/image";
import React from "react";
import jcena from "@/assets/jcena.jpg";
import Layout from "./Layout";
import Link from "next/link";

function About() {
  return (
    <Layout>
      <p className="pt-10 pb-10 text-4xl font-bold text-center  ">About Me</p>
      <div className="flex justify-evenly items-center w-full">
        <div className="h-[400px] w-[400px] bg-white">
          <Image
            src={jcena}
            alt="cantseeme"
            className="h-[400px] w-[400px]"
          ></Image>
        </div>

        <div className="text-xl text-justify w-[600px]">
        <p>Welcome to my web portfolio! I'm <span className="text-orange-400">Marc Angelo Orlino</span>, a passionate individual who holds a degree in Bachelor of Science in Information Technology, with a focused specialization in Web and Mobile Application Development.</p>
        <p className="mt-4">Throughout my academic journey I've acquired a solid foundation in various technologies, showcasing expertise in programming languages such as <span className="text-orange-400">.NET Core, Angular, and PHP</span>. My commitment to delivering exceptional user experiences extends to my proficiency in crafting responsive and visually appealing interfaces, utilizing tools like Tailwind CSS.</p>
        <p className="mt-4">As an aspiring full-stack developer, I am dedicated to continuous learning and innovation in the ever-evolving world of technology</p>
        <div className="flex items-center justify-center pt-5">
        <div className="relative">
            <span className="absolute bg-orange-500 top-1 w-full bottom-[-5px] rounded-md -left-2">
              &nbsp;
            </span>
            <Link href={"#"}>
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
