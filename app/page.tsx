import AboutMe from "./components/AboutMe/AboutMe";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import { Fragment } from "react";
import Introduction from "./components/Introduction/Introduction";

export default function Home() {
    const disable = String(process.env.disable) === "false"
  return (
    <Fragment>
        <Introduction />
        {disable && <ProfileCard />}
        {disable && <AboutMe />}
        {disable && <Projects />}
        {disable && <ContactMe />}    
    </Fragment>
  );
}
