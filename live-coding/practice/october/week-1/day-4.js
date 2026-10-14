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



