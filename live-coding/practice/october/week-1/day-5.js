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

// Radix conversion — binary
// console.log((10).toString(2)); // "1010"
// console.log((12).toString(2)); // "1100"; 12 = 8 + 4, so 2s and 1s places are 0

// console.log((10).toString(2));  // "1010"
// console.log((10).toString(16)); // "a"
// console.log((255).toString(16)); // "ff"

// function lastDigitAndRest(n) {
//   const lastDigit = n % 10;
//   const rest = Math.floor(n / 10);

//   return {
//     lastDigit,
//     rest
//   };
// }

// console.log(lastDigitAndRest(4821)); // { lastDigit: 1, rest: 482 }
// console.log(lastDigitAndRest(589));  // { lastDigit: 9, rest: 58 }
// console.log(lastDigitAndRest(7));    // { lastDigit: 7, rest: 0 }

// function countDigits(n) {
//   if (n === 0) return 1;

//   let count = 0;

//   while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
//   }

//   return count;
// }

// console.log(countDigits(0));    // 1
// console.log(countDigits(589));  // 3
// console.log(countDigits(4821)); // 4

// function findDivisorPairs(n) {
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       const other = n / i;
//       console.log(`(${i}, ${other})`);
//     }
//   }
// }

// findDivisorPairs(24);

// ★7.1 — 1281. Subtract the Product and Sum of Digits - LeetCode problem

// console.log(123 % 10); // ?
// console.log(Math.floor(123 / 10)); // ?

// var subtractProductAndSum = function(n) {
//   let sum = 0;
//   let product = 1;

//   while (n > 0) {
//     const digit = n % 10;

//     sum += digit;
//     product *= digit;

//     n = Math.floor(n / 10);
//   }

//   return product - sum;
// };

// console.log(subtractProductAndSum(234));  // 15
// console.log(subtractProductAndSum(4421)); // 21
// console.log(subtractProductAndSum(123));  // 0

// ★7.2 — 7. Reverse Integer

// var reverse = function(x) {
//   let result = 0;

//   while (x !== 0) {
//     const digit = x % 10;

//     result = result * 10 + digit;

//     x = Math.trunc(x / 10);
//   }

//   if (result < -2147483648 || result > 2147483647) {
//     return 0;
//   }

//   return result;
// };

// console.log(reverse(345));         // 543
// console.log(reverse(123));         // 321
// console.log(reverse(-987));        // -789
// console.log(reverse(120));         // 21
// console.log(reverse(-120));        // -21
// console.log(reverse(1534236469));  // 0 (overflow)

// var isPalindrome = function (x) {
//   // Step 1: এখানে negative number-এর condition লেখো
// if(x < 0) return false;

//   // Step 2: এখানে শেষ digit 0 হলে কী হবে, সেই condition লেখো
// if(x !== 0 && x % 10 === 0) return false

//   // Step 3: reversed variable initialize করো
// let reversed = 0;

//   // Step 4: while loop লেখো, যাতে number-এর অর্ধেক reverse করা যায়
//   // Hint: x এবং reversed compare করবে

//   while(x > reversed) {
//     let digit = x % 10;

//     reversed = reversed * 10 + digit

//     x = Math.floor(x / 10)
//   }

//   // Step 5: শেষের return condition লেখো
//   // Hint: even ও odd digit-এর জন্য কীভাবে compare করবে, ভাবো

//   return x === reversed || x === Math.floor(reversed / 10)

// };

// // Test cases
// console.log(isPalindrome(121));   // true
// console.log(isPalindrome(1221));  // true
// console.log(isPalindrome(123));   // false
// console.log(isPalindrome(-121));  // false
// console.log(isPalindrome(10));    // false
// console.log(isPalindrome(0));     // true

// var isPrime = function (n) {
//   if (n < 2) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// };

// console.log(isPrime(0)); // false
// console.log(isPrime(1)); // false
// console.log(isPrime(2)); // true
// console.log(isPrime(6)); // false
// console.log(isPrime(9)); // false
// console.log(isPrime(7)); // true


// var isPrime = function(n) {
//     if (n < 2) return false;

//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) return false;
//     }

//     return true;
// };

// console.log(isPrime(49)); // false
// console.log(isPrime(47)); // true

// Topic 7 Gate — Sum Even Digits
// function sumEvenDigits(n) {
//   let sum = 0;

//   while (n > 0) {
//     const digit = n % 10;

//     if (digit % 2 === 0) {
//       sum += digit;
//     }

//     n = Math.floor(n / 10);
//   }

//   return sum;
// }

// console.log(sumEvenDigits(4821)); // 10
// console.log(sumEvenDigits(135));  // 0
// console.log(sumEvenDigits(0));    // 0
// console.log(sumEvenDigits(2468)); // 20
// console.log(sumEvenDigits(1234)); // 6
// Time: O(d), where d is the number of digits; each digit is processed once.
// Auxiliary Space: O(1), because the number of extra variables stays fixed.
