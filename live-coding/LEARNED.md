# LEARNED — কী শিখেছি · সামনে কীভাবে শিখব

> এটা আমার **জ্ঞানের খাতা**। প্রতিটা topic / problem শেষে Claude এখানে যোগ করবে, আমিও পড়ে মিলিয়ে নেব।
> Progress (কোথায় আছি, কত ★, re-solve-এর তারিখ) → `TRACKER.md`। এখানে শুধু **কী শিখলাম, কোন নিয়ম, কোন ফাঁদ**।
> Re-solve বা interview-এর আগে শুধু এই file পড়লেই পুরো মনে পড়বে।

**শেষ update:** ১৭ অক্টোবর ২০২৬ · W1 D4 (Functions) — P6.7a Countdown, P6.7b Sum to N, ★6.1 `sum(...nums)`, ★6.2a LC 2635 সমাধান সম্পন্ন; পরের problem ★6.2b (LC 2634)

---

## অংশ ১ — সামনে কীভাবে শিখব (পদ্ধতি)

প্রতিটা topic আর problem এই একই ক্রমে:

| # | ধাপ | কী হয় |
|---|---|---|
| 1 | **Topic, ছোট phase-এ** | এক phase = এক ধারণা: ব্যাখ্যা, code, আসল output, যাচাই প্রশ্ন, ছোট problem |
| 2 | **🌍 Real-life example** | problem-টা বাস্তবে কোথায় দেখা যায়, যাতে বুঝতে সহজ হয় |
| 3 | **🧠 Solve-এর আগে ভাবনা** | input/output · ছোট example · হাতে solve · কী মনে রাখছি → variable · কী বারবার করছি → loop · edge case · brute force → bottleneck → pattern |
| 4 | **🔨 Guided Build** | আমি পরের লাইন আন্দাজ করি, Claude `console.log` দিয়ে মিলিয়ে দেয়; শেষে পরিষ্কার solution, নিজের হাতে টাইপ |
| 5 | **⏱️ Complexity, মাপার পদ্ধতি সহ** | n কী · loop কতবার (গুনে) · nested = গুণ, পরপর = যোগ · লুকানো খরচ · নতুন memory · "n ১০ গুণ হলে?" |
| 6 | **🚪 Gate Check** | topic শেষে একা, hint ছাড়া: ৩–৫ concept প্রশ্ন + ১টা নাম-ছাড়া problem |
| 7 | **🔁 Re-solve** | Day +1, +3, +7 — ফাঁকা editor থেকে |

Hint লাগলে: `W1 D4 checkPassword — Hint 2` (একবারে একটা level, 0–7)।

### Session-এ শেখানোর পছন্দ

- একবারে **একটি concept** এবং **একটি problem-এর একটি ছোট ধাপ**; পুরো topic বা solution একসাথে নয়।
- Problem দেওয়ার আগে English LeetCode-ধাঁচের statement, সহজ বাংলা সংস্করণ, LeetCode link (মিলে গেলে), এবং বাস্তব জীবনের উদাহরণ দাও।
- সমাধানের আগে problem ভাঙা শেখাও: input/output → ছোট উদাহরণ → হাতে সমাধান → brute force → bottleneck/pattern → pseudocode → এক লাইন করে code।
- প্রতিটি ধাপে আগে আমাকে পরের সিদ্ধান্ত বা লাইন অনুমান করতে দাও; ভুল হলে output ও কারণ দিয়ে বোঝাও, একবারে একটি hint দাও।
- প্রতিটি ★ problem শেষে test, edge case, Time/Space কীভাবে মাপা হলো, এবং বিকল্প পদ্ধতি আলোচনা করো। পূর্ণ সমাধান দেখালে আমি নিজে file-এ টাইপ করে চালাব।
- লক্ষ্য problem-এর সংখ্যা নয়; pattern বুঝে অচেনা problem-এ নিজে চিন্তা শুরু করতে পারা। Gate ও প্রয়োজনীয় re-solve পাস না করে topic এগোবে না।

---

## অংশ ২ — যা শিখেছি

### Topic 1 — Variables & Memory ✅ (Gate পাস ৬ অক্টো)

**মূল কথা:** প্রতিটা লাইন দেখে জিজ্ঞেস করো — *"নতুন জিনিস তৈরি হলো, নাকি পুরনো জিনিসের নতুন নাম?"*

