console.log("loaded")

export const writeToDoc = () => {
    const div = document.createElement("div")

    div.innerHTML = "text"

    document.body.appendChild(div)
}