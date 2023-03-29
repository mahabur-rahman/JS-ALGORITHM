function sumOfArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    total += arr[i];
  }

  return total;
}

console.log(sumOfArray(typeof [1, 2, 3, 4]));
