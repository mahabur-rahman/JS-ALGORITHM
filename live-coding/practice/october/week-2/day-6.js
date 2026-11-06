// W2 D6 — Topic 11: Arrays 2 — Rotation, Reverse Range, Tracking
// Branch: october/week-2-day-6
// const nums = [10, 20, 30, 40, 50, 60];
// const k = 14;

// const effectiveSteps = k % nums.length;

// console.log("Array length:", nums.length);       // 6
// console.log("Requested steps:", k);             // 14
// console.log("Effective steps:", effectiveSteps); // 2

// const nums = [10, 20, 30, 40, 50];

// let left = 1;
// let right = 3;

// console.log("শুরু:", nums);
// console.log("যে জোড়াটি অদলবদল হবে:", nums[left], nums[right]);

// [nums[left], nums[right]] = [nums[right], nums[left]];

// console.log("একবার অদলবদলের পর:", nums);

// var reverseRange = function (nums, left, right) {
//   while (left < right) {
//     let temp = nums[left];

//     nums[left] = nums[right];

//     nums[right] = temp;

//     left++;
//     right--;
//   }

//   return nums;
// };

// console.log(reverseRange([1, 2, 3, 4, 5], 1, 3));

// const prices = [9, 4, 7];
// let minSoFar = Infinity;

// for (const price of prices) {
//   if (price < minSoFar) {
//     minSoFar = price;
//   }

//   console.log("বর্তমান দাম:", price, "| এখন পর্যন্ত minimum:", minSoFar);
// }

var runningMinimum = function (nums) {
  let min = nums[0];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
    result.push(min);
  }

  return result;
};

console.log(runningMinimum([7, 1, 5, 3]));
