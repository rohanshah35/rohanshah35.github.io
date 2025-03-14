// AboutHero.tsx
import React from "react";
import { Container, Text, Title, Image } from "@mantine/core";
import classes from "./about-hero.module.css";
import image1 from "@/app/components/assets/about-1.jpg";
import image2 from "@/app/components/assets/about-2.jpg";
import image3 from "@/app/components/assets/about-3.jpg";
import image4 from "@/app/components/assets/about-4.jpg";
import image5 from "@/app/components/assets/about-5.jpg";
import { useAnimateOnScroll } from "@/app/components/useAnimateOnScroll";

export function AboutHero() {
  const [profileRef, profileInView] = useAnimateOnScroll<HTMLImageElement>({ threshold: 0.3 });
  const [dogRef, dogInView] = useAnimateOnScroll<HTMLImageElement>({ threshold: 0.3 });
  const [landscapeRef, landscapeInView] = useAnimateOnScroll<HTMLImageElement>({ threshold: 0.3 });
  const [basketballRef, basketballInView] = useAnimateOnScroll<HTMLImageElement>({ threshold: 0.3 });
  const [climbingRef, climbingInView] = useAnimateOnScroll<HTMLImageElement>({ threshold: 0.3 });

  const [titleRef, titleInView] = useAnimateOnScroll<HTMLHeadingElement>({ threshold: 0.3 });
  const [descRef, descInView] = useAnimateOnScroll<HTMLParagraphElement>({ threshold: 0.3 });

  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.imageGrid}>
          <div className={classes.topRow}>
            <Image
              ref={profileRef}
              src={image1.src}
              alt="Profile"
              className={`${classes.profileImage} ${profileInView ? classes.animate : ""}`}
            />
            <Image
              ref={dogRef}
              src={image2.src}
              alt="Dog"
              className={`${classes.dogImage} ${dogInView ? classes.animate : ""}`}
            />
          </div>
          <div className={classes.middleRow}>
            <Image
              ref={climbingRef}
              src={image5.src}
              alt="Climbing"
              className={`${classes.climbingImage} ${climbingInView ? classes.animate : ""}`}
            />
            <Image
              ref={basketballRef}
              src={image4.src}
              alt="Basketball"
              className={`${classes.basketballImage} ${basketballInView ? classes.animate : ""}`}
            />
          </div>
          <Image
            ref={landscapeRef}
            src={image3.src}
            alt="Landscape"
            className={`${classes.landscapeImage} ${landscapeInView ? classes.animate : ""}`}
          />
        </div>

        <div className={classes.content}>
          <Title
            ref={titleRef}
            className={`${classes.mainTitle} ${titleInView ? classes.animate : ""}`}
          >
            01. ABOUT
          </Title>
          <Text
            ref={descRef}
            className={`${classes.description} ${descInView ? classes.animate : ""}`}
          >
            Growing up in Silicon Valley meant technology and innovation were always part of my world. Building my first PC with my dad at 11 got me hooked on understanding how things work, and I&apos;ve been exploring ever since. Through school, internships, and personal projects, I&apos;ve developed strong skills in software engineering, thriving on solving interesting problems and continuously learning something new.
          </Text>

          <Text className={`${classes.description} ${descInView ? classes.animate : ""}`}>
            Outside of coding, you&apos;ll probably find me at the gym, bouldering, hiking trails, or playing music on my guitar. I also have a passion for travel, experiencing new places always sparks fresh ideas and inspires me to think differently.
          </Text>
        </div>
      </div>
    </Container>
  );
}
