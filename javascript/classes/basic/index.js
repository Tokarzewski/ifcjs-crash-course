// Classes
class Person {
    #name
    constructor(name) {
        this.#name = name
    }
    greet() {
        const msg = `Hi, my name is ${this.#name}`
        console.log(msg)
    }
}

// Instance of class
const Bart = new Person("Bartłomiej")

// Call method greet
Bart.greet()
console.log(Bart.name)


// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism
