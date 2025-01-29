import { Container, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import image from "@/app/components/assets/face.jpg";
import classes from "./hero.module.css";
import { IconDownload, IconUserPin } from "@tabler/icons-react";

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text className={classes.introText}>Hi there, I&apos;m</Text>
          <Title className={classes.mainTitle}>Rohan Shah</Title>
          <Text className={classes.location}>
            <IconUserPin size={20} className={classes.locationIcon} /> San Francisco Bay Area, California
          </Text>
          <Text className={classes.description}>
            I&apos;m currently a second-year Computer Science student at Purdue University. 
            What really motivates me is what I work on outside of the classroom! 
          </Text>
          <Text className={classes.description}>
            Right now, I&apos;m developing{" "}
            <Link
              href="https://algowar.xyz"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              algowar.xyz
            </Link>
          </Text>
          <Link
            href="/Rohan_Shah_Resume.pdf"
            className={classes.customButton}
            download="Rohan_Shah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <span className={classes.icon}>
              <IconDownload size={20} />
            </span>
          </Link>
        </div>
        <Image src={image.src} className={classes.image} alt="Rohan Shah" />
      </div>
    </Container>
  );
}
