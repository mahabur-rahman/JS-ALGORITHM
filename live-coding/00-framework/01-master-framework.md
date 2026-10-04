# 01 — Master Problem-Solving Framework

> এই file টা তোমার "মাথার operating system"। প্রতিটা problem-এ, প্রতিদিন, এই একই ক্রম।
> প্রথম ২ সপ্তাহ প্রতিদিন practice-এর আগে একবার পড়বে। তারপর মুখস্থ হয়ে যাবে।

---

## ১. সবচেয়ে জরুরি পার্থক্য

| | অবস্থা | উদাহরণ | তোমার এখনকার অবস্থান |
|---|---|---|---|
| 1 | **Knowing** a solution | "Two Sum-এ Map লাগে" — জানি | ✅ |
| 2 | **Understanding** a solution | code দেখলে প্রতিটা লাইন ব্যাখ্যা করতে পারি | ✅ |
| 3 | **Reconstructing** a solution | ৭ দিন পর ফাঁকা editor-এ নিজে আবার লিখতে পারি | ❌ → training করবে |
| 4 | **Discovering** a solution | না দেখা problem-এ নিজে approach বের করি | ❌ → **লক্ষ্য** |
| 5 | **Solving unseen** problems | pattern-এর নাম ছাড়া, অপরিচিত ভাষায় লেখা problem | ❌ → **লক্ষ্য** |

AI দিয়ে কাজ করলে 1 আর 2 শক্ত হয়। 3, 4, 5 শুধু **নিজে হাতে, ফাঁকা editor থেকে** বারবার লিখলেই আসে।
এই পুরো plan-এর কাজ: তোমাকে 2 থেকে 5-এ নিয়ে যাওয়া।

---

## ২. মনের দুটো আলাদা অবস্থা — আলাদা করতে শেখো

```
❌ "আমি এর answer জানি না"         → এটা স্বাভাবিক। top engineer-রাও প্রায়ই জানে না।
❌ "আমি জানি না কীভাবে শুরু করব"     → এটা চলে যাবে। কারণ শুরু করার নিয়ম সবসময় একই।
```

**নতুন অভ্যাস:** অপরিচিত problem দেখলে মনে মনে বলবে:

> **"Good. This is unfamiliar. Let me break it down."**
> "আমি হয়তো এখনই solve করতে পারব না, কিন্তু আমার পরের step কী, সেটা আমি সবসময় জানি।"

কেন সবসময় জানো? কারণ নিচের framework-এর **Step 1 সবসময় একই**: problem নিজের ভাষায় বলা। Step 1 করতে কোনো pattern জানতে হয় না।

---

## ৩. Master Framework — ১৬ ধাপ

```
UNDERSTAND → EXAMPLE → MANUAL SOLVE → BRUTE FORCE → BOTTLENECK → INFORMATION NEEDED
→ DATA STRUCTURE → PATTERN → OPTIMIZE → PSEUDOCODE → CODE → TEST → EDGE CASES
→ COMPLEXITY → ALTERNATIVE → REFLECT
```

### ধাপ 1 — UNDERSTAND
- Problem **দুবার** পড়ো। দ্বিতীয়বার কলম হাতে: noun (input কী) আর verb (কী করতে হবে) দাগাও।
- নিজের ভাষায় এক বাক্যে বলো: *"So I need to return ___ given ___."*
- Input: type কী? (array of numbers? string? sorted? negative থাকতে পারে? duplicate?)
- Output: type কী? (number? index? boolean? নতুন array? in-place?)
- **Clarify প্রশ্ন** (interview-এ জোরে জিজ্ঞেস করবে):
  - Input খালি হতে পারে? তখন কী ফেরত দেব?
  - Duplicate থাকতে পারে?
  - Sorted কি?
  - একাধিক উত্তর থাকলে কোনটা?
  - Input কত বড় হতে পারে? (এটা থেকে complexity-র লক্ষ্য বোঝা যায় — `03-complexity-guide.md` দেখো)
  - Input বদলানো (mutate) যাবে?

### ধাপ 2 — EXAMPLE
- নিজে একটা **ছোট** example বানাও (৩–৫টা element)। Problem-এর example কপি করবে না — নিজে বানালে বুঝবে আসলে বুঝেছ কিনা।
- একটা "সাধারণ" example আর একটা "অদ্ভুত" example (খালি, এক element, সব সমান)।

