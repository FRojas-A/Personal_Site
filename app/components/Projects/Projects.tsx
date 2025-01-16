import SectionWrapper from "@/app/wrappers/SectionWrapper";
import styles from "./Projects.module.css";
import { projects } from "./Projects.json";

export default function Projects() {
  return (
    <SectionWrapper name="projects">
      <section className={styles.container} id="projects">
        <h1>Projects</h1>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles["project"]}>
              <a
                target="_blank"
                href={project.url}
                aria-label={project.name + " (Opens in a new tab)"}
              >
                <span />
                <h4>{project.name}</h4>
              </a>
              <div>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </SectionWrapper>
  );
}
