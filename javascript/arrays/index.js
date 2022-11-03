// Reference data type - advanced
// Array

let colors = ["blue", "red"]

colors.push("yellow")
colors.unshift("green")
colors.splice(1, 0, "purple")

console.log(colors)
console.log(colors.includes("purple"))
console.log(colors.indexOf("purple"))

const bart = {
    name: "Bartlomiej",
    age: 27
}

const maria = {
    name: "Maria",
    age: 16
}

people = [bart, maria]

console.log(people)

const isAdult = (person) => {
    return person.age > 18
}

const adults = people.filter(isAdult)
console.log(adults)


const firstAdult = people.find(isAdult)
console.log(firstAdult)


const nameMap = (person) => {
    return person.name
}
const listNames1 = people.map(nameMap)
console.log(listNames1)

const listNames2 = people.map((person) => {
    return person.name
})
console.log(listNames2)

const listNames3 = people.map(person => person.name)
console.log(listNames3)