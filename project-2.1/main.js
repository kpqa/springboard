// ## Question 1 
// Based on the story of Julius Caesar's secret party and the Caesar Cipher, identify potential variables you would need. Please ensure you use appropriate variable naming conventions in JavaScript.
partyLocation
shiftValue
encryptedMessage
decryptedMessage
isPartySafe

// ## Question 2 
// After identifying the variables from the story, specify their primitive data types in JavaScript.Also, provide these variables with some initial values.

let partyLocation = "GARDEN"; // String
let shiftValue = 3; // Number
let encryptedMessage = ""; // String
let decryptedMessage = ""; // String
let isPartySafe = false; // Boolean

// ## Question 3 
// From the variables you've identified, determine which ones should be declared using `const` and which ones should use `let`.
let partyLocation = "GARDEN"; // As the message might change.
const shiftValue = 3; // Since the shift value remains constant throughout.
let encryptedMessage = ""; // This will change when we encode the message with the original party location.
let decryptedMessage = ""; // This will change when we decode the encrypted message to reveal the party location.
let isPartySafe = false; // Hopefully, this doesn't change.

// ## Question 4 
// Given the variable `shiftValue`, write a piece of code to check if its value is an integer.
const shiftValue = 3;
Number.isInteger(shiftValue);