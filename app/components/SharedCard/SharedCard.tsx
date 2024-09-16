import card from "./SharedCard.module.css"

export default function SharedCard(props: { title: string, body: string, footer: string, containerClass?: React.CSSProperties,  titleClass?: string, bodyClass?: string, footerClass?: string}) {
    // const classnames = `${props.titleClass} ${props.bodyClass} ${props.footerClass}`
    console.log(props.containerClass)
    return (
        <div className={`${card.container}`} style={props.containerClass}>
            <div className={`${card.title} ${card.titleClass}`}>
                {props.title}
            </div>
            <div className={`${card.body} ${card.bodyClass}`}>
                {props.body}
            </div>
            <div className={`${card.footer} ${card.footerClass}`}>
                {props.footer}
            </div>
        </div>
    )
}
