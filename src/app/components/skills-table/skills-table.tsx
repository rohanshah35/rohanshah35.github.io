import React from 'react';
import { Container, SimpleGrid, Text, Title, ThemeIcon } from '@mantine/core';
import { IconCode, IconDatabase, IconTool, IconPackage } from '@tabler/icons-react';
import classes from "./skills-table.module.css";
import { useAnimateOnScroll } from "@/app/components/useAnimateOnScroll";

export const skillsData = [
  {
    category: 'LANGUAGES',
    skills: ['Python', 'Java', 'C/C++', 'JavaScript/TypeScript', 'HTML/CSS', 'SQL'],
    icon: IconCode,
  },
  {
    category: 'FRAMEWORKS',
    skills: ['Spring Boot', 'Express.js', 'Flask', 'React', 'Next.js', 'Node.js', 'Maven'],
    icon: IconPackage,
  },
  {
    category: 'LIBRARIES',
    skills: ['pandas', 'NumPy', 'matplotlib', 'TensorFlow', 'Selenium', 'BeautifulSoup', 'Jsoup'],
    icon: IconDatabase,
  },
  {
    category: 'DEVELOPER TOOLS',
    skills: ['Git / GitHub', 'AWS', 'Docker', 'Redis', 'Postman'],
    icon: IconTool,
  },
];

interface SkillsCategoryProps {
  icon: React.ElementType;
  category: string;
  skills: string[];
}

function SkillsCategory({ icon: Icon, category, skills }: SkillsCategoryProps) {
  const [ref, inView] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${classes.skillCategory} ${inView ? classes.animate : ""}`}
    >
      <ThemeIcon variant="light" size={40} radius={40} className={classes.skillIcon}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7} size="lg" className={classes.skillCategoryTitle}>
        {category}
      </Text>
      <Text size="sm" className={classes.skillList}>
        {skills.join(', ')}
      </Text>
    </div>
  );
}

export function SkillsTable() {
  const skillSections = skillsData.map((section, index) => (
    <SkillsCategory {...section} key={index} />
  ));

  return (
    <Container className={classes.skillsWrapper}>
      <Title className={classes.skillsTitle}>04. SKILLS</Title>
      <Container size={560} p={0}>
      </Container>
      <SimpleGrid mt={40} cols={2} spacing="lg">
        {skillSections}
      </SimpleGrid>
    </Container>
  );
}
