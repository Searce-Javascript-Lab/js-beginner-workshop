// Strings Example
console.log("---- String Methods and Manipulations ----");

let text = "JavaScript is a powerful language.";
console.log("Original String: " + text);

// String length
console.log("Length of the string: " + text.length);

// Changing case
console.log("Uppercase: " + text.toUpperCase());
console.log("Lowercase: " + text.toLowerCase());

// Searching within a string
console.log("Position of 'powerful': " + text.indexOf("powerful"));
console.log("Position of 'Python': " + text.indexOf("Python")); // Returns -1 if not found

// Slicing and substring
console.log("Slice (0, 10): " + text.slice(0, 10)); // Extracts 'JavaScript'
console.log("Substring (0, 10): " + text.substring(0, 10)); // Extracts 'JavaScript'

// Replacing text
let newText = text.replace("powerful", "amazing");
console.log("After Replace: " + newText);

// Splitting a string into an array
let words = text.split(" ");
console.log("Array of words: " + words);
console.log("Second word: " + words[1]); // Output: "is"

// Concatenation
let greeting = "Hello, " + "World!";
console.log("Concatenated String: " + greeting);
