// W2 D5 — Topic 11: Arrays 1 — Basics, Mutation, Costs
// Branch: october/week-2-day-5

// const seats = Array.from({ length: 3 }, (_, index) => index + 1);

// console.log(seats); // [1, 2, 3]

// const emptySeats = Array(3).fill(0)

// console.log(emptySeats)

// const result = Array(5).fill(0)

// console.log(result)

// const result = Array.from({length: 5}, (_, index) => index + 1)

// console.log(result)

// const grid = new Array(3).fill([])

// grid[0].push(1)

// console.log(grid)

// console.log(grid[0] === grid[1])

// const nums = [1, 2];
// const other = nums;

// other.push(3);

// console.log(nums);
// console.log('others: ', other)

// const nums = [1, 2];
// const copy = nums.slice();

// copy.push(3);

// console.log(nums);

// console.log(copy)

// const nums = [10, 9, 1, 2];

// nums.sort((a, b) => a -b );

// console.log(nums);

// const items = [10, 20, 30, 40];

// const part = items.slice(1, 3);
// console.log(part);

// console.log(items);

// const items = [10, 20, 30, 40];

// const removed = items.splice(1, 2);

// console.log(removed);
// console.log(items);

// const values = [NaN];

// console.log(values.includes(NaN));
// console.log(values.indexOf(NaN));

// const users = [
//   { name: "Ana", age: 16 },
//   { name: "Babu", age: 21 },
//   { name: "Rafi", age: 25 }
// ];

// const result = users.find(user => user.age >= 18)

// console.log(result)

// const scores = [34, 56, 23, 0]

// const [first, ...rest] = scores;

// console.log(first)
// console.log(rest)

// const nums = [12, 30];

// [nums[0], nums[1]] = [nums[1], nums[0]] ;

// console.log(nums)

// const nums = [80, 20];
// [nums[0], nums[1]] = [nums[1], nums[0]];

// console.log(nums);

// const nested = [[1], [2]];
// const copy = [...nested];

// copy[0].push(9);

// console.log(copy)

// console.log(nested);

// LeetCode 268 — Missing Number

// Approach :
// - declare length for nums array
// - and then use for loop that's because of we need index also
// - then store every element in result array
// - and then compare with nums array so we can find specific missing number

// var missingNumber = function (nums) {
//   const numLength = nums.length;

//   let result = [];

//   for (let i = 0; i <= nums.length; i++) {
//     result.push(i);
//   }

//   for (let i = 0; i < result.length; i++) {
//     if (!nums.includes(result[i])) {
//       return result[i];
//     }
//   }
// };

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([0, 1]));          // 2
// console.log(missingNumber([4, 2, 0, 1]));   // 3
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

// var merge = function (nums1, m, nums2, n) {

//   nums1.splice(m, n, ...nums2)
//   .sort((a, b) => a - b)

//   return nums1
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
