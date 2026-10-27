// Problem — Count the Work · Part A

// input :
//  - n is number

//  output :
//  - return their count

// Edge case :
//  - loop each element we need index so we can use for loop
// - check with condition i === 0; i < n; i++
// - declare variable and trace count also like count 1 count 2, .....

// and finally return this count

/**
 * @param {number} n
 * @return {number}
 */
// var countWork = function (n) {
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     count++;
//   }

//   return count;
// };

// console.log(countWork(10)); // Expected: 10
// const n = 8;
// let i = 1;
// let steps = 0;

// while (i < n) {
//   console.log("i:", i);
//   steps++;
//   i *= 2;
// }

// console.log("steps:", steps); // 3

// const n = 16;
// let i = 1;
// let steps = 0;

// while (i < n) {
//   console.log("i:", i);
//   steps++;
//   i *= 2;
// }

// console.log("steps:", steps); // 3

// /**
//  * @param {number[]} orders
//  * @param {number[]} receipts
//  * @return {number}
//  */
// var countTotalVisits = function (orders, receipts) {
//   let orderTotal = 0;
//   let receiptTotal = 0;

//   for (let i = 0; i < orders.length; i++) {
//     orderTotal++;
//   }

//   for (let i = 0; i < receipts.length; i++) {
//     receiptTotal++;
//   }

//   return receiptTotal + orderTotal;
// };

// console.log(
//   countTotalVisits([101, 102, 103, 104], [201, 202, 203, 204, 205, 206]),
// ); // Expected: 10
// console.log(countTotalVisits([], [201, 202, 203])); // Expected: 3
// console.log(countTotalVisits([101, 102], [])); // Expected: 2
// console.log(countTotalVisits([], [])); // Expected: 0

// function checkCustomers(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < 5; j++) {
//       console.log(i, j);
//     }
//   }
// }

// checkCustomers(3);

// Problem — Count the Checks - custom

/**
 * @param {number} n - Number of customers
 * @return {number} - Total number of checks
 */

// problem statement :

// - loop use - for
// - calculate - total loop count * 5 (5 fixed setting)

// - return total number of checks

// var countChecks = function (n) {
//   const setting = 5;
//   let result = 0;
//   let total = 0;

//   for (let i = 0; i < n; i++) {
//     // console.log(i)
//     result++;
//   }

//   // console.log(result)

//   total = result * setting;

//   return total;
// };

// console.log(countChecks(4)); // Expected: 20
// console.log(countChecks(1)); // Expected: 5
// console.log(countChecks(0)); // Expected: 0
