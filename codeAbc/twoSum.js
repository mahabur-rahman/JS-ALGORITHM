var twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let remaining = target - arr[i];
    console.log("remaining", remaining);

    for (let j = i + 1; j < arr.length; j++) {
      console.log(`i : ${i}, j : ${j}`);
      if (remaining === arr[j]) return [i, j];
    }
  }

  return false;
};

console.log(twoSum([2, 4, 8, 12], 14));
