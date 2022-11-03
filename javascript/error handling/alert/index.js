function divideTwoNumbers(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
      throw new Error("Both arguments must be of type number");
    }
  
    if (number2 === 0) {
      throw new Error("You cannot divide by zero!");
    }
  
    return number1 / number2;
  }
  
  function main() {
    try {
      const result = divideTwoNumbers(1, "0");
      alert(`The result is ${result}`);
    } catch (error) {
      alert(`There was an error: ${error}`);
    }
  }
  
  main();