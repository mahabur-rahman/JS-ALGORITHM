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

/**
 * @param {number[]} nums
 * @return {number}
 */

// Edge Case :
// - number : [] - input
// - if pass [] return -1

// - use for loop because of need index also
// - compare nums[i] > nums[i + 1] - nums[i] means current value and nums[i + 1] means next value
// - return their index - if true

// var firstDescent = function (nums) {
//   if (nums.length === 0) return -1;

//   for (let i = 0; i < nums.length; i++) {
//     // console.log(i)
//     // console.log(nums[i])

//     if (nums[i] > nums[i + 1]) {
//     //   console.log("i value : ", i, " ", " i + 1 value : ", nums[i + 1]);

//       return i
//     }
//   }

//   return -1

// };

// console.log(firstDescent([1, 3, 5, 4, 6])); // 2
// console.log(firstDescent([1, 2, 3]));

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function (x) {
//   let reverse = 0;

//   while (x !== 0) {
//     let lastDigit = x % 10;

//     x = Math.trunc(x / 10);

//     reverse = reverse * 10 + lastDigit;

//    if (reverse < -2147483648 || reverse > 2147483647) {
//   return 0;
// }
//   }

//   return reverse;
// };

// console.log(reverse(123));          // 321
// console.log(reverse(-123));         // -321
// console.log(reverse(120));          // 21
// console.log(reverse(1534236469));   // 0
// console.log(reverse(0));             // 0