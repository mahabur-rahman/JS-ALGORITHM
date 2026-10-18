// October · Week 1 · Day 4 — Functions
// চালাও: node live-coding/practice/october/week-1/day-4.js

// function greet(name) {

//     if(name === undefined || name === null || name === "") return "Name is missing"
//   return "Hello, " + name;
// }

// const r = greet("Rahim");
// console.log(r);
// console.log(greet("Karim"));
// console.log(greet());
// console.log(greet(null))
// console.log(greet(""))

// const half = (n) => { return  n / 2 };
// console.log(half(10));

// function add(a, b) {
//     return a + b;
// }                  // ① declaration

// const multiply = function (a, b) {
//     return a * b;
// };   // ② expression

// const square = (n) => n * n;                          // ③ arrow

// console.log(add(2, 3), multiply(4, 5), square(6));

// console.log(double2(5));

// console.log(double1(5));

// function double1(n) {
//     return n * 2
// }

// const double2 = function(n) {
//     return n * 2
// }

// const double3 = n => {
//     return n * 2
// }

// console.log(double3(5));

// sayHi();
// var sayHi = function () {
//   console.log("hi");
// };

// const f2 = (n) => { n * 2 };
// console.log(f2(3))

// function addLog(a, b) {
//   console.log(a + b);     // শুধু screen-এ দেখায়
// }

// function addReturn(a, b) {
//   return a + b;           // value হাতে তুলে দেয়
// }

// const x = addLog(2, 3);
// const y = addReturn(2, 3);
// console.log("x:", x, "| y:", y);

// function addLog(a, b) {
//   return (a + b);
// }

// const total = addLog(2, 3) + 10;
// console.log("total:", total);

// const makeUser1 = (name) => { name: name };     // JS ভাবে এটা function body
// const makeUser2 = (name) => ({ name: name });   // () দিলে JS বোঝে এটা object

// console.log(makeUser1("a"), makeUser2("Rahim"));

// function greet(name = "Guest") {
//   return "Hello, " + name;
// }

// console.log(greet("Rahim"));
// console.log(greet());
// console.log(greet(undefined));
// console.log(greet(null));

// function showAll(...nums) {
//   console.log(nums, Array.isArray(nums), nums.length);
// }

// showAll(1, 2, 3);
// showAll(5);
// showAll();

// function intro(first, ...others) {
//   console.log("first:", first, "| others:", others);

//   for(const value of others){
//     console.log(value)
//   }
// }

// intro("Rahim", "Karim", "Jamal");

// /**
//  * @param {...(null|boolean|number|string|Array|Object)} args
//  * @return {number}
//  */
// var argumentsLength = function (...args) {
//   //    console.log(args)

// //   if (args.length === 0) return 0;

//   return args.length;
// };

// console.log(argumentsLength(5));
// console.log(argumentsLength({}, null, "3"));
// console.log(argumentsLength());

// function showUser({ name, age = 18 } = {}) {
//   return name + " is " + age;
// }

// console.log(showUser({ name: "Rahim", age: 25 }));
// console.log(showUser({ name: "Karim" }));
// console.log(showUser())

// function describeProduct({ title = "Unknown", price = 0 } = {}) {
//   return `${title} costs ${price}`;
// }

// const product1 = { title: "Pen", price: 100 };
// const product2 = { title: "Book" };

// console.log(describeProduct(product1));
// console.log(describeProduct(product2));
// console.log(describeProduct());

// let total = 0;
// function addToTotal(x) {
//   total += x;
//   return total;
// }

// function add(a, b) {
//   return a + b;
// }

// console.log(addToTotal(5), addToTotal(5));
// console.log(add(2, 3), add(2, 3));

// pure function

// Pure function
// function withVat(price) {
//   return Math.round(price * 1.15) / 100;
// }

// console.log(withVat(100));
// console.log(withVat(100));

// // Impure function
// const log = [];

// function withVatLogged(price){
//  const result = Math.round(price * 1.15) / 100;

//  log.push(result)

//  return result
// }

// console.log(withVatLogged(100))

// console.log(withVatLogged(100))

// console.log("log : ", log)
// ===== Phase 6.5 (ক): Callback =====
// Callback কী? — যে function অন্য একটা function-কে value হিসেবে পাঠানো হয়, আর সেই function পরে দরকার মতো তাকে ডাকে।

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// const subtract = (x, y) => x - y;

// console.log(calculate(6, 3, subtract)); // 3
// console.log(calculate(6, 3, (x, y) => x * y)); // 18
// console.log(calculate(6, 3, (x, y) => x / y)); // 2

