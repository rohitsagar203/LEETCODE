function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}

// Example usage:
const helloWorldFunction = createHelloWorld();
const result = helloWorldFunction();
console.log(result);  // Output: "Hello World"