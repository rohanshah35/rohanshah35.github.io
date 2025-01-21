import React from 'react';
import { Container, Title, Group } from '@mantine/core';
import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './contact-section.module.css';
import { useAnimateOnScroll } from '@/app/components/useAnimateOnScroll';

export function ContactSection() {
  const [ref, inView] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <Container
      ref={ref}
      className={`${classes.contactWrapper} ${inView ? classes.animate : ''}`}
    >
      <Title className={classes.contactTitle}>05. CONTACT</Title>
      <Container size={560} p={0}>
        <p className={classes.contactDescription}>
          Feel free to reach out via email, check out my GitHub, or connect with me on LinkedIn.
        </p>
      </Container>
      <Group className={classes.buttonGroup} mt="xl">
        <a
          className={`${classes.contactButton} ${classes.redGradient}`}
          href="mailto:rohanshahsf@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMail size={28} stroke={1.5} />
        </a>

        <a
          className={`${classes.contactButton} ${classes.redGradient}`}
          href="https://github.com/rohanshah35"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub size={28} stroke={1.5} />
        </a>

        <a
          className={`${classes.contactButton} ${classes.redGradient}`}
          href="https://www.linkedin.com/in/rohanshah2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={28} stroke={1.5} />
        </a>
      </Group>
    </Container>
  );
}
