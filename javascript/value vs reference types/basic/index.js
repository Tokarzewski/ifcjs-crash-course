// data types
// number, text, boolean, null, undefined

//reference types
// object, function, array


function increaseByOne(number) {
    number+=1
}

let x = 1
increaseByOne(x)
console.log(x)

function increaseByTwo(number) {
    return number+=2
}

let y = 1
y = increaseByTwo(y)
console.log(y)