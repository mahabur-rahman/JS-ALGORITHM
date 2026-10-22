// const prices = [4, 6, 8];
// console.log("Input:", prices); // [4, 6, 8]

// const total = 4 + 6 + 8;
// console.log("Process: দামগুলো যোগ", total); // 18

// console.log("Output:", total); // 18

// console.log(typeof [])

// function averageNumber(nums) {

//     if(!Array.isArray(nums)) {
//         return 'Please provide an array'
//     }

//     const numLength = nums.length;
//   // console.log(numLength) // 4
//   let total = 0;

//   if (nums.length === 0) return "Please enter number";

//   for (const number of nums) {
//     //    console.log(number)

//     total = total + number;
//   }

//   const average = total / numLength;

//   return average;
// }

// const nums = [10, 20, 30, 40];

// console.log(averageNumber(nums));
// console.log(averageNumber([]))
// console.log(averageNumber())
// console.log(averageNumber(undefined));

// let passed = 0;
// console.log("শুরুতে:", passed); // 0

// passed++;
// console.log("একজন pass করলে:", passed); // 1

// const scores = [50, 49, 80, 0];
// let passed = 0;

// for (const score of scores) {
//   console.log("পরীক্ষা করছি:", score, "| আগের count:", passed);

//   if (score >= 50) {
//     passed++;
//   }

//   console.log("নতুন count:", passed);
// }

// console.log("মোট pass:", passed);

// const prices = [10, 20, 5];
// let total = 0;
// console.log("শুরুর total:", total); // 0

// for (const price of prices) {
//   total += price;
//   console.log("যোগের পর total:", total);
// }

// console.log("মোট বিল:", total); // 35

// const temperatures = [-5, -2, -9];

// let max = temperatures[0];

// for (const temperature of temperatures) {
//   console.log("পরীক্ষা করছি:", temperature, "| বর্তমান max:", max);

//   if (temperature > max) {
//     max = temperature;
//   }

//   console.log("পরীক্ষার পর max:", max);
// }

// console.log("সর্বোচ্চ temperature:", max); // -2

// const users = ["guest", "editor", "admin"];

// let found = false;

// for (const user of users) {
// console.log("Item  : ", user)

// if(user === 'admin'){
//     found = true;

//     break;
// }
// }

// console.log("Admin : ", found)

// const names = ["ana", "babu"];
// const result = [];

// for (const name of names) {
//   console.log("নাম যোগের আগে:", result);
//   result.push(name.toUpperCase());
//   console.log("নাম যোগের পরে:", result);
// }

// console.log("নতুন array:", result); // ["ANA", "BABU"]

// let first = -Infinity;  // এখন পর্যন্ত সবচেয়ে বড়
// let second = -Infinity; // এখন পর্যন্ত দ্বিতীয় বৃহত্তম
// console.log({ first, second });

// function findAdmin(names) {
//   if (!Array.isArray(names)) {
//     return "Please provide an array";
//   }

//   let result = false;

//   for (const name of names) {
//     if (name === "admin") {
//       return true;
//     }
//   }

//   return result;
// }

// console.log(findAdmin(["student", "dmin", "admin", "ana"])); // true
// console.log(findAdmin(["ana", "babu"]));                     // false
// console.log(findAdmin([]));                                  // false
// console.log(findAdmin(["Admin", "ana"]));                    // false
// console.log(findAdmin());                                    // "Please provide an array"

// function toUppercaseNames(names) {

//     const result = []

//     for(const name of names){

// console.log(name)

// result.push(name.toUpperCase())
//     }

//     return result
// }

// console.log(toUppercaseNames(["ana", "babu"])); // ["ANA", "BABU"]

// console.log(toUppercaseNames([]))

// function longestRun(nums) {
//   let currentRun = 1;
//   let maxRun = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       currentRun++;
//     } else {
//       currentRun = 1;
//     }

//     if (currentRun > maxRun) {
//       maxRun = currentRun;
//     }
//   }

//   return maxRun;
// }

// console.log(longestRun([1, 1, 2, 2, 2, 3])); // 3
// console.log(longestRun([4, 4, 4])); // 3
// console.log(longestRun([1, 2, 1])); // 1
// console.log(longestRun([3, 4, 5, 6, 0, 0, 8])); // 2
// console.log(longestRun([7, 7, 7, 2, 2])); // 3


// Problem 2 — Count Vowels



// function countVowels(word) {

//   if(word === undefined){
//    return 0
//   }


//   let count = 0;
//   let coveredWordToLowerCase = word.toLowerCase()

//   for(const character of coveredWordToLowerCase){
//     // console.log(vowel)

//     if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
//       count++
//     }
//   }

//   return count
// }

// // console.log(countVowels("education")); 
// // console.log(countVowels("programming"))
// console.log(countVowels("BeAutIfula"))