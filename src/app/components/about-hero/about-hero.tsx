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
            Growing up in Silicon Valley, I was surrounded by technology and innovation from an early age. 
            Building my first PC with my dad at 11 sparked a curiosity about how things work that has stuck with me ever since. 
            Over the years, through school, internships, and personal projects, I&apos;ve built a solid foundation in software development, gaining hands-on experience and sharpening my skills. 
            I&apos;m driven by the excitement of tackling new challenges, building creative solutions, and constantly learning—things that keep me passionate about this field.

          </Text>
          <Text className={`${classes.description} ${descInView ? classes.animate : ""}`}>
            When I&apos;m not coding, you can see me at the gym lifting, bouldering, on a hike, or playing my guitar!
            I also love traveling. Visiting places around the world has unlocked vast creativity, inspiring fresh ideas and innovative solutions to challenges.
          </Text>
        </div>
      </div>
    </Container>
  );
}
