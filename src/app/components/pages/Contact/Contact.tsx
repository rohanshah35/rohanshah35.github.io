import { ContactSection } from '@/app/components/contact-section/contact-section';
import classes from "@/app/components/pages/pages.module.css";

export default function Contact() {
  return (
    <section id="contact" className={classes.pageSection}>
      <ContactSection />
    </section>
  );
}
