// ## Step 1 🧩
// Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's `Math` functions.
const randomDecimal = Math.random(); // Generate a random decimal number between 0 and 1 (exclusive)

// ## Step 2 🧩
// Determine the desired range of numbers for our secret shift value, which is between 3 and 33.
const shiftValueMin = 3 // The minimum value to shift (3 positions)
const shiftValueMax = 33 // The maximum value to shift (33 positions)
const shiftValueRange = shiftValueMax - shiftValueMin + 1; // Calculate the range of values to shift (31 positions)

// ## Question 1 🤔
// Why did we add 1 to the difference between 33 and 3?
// Answer 🔑 To ensure that the maximum possible shift value is included in the range. 

// ## Step 3 🧩
// Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.
const randomDecimalRange = randomDecimal * shiftValueRange; // Adjust the decimal number to fit within the range  

// ## Question 2 🤔
// How does multiplying `randomDecimal` by `shiftValueRange` help us get a number within our desired range?
// Answer 🔑 Multiplying `randomDecimal` by `shiftValueRange` ensures that the generated number is rounded to the nearest whole number

// ## Step 4 🧩
// Round down the decimal number obtained in Step 3 to get a whole integer.
const randomInt = Math.floor(Math.floor(randomDecimalRange)); // Round down to the nearest whole number

// ## Question 3 🤔
// Why do we use the `Math.floor()` function instead of other rounding methods like `Math.round()`?
// Answer �� `Math.floor()` rounds down to the nearest whole number, ensuring that the generated number is always less than or equal to the maximum possible shift value.

// ## Step 5 🧩
// Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.
const shiftValue = randomInt + 3;  // Sets range from 3 to 33 (inclusive)
console.log(`Secret shift value: ${shiftValue}`); // Output the final secret shift value

// ## Question 4 🤔
// How does adding 3 to `randomInt` ensure that our final `shiftValue` is between 3 and 33?
// Answer 🔑 Adding 3 to `randomInt` ensures that the final `shiftValue` range of 3 to 33