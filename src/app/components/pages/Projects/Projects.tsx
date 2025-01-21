"use client";
import Carousel from "@/app/components/carousel/carousel";
import classes from "@/app/components/pages/pages.module.css";
import image1 from "@/app/components/assets/ergon.png";
import image2 from "@/app/components/assets/fidelityUtility.png";
import image3 from "@/app/components/assets/rmpSearch.png";
import image4 from "@/app/components/assets/algowar.png";

export default function Projects() {
  const slides = [
    { 
      title: "algowar.xyz",
      blurb: "Gamify Leetcode-style coding prep through competitive head-to-head matches",
      description:
        "Developing a full-stack web application to gamify LeetCode-style coding preparation through competitive head-to-head matches. The application features a custom REST API built with Spring Boot and PostgreSQL, hosted on AWS RDS, and implements secure user authentication using AWS Cognito. The modern front-end, designed with Next.js, supports real-time gameplay, a comprehensive social system, leaderboards, and profile pages. Gameplay is enhanced with containerized code execution using Docker, AWS Lambda, and AWS ECR, along with skill-based matchmaking powered by Redis for efficient queuing. Live gameplay is facilitated through WebSocket integration, providing a seamless real-time experience.",
      githubLink: "https://github.com/rohanshah35/algowar",
      image: image4.src,
      techStack: "Spring Boot, Next.js, PostgreSQL, AWS Cognito/RDS/S3/ECR/Lambda/EC2/Elasticache, Redis, WebSockets (Socket.io), Docker, TypeScript "
    },
    { 
      title: "Project Ergon",
      blurb: "Store class notes, auto-generate summaries, flashcards, and study guides with this easy-to-use tool!",
      description:
        "Developed a full-stack web app for storing class notes, automatically generating summaries, flashcards, and study guides. Implemented a custom REST API with full CRUD operations, utilizing AWS S3 for file storage and OpenAI for content generation. Built an interactive, responsive front-end with React and modern CSS.",
      githubLink: "https://github.com/ergon-app",
      image: image1.src,
      techStack: "React, Express.js, PostgreSQL, AWS S3, OpenAI API"
    },
    {
      title: "Fidelity Utility",
      blurb: "In-house web scraping API for Fidelity users",
      description:
        "This Python application serves as a mock API for Fidelity using Selenium and BeautifulSoup, allowing users to retrieve personal portfolio information as well as general fund and stock data. It also includes scripts for various portfolio metrics.",
      githubLink: "https://github.com/rohanshah35/fidelityUtility",
      image: image2.src,
      techStack: "Python, Selenium, BeautifulSoup"
    },
    {
      title: "RMP Search Tool",
      blurb: "Find out what AI thinks about your professors...",
      description:
        "This Java application conducts sentiment analysis on professor ratings scraped from RateMyProfessor using Selenium. It features multiple data visualization screens to assist prospective students in evaluating professors.",
      githubLink: "https://github.com/rohanshah35/RMP-Search-Tool",
      image: image3.src,
      techStack: "Java, Selenium, CoreNLP, JavaFX"
    },
  ];

  return (
    <section id="projects" className={classes.pageSection}>
      <Carousel slides={slides} />
    </section>
  );
}
