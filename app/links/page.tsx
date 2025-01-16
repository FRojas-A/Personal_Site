import { ReactElement } from "react";
import SharedButton from "../components/SharedButton/SharedButton";
import styles from "./links.module.css";
import { Links, socials } from "../config";

export default function links() {
  const email = socials.find((link) => link.name === "email")!;

  const buttonLinks = (link: Links): ReactElement => {
    return (
      <SharedButton
        text={link.name === "email" ? "Email" : link.name}
        size="lg"
        link={link.name === "email" ? "mailto:" + link.url : link.url}
        target="_blank"
      />
    );
  };

  return (
    <div className={styles.container} id="links">
      <div className={styles.title}>
        <h1>Links</h1>
      </div>
      {socials.map((link, index) => {
        return (
          <div className={styles[link.name.toLowerCase()]} key={index}>
            {buttonLinks(link)}
          </div>
        );
      })}
      <div className={styles.copy}>
        <SharedButton size="none" copy={email.url} />
      </div>
    </div>
  );
}