### ধাপ 3 — MANUAL SOLVE
- কোনো code না ভেবে, **মানুষ হিসেবে** হাতে উত্তর বের করো।
- তারপর নিজেকে জিজ্ঞেস করো: **"আমি আসলে কী করলাম? চোখ কোথায় গেল? মাথায় কী মনে রাখলাম?"**
- তুমি যা মনে রেখেছিলে → সেটাই পরে variable / data structure হবে।
- তুমি যা বারবার করেছিলে → সেটাই loop হবে।

### ধাপ 4 — BRUTE FORCE
- সবচেয়ে সোজা, "সব চেষ্টা করো" উপায়। ধীর হলেও ঠিক উত্তর দেয় এমন।
- জোরে বলো: *"The brute-force approach is to check every pair, which is O(n²)."*
- **ব্রুট ফোর্স বলা কখনো লজ্জার না।** interviewer এটাই প্রথমে শুনতে চায়। আর সময় শেষ হলে অন্তত একটা কাজের solution থাকে।

### ধাপ 5 — BOTTLENECK
- Brute force-এ **কোন কাজটা বারবার হচ্ছে?**
- সাধারণ উত্তর:
  - "প্রতিটা element-এর জন্য পুরো array আবার খুঁজছি" → lookup বারবার
  - "একই যোগফল বারবার হিসাব করছি" → repeated work
  - "একই subproblem বারবার solve করছি" → DP
  - "sorted data-তে linear খুঁজছি" → binary search

### ধাপ 6 — INFORMATION NEEDED
- **সবচেয়ে শক্তিশালী প্রশ্ন:** *"কোন তথ্য আমার হাতে instantly থাকলে কাজটা দ্রুত হতো?"*
  - "এই value আগে দেখেছি কিনা" → Set
  - "এই value কোন index-এ দেখেছি" → Map
  - "এখন পর্যন্ত যোগফল কত" → running sum / prefix
  - "আগের কোন element এর চেয়ে বড়" → stack
  - "সবচেয়ে ছোট/বড় কোনটা, বারবার" → heap

### ধাপ 7 — DATA STRUCTURE
- ধাপ 6-এর উত্তর থেকে আসে। `04-patterns-and-skeletons.md`-এর টেবিল দেখো।

### ধাপ 8 — PATTERN
- Problem-এর **গঠন** দেখো, শুধু শব্দ না। (contiguous? sorted? দুই প্রান্ত? level? choice + undo? dependency?)
- Pattern চিনলে → তার **skeleton** লিখে ফেলো। তারপর শুধু ঘরগুলো ভরাও।

### ধাপ 9 — OPTIMIZE
- Time কমানো যায়? (n² → n log n → n)
- Space কমানো যায়? (Map বাদ দিয়ে two pointers? DP table বাদ দিয়ে দুটো variable?)
- Interview-এ বলো: *"I can improve this by ___, which brings it down to O(n)."*

### ধাপ 10 — PSEUDOCODE
- Code লেখার আগে comment হিসেবে ধাপগুলো লেখো:
  ```js
  // 1. create a map: value -> index
  // 2. loop through nums
  // 3.   need = target - current
  // 4.   if map has need -> return pair
  // 5.   store current in map
  // 6. return [] (no answer)
  ```
- এই comment-গুলোই তোমার "পরের লাইন কী" প্রশ্নের উত্তর। প্রতিটা comment-এর নিচে ১–২ লাইন code।

### ধাপ 11 — CODE
- একবারে **একটা** pseudocode লাইন → JS।
- আটকে গেলে: সেই অংশটা একটা helper function বানিয়ে নাম দাও (`isValid(...)`), পরে লিখবে। বাকিটা এগিয়ে নাও।
- ভালো নাম দাও: `left/right`, `seen`, `count`, `windowStart`, `result`। `a, b, x` না।

### ধাপ 12 — TEST
- তোমার ধাপ 2-এর example দিয়ে code-টা **হাতে চালাও** (dry run) — variable-এর টেবিল বানিয়ে।
- তারপর `node file.js` দিয়ে চালাও।

