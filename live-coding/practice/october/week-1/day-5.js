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

// console.log(Math.round(-3.5)); // -3: half হলে positive দিকের পূর্ণসংখ্যা

// function toHM(min) {

//     const perHour = Math.floor(min / 60)

//     const perMin = min % 60

//     const finalOutput = perHour + 'h' + " " + perMin + "m"

//     return finalOutput

// }

// const minutes = 0

// console.log(toHM(minutes))
// console.log(toHM(135)); // "2h 15m"
// console.log(toHM(45));  // "0h 45m"
// console.log(toHM(60));  // "1h 0m"
// console.log(toHM(0));   // "0h 0m"

// Complexity: O(1) time and O(1) auxiliary space.

// console.log(7 % 3);  // 1
// console.log(-7 % 3); // -1

// console.log(-8 % 3); // -2; quotient truncates toward 0, remainder keeps dividend sign

// console.log(Number("12px"));       // NaN
// console.log(parseInt("12px", 10)); // 12

// Number vs parseInt — decimal-prefix check
// console.log(Number("8.5px"));       // NaN
// console.log(parseInt("8.5px", 10)); // 8

// Unary plus converts a numeric string to Number, trimming surrounding spaces.
// console.log(+" 8.5 "); // 8.5



// console.log(+"42");   // 42
// console.log(+"42px"); // NaN

// console.log(+" 8.5 ")


// const price = (12.3).toFixed(2);
// console.log(price);        // "12.30"
// console.log(typeof price); // "string"

// console.log((8).toFixed(2));        // "8.00"
// console.log(typeof (8).toFixed(2)); // "string"



// const price = 6

// console.log(typeof price.toFixed(2))
