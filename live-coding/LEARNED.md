# LEARNED — কী শিখেছি · সামনে কীভাবে শিখব

> এটা আমার **জ্ঞানের খাতা**। প্রতিটা topic / problem শেষে Claude এখানে যোগ করবে, আমিও পড়ে মিলিয়ে নেব।
> Progress (কোথায় আছি, কত ★, re-solve-এর তারিখ) → `TRACKER.md`। এখানে শুধু **কী শিখলাম, কোন নিয়ম, কোন ফাঁদ**।
> Re-solve বা interview-এর আগে শুধু এই file পড়লেই পুরো মনে পড়বে।

**শেষ update:** ২৭ অক্টোবর ২০২৬ · W1 সম্পন্ন; W2 D1 Big-O Time Complexity সম্পন্ন; এখন W2 D2 Space Complexity শুরু

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
| 7 | **🔁 Re-solve** | প্রয়োজন হলে Day +1, +3, +7 — আগে সমাধান করা duplicate বাধ্যতামূলক নয় |

Hint লাগলে: `W1 D4 checkPassword — Hint 2` (একবারে একটা level, 0–7)।

### Session-এ শেখানোর পছন্দ

- একবারে **একটি concept** এবং **একটি problem-এর একটি ছোট ধাপ**; পুরো topic বা solution একসাথে নয়।
- Problem দেওয়ার আগে English LeetCode-ধাঁচের statement, সহজ বাংলা সংস্করণ, LeetCode link (মিলে গেলে), এবং বাস্তব জীবনের উদাহরণ দাও।
- সমাধানের আগে problem ভাঙা শেখাও: input/output → ছোট উদাহরণ → হাতে সমাধান → brute force → bottleneck/pattern → pseudocode → এক লাইন করে code।
- প্রতিটি ধাপে আগে আমাকে পরের সিদ্ধান্ত বা লাইন অনুমান করতে দাও; ভুল হলে output ও কারণ দিয়ে বোঝাও, একবারে একটি hint দাও।
- প্রতিটি ★ problem শেষে test, edge case, Time/Space কীভাবে মাপা হলো, এবং বিকল্প পদ্ধতি আলোচনা করো। পূর্ণ সমাধান দেখালে আমি নিজে file-এ টাইপ করে চালাব।
- আগে সম্পন্ন করা একই problem আবার বাধ্যতামূলকভাবে করাবে না। আগের দিনে নিজে solve করা থাকলে revision checklist-এ সেটি skip/waived করে নতুন কাজ এগিয়ে নেবে; আমি চাইলে তবেই repeat করব।
- লক্ষ্য problem-এর সংখ্যা নয়; pattern বুঝে অচেনা problem-এ নিজে চিন্তা শুরু করতে পারা। Gate ও প্রয়োজনীয় re-solve পাস না করে topic এগোবে না।

### W1 D7 progress

- FizzBuzz, First Descent, Reverse Integer re-solve করা হয়েছে; Day 6-এ আগে সম্পন্ন Second Largest ও First Negative Balance duplicate বলে skip। ভবিষ্যতে আগে নিজে solve করা একই problem পুনরাবৃত্তি বাধ্যতামূলক নয়।
- LC 674-এর implementation ও complexity complete (O(n)/O(1)); হাতে trace-এ `[3,4,5,2,6,7,8,1]`-এর সঠিক ফল `4`। User Day 7/Week 1 সম্পূর্ণ নিশ্চিত করেছেন; reflection-এর বিস্তারিত উত্তর নথিভুক্ত নয়।

### W2 D1 progress — Big-O Time Complexity

- Single loop `O(n)`; দুই full nested loop `O(n²)`; consecutive loops `O(n+m)`; repeated doubling/halving `O(log n)`।
- Fixed inner loop-এ প্রতিটি outer iteration-এ constant কাজ: `5n` → `O(n)`। শুধু `n * 5` return করা code নিজে `O(1)`—গণনা করা কাজ ও বাস্তবে চালানো কাজ আলাদা।
- Shared `j` reset না হলে inner `while` পুরো execution জুড়ে মোট `n` বার চলে; outer `for`-সহ মোট `O(n)`।
- Two-branch recursion `O(2^n)` time / `O(n)` stack; one-branch halving recursion `O(log n)` time / `O(log n)` stack।
- আগের pair-count ও Week 1 complexity repeat বাদ; B3 ঐচ্ছিক বলে user এগিয়ে গেছেন।

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

