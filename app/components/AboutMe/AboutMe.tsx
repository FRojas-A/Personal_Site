import SectionWrapper from "@/app/wrappers/SectionWrapper";
import styles from "./AboutMe.module.css";
import { socials, otherLinks, Links } from "@/app/config";
import { Fragment } from "react";

export default function AboutMe() {
  const instagram: Links = socials.find((link) => link.name === "Instagram")!;
  const etsy: Links = otherLinks.find((link) => link.name === "Etsy")!;
  const links: Links[] = socials.filter((link) => link.name !== "GitHub");

  return (
    <SectionWrapper name="about">
      <div className={styles.container} id="about">
        <h1>About Me</h1>
        <div className={styles["description"]}>
          <p>
            I grew up in Houston, TX, where I graduated from the University of
            Houston with a Bachelor's degree in Computer Information Systems.
            Recently, I worked at General Motors eCommerce as a software
            engineer focused on front-end development. I worked on projects such
            as revamping the authentication flow to utilize MSAL, migrating APIs
            from APIC to APIM, fixing security vulnerabilities, and working on
            the order history micro front-end application. I gained a lot of
            knowledge in my time there and hope to utilize it in future
            projects.
          </p>
          <br />
          <p>
            In my free time I like to{" "}
            <a
              target="_blank"
              href={instagram.url}
              aria-label={instagram.name + "(Opens in a new tab)"}
            >
              bird watch
            </a>
            , boulder, play video games, and lounge around with my girlfriend, 2
            dogs, and cat! I also design and sell functional 3D printed{" "}
            <a
              target="_blank"
              href={etsy.url}
              aria-label={etsy.name + "(Opens in a new tab)"}
            >
              car parts
            </a>
            .
          </p>
          <br />
          <p>
            I'm always looking for new challenges and opportunities to grow both
            personally and professionally. If you'd like to connect, feel free
            to reach out through{" "}
            {links.map((link, index) => {
              return (
                <Fragment key={index}>
                  {links.length - 1 === index ? (
                    <>
                      or{" "}
                      <a
                        target="_blank"
                        href={link.url}
                        aria-label={link.name + " (Opens in a new tab)"}
                      >
                        {link.name}
                      </a>
                      !
                    </>
                  ) : (
                    <>
                      <a
                        target="_blank"
                        href={link.url}
                        aria-label={link.name + " (Opens in a new tab)"}
                      >
                        {link.name}
                      </a>
                      ,{" "}
                    </>
                  )}
                </Fragment>
              );
            })}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
