// Creating a new Set
const mySet = new Set();

// Adding values
mySet.add(1); // Adding the number 1
mySet.add(2); // Adding the number 2
mySet.add(2); // Trying to add 2 again (won't be added)

// Checking if a value exists
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(3)); // Output: false

// Removing a value
mySet.delete(2); // This removes the number 2 from the Set

// Getting the number of unique items in the Set
console.log(mySet.size); // Output: 1 (only 1 remains)

// Iterating through a Set
mySet.forEach((value) => {
  console.log(value);
});
// Output: 1
