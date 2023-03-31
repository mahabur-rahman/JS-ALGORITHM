// finding a value from a sorting array what passed by user

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.round((start + end) / 2);

    if (arr[middle] === value) return middle;

    if (value > arr[middle]) {
      start = middle + 1;
    } else if (value < arr[middle]) {
      end = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
