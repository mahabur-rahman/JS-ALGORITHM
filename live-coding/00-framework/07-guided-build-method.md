# 07 — Guided Build: ছোট ছোট ধাপে, পরের লাইন আন্দাজ করে

> **লক্ষ্য:** "পরের লাইন কী লিখব" — এই চিন্তাটা অভ্যাসে পরিণত করা।
> একটা problem একবারে solve হবে না। প্রতিটা ধাপে আগে **চিন্তা**, তারপর তুমি **পরের লাইন আন্দাজ** করবে,
> তারপর লাইনটা আর `console.log`-এর **আসল output** দেখে মিলিয়ে নেবে।

---

## ১. প্রতিদিনের ক্রম

```
১. Topic পড়া (concept)                ← আগে পুরো বুঝে নাও
২. Output আন্দাজ / ছোট exercise
৩. Guided Build (আমার সাথে, chat-এ)   ← প্রতিটা ধাপে তুমি পরের লাইন আন্দাজ করবে
৪. নিজে solve (একই topic-এর বাকি ★)  ← guidance ধীরে ধীরে কমবে
৫. Gate Check (topic শেষে)
```

---

## ২. একটা ধাপের গঠন

প্রতিটা ধাপ এভাবে আসবে:

```
🧠 চিন্তা:    এখন কী জানা দরকার / কী করা দরকার (এক লাইন)
❓ তোমার আন্দাজ: পরের লাইন কী?            ← তুমি লিখে পাঠাবে
✅ লাইন:      আসল code
▶️ Output:    console.log চালালে যা দেখায়
💡 কেন:       এই লাইনটা কেন (এক লাইন)
```

- আন্দাজ মিলে গেলে → পরের ধাপ।
- না মিললে → ভুল হওয়াটা খারাপ না। **কেন অন্যরকম**, সেটা বুঝে নিয়ে পরের ধাপে যাবে।
- একদম মাথায় না এলে লিখবে **"জানি না"** — আমি শুধু ছোট একটা ইঙ্গিত দেব, তারপর আবার আন্দাজ করবে।

---

## ৩. `console.log` নিয়ম

প্রতিটা ধাপে state **দেখতে** হবে — অনুমান না:
- function-এর শুরুতে: `console.log("input:", ...)`
- loop-এর আগে: শুরুর value
- loop-এর ভেতরে: প্রতিটা ঘুরে কী বদলাল — `console.log("num:", num, "→ sum:", sum)`
- শেষে: `console.log("answer:", ...)`
- তারপর edge case দিয়ে আবার চালাও
- **সব শেষে debug log মুছে দাও** (interview-এ পরিষ্কার code দেখাতে হয়)

---

## ৪. একটা পূর্ণ উদাহরণ

**Problem:** `sumOfPositives(nums)` — array-র শুধু ধনাত্মক সংখ্যাগুলোর যোগফল। `[3, -1, 4, -5, 2]` → `9`

### ধাপ ১
🧠 **চিন্তা:** আগে function-এর খোলস বানাই, আর input ঠিক আসছে কিনা দেখি।
❓ **আন্দাজ:** প্রথম লাইন কী?
✅ **লাইন:**
```js
function sumOfPositives(nums) {
  console.log("input:", nums);
}
sumOfPositives([3, -1, 4, -5, 2]);
```
▶️ **Output:**
```
input: [ 3, -1, 4, -5, 2 ]
```
💡 **কেন:** input নিশ্চিত না করে কাজ শুরু করলে পরে ভুল ধরা কঠিন।

### ধাপ ২
🧠 **চিন্তা:** "যোগফল" মানে **accumulation** → loop-এর আগে একটা জমানোর জায়গা লাগবে। শুরু কত?
❓ **আন্দাজ:** loop-এর আগের লাইন?
✅ **লাইন:**
```js
  let sum = 0;
  console.log("start sum:", sum);
```
▶️ **Output:**
```
start sum: 0
```
💡 **কেন:** `let` কারণ value বদলাবে; `0` কারণ কিছু যোগ না করলে যোগফল শূন্য।

### ধাপ ৩
🧠 **চিন্তা:** প্রতিটা সংখ্যা একবার দেখতে হবে। index লাগবে? না — শুধু value।
❓ **আন্দাজ:** কোন loop?
✅ **লাইন:**
```js
  for (const num of nums) {
    console.log("num:", num);
  }
```
💡 **কেন:** শুধু value লাগলে `for...of` সবচেয়ে পরিষ্কার।

