export function scrollTo(elementName: string) {
  let element = document.getElementById(elementName);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

export function formatDate(datestring: string, options: {} = {}): string {
  const date = new Date(datestring);

  return date.toLocaleDateString("en-US", options);
}

// export async function copy(text:string) {
//     try {
//         await navigator.clipboard.writeText(text);
//     } catch (error) {
//         console.error(error)
//     }
// }
