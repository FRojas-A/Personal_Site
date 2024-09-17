import SharedButton from "../components/SharedButton/SharedButton"
import styles from "./links.module.css"

export default function links() {

    const email = "frankrojas215@gmail.com"
    const icon = (
        <svg width="24px" height="24px" strokeWidth="2.1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
            <path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="#000000" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="#000000" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
    const check = (
        <svg width="24px" height="24px" strokeWidth="2.1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
            <path d="M5 13L9 17L19 7" stroke="#000000" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )

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
            <div className={styles.copy}>
                <SharedButton
                    icon = {icon}
                    size = "none"
                    copy = {email}
                />
            </div>
        </div>
    )
}