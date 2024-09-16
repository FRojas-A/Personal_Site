import nav from "./Navigation.module.css"

export default function Navigation() {
    return (
        <div className={nav.container}>
            <span className={nav.item}>
                Home
            </span>
            <span className={nav.item}>
                About me
            </span>
            <span className={nav.item}>
                Projects
            </span>
            <span className={nav.item}>
                Contact me
            </span>
        </div>
    )
}