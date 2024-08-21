import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import React from "react";

function Main() {
  return (
    <div className="text-white">
      <nav>
        <Navbar />
      </nav>
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects"></section>
        <section id="contact"></section>
      </main>
    </div>
  );
}

export default Main;
