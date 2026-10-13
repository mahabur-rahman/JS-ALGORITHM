// October · Week 1 · Day 3 — Loops
// চালাও: node live-coding/practice/october/week-1/day-3.js

// ===== Phase 5.1: for loop-এর তিন অংশ =====

// for(let i = 0; i <= 5; i++){
//     console.log(`Output : ${i}`)
// }

// for (let i = 0; i <= 10; i += 2) {
//     console.log(`Result : ${i}`)
// }

// for(let i = 5; i >=1; i--){
//     console.log("c : ", i)
// }

// const arr = ["a", "b", "c"]

// for (let i = 0; i < arr.length; i++){
//     console.log(`Index : ${i}`, `Arr result : ${arr[i]}`)
// }

// const nums = []

// for (let i = 10; i > 0; i -= 3){
//     const len = nums.push(i)

//     console.log(`Index: ${i}`, `Length: ${len}`)
// }

// console.log("Original array : ", nums)

// const fruits = ["apple", "mango", "banana"];
// for (let i = 0; i < fruits.length; i++) console.log("for:", i, fruits[i]);

// for (const fruit of fruits) console.log("for...of:", fruit);

// let n = 20, steps = 0;
// while (n > 1) {
//     n = Math.floor(n / 2);
//     console.log(n)
//     steps++;
// }
// console.log("while steps:", steps);

// const user = {
//     name: "A",
//     age : 34
// }

// for(const key in user) {
//  console.log(user[key])
// }

// for (const i in ["x", "y"] ) {
//     console.log(i, typeof Number(i))
// }

// // count Even with loop

// function countEvens(nums) {
//   let count = 0;                                   // ① আগে
//   for (const num of nums) {
//     if (num % 2 === 0) count++;                    // ② ভেতরে
//     console.log("num:", num, "→ count:", count);
//   }
//   return count;                                    // ③ পরে
// }
// console.log("answer:", countEvens([3, 8, 5, 2, 6, -1]));

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], 'index: ', i);
// }

// const nums = [4, 7, 0, 9, 0];

// for (let i = 0; i < nums.length; i++) {

//   console.log("checking index", i);

//   if (nums[i] === 0) {
//     console.log("found 0 at", i);
//     break;
//   }
// }

// function findFirstNegative(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) return i;   // পেলেই বিদায়
//   }
//   return -1;                    // পুরো loop শেষ, পাইনি
// }
// console.log(findFirstNegative([5, 3, -2, -8]), findFirstNegative([1, 2]));
// let total = 0;
// for (const n of [3, -1, 4, 100, 5]) {
//   if (n < 0) continue;
//   if (n > 50) break;
//   total += n;
// }
// console.log(total);

// ===== Problem: Sum of Odd-Index Elements =====

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var sumOddIndex = function (nums) {
//   let result = 0;

//   for (let i = 0; i < nums.length; i++) {
//     // console.log(i)
//     // find odd index
//     if (i % 2 !== 0) {
//       result = result + nums[i];
//     }
//   }

//   return result
// };

// const nums = [10, 20, 30, 40, 50];

// console.log(sumOddIndex(nums));

// var sumOddIndexReverse = function (nums) {
//   let result = 0;
//   let start = nums.length - 1;

//   if (start % 2 === 0) {
//     start--;
//   }

//   for (let i = start; i >= 1; i -= 2) {
//     result += nums[i];
//   }

//   return result;
// };

// console.log(
//   sumOddIndexReverse([10, 20, 30, 40, 50]),
//   sumOddIndexReverse([10, 20, 30, 40])
// );

// // Output: 60 60

/**
 * @param {number[]} nums
 * @return {number}
 */
// var numIdenticalPairs = function (nums) {
//   let result = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         result++;
//       }
//     }
//   }

//   return result;
// };

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
// console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
// console.log(numIdenticalPairs([1, 2, 3])); // 0

// /**
//  * @param {number[][]} accounts
//  * @return {number}
//  */
// var maximumWealth = function (accounts) {
//   let maxWealth = 0;

//   for (let i = 0; i < accounts.length; i++) {
//     let sum = 0;

//     for (let j = 0; j < accounts[i].length; j++) {
//       sum += accounts[i][j];
//     }

//     if (sum > maxWealth) {
//       maxWealth = sum;
//     }
//   }

//   return maxWealth;
// };
// const accounts = [
//   [2, 8, 7],
//   [7, 1, 3],
//   [1, 9, 5],
// ];

// console.log(maximumWealth(accounts));
// console.log(accountsB)

// for (let i = 2; i <= 6; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 1; j++) {
//     console.log("i =", i, "j =", j);
//   }
// }
// ``

// First Descent Index

var firstDescent = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {

    console.log(`Value : ${nums[i]} and next value: ${nums[i + 1]}`)
      return i;
    }
  }

  return -1;
};

// Function invocation
console.log(firstDescent([1, 3, 5, 4, 6])); // 2
console.log(firstDescent([1, 2, 3])); // -1
console.log(firstDescent([9, 1])); // 0
console.log(firstDescent([])); // -1
