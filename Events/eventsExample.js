// Select elements from the DOM
const container = document.querySelector(".container");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Add click event listeners to each element
container.addEventListener("click", () => {
  alert("Container clicked!");
  console.log("Event bubbled to container!");
});

parent.addEventListener("click", () => {
  alert("Parent clicked!");
  console.log("Event bubbled to parent!");
});

child.addEventListener("click", (event) => {
  alert("Child clicked!");
  console.log("Event triggered on child!");
  // Stop event bubbling here
  event.stopPropagation();
});
