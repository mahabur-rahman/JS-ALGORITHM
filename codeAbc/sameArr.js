// ?. finding value in first array [2, 4, 26] with multiply with second array [value ** 2]

function findResult(arr1, arr2) {
  // check array length if not equal return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  //   loop first array and finding index number with value ** 2
  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2); // arr1[i] ** 2 = 4, arr1[i] ** 2  = 16, arr1[i] ** 2 = 36

    //  console.log(`current Index: ${currentIndex}`);
    //   if not found return -1
    if (currentIndex === -1) {
      return false;
    }

    console.log(arr2.splice(currentIndex, 1));
  }

  return true;
}

console.log(findResult([2, 4, 6], [36, 4, 16]));
