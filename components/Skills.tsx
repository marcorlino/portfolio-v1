    "use client"
    import React from "react";
    import Layout from "./Layout";
    import Image, { StaticImageData } from "next/image";

    import HTML from "../assets/html5.png";
    import TAILWIND from "../assets/tailwind.png";
    import TYPESCRIPT from "../assets/typescript.png";
    import NEXTJS from "../assets/nextjs.png";
    import PHP from "../assets/php.png";
    import DOTNET from "../assets/dotnet.png";
    import ANGULAR from "../assets/angular.png";
    import CSHARP from "../assets/csharp.png";
    import AZURE from "../assets/AD.png";


    interface techs {

        id: number;
        name: string;
        src: StaticImageData;

    }


    function Skills() {

    const technologies: techs[] = [
        {
            id: 1,
            name: "HTML5",
            src: HTML,
        },
        {
            id: 2,
            name: "Tailwind CSS",
            src: TAILWIND,
        },
        {
            id: 3,
            name: "Typescript",
            src: TYPESCRIPT,
        },
        {
            id: 4,
            name: "Next JS",
            src: NEXTJS,
        },
        {
            id: 5,
            name: "PHP",
            src: PHP,
        },
        {
            id: 6,
            name: ".NET Core",
            src: DOTNET,
        },
        {
            id: 7,
            name: "Angular",
            src: ANGULAR,
        },
        {
            id: 8,
            name: "C#",
            src: CSHARP,
        },
        {
            id: 9,
            name: "Azure DevOps",
            src: AZURE,
        }

    ];


       return (
        <Layout>
          <div className="flex flex-col items-center justify-center">
            <p className="pb-10 text-4xl font-bold text-center">
              Technology is constantly evolving,{" "}
              <span className="text-orange-400">and so am I.</span>
            </p>
          </div>
    
          <div className="grid grid-cols-3 gap-9">
            {technologies.map((tech) => (
              <div className="flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-">
                <div className="mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-60">
                  <div key={tech.id} className="flex items-center justify-center">
                    <Image
                      src={tech.src}
                      alt="technologies"
                      className="h-10 w-10"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="mb-2 mt-6 text-xl font-bold leading-snug tracking-normal text-black">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Layout>
      );
    }



    export default Skills;