### Topic 5 — Loops ✅ (Gate পাস ১৮ অক্টো)

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
| Gate: `countIncreases` | প্রথমটির আগের value নেই, তাই loop `i = 1` থেকে; `i = 0` হলে `counts[-1]` = `undefined` | O(n) — n − 1 তুলনা | O(1) — শুধু `count` |

### Topic 6 — Functions ✅ (Gate পাস ১৮ অক্টো)

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
| ★6.2b LC 2634 `filter` | `fn(arr[i], i)` truthy হলে মূল element নতুন array-তে রাখা; `0`/`false`/`""` হলে বাদ | O(n) | O(k) output array; worst O(n) |
| ★6.3 `applyNTimes(fn, n, x)` | `result`-এ বর্তমান value ধরে প্রতিবার `fn(result)` চালিয়ে নতুন value রাখা; `n = 0` হলে `x` অপরিবর্তিত ফেরে | O(n) যদি `fn` O(1) হয় | O(1) অতিরিক্ত space |
| LC 2629 `compose(functions)` | composition ডান দিকের function থেকে চালু; খালি array হলে identity—input অপরিবর্তিত | O(m) প্রতি returned-function call | O(1) অতিরিক্ত space |
| ★6.4 `checkPassword(pw)` | প্রতিটি নিয়ম আলাদা helper-এ পরীক্ষা; ভাঙা rule name-গুলো exact lowercase string হিসেবে array-তে রাখা | O(n) — চারটি fixed scan | O(1) — সর্বোচ্চ ৪টি rule name |

### Topic 7 — Numbers & Math ✅ সম্পন্ন (W1 D5)

- Decimal fraction যেমন `0.1` ও `0.2` binary floating-point-এ নিখুঁতভাবে উপস্থাপিত নাও হতে পারে; তাই `0.1 + 0.2 === 0.3` → `false`।
- দুই decimal place-এ round করার অনুশীলন: যোগফলকে 100 দিয়ে গুণ → `Math.round` → 100 দিয়ে ভাগ। Raw যোগফল আলাদা থাকে; rounded মান নতুন result।
- `Number("abc")` → `NaN`; `Number.isNaN(value)` দিয়ে নির্ভরযোগ্যভাবে পরীক্ষা করা যায়। `Number("12")` হলো number `12`, তাই `Number.isNaN(...)` → `false`।
- Maximum খোঁজায় `max = -Infinity` দিয়ে শুরু করলে সব মান negative হলেও সঠিক maximum পাওয়া যায়; `0` দিয়ে শুরু করলে সব input negative হলে ভুল হয়।
- `BigInt` literal-এর শেষে `n` থাকে; খুব বড় integer-এ নির্ভুলতা রাখে। `BigInt` ও `Number` সরাসরি arithmetic-এ মেশানো যায় না—একই type করতে হয়।
- Pagination-এ page-এর ভগ্নাংশ চলবে না; `Math.ceil(items / perPage)` দিয়ে প্রয়োজনীয় page সংখ্যা উপরের পূর্ণসংখ্যায় নেওয়া হয়।
- `Math.floor(x)` নিচের পূর্ণসংখ্যায় যায়; `Math.trunc(x)` দশমিক অংশ বাদ দিয়ে শূন্যের দিকে যায়। Negative-এ তাই `Math.floor(-4.2) = -5`, কিন্তু `Math.trunc(-4.2) = -4`।
- JavaScript-এ `Math.round`-এর exact half positive দিকের পূর্ণসংখ্যায় যায়: `Math.round(2.5) = 3`, `Math.round(-2.5) = -2`।
- Non-negative minutes-কে ঘণ্টায় ভাঙতে `Math.floor(minutes / 60)` পূর্ণ ঘণ্টা দেয়, আর `minutes % 60` বাকি মিনিট দেয়।
- JavaScript `%` remainder দেয়; remainder-এর sign dividend (বাম পাশের সংখ্যা) থেকে আসে। Integer quotient শূন্যের দিকে truncate হয়: `-8 % 3 = -2` (`-8 - (-2 × 3)`)।
- `Number(text)` পুরো string বৈধ number কি না দেখে (`Number("8.5px") → NaN`); `parseInt(text, 10)` শুরু থেকে integer prefix পড়ে, decimal point বা non-digit এ থামে (`parseInt("8.5px", 10) → 8`)।
- Unary `+` numeric string-কে `Number`-এ রূপান্তর করে এবং চারপাশের whitespace উপেক্ষা করে: `+" 8.5 " → 8.5`; invalid string হলে `NaN`।
- `toFixed(digits)` নির্দিষ্ট decimal ঘরসহ string ফেরত দেয়: `(8).toFixed(2) → "8.00"`; সংখ্যা হিসেবে arithmetic দরকার হলে string-কে আবার convert করতে হবে।
- `number.toString(2)` binary string দেয়; bit-এর place values ডান দিক থেকে `1, 2, 4, 8, ...`। `12 = 8 + 4`, তাই binary `"1100"`; ফলের type string।
- `number.toString(16)` hexadecimal string দেয়; hex digit `a`–`f` মানে 10–15। `255 = 15 × 16 + 15`, তাই `(255).toString(16) → "ff"`।

