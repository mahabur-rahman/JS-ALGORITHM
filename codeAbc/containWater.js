// var maxArea = function (heights) {
//   let totalWater = 0;
//   for (let i = 0; i < heights.length; i++) {
//     for (let j = i + 1; j < heights.length; j++) {
//       let height;

//       if (heights[i] > heights[j]) {
//         height = heights[j];
//       } else {
//         height = heights[i];
//       }

//       let width = j - i;

//       let currentWater = height * width;

//       if (totalWater < currentWater) {
//         totalWater = currentWater;
//       }
//     }
//   }

//   return totalWater;
// };

var maxArea = function (heights) {
  let totalWater = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let height = Math.min(heights[i], heights[j]);
      let width = j - i;
      let currentWater = height * width;

      totalWater = Math.max(currentWater, totalWater);
    }
  }

  return totalWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
