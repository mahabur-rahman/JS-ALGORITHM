// W1 D5 — Topic 7: Numbers & Math

// const a = 0.1;
// const b = 0.2;

// const total = a + b;

// const sum = Math.round(total * 100) / 100;
// console.log(sum === 0.3);

// function priceTotal(a, b) {
//   const total = Math.round((a + b) * 100) / 100;
//   return total;
// }

// console.log(priceTotal(0.1, 0.2)); // 0.3
// console.log(priceTotal(0.1, 0.3)); // 0.4
// console.log(priceTotal(0.2, 0.4)); // 0.6


// const value = Number("abc");
// console.log(value); // NaN

// console.log(Number.isNaN(value)); // true
// console.log(typeof value); // "number"


// const value = Number("12");
// console.log(Number.isNaN(value));


// const scores = [-8, -3, -11];
// console.log("scores:", scores); // scores: [ -8, -3, -11 ]

// let max = -Infinity;
// console.log("শুরুর max:", max); // শুরুর max: -Infinity

// for (const score of scores) {
//   console.log("এখনকার score:", score);

//   if (score > max) {
//     max = score;
//   }

//   console.log("এখন পর্যন্ত max:", max);
// }

// console.log("শেষের max:", max); // শেষের max: -3

// Mini problem — Find Highest Temperature


// function findHighestTemp(temp){

//   let max = -Infinity;

//   for(const temperature of temp){
//     if(temperature > max){
//       max = temperature
//     }
//   }

//   return max

// }


// console.log(findHighestTemp([-5, -1, -7]))
// console.log(findHighestTemp([3, 8, -5, 90]))
// console.log(findHighestTemp([-10, -4, -7]))


// console.log(9007199254740993n + 2n);

// const bigCount = 10n;
// console.log(typeof bigCount); // "bigint"

// const regularCount = 3;
// console.log(typeof regularCount); // "number"

// try {
//   console.log(bigCount + regularCount);
// } catch (error) {
//   console.log(error.name); // "TypeError"
// }


// Mini problem — Add Large Totals

// function addLargeTotals(a, b) {
//   return a + b;
// }

// console.log(addLargeTotals(9007199254740993n, 2n)); // 9007199254740995n

// Complexity note:
// If k is the number of bits in the BigInt values, addition takes O(k) time.
// The returned result can use O(k) space; only a fixed number of named
// variables are used. Runtime-internal memory is implementation-dependent.




// console.log(Math.ceil(3.1))

// P7.2 — Pages Needed

// function pagesNeeded(items, perPage) {
//   return Math.ceil(items / perPage);
// }

// console.log(pagesNeeded(35, 10)); // 4
// console.log(pagesNeeded(20, 10)); // 2
// console.log(pagesNeeded(21, 10)); // 3
// console.log(pagesNeeded(0, 10));  // 0

// Complexity: O(1) time and O(1) auxiliary space.


// console.log(Math.floor(-2.4)); // -3: নিচের পূর্ণসংখ্যা
// console.log(Math.trunc(-2.4)); // -2: দশমিক অংশ বাদ, শূন্যের দিকে
