import Image from "next/image";
import React from "react";
import jcena from "@/assets/jcena.jpg";
import Layout from "./Layout";

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

        <div className="text-2xl text-justify w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          tellus quis elit dictum molestie. Ut tempus sed lectus sed tempus.
          Integer iaculis facilisis enim, eget dignissim neque varius eget.
          Donec metus sapien, ornare eu turpis id, rhoncus tempor elit. Etiam eu
          dolor mollis, porttitor ex sit amet, scelerisque massa. Vestibulum
          sodales in velit a iaculis. Ut pulvinar tristique egestas. Nullam
          egestas eu felis quis semper. Fusce faucibus tristique cursus. Vivamus
          convallis congue purus quis ornare. Aliquam viverra eleifend
          ullamcorper.
        </div>
      </div>
    </Layout>
  );
}

export default About;
