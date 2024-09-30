// Creating a new WeakMap
const weakMap = new WeakMap();

const obj1 = {}; // Creating an object
const obj2 = {}; // Creating another object

// Adding key-value pairs to the WeakMap
weakMap.set(obj1, "Data for object 1"); // obj1 is the key
weakMap.set(obj2, "Data for object 2"); // obj2 is the key

// Retrieving a value using its key
console.log(weakMap.get(obj1)); // Output: Data for object 1

// Once there are no other references to obj1, it can be cleaned up by JavaScript
