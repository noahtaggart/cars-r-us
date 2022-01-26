import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            setTechnology(parseInt(changeEvent.target.value))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)


export const Technologies = () => {
    let html = "<select id='resource'><option value='0'>Select your paint color...</option>"

    
    for (const technology of technologies) {
        html += `
            <option value="${technology.id}" /> ${technology.package}`
    }

    html += "</select>"
    return html
}
