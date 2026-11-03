// W2 D4 — Topic 10: Strings 2 — Frequency, Anagram, Prefix
// Branch: october/week-2-day-4
// Follow Day 11 in live-coding/month-1-october/october-plan.md.
// Study concepts and attempt each problem in chat before writing your own code here.

// Mini Problem — Lowercase Letter Frequency

// Thought :
// - given s mean string then loop using for because of need index
// - declare variable like result : []

// function letterFrequency(s) {
//   // Step 1: Create an array with 26 positions
//   const result = Array(26).fill(0);

//   // Step 2: Loop through every character
//   for (const ch of s) {
//     // Step 3: Find the character's index (0-25)
//     const index = ch.charCodeAt(0) - "a".charCodeAt(0);

//     // Step 4: Increase the count

//     result[index]++;
//   }

//   // Step 5: Return the result
//   return result;
// }

// console.log(letterFrequency("supertuper"));

// LeetCode 14 — Longest Common Prefix

// Thought : -------------------------------------

// - given strs ara['', '']

// - strs[0], strs[1], strs[2]

// - loop with strs main array and compare with value itself

// - return common prefix  -------------------------------------

// function longestCommonPrefix(strs) {
//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//     }
//   }

//   return prefix;
// }

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

// LeetCode 387 — First Unique Character in a String

// - using for loop
// - store in object like result : {key : value}
// - return index position of value

// var firstUniqChar = function (s) {
//   let result = {};

//   // Step 1: Count character frequency
//   for (let i = 0; i < s.length; i++) {
//     if (result[s[i]] === undefined) {
//       result[s[i]] = 1;
//     } else {
//       result[s[i]]++;
//     }
//   }

//   // Step 2: Find first unique character
//   for (let i = 0; i < s.length; i++) {
//     if (result[s[i]] === 1) {
//       console.log("First unique character found:", s[i]);
//       return i;
//     }
//   }

//   return -1;
// };

// console.log("Final Output:", firstUniqChar("leetcode")); // 0

// চলো, Day 4-এর পরের কাজ—LeetCode 151: Reverse Words in a String

var reverseWords = function (s) {
  const result = s.trim().split(/\s+/);
  return result.reverse().join(" ");
};

console.log(reverseWords("the sky is blue"));

console.log(reverseWords(" Hello    World   "))