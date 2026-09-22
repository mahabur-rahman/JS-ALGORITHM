const numbers = [2, 5, 8, 12, 16, 23, 38];
const target = 23;

// expected output : 5 - 23 (index)

function binarySearch(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] === target) {
      return mid;
    }
    if (numbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}



console.log(binarySearch(numbers, target)); // Output: 5