- `const` default; `let` শুধু value বদলালে; `var` না (block থেকে পালায়)।
- **Scope:** `let/const` block-এ আটকে থাকে; `var` function-scope → `for (var i…)` শেষে বাইরেও `i` থাকে।
- **Hoisting:** `var` → আগে পড়লে `undefined`; `let/const` → ReferenceError (TDZ); function declaration পুরোটা hoist হয়।
- **Primitive** copy হয় value দিয়ে (`let b = a; b = 20` → `a` বদলায় না)।
- **Object/array** copy হয় reference দিয়ে (`const copy = arr` → একই জিনিস, দুটো নাম)।
- **Mutation** (`push`, `obj.x = …`, `length = 0`) → সব নাম বদল দেখে। **Reassignment** (`=`) → শুধু ওই নাম নতুন জিনিসে যায়।
- Function-এ array পাঠালে: ভেতরে `push` → বাইরেরটা বদলায়; ভেতরে `list = []` → বাইরেরটা বদলায় না।
- `[...arr]`, `{...obj}` = **shallow** copy (nested জিনিস এখনো শেয়ার)।
- **Object-এ `key: value`:** বাঁয়ে key-র নাম, ডানে variable। shorthand `{ name }` শুধু যখন key আর variable-এর নাম একই।

| Problem | মূল শিক্ষা | Time | Space |
|---|---|---|---|
| 1.1 Swap (temp / destructuring / যোগ-বিয়োগ) | যোগ-বিয়োগ শুধু number-এ চলে | O(1) | O(1) |
| 1.2 `updateName` | `{ ...user, name: newName }` — `newName` shorthand ভুল key বানায় | O(k) | O(k) |
| 1.3 `addItem` (mutate / pure) | `push` **নতুন length** ফেরত দেয়, array না | O(1) / O(n) | O(1) / O(n) |

### Topic 2 — Data Types ✅ (Gate পাস ৭ অক্টো)

- ৭ primitive: string, number, boolean, null, undefined, bigint, symbol; বাকি সব object।
- **`typeof` ফাঁদ:** `typeof null` → `"object"`, `typeof []` → `"object"`, `typeof NaN` → `"number"`, `typeof function(){}` → `"function"`।
- সঠিক যাচাই: `Array.isArray(x)`, `x === null`, `Number.isNaN(x)`।
- `null` = ইচ্ছা করে খালি; `undefined` = এখনো দেওয়া হয়নি (না-থাকা property, `return` ছাড়া function)।
- `null == undefined` → true, `null === undefined` → false।

| Problem | মূল শিক্ষা | Time | Space |
|---|---|---|---|
| 2.1 `getType` | guard-এর **ক্রম** — বিশেষ case (array, NaN, null) আগে, `typeof` শেষে; value না, type-এর **নাম** ফেরত | O(1) | O(1) |

### Topic 3 — Operators & Coercion ✅ (Gate পাস ৮ অক্টো)

- `+` string পেলে জোড়ে (`"5" + 1` → `"51"`), `-` সংখ্যা বানায় (`"5" - 1` → 4)।
- সবসময় `===`।
- `&&` / `||` **value** ফেরত দেয়, boolean না → boolean চাইলে `Boolean(...)`।
- `||` সব falsy-তে default দেয় (`0 || 3000` → 3000); `??` শুধু `null/undefined`-এ (`0 ?? 3000` → 0)।
- `?.` → মাঝপথে `null/undefined` হলে crash না করে `undefined`।
- Percent: `price * percent / 100`।

| Problem | মূল শিক্ষা | Time | Space |
|---|---|---|---|
| Apply Discount | নতুন object ফেরত, আসলটা অক্ষত; দুটো input-এ test | O(k) | O(k) |
| 3.1 `getPort` | `config?.port ?? 3000` — port 0 বাঁচে | O(1) | O(1) |
| 3.2 `canAccess` | `Boolean(user && user.isActive === true && (… \|\| …))` | O(1) | O(1) |

### Topic 4 — Conditions ✅ (Gate পাস ৯ অক্টো)

- `if / else if` — **সবচেয়ে নির্দিষ্ট শর্ত আগে** (FizzBuzz-এ 15 আগে, তারপর 3, 5)।
- **Guard clause:** ভুল input শুরুতেই `return` → main logic সমতল থাকে।
- **৮টা falsy:** `false, 0, -0, 0n, "", null, undefined, NaN`। `[]`, `{}`, `"0"`, `"false"` truthy!
- ফাঁদ: `if (stock)` → stock 0 হলে ভুল পথে যায় → `stock === undefined || stock === null` দিয়ে check করো।
- `NaN !== NaN` সবসময় true → `Number.isNaN` ব্যবহার করো।
- `switch`: `break`/`return` ছাড়া পরের case-এ পড়ে যায় (fall-through); `===` দিয়ে তুলনা করে (`"1"` ≠ `1`)।
- লম্বা if-chain-এর বদলে **lookup object**: `PRICE[size] ?? "unknown"`।
- `/` = ভাগফল, `%` = ভাগশেষ; "বিভাজ্য" মানে `% === 0`।
- Output string হুবহু মেলাতে হবে (`"FizzBuzz"`, `"fizzBuzz"` না)।

