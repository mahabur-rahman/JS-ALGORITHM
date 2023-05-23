function findTargetIndex(arr, target) {
  // to do if exist element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(findTargetIndex([2, 4, 6, 8, 10], 8));