// ===== Phase 6.5 (খ): Repeat =====
// নাম: repeat · ঢোকে: n (কতবার) আর fn (কী করবে) · বের হয়: কিছু না, শুধু fn চালায়

// function repeat(n, fn) {
//   for (let i = 0; i < n; i++) {
//     fn(i); // প্রতি ঘুরে callback-কে ডাকো, ঘুরের নম্বর পাঠিয়ে
//   }
// }

// repeat(3, (i) => console.log("hi", i));

// function makeGreeter(greeting) {
//   return function (name) {
//     return greeting + ", " + name;
//   };
// }

// const sayHello = makeGreeter("Hello");
// const sayHi = makeGreeter("Hi");

// console.log(sayHello("Rahim"));
// console.log(sayHi("Apple"));
// console.log(typeof sayHello);

// /**
//  * @return {Function}
//  */
// var createHelloWorld = function () {
//   return () => "Hello World";
// };

// const f = createHelloWorld();
// console.log(f());

// console.log(f({}, null, 42));

// function isAdult(person) {
//   return person.age >= 18;
// }

// function isCitizen(person) {
//   return person.country === "BD";
// }

// function canVote(person) {
//   return isAdult(person) && isCitizen(person);
// }

// console.log(canVote({ age: 20, country: "BD" }));
// console.log(canVote({ age: 16, country: "BD" }));
// console.log(canVote({ age: 30, country: "IN" }));

// function hasLength4(pin) {
//   return pin.length === 4;
// }

// function allDigits(pin) {
//   for (const ch of pin) {
// console.log(typeof ch) // sting

//     if (ch < "0" || ch > "9") {
//       return false;
//     }
//   }

//   return true;
// }

// function isValidPin(pin) {
//   return hasLength4(pin) && allDigits(pin);
// }

// console.log(isValidPin("1234"));
// console.log(isValidPin("12a4"));
// console.log(isValidPin("123"));
// console.log(isValidPin("12345"));

// P6.7a. Recursive Countdown

// /**
//  * @param {number} n
//  * @return {void}
//  */
// function countDown(n) {
//   if (n === 0) {
//     console.log("Done");
//     return;
//   }

//   console.log(n);
//   countDown(n - 1);
// }

// countDown(3);

// P6.7b. Sum to N Using Recursion

// /**
//  * @param {number} n
//  * @return {number}
//  */
// function sumTo(n) {

//   if (n === 0) return 0

//   console.log('Number : ', n);
//   return n + sumTo(n - 1);

// }

// // console.log(sumTo(4));
// // console.log(sumTo(3))
// // console.log(sumTo(1))
// console.log(sumTo(0))

// Sum of Any Number of Arguments

// /**
//  * @param {...number} nums
//  * @return {number}
//  */
// function sum(...nums) {
//   // ...nums collects all arguments into an array, e.g. [5, 5, 6]
//   let total = 0;

//   for (const num of nums) {
//     total += num;
//   }

//   return total;
// }

// console.log(sum(5, 5, 6));

// 2635. Apply Transform Over Each Element in Array
// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var map = function (arr, fn) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     // result.push(fn(arr[i]));
//     // console.log(fn(arr[i], i))
//     result.push(fn(arr[i], i))
//   }

//   return result;
// };

// const arr = [1, 2, 3];

// function fn(n) {
//   return n + 1;
// }

// console.log(map(arr, fn));

// const arr = [1, 2, 3];
// const fn = function plusI(n, i) {
//   return n + i;
// };

// console.log(map(arr, fn)); // [1, 3, 5]

// 2634. Filter Elements from Array

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var filter = function (arr, fn) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// // Example 3
// const arr = [-2, -1, 0, 1, 2];

// const fn = n => n + 1;

// console.log(filter(arr, fn));
// // Output: [-2, 0, 1, 2]

// Function Signature

// /**
//  * @param {Function} fn
//  * @param {number} n
//  * @param {number} x
//  * @return {number}
//  */
// var applyNTimes = function (fn, n, x) {
//   let result = x;

//   for (let i = 0; i < n; i++) {
//     // console.log(result)
//     result = fn(result);
//   }

//   return result;
// };

// // const fn = (x) => x * 2;

// // console.log("final : ", applyNTimes(fn, 3, 1));
// // fn = x => x * 2
// // n = 3
// // x = 1

// const fn2 = (x) => x + 10;
// const n2 = 0;
// const x2 = 5;

// console.log(applyNTimes(fn2, n2, x2)); // Expected: 5
