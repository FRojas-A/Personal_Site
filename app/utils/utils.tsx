import { Fragment } from "react"

export function scrollTo(elementName: string) {
    let element = document.getElementById(elementName)
    if (element) element.scrollIntoView({ behavior: "smooth" })
}