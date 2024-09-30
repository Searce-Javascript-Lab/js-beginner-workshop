try {
  // Code that may throw an error
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
} finally {
  console.log("This will run no matter what.");
}
// try: Defines a block of code to be tested for errors.
// catch: Handles the error if one occurs.
// finally: Executes code after try and catch regardless of the outcome.