| Problem | মূল শিক্ষা | Time | Space |
|---|---|---|---|
| P7.1 `priceTotal(a, b)` | `(a + b)`-কে cents-এ scale করে round, পরে আবার 100 দিয়ে ভাগ; function-এ `return` করতে হবে, শুধু log নয় | O(1) | O(1) |
| Mini: `findHighestTemp(temps)` | `-Infinity` দিয়ে শুরু; প্রতিটি temperature-এর সঙ্গে তুলনা করে max update | O(n) | O(1) |
| Mini: `addLargeTotals(a, b)` | একই type-এর `BigInt` যোগ; k = input-এর bit সংখ্যা হলে arbitrary-size addition-এর সময় O(k), result রাখতে O(k) space; named auxiliary variable O(1) | O(k) | O(k) result; O(1) named auxiliary variable |
| P7.2 `pagesNeeded(items, perPage)` | ভাগফল ভগ্নাংশ হলে `Math.ceil` দিয়ে পরের পূর্ণসংখ্যা; শূন্য item হলে 0 page | O(1) | O(1) |
| P7.3 `toHM(minutes)` | `Math.floor(minutes / 60)` দিয়ে ঘণ্টা, `% 60` দিয়ে বাকি মিনিট; non-negative input | O(1) | O(1) |
| P7.5a `lastDigitAndRest(n)` | `% 10` শেষ digit দেয়; `Math.floor(n / 10)` শেষ digit বাদ দেয় | O(1) | O(1) |
| P7.5b `countDigits(n)` | বারবার 10 দিয়ে ভাগ; `n === 0` হলে 1 digit | O(d) | O(1) |
| P7.6 `findDivisorPairs(n)` | `i * i <= n` পর্যন্ত divisor check; factor pair-এর একটি √n-এর বেশি হলে অন্যটি কম | O(√n) | O(1) |
| ★7.1 LC 1281 `subtractProductAndSum(n)` | `sum = 0`, `product = 1`; `% 10` দিয়ে digit নিয়ে যোগ ও গুণ; শেষে product − sum | O(d) | O(1) |
| ★7.2 LC 7 `reverse(x)` | digit উল্টে `result * 10 + digit`; sign ধরে রাখা এবং signed 32-bit সীমা check | O(d) | O(1) |
| ★7.3 LC 9 `isPalindrome(x)` | negative ও trailing zero বাদ; অর্ধেক digit reverse; even/odd length আলাদা তুলনা | O(d) | O(1) |
| ★7.4 `isPrime(n)` | আগে `2..n-1`, পরে `i * i <= n`; divisor pair থেকে √n যথেষ্ট | O(√n) optimized | O(1) |
| Gate mini `sumEvenDigits(n)` | শেষ digit `% 10` দিয়ে নাও; জোড় হলে sum-এ যোগ; `Math.floor(n / 10)` দিয়ে এগোও; `n = 0`-এ 0 | O(d) | O(1) |

