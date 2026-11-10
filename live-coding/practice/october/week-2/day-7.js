// W2 D7 — Revision · Practical JS 1 · Unseen
// Branch: october/week-2-day-7

// const size = 2;
// let currentBatch = [];
// const batches = [];

// currentBatch.push("A");
// console.log("বর্তমান batch:", currentBatch);

// currentBatch.push("B");
// console.log("batch পূর্ণ হয়েছে কি?", currentBatch.length === size);

// if (currentBatch.length === size) {
//   batches.push(currentBatch);
//   console.log("পূর্ণ batch-গুলো:", batches);
//   currentBatch = [];
// }

// currentBatch.push("C");
// console.log("শেষের অসম্পূর্ণ batch:", currentBatch);

// const batches = [["A", "B"]];
// let currentBatch = ["C"];

// console.log("যোগ করার আগে:", batches);

// if (currentBatch.length > 0) {
//   batches.push(currentBatch);
// }

// console.log("যোগ করার পরে:", batches); // [["A", "B"], ["C"]]

// Thinking process from my side :
// - create a box for keeping array i mean result
// - loop every element
// - in one internal [] keep at least 2 element because of size : 2
// - finally return result

// var chunk = function (arr, size) {
//   let result = [];
//   let chunk = [];

//   for (let i = 0; i < arr.length; i++) {
//     chunk.push(arr[i]);

//     if (chunk.length === size) {
//       result.push(chunk);
//       chunk = [];
//     }
//   }

//   if (chunk.length > 0) {
//     result.push(chunk);
//   }

//   return result;
// };

// console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
