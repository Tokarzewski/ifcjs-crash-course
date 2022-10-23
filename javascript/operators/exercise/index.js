const columnHeight = 3.5; //m
const columnAreaBase = 0.5 * 0.5; //m2
const volume = columnHeight * columnAreaBase; //m3

const density = 2400; // kg/m3

const columnMass = volume * density; //2100
console.log(columnMass);