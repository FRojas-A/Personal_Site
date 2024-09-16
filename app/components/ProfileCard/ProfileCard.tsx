import SharedButton from "../SharedButton/SharedButton"
import SharedCard from "../SharedCard/SharedCard"
import profile from "./ProfileCard.module.css"

export default function ProfileCard() {

    const icon = (
        <svg width="16px" height="16px" viewBox="0 0 24 24" strokeWidth="2.1" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff" style={{marginLeft: '4px'}}><path d="M12 3L12 21M12 21L20.5 12.5M12 21L3.5 12.5" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    )

    const body = (
        <div>
            <ul>
                <li>Frank Rojas</li>
                <li>Age: 25</li>
                <li>Location: Austin, TX</li>
            </ul>
        </div>
    )

    const footer = (
        <div>
            <SharedButton text="Resume" icon={icon} size="md" />
        </div>
    )

    return (
        <div className={profile.container}>
            <SharedCard
                title = "Frank Rojas"
                body = {body}
                footer ={footer}

            />
        </div>
    )
}