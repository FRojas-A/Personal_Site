"use client"
import Link from "next/link"
import nav from "./Navigation.module.css"
import { scrollTo } from "@/app/utils/utils"
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Navigation() {
    let isActive = usePathname() === "/";

    return (
        <div className={nav.container}>
            {isActive 
            ? <Fragment>
                <span onClick={() => scrollTo("home")} className={nav.item}>
                    Home
                </span>
                <Link href="/links" className={nav.item}>
                    Links
                </Link>
                <span className={nav.item} onClick={() => scrollTo("about")}>
                    About me
                </span>
                <span className={nav.item} onClick={() => scrollTo("projects")}>
                    Projects
                </span>
                <span className={nav.item} onClick={() => scrollTo("contact")}>
                    Contact me
                </span>
            </Fragment>
            : <div>
            {/* <Link href="/" className={nav.item} onClick={(e) => e.preventDefault()}>
                Home
            </Link> */}
            </div>
            }
            
        </div>
    )
}