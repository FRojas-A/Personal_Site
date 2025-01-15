import SectionWrapper from "@/app/wrappers/SectionWrapper";
import styles from "./AboutMe.module.css"

export default function AboutMe() {
    return (
        <SectionWrapper name="about">
            <div className={styles.container} id="about">
                <div className={styles["about-container"]}>
                    <h1>About Me</h1>
                    <p>
                        I grew up in Houston, TX, where I graduated from the University of Houston with a Bachelor's in Computer Information Systems. Recently, I worked at General Motors eCommerce as a software engineer focused on front-end development. I worked on projects such as revamping the authentication flow to utilize MSAL, migrating APIs from APIC to APIM, fixing security vulnerabilities, and working on the order history micro front-end application. I gained a lot of knowledge in my time there and hope to utilize it in future projects.
                    </p>
                    <br />
                    <p>
                        In my free time I like to <a target="_blank" href="https://www.instagram.com/frojas.photos/">bird watch</a>, boulder, play video games, and lounge around with my girlfriend, 2 dogs, and cat! I also design and sell functional 3D printed <a target="_blank" href="https://www.etsy.com/shop/RojasConcepts">car parts</a>.
                    </p>
                    <br />
                    <p>I'm always looking for new challenges and opportunities to grow both personally and professionally. If you'd like to connect, feel free to reach out through email or LinkedIn!</p>
                </div>
            </div>
        </SectionWrapper>
    )
}