| Problem | মূল শিক্ষা | Time | Space |
|---|---|---|---|
| 4.1 FizzBuzz | নির্দিষ্ট শর্ত আগে; result variable-এ রেখে শেষে একবার push | O(n) | O(n) output |
| 4.2 `grade` | guard (type, NaN, range) আগে, তারপর বড় থেকে ছোট | O(1) | O(1) |
| 4.3 `isLeapYear` | `year % 400 === 0 \|\| (year % 4 === 0 && year % 100 !== 0)` | O(1) | O(1) |
| Gate: `shipping` | guard → বড় সীমা আগে | O(1) | O(1) |

### Topic 5 — Loops ⚠️ (Gate-এর উত্তর ঠিক, নিজে-লেখা যাচাই D4 warm-up-এ)

- **`for`-এর তিন সিদ্ধান্ত:** কোথা থেকে শুরু · কোথায় থামব · কত ধাপ (`i++`, `i += 2`, `i--`)।
- **কোন loop কখন:** `for` (index লাগে) · `for...of` (শুধু value) · `while` (কতবার জানি না, যেমন বারবার অর্ধেক করা) · `for...in` (object key; array-তে index **string** হিসেবে আসে — এড়াও)।
- **Loop Template:** আগে → কী মনে রাখব (`count = 0`, `max = -Infinity`, `result = []`) · ভেতরে → প্রতিটা item-এ কী সিদ্ধান্ত · পরে → কী `return`।
- `break` → loop থেকে বের হয় · `continue` → এই ঘুর বাদ, পরের ঘুরে · `return` → পুরো function থেকে বের হয় (search-এ early exit)।
- **Pair loop:** `j = i + 1` → প্রতিটা জোড়া একবার; মোট `n(n-1)/2` বার।
- **Nested-এ accumulator:** প্রতিটা row-এর জন্য নতুন `sum` → `let sum = 0` বাইরের loop-এর **ভেতরে**।
- **Boundary:** `nums[i + 1]` ব্যবহার করলে `i < n - 1`। JS-এ `nums[n]` crash করে না, `undefined` দেয় — তাই ভুলটা চুপচাপ থেকে যায়।
- উল্টো দিক থেকে odd index: শুরু `n - 1`, even হলে এক কমাও, তারপর `i -= 2`।

| Problem | মূল শিক্ষা | Time | Space |
|---|---|---|---|
| 5.1 Odd-Index Sum (সামনে + পেছনে) | `i % 2 !== 0` বা সরাসরি `i = 1; i += 2` | O(n) | O(1) |
| 5.2 Good Pairs (LC 1512) | pair loop `j = i + 1` | O(n²) — `n(n-1)/2` তুলনা | O(1) |
| 5.3 Richest Wealth (LC 1672) | row-এর sum বাইরের loop-এর ভেতরে reset | O(m × n) — m row × n column | O(1) |
| 5.4 First Descent Index | Search → early return; `i < n - 1`; `[]`-এ loop একবারও চলে না | O(n) — worst case n − 1 তুলনা | O(1) — শুধু `i` |
| Gate: `countIncreases` | আগেরটার সাথে তুলনা → loop `i = 1` থেকে (`counts[i - 1]` লাগে) | O(n) — n − 1 তুলনা | O(1) — শুধু `count` |

### Topic 6 — Functions 🔄 (Phase 6.1–6.6 plan-এ ✅; Gate বাকি)

**মূল কথা:** function = জুস মেশিন — input → কাজ → `return` output। লেখার আগে ৩ প্রশ্ন: **নাম? কী ঢোকে? কী বের হয়?**

- **তিন উপায়:** declaration (পুরোটা hoist — আগে ডাকা যায়) · expression আর arrow (variable-এর নিয়ম: `const` → ReferenceError/TDZ, `var` → TypeError কারণ value `undefined`)। নিয়ম: আগে ঘোষণা, পরে ডাকো।
- **Arrow ফাঁদ:** `{}` দিলে `return` বাধ্যতামূলক, নইলে `undefined`। object ফেরত দিতে `() => ({ ... })`।
- **`return` বনাম `console.log`:** log শুধু দেখায়, `return` হাতে দেয়। `return` না থাকলে → `undefined` → পরে `+ 10` করলে `NaN`।
- **Default parameter:** বসে শুধু `undefined`-এ, `null`-এ না (`null` আটকাতে `??`)।
- **Rest `...args`:** সব argument একটা আসল array-তে; কিছু না দিলে `[]`; সবসময় শেষে।
- **Destructuring parameter:** `({ title = "Unknown", price = 0 } = {})` — শেষের `= {}` না দিলে কিছু না দিয়ে ডাকলে TypeError।
- **Guard কখন লাগে না:** guard ছাড়াই main logic ঠিক উত্তর দিলে (যেমন `args.length` খালি হলে নিজেই 0)।
- **Pure বনাম side effect:** pure = একই input → একই output, বাইরের কিছু বদলায় না, test সহজ। algorithm problem-এ সবসময় pure।
- **দশমিক টাকা:** `0.1 + 0.2`, `100 * 1.15 = 114.99999999999999`। দুই ঘর রাখতে `Math.round(x * 100) / 100` (শুধু `Math.round` পয়সা মুছে দেয়)।
- **Callback:** যে function অন্য function-কে value হিসেবে পাঠানো হয়, আর সে পরে তাকে ডাকে। নাম ছাড়া (anonymous) function-ও পাঠানো যায়।

