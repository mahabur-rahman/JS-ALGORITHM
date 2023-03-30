function sameArr2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let sequence1 = {};
  let sequence2 = {};

  for (let val of arr1) {
    sequence1[val] = sequence1[val] + 1 || 1;
  }

  for (let val of arr2) {
    sequence2[val] = sequence2[val] + 1 || 1;
  }

  for (let key in sequence1) {
    if (!(key ** 2) in sequence2) {
      return false;
    }

    if (sequence2[key ** 2] !== sequence1[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameArr2([2, 4, 6], [4, 16, 36]));