### ধাপ 13 — EDGE CASES
- `02-hints-debug-edgecases.md`-এর checklist থেকে অন্তত ৩টা।

### ধাপ 14 — COMPLEXITY
- Time আর Space — **কীভাবে** বের করলে সেটাও বলবে। (`03-complexity-guide.md`)

### ধাপ 15 — ALTERNATIVE
- অন্তত একটা অন্য উপায় আর তুলনা:

  | উপায় | Time | Space | কখন ভালো |
  |---|---|---|---|

### ধাপ 16 — REFLECT (শুধু practice-এ)
- কোথায় আটকালাম? কোন চিন্তাটা মাথায় আসেনি? পরের বার কোন clue দেখলে চিনব?

---

## ৪. LIVE CODING ANTI-FREEZE PROTOCOL

> **Even when I don't know the answer, I ALWAYS KNOW WHAT TO DO NEXT.**

মাথা ফাঁকা হয়ে গেলে, এই emergency ক্রম। প্রতিটা step একটা **কাজ** — চিন্তা না, কাজ। কাজ করলে মাথা আবার চালু হয়।

| # | কাজ | কেন কাজ করে |
|---|---|---|
| 1 | **থামো। ১টা গভীর শ্বাস।** Code করবে না। | panic-এ লেখা code প্রায় সবসময় মুছতে হয় |
| 2 | Problem **জোরে** দুবার পড়ো | পড়া একটা কাজ — মাথা চালু হয় |
| 3 | Editor-এ comment লেখো: `// input: ...` `// output: ...` | ফাঁকা editor আর ফাঁকা থাকল না |
| 4 | `// example:` — সবচেয়ে ছোট example লেখো | অমূর্ত problem মূর্ত হলো |
| 5 | Example **হাতে solve** করো, comment-এ ধাপ লেখো | তুমি সমাধান জানো — শুধু code-এ জানো না |
| 6 | জোরে বলো: "আমি হাতে কী করলাম?" | ধাপগুলো = algorithm-এর খসড়া |
| 7 | Brute force বলো (যত ধীরই হোক) | এখন তোমার কাছে একটা কাজের plan আছে |
| 8 | Brute force code লেখো (সময় থাকলে) | একটা চলমান solution = আত্মবিশ্বাস |
| 9 | "কোন অংশ ধীর?" | optimization-এর দরজা |
| 10 | "কোন তথ্য instantly পেলে দ্রুত হতো?" | data structure-এর উত্তর |
| 11 | Pattern cheat sheet-এর প্রশ্নগুলো মনে মনে চালাও (sorted? contiguous? frequency? two ends? ...) | চেনা pattern খুঁজে পাওয়া |
| 12 | Pseudocode comment লেখো | পরের লাইনগুলো ঠিক হয়ে গেল |
| 13 | একটা একটা comment → code | |

**আটকে থাকলে interviewer-কে বলার কথা** (চুপ থাকা সবচেয়ে খারাপ):
- *"Let me think out loud for a moment."*
- *"I'll start with a brute-force solution and then optimize."*
- *"I'm not sure about the optimal approach yet, so let me work through a small example by hand."*
- *"I'm considering a hash map here because I need fast lookups. Does that direction sound reasonable?"*

Interviewer চুপ থাকা candidate-কে সাহায্য করতে পারে না, কথা বলা candidate-কে পারে। **কথা বলাটাই hint পাওয়ার রাস্তা।**

---

## ৫. BLANK EDITOR TRAINING — ১৪ ধাপ

প্রতিটা ★ problem এভাবে করবে। Editor-এ comment দিয়ে শুরু:

```js
// STEP 1  Restate:      ...
// STEP 2  Input/Output: input = ..., output = ...
// STEP 3  Tiny example: ...
// STEP 4  Manual solve: ...
// STEP 5  Brute force:  ... (O(?))
// STEP 6  Bottleneck:   ...
// STEP 7  Info needed:  ...
// STEP 8  Data structure: ...
// STEP 9  Pseudocode:
//   1.
//   2.
//   3.
// STEP 10-11: code below, one pseudocode line at a time

function solve(input) {

}

// STEP 12 Test
console.log(solve(/* example */)); // expected: ...
// STEP 13 Edge cases
// STEP 14 Complexity: Time O(?) because ..., Space O(?) because ...
```

