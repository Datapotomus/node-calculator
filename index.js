let Calculator = require('./Calculator');

let calc = new Calculator();

console.log("add 15 and 4: ", calc.add(15,4))
console.log("difference 15 and 4: ", calc.subtract(15,4))
console.log("product 15 and 4: ", calc.multiply(15,4))
console.log("quotient 15 and 4: ", calc.divide(15,4))
console.log("Circle Area radius 3.75: ", calc.findAreaOfCircle(3.75).toFixed(2))
console.log("Area of a rectangle 6 x 23: ", calc.findAreaOfRectangle(6, 23))