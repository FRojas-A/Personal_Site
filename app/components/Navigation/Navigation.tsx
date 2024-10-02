"use client"
import Link from "next/link"
import nav from "./Navigation.module.css"
import { scrollTo } from "@/app/utils/utils"
import { usePathname } from "next/navigation";
import { Fragment, useState, SVGProps } from "react";
import { useScroll } from "@/app/contexts/ScrollContext";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollToSection } = useScroll()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    let path = usePathname();
    const disable = String(process.env.disable) === "true"

    function Home() {
        return (
            <Link href="/" className={nav.item} onClick={(e) => {
                if (path === "/") {
                    e.preventDefault();
                    scrollTo("home");
                }
                toggleMenu();
            }}>
                Home
            </Link>
        )
    }

    function Links() {
        return (
            <Link href="/links" className={nav.item} onClick={(e) => {
                if (path === "/links") {
                    e.preventDefault();
                    scrollTo("home");
                }
                toggleMenu();
            }}>
                Links
            </Link>
        )
    }

    function AboutMe() {
        return (
            <Link href="/" className={`${nav.item}`} onClick={(e) => {
                if (path === "/") {
                    e.preventDefault();
                    scrollTo("about");
                } else {
                    scrollToSection("about")
                }
                toggleMenu();
            }}>
                About Me
            </Link>
        )
    }

    function Projects() {
        return (
            <Link href="/" className={`${nav.item} ${nav.disabled}`} onClick={(e) => {
                e.preventDefault();
                if (path === "/") {
                    scrollTo("projects");
                } else {
                    scrollToSection("projects")
                }
                toggleMenu();
            }}>
                Projects
            </Link>
        )
    }
    
    function ContactMe() {
        return (
            <Link href="/" className={`${nav.item} ${nav.disabled}`} onClick={(e) => {
                e.preventDefault();
                if (path === "/") {
                    scrollTo("contact");
                } else {
                    scrollToSection("contact")
                }
                toggleMenu();
            }}>
                    Contact Me
            </Link>
        )
    }

    function Exit(props:SVGProps<SVGSVGElement>) {
        return (
            <svg 
                width="48px" 
                height="48px" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                color="#000000"
                {...props}
            >
                <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        )
    }

    function Hamburger(props:SVGProps<SVGSVGElement>) {
        return (
            <svg 
                width="32px" 
                height="32px" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                color="#000000"
                {...props}
            >
                <path d="M3 5H21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3 12H21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3 19H21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        )
    }

    return (
        <Fragment>
            <nav className={nav["container"]}>
                <div className={nav["nav-items"]}>
                    <Home />
                    <Links />
                    <AboutMe />
                    <Projects />
                    <ContactMe />
                </div>
            </nav>
            <nav className={nav["mobile-container"]}>
                <span className={nav.hamburger} onClick={() => toggleMenu()}>
                    <Hamburger
                        strokeDasharray={50}
                        strokeDashoffset={isOpen ? 50 : 0}
                        className={nav.icon}
                    />
                    <Exit 
                        strokeDasharray={50}
                        strokeDashoffset={isOpen ? 0 : 50}
                        className={nav.icon}   
                    />
                </span>
                <div className={isOpen ? `${nav["menu"]} ${nav.show} ` : nav["menu"]}>
                    <ul>
                        <li >
                            <Home />
                        </li>
                        <li >
                            <Links />
                        </li>
                        <li >
                            <AboutMe />
                        </li>
                        <li >
                            <Projects />
                        </li>
                        <li >
                            <ContactMe />
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}