| Problem | মূল শিক্ষা | Time | Space |
|---|---|---|---|
| LC 2703 Return Length of Arguments Passed ✅ | `...args` + `args.length`; বাড়তি guard লাগে না | O(1) — length জমা থাকে | O(n) — rest array |
| P6.3e `describeProduct` | destructuring default + `= {}`; output হুবহু (`Unknown`) | O(1) | O(1) |
| P6.4b `withVat` | pure বনাম impure (`log.push`); দশমিক round | O(1) | O(1) / impure-এ log বাড়ে |
| P6.5a `calculate` | function-কে value হিসেবে পাঠানো | O(1) | O(1) |
| P6.5b `repeat(n, fn)` | callback n বার, ঘুরের নম্বর পাঠিয়ে | O(n) | O(1) |
| LC 2667 `createHelloWorld` | outer function inner function ফেরত দেয়; inner function arguments উপেক্ষা করে স্থির string ফেরায় | O(1) প্রতি call | O(1) |
| P6.6 `isValidPin` | বড় কাজকে `hasLength4` ও `allDigits` helper-এ ভাঙা; `allDigits` একা O(n), কিন্তু `isValidPin`-এ ঠিক ৪ অক্ষর হলেই scan হওয়ায় মোট O(1) | O(1) |
| P6.7a `countDown` | base case `n === 0`; প্রতিবার `n - 1` দিয়ে self-call; সর্বোচ্চ n+1 call stack-এ | O(n) | O(n) |
| P6.7b `sumTo` | `n + sumTo(n - 1)`; base case 0; `sumTo(4) → 10` যাচাই | O(n) | O(n) call stack |
| ★6.1 `sum(...nums)` | rest parameter সব argument-কে array-তে রাখে; accumulator 0 থেকে শুরু, loop-এ যোগ; খালি input-এ 0 যাচাই | O(n) | O(n) rest array |
| ★6.2a LC 2635 `map` | নতুন result array বানিয়ে প্রতিটি `arr[i]`-এর জন্য `fn(arr[i], i)` চালানো; callback-এ value ও index পাঠানো | O(n) | O(n) result array |

---

## অংশ ৩ — বারবার যে ভুলগুলো হয় (চোখ রাখো)

1. **Object shorthand-এ ভুল key** — `{ ...user, newName }` → ঠিক `{ ...user, name: newName }` (৩ বার হয়েছে)।
2. **Return value না দেখে test** — mutation হলে আসল input-ও print করো।
3. **Index বনাম value** গুলিয়ে ফেলা (label-এ)।
4. **"কেন" / dry-run অংশ বাদ** দেওয়া — উত্তরের সাথে সবসময় কারণ লিখবে।
5. **একটা example মিললেই ঠিক ভাবা** — অন্তত ২টা input + ১টা edge case। (`Math.round` VAT-এ আবার হলো)
6. **Output হুবহু না মেলানো** — `"fizzBuzz"`, `"unknown"` — বড়-ছোট হাতের অক্ষরও মেলাও।
7. **File save না করে "done"** — চালানোর আগে `Ctrl+S`, আর আসল output দেখে তবেই done।

---

## অংশ ৪ — সামনে কী আসছে

| Topic | কোথায় | অবস্থা |
|---|---|---|
| 6 Functions (return vs log, callback, helper-এ ভাগ) | W1 D4 | 🔄 চলছে — Phase 6.1–6.6 plan-এ শেষ; 6.7 recursion, ★ problem ও Gate বাকি |
| 7 Numbers & Math (digit trick, prime √n) | W1 D5 | |
| 8 Basic Problem Solving (৬ মৌলিক কাজ) | W1 D6 | |
| 9 Big-O | W2 D1–D2 | |
| 10–13 Strings · Arrays · Objects · **Hashing** | W2–W3 | |
| 14–16 Closure/`this` · Class · Sorting | W4 | |
| 17–24 Binary Search · Two Pointers · Sliding Window · Prefix Sum · Recursion · Linked List · Stack · Queue | November | |
| 25–39 Tree · BST · Heap · Intervals · Graph · Backtracking · Greedy · DP · Bit · Trie · Math | December | |

পুরো ক্যালেন্ডার: `README.md`।
