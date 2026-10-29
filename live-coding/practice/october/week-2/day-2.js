// W2 D2 — Topic 9: Big-O 2 — Space, hidden costs, and constraints
// Branch: october/week-2-day-2
// Follow live-coding/month-1-october/october-plan.md (Day 9).
// Read live-coding/00-framework/03-complexity-guide.md, sections 4–7.

// Phase 9.7 — Distinguish input, auxiliary, and output space.
// Concept example discussed: countPositive(nums)
// Checkpoint: if nums grows from 3 elements to 300, does `count` need more variables?

// Phase 9.8 — SKIPPED: stack depth O(n)/O(log n) already covered in W2 D1.
// Phase 9.9 — Hidden costs of JavaScript built-ins.
// Phase 9.10 — Use input constraints to estimate the slowest feasible complexity.

// ★ B4 — LeetCode 217: Contains Duplicate — SOLVED + submitted (29 Oct).
// October W3 duplicate is skipped. Complexity explanation is the next checkpoint.

// ★ B5 — Find hidden costs in queue.shift() and string.slice() loops.
// ★ B6 — SKIPPED: duplicates the constraint exercise in Phase 9.10.
// ○ B7 — Optional new array-recursion variant; if solved here, skip the November duplicate.

// function countItems(nums) {
//   let count = 0;

//   if (!Array.isArray(nums)) return 0;

//   for (const num of nums) {
//     count++;
//   }

//   return count;
// }

// console.log(countItems([10, 20])); // 3
// console.log(countItems([])); // 0
// console.log(countItems())

// const nums = [10, 20, 30];

// nums.push(40);    // শেষে যোগ: O(1) amortized
// nums.pop();       // শেষ থেকে সরায়: O(1)
// nums.includes(20); // খোঁজে: O(n)
// nums.slice(0, 2); // নতুন array-তে কপি: O(k)
// nums.shift();     // শুরু থেকে সরায়: O(n)

// console.log(nums.shift())

// const seen = new Set()

// seen.add(5)
// seen.add(7)
// seen.add(5)

// console.log(seen.has(4))
// console.log(seen.has(5)
// )

// console.log(seen)

// Problem: 217. Contains Duplicate

// Learner's approach: scan each number, check whether Set has seen it,
// return true on the first repeat; otherwise add it to the Set.

// var containsDuplicate = function (nums) {
//   const seen = new Set();

//   let result = 0;

//   for (const num of nums) {
//     if (seen.has(num)) {
//       console.log("Duplicate value:", num);
//     }

//     seen.add(num);
//   }

// //   console.log(seen);

//   for(const value of seen) {
//     // console.log(typeof value)
//     result += value
//   }

//   return result
// };

// console.log(containsDuplicate([1, 2, 3, 1])); // Expected: true
