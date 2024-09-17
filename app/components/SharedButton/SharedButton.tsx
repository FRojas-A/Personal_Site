"use client"
import { SVGProps, useEffect, useState } from "react"
import buttonStyle from "./SharedButton.module.css"

interface buttonInterface {
    text?: string,
    icon?: React.ReactNode,
    size: string,
    className?: string,
    link?: string
    fn?: Function
    target?: string
    copy?: string
}

export default function SharedButton(button: buttonInterface) {

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied) setCopied(false);
        }, 1500)
        return () => clearTimeout(timeout)
    }, [copied])

    return (
        <div className={buttonStyle.container}>
            {button.link
            ? <a href={button.link} target={button.target} className={buttonStyle[button.size]}>
                <span className={buttonStyle.text}>
                    {button.text}
                </span>
                {button.icon}
            </a>
            : <a className={`${buttonStyle[button.size]}`} onClick={async () => {if (button.copy)
                try {
                    setCopied(true)
                    await navigator.clipboard.writeText(button.copy)
                } catch(error) {
                    console.error(error)
                }
            }}>
                {button.text && <span className={buttonStyle.text}>
                    {button.text}
                </span>}
                {button.copy && <span className={buttonStyle.icon}>
                    <Copy
                        // visibility={copied ? "hidden" : "visible"}
                        strokeDasharray= {50}
                        strokeDashoffset = {copied ? -50 : 0}
                        className={buttonStyle.position}
                    />
                    <Check 
                       //  visibility={copied ? "visible" : "hidden"}
                        strokeDasharray= {50}
                        strokeDashoffset = {copied ? 0 : -50}
                        className={buttonStyle.position}
                    />
                </span>}
            </a>
            }
        </div>
    )
}

function Copy(props:SVGProps<SVGSVGElement>) {
    return (
        <svg 
        width="24px" 
        height="24px" 
        strokeWidth="2.1" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        color="#000000"
        {...props}
        >
            <path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="#000000" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="#000000" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
}

function Check(props:SVGProps<SVGSVGElement>) {
    return (
        <svg 
        width="24px" 
        height="24px" 
        viewBox="0 0 24 24"
        strokeWidth="2.1" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        color="#000000"
        {...props}
        >
            <path d="M5 13L9 17L19 7" stroke="#000000" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
}