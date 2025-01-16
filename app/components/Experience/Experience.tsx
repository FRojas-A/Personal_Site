import styles from "./Experience.module.css";
import jobData from "./Experience.json";
import { formatDate } from "@/app/utils/utils";
import { SharedPill } from "../SharedPill/SharedPill";
import SectionWrapper from "@/app/wrappers/SectionWrapper";

export default function Experience() {
  const { jobs } = jobData;
  const dateOptions = {
    month: "short",
    year: "numeric",
  };

  return (
    <SectionWrapper name="experience">
      <section id="experience" className={styles["experience"]}>
        <h1 className={styles["title"]}>Experience</h1>
        {jobs.map((job, index) => {
          return (
            <div key={index} className={styles["job-container"]}>
              <div className={styles["info"]}>
                <a
                  target="_blank"
                  href={job.urls[0]}
                  className={styles["link"]}
                  aria-label={job.company + " (Opens in a new window)"}
                >
                  <span></span>
                  <h4>
                    {job.title} - {job.company}
                  </h4>
                </a>
                <h5>
                  {formatDate(job.dateRange[0], dateOptions)} -{" "}
                  {formatDate(job.dateRange[1], dateOptions)}
                </h5>
              </div>
              <div className={styles["description"]}>
                <p>{job.description}</p>
                {}
                <div className={styles["skills"]}>
                  {job.skills.map((skill, index) => {
                    return <SharedPill text={skill} key={index} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </SectionWrapper>
  );
}
