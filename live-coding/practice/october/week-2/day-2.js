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

// ★ B4 — LeetCode 217: Contains Duplicate (solve once here; skip October W3 duplicate)
// First analyze the provided array/includes approach; then consider a Set approach.
// Do not write a solution before the concept and problem have been discussed.

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
