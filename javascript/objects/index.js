// Reference data type - advanced
// Objects

const name = "Bartlomiej";
const age = 27;

const person = {
    name: "Bartlomiej",
    age: 27
}

console.log(person)

console.log(person.age)
console.log(person['age'])

let Field = "age"
console.log(person[Field])

person.surname = "Tokarzewski"

console.log(person)

delete person.age

console.log(person)