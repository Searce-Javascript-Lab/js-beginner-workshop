function demoScope() {
  // Example 1: Block Scope with `let`
  {
    let blockScopedVariable = "I am inside a block";
    console.log(blockScopedVariable); // Output: "I am inside a block"
  }
  // console.log(blockScopedVariable);  // Error: blockScopedVariable is not defined

  // Example 2: Block Scope with `const`
  {
    const constantVariable = "I am also inside a block";
    console.log(constantVariable); // Output: "I am also inside a block"
  }
  // console.log(constantVariable);  // Error: constantVariable is not defined

  // Example 3: Function Scope with `var`
  if (true) {
    var functionScopedVariable = "I am accessible outside the block";
  }
  console.log(functionScopedVariable); // Output: "I am accessible outside the block"

  // Example 4: Hoisting with `var`
  console.log(hoistedVar); // Output: undefined
  var hoistedVar = "I am hoisted";
  console.log(hoistedVar); // Output: "I am hoisted"

  // Example 5: No Hoisting with `let` and `const`
  // console.log(notHoistedLet);  // Error: Cannot access 'notHoistedLet' before initialization
  let notHoistedLet = "I am not hoisted";

  // console.log(notHoistedConst);  // Error: Cannot access 'notHoistedConst' before initialization
  const notHoistedConst = "I am not hoisted either";
}

demoScope();

// Block Scope:
// Variables declared with let and const are only accessible within the block ({ ... }) in which they are defined.
// Function Scope:
// Variables declared with var are accessible throughout the function, even if declared inside a block.
// Hoisting:

// Variables declared with var are hoisted to the top of their scope, but only the declaration is hoisted (not the assignment).
// let and const are not hoisted, which prevents accidental use before they are defined.
