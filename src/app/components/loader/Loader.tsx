"use client";

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import anime from "animejs";
import IconLoader from "./IconLoader";

interface LoaderProps {
  isMounted: boolean;
}

const StyledLoader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isMounted",
})<LoaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: opacity 0.5s ease-in-out;
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;

      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
  
    loader
      .add({
        targets: "#logo path",
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1000,
        delay: 400,
        easing: "easeInOutQuart",
      })
      .add({
        targets: "#logo #RS",
        opacity: 1,
        duration: 700,
        easing: "easeInOutQuart",
      })
      .add({
        targets: "#logo",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".loader",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      });
  };
  

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: "hidden" }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

export default Loader;
