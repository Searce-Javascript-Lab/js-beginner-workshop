// Function to calculate BMI

function calculateBMI(weight, height) {
  // BMI = weight (kg) / (height (m)^2)
  return weight / height ** 2;
}

// Function to categorize BMI result
function categorizeBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Example usage of BMI calculator
const weight1 = 68; // Weight in kg
const height1 = 1.75; // Height in meters

// Calculate BMI for given weight and height
const bmi1 = calculateBMI(weight1, height1);
console.log(
  `Weight: ${weight1}kg, Height: ${height1}m => BMI: ${bmi1.toFixed(
    2
  )} (${categorizeBMI(bmi1)})`
);

// Example with different weight and height
const weight2 = 85; // Another example weight in kg
const height2 = 1.8; // Another example height in meters

const bmi2 = calculateBMI(weight2, height2);
console.log(
  `Weight: ${weight2}kg, Height: ${height2}m => BMI: ${bmi2.toFixed(
    2
  )} (${categorizeBMI(bmi2)})`
);

// Testing edge cases
const weight3 = 45; // Underweight example
const height3 = 1.6;

const bmi3 = calculateBMI(weight3, height3);
console.log(
  `Weight: ${weight3}kg, Height: ${height3}m => BMI: ${bmi3.toFixed(
    2
  )} (${categorizeBMI(bmi3)})`
);

// Testing with invalid values
const weight4 = 70; // Regular weight
const height4 = 0; // Invalid height (0 meters)
const bmi4 = calculateBMI(weight4, height4); // Will result in Infinity or NaN
console.log(
  `Weight: ${weight4}kg, Height: ${height4}m => BMI: ${bmi4} (${
    isNaN(bmi4) ? "Invalid BMI" : categorizeBMI(bmi4)
  })`
);
