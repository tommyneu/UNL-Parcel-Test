// this is stuff loaded after the body
const button = document.querySelector('button')

if (button != null) {
    import("./modules/load-dynamic").then((module) => {
        button.addEventListener("click", () => {
            module.writeToDoc();
        })
    });
    
}