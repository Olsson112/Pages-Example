let list = ["Blå", "Röd", "Vit"]

list.forEach((color) => {
    let colorText = document.createElement("h2")
    colorText.innerText = color
    document.body.appendChild(colorText)
})