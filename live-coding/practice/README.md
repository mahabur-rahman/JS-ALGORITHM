# practice/ — তোমার code

প্রতিদিন নতুন file, এই গঠনে:

```
practice/
├── october/week-1/day-1.js
├── october/week-1/day-2.js
├── ...
├── november/week-1/day-1.js
└── december/final-days/day-1.js
```

চালাও: `node live-coding/practice/october/week-1/day-1.js`

প্রতিটা ★ problem শুরু করবে Blank Editor header দিয়ে (`00-framework/01-master-framework.md` অংশ ৫), আর শেষ করবে:

```js
// Time:  O(?) because ...
// Space: O(?) because ...
```

Test-এর জন্য `console.assert(actual === expected, "message")` — ভুল হলেই শুধু message দেখায়।
Array/object তুলনায়: `console.assert(JSON.stringify(actual) === JSON.stringify(expected), "...")`।
