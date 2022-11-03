// Flow Control
// Conditionals

const name = "Bartlomiej";
const age = 27;

if (age >= 18) {
    console.log("This person is an adult.")
} else if (age < 18) {
    console.log("This person is not an adult.")
}


let x = 2

switch (x){
    case 3:
        // ...
        break
    case 2:
        // ...
        break
    default:
        // ....
        break
}


const circle = {
     radius: 5,
     color: 'blue',
     position: 'absolute'
};

if ('radius' in circle) console.log('yes, circle has radius');


// Loops

const person = {
    name : 'Pepe',
    age : 30
}

for (key in person) {
    console.log(key +', ' + person[key])
}


const colors = ['blue', 'red', 'green'];

for (let color of colors){
    console.log(color);
}