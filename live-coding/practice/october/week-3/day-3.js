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

const prices = {
  tea: 10,
  coffee: 20,
};

/**
 * @param {Object} prices
 * @return {Object}
 */
var increasePrices = function (prices) {
  const newPrice = {};

  for (const key in prices) {
    newPrice[key] = prices[key] * 1.1;
  }

  return newPrice;
};

console.log(increasePrices(prices));
