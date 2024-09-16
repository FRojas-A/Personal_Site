import SharedButton from "../SharedButton/SharedButton"
import styles from "./AboutMe.module.css"

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <h1></h1>
            <p></p>
            <SharedButton text="About Me" size="lg"/>
        </div>
    )
}