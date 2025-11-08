import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <Section />
      <Footer />
    </div>
  );
}

