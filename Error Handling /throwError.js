function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  divide(4, 0);
} catch (error) {
  console.error("Error:", error.message); // Output: Error: Division by zero is not allowed.
}
