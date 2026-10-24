// 674. Longest Continuous Increasing Subsequence — Easy

// Edge Case :
// - array of nums
// - loop nums array using for loop - we need index also that's why
// - compare first index (value) < second index (value)
// - return length - length starts from 1 not 0
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let currentLength = 1;
  let maxLength = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLength++;
    } else {
      currentLength = 1;
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3
