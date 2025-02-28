const friend = "BRUTUS"
const shiftValue = 3;

// ## Step 1 
// Store the Latin alphabet in a variable with all letters in lowercase.
const latinAlphabet = "abcdefghijklmnopqrstuvwxyz";

// ## Step 2 
// Find the index of the first letter of Ceaser's friend. Store it in a variable.
const firstLetterIndex = latinAlphabet.indexOf(friend[0].toLowerCase()); // Index of First letter
console.log("Index of first letter of friend name is:", firstLetterIndex);

// ## Question 1 
// Oh, I know B is the 2nd letter of the latinAlphabet. Then, why the result is 1 instead of 2?
// Answer: The reason is that the index in JavaScript starts from 0, not 1. So, 'B' is the 2nd letter in the Latin alphabet

// ## Step 3 
// Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, which is 3 positions. Find and store the encrypted letter in a variable.

const encryptedFirstLetter = latinAlphabet[firstLetterIndex + shiftValue];
console.log("Encrypted first letter of friend name is:", encryptedFirstLetter);

// ## Question 2 
// If we continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?
// Answer: Operator to wrap around: modulus (%)

// ## Step 4 
// Determine the length of the alphabet.
const latinAlphabetLength = latinAlphabet.length;
console.log("Length of Latin alphabet is:", latinAlphabetLength);

// ## Step 5
// Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet if it exceeds.
const encryptedLetterWrapAround = latinAlphabet[(firstLetterIndex + shiftValue) % latinAlphabetLength];
console.log("Encrypted first letter of friend name (wrap around) is:", encryptedLetterWrapAround);

// ## Step 6 
// Caesar remembers that Brutus is particularly fond of challenges. Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. Extract the first 3 characters from the encrypted message using the `slice` method. (Assume that the encrypted message is "EUXWXV".)
const assumedEncryptedMessage = "EUXWXV"
console.log("First 3 letters from the assumed encrypted message:",assumedEncryptedMessage.slice(0,3));
