import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            setWheel(parseInt(changeEvent.target.value))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)


export const Wheels = () => {
    let html = "<select id='resource'><option value='0'>Select your wheel...</option>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `
            <option value="${wheel.id}" /> ${wheel.style}`
    }

    html += "</select>"
    return html
}
