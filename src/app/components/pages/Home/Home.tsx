import { Hero } from "@/app/components/hero/hero";
import classes from "@/app/components/pages/pages.module.css";

export default function Home() {
  return (
    <section id="home" className={classes.pageSection}>
      <Hero />
    </section>
  );
}
