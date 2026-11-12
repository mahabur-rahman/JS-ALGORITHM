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

// const seen = new Set();

// seen.add("a@x");

// // console.log(seen.has("a@x"))

// console.log(seen);

// const user = { id: 1, email: "a@x" };

// function getEmail(user) {
//   return user.email;
// }

// console.log(getEmail(user)); // "a@x"

// const keys = ["a@x", "b@x", "a@x"];
// const seen = new Set();

// for (const key of keys) {
//   // console.log(key, 'key : ')
//   // console.log(seen.has(key))

//   if (!seen.has(key)) {
//     seen.add(key);
//   } else {
//     console.log("Already Exist!");
//   }
// }
// const result = [];
// const seen = new Set();

// const user = { id: 1, email: "a@x" };
// const key = user.email;

// result.push(user);
// seen.add(key);

// console.log(result); // [{ id: 1, email: "a@x" }]
// console.log(seen);   // Set(1) { "a@x" }

    // /**
    //  * @param {Array} arr
    //  * @param {Function} keyFn
    //  * @return {Array}
    //  */

    // function uniqueBy(arr, keyFn) {
    //   let result = [];
    //   let seen = new Set();

    //   for (const item of arr) {
    //     const key = keyFn(item);

    //     if (!seen.has(key)) {
    //       seen.add(key);
    //       result.push(item);
    //     }
    //   }

    //   return result;
    // }

    // const users = [
    //   { id: 1, email: "a@x" },
    //   { id: 2, email: "b@x" },
    //   { id: 3, email: "a@x" },
    //   { id: 4, email: "c@x" },
    // ];

    // console.log(uniqueBy(users, (user) => user.email));
