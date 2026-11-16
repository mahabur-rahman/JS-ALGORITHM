// W3 D1 — Topic 11: Arrays 3 — Kadane · Majority
// Branch: october/week-3-day-1
// Follow the plan in live-coding/month-1-october/october-plan.md before attempting problems.

// const nums = [1, 2, 3];

// console.log(nums.slice(0, 2)); // [1, 2]
// console.log(nums.slice(1, 3)); // [2, 3]
// console.log(nums.slice(0, 3)); // [1, 2, 3]

// const nums = [1, 2, 3];
// const start = 0;

// for (let end = start; end < nums.length; end++) {
//   console.log(nums.slice(start, end + 1));
// // console.log(end)
// }

// let runningSum = 0;

// runningSum += 5;
// console.log(runningSum); // 5, অর্থাৎ [5]-এর sum

// runningSum += 2;
// console.log(runningSum); // 7, অর্থাৎ [5, 2]-এর sum

// runningSum = 0 ;

// console.log(runningSum)

// P11.12 — All Subarray Sums

// Thought level :

// - declare resutl []
// - loop nums array first using for loop because of need index also
// - if already has subarray then added it with previous value itself
// - finally return result with calculation for subarray

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function allSubarraySums(nums) {
//   let result = [];
//   let start = 0;

//   for (let i = start; i < nums.length; i++) {
//     for (let end = i; end < nums.length; end++) {
//       const subArr = nums.slice(i, end + 1);

//       const sum = subArr.reduce((acc, curr) => {
//         return acc + curr;
//       },0);

//       result.push(sum);
//     }
//   }

//   return result;
// }

// console.log(allSubarraySums([1, 2, 3]));
// // Expected: [1, 3, 6, 2, 5, 3]

// console.log(allSubarraySums([2, -1]));
// // Expected: [2, 1, -1]

// console.log(allSubarraySums([5]));
// // Expected: [5]

// console.log(allSubarraySums([]));

// // Expected: []

// const previousBest = -2;
// const today = 1;

// const extend = previousBest + today; // -1
// const restart = today;               // 1

// console.log("বাড়ালে:", extend);
// console.log("নতুন শুরু:", restart);
// console.log("আজকে শেষ হওয়া সেরা:", Math.max(extend, restart)); // 1

// LeetCode 169 — Majority Element

// function majorityElement(nums) {
//   let candidate;
//   let count = 0;

//   for (const num of nums) {
//     if (count === 0) {
//       candidate = num;
//       count = 1;
//     }else if(num === candidate){
//         count++
//     }else {
//         count--
//     }
//   }

//   return candidate;
// }

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// Expected output: 2

// var maxSubArray = function (nums) {
//   let sum = 0 ;

//   for (let start = 0; start < nums.length; start++) {
//     for (let end = start; end < nums.length; end++) {
//       const subArr = nums.slice(start, end + 1);

//       const calculation = subArr.reduce((acc, curr) => acc + curr, 0);

//       result.push(calculation);
//     }
//   }

//   const maxSum = Math.max(...result);

//   return maxSum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// // Expected output: 6