### ধাপ ৪
🧠 **চিন্তা:** প্রতিটা সংখ্যায় সিদ্ধান্ত — ধনাত্মক হলে যোগ। 0 কি ধনাত্মক? (না — তাই `> 0`)
❓ **আন্দাজ:** loop-এর ভেতরে কী?
✅ **লাইন:**
```js
    if (num > 0) {
      sum += num;
    }
    console.log("num:", num, "→ sum:", sum);
```
▶️ **Output:**
```
num: 3 → sum: 3
num: -1 → sum: 3
num: 4 → sum: 7
num: -5 → sum: 7
num: 2 → sum: 9
```
💡 **কেন:** output দেখেই বোঝা যায় negative এলে sum বদলায় না — logic ঠিক।

### ধাপ ৫
🧠 **চিন্তা:** loop শেষ — এখন উত্তর **ফেরত** দিতে হবে (`console.log` না!)।
❓ **আন্দাজ:** loop-এর পরের লাইন?
✅ **লাইন:**
```js
  return sum;
}
console.log("answer:", sumOfPositives([3, -1, 4, -5, 2]));
```
▶️ **Output:**
```
answer: 9
```

### ধাপ ৬ — Edge case
🧠 **চিন্তা:** খালি array? সব negative?
```js
console.log("empty:", sumOfPositives([]));
console.log("all negative:", sumOfPositives([-1, -2]));
```
▶️ **Output:**
```
empty: 0
all negative: 0
```

### ধাপ ৭ — পরিষ্কার code + complexity
```js
function sumOfPositives(nums) {
  let sum = 0;
  for (const num of nums) {
    if (num > 0) sum += num;
  }
  return sum;
}
// Time:  O(n) — প্রতিটা সংখ্যা একবার দেখি
// Space: O(1) — শুধু একটা variable
```

**লক্ষ করো:** প্রতিটা লাইন একটা **প্রশ্নের উত্তর** থেকে এসেছে — Loop Template (আগে / ভেতরে / পরে)।

---

## ৫. Problem যেভাবে দেখাব — LeetCode format

প্রতিটা problem LeetCode-এর বাঁ দিকের অংশের মতো আসবে (description English-এ, কারণ interview-এ এভাবেই পাবে):

````
## <নম্বর>. <Title>   🟢 Easy / 🟡 Medium / 🔴 Hard
**Pattern:** <topic>   (Gate / unseen problem-এ pattern লেখা থাকবে না)

<Problem description — English>

**Example 1:**
Input: ...
Output: ...
Explanation: ...

**Example 2:** ...

**Constraints:**
- ...

**Follow-up:** ... (থাকলে)

```js
/**
 * @param {...} ...
 * @return {...}
 */
var functionName = function (...) {

};
```

**সহজ বাংলায়:** problem-টা ১–২ লাইনে।
**Constraint থেকে কী বুঝি:** n কত বড় → কোন complexity চলবে (`03-complexity-guide.md` অংশ ৬)।
````

তারপর Guided Build ধাপগুলো। শেষে পূর্ণ solution + Time/Space।
- আসল LeetCode problem হলে নম্বর আর নাম আসলটাই, যাতে পরে LeetCode-এ submit করতে পারো।
- plan-এর নিজস্ব problem হলে একই format, নম্বর ছাড়া।

**কেন এই format:** বড় problem-ও আসলে এই একই গঠনের — description, example, constraint। প্রতিদিন এই গঠন পড়তে পড়তে বড় description দেখলেও ভয় কমবে: *"input কী, output কী, example কী বলছে, constraint কত"* — এই চারটা খুঁজলেই শুরু হয়ে যায়।

---

## ৬. নিয়ম (তোমার সিদ্ধান্ত, ৪ অক্টোবর)

1. **Topic আমি আগে আলোচনা করব — একবারে পুরোটা না, ছোট ছোট phase-এ।** প্রতিটা phase-এ শুধু **একটা ধারণা**: ছোট ব্যাখ্যা + **example** (code + আসল `console.log` output) + একটা ছোট যাচাই প্রশ্ন + **একটা ছোট problem** (শুধু ওই phase-এর ধারণা দিয়ে, ২–৫ লাইনের)। তুমি উত্তর দিলে তবেই পরের phase। সব phase শেষ হলে topic-এর বড় (LeetCode format) problem — basic থেকে ধাপে ধাপে কঠিন।
2. **প্রতিটা problem — ছোট হোক বা বড় — এই ধাপে ধাপে পদ্ধতিতে।** একবারে কখনো পুরো solution না।
3. **প্রতিটা problem-এর শেষে পূর্ণ solution** (পরিষ্কার code, debug log ছাড়া) + Time/Space — এক জায়গায় দেখার জন্য।
4. তুমি সেই পূর্ণ solution নিজের `practice/` file-এ **নিজের হাতে টাইপ করবে** (copy-paste না) আর `node` দিয়ে চালাবে।
5. **Gate Check-এ শুধু ব্যতিক্রম:** topic শেষের যাচাই problem একা করবে — "নিজে পারি" সেটা প্রমাণের জন্য। না পারলে সেই topic-এ আরো guided problem।
