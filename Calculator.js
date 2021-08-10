class Calculator {
  add (num1, num2){
    return num1 + num2
  }

  subtract(num1, num2){
    return num2 - num1
  }

  multiply(num1, num2){
    return num1 * num2
  }

  divide(num1, num2){
    return num1 / num2

  }

  findAreaOfCircle(radius){
    return 2 * Math.PI * radius; 
  }

  findAreaOfRectangle(side1, side2){
    return side1 * side2
  }
}
module.exports = Calculator;