import { AboutHero } from "@/app/components/about-hero/about-hero";
import classes from "@/app/components/pages/pages.module.css";

export default function About() {
  return (
    <section id="about" className={classes.pageSection}>
      <AboutHero />
    </section>
  );
}
