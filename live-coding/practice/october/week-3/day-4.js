// W3 D4 — Topic 13: Hashing 1 — COMPLETE (user-confirmed 26 Nov 2026)
// Branch: october/week-3-day-4
// Map API, type/reference keys, nullish defaults, delete/iteration, and
// Map lookup concept covered. Custom processCommands exercise and complexity
// completed. Earlier Set/frequency/Two Sum problems were not repeated.

// // const scores = new Map();

// // scores.set("Rafi", 80);

// // console.log(scores)

// // console.log(scores.get("Rafi")); // 80
// // console.log(scores.has("Rafi")); // true
// // console.log(scores.size);        // 1

// // const values = new Map();
// // values.set(5, "A");
// // values.set("5", "B");
// // values.set(5, "C");

// // console.log(values)
// // console.log(values.size);

// // const map = new Map()
// // const key = [1, 2]

// // map.set(key, "found")

// // console.log(map)

// // console.log(map.get(key))
// // console.log(map.get([1, 2]))

// // const seen = new Map();
// // seen.set(2, 0); // value 2, index 0

// // console.log(seen)
// // const target = 9;
// // const current = 7;
// // const needed = target - current;

// // console.log(needed);              // 2
// // console.log(seen.has(needed));    // true
// // console.log(seen.get(needed));    // 0

// // const scores = new Map([["Asha", 0]]);

// // console.log(scores.get("Rafi"));              // undefined
// // console.log(scores.get("Rafi") ?? 10);        // 10
// // console.log(scores.get("Asha") ?? 10);         // 0

// // const cart = new Map([
// //   ["tea", 2],
// //   ["coffee", 1],
// // ]);

// // console.log(cart)
// // console.log(cart.delete("tea")); // true

// // console.log(cart)
// // console.log(cart.has("tea"));    // false
// // console.log(cart.size);          // 1

// // for (const [item, quantity] of cart) {
// //   console.log(item, quantity);
// // }

// function processCommands(commands) {
//   const map = new Map();
//   const results = [];

//   for (const command of commands) {
//     const operation = command[0];
//     const key = command[1];

//     if (operation === "SET") {
//       const value = command[2];
//       map.set(key, value);

//     } else if (operation === "GET") {
//       results.push(map.has(key) ? map.get(key) : null);

//     } else if (operation === "HAS") {
//       results.push(map.has(key));

//     } else if (operation === "DELETE") {
//       results.push(map.delete(key));

//     } else if (operation === "SIZE") {
//       results.push(map.size);
//     }
//   }

//   return results;
// }

// // Example
// const commands = [
//   ["SET", "theme", "dark"],
//   ["GET", "theme"],
//   ["HAS", "theme"],
//   ["SIZE"]
// ];

// console.log(processCommands(commands));



