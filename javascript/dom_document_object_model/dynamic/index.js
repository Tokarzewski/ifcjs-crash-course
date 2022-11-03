
const todoList =[
    "Go shopping",
    "Cooking",
    "Cleaning",
    "Meet Filip"
]

const container = document.querySelector(".main-container")

for (task of todoList) {
    const text = document.createElement("h3")
    text.textContent = task
    container.appendChild(text)
}