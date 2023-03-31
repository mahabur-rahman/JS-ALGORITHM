let input = new Array(9000).fill(1);

function sumOfArray1(arr) {
  if (arr.length === 0) return 0;

  let resArr = arr.slice(1);

  return arr[0] + sumOfArray1(resArr);
}

let now = Date.now();
console.log(sumOfArray1(input));
let finish = Date.now();
console.log(`Time elapsed for slowFunc: ${finish - now}`);

function sumOfArr(arr) {
  return helperSum(arr, 0);
}

function helperSum(arr, index) {
  if (arr.length === index) return 0;

  return arr[index] + helperSum(arr, index + 1);
}

let start = Date.now();
console.log(sumOfArr(input));
let end = Date.now();
console.log(`Time elapsed for fastFunc: ${end - start}`);
