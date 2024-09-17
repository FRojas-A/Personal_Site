import SharedButton from "../components/SharedButton/SharedButton"
import styles from "./links.module.css"

export default function links() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>
                    Links
                </h1>
            </div>
            <div className={styles.linkedIn}>
                <SharedButton 
                    text = "LinkedIn"
                    size = "lg"
                    link = "https://www.linkedin.com/in/frojas-uh/"
                    target = "_blank"
                    />
            </div>
            <div className={styles.instagram}>
                <SharedButton
                    text = "Instagram"
                    size = "lg"
                    link = "https://www.instagram.com/frojas.photos/"
                    target = "_blank"
                    />
            </div>
            <div className={styles.email}>
                <SharedButton
                    text = "Email"
                    size = "lg"
                    link = "mailto:frankrojas215@gmail.com"
                    target = "_blank"
                />
            </div>
        </div>
    )
}