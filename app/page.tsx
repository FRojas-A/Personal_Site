import AboutMe from "./components/AboutMe/AboutMe";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import { Fragment } from "react";
import Introduction from "./components/Introduction/Introduction";
import { Experience } from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const disable = String(process.env.disable) === "false";
  return (
    <Fragment>
      <Introduction />
      <section id="content">
        {disable && <ProfileCard />}
        <AboutMe />
        <Experience />
        {disable && <Projects />}
        {disable && <ContactMe />}
        <Footer />
      </section>
    </Fragment>
  );
}
