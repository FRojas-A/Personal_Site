import { SVGProps } from "react";

export function Hamburger(props:SVGProps<SVGSVGElement>) {
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