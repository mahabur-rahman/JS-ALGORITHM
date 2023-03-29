let temperature = [5, 56, 7, 8, 3, "error", 34, 46, "some", 3454, "345"];

function getHigherAdnLower(arr) {
  // create a higher var
  let higher = arr[0];
  // create a lower var
  let lower = arr[0];

  //   iterate the whole arr
  for (let i = 0; i < arr.length; i++) {
    //  check is there has without number
    if (typeof arr[i] !== "number") continue;
    // if higher variable has smaller than our current number then value will be out current element
    if (higher < arr[i]) {
      higher = arr[i];
    }
    // if lower variable has bigger than our current number then value will be out current element
    if (lower > arr[i]) {
      lower = arr[i];
    }

    // return our higher and lower variable
  }

  return higher - lower;
}

console.log(getHigherAdnLower(temperature));
