import SharedButton from "../SharedButton/SharedButton"
import styles from "./AboutMe.module.css"

export default function AboutMe() {
    return (
        <div className={styles.container} id="about">
            <h1>About Me</h1>
            <p>
                more info about me, where I worked, what I worked on, interests, hobbies, etc.
            </p>
            <ul>
                <li>hobby 1</li>
                <li>hobby 2</li>
                <li>hobby 3</li>
            </ul>
            <ul>
                <li>like 1</li>
                <li>like 2</li>
                <li>like 3</li>
            </ul>
            {/* <SharedButton text="About Me" size="lg"/> */}
        </div>
    )
}