// 674. Longest Continuous Increasing Subsequence — Easy

// Edge Case :
// - array of nums
// - loop nums array using for loop - we need index also that's why
// - compare first index (value) < second index (value)
// - return length - length starts from 1 not 0
//

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findLengthOfLCIS = function (nums) {
//   let currentLength = 1;
//   let maxLength = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > nums[i - 1]) {
//       currentLength++;
//     } else {
//       currentLength = 1;
//     }

//     maxLength = Math.max(maxLength, currentLength);
//   }

//   return maxLength;
// };

// console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3

// Re-solve — 412. Fizz Buzz · Easy

// input :
// - number
// example : 5

// output :
// - string[] - ["1", "2", "3", "4", "5"]

// Edge case :

// - take number input
// - loop number

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function (n) {
//   let arr = [];

//     // console.log("i : ", i);
//     // arr.push(i);

//     for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         arr.push("FizzBuzz");
//       } else if (i % 3 === 0) {
//         arr.push("Fizz");
//       } else if (i % 5 === 0) {
//         arr.push("Buzz");
//       } else {
//        arr.push(String(i))
//       }

//   }

//   return arr
// };

// console.log(fizzBuzz(1));
