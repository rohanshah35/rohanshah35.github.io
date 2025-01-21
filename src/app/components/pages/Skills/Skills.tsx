import { SkillsTable } from "@/app/components/skills-table/skills-table";
import classes from "@/app/components/pages/pages.module.css";

export default function Skills() {
  return (
    <section id="skills" className={classes.pageSection}>
      <SkillsTable />
    </section>
  );
}
