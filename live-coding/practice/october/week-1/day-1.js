// October · Week 1 · Day 1 — Variables & Memory
// প্রতিটা phase-এর code এখানে নিজের হাতে টাইপ করো, তারপর চালাও:
// node live-coding/practice/october/week-1/day-1.js

// ===== Phase 1.1: const আর let =====

// const name = "Rahim";
// let age = 25;

// age = 26;
// name = 'karim'
// console.log(name, age);

// let total = 0;
// const prices = [10, 20, 30];
// for (const p of prices) {
//   total = total + p;
//   console.log("p:", p, "→ total:", total);
// }
// console.log("answer:", total);

// let max = - Infinity

// for ( const n of [10, 20, 30, 40, 50]) {
//     if(max < n ) {
//         max = n
//     }

//     console.log(`n: ${n} → max: ${max}`);
// }

// ===== Phase 1.2: scope =====

// if(true) {
//     var x = 10;
//     let b = 20;

// }

// console.log(x); // 10
// console.log(b); // ReferenceError: b is not defined

// for (var i = 0; i < 3; i++) {}
// console.log(i);

// function test() {
//     if(true){
//         let x = 10;
//     }

//     return x; // ReferenceError: x is not defined
// }

// console.log(test())

// let message = "Hello, World!";

// if(true ){
//     let message = "Hello, Bangladesh!";
//     console.log(` 1 : `, message); // Hello, Bangladesh!
// }
// console.log(` 2 : `, message); // Hello, World!

// ===== Phase 1.3: hoisting =====

// console.log("A:", score);
// var score = 50;
// console.log("B:", score);

// console.log("C:", level);
// let level = 3;

// console.log(sayHi());
// function sayHi() { return "hi"; }

// let total = 100;
// function show() {
//   console.log(total);
//   let total = 5;
// }
// show();

// ===== Phase 1.4: copy =====

// let a = 10;
// let b = a;
// b = 20;
// console.log(a, b); // 10 20

// const user1 = { name: "a" };
// const user2 = user1;
// user2.name = "Karim";
// console.log("user1:", user1, "user2:", user2);
// console.log("same object?", user1 === user2);

// const scores = [10, 20, 30];
// const copy = scores;

// copy.push(40);

// const realCopy = [...scores];
// realCopy.push(50);

// console.log("scores:", scores, "realCopy:", realCopy);

// const cart = ["apple"];
// const backup = cart;
// cart.push("mango"); // [ "apple", "mango" ]

// let count = cart.length; // 2
// let saved = count; // 2
// count = 0;

// console.log(backup, saved);

// Phase 1.5: Mutation বনাম Reassignment

// let fruits = ["apple", "banana"];
// const other = fruits;

// fruits.push("mango");

// console.log("fruits:", fruits, "other:", other);

// fruits = ["orange", "grape"];
// console.log("fruits:", fruits, "other:", other);

// const tasks = ["a", "b"];
// const ref = tasks;
// tasks.length = 0;               // উপায় ১
// console.log("tasks:", tasks, "ref:", ref);

// let items = ["a", "b"];
// const ref2 = items;
// items = [];                     // উপায় ২
// console.log("items:", items, "ref2:", ref2);

// ===== Phase 1.6: function =====

// function resetList(list) {
//   list = [];
//   console.log("inside:", list);
// }
// const box2 = ["start"];
// resetList(box2);
// console.log("outside:", box2);

// function change(items)  {
// items.push("end");
// items = ["new", "list"];
// items.push("new end");

// console.log("inside:", items);
// }

// const box3 = ["start"];
// change(box3);
// console.log("box3:", box3);

// =============== Topic 1-এর Problems: LeetCode format, ধাপে ধাপে ===============

// Swap Two Values 🟢 Easy

// Example 1:

// Input: a = 1, b = 2
// Output: [2, 1]
// Example 2:

// Input: a = "x", b = "y"
// Output: ["y", "x"]
// Explanation: Ways 1 and 2 work for any type. Way 3 works only for numbers.

// problem swap two values

// /**
//  * @param {*} a
//  * @param {*} b
//  * @return {Array}
//  */

// var swapValues = function (a, b) {

//     let first = a;
//     let second = b;

//     const output = [first, second]

//     const result = output.reverse()

// console.log(first, second)

//     return result
// };

// Using a temp variable

// /**
//  * @param {*} a
//  * @param {*} b
//  * @return {Array}
//  */
// var swapValues = function (a, b) {

//     // step 1:
//     const temp = a;

//     // step 2 :

//     a = b;

//     // step 3:

//     b = temp;

//     return [a, b]

// };

// const swapValues = function (a, b) {

//     a = a + b

//     b = a - b
//     a = a - b

//   return [a, b];
// };

// console.log(swapValues(1, 2)); // [2, 1]
// // console.log(swapValues("x", "y")); // ["y", "x"]

const updateName = function (user, newName) {
 return {
    ...user, 
    newName
 }
};

const user = { name: "Rahim", age: 25 };

console.log(updateName(user, "Karim"));

console.log("User ; ", user )