import SharedButton from "../SharedButton/SharedButton";
import styles from "./AboutMe.module.css"

export default function AboutMe() {
    const skills = ["HTML", "CSS", "React.js", "Stencil.js", "Next.js", "Node.js", "Express.js", "JavaScript", "TypeScript"];
    const hobbies = ["Video Games", "3D Printing", "Painting", "Bouldering", "Cars", "Photography"]
    const download = (
        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
            <path d="M6 20L18 20" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
    return (
        <div className={styles.container} id="about">
            <div className={styles["about-container"]}>
                <h1>About Me</h1>
                <p>
                    I grew up in Houston, TX, where I graduated from the University of Houston with a Bachelor's in Computer Information Systems. Recently, I worked at General Motors eCommerce as a software engineer focused on front-end development. I worked on projects such as revamping the authentication flow to utilize MSAL, migrating APIs from APIC to APIM, fixing security vulnerabilities, and working on the order history micro front-end application. I gained a lot of knowledge in my time there and hope to utilize it in future projects.
                </p>
            </div>
            <div className={styles["skills-container"]}>
                <h2>Skills and Technologies</h2>
                {/* <p>I have a passion for tackling challenging problems and approach each task with a creative, out of the box perspective. I'm motivated by the drive to constantly improve, always looking for opportunities to refine my skills.</p> */}
                <ul className={styles.skills}>
                    {skills.map((skill, index) => {
                        return (
                            <li key={index}>{skill}</li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles["hobbies-container"]}>
                <h2>Hobbies and Interests</h2>
                <ul className={styles.hobbies}>
                    {hobbies.map((hobby, index) => {
                        return (
                            <li key={index}>{hobby}</li>
                        )
                    })}
                </ul>
            </div>
            <p>I'm always looking for new challenges and opportunities to grow both personally and professionally. If you'd like to connect, feel free to reach out through email or LinkedIn!</p>
            <div className={styles["download-resume"]}>
                <SharedButton
                    text="Download Resume"
                    icon={download}
                    link="/pdfs/Frank_Rojas_Resume_2024.pdf"
                    size="lg"
                    download={"Frank_Rojas_Resume_2024"}
                />
            </div>
        </div>
    )
}