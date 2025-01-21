import { Container, Image, Text, Title } from "@mantine/core";
import image from "@/app/components/assets/face.jpg";
import classes from "./hero.module.css";
import { IconDownload, IconUserPin } from '@tabler/icons-react';

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text className={classes.introText}>Hi there, I'm</Text>
          <Title className={classes.mainTitle}>Rohan Shah</Title>
          <Text className={classes.location}>
            <IconUserPin size={20} className={classes.locationIcon} /> Bay Area, California
          </Text>
          <Text className={classes.description}>
            I'm currently a second-year Computer Science student at Purdue University. 
            What really motivates me, though, are projects I work on outside of the classroom! 
          </Text>
          <Text className={classes.description}>
            Right now, I'm working on {" "}
            <a href="#home" className={classes.link} target="_blank" rel="noopener noreferrer">
              algowar.xyz
            </a>
          </Text>
          <a 
            href="/Rohan_Shah_Resume.pdf"
            download="Rohan_Shah_Resume.pdf"
            className={classes.customButton}
          >
            Resume
            <span className={classes.icon}>
                <IconDownload size={20} />
            </span>
          </a>
        </div>
        <Image src={image.src} className={classes.image} alt="Rohan Shah" />
      </div>
    </Container>
  );
}