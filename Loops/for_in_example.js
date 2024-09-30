const person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 25
// city: New York

// key represents the property name.
// person[key] is used to access the corresponding value.
