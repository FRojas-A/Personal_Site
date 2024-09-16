import { FunctionComponent } from "react"
import buttonStyle from "./SharedButton.module.css"

interface buttonInterface {
    text: string,
    icon?: React.ReactNode,
    size: string,
    className?: string,
    link?: string
    fn?: Function
}

export default function SharedButton(button: buttonInterface){

    return (
        <div className={buttonStyle.container}>
            {button.link 
            ? <a href={button.link} className={button.size}>
                <span>
                    {button.text}
                </span>
                {button.icon}
            </a>
            : <button className={`${buttonStyle[button.size]}`}>
                <span>{button.text}</span>
                {button.icon}
            </button>
            }
        </div>
    )
}