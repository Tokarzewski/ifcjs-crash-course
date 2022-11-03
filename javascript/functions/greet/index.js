
const greet = (person) => {
    console.log(`Hello ${person.name}!`)
}

const Bart = {
    name: "Bartlomiej",
    greet
}

const Wow = {
    name: "Krzysztof",
    greet
}

Bart.greet(Wow)
