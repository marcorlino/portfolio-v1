import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import React from "react";

function Main() {
  return (
    <div className="text-secondary">
      <nav>
        <Navbar />
      </nav>
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id="about"></section>
        <section id="skills"></section>
        <section id="projects"></section>
        <section id="contact"></section>
      </main>
    </div>
  );
}

export default Main;
