// Reference data type - advanced
// Functions

function greet1(name){
    console.log('Hi!👋' + name)
}
greet1('Antonio') // Hi!👋Antonio

const Antonio = {
    name: "Antonio"
} 

function greet2(person){
    console.log(`Hi!👋${person.name}`)
}
greet2(Antonio) // Hi!👋Antonio

function squared(number){
    return number * number
}
console.log(squared(8)) //64

function walk(){
    console.log('walk');
}
walk() // walk

function sum(...args){
    console.log(args)
}
sum(1,2,3,4,5,6)

function sum(discount, ...prices){
    const total = prices.reduce((a,b) => a + b)
    return total * (1 - discount)
}
console.log(sum(0.1,20,30)) //45

function new_interest(principal, rate = 3.5, years = 5){
    return principal * rate/ 100 * years
}
console.log(new_interest(10000)) //1750

function helloWorld1 () {
    console.log('Hello World 1!')
}

const helloWorld2 = function(){
    console.log('Hello World 2!')
} 

const helloWorld3 = () => {
    console.log('Hello World 3!')
}

helloWorld1();
helloWorld2();
helloWorld3();

// standard function declaration
function hello1 (message) {
    console.log(message)
}

// object function
const hello2 = function(message){
    console.log(message)
} 

// arrow function
const hello3 = (message) => {
    console.log(message)
}

// if there is only one argument than brackets are not needed
const hello4 = message => console.log(message)

hello1("Hello World 1!")
hello2("Hello World 2!")
hello3("Hello World 3!")
hello4("Hello World 4!")