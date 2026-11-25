// W3 D3 — Topic 12: Objects — COMPLETE (user-confirmed 25 Nov 2026)
// Branch: october/week-3-day-3
// P12.1–P12.8 covered; O1/LC 2631 and O2/LC 819 submitted;
// O3 output is correct. Current recursive Object.assign approach may take
// O(n*h) time in nested cases; user chose to count the day complete.

// // const settings = {
// //   darkMode: false,
// // };

// // console.log(settings.darkMode);

// // P12.1 — Settings Toggle

// /**
//  * @param {Object} settings
//  * @param {string} key
//  * @return {Object}
// //  */
// // var toggleSetting = function (settings, key) {
// //   const newSettings = { ...settings };

// //   newSettings[key] = !newSettings[key];

// //   return newSettings;
// // };

// // console.log(toggleSetting({ darkMode: false }, "darkMode"));
// // Expected: { darkMode: true }

// // console.log(toggleSetting(
// //   { sound: true, darkMode: false },
// //   "sound"
// // ));
// // Expected: { sound: false, darkMode: false }

// // const settings = { darkMode: false };
// // const data = { theme: undefined };

// // console.log("toString" in settings); // true
// // console.log(Object.hasOwn(settings, "toString")); // false

// // const prices = { tea: 10, coffee: 20 };

// // const entries = Object.entries(prices);
// // // console.log(entries);
// // // [["tea", 10], ["coffee", 20]]

// // const updatedEntries = entries.map(([name, price]) => {
// //   return [name, price * 1.1];
// // });

// // console.log(updatedEntries)

// // const prices = {
// //   tea: 10,
// //   coffee: 20,
// // };

// // /**
// //  * @param {Object} prices
// //  * @return {Object}
// //  */
// // var increasePrices = function (prices) {
// //   const newPrice = {};

// //   for (const key in prices) {
// //     newPrice[key] = prices[key] * 1.1;
// //   }

// //   return newPrice;
// // };

// // console.log(increasePrices(prices));

// // const data = {};

// // data[1] = "first";
// // data["1"] = "updated";

// // console.log(data); // { "1": "updated" }
// // console.log(Object.keys(data)); // ["1"]

// // const item = { b: 1, 3: 1, a: 1, 1: 1, 2: 1 };

// // console.log(Object.keys(item));
// // ["1", "2", "3", "b", "a"]

// // const object = {};

// // object[3] = "three";
// // object["1"] = "one";
// // object[2] = "two";
// // object["name"] = "item";

// // console.log(Object.keys(object));

// // const user = {
// //   name: "Rafi",
// //   address: { city: "Dhaka" },
// // };

// // const shallowCopy = { ...user };

// // // console.log(shallowCopy);

// // shallowCopy.name = "Babu";
// // console.log(user.name);

// // shallowCopy.address.city = "Khulna";

// // console.log(user.address.city); // "Khulna"

// // const profile = {
// //   name: "Asha",
// //   preferences: { theme: "light" },
// // };

// // const copy = { ...profile };
// // copy.preferences.theme = "dark";

// // console.log(profile.preferences.theme);

// // const a = { score: 10 };
// // const b = { score: 10 };
// // const c = a;

// // console.log(a === b);
// // console.log(a === c);

// // const account = { role: "member" };
// // const { role: accountRole, city = "Dhaka" } = account;

// // console.log(accountRole);
// // console.log(city);

// // const data = {
// //   name: "Asha",
// //   extra: undefined,
// //   action: () => "go",
// // };

// // console.log(JSON.stringify(data));
// // // {"name":"Asha"}

// // // console.log(data)

// // const user = Object.freeze({
// //   name: "Asha",
// //   settings: { theme: "light" },
// // });

// // user.settings.theme = "dark";

// // console.log(user.settings.theme); // "dark"
// // console.log(Object.isFrozen(user.settings)); // false

// // O1 — Group By:

// /**
//  * @param {Object[]} items
//  * @param {string} key
//  * @return {Object}
//  */

// // My Approach :

// // - loop on items array and check with role
// // - using for..of loop
// // - if role is admin push it to result {} and if role is user push to result object again like this : {[{}, {}]}
// // - finally return result

// // var groupBy = function (items, key) {
// //   let result = {};

// //   for (const item of items) {

// //     const group = item[key]

// //     if(!result[group]){
// //         result[group] = []
// //     }

// //     result[group].push(item)
// //   }

// //   return result;
// // };

// // console.log(
// //   groupBy(
// //     [
// //       { name: "Asha", role: "admin" },
// //       { name: "Rafi", role: "user" },
// //       { name: "Mina", role: "admin" },
// //     ],
// //     "role",
// //   ),
// // );

// // {
// //   admin: [
// //     { name: "Asha", role: "admin" },
// //     { name: "Mina", role: "admin" }
// //   ],
// //   user: [
// //     { name: "Rafi", role: "user" }
// //   ]
// // }

// /**
//  * @param {Function} fn
//  * @return {Object}
//  */
// // Array.prototype.groupBy = function (fn) {
// //   const result = {};

// //   for (const item of this) {
// //     const group = fn(item);

// //     if (!result[group]) {
// //       result[group] = [];
// //     }

// //     result[group].push(item)
// //   }

// //   return result
// // };

// // const array = [{ id: "1" }, { id: "1" }, { id: "2" }];

// // const fn = (item) => item.id;

// // console.log(array.groupBy(fn))

// // const words = ["tea", "coffee", "tea"];
// // const counts = {};

