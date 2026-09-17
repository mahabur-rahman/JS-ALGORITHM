const text = "aabbcdde";

const frequency = {};

// Step 1: Build frequency map
for (const char of text) {
  frequency[char] = (frequency[char] || 0) + 1;
}

// Step 2: Find first non-repeating character
let firstNonRepeating = null;

for (const char of text) {
  if (frequency[char] === 1) {
    firstNonRepeating = char;
    break; // Stops at the very first unique character ('c')
  }
}

console.log(firstNonRepeating); // Output: c