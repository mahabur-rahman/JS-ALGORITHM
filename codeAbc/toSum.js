let toSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  return false;
};

console.log(toSum([2, 7, 11, 15], 900));
