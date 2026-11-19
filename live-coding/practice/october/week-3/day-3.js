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
 */
var toggleSetting = function (settings, key) {
  const newSettings = { ...settings };

  newSettings[key] = !newSettings[key];

  return newSettings;
};

// console.log(toggleSetting({ darkMode: false }, "darkMode"));
// Expected: { darkMode: true }

console.log(toggleSetting(
  { sound: true, darkMode: false },
  "sound"
));
// Expected: { sound: false, darkMode: false }
