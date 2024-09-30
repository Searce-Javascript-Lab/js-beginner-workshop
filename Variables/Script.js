function showVariables() {
  // 1. Declaring variables using `let`
  let message = "Hello, world!";
  let number = 42;
  // message is a string variable.
  // number is a number variable.
  // These variables can be changed later in the program.

  // 2. Declaring variables using `const`
  const pi = 3.14159;
  const greeting = "Good Morning!";
  // pi holds the value of π (pi) and cannot be changed after initialization.
  // greeting stores a greeting message.
  // Constants declared with const should always be initialized at the time of declaration.

  // 3. Declaring variables using `var`
  var name = "Alice";
  // name is declared using var, which has function scope.
  // Variables declared with var are less predictable due to hoisting and should be avoided in modern JavaScript.
  let output = `
      Using let:
      - message: ${message}
      - number: ${number}
  
      Using const:
      - pi: ${pi}
      - greeting: ${greeting}
  
      Using var:
      - name: ${name}
    `;

  // Display the concatenated string in the HTML paragraph element
  document.getElementById("output").innerText = output;
}
