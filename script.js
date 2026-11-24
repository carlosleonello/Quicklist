const form = document.querySelector(".add-item-form")
const itemInput = document.querySelector(".add-item-form input")
const shoppingList = document.querySelector(".shopping-list")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const itemName = itemInput.value.trim()

    if (itemName === "") {
        return
    }

    const item = document.createElement("li")
    item.classList.add("shopping-item")

    const label = document.createElement("label")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const itemText = document.createElement("span")
    itemText.textContent = itemName

    const removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.classList.add("remove-item")

    const removeIcon = document.createElement("img")
    removeIcon.src = "assets/trash.svg"
    removeIcon.alt = "Remover " + itemName

    label.append(checkbox, itemText)
    removeButton.append(removeIcon)
    item.append(label, removeButton)
    shoppingList.append(item)

    itemInput.value = ""
})