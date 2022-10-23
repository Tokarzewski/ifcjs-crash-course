// Arithmetic operators

let x = 10;
let y = 3;

console.log(x + y); //Add
console.log(x - y); //Substract
console.log(x * y); //Multiplication
console.log(x / y); //Division
console.log(x % y); //Module
console.log(x ** y); //Exponent

console.log(x++); //Postincrement
console.log(++x); //Preincrement
console.log(x--); //Postdecrement
console.log(--x); //Predecrement

// Assignment operators

x = 10; // Declare + assign
x = 5; // Assign

x += 5; // Assign and add. Equivalent to: x = x + 5;
x -= 5; // Assign and subtract. Equivalent to: x = x - 5;
x *= 5; // Assign and multiply. Equivalent to: x = x * 5;
x /= 5; // Assign and divide. Equivalent to: x = x / 5;


// Comparison operators
x = 1;

console.log(x === 2);
console.log(x !== 2);
console.log(x < 2);
console.log(x <= 2);
console.log(x > 2);
console.log(x >= 2);

// Strict equality operator (same type and value)
console.log('1' === x); //false

// Loose equality operator (same value)
console.log('1'== x ); //true

// Ternary operator
y = x > 2 ? 'yes' : 'no'; 
console.log(y) // 'no'


// Logical operators
// AND
console.log(false && true); // false
console.log(false && false); // false
console.log(true && true); // true
// OR
console.log(false || true); // true
console.log(false || false); // false
console.log(true || true); // true

/* In the last example the value returned is 1 because the evaluation of the logical 
expression is from left to right, and returns the first true value it encounters. 
This phenomenon is known as short-circuiting 🔌. 
This is useful when we want to set default values, 
so that when one variable is undefined or null, another will be used:
*/
let chosenColor;
let defaultColor = 'green';
let finalColor = chosenColor || defaultColor; // defaultColor is assigned