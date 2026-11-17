// W3 D2 — Topic 11: Arrays 4 — Prefix/Suffix · In-place techniques
// Branch: october/week-3-day-2
// Follow the plan in live-coding/month-1-october/october-plan.md before attempting problems.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Thought :
// - take left array []
// - using for loop because of need index that's why
// -

// - return left array

// function leftProducts(nums) {
//   let left = [];
//   let product = 1;

//   for (let i = 0; i < nums.length; i++) {
//     left.push(product);

//     product = product * nums[i];
//   }

//   return left;
// }

// console.log(leftProducts([3, 1, 7, 5]));

// function rightProducts(nums) {
//   const result = [];
//   let productAfter = 1;

//   for (let i = nums.length - 1; i >= 0; i--) {
//     // console.log('index: ', i, " | ", nums[i])

//     result[i] = productAfter;

//     productAfter *= nums[i];
//   }

//   return result;
// }

// console.log(rightProducts([1, 2, 3, 4]));

// console.log(Math.abs(-3))
// console.log(Math.abs(3))
// console.log(Math.abs(-0))
// console.log(Math.abs(0))

// 238. Product of Array Except Self

// Identify and handle edge cases first

// - use answer array at first []
// - use for loop and access every value
// - calculate other value like multiply all values except own value

// - return answer array

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// var productExceptSelf = function (nums) {
//     let prefix = 1;
//     let suffix = 1;

//     const answer = [];

//     for (let i = 0; i < nums.length; i++) {
//       let j = nums.length - 1 - i;

//       // Prefix calculation
//       answer[i] = prefix;
//       prefix *= nums[i];

//       // Suffix calculation
//       answer[i] *= suffix;
//       suffix *= nums[j];
//     }

//     return answer;
// };

// console.log(productExceptSelf([1, 2, 3, 4]));
// // [24, 12, 8, 6]

  /**
   * @param {number[]} nums
   * @return {number}
   */
  var findMissingNumber = function (nums) {
    const seen = new Set();

    for (const num of nums) {
      // console.log(num)

      if (!seen.has(num)) {
        seen.add(num);
      }
    }

    for (let i = 1; i <= nums.length; i++) {
      if (!seen.has(i)) {
        return i;
      }
    }

  };

  console.log(findMissingNumber([1, 2, 2, 4]));
