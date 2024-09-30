// 1. Regular Function Declaration
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// 2. Function with Parameters
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("John"); // Output: Hello, John!

// 3. Function with Return Value
function sum(a, b) {
  return a + b;
}
let result = sum(5, 10);
console.log("Sum: " + result); // Output: Sum: 15

// 4. Anonymous Function
const multiply = function (x, y) {
  return x * y;
};
console.log("Multiplication: " + multiply(4, 5)); // Output: Multiplication: 20

// 5. Arrow Function (ES6)
const add = (a, b) => a + b;
console.log("Arrow Function Result: " + add(7, 3)); // Output: Arrow Function Result: 10

// 6. Function Scope Example
let globalVar = "I am a global variable";
function testScope() {
  let localVar = "I am a local variable";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible inside this function
}
testScope();
// console.log(localVar); // Uncommenting this line will cause an error: localVar is not defined

// 7. Higher-Order Function Example
function applyOperation(num, operation) {
  return operation(num);
}
// Function to be passed as an argument
function square(x) {
  return x * x;
}
// Using the higher-order function
const a = applyOperation(5, square);
console.log("Square of 5: " + a); // Output: Square of 5: 25

// using Map()
const numbers = [1, 2, 3, 4, 5];

// Using the built-in higher-order function map
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 8. Using Default Parameters
function greetWithDefault(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greetWithDefault(); // Output: Hello, Guest!
greetWithDefault("Alice"); // Output: Hello, Alice!

// 9. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed!");
})(); // Output: IIFE executed!

// // Using traditional function syntax
// (function() {
//   const a = 5;
//   const b = 10;
//   const sum = a + b;
//   console.log("Sum: " + sum); // Output: Sum: 15
// })();

// // // Using arrow function syntax
// (() => {
//   const a = 7;
//   const b = 3;
//   const product = a * b;
//   console.log("Product: " + product); // Output: Product: 21
// })();