// // for(const word of words) {
// //     if(counts[word] === undefined){
// //         counts[word] = 1
// //     }else {
// //         counts[word]++
// //     }
// // }

// // console.log(counts); // { tea: 2, coffee: 1 }

// // O2 — Count Words and Find the Most Frequent

// /**
//  * @param {string[]} words
//  * @return {Object}
//  */
// // var countWords = function (words) {
// //   const counts = {};

// //   let maxCount = 0;
// //   let mostFrequent = "";

// //   for (const word of words) {
// //     // console.log(word)

// //     if (counts[word] === undefined) {
// //       counts[word] = 1;
// //     } else {
// //       counts[word]++;
// //     }
// //   }

// //   for (const word in counts) {
// //     if (counts[word] > maxCount) {
// //       maxCount = counts[word];
// //       mostFrequent = word;
// //     }
// //   }

// //   return {
// //     counts,
// //     mostFrequent,
// //   };
// // };

// // const words = ["cat", "dog", "cat", "bird", "dog", "cat"];

// // console.log(countWords(words));

// // {
// //   counts: {
// //     cat: 3,
// //     dog: 2,
// //     bird: 1
// //   },
// //   mostFrequent: "cat"
// // }

// // 819. Most Common Word

// /**
//  * @param {string} paragraph
//  * @param {string[]} banned
//  * @return {string}
//  */

// // Thinking : --------------------

// // - at first string er upor e ami loop calaite pari (for..of)

// // - trace every word count in object like : {bob : 2, hit: 10, ....}

// // - and then loop again in object using for..in and then checks with banned word

// // - then checks every word in banned array if it has then skip it \

// // - return most frequent word as a lowercase

// /**
//  * @param {string} paragraph
//  * @param {string[]} banned
//  * @return {string}
//  */
// // var mostCommonWord = function (paragraph, banned) {
// //   // Step 1: Convert to lowercase
// //   const lowerParagraph = paragraph.toLowerCase();

// //   // Step 2: Remove punctuation
// //   const cleanParagraph = lowerParagraph.replace(/[!?',;.]/g, "");

// //   // Step 3: Split paragraph into words
// //   const words = cleanParagraph.split(" ");

// //   // Step 4: Create frequency object
// //   const counts = {};

// //   // Step 5: Count word frequency
// //   for (const word of words) {
// //     if (counts[word] === undefined) {
// //       counts[word] = 1;
// //     } else {
// //       counts[word]++;
// //     }
// //   }

// //   // Step 6: Create banned Set
// //   const bannedSet = new Set(banned);

// //   // Step 7: Find most frequent non-banned word
// //   let maxCount = 0;
// //   let mostFrequent = "";

// //   for (const word in counts) {
// //     if (bannedSet.has(word)) {
// //       continue;
// //     }

// //     if (counts[word] > maxCount) {
// //       maxCount = counts[word];
// //       mostFrequent = word;
// //     }
// //   }

// //   return mostFrequent;
// // };

// // // Test case
// // const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
// // const banned = ["hit"];

// // console.log(mostCommonWord(paragraph, banned)); // "ball"

// /**
//  * @param {string} paragraph
//  * @param {string[]} banned
//  * @return {string}
//  */
// var mostCommonWord = function(paragraph, banned) {

//   // convert paragraph into lowerCase
//   const lowercasePara = paragraph.toLocaleLowerCase()

//   // remove punctuation from paragraph
//   const removePunctuation = lowercasePara.replace(/[!?',;.]/g, "")

//   // split paragraph into an array
// const splitPara = removePunctuation.split(" ")

// // create an empty frequency object
// const result = {}

// // use for..of loop to count word
// for(const word of splitPara){

//   if(result[word] === undefined){
//     result[word] = 1
//   }else {
//     result[word]++
//   }
// }

// const bannedSet = new Set(banned)

// let maxCount = 0;
// let mostFrequent = ""

// // use for..in loop iterate through frequency object

// for(const word in result){

//   if(bannedSet.has(word)){
//     continue
//   }

//   if(result[word] > maxCount){
//     maxCount = result[word]
//     mostFrequent = word
//   }
// }

// return mostFrequent
// };

// const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
// const banned = ["hit"];

// console.log(mostCommonWord(paragraph, banned));

// // Expected: "ball"

// function visit(value) {
//   if (value === null || typeof value !== "object") {
//     console.log("leaf:", value);
//     return;
//   }

//   for (const key of Object.keys(value)) {
//     console.log("key:", key);
//     visit(value[key]);
//   }
// }

// console.log(visit({ a: { b: 1 }, e: 3 }))

// O3 — Flatten a Nested Object

/**
 * @param {Object} obj - The nested input object
 * @return {Object} - The flattened object
 */

// Step 1: Loop using for..in we don't need index that's why

// Step 2 : Find out the key property using for..in loop

// Step 3: Declare result object where top level key keeps like that

// Step 4 : return result {}

// function flattenObject(obj, path = "") {
//   const result = {};

//   // Step 2 : using for..in loop
//   for (const key in obj) {
//     const value = obj[key];

//     const newKey = path ? `${path}.${key}` : key;

//     if (value !== null && typeof value === "object") {
//       const nestedResult = flattenObject(value, newKey);

//       Object.assign(result, nestedResult);
//     } else {
//       result[newKey] = value;
//     }
//   }

//   return result;
// }

// const input = {
//   a: {
//     b: 1,
//     c: {
//       d: 2,
//     },
//   },
//   e: 3,
// };

// console.log(flattenObject(input));

// Expected Output:
// {
//   "a.b": 1,
//   "a.c.d": 2,
//   "e": 3
// }



