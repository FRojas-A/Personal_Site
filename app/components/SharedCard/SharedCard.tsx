import { Fragment, ReactNode } from "react"
import card from "./SharedCard.module.css"

export default function SharedCard(props: { title: string, body: string | ReactNode, footer: string | ReactNode }) {
    return (
        <Fragment>
            <div className={card.title}>
                {props.title}
            </div>
            <div className={card.body}>
                {props.body}
            </div>
            <div className={card.footer}>
                {props.footer}
            </div>
        </Fragment>
    )
}