প্রথম ৩–৪ সপ্তাহ **প্রতিটা** ★ problem-এ এই header লিখবে। পরে অভ্যাস হয়ে গেলে শুধু মাথায় করবে।

---

## ৬. CODE WITHOUT LOOKING — ১০ ধাপের সিঁড়ি

কোনো problem-এ আটকে গিয়ে solution দেখতে হলে, এখানেই থামবে না। এই সিঁড়ি বেয়ে উঠবে:

| Stage | কাজ | কখন |
|---|---|---|
| 1 | Solution পড়ো | আটকে যাওয়ার পর (Hint 7) |
| 2 | প্রতিটা লাইন নিজের ভাষায় ব্যাখ্যা করো | সাথে সাথে |
| 3 | Solution **বন্ধ** করো | |
| 4 | শুধু pseudocode লেখো | ৫ মিনিট পর |
| 5 | Pseudocode থেকে code লেখো | |
| 6 | পরের দিন: memory থেকে পুরো code | Day +1 |
| 7 | একই pattern-এর **অন্য** problem solve | Day +2/+3 |
| 8 | Unseen problem (pattern নাম ছাড়া) | Week-এর Day 6/7 |
| 9 | Mixed-pattern problem | মাস শেষের review |
| 10 | Time pressure-এ (৪৫ মিনিট) | Mock |

---

## ৭. 45–60 মিনিটের Interview Time Plan

| সময় | কাজ | কী বলবে |
|---|---|---|
| 0–5 | Understand + clarify | "Let me make sure I understand..." |
| 5–10 | Example + brute force | "Let me walk through a small example... The brute force would be..." |
| 10–18 | Optimize + approach বলা | "The bottleneck is... I can improve this with..." |
| 18–20 | Pseudocode | "Before coding, I'll outline the steps." |
| 20–38 | Code | চলতে চলতে ছোট ছোট ব্যাখ্যা |
| 38–48 | Test + debug | "Let me trace through the example... Let me test an edge case." |
| 48–53 | Complexity | "Time complexity is O(n) because... Space is O(n) because..." |
| 53–60 | Alternative + follow-up | "Another approach would be... The trade-off is..." |

**সময় নিয়ে নিয়ম:**
- ১৫ মিনিটেও optimal approach না এলে → **brute force code করো।** কাজের brute force > অর্ধেক লেখা optimal।
- Code-এ bug, কিন্তু সময় কম → bug কোথায় সেটা মুখে বলো, ঠিক করার plan বলো।
- শেষ ৫ মিনিট সবসময় complexity আর edge case-এর জন্য রাখবে।

---

## ৮. Difficulty কীভাবে বাড়ে (A → F)

| Level | নাম | কী কঠিন হয় |
|---|---|---|
| A | Very easy | সরাসরি loop/condition |
| B | Easy | একটা data structure |
| C | Easy+ | একটা pattern, স্পষ্ট |
| D | Medium | pattern লুকানো, বা edge case অনেক |
| E | Medium+ | দুটো pattern মিশে আছে, বা একাধিক approach-এর তুলনা লাগে |
| F | Hard | pattern combination + বড় constraint + subtle edge case |

Difficulty মানে লম্বা code না — **pattern কম স্পষ্ট** হওয়া।

---

## ৯. Pattern Deception — শব্দ দেখে solve করবে না

উদাহরণ:
- "subarray" শব্দ আছে → sliding window ভাবলে? কিন্তু negative সংখ্যা থাকলে window ভেঙে পড়ে → prefix sum + map।
- "sorted" শব্দ নেই → কিন্তু উত্তরের range monotonic → binary search on answer।
- "minimum number of coins" → greedy মনে হয়, কিন্তু greedy ভুল উত্তর দেয় → DP।
- "tree" শব্দ নেই → কিন্তু nested comment/folder/org chart → tree DFS।
- "graph" শব্দ নেই → কিন্তু grid, course prerequisite, word transformation → graph।

**নিয়ম:** "কোন শব্দ আছে" না, **"data-র গঠন আর প্রশ্নের ধরন কী"** — সেটা দেখো।
