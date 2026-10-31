// W2 D3 — Topic 10: Strings 1 — Basics, methods, character codes
// Branch: october/week-2-day-3
// Follow Day 10 in live-coding/month-1-october/october-plan.md.
// Learn one concept, trace its console output, then solve its mini-problem.
// Do not look for a complete solution before attempting each problem.

// P10.1 — Strings are immutable
// Concept example and mini-problem: const s = "Hello"; s[0] = "J";
// Predict the output, then create "Jello" without mutating s.

// P10.2 — Index, at(), slice(), substring()
// Mini-problem: getExt("photo.png") -> "png"
//               getExt("archive.tar.gz") -> "gz"

// P10.3 — split() and join()
// Mini-problem: toSlug("Hello World JS") -> "hello-world-js"

// P10.4 — Character codes and alphabet positions
// Mini-problem: map "a" -> 0 and "z" -> 25 with charCodeAt();
// use String.fromCharCode() to map 2 -> "c".

// P10.5 — String comparison vs numeric comparison
// Predict: "10" < "9", 10 < 9, "apple" < "banana".

// P10.6 — Build a string with an array and join()
// Mini-problem: build "-*-*-*" for n = 3.

// P10.7 — isAlphaNumeric(ch), first with character codes, then regex
// Examples: "a" -> true, "," -> false.

// ★ S1 — LeetCode 344: Reverse String (in-place, two pointers)
// If completed here, skip November's recursive Reverse String exercise.
// var reverseString = function (s) {};

// ★ S2 — LeetCode 125: Valid Palindrome
// Compare a cleaned-string approach with a two-pointer approach.
// var isPalindrome = function (s) {};

// ○ S3 — Optional: Capitalize Words
// Do once with split/map/join and once without those methods.

// const word = "cat";

// console.log(word);    // cat
// console.log(word[0]); // c

// const newWord = "b" + word[1] + word[2];

// console.log(newWord); // bat
// console.log(word);    // cat

// const s = "Hello";

// s[0] = "J";

// console.log(s); // Hello

// const newS = "J" + s.slice(1);

// console.log(newS); // Jello
// console.log(s);    // Hello

// "use strict"
// const s = "Hello";

// s[0] = "J";

// console.log(s);

// const text = "hello";

// console.log(text[0]);    // h
// console.log(text[4]);    // o
// console.log(text.at(-1)); // o
// console.log(text.length); // 5

// const word = "JavaScript";

// console.log(word.slice(0, 4));     // Java
// console.log(word.slice(-6));       // Script
// console.log(word.substring(4, 0)); // Java

// function getExt(filename) {
//   const dotIndex = filename.lastIndexOf(".");

//   console.log('dot : ', dotIndex)
//   return filename.slice(dotIndex + 1);

// }

// console.log(getExt("photo.png"));      // png
// console.log(getExt("archive.tar.gz")); // gz

// const colors = "red blue";

// const parts = colors.split(" ");
// console.log(parts); // ["red", "blue"]

// const label = parts.join("-");
// console.log(label); // red-blue
// console.log(colors); // red blue — আগের string অপরিবর্তিত

// split text like : ["Hello", "World", "JS"]
// join with -
// convert small letter and then return it

// function toSlug(text) {
//   const convertedText = text.trim().toLowerCase();

//   const textOfSplit = convertedText.split(/\s+/);

//   const result = textOfSplit.join("-");

//   return result;
// }

// console.log(toSlug("Hello World JS"));
// // hello-world-js

// console.log(toSlug("Hello  World  JS"));
// // hello-world-js

// console.log(toSlug("  Hello World  "));
// // hello-world

// function toSlug(text) {
//   const convertedText = text.trim().toLowerCase();

//   console.log('trim method apply : ', convertedText)

//   const textOfSplit = convertedText.split(/\s+/);

//   console.log('Split method apply : ', textOfSplit)

//   const result = textOfSplit.join("-");

//   return result;
// }

// console.log(toSlug("Hello World    JS"));

// const letter = "d";
// const letterCode = letter.charCodeAt(0)
// // console.log(letter, " ", letterCode)

// const aCode = "a".charCodeAt(0)
// // console.log(aCode)

// // console.log(letterCode - aCode); // 3

// const sameLetter = String.fromCharCode(aCode + 3);
// console.log(sameLetter); // d

// Task 1: Letter → Alphabet Index

// function getAlphabetIndex(letter) {
//   const aCode = "a".charCodeAt(0);

//   return letter.charCodeAt(0) - aCode;
// }

// function getLetterFromIndex(index) {
//   const aCode = "a".charCodeAt(0);

//   return String.fromCharCode(aCode + index);
// }

// // Letter → Alphabet Index
// console.log(getAlphabetIndex("m")); // 12
// console.log(getAlphabetIndex("z")); // 25

// // Alphabet Index → Letter
// console.log(getLetterFromIndex(4));  // e
// console.log(getLetterFromIndex(25)); // z

// console.log("10" < "9");
// console.log(10 < 9);
// console.log("apple" < "banana");

// problem: Repeat Dash

// How to think :
// - using for
// - declare on variable that we keep for each number through loop and push *-
// - and join and return it

    function repeatDash(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        // console.log('Index: ', i)
        result.push("-*");
    }

    return result.join("");
    }

    console.log(repeatDash(3)); // "-*-*-*"
console.log(repeatDash(1)); // "-*"
console.log(repeatDash(2)); // "-*-*"
