import CustomizedTimeline from "@/app/components/timeline/timeline";
import classes from "@/app/components/pages/pages.module.css";

export default function Journey() {
  return (
    <section id="journey" className={classes.pageSection}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <h2
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontWeight: 900,
            fontSize: "30px",
            color: "#fff",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          02. JOURNEY
        </h2>
        <CustomizedTimeline />
      </div>
    </section>
  );
}