### Topic 8 — Basic Problem Solving ✅ সম্পন্ন (W1 D6, Gate ২৪ অক্টো)

- **Input → Process → Output:** আগে input/output type, ছোট example ও empty-input contract পরিষ্কার করো। Average-এর mini exercise-এ array-র sum বের করে length দিয়ে ভাগ করা হয়েছে।
- **ছয়টি মৌলিক কাজ:** Counting (`count = 0`), Accumulation (`total = 0`), Min/Max (array-এর বাস্তব মান দিয়ে initialize), Search (match পেলে early return), Build (`result = []`), Track two values (`largest`, `secondLargest`)।
- **Initial value:** সব negative হতে পারে এমন max/min-এ `0` ধরে শুরু করলে ভুল হতে পারে; non-empty array হলে `arr[0]` দিয়ে শুরু করো। Empty input-এর return contract আলাদা করে ঠিক করো।
- **Trace table:** even-count on `[3, 8, 5, 2]` → count `0 → 0 → 1 → 1 → 2`; odd value-তে count অপরিবর্তিত থাকে, even value-তে এক বাড়ে।

| Problem | মূল শিক্ষা | Time | Auxiliary Space |
|---|---|---|---|
| Mini `countPassed(scores)` | শর্ত মিলে গেলে count বাড়ে; খালি array-তে 0 | O(n) | O(1) |
| Mini `totalBill(prices)` | প্রতিটি price running total-এ যোগ; খালি array-তে 0 | O(n) | O(1) |
| Mini `findMinPrice(prices)` | `prices[0]` থেকে শুরু; loop index 1 থেকে; empty হলে `null` | O(n) | O(1) |
| Mini `findAdmin(names)` | exact match পেলে early return; case-sensitive | O(n) worst, O(1) best | O(1) |
| Mini `toUppercaseNames(names)` | প্রতিটি নাম রূপান্তর করে নতুন array-তে push | O(n·k) | O(n·k), output array |
| ★8.3 `secondLargestDistinct(nums)` | largest/secondLargest এক pass-এ track; duplicate maximum-কে দ্বিতীয় মান ধরা যাবে না | O(n) | O(1) |
| ★8.4 `longestRun(nums)` / LC 1446 | পাশাপাশি সমান হলে `currentRun++`, না হলে 1; `maxRun` ধরে রাখো | O(n) | O(1) |
| ★8.1 `findLargest(nums)` | empty হলে `null`; `nums[0]` থেকে শুরু; প্রতিটি সংখ্যাকে বর্তমান largest-এর সঙ্গে তুলনা | O(n) | O(1) |
| ★8.2 `countVowelsAndConsonants(s)` | `toLowerCase()` করে ASCII letter যাচাই; space/digit/punctuation বাদ; vowel ও consonant আলাদা count | O(n) | O(n) lowercase copy |
| ★8.5 `firstNegativeBalance(transactions)` | running balance জমাও; প্রথম negative হলেই day index return, না হলে `-1` | O(n) | O(1) |
| Gate `countScoresAboveAverage(scores)` | প্রথম pass-এ sum/average, দ্বিতীয় pass-এ average-এর বেশি score count; empty input → 0 | O(n) | O(1) |
| Mini `countVowels(word)` | পূর্ণ vowel/consonant problem-এর আগে case-insensitive vowel-count warm-up | O(n) | O(n) lowercase copy |

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
| 6 Functions (return vs log, callback, helper-এ ভাগ) | W1 D4 | ✅ সম্পন্ন |
| 7 Numbers & Math (digit trick, prime √n) | W1 D5 | ✅ সম্পন্ন — Phase 7.1–7.6, ★7.1–7.4 ও Gate; optional Armstrong skipped |
| 8 Basic Problem Solving (৬ মৌলিক কাজ) | W1 D6 | ✅ সম্পন্ন — P8.1–P8.4, ★8.1–8.5 ও Gate (২৪ অক্টো) |
| 9 Big-O (Time · Space · hidden costs · constraints) | W2 D1–D2 | ✅ সম্পন্ন (২৯ অক্টো) |
| 10–13 Strings · Arrays · Objects · **Hashing** | W2–W3 | 🟡 Topic 10 Strings চলছে (W2 D3, ৩১ অক্টো) |
| 14–16 Closure/`this` · Class · Sorting | W4 | |
| 17–24 Binary Search · Two Pointers · Sliding Window · Prefix Sum · Recursion · Linked List · Stack · Queue | November | |
| 25–39 Tree · BST · Heap · Intervals · Graph · Backtracking · Greedy · DP · Bit · Trie · Math | December | |

