function twoSum(numbers, target) {
  const seen = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const complement = target - currentNumber;

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(currentNumber, i);
  }

  return []; // Return empty array if no pair equals target
}

// Example Usage:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]