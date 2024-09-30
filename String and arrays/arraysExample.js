// Arrays Example
console.log("---- Array Operations ----");

let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("Original Array: " + fruits);

// Array Length
console.log("Array Length: " + fruits.length);

// Accessing Elements
console.log("First Element: " + fruits[0]); // Output: Apple
console.log("Last Element: " + fruits[fruits.length - 1]); // Output: Date

// Adding Elements
fruits.push("Elderberry");
console.log("After push: " + fruits); // Adds to the end

fruits.unshift("Apricot");
console.log("After unshift: " + fruits); // Adds to the beginning

// Removing Elements
fruits.pop();
console.log("After pop: " + fruits); // Removes from the end

fruits.shift();
console.log("After shift: " + fruits); // Removes from the beginning

// Splicing an Array
fruits.splice(1, 2, "Blackberry", "Blueberry");
console.log("After splice (replacing elements): " + fruits);

// Removing elements from an array:
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.splice(1, 2); // Start from index 1, remove 2 elements
// console.log(fruits); // Output: ["Apple", "Orange"]
// In this example, splice(1, 2) removes two elements starting from index 1 ("Banana" and "Mango"), resulting in ["Apple", "Orange"].

// Using splice() to remove elements from the end of an array:
let scores = [10, 20, 30, 40, 50];
scores.splice(-2); // Start from index -2 (second-to-last element), remove everything to the end
console.log(scores); // Output: [10, 20, 30]
// Here, splice(-2) starts from the second-to-last element and removes everything from that point onwards.

// Slicing an Array
let citrus = fruits.slice(1, 3);
console.log("Sliced Array (1, 3): " + citrus); // Extracts Blackberry, Blueberry

// Iterating through an array
console.log("Iterating through the array:");
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// Finding Elements
let index = fruits.indexOf("Blueberry");
console.log("Index of Blueberry: " + index); // Output: 1

// Sorting the Array
fruits.sort();
console.log("Sorted Array: " + fruits);

// Reversing the Array
fruits.reverse();
console.log("Reversed Array: " + fruits);
