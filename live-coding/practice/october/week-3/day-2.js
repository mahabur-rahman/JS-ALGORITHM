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

function leftProducts(nums) {
  let left = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    left.push(product);

    product = product * nums[i];
  }

  return left;
}

console.log(leftProducts([3, 1, 7, 5]));
