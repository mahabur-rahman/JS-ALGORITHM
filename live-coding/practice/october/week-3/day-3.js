// W3 D3 — Topic 12: Objects
// Branch: october/week-3-day-3
// Start with the concept phases and problem sequence in:
// live-coding/month-1-october/october-plan.md
// No problems have been started for this day yet.

// const settings = {
//   darkMode: false,
// };

// console.log(settings.darkMode);

// P12.1 — Settings Toggle

/**
 * @param {Object} settings
 * @param {string} key
 * @return {Object}
//  */
// var toggleSetting = function (settings, key) {
//   const newSettings = { ...settings };

//   newSettings[key] = !newSettings[key];

//   return newSettings;
// };

// console.log(toggleSetting({ darkMode: false }, "darkMode"));
// Expected: { darkMode: true }

// console.log(toggleSetting(
//   { sound: true, darkMode: false },
//   "sound"
// ));
// Expected: { sound: false, darkMode: false }

// const settings = { darkMode: false };
// const data = { theme: undefined };

// console.log("toString" in settings); // true
// console.log(Object.hasOwn(settings, "toString")); // false

// const prices = { tea: 10, coffee: 20 };

// const entries = Object.entries(prices);
// // console.log(entries);
// // [["tea", 10], ["coffee", 20]]

// const updatedEntries = entries.map(([name, price]) => {
//   return [name, price * 1.1];
// });

// console.log(updatedEntries)

// const prices = {
//   tea: 10,
//   coffee: 20,
// };

// /**
//  * @param {Object} prices
//  * @return {Object}
//  */
// var increasePrices = function (prices) {
//   const newPrice = {};

//   for (const key in prices) {
//     newPrice[key] = prices[key] * 1.1;
//   }

//   return newPrice;
// };

// console.log(increasePrices(prices));

// const data = {};

// data[1] = "first";
// data["1"] = "updated";

// console.log(data); // { "1": "updated" }
// console.log(Object.keys(data)); // ["1"]

// const item = { b: 1, 3: 1, a: 1, 1: 1, 2: 1 };

// console.log(Object.keys(item));
// ["1", "2", "3", "b", "a"]

// const object = {};

// object[3] = "three";
// object["1"] = "one";
// object[2] = "two";
// object["name"] = "item";

// console.log(Object.keys(object));

// const user = {
//   name: "Rafi",
//   address: { city: "Dhaka" },
// };

// const shallowCopy = { ...user };

// // console.log(shallowCopy);

// shallowCopy.name = "Babu";
// console.log(user.name);

// shallowCopy.address.city = "Khulna";

// console.log(user.address.city); // "Khulna"

// const profile = {
//   name: "Asha",
//   preferences: { theme: "light" },
// };

// const copy = { ...profile };
// copy.preferences.theme = "dark";

// console.log(profile.preferences.theme);

// const a = { score: 10 };
// const b = { score: 10 };
// const c = a;

// console.log(a === b);
// console.log(a === c);

// const account = { role: "member" };
// const { role: accountRole, city = "Dhaka" } = account;

// console.log(accountRole);
// console.log(city);

// const data = {
//   name: "Asha",
//   extra: undefined,
//   action: () => "go",
// };

// console.log(JSON.stringify(data));
// // {"name":"Asha"}

// // console.log(data)

// const user = Object.freeze({
//   name: "Asha",
//   settings: { theme: "light" },
// });

// user.settings.theme = "dark";

// console.log(user.settings.theme); // "dark"
// console.log(Object.isFrozen(user.settings)); // false

// O1 — Group By:

/**
 * @param {Object[]} items
 * @param {string} key
 * @return {Object}
 */

// My Approach :

// - loop on items array and check with role
// - using for..of loop
// - if role is admin push it to result {} and if role is user push to result object again like this : {[{}, {}]}
// - finally return result

// var groupBy = function (items, key) {
//   let result = {};

//   for (const item of items) {
   
//     const group = item[key]

    

//     if(!result[group]){
//         result[group] = []
//     }

//     result[group].push(item)
//   }

//   return result;
// };

// console.log(
//   groupBy(
//     [
//       { name: "Asha", role: "admin" },
//       { name: "Rafi", role: "user" },
//       { name: "Mina", role: "admin" },
//     ],
//     "role",
//   ),
// );

// {
//   admin: [
//     { name: "Asha", role: "admin" },
//     { name: "Mina", role: "admin" }
//   ],
//   user: [
//     { name: "Rafi", role: "user" }
//   ]
// }


