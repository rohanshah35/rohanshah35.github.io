"use client";

import React, { useState } from "react";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Journey  from "./components/pages/Journey/Journey";
import Projects from "./components/pages/Projects/Projects";
import Skills from "./components/pages/Skills/Skills"
import Contact from "./components/pages/Contact/Contact"
import Footer from "./components/Footer/Footer";
import "./styles.css";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <div className="page-bg">
      {loading ? (
        <Loader finishLoading={finishLoading} />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Journey />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
