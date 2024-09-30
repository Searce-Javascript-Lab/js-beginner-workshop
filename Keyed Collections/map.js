// Creating a Map
const myMap = new Map();

// Adding key-value pairs
myMap.set("name", "Alice");
myMap.set("age", 25);
myMap.set("isStudent", true);

// Retrieving a value
console.log(myMap.get("name")); // Output: Alice

// Checking if a key exists
console.log(myMap.has("age")); // Output: true

// Removing a key-value pair
myMap.delete("isStudent");

// Getting the size of the Map
console.log(myMap.size); // Output: 2

// Iterating through a Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 25
