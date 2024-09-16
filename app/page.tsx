import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import { Fragment } from "react";

export default function Home() {
  return (
    // <main className={styles.main}>
    <Fragment>
        <div className={styles.description}>
            {/* TODO: cycle through different language greetings */}
            <h1>Hello!</h1> 
            <p>
                My name is Frank Rojas. I am a software engineer with a focus on front-end development. Scroll down to find out more!
            </p>
            {/* <Image
            className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            />
            <ol>
            <li>
                Get started by editing <code>app/page.tsx</code>.
            </li>
            <li>Save and see your changes instantly.</li>
            </ol>

            <div className={styles.ctas}>
            <a
                className={styles.primary}
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                className={styles.logo}
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
                />
                Deploy now
            </a>
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
            >
                Read our docs
            </a>
            </div> */}
        </div>
        <ProfileCard />
        <AboutMe />
        <Projects />
        <ContactMe />    
    </Fragment>
  );
}
