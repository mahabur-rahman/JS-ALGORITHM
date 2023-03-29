function uniqueName(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];

    if (!result.includes(ele)) {
      result.push(ele);
    }
  }

  return result;
}

let arr = ["a", "b", "m", "c", 1, { a: "sakib" }, "m"];

console.log(uniqueName(arr));
