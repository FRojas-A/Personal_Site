export function scrollTo(elementName: string) {
    let element = document.getElementById(elementName)
    if (element) element.scrollIntoView({ behavior: "smooth" })
}

// export async function copy(text:string) {
//     try {
//         await navigator.clipboard.writeText(text);
//     } catch (error) {
//         console.error(error)
//     }
// }