পুরো ক্যালেন্ডার: `README.md`।

### Topic 10 — Strings ১ / Frequency / Anagram (W2 D3 চলছে, ৩১ অক্টো)

- **String immutable:** index-এ assign করে character বদলায় না; নতুন string বানাতে হয়। `slice` / `at` index behavior অনুশীলন করা হয়েছে.
- **File extension:** `lastIndexOf(".")` দিয়ে শেষ dot, `slice(dotIndex + 1)` দিয়ে extension; dot না থাকলে guard। Time O(n), output O(k), auxiliary O(1)।
- **Slug:** `trim → toLowerCase → split(/\\s+/) → join("-")`; sequential O(n) কাজগুলো মিলিয়ে Time O(n); intermediate storage O(n), output O(n)।
- **Character code:** `charCodeAt(0) - "a".charCodeAt(0)` → a-z-এর index 0-25; `String.fromCharCode` উল্টো রূপান্তর।
- **String comparison:** String-এর তুলনা lexicographic; `"10" < "9"` true, কিন্তু Number `10 < 9` false।
- **Build string:** array-তে অংশ জমিয়ে `join("")`; Repeat Dash Time O(n), auxiliary O(n), output O(n)।
- **Alphanumeric:** code range 48-57, 65-90, 97-122; regex বিকল্প `/^[a-z0-9]$/i`; `charCodeAt(0)` প্রথম character-ই দেখে, তাই one-character constraint দরকার।
- **Character frequency:** Object ও Map-এ প্রথমবার count 1, পরে increment; lowercase ইংরেজি alphabet হলে সর্বোচ্চ 26 key, তাই extra space O(1); arbitrary character set হলে O(n)। ২৬-ঘরের array variant এখনো practice বাকি।
- **Anagram:** দৈর্ঘ্য আলাদা হলে সঙ্গে সঙ্গে false; প্রথম string-এর count বাড়িয়ে দ্বিতীয় string-এর অক্ষরে count কমাও; count না থাকলে false। LC 242 object-count approach-এ solve ও submit (৩১ অক্টো); exact problem পুনরায় নয়। Complexity ব্যাখ্যা দেওয়া হয়েছে, learner-এর নিজে ব্যাখ্যার checkpoint বাকি।
- **Day 3-এ বাকি:** দুই প্রান্তের pointer warm-up (জিজ্ঞেস করা হয়েছে, উত্তর বাকি); ★ S1 Reverse String (LC 344), ★ S2 Valid Palindrome (LC 125); optional S3 Capitalize Words।
- **পরের string phase-এ বাকি:** P10.8-এর ২৬-ঘরের array ও Object/Map/Array comparison; P10.9 sorting comparison; P10.10 substring/subsequence checkpoint; P10.11 normalization।
- **কাজের অবস্থা:** progress/plan docs main-এ sync; current branch `october/week-2-day-3`; `practice/october/week-2/day-3.js`-এ uncommitted local edit আছে—user-এর অনুমতি ছাড়া discard বা stage করবে না।
