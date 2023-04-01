// let arrName = ["dhaka", "barisal", "khulna", "bagura", "sirajgonj"];
// let result = arrName.sort();
// let arr = [35, 454, 51, -6, 7, 28];

// let result = arr.sort((a, b) => a - b);
// console.log(result);

function bubbleSort(arr) {
  let isSwap;
  for (let i = 0; i < arr.length; i++) {
    isSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("to see", arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; // 2
        arr[j] = arr[j + 1]; // 2 = 53
        arr[j + 1] = temp; // 53 = 2

        isSwap = true;
      }
    }

    if (!isSwap) break;
  }

  return arr;
}

console.log(bubbleSort([2, 53, 23, 1, -3]));
