function findOddNumber(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }

    helper(input.slice(1));
  }

  helper(arr);
  return result.length;
}

console.log(findOddNumber([33, 1, 3, 4, 7, 1, 90, 34, 23, 3]));
