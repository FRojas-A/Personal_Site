import { SVGProps } from "react";

export default function Check(props:SVGProps<SVGSVGElement>) {
    return (
        <svg 
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