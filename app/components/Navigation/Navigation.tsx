"use client"
import Link from "next/link"
import nav from "./Navigation.module.css"
import { scrollTo } from "@/app/utils/utils"
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Navigation() {
    let isHome = usePathname() === "/";
    const disable = String(process.env.disable) === "true"

    return (
        <div className={nav.container}>
            {isHome
            ? <Fragment>
                <span onClick={() => scrollTo("home")} className={nav.item}>
                    Home
                </span>
                <Link href="/links" className={nav.item}>
                    Links
                </Link>
                <span className={`${nav.item} ${nav.disabled}`} onClick={() => scrollTo("about")}>
                    About Me
                </span>
                <span className={`${nav.item} ${nav.disabled}`} onClick={() => scrollTo("projects")}>
                    Projects
                </span>
                <span className={`${nav.item} ${nav.disabled}`} onClick={() => scrollTo("contact")}>
                    Contact Me
                </span>
            </Fragment>
            : <Fragment>
                <Link href="/" className={nav.item} onClick={(e) => {
                    if (!disable) {
                        e.preventDefault()
                    }
                }}>
                    Home
                </Link>
                <span onClick={() => scrollTo("links")} className={nav.item}>
                    Links
                </span>
                <Link href="/" className={`${nav.item} ${nav.disabled}`} onClick={(e) => {
                    if (disable) {
                        e.preventDefault()
                    }
                }}>
                    About Me
                </Link>
                <Link href="/" className={`${nav.item} ${nav.disabled}`} onClick={(e) => {
                    if (disable) {
                        e.preventDefault()
                    }
                }}>
                    Projects
                </Link>
                <Link href="/" className={`${nav.item} ${nav.disabled}`} onClick={(e) => {
                    if (disable) {
                        e.preventDefault()
                    }
                }}>
                    Contact Me
                </Link>
            </Fragment>
            }
        </div>
    )
}