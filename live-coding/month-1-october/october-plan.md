# 🗓️ October Plan — Foundation (৫ অক্টোবর → ১ নভেম্বর)

> **এই file-টাই October-এর একমাত্র plan।** প্রতিটা দিন, প্রতিটা concept, প্রতিটা ছোট আর বড় problem — সব এখানে।
> কোনটা শেষ হয়েছে, সেটাও এখানেই চিহ্ন দেওয়া থাকবে। Claude প্রতিটা problem শেষে এই file update করবে।
> সব code তুমি নিজের হাতে লিখবে: `practice/october/week-N/day-N.js`।

**লক্ষ্য ১০০০টা problem না।** লক্ষ্য হলো **pattern চেনা আর ভাবতে শেখা** — যাতে অচেনা problem দেখেও বলতে পারো:
*"Okay. Let's break this down. I know how to start."*

---

## 🔖 চিহ্নের মানে

| চিহ্ন | মানে |
|---|---|
| <span style="color:red">**🔴 DONE**</span> | শেষ হয়েছে (VS Code preview-এ লাল দেখাবে; GitHub-এ শুধু 🔴) |
| 🟡 চলছে | শুরু হয়েছে, শেষ হয়নি |
| ⚠️ যাচাই বাকি | উত্তর ঠিক, কিন্তু নিজে-লেখা যাচাই বাকি |
| ⬜ | এখনো শুরু হয়নি |
| ★ | Core — অবশ্যই করবে |
| ○ | Bonus — সময় পেলে, নইলে January |
| ⏳ | Later — hard, January-র পরে |
| 🟢 / 🟡 / 🔴 (title-এর পাশে) | LeetCode-এর Easy / Medium / Hard |
| 🔗 | LeetCode link — "হুবহু" মানে একই problem, "কাছাকাছি" মানে একই ধারণা |

**ছোট problem (P)** = concept শেখার সময়ের ২–৫ লাইনের practice।
**★ / ○ problem** = দিনের মূল problem, পুরো LeetCode format-এ।

---

## 🧠 যেকোনো problem-এ কীভাবে ভাবব (প্রতিটা problem-এ এই ৮ ধাপ)

ছোট problem হোক বা বড় — **এই ক্রম একই।** বড় LeetCode problem দেখে ভয় লাগলে শুধু ধাপ ১ দিয়ে শুরু করো, ধাপ ১ করতে কোনো pattern জানতে হয় না।

| ধাপ | নিজেকে প্রশ্ন | কী পাই |
|---|---|---|
| **১. বুঝি** | "So I need to return ___ given ___." — এক বাক্যে বলতে পারি? | problem-টা পরিষ্কার |
| **২. Input / Output** | input-এর type কী? খালি হতে পারে? output-এর type কী? | function-এর প্রথম লাইন |
| **৩. ছোট example** | ৩–৫ element-এর নিজের example বানাই | অমূর্ত জিনিস মূর্ত |
| **৪. হাতে solve** | মানুষ হিসেবে কীভাবে করলাম? চোখ কোথায় গেল? মাথায় কী মনে রাখলাম? | মনে রাখা জিনিস → **variable**, বারবার করা কাজ → **loop** |
| **৫. Brute force** | সবচেয়ে সোজা উপায় কী, যত ধীরই হোক? | একটা কাজের plan |
| **৬. Bottleneck** | কোন কাজ বারবার হচ্ছে? কোন তথ্য instantly পেলে দ্রুত হতো? | data structure / pattern |
| **৭. Pseudocode → Code** | comment-এ ধাপ লিখি, তারপর প্রতিটা comment-এর নিচে ১–২ লাইন | লাইন ধরে ধরে code |
| **৮. Test + Complexity** | ছোট example-এ dry run, ৩টা edge case, Time/Space **কীভাবে মাপলাম** | নিশ্চিত solution |

**Loop Template** (Week 1-এর সবচেয়ে বড় অস্ত্র):
```
Loop-এর আগে  → কী মনে রাখতে হবে?        (count = 0, max = -Infinity, result = [])
Loop-এর ভেতরে → প্রতিটা item-এ কী সিদ্ধান্ত? (count++? max বদলাও? push?)
Loop-এর পরে  → কী ফেরত দেব?              (return count)
```

**Complexity মাপার ৫ ধাপ:** n কী → প্রতিটা loop কতবার চলে (গুনে) → nested = গুণ, পরপর = যোগ → built-in-এর লুকানো খরচ → constant বাদ। Space: নতুন কী বানালাম (array, object, Map)?

---

## 📅 মাসের ছবি

| সপ্তাহ | তারিখ (লক্ষ্য) | Topic | অবস্থা |
|---|---|---|---|
| **W1** | ৫–১১ অক্টো | Variables · Types · Operators · Conditions · Loops · Functions · Numbers · Basic Problem Solving | 🟡 চলছে (D4) |
| **W2** | ১২–১৮ অক্টো | Big-O · Strings · Arrays ১ | ⬜ |
| **W3** | ১৯–২৫ অক্টো | Arrays ২ (Kadane, prefix/suffix) · Objects · **Hashing** | ⬜ |
| **W4** | ২৬ অক্টো–১ নভে | Closure & `this` · Class · Sorting · মাসের review | ⬜ |

> তারিখ **লক্ষ্য, বাধ্যবাধকতা না।** Gate পাস না করে পরের topic-এ যাব না। পিছিয়ে গেলে ○ কমাব।
> এখন (১৪ অক্টো) আমরা W1 D4-এ — ক্যালেন্ডার থেকে প্রায় ৬ দিন পিছিয়ে। ঠিক আছে।

---
---

# 📗 WEEK 1 — JavaScript ভিত্তি + ভাবার Framework

**সপ্তাহের লক্ষ্য:** যেকোনো easy problem দেখে ১ মিনিটে বলতে পারা — *"loop-এর আগে এটা, ভেতরে এটা, পরে এটা"* — আর প্রথম ৩ লাইন দ্বিধা ছাড়া লেখা।
**এই সপ্তাহে নিষেধ:** `map`, `filter`, `reduce`, `Math.max(...arr)`, `sort` — যদি না problem-এ বলা থাকে। সব loop দিয়ে।

---

## Day 1 · W1 D1 · সোম ৫ অক্টো — Topic 1: Variables & Memory + Topic 2: Data Types <span style="color:red">**🔴 DONE**</span> (আসল: ৫–৭ অক্টো)

**আজকের লক্ষ্য:** reference আর value-এর পার্থক্য হাড়ে হাড়ে বোঝা।

**🧠 এই topic-এ কীভাবে ভাবব:**
- প্রতিটা `=` দেখে জিজ্ঞেস করো: **"নতুন জিনিস তৈরি হলো, নাকি পুরনো জিনিসের নতুন নাম?"**
- value পরে বদলাবে? → `let`; না বদলালে → `const`।
- function-এ array/object পাঠালে: ভেতরে **mutate** (`push`, `obj.x =`) করছি, নাকি **reassign** (`=`)?
- `typeof` দেখে বিশ্বাস করার আগে: এটা কি null / array / NaN-এর ফাঁদ?

### 📘 Concept phases + ছোট problem

**Phase 1.1 — `const` আর `let`** <span style="color:red">**🔴 DONE**</span>
`const` default; `let` শুধু value বদলালে; `var` না।
- **P1.1a · Running Total** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 দোকানের ক্যাশবাক্সে প্রতিটা বিক্রির টাকা জমছে।
  - **EN:** Given `prices = [10, 20, 30]`, print the running total after each price and return the final total. → `60`
  - **বাংলা:** প্রতিটা দাম যোগ করে চলমান মোট দেখাও, শেষে মোট ফেরত দাও।
- **P1.1b · Find Max With a Loop** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 ক্লাসের সবচেয়ে বেশি নম্বর।
  - **EN:** Given `[10, 20, 30, 40, 50]`, find the largest value using a loop. Start `max` at `-Infinity`. → `50`
  - **বাংলা:** loop দিয়ে সবচেয়ে বড় সংখ্যা বের করো। `max` কি `const` হতে পারে? কেন না?

**Phase 1.2 — Scope (block বনাম function)** <span style="color:red">**🔴 DONE**</span>
`let/const` block-এ আটকে থাকে; `var` `if/for` থেকে বাইরে পালায়।
- **P1.2 · Scope Output** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 ঘরের ভেতরের জিনিস (`let`) বনাম বারান্দায় পড়ে থাকা জিনিস (`var`)।
  - **EN:** Predict the output: `if (true) { var x = 10; let b = 20; } console.log(x); console.log(b);` → `10`, then `ReferenceError`
  - **বাংলা:** কোনটা block-এর বাইরে দেখা যায়, কোনটা যায় না — কেন?

**Phase 1.3 — Hoisting আর TDZ** <span style="color:red">**🔴 DONE**</span>
`var` → আগে পড়লে `undefined`; `let/const` → ReferenceError; function declaration পুরোটা উপরে ওঠে।
- **P1.3 · Hoisting Output** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 নাম-তালিকায় নাম আছে কিন্তু চেয়ার এখনো খালি (`var`), বনাম দরজা এখনো বন্ধ (`let`)।
  - **EN:** Predict: `console.log(score); var score = 50;` and `console.log(level); let level = 3;` → `undefined`, `ReferenceError`
  - **বাংলা:** দুটো আলাদা ফল কেন?

**Phase 1.4 — Copy: primitive বনাম reference** <span style="color:red">**🔴 DONE**</span>
number/string copy হয় value দিয়ে; object/array copy হয় reference দিয়ে (একই জিনিস, দুটো নাম)।
- **P1.4 · Cart Backup** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 shopping cart-এর "backup" আসলে একই cart-এর দ্বিতীয় নাম।
  - **EN:** `const cart = ["apple"]; const backup = cart; cart.push("mango"); let count = cart.length; let saved = count; count = 0;` Predict `backup` and `saved`. → `["apple","mango"]`, `2`
  - **বাংলা:** backup কেন বদলাল, কিন্তু saved কেন বদলাল না?

**Phase 1.5 — Mutation বনাম Reassignment** <span style="color:red">**🔴 DONE**</span>
`push`, `length = 0` → সব নাম বদল দেখে; `=` → শুধু ওই নাম নতুন জিনিসে যায়।
- **P1.5 · Empty a List Two Ways** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 ঝুড়ি খালি করা (mutate) বনাম নতুন ঝুড়ি নেওয়া (reassign)।
  - **EN:** Compare `tasks.length = 0` and `items = []` when another variable references the same array. What does the other variable show?
  - **বাংলা:** কোন উপায়ে অন্য নামটাও খালি দেখায়?

**Phase 1.6 — Function-এ array পাঠানো** <span style="color:red">**🔴 DONE**</span>
ভেতরে `push` → বাইরেরটা বদলায়; ভেতরে `list = []` → বাইরেরটা বদলায় না।
- **P1.6 · Change Inside a Function** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 বন্ধুকে তোমার খাতা দিলে, সে লিখলে তোমার খাতায় লেখা হয়; সে নতুন খাতা নিলে তোমারটা অক্ষত।
  - **EN:** `function change(items) { items.push("end"); items = ["new"]; items.push("x"); }` — what is the outside array after `change(box)` where `box = ["start"]`? → `["start", "end"]`
  - **বাংলা:** কোন লাইন বাইরের array-কে ছোঁয়, কোনটা ছোঁয় না?

**Phase 2.1 — ৭টা primitive + `typeof`** <span style="color:red">**🔴 DONE**</span>
string, number, boolean, null, undefined, bigint, symbol; বাকি সব object।
- **P2.1 · Type of Each** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 form-এ ইউজার যা লিখল, সেটা সংখ্যা নাকি লেখা?
  - **EN:** Print `typeof` for `[7, "7", true, "true"]`. → `number string boolean string`

**Phase 2.2 — `typeof`-এর ফাঁদ** <span style="color:red">**🔴 DONE**</span>
`typeof null` → `"object"`, `typeof []` → `"object"`, `typeof NaN` → `"number"`। সঠিক যাচাই: `Array.isArray`, `=== null`, `Number.isNaN`।
- **P2.2 · Trap Check** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 API থেকে আসা data-র আসল ধরন বোঝা।
  - **EN:** Print `typeof` for `[null, [1, 2], { a: 1 }, NaN]` and fix each with the correct check.

**Phase 2.3 — `null` বনাম `undefined`** <span style="color:red">**🔴 DONE**</span>
`null` = ইচ্ছা করে খালি; `undefined` = এখনো দেওয়া হয়নি।
- **P2.3 · Profile Fields** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 profile-এ phone ইচ্ছা করে খালি রাখা (`null`), email কখনো দেওয়াই হয়নি (`undefined`)।
  - **EN:** `const profile = { name: "rahim", phone: null };` Print `profile.phone`, `profile.email`. → `null undefined`

### ★ মূল problem

#### ★ 1.1 · Swap Two Values 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 LeetCode-এ হুবহু নেই (plan-এর নিজস্ব)
🌍 **Real-life:** দুটো বাক্সে দুটো জিনিস — একটা খালি বাক্স (temp) ছাড়া জায়গা বদলাবে কীভাবে?

**EN:** Given two values `a` and `b`, return them swapped as `[b, a]`. Do it three ways: using a temp variable, using destructuring, and using addition/subtraction (numbers only).
```
Example 1: Input: a = 1, b = 2      Output: [2, 1]
Example 2: Input: a = "x", b = "y"  Output: ["y", "x"]
Explanation: Ways 1 and 2 work for any type. Way 3 works only for numbers.
```
**Constraints:** `a` and `b` can be any type (way 3: numbers only).
**Function:** `var swapValues = function (a, b) {}`

**বাংলা:** দুটো value অদলবদল করে `[b, a]` ফেরত দাও — temp দিয়ে, destructuring দিয়ে, আর যোগ-বিয়োগ দিয়ে।
**🧠 ভাবনা:** a-তে b লিখলে a-র পুরনো value হারায় — হারানোর আগে কোথায় রাখব? যোগ-বিয়োগ string-এ কেন চলবে না?
**⏱️ লক্ষ্য:** Time O(1) · Space O(1)

#### ★ 1.2 · Update Without Mutating 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** React/Redux-এ state সরাসরি বদলানো যায় না — নতুন copy বানিয়ে বদলাতে হয়।

**EN:** Given a `user` object and `newName`, return a **new** object with the name updated. The original `user` must not change.
```
Example 1: Input: user = { name: "Rahim", age: 25 }, newName = "Karim"
           Output: { name: "Karim", age: 25 }   (user is still { name: "Rahim", age: 25 })
```
**Constraints:** `user` is a flat object.
**Function:** `var updateName = function (user, newName) {}`

**বাংলা:** আসল user না বদলে নতুন object ফেরত দাও যেখানে নাম নতুন। প্রমাণ করো আসলটা বদলায়নি।
**🧠 ভাবনা:** নতুন object কীভাবে বানাব (`...`)? কোন key-তে নতুন নাম বসবে — `name` নাকি `newName`? (shorthand-এর ফাঁদ!)
**⏱️ লক্ষ্য:** Time O(k) · Space O(k) — k = key-র সংখ্যা (spread সব key copy করে)

#### ★ 1.3 · Add Item: Two Ways 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** cart-এ জিনিস যোগ — একই cart বদলানো, নাকি নতুন cart বানানো (undo রাখতে চাইলে)?

**EN:** Write `addItem(cart, item)` two ways: (a) mutate and return the same array, (b) return a new array without changing the original.
```
Example 1: Input: cart = ["apple"], item = "mango"
           Output (a): ["apple","mango"], cart is now ["apple","mango"], result === cart → true
           Output (b): ["apple","mango"], cart is still ["apple"]
```
**Function:** `var addItemMutate = function (cart, item) {}` · `var addItemPure = function (cart, item) {}`

**বাংলা:** দুইভাবে item যোগ করো — একবার আসলটা বদলে, একবার নতুন array দিয়ে। কখন কোনটা ভালো, এক লাইনে লেখো।
**🧠 ভাবনা:** `push` কী ফেরত দেয় — array নাকি length? test-এ return value-এর সাথে আসল input-ও print করো।
**⏱️ লক্ষ্য:** (a) Time O(1) · Space O(1) · (b) Time O(n) · Space O(n)

#### ★ 2.1 · Get Type 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** API response-এর প্রতিটা field-এর আসল ধরন যাচাই (validation library এটাই করে)।

**EN:** Return the real type of `value` as one of: `"null" | "array" | "object" | "number" | "nan" | "string" | "boolean" | "undefined" | "function"`.
```
Example 1: Input: value = [1, 2]   Output: "array"
Example 2: Input: value = null     Output: "null"
Example 3: Input: value = NaN      Output: "nan"
```
**Function:** `var getType = function (value) {}`

**বাংলা:** value-এর আসল type-এর **নাম** (string) ফেরত দাও। typeof-এর ফাঁদগুলো ঠিক করো।
**🧠 ভাবনা:** কোন তিনটা value-তে `typeof` ভুল বলে? সেগুলো আগে (guard), বাকিদের জন্য শেষে `typeof`। ক্রম কেন গুরুত্বপূর্ণ?
**⏱️ লক্ষ্য:** Time O(1) · Space O(1)

#### ○ 2.2 · Is Empty 🟡 ⬜
🔗 [LC 2727 · Is Object Empty](https://leetcode.com/problems/is-object-empty/) (কাছাকাছি)
🌍 **Real-life:** form submit-এর আগে চেক — কোনো field কি খালি রয়ে গেছে?

**EN:** Return `true` if `value` is empty: `null`, `undefined`, `""`, `[]`, or `{}`. Decide first whether `0` and `false` are empty, and write that decision as a clarifying question.
```
Example 1: Input: value = []          Output: true
Example 2: Input: value = { a: 1 }    Output: false
```
**বাংলা:** খালি value হলে `true`। আগে ঠিক করো `0` আর `false` খালি কিনা — interviewer-কে জিজ্ঞেস করার মতো লিখে রাখো।
**🧠 ভাবনা:** array আর object-এর খালি হওয়া আলাদাভাবে কীভাবে চেক করব (`length`? `Object.keys`?)

### 🚪 Gate
- Topic 1 Gate <span style="color:red">**🔴 DONE**</span> (৬ অক্টো) · Topic 2 Gate <span style="color:red">**🔴 DONE**</span> (৭ অক্টো)

**শেষ হয়েছে বুঝবে যখন:** যেকোনো লাইন দেখে বলতে পারো — "এখানে নতুন জিনিস তৈরি হলো, নাকি পুরনো জিনিসের নতুন নাম?"

---

## Day 2 · W1 D2 · মঙ্গল ৬ অক্টো — Topic 3: Operators & Coercion + Topic 4: Conditions <span style="color:red">**🔴 DONE**</span> (আসল: ৭–৯ অক্টো)

**আজকের লক্ষ্য:** condition-এর ক্রম আর guard clause — পরিষ্কার code-এর ভিত্তি।

**🧠 এই topic-এ কীভাবে ভাবব:**
- `0`, `""`, `false` কি **বৈধ value**? হলে `||` না, `??` ব্যবহার করো।
- কোন শর্তটা **সবচেয়ে নির্দিষ্ট**? সেটা আগে।
- ভুল input কোনগুলো? শুরুতেই `return` (guard) — তারপর main logic সমতল।
- `if (x)` লিখছি — x কি `0` হতে পারে? তাহলে ফাঁদ।

### 📘 Concept phases + ছোট problem

**Warm-up · Apply Discount** 🟢 <span style="color:red">**🔴 DONE**</span>
- 🌍 দোকানে ১০% ছাড়।
- **EN:** Given `product = { name: "Pen", price: 200 }` and `percent = 10`, return a new product with the discounted price. → `{ name: "Pen", price: 180 }`, original unchanged.
- **বাংলা:** ছাড় দিয়ে নতুন object ফেরত দাও, আসলটা না বদলে। সূত্র: `price * percent / 100`।

**Phase 3.1 — Arithmetic আর `+`-এর ফাঁদ** <span style="color:red">**🔴 DONE**</span>
`+` string পেলে জোড়ে, `-` সংখ্যা বানায়; `%` = ভাগশেষ।
- **P3.1 · Coercion Output** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 form-এর input সবসময় string — `"5" + 1` হয়ে যায় `"51"`!
  - **EN:** Predict: `"5" + 1`, `"5" - 1`, `1 + true` → `"51"`, `4`, `2`

**Phase 3.2 — `===` বনাম `==`** <span style="color:red">**🔴 DONE**</span>
- **P3.2** 🟢 <span style="color:red">**🔴 DONE**</span> — Predict `null == undefined`, `null === undefined`, `NaN === NaN` → `true false false`

**Phase 3.3 — `&&` / `||` value ফেরত দেয়** <span style="color:red">**🔴 DONE**</span>
- **P3.3** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 login-চেক। Predict `"a" && "b"`, `0 || "x"`, `null && "y"` → `"b" "x" null`

**Phase 3.4 — `||` বনাম `??`** <span style="color:red">**🔴 DONE**</span>
- **P3.4** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 volume 0 সেট করা আছে, default 50 বসবে কি? Predict `0 || 50`, `0 ?? 50` → `50 0`

**Phase 3.5 — Optional chaining `?.`** <span style="color:red">**🔴 DONE**</span>
- **P3.5** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 user-এর address নাও থাকতে পারে। `user?.address?.city` crash না করে `undefined`।

**Phase 4.1 — `if / else if` — ক্রম** <span style="color:red">**🔴 DONE**</span>
- **P4.1 · Ticket Price** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 সিনেমার টিকিট — বয়স অনুযায়ী দাম।
  - **EN:** `ticket(age)`: `< 5` → "free", `< 18` → "child", `>= 60` → "senior", else "adult".
  - **বাংলা:** বয়স অনুযায়ী টিকিটের ধরন। শর্তের ক্রম বদলালে কী ভাঙে?

**Phase 4.2 — Guard clause** <span style="color:red">**🔴 DONE**</span>
- **P4.2 · Safe Divide** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 calculator-এ 0 দিয়ে ভাগ।
  - **EN:** `divide(a, b)` returns `"cannot divide by zero"` if `b === 0`, else `a / b`.

**Phase 4.3 — Truthy / Falsy** <span style="color:red">**🔴 DONE**</span>
৮টা falsy: `false, 0, -0, 0n, "", null, undefined, NaN`। `[]`, `{}`, `"0"` truthy!
- **P4.3 · Stock Message** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 stock 0 থাকলে "0 items left" দেখাতে হবে, "unknown" না।
  - **EN:** `showStock(stock)` → `"stock unknown"` only for `null/undefined`; `0` → `"0 items left"`.

**Phase 4.4 — `switch` আর lookup object** <span style="color:red">**🔴 DONE**</span>
- **P4.4a · Day Type** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 সপ্তাহের দিন weekend কিনা। `dayType("sun")` → `"weekend"`
- **P4.4b · Size Price** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 চায়ের কাপের সাইজ অনুযায়ী দাম। `PRICE[size] ?? "unknown size"`
- **P4.4c · Fall-through** 🟢 <span style="color:red">**🔴 DONE**</span> — `break` ছাড়া `switch` হলে `fall(2)` কী দেয়? → `"two three "`

### ★ মূল problem

#### ★ 3.1 · Get Port 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** server চালু হওয়ার সময় config থেকে port নেয়; না থাকলে 3000।

**EN:** Return `config.port` if it exists, otherwise `3000`. A port of `0` is valid and must be kept. `config` itself may be `undefined`.
```
Example 1: Input: config = { port: 8080 }  Output: 8080
Example 2: Input: config = { port: 0 }     Output: 0
Example 3: Input: config = undefined       Output: 3000
```
**Function:** `var getPort = function (config) {}`

**বাংলা:** config-এ port থাকলে সেটা, না থাকলে 3000। port 0 হলে 0-ই থাকবে। config না থাকলেও crash না।
**🧠 ভাবনা:** `||` দিলে 0-এর কী হবে? config নিজে না থাকলে `.port` পড়লে কী হবে?
**⏱️ লক্ষ্য:** Time O(1) · Space O(1)

#### ★ 3.2 · Can Access 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** admin panel-এ ঢোকার অনুমতি।

**EN:** Return `true` only if `user` exists, `user.isActive === true`, and `user.role` is `"admin"` or `"editor"`. Must return a boolean.
```
Example 1: Input: user = { isActive: true, role: "admin" }   Output: true
Example 2: Input: user = { isActive: true, role: "viewer" }  Output: false
Example 3: Input: user = null                                Output: false
```
**Function:** `var canAccess = function (user) {}`

**বাংলা:** user আছে, active, আর role admin বা editor — তিনটাই সত্য হলে `true`, এক লাইনে।
**🧠 ভাবনা:** `&&` boolean না দিয়ে value দিলে কী হয়? `null` user-এ প্রথম শর্তেই থামবে কি?
**⏱️ লক্ষ্য:** Time O(1) · Space O(1)

#### ★ 4.1 · Fizz Buzz 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 [LC 412 · Fizz Buzz](https://leetcode.com/problems/fizz-buzz/) (হুবহু)
🌍 **Real-life:** বাচ্চাদের গোনার খেলা — ৩ দিয়ে ভাগ গেলে "Fizz" বলো।

**EN:** Given an integer `n`, return a string array `answer` (1-indexed) where: `"FizzBuzz"` if `i` is divisible by 3 and 5, `"Fizz"` if divisible by 3, `"Buzz"` if divisible by 5, otherwise `i` as a string.
```
Example 1: Input: n = 3   Output: ["1","2","Fizz"]
Example 2: Input: n = 5   Output: ["1","2","Fizz","4","Buzz"]
```
**Constraints:** `1 <= n <= 10^4`
**Function:** `var fizzBuzz = function (n) {}`

**বাংলা:** ১ থেকে n পর্যন্ত — ৩ ও ৫ দুটো দিয়েই ভাগ গেলে "FizzBuzz", শুধু ৩ → "Fizz", শুধু ৫ → "Buzz", নইলে সংখ্যাটা string হিসেবে।
**🧠 ভাবনা:** কোন শর্ত সবচেয়ে নির্দিষ্ট? নতুন নিয়ম (7 → "Bazz") এলে code কত সহজে বদলাবে?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n) (output array)

#### ★ 4.2 · Grade Calculator 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 LeetCode-এ নেই (HackerRank "Grading Students"-এর আত্মীয়)
🌍 **Real-life:** পরীক্ষার নম্বর থেকে grade।

**EN:** Return `"A"` for 90+, `"B"` for 80+, `"C"` for 70+, `"D"` for 60+, else `"F"`. Return `"Invalid"` if `score` is not a number, is `NaN`, or is outside 0–100.
```
Example 1: Input: score = 85    Output: "B"
Example 2: Input: score = 101   Output: "Invalid"
Example 3: Input: score = "90"  Output: "Invalid"
```
**Function:** `var grade = function (score) {}`

**বাংলা:** নম্বর অনুযায়ী grade; ভুল input হলে "Invalid" — guard clause দিয়ে।
**🧠 ভাবনা:** কোন কোন ভুল input? (type, NaN, range) — সেগুলো আগে। তারপর বড় থেকে ছোট।
**⏱️ লক্ষ্য:** Time O(1) · Space O(1)

#### ★ 4.3 · Leap Year 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 পরে কাজে লাগবে: [LC 1154 · Day of the Year](https://leetcode.com/problems/day-of-the-year/) (কাছাকাছি)
🌍 **Real-life:** calendar app — ফেব্রুয়ারি ২৮ দিনের নাকি ২৯?

**EN:** Return `true` if `year` is a leap year: divisible by 4, except years divisible by 100, unless also divisible by 400.
```
Example 1: Input: year = 2024  Output: true
Example 2: Input: year = 1900  Output: false
Example 3: Input: year = 2000  Output: true
```
**Function:** `var isLeapYear = function (year) {}`

**বাংলা:** ৪ দিয়ে ভাগ গেলে leap, কিন্তু ১০০ দিয়ে গেলে না — যদি না ৪০০ দিয়েও যায়।
**🧠 ভাবনা:** তিনটা নিয়মের কোনটা আগে check করলে ভুল হয় না? 1900 আর 2000 দিয়ে test করো।
**⏱️ লক্ষ্য:** Time O(1) · Space O(1)

#### Gate problem · Shipping Category 🟢 <span style="color:red">**🔴 DONE**</span>
🌍 courier-এ ওজন অনুযায়ী ধরন। `shipping(weight)`: ভুল/≤0 → "invalid", >20 → "freight", >5 → "heavy", নইলে "standard"।

#### ○ 4.4 · Type of Triangle 🟢 ⬜
🔗 [LC 3024 · Type of Triangle](https://leetcode.com/problems/type-of-triangle/) (কাছাকাছি)
🌍 **Real-life:** তিনটা লাঠি দিয়ে ত্রিভুজ বানানো যায় কি?

**EN:** Given side lengths `a, b, c`, return `"invalid"` if they can't form a triangle (any side ≤ 0, or the sum of two sides ≤ the third), else `"equilateral"`, `"isosceles"`, or `"scalene"`.
```
Example 1: Input: 3, 3, 3  Output: "equilateral"
Example 2: Input: 1, 2, 3  Output: "invalid"   (1 + 2 is not > 3)
```
**বাংলা:** তিন বাহু দিয়ে ত্রিভুজের ধরন; বানানো না গেলে "invalid"।
**🧠 ভাবনা:** কোন শর্ত আগে — invalid নাকি equilateral?

### 🚪 Gate
- Topic 3 Gate <span style="color:red">**🔴 DONE**</span> (৮ অক্টো) · Topic 4 Gate <span style="color:red">**🔴 DONE**</span> (৯ অক্টো)

---

## Day 3 · W1 D3 · বুধ ৭ অক্টো — Topic 5: Loops ★ (Loop Template) <span style="color:red">**🔴 DONE**</span> (আসল: ৯–১৩ অক্টো) · Gate ⚠️

**আজকের লক্ষ্য:** "পরের লাইন কী লিখব" — তার প্রথম উত্তর: **Loop Template।**

**🧠 এই topic-এ কীভাবে ভাবব:**
- **index লাগবে?** (পাশের element, অবস্থান) → `for`; শুধু value → `for...of`; কতবার জানি না → `while`।
- **কোথা থেকে শুরু, কোথায় থামব, কত ধাপ?** — তিনটা সিদ্ধান্ত লিখে তারপর loop।
- `arr[i + 1]` বা `arr[i - 1]` ব্যবহার করছি? → সীমানা বদলাও (`i < n - 1` বা `i = 1` থেকে)।
- পেলেই থামতে হবে? → `return` (early exit)।
- **Pair লাগবে?** → nested, `j = i + 1`।

### 📘 Concept phases + ছোট problem

**Phase 5.1 — `for`-এর তিন অংশ** <span style="color:red">**🔴 DONE**</span>
শুরু · থামা · ধাপ (`i++`, `i += 2`, `i--`)।
- **P5.1a · Even Numbers to 10** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 জোড় নম্বরের বাসা। `0 2 4 6 8 10` print করো।
- **P5.1b · Countdown** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 rocket launch। `5 4 3 2 1`।
- **P5.1c · Push Return Value** 🟢 <span style="color:red">**🔴 DONE**</span> — `for (let i = 10; i > 0; i -= 3)` এ `push` করে প্রতিবার ফেরত আসা length print করো। → `1 2 3 4`

**Phase 5.2 — কোন loop কখন** <span style="color:red">**🔴 DONE**</span>
`for` / `for...of` / `while` / `for...in` (object key; array-তে index string হিসেবে আসে)।
- **P5.2a · Halving Steps** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 কাগজ বারবার অর্ধেক ভাঁজ — কতবারে ১ হয়?
  - **EN:** Starting at `n = 20`, keep doing `n = Math.floor(n / 2)` while `n > 1`. Count the steps. → `4`
- **P5.2b · for...in on Array** 🟢 <span style="color:red">**🔴 DONE**</span> — `for (const i in ["x","y"])` → `i`-এর type কী? → `string`

**Phase 5.3 — Loop Template (আগে / ভেতরে / পরে)** <span style="color:red">**🔴 DONE**</span>
- **P5.3 · Count Evens** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 ঝুড়িতে কয়টা জোড়া-সংখ্যার টিকিট।
  - **EN:** Return how many even numbers are in `[3, 8, 5, 2, 6, -1]`. → `3`
  - **বাংলা:** আগে `count = 0`, ভেতরে even হলে `count++`, পরে `return count`।

**Phase 5.4 — `break` · `continue` · early `return`** <span style="color:red">**🔴 DONE**</span>
- **P5.4a · First Zero** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 লাইনে প্রথম খালি চেয়ার। `[4, 7, 0, 9, 0]` → প্রথম 0-এর index `2`, তারপর থামো।
- **P5.4b · First Negative** 🟢 <span style="color:red">**🔴 DONE**</span> — `[5, 3, -2, -8]` → `2`; না পেলে `-1`।
- **P5.4c · Skip and Stop** 🟢 <span style="color:red">**🔴 DONE**</span> — `[3, -1, 4, 100, 5]`: negative skip, 50-এর বেশি হলে থামো, বাকি যোগ। → `7`

**Phase 5.5 — Nested loop** <span style="color:red">**🔴 DONE**</span>
ভেতরের লাইন **মোট** কতবার চলে — গোনো।
- **P5.5 · Count Nested Runs** 🟢 <span style="color:red">**🔴 DONE**</span> — `i = 1..4`, `j = 1..1` হলে ভেতরের `console.log` কতবার? → `4`

### ★ মূল problem

#### ★ 5.1 · Sum of Odd-Index Elements 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** সপ্তাহের শুধু বিজোড় দিনের (সোম, বুধ…) বিক্রি যোগ।

**EN:** Return the sum of elements at odd indices (1, 3, 5, …). Then solve it again iterating from the end of the array backward.
```
Example 1: Input: nums = [10, 20, 30, 40, 50]  Output: 60   (20 + 40)
Example 2: Input: nums = [10, 20, 30, 40]      Output: 60
```
**Function:** `var sumOddIndex = function (nums) {}`

**বাংলা:** বিজোড় index-এর element-গুলো যোগ করো। তারপর উল্টো দিক থেকে একই কাজ।
**🧠 ভাবনা:** index লাগবে, তাই কোন loop? উল্টো দিকে শুরুর index কীভাবে বিজোড় বানাব?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ 5.2 · Number of Good Pairs 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 [LC 1512 · Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/) (হুবহু)
🌍 **Real-life:** ক্লাসে একই জন্মদিনের কতজোড়া ছাত্র আছে।

**EN:** Given an array `nums`, return the number of good pairs. A pair `(i, j)` is good if `nums[i] == nums[j]` and `i < j`.
```
Example 1: Input: nums = [1,2,3,1,1,3]  Output: 4
Explanation: (0,3), (0,4), (3,4), (2,5)
Example 2: Input: nums = [1,1,1,1]      Output: 6
Example 3: Input: nums = [1,2,3]        Output: 0
```
**Constraints:** `1 <= nums.length <= 100` · `1 <= nums[i] <= 100`
**Function:** `var numIdenticalPairs = function (nums) {}`

**বাংলা:** কতগুলো জোড়া (i < j) আছে যাদের value সমান।
**🧠 ভাবনা:** প্রতিটা জোড়া একবারই কীভাবে দেখব? (`j = i + 1`) n = 5-এ মোট কতটা জোড়া? (W3-এ Map দিয়ে O(n)-এ আবার করবে)
**⏱️ লক্ষ্য:** Time O(n²) — `n(n-1)/2` তুলনা · Space O(1)

#### ★ 5.3 · Richest Customer Wealth 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 [LC 1672 · Richest Customer Wealth](https://leetcode.com/problems/richest-customer-wealth/) (হুবহু)
🌍 **Real-life:** bank-এ প্রতিটা customer-এর সব account-এর মোট — সবচেয়ে ধনী কে?

**EN:** `accounts[i][j]` is the money the i-th customer has in the j-th bank. Return the wealth of the richest customer (wealth = sum of a customer's accounts).
```
Example 1: Input: accounts = [[1,2,3],[3,2,1]]       Output: 6
Example 2: Input: accounts = [[1,5],[7,3],[3,5]]     Output: 10
Example 3: Input: accounts = [[2,8,7],[7,1,3],[1,9,5]] Output: 17
```
**Constraints:** `1 <= m, n <= 50` · `1 <= accounts[i][j] <= 100`
**Function:** `var maximumWealth = function (accounts) {}`

**বাংলা:** প্রতিটা row-এর যোগফল বের করো, তার মধ্যে সবচেয়ে বড়টা ফেরত দাও।
**🧠 ভাবনা:** দুটো কাজ — row-এর sum, আর max। row-এর `sum = 0` কোথায় বসবে, বাইরের loop-এর ভেতরে না বাইরে?
**⏱️ লক্ষ্য:** Time O(m × n) · Space O(1)

#### ★ 5.4 · First Descent Index 🟢 Easy <span style="color:red">**🔴 DONE**</span>
🔗 কাছাকাছি: [LC 896 · Monotonic Array](https://leetcode.com/problems/monotonic-array/)
🌍 **Real-life:** দোকানের বিক্রি প্রথম কবে আগের দিনের চেয়ে কমল?

**EN:** Return the first index `i` where `nums[i] > nums[i + 1]`. Return `-1` if there is none.
```
Example 1: Input: nums = [1, 3, 5, 4, 6]  Output: 2   (5 > 4)
Example 2: Input: nums = [1, 2, 3]        Output: -1
Example 3: Input: nums = []               Output: -1
```
**Function:** `var firstDescent = function (nums) {}`

**বাংলা:** প্রথম যেখানে একটা সংখ্যা তার পরেরটার চেয়ে বড় — সেই index; না থাকলে -1।
**🧠 ভাবনা:** `nums[i + 1]` ব্যবহার করছি — loop কোথায় থামবে? খালি array-তে loop চলে কি?
**⏱️ লক্ষ্য:** Time O(n) — worst case n − 1 তুলনা · Space O(1)

#### ○ 5.3b · Star Pyramid 🟢 ⬜
🌍 মঞ্চের সিঁড়ি। `n = 3` হলে:
```
  *
 ***
*****
```
**EN:** Print a pyramid of `n` rows. Make a table first: row → spaces, stars. **বাংলা:** আগে টেবিল — row নম্বরের সাথে space আর star-এর সম্পর্ক।

#### ○ 5.5 · Column Sums 🟡 ⬜
🌍 Excel-এ প্রতিটা column-এর মোট। **EN:** Given a 2D matrix, return an array of each column's sum. `[[1,2],[3,4]]` → `[4, 6]`. **বাংলা:** প্রতিটা column-এর যোগফল। কোন loop বাইরে, কোনটা ভেতরে?

#### ○ 5.6 · Find Numbers with Even Number of Digits 🟢 ⬜
🔗 [LC 1295](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/) (হুবহু)
🌍 কোন invoice নম্বরে জোড় সংখ্যক digit। **EN:** Return how many numbers in `nums` have an even number of digits. `[12,345,2,6,7896]` → `2`. **বাংলা:** `while` দিয়ে digit গোনো (string ছাড়া)।

### 🚪 Gate — Topic 5 ⚠️ যাচাই বাকি
- Concept প্রশ্ন ৫টা — উত্তর ঠিক ✅
- Gate problem **Count Increases** ⚠️ — 🌍 parking lot sensor। `[3, 5, 5, 2, 8]` → `2`। নিজে টাইপ করে চালানো আর ৩টা "কেন" বাকি (Day 4-এর warm-up-এ)।

### 🔗 Loops বোঝার জন্য আরো LeetCode (সময় পেলে)
[1480 Running Sum](https://leetcode.com/problems/running-sum-of-1d-array/) · [1929 Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/) · [1431 Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/) · [1365 How Many Numbers Are Smaller Than the Current Number](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/) · [2011 Final Value of Variable After Performing Operations](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/)

---

## Day 4 · W1 D4 · বৃহস্পতি ৮ অক্টো — Topic 6: Functions 🟡 চলছে (আসল শুরু: ১৩ অক্টো)

**আজকের লক্ষ্য:** বড় problem-কে ছোট helper function-এ ভাগ করার অভ্যাস — live coding-এর সবচেয়ে কাজের কৌশল।

**🧠 এই topic-এ কীভাবে ভাবব (যেকোনো function লেখার আগে ৩ প্রশ্ন):**
1. **মেশিনের নাম কী?** — কাজটা এক শব্দে → function-এর নাম
2. **কী ঢোকে?** — parameter (কয়টা? জানা নেই → `...rest`; object → destructuring)
3. **কী বের হয়?** — `return` (কখনো `console.log` না!)
- আটকে গেলে: *"এই অংশটা `isValid()` — পরে লিখব"* বলে helper-এর নাম দিয়ে এগিয়ে যাও।

### 🔥 Warm-up — Topic 5 Gate যাচাই ⬜
- `countIncreases` ফাঁকা editor থেকে নিজে টাইপ করে চালাও (`[3,5,5,2,8]` → `2`)।
- ৩টা "কেন": (ক) loop `i = 0` থেকে শুরু করলে `counts[i - 1]` কী? (খ) n = 4-এর pair loop: `3 + ? + ? + ?` (গ) `firstDescent`-এ worst আর best case-এ কতবার তুলনা?

### 📘 Concept phases + ছোট problem

**Phase 6.1 — function কী + লেখার তিন উপায় + hoisting** <span style="color:red">**🔴 DONE**</span>
🌍 function = জুস মেশিন: input → মেশিন → output। declaration hoist হয়; expression/arrow = variable-এর নিয়ম (`const` → TDZ, `var` → `undefined`)। arrow-এ `{}` দিলে `return` বাধ্যতামূলক।
- **P6.1a · Greet** 🟢 <span style="color:red">**🔴 DONE**</span> — `greet("Rahim")` → `"Hello, Rahim"`; `greet()` → `"Hello, undefined"` কেন?
- **P6.1b · Double, Three Ways** 🟢 <span style="color:red">**🔴 DONE**</span> — 🌍 ফটোকপি মেশিন (সব দ্বিগুণ)। declaration, expression, arrow — তিনটাই `double(5)` → `10`।
- **P6.1c · Call Before Declare** 🟢 <span style="color:red">**🔴 DONE**</span> — `double1` আগে ডাকলে চলে; `double2` (`const`) → ReferenceError; `var sayHi` → TypeError। কেন?
- **P6.1d · Arrow Trap** 🟢 <span style="color:red">**🔴 DONE**</span> — `(n) => { n * 2 }` → `undefined`। `half(10)` দুইভাবে ঠিক করো।

**Phase 6.2 — `return` বনাম `console.log`** <span style="color:red">**🔴 DONE**</span>
🌍 মুখে বলা (`console.log`) বনাম কাগজে লিখে হাতে দেওয়া (`return`)। `return` না থাকলে function → `undefined`।
- **P6.2a · Log vs Return** 🟢 <span style="color:red">**🔴 DONE**</span> — `const x = addLog(2, 3)` → `x` = `undefined`।
- **P6.2b · NaN Total** 🟢 <span style="color:red">**🔴 DONE**</span> — `addLog(2, 3) + 10` → `NaN`; ঠিক করে `15`।
- **P6.2c · Arrow Returning Object** 🟢 <span style="color:red">**🔴 DONE**</span> — `(name) => { name: name }` → `undefined`; `({ ... })` দিলে object।
- **P6.2d · Make Point** 🟢 <span style="color:red">**🔴 DONE**</span> — `makePoint(2, 5)` → `{ x: 2, y: 5 }`; shorthand `{ x, y }` কেন চলে?

**Phase 6.3 — Parameters: default · rest · destructuring** <span style="color:red">**🔴 DONE**</span>
- (ক) **Default** <span style="color:red">**🔴 DONE**</span> — 🌍 চিনি না বললে দোকানদার ১ চামচ দেয়। default বসে শুধু `undefined`-এ, `null`-এ না।
  - **P6.3a · Greet Guest** 🟢 <span style="color:red">**🔴 DONE**</span> — `greet()` → `"Hello, Guest"`; `greet(null)` → `"Hello, null"`
- (খ) **Rest `...`** <span style="color:red">**🔴 DONE**</span> — 🌍 বাজারের ব্যাগ: যত জিনিস, সব এক ব্যাগে। আসল array; সবসময় শেষে।
  - **P6.3b · Show All / Intro** 🟢 <span style="color:red">**🔴 DONE**</span> — `showAll()` → `[]`; `intro(first, ...others)`
  - **P6.3c · 2703. Return Length of Arguments Passed** 🟢 <span style="color:red">**🔴 DONE**</span> · 🔗 [LC 2703](https://leetcode.com/problems/return-length-of-arguments-passed/) (হুবহু) — **Accepted** ✅
    - **EN:** Write a function `argumentsLength` that returns the count of arguments passed to it. `argumentsLength({}, null, "3")` → `3`
    - **বাংলা:** যতগুলো argument দেওয়া হয়েছে, সেই সংখ্যা ফেরত দাও। Time O(1) · Space O(n)
- (গ) **Destructuring parameter** <span style="color:red">**🔴 DONE**</span> — 🌍 courier-এর প্যাকেট থেকে দরজাতেই দরকারি জিনিস বের করা। `({ name, age = 18 } = {})`
  - **P6.3d · Show User** 🟢 <span style="color:red">**🔴 DONE**</span> — `showUser()` → TypeError কেন; `= {}` দিয়ে ঠিক।
  - **P6.3e · Describe Product** 🟢 <span style="color:red">**🔴 DONE**</span>
    - 🌍 online দোকানের product card।
    - **EN:** Write `describeProduct({ title, price })` that returns `"<title> costs <price>"`. Missing `price` → `0`. Called with nothing → `"Unknown costs 0"`.
    ```
    describeProduct({ title: "Pen", price: 100 })  → "Pen costs 100"
    describeProduct({ title: "Book" })             → "Book costs 0"
    describeProduct()                              → "Unknown costs 0"
    ```
    - **বাংলা:** product-এর নাম আর দাম দিয়ে বাক্য বানাও; দাম না থাকলে 0, কিছু না দিলেও crash না।

**Phase 6.4 — Pure function বনাম side effect** <span style="color:red">**🔴 DONE**</span>
🌍 pure = ক্যালকুলেটর: একই input → সবসময় একই output, বাইরের কিছু বদলায় না। side effect = এমন মেশিন যেটা কাজের সাথে বাইরের খাতাও বদলে দেয়।
- **P6.4a · Spot the Impure** 🟢 <span style="color:red">**🔴 DONE**</span>
  - **EN:** Which is pure? `let total = 0; function addToTotal(x) { total += x; return total; }` vs `function add(a, b) { return a + b; }`. Call each twice with the same input and compare outputs.
  - **বাংলা:** কোনটা একই input-এ আলাদা উত্তর দেয়? কেন?
- **P6.4b · Pure Tax** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 দামে ১৫% VAT।
  - **EN:** Write a pure `withVat(price)` that returns `price * 1.15` without changing any outside variable. Then write an impure version that pushes to an outside `log` array, and explain why it's harder to test.

**Phase 6.5 — Callback আর Higher-Order Function** <span style="color:red">**🔴 DONE**</span>
🌍 রেস্টুরেন্টে order দিয়ে ফোন নম্বর রেখে আসা — খাবার হলে **তারা তোমাকে ফোন করবে** (callback)। function-কে value-এর মতো পাঠানো যায়, ফেরতও দেওয়া যায়।
- **P6.5a · Calculate With Operation** 🟢 <span style="color:red">**🔴 DONE**</span>
  - **EN:** Write `calculate(a, b, op)` where `op` is a function. `calculate(6, 3, (x, y) => x - y)` → `3`; with multiply → `18`.
  - **বাংলা:** কোন হিসাব হবে সেটা function হিসেবে পাঠাও।
- **P6.5b · Repeat** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 alarm-কে বলা "৩ বার বাজো"।
  - **EN:** Write `repeat(n, fn)` that calls `fn(i)` for `i = 0..n-1`. `repeat(3, i => console.log("hi", i))` → `hi 0`, `hi 1`, `hi 2`.
- **P6.5c · 2667. Create Hello World Function** 🟢 <span style="color:red">**🔴 DONE**</span> · 🔗 [LC 2667](https://leetcode.com/problems/create-hello-world-function/) (হুবহু)
  - **EN:** Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.
  ```
  Example 1: Input: args = []         Output: "Hello World"
  Explanation: const f = createHelloWorld(); f(); // "Hello World"
  Example 2: Input: args = [{},null,42]  Output: "Hello World"
  ```
  - **বাংলা:** এমন function লেখো যেটা **একটা function ফেরত দেয়**, আর সেই function যা-ই পাক, সবসময় "Hello World" দেয়।

**Phase 6.6 — বড় কাজকে helper-এ ভাগ করা** <span style="color:red">**🔴 DONE**</span>
🌍 রান্না: "ভাত রান্না" না ভেবে — চাল ধোয়া, পানি দেওয়া, চুলায় বসানো — প্রতিটা আলাদা ছোট কাজ।
- **P6.6 · Valid PIN** 🟢 <span style="color:red">**🔴 DONE**</span>
  - 🌍 ATM PIN যাচাই।
  - **EN:** A PIN is valid if it has exactly 4 characters and every character is a digit. Write helpers `hasLength4(pin)` and `allDigits(pin)`, then `isValidPin(pin)` that uses both. `"1234"` → `true`, `"12a4"` → `false`, `"123"` → `false`.
  - **বাংলা:** আগে প্রতিটা নিয়ম আলাদা helper, তারপর main function শুধু helper-গুলো ডাকবে।
  - **🧠 ভাবনা:** main function আগে লেখো (helper-গুলো যেন আছে ধরে নিয়ে), তারপর helper — এটাই "top-down" চিন্তা।

**Phase 6.7 — Recursion-এর পরিচয়** ⬜
🌍 দুটো আয়না মুখোমুখি — ভেতরে ভেতরে একই ছবি। কিন্তু function-কে কোথাও **থামতে** হয় (base case)।
- **P6.7a · Countdown Recursive** 🟢 🔴 **DONE** — **EN:** `countDown(3)` prints `3 2 1 Done!` using recursion, no loop. **বাংলা:** base case কী? (n === 0)
- **P6.7b · Sum to N** 🟢 🔴 **DONE** — **EN:** `sumTo(4)` → `10` (4+3+2+1) recursively. **বাংলা:** `sumTo(n) = n + sumTo(n - 1)` — কোথায় থামবে?

### ★ মূল problem (concept পরিষ্কার হলে তবেই)

#### ★ 6.1 · Sum of Any Number of Arguments 🟢 Easy 🔴 **DONE**
🔗 কাছাকাছি: [LC 2703](https://leetcode.com/problems/return-length-of-arguments-passed/) (rest parameter)
🌍 **Real-life:** দোকানের bill — যত item, সবার দাম যোগ।

**EN:** Write `sum(...nums)` that returns the sum of all arguments. Do not use `reduce`. With no arguments, return `0`.
```
Example 1: Input: sum(1, 2, 3)   Output: 6
Example 2: Input: sum(10)        Output: 10
Example 3: Input: sum()          Output: 0
```
**Function:** `var sum = function (...nums) {}`

**বাংলা:** যত খুশি সংখ্যা দেওয়া হোক, সবগুলোর যোগফল ফেরত দাও — `reduce` ছাড়া, loop দিয়ে।
**🧠 ভাবনা:** ৬ মৌলিক কাজের কোনটা? (accumulation) → loop-এর আগে কী? খালি হলে loop চলে কি?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n) (rest array)

#### ★ 6.2a · 2635. Apply Transform Over Each Element in Array 🟢 Easy 🔴 **DONE**
🔗 [LC 2635](https://leetcode.com/problems/apply-transform-over-each-element-in-array/) (হুবহু)
🌍 **Real-life:** দোকানের সব দামে ১০ টাকা যোগ — প্রতিটা item-এ একই কাজ।

**EN:** Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element. The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`. Please solve it without the built-in `Array.map` method.
```
Example 1: Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
           Output: [2,3,4]
Example 2: Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
           Output: [1,3,5]
Explanation: fn receives the element and its index.
```
**Constraints:** `0 <= arr.length <= 1000` · `-10^9 <= arr[i] <= 10^9`
**Function:** `var map = function (arr, fn) {}`

**বাংলা:** নিজের `map` লেখো — প্রতিটা element-এ `fn(element, index)` চালিয়ে নতুন array বানাও। built-in `map` নিষেধ।
**🧠 ভাবনা:** ৬ কাজের কোনটা? (Build) → loop-এর আগে `result = []`। `fn`-কে কয়টা জিনিস পাঠাব?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ 6.2b · 2634. Filter Elements from Array 🟢 Easy 🔴 **DONE**
🔗 [LC 2634](https://leetcode.com/problems/filter-elements-from-array/) (হুবহু)
🌍 **Real-life:** online shop-এ "৫০০ টাকার নিচে" filter।

**EN:** Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`. The `fn` function takes one or two arguments: `arr[i]` and `i`. `filteredArr` should only contain the elements from `arr` for which `fn(arr[i], i)` evaluates to a truthy value. Solve it without the built-in `Array.filter` method.
```
Example 1: Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
           Output: [20,30]
Example 2: Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
           Output: [1]
Example 3: Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1; }
           Output: [-2,0,1,2]
Explanation: -1 + 1 = 0 is falsy, so -1 is removed.
```
**Constraints:** `0 <= arr.length <= 1000` · `-10^9 <= arr[i] <= 10^9`
**Function:** `var filter = function (arr, fn) {}`

**বাংলা:** নিজের `filter` লেখো — `fn` যেগুলোর জন্য truthy দেয়, শুধু সেগুলো রাখো।
**🧠 ভাবনা:** Example 3 — `fn` boolean না দিয়ে সংখ্যা দিলে? (truthy/falsy, Topic 4!)
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ 6.3 · Apply N Times 🟢 Easy 🔴 **DONE**
🔗 কাছাকাছি: [LC 2629 · Function Composition](https://leetcode.com/problems/function-composition/)
🌍 **Real-life:** ব্যাংকে টাকা প্রতি বছর দ্বিগুণ — ৩ বছর পর কত?

**EN:** Write `applyNTimes(fn, n, x)` that applies `fn` to `x`, `n` times in a row, and returns the result. If `n` is 0, return `x`.
```
Example 1: Input: fn = x => x * 2, n = 3, x = 1   Output: 8   (1 → 2 → 4 → 8)
Example 2: Input: fn = x => x + 10, n = 0, x = 5  Output: 5
```
**Function:** `var applyNTimes = function (fn, n, x) {}`

**বাংলা:** একটা function-কে n বার পরপর চালাও — প্রতিবারের output পরের বারের input।
**🧠 ভাবনা:** কী মনে রাখতে হবে? (বর্তমান value) প্রতি ঘুরে সেটা কীভাবে বদলায়?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ 6.4 · Check Password 🟡 Medium ⬜
🔗 কাছাকাছি: [LC 2299 · Strong Password Checker II](https://leetcode.com/problems/strong-password-checker-ii/) (নিয়ম আলাদা — পরে ওটাও করো)
🌍 **Real-life:** signup form-এ password-এর নিচে লাল লেখা — "একটা uppercase লাগবে"।

**EN:** Return an array of the rules that `pw` breaks (empty array if strong). Rules: `"length"` — at least 8 characters; `"digit"` — at least one digit; `"uppercase"` — at least one uppercase letter; `"space"` — no spaces allowed. Write each rule as its own helper function.
```
Example 1: Input: pw = "Hello123"   Output: []
Example 2: Input: pw = "hello"      Output: ["length", "digit", "uppercase"]
Example 3: Input: pw = "Hello 1234" Output: ["space"]
```
**Function:** `var checkPassword = function (pw) {}`

**বাংলা:** password কোন কোন নিয়ম ভাঙছে, তার list ফেরত দাও। প্রতিটা নিয়ম আলাদা helper।
**🧠 ভাবনা (ভাঙতে শেখো):** বড় problem → ৪টা ছোট প্রশ্ন: "৮ অক্ষর আছে?", "digit আছে?", "uppercase আছে?", "space আছে?" — প্রতিটা একটা helper। main function শুধু ডাকে আর list বানায়। একটা অক্ষর digit কিনা কীভাবে বুঝব (`"0" <= ch && ch <= "9"`)?
**⏱️ লক্ষ্য:** Time O(n) — প্রতিটা helper একবার string দেখে · Space O(1) (list সর্বোচ্চ ৪টা)

#### ○ 6.5 · 2626. Array Reduce Transformation 🟢 Easy ⬜
🔗 [LC 2626](https://leetcode.com/problems/array-reduce-transformation/) (হুবহু)
🌍 **Real-life:** সারা মাসের খরচ এক সংখ্যায় নামিয়ে আনা।

**EN:** Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return the final result obtained by executing `fn` on each element: `val = fn(init, nums[0])`, then `val = fn(val, nums[1])`, and so on. If the array is empty, return `init`. Solve it without `Array.reduce`.
```
Example 1: Input: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr; }, init = 0
           Output: 10
Example 2: Input: nums = [], fn = function sum(accum, curr) { return 0; }, init = 25
           Output: 25
```
**Function:** `var reduce = function (nums, fn, init) {}`

**বাংলা:** নিজের `reduce` — শুরুর value থেকে প্রতিটা element-এ `fn` চালিয়ে একটা ফল।
**🧠 ভাবনা:** খালি array-তে কী? (init)

### 🔗 Functions বোঝার জন্য আরো LeetCode
[2667 Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/) <span style="color:red">**🔴 DONE**</span> · [2629 Function Composition](https://leetcode.com/problems/function-composition/) (নিজে solve + examples review; submission result pending) · [2703 Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/) <span style="color:red">**🔴 DONE**</span>

### 🚪 Gate — Topic 6 ⬜
৩–৫টা concept প্রশ্ন + ১টা নাম-ছাড়া ছোট problem, একা, hint ছাড়া।

**শেষ হয়েছে বুঝবে যখন:** যেকোনো problem দেখে প্রথমে function-এর খোলস (নাম, parameter, return-এর type) লিখতে পারো, আর বড় কাজ দেখলে helper-এ ভাগ করার কথা মাথায় আসে।

---

## Day 5 · W1 D5 · শুক্র ৯ অক্টো — Topic 7: Numbers & Math ★ ⬜

**আজকের লক্ষ্য:** digit-এর কাজ আর number-এর ফাঁদ — easy round-এ খুব আসে।

**🧠 এই topic-এ কীভাবে ভাবব:**
- digit নিয়ে কাজ? → দুই অস্ত্র: `n % 10` (শেষ digit) আর `Math.floor(n / 10)` (শেষ digit বাদ) — `while (n > 0)`।
- **negative** হতে পারে? → আগে চিহ্ন আলাদা করো, `Math.abs`-এ কাজ, শেষে চিহ্ন ফেরত।
- দশমিক তুলনা? → `===` বিপজ্জনক (`0.1 + 0.2`)।
- ভাগ? → integer চাই নাকি দশমিক? negative-এ `floor` আর `trunc` আলাদা।

### 📘 Concept phases + ছোট problem

**Phase 7.1 — Floating point · NaN · Infinity** ⬜
`0.1 + 0.2 !== 0.3`; `Infinity` min/max-এর শুরু হিসেবে; বড় সংখ্যা → `BigInt`।
- **P7.1 · Price Total** 🟢 ⬜
  - 🌍 দোকানে ০.১০ আর ০.২০ টাকার দুটো জিনিস।
  - **EN:** Print `0.1 + 0.2` and `0.1 + 0.2 === 0.3`. Then return the total rounded to 2 decimals as a number. → `0.30000000000000004`, `false`, `0.3`
  - **বাংলা:** দশমিক যোগে কেন গোলমাল, আর টাকার হিসাবে কীভাবে ঠিক রাখবে।

**Phase 7.2 — `floor` / `ceil` / `round` / `trunc`** ⬜
negative-এ পার্থক্য: `Math.floor(-2.5)` = -3, `Math.trunc(-2.5)` = -2।
- **P7.2 · Pages Needed** 🟢 ⬜
  - 🌍 ব্লগে প্রতি page-এ ১০টা post — ৩৫টা post-এ কয় page? (pagination)
  - **EN:** Return the number of pages for `items` items with `perPage` per page. `pages(35, 10)` → `4`, `pages(30, 10)` → `3`, `pages(0, 10)` → `0`.
  - **বাংলা:** কয় page লাগবে — floor, ceil নাকি round?

**Phase 7.3 — Integer division আর `%`** ⬜
`Math.floor(a / b)`; `%` negative-এ negative (`-7 % 3 === -1`)।
- **P7.3 · Minutes to Hours** 🟢 ⬜
  - 🌍 সিনেমার দৈর্ঘ্য ১৩৫ মিনিট — কত ঘণ্টা কত মিনিট?
  - **EN:** `toHM(135)` → `"2h 15m"`, `toHM(60)` → `"1h 0m"`, `toHM(45)` → `"0h 45m"`.
  - **বাংলা:** ভাগফল = ঘণ্টা, ভাগশেষ = মিনিট।

**Phase 7.4 — Conversion** ⬜
`Number()`, `parseInt(s, 10)`, unary `+`, `toFixed` (string দেয়!), `n.toString(2)`।
- **P7.4 · Parse Output** 🟢 ⬜ — Predict: `parseInt("12px")`, `Number("12px")`, `(10).toString(2)`, `(255).toString(16)` → `12 NaN "1010" "ff"`

**Phase 7.5 — Digit-এর দুই অস্ত্র** ⬜
- **P7.5a · Last Digit & Rest** 🟢 ⬜ — 🌍 মোবাইল নম্বরের শেষ সংখ্যা। `1234 % 10` → `4`, `Math.floor(1234 / 10)` → `123`
- **P7.5b · Count Digits** 🟢 ⬜
  - 🌍 OTP কত digit-এর?
  - **EN:** Return the number of digits in a positive integer without converting to a string. `countDigits(4821)` → `4`, `countDigits(7)` → `1`.
  - **বাংলা:** string ছাড়া `while` দিয়ে digit গোনো। `0` দিলে কী হবে?

**Phase 7.6 — Divisor আর √n** ⬜
- **P7.6 · Divisor Pairs** 🟢 ⬜
  - 🌍 ৩৬টা চকলেট সমান ভাগে কতভাবে ভাগ করা যায়?
  - **EN:** Print all divisors of 36 as pairs `(i, 36 / i)` for `i` from 1 while `i * i <= 36`. → `(1,36) (2,18) (3,12) (4,9) (6,6)`
  - **বাংলা:** লক্ষ করো — √36 = 6-এর পরে জোড়াগুলো উল্টে আবার আসে। তাই prime check-এ √n পর্যন্ত যথেষ্ট।

### ★ মূল problem

#### ★ 7.1 · 1281. Subtract the Product and Sum of Digits of an Integer 🟢 Easy ⬜
🔗 [LC 1281](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/) (হুবহু — sumOfDigits-এর বড় ভাই) · কাছাকাছি: [LC 258 · Add Digits](https://leetcode.com/problems/add-digits/)
🌍 **Real-life:** barcode-এর check digit হিসাব — digit-গুলোর যোগফল/গুণফল।

**EN:** Given an integer number `n`, return the difference between the product of its digits and the sum of its digits.
```
Example 1: Input: n = 234    Output: 15
Explanation: Product of digits = 2 * 3 * 4 = 24, Sum of digits = 2 + 3 + 4 = 9, Result = 24 - 9 = 15
Example 2: Input: n = 4421   Output: 21
Explanation: Product = 32, Sum = 11, Result = 21
```
**Constraints:** `1 <= n <= 10^5`
**Function:** `var subtractProductAndSum = function (n) {}`

**বাংলা:** সংখ্যার digit-গুলোর গুণফল থেকে যোগফল বিয়োগ করো। **string-এ রূপান্তর নিষেধ।**
**🧠 ভাবনা:** দুটো জিনিস মনে রাখতে হবে (product, sum) — শুরুর value কত? (product-এর শুরু 0 দিলে কী হয়?) প্রতি ঘুরে শেষ digit নাও, তারপর বাদ দাও।
**⏱️ লক্ষ্য:** Time O(d) — d = digit সংখ্যা (≈ log₁₀ n) · Space O(1)

#### ★ 7.2 · 7. Reverse Integer 🟡 Medium ⬜
🔗 [LC 7](https://leetcode.com/problems/reverse-integer/) (হুবহু)
🌍 **Real-life:** ATM-এ PIN উল্টো করে দিলে alarm — PIN উল্টানো।

**EN:** Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.
```
Example 1: Input: x = 123    Output: 321
Example 2: Input: x = -123   Output: -321
Example 3: Input: x = 120    Output: 21
```
**Constraints:** `-2^31 <= x <= 2^31 - 1`
**Function:** `var reverse = function (x) {}`

**বাংলা:** সংখ্যার digit উল্টো করো; negative-এর চিহ্ন থাকবে; শেষের 0 চলে যাবে; 32-bit সীমা ছাড়ালে 0।
**🧠 ভাবনা:** নতুন সংখ্যা কীভাবে বানাব? (`result = result * 10 + lastDigit`) — ছোট example-এ হাতে করো: 123 → 3 → 32 → 321। negative-এর জন্য আলাদা কী করব?
**⏱️ লক্ষ্য:** Time O(d) · Space O(1)

#### ★ 7.3 · 9. Palindrome Number 🟢 Easy ⬜
🔗 [LC 9](https://leetcode.com/problems/palindrome-number/) (হুবহু)
🌍 **Real-life:** গাড়ির নম্বর প্লেট 1221 — সামনে-পেছনে একই?

**EN:** Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.
```
Example 1: Input: x = 121    Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2: Input: x = -121   Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
Example 3: Input: x = 10     Output: false
```
**Constraints:** `-2^31 <= x <= 2^31 - 1`
**Follow up:** Could you solve it without converting the integer to a string?
**Function:** `var isPalindrome = function (x) {}`

**বাংলা:** সংখ্যাটা উল্টালে কি একই থাকে? string ছাড়া করো।
**🧠 ভাবনা:** 7.2-এর reverse কাজে লাগাও — নতুন কী লাগবে? negative কি কখনো palindrome হয়?
**⏱️ লক্ষ্য:** Time O(d) · Space O(1)

#### ★ 7.4 · Is Prime 🟢 Easy ⬜
🔗 কাছাকাছি: [LC 204 · Count Primes](https://leetcode.com/problems/count-primes/) (December-এ sieve দিয়ে)
🌍 **Real-life:** password encryption (RSA) prime সংখ্যার উপর চলে।

**EN:** Return `true` if `n` is a prime number. First solve in O(n), then in O(√n). Explain in English why checking up to √n is enough.
```
Example 1: Input: n = 7   Output: true
Example 2: Input: n = 1   Output: false
Example 3: Input: n = 9   Output: false   (3 × 3)
```
**Function:** `var isPrime = function (n) {}`

**বাংলা:** n prime কিনা — প্রথমে 2 থেকে n−1 সব চেক, তারপর শুধু √n পর্যন্ত। 0, 1, 2 আলাদা ভাবো।
**🧠 ভাবনা:** P7.6-এর divisor জোড়া মনে করো — একটা ভাজক √n-এর বড় হলে, তার জোড়া কোথায়?
**⏱️ লক্ষ্য:** Time O(√n) · Space O(1)

#### ○ 7.5 · Armstrong Numbers ⬜
🔗 [LC 1134 · Armstrong Number](https://leetcode.com/problems/armstrong-number/) (premium)
🌍 153 = 1³ + 5³ + 3³ — অদ্ভুত সংখ্যা।
**EN:** Return all Armstrong numbers from 1 to n (a k-digit number equal to the sum of its digits each raised to the power k). **বাংলা:** কোন কোন helper লাগবে? (`countDigits`, `sumOfPowers`)

### 🔗 Numbers বোঝার জন্য আরো LeetCode
[1342 Number of Steps to Reduce a Number to Zero](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/) · [258 Add Digits](https://leetcode.com/problems/add-digits/) · [1523 Count Odd Numbers in an Interval Range](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/) · [2469 Convert the Temperature](https://leetcode.com/problems/convert-the-temperature/)

### 🚪 Gate — Topic 7 ⬜

---

## Day 6 · W1 D6 · শনি ১০ অক্টো — Topic 8: Basic Problem Solving ★ (৬টা মৌলিক কাজ) ⬜

**আজকের লক্ষ্য:** Week 1-এর সবচেয়ে জরুরি দিন। "কোথা থেকে শুরু করব" — তার প্রথম পূর্ণ উত্তর।
**আজ থেকে:** প্রতিটা ★ problem-এ Blank Editor header comment লিখে শুরু (`00-framework/01-master-framework.md` অংশ ৫)।

**🧠 এই topic-এ কীভাবে ভাবব — প্রায় সব easy problem এই ৬ কাজের কোনোটা বা মিশ্রণ:**

| কাজ | চেনার শব্দ | Loop-এর আগে |
|---|---|---|
| Counting | "কতগুলো", "how many" | `let count = 0` |
| Accumulation | "যোগফল", "total" | `let sum = 0` |
| Min / Max | "সবচেয়ে বড়/ছোট" | `let max = -Infinity` বা `arr[0]` |
| Search | "প্রথম", "আছে কি", "index" | early `return` বা `let found = -1` |
| Build | "নতুন array/string ফেরত" | `const result = []` |
| Track two things | "দ্বিতীয় বৃহত্তম", "আগের আর এখনকার" | `let first = -Infinity, second = -Infinity` |

### 📘 Concept phases + ছোট problem

**Phase 8.1 — Input → Process → Output** ⬜
code-এর আগে লেখো: input type, output type, একটা example।
- **P8.1 · Write the Header Only** 🟢 ⬜ — 🌍 রান্নার আগে recipe পড়া। **EN:** For "return the average of an array", write only: input type, output type, one example, and what to return for `[]`. No code.

**Phase 8.2 — ৬ কাজ চেনা** ⬜
- **P8.2 · Name the Task** 🟢 ⬜ — **EN:** For each statement, name the task(s) only, no code: (a) how many students passed (b) total bill (c) cheapest item (d) does the list contain "admin" (e) all names in uppercase (f) the top two scores. **বাংলা:** প্রতিটা বাক্য পড়ে বলো কোন কাজ — এটাই pattern চেনার প্রথম ধাপ।

**Phase 8.3 — শুরুর value-এর ফাঁদ** ⬜
- **P8.3 · All Negative Max** 🟢 ⬜ — 🌍 শীতের রাতের তাপমাত্রা সব মাইনাসে। **EN:** Run a max-finder that starts at `max = 0` on `[-5, -2, -9]`. What's wrong? Fix it. → should be `-2`

**Phase 8.4 — Dry-run টেবিল** ⬜
- **P8.4 · Trace Table** 🟢 ⬜ — **EN:** For count-evens on `[3, 8, 5, 2]`, fill a table `| num | even? | count |` by hand before running. **বাংলা:** হাতে trace করা — interview-এ test-এর সবচেয়ে শক্তিশালী উপায়।

### ★ মূল problem

#### ★ 8.1 · Largest Number 🟢 Easy ⬜
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** মাসের সবচেয়ে বড় বিক্রির দিন।

**EN:** Return the largest number in `nums` without using `Math.max` or `sort`. If `nums` is empty, return `null` (ask the interviewer first).
```
Example 1: Input: nums = [3, 9, 2]      Output: 9
Example 2: Input: nums = [-5, -2, -9]   Output: -2
Example 3: Input: nums = []             Output: null
```
**Function:** `var largest = function (nums) {}`

**বাংলা:** সবচেয়ে বড় সংখ্যা। সব negative হলে? খালি হলে কী ফেরত দেবে — জিজ্ঞেস করো।
**🧠 ভাবনা:** ৬ কাজের কোনটা? শুরুর value কী হলে সব negative-এও ঠিক থাকে?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ 8.2 · Count Vowels and Consonants 🟢 Easy ⬜
🔗 কাছাকাছি: [LC 1704 · Determine if String Halves Are Alike](https://leetcode.com/problems/determine-if-string-halves-are-alike/)
🌍 **Real-life:** নাম সুন্দর শোনায় কিনা — ভাষাবিদরা vowel/consonant গোনে।

**EN:** Return `{ vowels, consonants }` counts for string `s`. Ignore spaces and digits; treat uppercase and lowercase the same.
```
Example 1: Input: s = "Hello World"   Output: { vowels: 3, consonants: 7 }
Example 2: Input: s = "Sky 2026"      Output: { vowels: 0, consonants: 3 }
```
**Function:** `var countLetters = function (s) {}`

**বাংলা:** string-এ vowel আর consonant আলাদা গোনো; space, digit বাদ; বড়-ছোট হাতের অক্ষর একই।
**🧠 ভাবনা:** দুটো counter। একটা অক্ষর "letter" কিনা কীভাবে বুঝব? vowel কিনা দ্রুত বুঝতে কী রাখব (`"aeiou".includes`)?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ 8.3 · Second Largest Distinct 🟡 Medium ⬜
🔗 কাছাকাছি: [LC 414 · Third Maximum Number](https://leetcode.com/problems/third-maximum-number/) · [LC 1796 · Second Largest Digit in a String](https://leetcode.com/problems/second-largest-digit-in-a-string/)
🌍 **Real-life:** দৌড় প্রতিযোগিতায় দ্বিতীয় স্থানের সময় (একই সময়ের দুজন হলে একজনই ধরা হবে)।

**EN:** Return the second largest **distinct** value in `nums` in **one pass**. If it doesn't exist, return `null`.
```
Example 1: Input: nums = [5, 5, 4]   Output: 4
Example 2: Input: nums = [3, 3]      Output: null
Example 3: Input: nums = [1, 7, 3, 7] Output: 3
```
**Function:** `var secondLargest = function (nums) {}`

**বাংলা:** দ্বিতীয় বৃহত্তম আলাদা সংখ্যা — এক loop-এ। না থাকলে `null`।
**🧠 ভাবনা:** দুটো জিনিস track (first, second)। নতুন সংখ্যা first-এর চেয়ে বড় হলে কী কী বদলায় (ক্রম!)? first-এর সমান হলে কী করব?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ 8.4 · 1446. Consecutive Characters (Longest Equal Run) 🟢 Easy ⬜
🔗 [LC 1446](https://leetcode.com/problems/consecutive-characters/) (হুবহু string version) · [LC 485 · Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/) (কাছাকাছি)
🌍 **Real-life:** টানা কত দিন বৃষ্টি হলো — সবচেয়ে লম্বা streak।

**EN:** The power of the string is the maximum length of a non-empty substring that contains only one unique character. Given a string `s`, return the power of `s`. (Then do the same for an array: `[1,1,2,2,2,3]` → `3`.)
```
Example 1: Input: s = "leetcode"              Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
Example 2: Input: s = "abbcccddddeeeeedcba"   Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
```
**Constraints:** `1 <= s.length <= 500`
**Function:** `var maxPower = function (s) {}`

**বাংলা:** পাশাপাশি একই অক্ষরের সবচেয়ে লম্বা ধারা কত লম্বা।
**🧠 ভাবনা:** দুটো জিনিস — "এখনকার ধারা কত লম্বা" আর "সবচেয়ে লম্বা কত"। আগেরটার সাথে মিললে কী, না মিললে কী?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ 8.5 · First Negative Balance (unseen) 🟡 Medium ⬜
🔗 কাছাকাছি: [LC 1732 · Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/)
🌍 **Real-life:** bKash/bank account — প্রথম কোন দিন balance মাইনাসে গেল?

**EN:** You start with balance 0. `transactions[i]` is the money added (positive) or spent (negative) on day `i`. Return the first day index where the balance becomes negative, or `-1` if it never does.
```
Example 1: Input: transactions = [100, -50, -80, 30]   Output: 2
Explanation: Balance after each day: 100, 50, -30 → negative on day 2.
Example 2: Input: transactions = [10, -5, 20]          Output: -1
```
**Function:** `var firstNegativeDay = function (transactions) {}`

**বাংলা:** শুরু 0 টাকা; প্রতিদিন টাকা আসে বা যায়। প্রথম কোন দিন balance শূন্যের নিচে নামল? না নামলে -1।
**🧠 ভাবনা:** ৬ কাজের কোন দুটোর মিশ্রণ? (Accumulation + Search) নিজে চেনো — এটাই আজকের আসল অনুশীলন।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

### 🔗 Basic Problem Solving বোঝার জন্য আরো LeetCode
[485 Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/) · [1732 Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/) · [414 Third Maximum Number](https://leetcode.com/problems/third-maximum-number/) · [1491 Average Salary Excluding the Minimum and Maximum Salary](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

### 🚪 Gate — Topic 8 ⬜

---

## Day 7 · W1 D7 · রবি ১১ অক্টো — Revision · Anti-Freeze Drill · Week Review ⬜

**আজকের লক্ষ্য:** সপ্তাহের ★ গুলো ফাঁকা editor থেকে আবার + মাথা ফাঁকা হলে কী করব, হাতে-কলমে।

### 🔁 Re-solve (ফাঁকা editor, timer — প্রতিটা ≤ ১০ মিনিট)
- ⬜ 4.1 Fizz Buzz · ⬜ 5.4 First Descent · ⬜ 7.2 Reverse Integer · ⬜ 8.3 Second Largest · ⬜ 8.5 First Negative Balance

### 🧊 Anti-Freeze Drill (২০ মিনিট)
লক্ষ্য solve করা না — লক্ষ্য হলো `01-master-framework.md` অংশ ৪-এর ধাপগুলো editor-এ **comment হিসেবে লেখা**, তারপর code।

#### ★ D7.1 · 674. Longest Continuous Increasing Subsequence 🟢 Easy ⬜
🔗 [LC 674](https://leetcode.com/problems/longest-continuous-increasing-subsequence/) (হুবহু)
🌍 **Real-life:** দোকানের বিক্রি টানা কত দিন বাড়ল — সবচেয়ে লম্বা উত্থানের ধারা।

**EN:** Given an unsorted array of integers `nums`, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
```
Example 1: Input: nums = [1,3,5,4,7]   Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
Example 2: Input: nums = [2,2,2,2,2]   Output: 1
Explanation: [2] — strictly increasing requires each next element to be bigger.
```
**Constraints:** `1 <= nums.length <= 10^4`
**Function:** `var findLengthOfLCIS = function (nums) {}`

**বাংলা:** পাশাপাশি টানা বাড়তে থাকা অংশের সবচেয়ে বড় দৈর্ঘ্য। (`[3,4,5,2,6,7,8,1]` → `4`)
**🧠 ভাবনা:** 8.4-এর সাথে মিল দেখছ? শুধু শর্তটা বদলেছে — "সমান" থেকে "বড়"। এটাই pattern!
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ○ D7.2 · Gap Between First and Second ⬜
🌍 ক্লাসের প্রথম আর দ্বিতীয় স্থানের নম্বরের পার্থক্য। **EN:** Return `first - second` (distinct). Two students with the same top score? Decide and write it down. **বাংলা:** 8.3-এর ব্যবহার।

### 📝 Week Review (`TRACKER.md`-এ)
1. Loop Template কি এখন স্বয়ংক্রিয়? কোন problem-এ "loop-এর আগে কী" ভাবতে দেরি হয়েছে?
2. কোন JS ফাঁদে পড়েছি (reference, `??`, `%`, `typeof`)?
3. আত্মবিশ্বাস ১–১০।

**বলো (English, ৬০ সেকেন্ড):** সপ্তাহের যেকোনো একটা problem — `05-interview-communication.md` অংশ ৩-এর কাঠামোয়।

---

# 📘 WEEK 2 — Big-O · Strings · Arrays (শুরু)

**সপ্তাহের লক্ষ্য:**
1. যেকোনো code দেখে **time আর space নিজে হিসাব** করা — মুখস্থ না, গুনে।
2. String-এর interview problem-এ (palindrome, anagram, reverse) একাধিক উপায় লিখে তুলনা করা।
3. Array-র কোন method আসল array বদলায়, আর কোনটার লুকানো খরচ O(n) — জানা।

**আজ থেকে প্রতিটা problem-এর শেষে বাধ্যতামূলক:**
```js
// Time:  O(?) because ...
// Space: O(?) because ...
// If n becomes 10x larger, runtime becomes ~?x larger.
```

---

## Day 8 · W2 D1 · সোম ১২ অক্টো — Topic 9: Big-O ১ — Time Complexity ★ ⬜

**পড়বে:** `00-framework/03-complexity-guide.md` — অংশ ১, ২, ৩।

**🧠 এই topic-এ কীভাবে ভাবব:**
- আসল প্রশ্ন একটাই: **"n ১০ গুণ হলে কাজ কত গুণ বাড়ে?"**
- ৫ ধাপ: **n কী** → প্রতিটা loop **কতবার** → nested = **গুণ**, পরপর = **যোগ** → লুকানো খরচ → constant বাদ।
- nested loop দেখলেই O(n²) না — ভেতরের loop **মোট** কতবার চলে, সেটা গোনো।

### 📘 Concept phases + ছোট problem

**Phase 9.1 — "n ১০ গুণ হলে?"** ⬜
- **P9.1 · Count by Hand** 🟢 ⬜ — 🌍 ১০ জন অতিথিকে একবার করে চা দেওয়া বনাম প্রত্যেকে প্রত্যেকের সাথে হাত মেলানো। **EN:** For n = 10 and n = 100, count how many times `count++` runs in (a) a single loop to n, (b) two nested loops to n. **বাংলা:** কোনটা ১০ গুণ বাড়ল, কোনটা ১০০ গুণ?

**Phase 9.2 — Single loop বনাম nested loop** ⬜
- **P9.2 · Pair Count** 🟢 ⬜ — **EN:** How many times does the inner line run for `for i in 0..n-1, for j in i+1..n-1` when n = 5? Derive `n(n-1)/2`. → `10`

**Phase 9.3 — O(log n): বারবার অর্ধেক** ⬜
- **P9.3 · Halving Count** 🟢 ⬜ — 🌍 অভিধানে শব্দ খোঁজা — প্রতিবার অর্ধেক বাদ। **EN:** How many times does `for (let i = 1; i < n; i *= 2)` run for n = 8, 16, 1024? → `3, 4, 10`

**Phase 9.4 — পরপর loop = যোগ (n + m)** ⬜
- **P9.4** 🟢 ⬜ — **EN:** One loop over `a` (length n) then one loop over `b` (length m). Is it O(n·m) or O(n + m)? Why?

**Phase 9.5 — সব nested O(n²) না** ⬜
- **P9.5** 🟢 ⬜ — **EN:** `for i < n, for j < 5` → complexity? And a `while (j < n) j++` inside a `for` where `j` never resets → complexity? → `O(n)`, `O(n)` (মোট কতবার!)

**Phase 9.6 — Recursion: tree আঁকো** ⬜
- **P9.6** 🟢 ⬜ — 🌍 প্রতিটা মানুষ ২ জনকে খবর দেয়। **EN:** Draw the call tree of `f(n) = f(n-1) + f(n-1)` for n = 3. Count the calls. → `7` (≈ 2ⁿ)

### ★ মূল problem (আজকের "problem" = exercise)

#### ★ B1 · Complexity of 8 Snippets ⬜
🌍 code review-এ senior জিজ্ঞেস করল: "এটা ১ লাখ user-এ চলবে?"
**EN:** For each snippet, write Time and Space with the reason.
```js
// (a)
for (let i = 0; i < n; i++) total += arr[i];
// (b)
for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) count++;
// (c)
for (let i = 0; i < n; i++) for (let j = i; j < n; j++) count++;
// (d)
for (let i = 1; i < n; i *= 2) count++;
// (e)
for (let i = 0; i < n; i++) count++;
for (let j = 0; j < m; j++) count++;
// (f)
for (let i = 0; i < n; i++) for (let j = 0; j < 5; j++) count++;
// (g)
function f(n) { if (n <= 1) return 1; return f(n - 1) + f(n - 1); }
// (h)
function g(n) { if (n <= 1) return 1; return g(n / 2) + 1; }
```
**বাংলা:** প্রতিটা snippet-এর Time আর Space লেখো, আর **কেন** — গুনে দেখাও।

#### ★ B2 · Your Week 1 Problems ⬜
**EN:** Write Time/Space with reasons for 8.1, 8.3, 8.4, 7.4, 5.2. **বাংলা:** নিজের লেখা code-এর complexity — কোন loop কতবার চলে?

#### ○ B3 · Operations for n = 1,000,000 ⬜
**EN:** Estimate operations for O(n), O(n log n), O(n²) at n = 10⁶. Which runs in ~1 second (≈10⁸ ops)? **বাংলা:** কোনটা ১ সেকেন্ডে চলবে?

**বলো:** *"The outer loop runs n times and the inner loop runs n times for each, so it's O(n²). If n doubles, the work roughly quadruples."*

---

## Day 9 · W2 D2 · মঙ্গল ১৩ অক্টো — Topic 9: Big-O ২ — Space · লুকানো খরচ · Constraint ★ ⬜

**পড়বে:** `03-complexity-guide.md` — অংশ ৪, ৫, ৬, ৭।

**🧠 এই topic-এ কীভাবে ভাবব:**
- Space = **আমি নতুন কী বানালাম?** (array, object, Map, recursion stack) — input গোনা হয় না।
- loop-এর ভেতরে `includes`, `indexOf`, `shift`, `slice`, `[...arr]` দেখলেই সন্দেহ: **লুকানো O(n)**।
- constraint পড়ো: n ≤ 10⁵ → O(n²) চলবে না → hashing/two pointers/sort খুঁজতে হবে।

### 📘 Concept phases + ছোট problem

**Phase 9.7 — Auxiliary space** ⬜
- **P9.7** 🟢 ⬜ — **EN:** Space of (a) summing an array with one variable, (b) building a doubled copy, (c) a Set of all elements. → `O(1), O(n), O(n)`

**Phase 9.8 — Recursion stack = সর্বোচ্চ গভীরতা** ⬜
- **P9.8** 🟢 ⬜ — 🌍 থালার উপর থালা — কতগুলো একসাথে জমে? **EN:** Space of recursive `sumTo(n)`? → `O(n)` (n frames at once)

**Phase 9.9 — JS built-in-এর খরচ** ⬜
- **P9.9 · Cost Table** 🟢 ⬜ — **EN:** Write the cost of `push, pop, shift, unshift, includes, slice, sort, Map.get`. → `1, 1, n, n, n, k, n log n, 1`

**Phase 9.10 — Constraint → লক্ষ্য** ⬜
- **P9.10** 🟢 ⬜ — **EN:** n ≤ 20, n ≤ 2000, n ≤ 2×10⁵, n ≤ 10⁹ — slowest allowed complexity for each? → `2ⁿ, n², n log n, log n`

### ★ মূল problem

#### ★ B4 · 217. Contains Duplicate 🟢 Easy ⬜
🔗 [LC 217](https://leetcode.com/problems/contains-duplicate/) (হুবহু)
🌍 **Real-life:** signup-এ একই email দুবার দেওয়া হয়েছে কিনা।

**EN:** Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct. First analyze this slow version, then bring it down to O(n) with a `Set`:
```js
function hasDuplicate(arr) {
  const seen = [];
  for (const x of arr) {
    if (seen.includes(x)) return true;
    seen.push(x);
  }
  return false;
}
```
```
Example 1: Input: nums = [1,2,3,1]            Output: true
Example 2: Input: nums = [1,2,3,4]            Output: false
Example 3: Input: nums = [1,1,1,3,3,4,3,2,4,2] Output: true
```
**Constraints:** `1 <= nums.length <= 10^5`
**Function:** `var containsDuplicate = function (nums) {}`

**বাংলা:** কোনো সংখ্যা দুবার আছে কি? দেওয়া code-এর complexity কত (কেন), তারপর Set দিয়ে O(n)।
**🧠 ভাবনা:** `includes` loop-এর ভেতরে — নিজে কতবার চলে? constraint 10⁵ — O(n²) চলবে?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ B5 · Find the Hidden Cost ⬜
🌍 code দেখতে এক loop-এর, কিন্তু আসলে ধীর।
**EN:** Give the complexity of each and explain the hidden cost.
```js
function process(queue) { while (queue.length) { const x = queue.shift(); /* O(1) work */ } }
function prefixes(s) { const out = []; for (let i = 1; i <= s.length; i++) out.push(s.slice(0, i)); return out; }
```
**বাংলা:** `shift` আর `slice`-এর ভেতরের খরচ গুনে মোট complexity।

#### ★ B6 · Guess From Constraints ⬜
**EN:** (a) n ≤ 20 (b) n ≤ 2000 (c) n ≤ 2 × 10⁵ (d) n ≤ 10⁹ — slowest complexity that still passes, and one possible pattern for each.

#### ○ B7 · Recursive Sum ⬜
**EN:** Write `sum(arr, i)` recursively. Time and Space? Compare with the iterative version. **বাংলা:** recursion-এর space কেন O(n)?

**বলো:** *"`includes` inside the loop is O(n) on its own, so the whole thing is O(n²). Using a Set makes each lookup O(1), bringing it down to O(n) time but O(n) space."*

### 🚪 Gate — Topic 9 (Big-O) ⬜

---

## Day 10 · W2 D3 · বুধ ১৪ অক্টো — Topic 10: Strings ১ — ভিত্তি · Methods · Character code ★ ⬜

**Interview-এ যেভাবে আসে:** palindrome, reverse, anagram, শব্দ গোনা — প্রায় প্রতিটা screening round-এ একটা string problem।

**🧠 এই topic-এ কীভাবে ভাবব:**
- string **immutable** — বদলাতে হলে array বানাও (`[...s]`), কাজ শেষে `join`।
- দুই প্রান্ত থেকে তুলনা? → **two pointers** (left, right)।
- শুধু অক্ষর/সংখ্যা গুরুত্বপূর্ণ? → skip করার helper (`isAlphaNumeric`)।
- শুধু ছোট হাতের a–z? → **২৬ ঘরের array** (`ch.charCodeAt(0) - 97`)।

### 📘 Concept phases + ছোট problem

**Phase 10.1 — Immutable** ⬜
- **P10.1** 🟢 ⬜ — 🌍 ছাপা বইয়ের অক্ষর বদলানো যায় না, নতুন কপি ছাপতে হয়। **EN:** `const s = "Hello"; s[0] = "J"; console.log(s);` → `"Hello"`. Then produce `"Jello"` correctly.

**Phase 10.2 — index · `at` · `slice` · `substring`** ⬜
- **P10.2 · File Extension** 🟢 ⬜ — 🌍 upload করা file-এর extension। **EN:** `getExt("photo.png")` → `"png"`, `getExt("archive.tar.gz")` → `"gz"`. **বাংলা:** শেষ `.`-এর পরের অংশ (`lastIndexOf` + `slice`)।

**Phase 10.3 — `split` / `join`** ⬜
- **P10.3 · Slug** 🟢 ⬜ — 🌍 blog post-এর URL। **EN:** `toSlug("Hello World JS")` → `"hello-world-js"`.

**Phase 10.4 — Character code আর ২৬ ঘরের array** ⬜
- **P10.4 · Letter Position** 🟢 ⬜ — **EN:** `"a"` → `0`, `"z"` → `25` using `charCodeAt`. Then `String.fromCharCode(97 + 2)` → `"c"`.

**Phase 10.5 — তুলনা আর ফাঁদ** ⬜
- **P10.5** 🟢 ⬜ — **EN:** Predict `"10" < "9"`, `10 < 9`, `"apple" < "banana"`. → `true false true`. **বাংলা:** string তুলনা অক্ষর ধরে ধরে হয় (lexicographic)।

**Phase 10.6 — String বানানো: `+=` বনাম array + `join`** ⬜
- **P10.6 · Repeat Dash** 🟢 ⬜ — **EN:** Build `"-*-*-*"` for n = 3 using an array and `join("")`.

**Phase 10.7 — Regex basic + নিজের helper** ⬜
- **P10.7 · isAlphaNumeric** 🟢 ⬜ — **EN:** Write `isAlphaNumeric(ch)` **without regex**, using char codes (`0-9`, `a-z`, `A-Z`). `"a"` → `true`, `","` → `false`. Then the regex way: `/[a-z0-9]/i.test(ch)`.

### ★ মূল problem

#### ★ S1 · 344. Reverse String 🟢 Easy ⬜
🔗 [LC 344](https://leetcode.com/problems/reverse-string/) (হুবহু)
🌍 **Real-life:** চিঠির লেখা আয়নায় দেখা।

**EN:** Write a function that reverses a string. The input string is given as an array of characters `s`. You must do this by modifying the input array **in-place** with O(1) extra memory.
```
Example 1: Input: s = ["h","e","l","l","o"]       Output: ["o","l","l","e","h"]
Example 2: Input: s = ["H","a","n","n","a","h"]   Output: ["h","a","n","n","a","H"]
```
**Constraints:** `1 <= s.length <= 10^5`
**Function:** `var reverseString = function (s) {}` (কিছু return করবে না — আসল array বদলাবে)

**বাংলা:** অক্ষরের array উল্টে দাও — নতুন array না বানিয়ে, আসলটাতেই। প্রথমে নতুন array দিয়ে (সহজ), তারপর দুই pointer দিয়ে in-place।
**🧠 ভাবনা:** হাতে করো: প্রথম আর শেষটা অদলবদল, তারপর দ্বিতীয় আর শেষের আগেরটা… কখন থামব? (Two Pointers-এর প্রথম স্বাদ)
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ S2 · 125. Valid Palindrome 🟢 Easy ⬜
🔗 [LC 125](https://leetcode.com/problems/valid-palindrome/) (হুবহু)
🌍 **Real-life:** "নয়ন" সামনে-পেছনে একই — শব্দ খেলার app।

**EN:** A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
```
Example 1: Input: s = "A man, a plan, a canal: Panama"   Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2: Input: s = "race a car"   Output: false
Explanation: "raceacar" is not a palindrome.
Example 3: Input: s = " "   Output: true
Explanation: After removing non-alphanumeric characters, s is "" — an empty string reads the same forward and backward.
```
**Constraints:** `1 <= s.length <= 2 * 10^5`
**Function:** `var isPalindrome = function (s) {}`

**বাংলা:** শুধু অক্ষর আর সংখ্যা ধরে, বড়-ছোট হাতের পার্থক্য বাদ দিয়ে — সামনে-পেছনে একই? দুইভাবে: (ক) পরিষ্কার string বানিয়ে উল্টে তুলনা (খ) দুই pointer, নতুন string ছাড়া। **তুলনার টেবিল বানাও।**
**🧠 ভাবনা:** (খ)-তে বাজে অক্ষর পেলে কোন pointer সরাব? P10.7-এর helper কাজে লাগাও।
**⏱️ লক্ষ্য:** (ক) Time O(n) · Space O(n) · (খ) Time O(n) · Space O(1)

#### ○ S3 · Capitalize Words 🟢 ⬜
🔗 কাছাকাছি: [LC 2129 · Capitalize the Title](https://leetcode.com/problems/capitalize-the-title/)
🌍 খবরের শিরোনাম। **EN:** `capitalizeWords("hello world")` → `"Hello World"` — once with `split/map/join`, once without. **বাংলা:** প্রতিটা শব্দের প্রথম অক্ষর বড় হাতের।

### 🔗 Strings বোঝার জন্য আরো LeetCode
[58 Length of Last Word](https://leetcode.com/problems/length-of-last-word/) · [709 To Lower Case](https://leetcode.com/problems/to-lower-case/) · [1108 Defanging an IP Address](https://leetcode.com/problems/defanging-an-ip-address/) · [2114 Maximum Number of Words Found in Sentences](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/)

**বলো:** *"I use two pointers from both ends and skip non-alphanumeric characters, so I don't need to build a new string. That's O(n) time and O(1) extra space."*

---

## Day 11 · W2 D4 · বৃহস্পতি ১৫ অক্টো — Topic 10: Strings ২ — Frequency · Anagram · Prefix ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- "কতবার আছে", "একই অক্ষর একই সংখ্যায়" → **frequency count** (object / Map / ২৬-array)।
- anagram = **একই count**; sort করে তুলনা (n log n) বনাম count (n)।
- সব string-এর **সাধারণ শুরু** → প্রথম string ধরে column ধরে ধরে মেলাও।
- substring = **পাশাপাশি**; subsequence = **ক্রম ঠিক, ফাঁক থাকতে পারে**।

### 📘 Concept phases + ছোট problem

**Phase 10.8 — Frequency counting তিনভাবে** ⬜
- **P10.8 · Char Count** 🟢 ⬜ — 🌍 Scrabble খেলায় কোন অক্ষর কয়টা। **EN:** Count characters of `"hello"` using (a) an object (b) a `Map` (c) a 26-length array. → `h1 e1 l2 o1`

**Phase 10.9 — Anagram ধারণা** ⬜
- **P10.9** 🟢 ⬜ — **EN:** Are `"listen"` and `"silent"` anagrams? Prove it by sorting both, then by comparing counts.

**Phase 10.10 — Substring বনাম subsequence** ⬜
- **P10.10** 🟢 ⬜ — **EN:** For `"abcde"`: is `"bcd"` a substring? `"ace"`? Is `"ace"` a subsequence? → `yes, no, yes`

**Phase 10.11 — Normalization** ⬜
- **P10.11** 🟢 ⬜ — 🌍 search box-এ "  JavaScript! " আর "javascript" একই ধরা। **EN:** `normalize("  Hello, World! ")` → `"helloworld"`.

### ★ মূল problem

#### ★ S4 · 242. Valid Anagram 🟢 Easy ⬜
🔗 [LC 242](https://leetcode.com/problems/valid-anagram/) (হুবহু)
🌍 **Real-life:** শব্দ-ধাঁধা খেলা — অক্ষর সাজিয়ে অন্য শব্দ।

**EN:** Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.
```
Example 1: Input: s = "anagram", t = "nagaram"   Output: true
Example 2: Input: s = "rat", t = "car"           Output: false
```
**Constraints:** `1 <= s.length, t.length <= 5 * 10^4` · `s` and `t` consist of lowercase English letters.
**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution?
**Function:** `var isAnagram = function (s, t) {}`

**বাংলা:** দুটো string-এ কি একই অক্ষর একই সংখ্যায় আছে? তিনভাবে: (ক) sort (খ) Map count (গ) ২৬-ঘরের array। **টেবিল: time/space/কখন।** Unicode হলে কোনটা চলবে না?
**🧠 ভাবনা:** দৈর্ঘ্য আলাদা হলে? এক string-এ +1, অন্যটায় −1 করলে শেষে কী দেখতে হবে?
**⏱️ লক্ষ্য:** count version Time O(n) · Space O(1) (২৬ ঘর)

#### ★ S5 · 387. First Unique Character in a String 🟢 Easy ⬜
🔗 [LC 387](https://leetcode.com/problems/first-unique-character-in-a-string/) (হুবহু)
🌍 **Real-life:** লাইনে প্রথম কোন customer একবারই এসেছে।

**EN:** Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.
```
Example 1: Input: s = "leetcode"       Output: 0
Example 2: Input: s = "loveleetcode"   Output: 2
Example 3: Input: s = "aabb"           Output: -1
```
**Constraints:** `1 <= s.length <= 10^5` · only lowercase English letters.
**Function:** `var firstUniqChar = function (s) {}`

**বাংলা:** প্রথম যে অক্ষর পুরো string-এ একবারই আছে — তার index; না থাকলে -1।
**🧠 ভাবনা:** এক pass-এ কি জানা যায় অক্ষরটা পরে আবার আসবে কিনা? না → আগে সব গুনে নাও (pass ১), তারপর ক্রম ধরে খোঁজো (pass ২)।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1) (২৬ অক্ষর)

#### ★ S6 · 14. Longest Common Prefix 🟢 Easy ⬜
🔗 [LC 14](https://leetcode.com/problems/longest-common-prefix/) (হুবহু)
🌍 **Real-life:** phone-এর contact search — "Rah" লিখলে Rahim, Rahul, Rahman।

**EN:** Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `""`.
```
Example 1: Input: strs = ["flower","flow","flight"]   Output: "fl"
Example 2: Input: strs = ["dog","racecar","car"]      Output: ""
Explanation: There is no common prefix among the input strings.
```
**Constraints:** `1 <= strs.length <= 200` · `0 <= strs[i].length <= 200`
**Function:** `var longestCommonPrefix = function (strs) {}`

**বাংলা:** সব শব্দের শুরুর সাধারণ অংশ। একটা শব্দ হলে? খালি string থাকলে?
**🧠 ভাবনা:** প্রথম শব্দের প্রতিটা অক্ষর ধরে — বাকি সবার একই জায়গায় কি একই অক্ষর? কখন থামব?
**⏱️ লক্ষ্য:** Time O(S) — S = সব অক্ষরের মোট · Space O(1)

#### ★ S7 · 151. Reverse Words in a String 🟡 Medium ⬜
🔗 [LC 151](https://leetcode.com/problems/reverse-words-in-a-string/) (হুবহু)
🌍 **Real-life:** ইংরেজি থেকে এমন ভাষায় অনুবাদ যেখানে শব্দের ক্রম উল্টো।

**EN:** Given an input string `s`, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space. The returned string should not contain leading or trailing spaces or multiple spaces between words.
```
Example 1: Input: s = "the sky is blue"     Output: "blue is sky the"
Example 2: Input: s = "  hello world  "     Output: "world hello"
Example 3: Input: s = "a good   example"    Output: "example good a"
```
**Constraints:** `1 <= s.length <= 10^4` · there is at least one word.
**Function:** `var reverseWords = function (s) {}`

**বাংলা:** শব্দের ক্রম উল্টাও; বাড়তি space সব বাদ। প্রথমে built-in দিয়ে, তারপর **`split` ছাড়া** নিজে শব্দ খুঁজে।
**🧠 ভাবনা (ভাঙতে শেখো):** দুটো ছোট কাজ — (১) শব্দগুলো খুঁজে বের করা (২) উল্টো ক্রমে জোড়া। (১)-এ: শব্দ কোথায় শুরু, কোথায় শেষ?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ○ S8 · 205. Isomorphic Strings 🟢 ⬜
🔗 [LC 205](https://leetcode.com/problems/isomorphic-strings/) (হুবহু)
🌍 গোপন কোড — প্রতিটা অক্ষর একটা নির্দিষ্ট অক্ষরে বদলায়।
**EN:** Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`; no two characters may map to the same character. `"egg","add"` → `true`; `"foo","bar"` → `false`; `"paper","title"` → `true`.
**বাংলা:** অক্ষর বদলে কি একটা থেকে অন্যটা পাওয়া যায়? দুই দিকের mapping কেন লাগে?

#### ○ S9 · String Compression 🟢 ⬜
🔗 কাছাকাছি: [LC 443 · String Compression](https://leetcode.com/problems/string-compression/) (ওটা in-place, length ফেরত দেয়)
🌍 file zip করা। **EN:** `"aabcccccaaa"` → `"a2b1c5a3"`; if not shorter, return the original. **বাংলা:** পাশাপাশি একই অক্ষর গুনে লেখো। (W1-এর 8.4-এর আত্মীয়!)

#### ○ S10 · 383. Ransom Note 🟢 ⬜
🔗 [LC 383](https://leetcode.com/problems/ransom-note/) (হুবহু)
🌍 পত্রিকা কেটে অক্ষর সাজিয়ে চিঠি।
**EN:** Return `true` if `ransomNote` can be constructed using the letters from `magazine` (each letter used once). `"a","b"` → `false`; `"aa","ab"` → `false`; `"aa","aab"` → `true`.
**বাংলা:** magazine-এর অক্ষর দিয়ে note বানানো যাবে?

**বলো:** *"Sorting both strings works in O(n log n). Counting characters is O(n), and if the input is only lowercase letters, a fixed array of 26 makes the space O(1)."*

### 🚪 Gate — Topic 10 (Strings) ⬜

---

## Day 12 · W2 D5 · শুক্র ১৬ অক্টো — Topic 11: Arrays ১ — ভিত্তি · Mutating টেবিল · খরচ ★ ⬜

**Interview-এ যেভাবে আসে:** "in-place করো", "extra space ছাড়া", "একবার loop-এ" — এই শর্তগুলোই difficulty বাড়ায়।

**🧠 এই topic-এ কীভাবে ভাবব:**
- এই method কি **আসল array বদলায়**? (input বদলানো যাবে কিনা — interviewer-কে জিজ্ঞেস)
- loop-এর ভেতরে `shift/unshift/splice/includes`? → লুকানো O(n)।
- in-place-এ লিখতে গিয়ে **দরকারি value মুছে যাচ্ছে**? → পেছন থেকে লেখো।
- একটা জিনিস গাণিতিকভাবে বের করা যায়? (যোগফলের সূত্র)

### 📘 Concept phases + ছোট problem

**Phase 11.1 — Array বানানো** ⬜
- **P11.1 · Seats** 🟢 ⬜ — 🌍 সিনেমা হলের ১০টা সিট নম্বর। **EN:** Create `[1, 2, ..., 10]` with `Array.from({ length: 10 }, (_, i) => i + 1)` and an array of five zeros with `fill`.

**Phase 11.2 — 2D array-র ফাঁদ** ⬜
- **P11.2 · Shared Rows** 🟢 ⬜ — **EN:** `const grid = new Array(2).fill([]); grid[0].push(1);` Predict `grid`. → `[[1],[1]]`. Fix with `Array.from`. **বাংলা:** reference-এর ফাঁদ (Topic 1!) এখানে ফিরে এল।

**Phase 11.3 — Mutating বনাম non-mutating** ⬜
| আসল array বদলায় | নতুন array দেয় |
|---|---|
| `push pop shift unshift splice sort reverse fill` | `slice map filter concat toSorted toReversed with` |
- **P11.3 · Sort Trap** 🟢 ⬜ — **EN:** Predict `[10, 9, 1, 2].sort()`. → `[1, 10, 2, 9]` (string হিসেবে!). Fix with `(a, b) => a - b`.

**Phase 11.4 — `slice` বনাম `splice`** ⬜
- **P11.4** 🟢 ⬜ — **EN:** `const a = [1,2,3,4,5]`; print `a.slice(1, 3), a` then `a.splice(1, 2), a`. → `[2,3] [1,2,3,4,5]`, `[2,3] [1,4,5]`

**Phase 11.5 — Search methods** ⬜
- **P11.5** 🟢 ⬜ — **EN:** Predict `[NaN].includes(NaN)` and `[NaN].indexOf(NaN)`. → `true -1`. Use `find` to get the first user with `age > 18`.

**Phase 11.6 — Destructuring আর swap** ⬜
- **P11.6** 🟢 ⬜ — **EN:** Swap `arr[0]` and `arr[2]` in one line: `[arr[0], arr[2]] = [arr[2], arr[0]]`. Also `const [first, ...rest] = [1,2,3]`.

**Phase 11.7 — Spread copy = shallow** ⬜
- **P11.7** 🟢 ⬜ — **EN:** `const nested = [[1], [2]]; const c = [...nested]; c[0].push(9);` Predict `nested`. → `[[1,9],[2]]`

### ★ মূল problem

#### ★ A1 · 268. Missing Number 🟢 Easy ⬜
🔗 [LC 268](https://leetcode.com/problems/missing-number/) (হুবহু)
🌍 **Real-life:** রোল কল — ০ থেকে n পর্যন্ত রোলের একজন অনুপস্থিত।

**EN:** Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.
```
Example 1: Input: nums = [3,0,1]   Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is missing.
Example 2: Input: nums = [0,1]     Output: 2
Example 3: Input: nums = [9,6,4,2,3,5,7,0,1]   Output: 8
```
**Constraints:** `n == nums.length` · `1 <= n <= 10^4` · all numbers are unique.
**Follow up:** Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
**Function:** `var missingNumber = function (nums) {}`

**বাংলা:** ০ থেকে n-এর মধ্যে একটা সংখ্যা নেই — কোনটা? তিনভাবে: (ক) Set (খ) যোগফলের সূত্র `n(n+1)/2` (গ) XOR (শুধু চেষ্টা)। তুলনা।
**🧠 ভাবনা:** সব থাকলে যোগফল কত হতো? আসল যোগফল কত? পার্থক্যটাই কী?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ A2 · 88. Merge Sorted Array 🟢 Easy ⬜
🔗 [LC 88](https://leetcode.com/problems/merge-sorted-array/) (হুবহু)
🌍 **Real-life:** দুটো sorted লাইন (দুই শাখার কর্মী, বয়স অনুযায়ী) এক লাইনে মেলানো।

**EN:** You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, the number of elements in each. Merge `nums2` into `nums1` as one sorted array **in-place**. `nums1` has a length of `m + n`, where the last `n` elements are `0` and should be ignored.
```
Example 1: Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
           Output: [1,2,2,3,5,6]
Example 2: Input: nums1 = [1], m = 1, nums2 = [], n = 0   Output: [1]
Example 3: Input: nums1 = [0], m = 0, nums2 = [1], n = 1  Output: [1]
```
**Constraints:** `0 <= m, n <= 200` · `1 <= m + n <= 200`
**Follow up:** Can you come up with an algorithm that runs in O(m + n) time?
**Function:** `var merge = function (nums1, m, nums2, n) {}`

**বাংলা:** দুটো sorted array মিশিয়ে `nums1`-এর ভেতরেই sorted রাখো। `nums1`-এর শেষে ফাঁকা জায়গা আছে।
**🧠 ভাবনা:** সামনে থেকে লিখলে কী মুছে যায়? সবচেয়ে বড় জিনিস কোথায় বসবে, আর কোন দুটোর মধ্যে বড়টা?
**⏱️ লক্ষ্য:** Time O(m + n) · Space O(1)

#### ○ A3 · removeAt / insertAt ⬜
🌍 লাইনের মাঝখান থেকে একজন বের হয়ে গেল — বাকিরা এক ঘর সামনে। **EN:** Write `removeAt(arr, i)` and `insertAt(arr, i, x)` without `splice`, shifting elements yourself. Complexity? **বাংলা:** কেন O(n)?

### 🔗 Arrays বোঝার জন্য আরো LeetCode
[1920 Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/) · [1470 Shuffle the Array](https://leetcode.com/problems/shuffle-the-array/) · [2574 Left and Right Sum Differences](https://leetcode.com/problems/left-and-right-sum-differences/)

**বলো:** *"If I merge from the front, I'd overwrite values in nums1 that I still need. Filling from the back avoids that, because the end of nums1 is empty space."*

---

## Day 13 · W2 D6 · শনি ১৭ অক্টো — Topic 11: Arrays ২ — Index নিয়ে কাজ · Rotate · Stock ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- ঘোরানো / চক্রাকার? → `(i + k) % n`।
- in-place উল্টো সাজানো? → **reverse কৌশল** (পুরোটা উল্টাও, তারপর অংশ)।
- "এখন পর্যন্ত সবচেয়ে ছোট/বড়" দরকার? → এক loop-এ চলতে চলতে **track** করো — *"আমি হাতে কী মনে রাখছিলাম?"*

### 📘 Concept phases + ছোট problem

**Phase 11.8 — `(i + k) % n` দিয়ে ঘোরানো** ⬜
- **P11.8 · Clock** 🟢 ⬜ — 🌍 ঘড়ি: এখন ১০টা, ৫ ঘণ্টা পর কয়টা? **EN:** `(10 + 5) % 12` → `3`. Where does index 4 go after rotating a length-5 array right by 2? → `(4 + 2) % 5 = 1`

**Phase 11.9 — Reverse helper (অংশ উল্টানো)** ⬜
- **P11.9** 🟢 ⬜ — **EN:** Write `reverseRange(arr, l, r)` that reverses `arr` between indices `l` and `r` in-place. `[1,2,3,4,5], 1, 3` → `[1,4,3,2,5]`

**Phase 11.10 — চলতে চলতে min track** ⬜
- **P11.10 · Cheapest So Far** 🟢 ⬜ — 🌍 প্রতিদিন বাজারে গিয়ে "এখন পর্যন্ত সবচেয়ে সস্তা দাম" মনে রাখা। **EN:** For `[7, 1, 5, 3]`, print the minimum-so-far at each step. → `7 1 1 1`

### ★ মূল problem

#### ★ A4 · 189. Rotate Array 🟡 Medium ⬜
🔗 [LC 189](https://leetcode.com/problems/rotate-array/) (হুবহু)
🌍 **Real-life:** carousel/slider-এ ছবি ডানে ঘোরানো।

**EN:** Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.
```
Example 1: Input: nums = [1,2,3,4,5,6,7], k = 3   Output: [5,6,7,1,2,3,4]
Explanation: rotate 1 step: [7,1,2,3,4,5,6] → 2 steps: [6,7,1,2,3,4,5] → 3 steps: [5,6,7,1,2,3,4]
Example 2: Input: nums = [-1,-100,3,99], k = 2   Output: [3,99,-1,-100]
```
**Constraints:** `1 <= nums.length <= 10^5` · `0 <= k <= 10^5`
**Follow up:** Could you do it in-place with O(1) extra space?
**Function:** `var rotate = function (nums, k) {}` (in-place)

**বাংলা:** array-কে ডানে k ঘর ঘোরাও। **তিনভাবে:** (ক) নতুন array + `(i + k) % n` (খ) k বার একঘর করে (কেন ধীর?) (গ) তিনবার reverse — O(1) space। k > n হলে?
**🧠 ভাবনা:** k = n হলে array কেমন দেখায়? তাহলে `k % n`। (গ)-তে: পুরোটা উল্টালে শেষের k-টা সামনে চলে আসে — কিন্তু উল্টো ক্রমে…
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ A5 · 121. Best Time to Buy and Sell Stock 🟢 Easy ⬜
🔗 [LC 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) (হুবহু)
🌍 **Real-life:** শেয়ার বাজার — কবে কিনলে আর কবে বেচলে সবচেয়ে বেশি লাভ।

**EN:** You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve. If you cannot achieve any profit, return `0`.
```
Example 1: Input: prices = [7,1,5,3,6,4]   Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2: Input: prices = [7,6,4,3,1]     Output: 0
Explanation: No transactions are done and the max profit = 0.
```
**Constraints:** `1 <= prices.length <= 10^5` · `0 <= prices[i] <= 10^4`
**Function:** `var maxProfit = function (prices) {}`

**বাংলা:** একবার কিনে পরে একবার বেচে সর্বোচ্চ লাভ। লাভ না হলে 0। brute force O(n²) আগে, তারপর এক loop-এ।
**🧠 ভাবনা:** *"আমি হাতে কী মনে রাখছিলাম?"* — আজ বেচলে সবচেয়ে ভালো কেনার দিন কোনটা ছিল? (P11.10!)
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ○ A6 · Second Smallest + Second Largest ⬜
🌍 অলিম্পিকে রুপা পদক — দুই প্রান্ত থেকে। **EN:** Return `[secondSmallest, secondLargest]` in one loop. **বাংলা:** W1-এর 8.3-এর দুই দিক একসাথে।

### 🔗 আরো LeetCode
[122 Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) (December-এ greedy) · [1752 Check if Array Is Sorted and Rotated](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/)

**বলো:** *"As I scan the prices, I keep the lowest price seen so far. At each day, the best profit if I sell today is today's price minus that minimum."*

### 🚪 Gate — Topic 11 (Arrays ১) ⬜

---

## Day 14 · W2 D7 · রবি ১৮ অক্টো — Revision · Practical JS ১ · Unseen ⬜

### 🔁 Re-solve (ফাঁকা editor, timer)
- ⬜ S2 Valid Palindrome (two pointers) · ⬜ S4 Valid Anagram (count) · ⬜ A2 Merge Sorted Array · ⬜ A5 Stock · ⬜ W1-এর 8.3

### 🛠️ Practical JS ১ (full-stack interview-এ এমন ছোট utility চায়)

#### ★ P1 · 2677. Chunk Array 🟢 Easy ⬜
🔗 [LC 2677](https://leetcode.com/problems/chunk-array/) (হুবহু)
🌍 **Real-life:** ১০০০ email একবারে না পাঠিয়ে ১০০টা করে ভাগে পাঠানো।

**EN:** Given an array `arr` and a chunk size `size`, return a chunked array. A chunked array contains the original elements in `arr`, but consists of subarrays each of length `size`. The length of the last subarray may be less than `size` if `arr.length` is not evenly divisible by `size`. Please solve it without using lodash's `_.chunk` function.
```
Example 1: Input: arr = [1,2,3,4,5], size = 1   Output: [[1],[2],[3],[4],[5]]
Example 2: Input: arr = [1,9,6,3,2], size = 3   Output: [[1,9,6],[3,2]]
Example 3: Input: arr = [8,5,3,2,6], size = 6   Output: [[8,5,3,2,6]]
Example 4: Input: arr = [], size = 1            Output: []
```
**Constraints:** `0 <= arr.length <= 10^5` · `1 <= size <= arr.length + 1`
**Function:** `var chunk = function (arr, size) {}`

**বাংলা:** array-কে size মাপের ছোট ছোট টুকরায় ভাগ করো; শেষ টুকরা ছোট হতে পারে। size ≤ 0 হলে কী করবে — সিদ্ধান্ত লেখো।
**🧠 ভাবনা:** দুটো জিনিস — "এখনকার টুকরা" আর "সব টুকরা"। টুকরা কখন পূর্ণ হয়?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ P2 · Unique By ⬜
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** user list থেকে একই email-এর duplicate account বাদ।

**EN:** Write `uniqueBy(arr, keyFn)` that returns the items whose key (from `keyFn`) is seen for the first time, in original order.
```
Example 1: Input: users = [{id:1,email:"a@x"},{id:2,email:"b@x"},{id:3,email:"a@x"}], keyFn = u => u.email
           Output: [{id:1,email:"a@x"},{id:2,email:"b@x"}]
```
**বাংলা:** keyFn যে key দেয়, সেটা প্রথমবার দেখা item-গুলো রাখো।
**🧠 ভাবনা:** "আগে দেখেছি কিনা" — কোন জিনিস O(1)-এ বলে দেয়?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ○ P3 · Range ⬜
🌍 Python-এর `range`। **EN:** `range(start, end, step = 1)` — supports negative step. `range(0, 5)` → `[0,1,2,3,4]`, `range(5, 0, -2)` → `[5,3,1]`. **বাংলা:** step negative হলে loop-এর শর্ত কীভাবে বদলাবে?

### 🕵️ Unseen (pattern নাম নেই — আগে লেখো কোন pattern, কেন)

#### ★ U1 · First Repeated Log Message ⬜
🔗 কাছাকাছি: [LC 2351 · First Letter to Appear Twice](https://leetcode.com/problems/first-letter-to-appear-twice/)
🌍 **Real-life:** server log — প্রথম কোন error message দ্বিতীয়বার এল (তার মানে সমস্যা চলছে)।

**EN:** Given a list of log messages, return the first message that has already appeared earlier (the first repeat, by position of its second occurrence). Return `null` if there is none.
```
Example 1: Input: logs = ["a","b","a","c","b"]   Output: "a"
Example 2: Input: logs = ["x","y","z"]           Output: null
```
**বাংলা:** প্রথম কোন message-এর আগে ঠিক একই message এসেছিল?
**🧠 ভাবনা:** লেখার আগে: Pattern = ___ কারণ ___।

### 📝 Week Review
কোন problem-এ Hint 3+ লেগেছে? complexity হিসাব কি নিজে থেকে আসছে?

---

# 📙 WEEK 3 — Arrays (শেষ) · Objects · Hashing (Map & Set) ★★

**সপ্তাহের লক্ষ্য:**
1. "আমি হাতে কী মনে রাখছিলাম?" → সেটাই variable — এই চিন্তা দিয়ে Kadane, Product Except Self নিজে বের করা।
2. **Hashing** — interview-এর সবচেয়ে বেশি ব্যবহৃত অস্ত্র। সপ্তাহ শেষে nested loop দেখলেই মাথায় আসবে: *"এখানে Map দিলে কি একটা loop বাদ যায়?"*

---

## Day 15 · W3 D1 · সোম ১৯ অক্টো — Topic 11: Arrays ৩ — Kadane · Majority ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **"এখানে শেষ হওয়া সেরা":** প্রতিটা index-এ জিজ্ঞেস করো — আগের অংশের সাথে **জুড়ব**, নাকি এখান থেকে **নতুন শুরু**? (DP-র প্রথম স্বাদ)
- **Cancellation:** দুটো আলাদা জিনিস একে অপরকে বাতিল করলে শেষে কে টিকে থাকে?
- brute force → O(n³) → O(n²) → O(n): প্রতিটা ধাপে **কোন কাজ বারবার হচ্ছিল** সেটা বাদ দাও।

### 📘 Concept phases + ছোট problem

**Phase 11.11 — সব subarray দেখা (brute force)** ⬜
- **P11.11 · List Subarrays** 🟢 ⬜ — 🌍 টানা কয়েক দিনের বিক্রির সব সম্ভাব্য সময়কাল। **EN:** Print every contiguous subarray of `[1, 2, 3]`. → `[1] [1,2] [1,2,3] [2] [2,3] [3]` (n(n+1)/2 = 6)

**Phase 11.12 — Running sum দিয়ে একটা loop বাদ** ⬜
- **P11.12** 🟢 ⬜ — **EN:** For each start `i`, extend `j` and keep a running sum instead of re-adding. Print the sums for `[1, 2, 3]`. **বাংলা:** একই যোগ বারবার না করে আগেরটার সাথে শুধু নতুনটা যোগ।

**Phase 11.13 — জুড়ব নাকি নতুন শুরু** ⬜
- **P11.13 · Mood Streak** 🟢 ⬜ — 🌍 প্রতিদিনের মুড স্কোর; আগের দিনগুলো মিলিয়ে মোট নেতিবাচক হলে ভুলে গিয়ে আজ থেকে নতুন শুরু। **EN:** For `[-2, 1, -3, 4]`, print at each index `max(nums[i], prev + nums[i])`. → `-2 1 -2 4`

**Phase 11.14 — Cancellation (voting)** ⬜
- **P11.14 · Election Pairs** 🟢 ⬜ — 🌍 ভোটে দুই প্রার্থীর একজন-একজন করে ভোট বাতিল — শেষে যার ভোট টেকে। **EN:** Trace `candidate`/`count` for `[2, 2, 1, 1, 1, 2, 2]`. → final candidate `2`

### ★ মূল problem

#### ★ A7 · 53. Maximum Subarray 🟡 Medium ⬜
🔗 [LC 53](https://leetcode.com/problems/maximum-subarray/) (হুবহু)
🌍 **Real-life:** দোকানের লাভ-ক্ষতির ইতিহাস — কোন টানা সময়ে সবচেয়ে বেশি মোট লাভ?

**EN:** Given an integer array `nums`, find the subarray with the largest sum, and return its sum.
```
Example 1: Input: nums = [-2,1,-3,4,-1,2,1,-5,4]   Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2: Input: nums = [1]                      Output: 1
Example 3: Input: nums = [5,4,-1,7,8]             Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```
**Constraints:** `1 <= nums.length <= 10^5` · `-10^4 <= nums[i] <= 10^4`
**Follow up:** If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach.
**Function:** `var maxSubArray = function (nums) {}`

**বাংলা:** পাশাপাশি element-এর কোন অংশের যোগফল সবচেয়ে বেশি — সেই যোগফল। ধাপে ধাপে: (ক) O(n³) সব subarray (খ) O(n²) running sum (গ) O(n) Kadane। **সব negative হলে?** তিনটার টেবিল।
**🧠 ভাবনা:** P11.13 মনে করো। দুটো জিনিস মনে রাখো — "এখানে শেষ হওয়া সেরা" আর "এ পর্যন্ত সবচেয়ে সেরা"। শুরুর value 0 দিলে সব negative-এ কী ভুল হয়?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ A8 · 169. Majority Element 🟢 Easy ⬜
🔗 [LC 169](https://leetcode.com/problems/majority-element/) (হুবহু)
🌍 **Real-life:** ভোটে কে অর্ধেকের বেশি ভোট পেল।

**EN:** Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.
```
Example 1: Input: nums = [3,2,3]             Output: 3
Example 2: Input: nums = [2,2,1,1,1,2,2]     Output: 2
```
**Constraints:** `1 <= n <= 5 * 10^4`
**Follow-up:** Could you solve the problem in linear time and in O(1) space?
**Function:** `var majorityElement = function (nums) {}`

**বাংলা:** অর্ধেকের বেশিবার আসা সংখ্যা। (ক) Map count (খ) sort করে মাঝখান — কেন কাজ করে? (গ) Boyer–Moore O(1) space।
**🧠 ভাবনা:** অর্ধেকের বেশি থাকলে, বাকি সবাই মিলে একে একে বাতিল করলেও কে টিকে থাকে?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ○ A9 · Maximum Subarray with Indices ⬜
🌍 শুধু মোট লাভ না — কোন দিন থেকে কোন দিন। **EN:** Return `[start, end, sum]` for the max subarray. `[-2,1,-3,4,-1,2,1,-5,4]` → `[3, 6, 6]`. **বাংলা:** "নতুন শুরু" কখন হলো, সেটা মনে রাখো।

**বলো:** *"At each index I decide: extend the previous subarray, or start fresh from here. I start fresh when the running sum becomes worse than the current element alone."*

---

## Day 16 · W3 D2 · মঙ্গল ২০ অক্টো — Topic 11: Arrays ৪ — Prefix/Suffix · In-place কৌশল ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- "আমাকে ছাড়া বাকি সবার…" → **আমার বাঁয়ের সব** × **আমার ডানের সব**।
- দুই pass: বাঁ থেকে ডানে একবার, ডান থেকে বাঁয়ে একবার।
- value 1..n আর extra space নিষেধ? → **index-কেই খাতা বানাও** (`arr[value - 1]`-কে negative করে "দেখেছি" চিহ্ন)।

### 📘 Concept phases + ছোট problem

**Phase 11.15 — Prefix product / sum** ⬜
- **P11.15 · Left Products** 🟢 ⬜ — **EN:** For `[1, 2, 3, 4]`, build `left[i]` = product of everything before `i`. → `[1, 1, 2, 6]`

**Phase 11.16 — Suffix (ডান থেকে)** ⬜
- **P11.16 · Right Products** 🟢 ⬜ — **EN:** Build `right[i]` = product of everything after `i`. → `[24, 12, 4, 1]`. Multiply with `left` → ?

**Phase 11.17 — Index-কে marker হিসেবে** ⬜
- **P11.17 · Seat Marker** 🟢 ⬜ — 🌍 হলের সিট নম্বর ১..n — বসা মানুষ নিজের সিটে চিহ্ন দেয়। **EN:** For `[3, 1, 3]` (values 1..3), mark `arr[v - 1]` negative for each value. Which index stays positive? → index 1, so `2` is missing.

### ★ মূল problem

#### ★ A10 · 238. Product of Array Except Self 🟡 Medium ⬜
🔗 [LC 238](https://leetcode.com/problems/product-of-array-except-self/) (হুবহু)
🌍 **Real-life:** দলের প্রত্যেকের জন্য "বাকি সবার মিলিত অবদান" — নিজেকে বাদ দিয়ে।

**EN:** Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. You must write an algorithm that runs in O(n) time and **without using the division operation**.
```
Example 1: Input: nums = [1,2,3,4]       Output: [24,12,8,6]
Example 2: Input: nums = [-1,1,0,-3,3]   Output: [0,0,9,0,0]
```
**Constraints:** `2 <= nums.length <= 10^5` · `-30 <= nums[i] <= 30`
**Follow up:** Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space.)
**Function:** `var productExceptSelf = function (nums) {}`

**বাংলা:** প্রতিটা ঘরে — নিজেকে বাদ দিয়ে বাকি সবার গুণফল। ভাগ (`/`) নিষেধ। (ক) দুটো array (prefix, suffix) (খ) output array ছাড়া O(1) extra space। **0 থাকলে ভাগের উপায় কেন ভাঙে?**
**🧠 ভাবনা:** P11.15 আর P11.16 — দুটো মেলালেই উত্তর। (খ)-তে: right array না বানিয়ে, ডান থেকে চলতে চলতে একটা variable-এ গুণফল রাখা যায়?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1) extra

#### ○ A11 · 448. Find All Numbers Disappeared in an Array 🟢 ⬜
🔗 [LC 448](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) (হুবহু)
🌍 হলের কোন কোন সিট খালি।
**EN:** Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`. `[4,3,2,7,8,2,3,1]` → `[5,6]`; `[1,1]` → `[2]`. **Follow up:** without extra space.
**বাংলা:** Set দিয়ে, তারপর index-marker দিয়ে O(1) extra।

#### ○ A12 · 287. Find the Duplicate Number 🟡 ⬜
🔗 [LC 287](https://leetcode.com/problems/find-the-duplicate-number/) (হুবহু)
🌍 এক সিটে দুজনের টিকিট।
**EN:** Given `n + 1` integers where each is in `[1, n]`, there is only one repeated number; return it without modifying the array and using only constant extra space. `[1,3,4,2,2]` → `2`; `[3,1,3,4,2]` → `3`.
**বাংলা:** আজ Set দিয়ে; O(1)-এর fast/slow উপায় November W7-এ ফিরে আসবে।

### 🔗 আরো LeetCode
[1480 Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) · [724 Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) (November-এ prefix sum)

**বলো:** *"For each index, the answer is the product of everything to its left times everything to its right. I compute left products in one pass and multiply by right products in a second pass."*

### 🚪 Gate — Topic 11 (Arrays সম্পূর্ণ) ⬜

---

## Day 17 · W3 D3 · বুধ ২১ অক্টো — Topic 12: Objects ⬜

**Interview-এ যেভাবে আসে:** full-stack round-এ খুব common — API response transform, group করা, nested data থেকে মান বের করা।

**🧠 এই topic-এ কীভাবে ভাবব:**
- key কি **variable থেকে** আসছে? → bracket `obj[key]`, dot না।
- "প্রথমবার দেখলে খালি ঘর বানাও, তারপর যোগ করো" — grouping-এর মূল ছন্দ।
- nested data? → "এটা কি আবার একটা object? তাহলে ভেতরে যাও" (recursion-এর বীজ)।
- frequency-তে number key? → object string বানিয়ে ফেলে — Map ভালো।

### 📘 Concept phases + ছোট problem

**Phase 12.1 — dot বনাম bracket · dynamic key** ⬜
- **P12.1 · Settings Toggle** 🟢 ⬜ — 🌍 settings page-এ যে option-এ click, সেটা বদলাও। **EN:** `toggle(settings, "darkMode")` flips the boolean at that key and returns a new object. `{ darkMode: false }` → `{ darkMode: true }`

**Phase 12.2 — key আছে কিনা** ⬜
- **P12.2** 🟢 ⬜ — **EN:** Predict `"toString" in {}`, `Object.hasOwn({}, "toString")`, `({ a: undefined }).a !== undefined`. → `true false false`. **বাংলা:** তিন উপায়ের পার্থক্য।

**Phase 12.3 — Iteration: `keys / values / entries / fromEntries`** ⬜
- **P12.3 · Price Increase** 🟢 ⬜ — 🌍 মেনুর সব দাম ১০% বাড়াও। **EN:** `{ tea: 10, coffee: 20 }` → `{ tea: 11, coffee: 22 }` using `entries` + `fromEntries`.

**Phase 12.4 — Object-কে map হিসেবে ব্যবহারের ফাঁদ** ⬜
- **P12.4** 🟢 ⬜ — **EN:** Predict: `const o = {}; o[1] = "a"; o["1"] = "b"; console.log(o);` and `Object.keys({ b: 1, 2: 1, a: 1, 1: 1 })`. → `{ '1': 'b' }`, `['1','2','b','a']`

**Phase 12.5 — Copy: shallow বনাম deep** ⬜
- **P12.5** 🟢 ⬜ — **EN:** `const u = { name: "R", address: { city: "D" } }; const c = { ...u }; c.address.city = "X";` → `u.address.city`? → `"X"`. Fix with `structuredClone`.

**Phase 12.6 — তুলনা reference দিয়ে** ⬜
- **P12.6** 🟢 ⬜ — **EN:** Predict `{} === {}` and `const a = {}; const b = a; a === b`. → `false true`

**Phase 12.7 — Destructuring: default · rename · nested** ⬜
- **P12.7** 🟢 ⬜ — 🌍 API response থেকে দরকারি অংশ। **EN:** From `{ data: { user: { name: "Rahim" } } }`, extract `name` as `userName` with default `"Guest"` in one line.

**Phase 12.8 — JSON আর freeze** ⬜
- **P12.8** 🟢 ⬜ — **EN:** `JSON.stringify({ a: 1, b: undefined, c: () => 1 })` → `'{"a":1}'`. `Object.freeze` shallow কেন?

### ★ মূল problem

#### ★ O1 · Group By ⬜
🔗 কাছাকাছি: [LC 2631 · Group By](https://leetcode.com/problems/group-by/) (ওখানে `array.groupBy(fn)` হিসেবে)
🌍 **Real-life:** admin panel-এ user-দের role অনুযায়ী ভাগ।

**EN:** Write `groupBy(items, key)` that returns an object where each property is a value of `item[key]` and maps to the array of items with that value. Items missing the key go under `"undefined"` (or decide and document).
```
Example 1: Input: items = [{n:"A",role:"admin"},{n:"B",role:"user"},{n:"C",role:"admin"}], key = "role"
           Output: { admin: [{n:"A",...},{n:"C",...}], user: [{n:"B",...}] }
```
**Function:** `var groupBy = function (items, key) {}`

**বাংলা:** item-গুলোকে একটা key-র মান অনুযায়ী ভাগ করে object বানাও। key না থাকা item কোথায় যাবে — সিদ্ধান্ত লেখো।
**🧠 ভাবনা:** প্রতিটা item-এ: group-এর নাম কী? সেই ঘর আছে? না থাকলে খালি array বানাও, তারপর push।
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ O2 · Count By + Most Frequent ⬜
🔗 কাছাকাছি: [LC 819 · Most Common Word](https://leetcode.com/problems/most-common-word/)
🌍 **Real-life:** product review-এ সবচেয়ে বেশি আসা শব্দ।

**EN:** Write `countBy(words)` → `{ word: count }`, then return the most frequent word. On a tie, return the one that appeared first (or decide and document).
```
Example 1: Input: words = ["apple","pear","apple"]   Output: { apple: 2, pear: 1 }, most frequent = "apple"
```
**বাংলা:** প্রতিটা শব্দ কতবার, তারপর সবচেয়ে বেশিবার কোনটা। টাই হলে?
**🧠 ভাবনা:** দুটো আলাদা কাজ — count বানানো, তারপর max খোঁজা (W1-এর min/max!)। এক loop-এ দুটো করা যায়?
**⏱️ লক্ষ্য:** Time O(n) · Space O(k) — k = আলাদা শব্দ

#### ★ O3 · Flatten Object 🟡 ⬜
🔗 LeetCode-এ হুবহু নেই (কাছাকাছি: [LC 2625 · Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array/))
🌍 **Real-life:** nested settings-কে `.env`-এর মতো `"db.host"` ধাঁচে লেখা।

**EN:** Flatten a nested object into dot-separated keys.
```
Example 1: Input: { a: { b: 1, c: { d: 2 } }, e: 3 }   Output: { "a.b": 1, "a.c.d": 2, "e": 3 }
```
**বাংলা:** nested object-কে এক স্তরে আনো, key হবে পথ দিয়ে জোড়া। array এলে কী করবে — সিদ্ধান্ত।
**🧠 ভাবনা:** value যদি object হয় → "আবার একই কাজ, ভেতরে, পথ লম্বা করে" (recursion)। helper-এ কী কী পাঠাবে? (বর্তমান object, এখন পর্যন্ত পথ, result)
**⏱️ লক্ষ্য:** Time O(মোট key) · Space O(গভীরতা + output)

#### ○ O4 · Safe Get ⬜
🌍 lodash-এর `_.get`। **EN:** `get(obj, "a.b.c", defaultValue)` — returns the default if any step is missing or `null`. **বাংলা:** পথের মাঝে `null` থাকলে?

#### ○ O5 · Invert ⬜
**EN:** `invert({ a: "x", b: "y" })` → `{ x: "a", y: "b" }`. Duplicate values? **বাংলা:** key আর value অদলবদল।

### 🔗 Objects বোঝার জন্য আরো LeetCode
[2727 Is Object Empty](https://leetcode.com/problems/is-object-empty/) · [2705 Compact Object](https://leetcode.com/problems/compact-object/) · [2631 Group By](https://leetcode.com/problems/group-by/)

**বলো:** *"I iterate over the items once and use the key's value as a property name, creating an empty array the first time I see it."*

### 🚪 Gate — Topic 12 (Objects) ⬜

---

## Day 18 · W3 D4 · বৃহস্পতি ২২ অক্টো — Topic 13: Hashing ১ — Map/Set API · ৪টা ব্যবহার ★★ ⬜

**পড়বে:** `04-patterns-and-skeletons.md` — অংশ ১ (Data/lookup) + skeleton 3.1, 3.2। **Skeleton drill:** 3.1 আর 3.2 ফাঁকা editor-এ ৩ বার, দেখে না।

**🧠 এই topic-এ কীভাবে ভাবব — Hashing-এর ৪টা প্রশ্ন:**

| প্রশ্ন | Structure | উদাহরণ |
|---|---|---|
| আগে দেখেছি? | **Set** | duplicate |
| কতবার? | **Map** value → count | frequency |
| আমার জোড়া আছে? | **Map** value → index | Two Sum |
| একই বৈশিষ্ট্যের সবাই কারা? | **Map** key → list | group anagrams |

**চেনার প্রশ্ন:** *"আমি কি loop-এর ভেতরে বারবার কিছু **খুঁজছি**?"* → হ্যাঁ হলে Hashing।

### 📘 Concept phases + ছোট problem

**Phase 13.1 — Set** ⬜
- **P13.1 · Unique Visitors** 🟢 ⬜ — 🌍 website-এ আজ কতজন আলাদা মানুষ এসেছে। **EN:** `["u1","u2","u1","u3"]` → `3` using `new Set(...).size`.

**Phase 13.2 — Map** ⬜
- **P13.2 · Word Count Map** 🟢 ⬜ — **EN:** Count `["a","b","a"]` with `map.set(x, (map.get(x) ?? 0) + 1)`. Why `?? 0`? (না দিলে `undefined + 1` = `NaN`)

**Phase 13.3 — Map বনাম Object** ⬜
- **P13.3** 🟢 ⬜ — **EN:** Put key `1` (number) in a Map and an object; read back the key type. → Map keeps `number`, object makes `"1"`.

**Phase 13.4 — Array key-র ফাঁদ** ⬜
- **P13.4** 🟢 ⬜ — **EN:** `map.set([1,2], "x"); map.get([1,2])` → `undefined`. Why? Fix with string key `"1,2"`.

**Phase 13.5 — Next-line drill: Two Sum (চিন্তা → লাইন)** ⬜
```
চিন্তা: "প্রতিটা সংখ্যার জন্য target - num আগে দেখেছি কিনা" → দ্রুত lookup + index → Map
লাইন:  ?
চিন্তা: "প্রতিটা সংখ্যা দেখতে হবে, index-ও লাগবে"
লাইন:  ?
চিন্তা: "আমার জোড়া কত?"
লাইন:  ?
চিন্তা: "জোড়া কি আগে দেখেছি?"
লাইন:  ?
চিন্তা: "না দেখলে নিজেকে রেখে দিই"
লাইন:  ?
```

### ★ মূল problem

#### ★ H1 · 217. Contains Duplicate (৩ উপায়) 🟢 Easy ⬜
🔗 [LC 217](https://leetcode.com/problems/contains-duplicate/) (হুবহু)
🌍 **Real-life:** একই phone নম্বরে দুটো account।
**EN:** Return `true` if any value appears at least twice. `[1,2,3,1]` → `true`; `[1,2,3,4]` → `false`.
**বাংলা:** (ক) O(n²) (খ) sort করে পাশাপাশি তুলনা (গ) Set। **তিনটার time/space টেবিল।**
**⏱️ লক্ষ্য:** Set: Time O(n) · Space O(n) — sort: O(n log n) · O(1)

#### ★ H2 · 1. Two Sum 🟢 Easy ⬜
🔗 [LC 1](https://leetcode.com/problems/two-sum/) (হুবহু)
🌍 **Real-life:** gift card-এ ঠিক ৯০০ টাকা — কোন দুটো জিনিস কিনলে পুরোটা খরচ হয়?

**EN:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
```
Example 1: Input: nums = [2,7,11,15], target = 9   Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2: Input: nums = [3,2,4], target = 6       Output: [1,2]
Example 3: Input: nums = [3,3], target = 6         Output: [0,1]
```
**Constraints:** `2 <= nums.length <= 10^4` · only one valid answer exists.
**Follow-up:** Can you come up with an algorithm that is less than O(n²) time complexity?
**Function:** `var twoSum = function (nums, target) {}`

**বাংলা:** কোন দুটো সংখ্যার যোগফল target — তাদের index। brute force → Map।
**🧠 ভাবনা:** **কেন "আগে check, পরে store"? উল্টো করলে কোন input-এ ভুল?** (`[3,2,4]`, target 6 — 3 নিজেই নিজের জোড়া হয়ে যাবে!)
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ H3 · 349. Intersection of Two Arrays 🟢 Easy ⬜
🔗 [LC 349](https://leetcode.com/problems/intersection-of-two-arrays/) (হুবহু)
🌍 **Real-life:** দুই বন্ধুর Facebook-এর mutual friends।

**EN:** Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
```
Example 1: Input: nums1 = [1,2,2,1], nums2 = [2,2]       Output: [2]
Example 2: Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]   Output: [9,4]
```
**Function:** `var intersection = function (nums1, nums2) {}`

**বাংলা:** দুটোতেই আছে এমন আলাদা সংখ্যা। (ক) Set (খ) দুটোই sorted হলে দুই pointer।
**⏱️ লক্ষ্য:** Time O(n + m) · Space O(n)

#### ○ H4 · 771. Jewels and Stones 🟢 ⬜
🔗 [LC 771](https://leetcode.com/problems/jewels-and-stones/) (হুবহু)
🌍 পাথরের থলেতে কয়টা আসল রত্ন।
**EN:** `jewels` are the types of stones that are jewels; count how many of `stones` are jewels (case-sensitive). `jewels = "aA", stones = "aAAbbbb"` → `3`; `"z","ZZ"` → `0`.
**বাংলা:** jewels-কে Set বানাও, তারপর গোনো।

**বলো:** *"For each number, I check whether its complement is already in the map. If yes, I've found the pair. If not, I store the current number with its index. One pass, O(n) time and O(n) space."*

---

## Day 19 · W3 D5 · শুক্র ২৩ অক্টো — Topic 13: Hashing ২ — Grouping · Top K ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Grouping key ডিজাইন:** একই group-এর সবার জন্য **একই key** কীভাবে বানাব? (anagram → sorted শব্দ, বা ২৬-count-এর string)
- frequency 1..n-এর মধ্যে? → **bucket**: index = frequency, sort ছাড়া top K।
- দুই দিকের mapping লাগে? (a→dog হলে dog→a-ও) → **দুটো Map**।

### 📘 Concept phases + ছোট problem

**Phase 13.6 — Group key বানানো** ⬜
- **P13.6 · Anagram Key** 🟢 ⬜ — **EN:** Make the same key for `"eat"`, `"tea"`, `"ate"` two ways: sorted letters (`"aet"`) and a 26-count string. **বাংলা:** কোন key একই group-এর সবার জন্য একই হয়?

**Phase 13.7 — Bucket কৌশল** ⬜
- **P13.7 · Frequency Buckets** 🟢 ⬜ — 🌍 শব্দগুলো "কতবার এসেছে" অনুযায়ী তাকে সাজানো। **EN:** For counts `{1:3, 2:2, 3:1}`, build `buckets[freq] = [values]`. → `[[], [3], [2], [1]]`

### ★ মূল problem

#### ★ H5 · 49. Group Anagrams 🟡 Medium ⬜
🔗 [LC 49](https://leetcode.com/problems/group-anagrams/) (হুবহু)
🌍 **Real-life:** শব্দ-খেলার app-এ একই অক্ষরের শব্দগুলো এক দলে।

**EN:** Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.
```
Example 1: Input: strs = ["eat","tea","tan","ate","nat","bat"]
           Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation: "bat" has no anagram; "nat" and "tan" are anagrams; "ate", "eat", "tea" are anagrams.
Example 2: Input: strs = [""]    Output: [[""]]
Example 3: Input: strs = ["a"]   Output: [["a"]]
```
**Constraints:** `1 <= strs.length <= 10^4` · `0 <= strs[i].length <= 100` · lowercase English letters.
**Function:** `var groupAnagrams = function (strs) {}`

**বাংলা:** একই অক্ষরের শব্দগুলো একসাথে। key: (ক) sorted শব্দ — O(n · k log k) (খ) count-signature — O(n · k)। টেবিল।
**🧠 ভাবনা:** Hashing-এর ৪ প্রশ্নের কোনটা? ("একই বৈশিষ্ট্যের সবাই কারা?" → Map key → list)
**⏱️ লক্ষ্য:** Time O(n · k) · Space O(n · k)

#### ★ H6 · 347. Top K Frequent Elements 🟡 Medium ⬜
🔗 [LC 347](https://leetcode.com/problems/top-k-frequent-elements/) (হুবহু)
🌍 **Real-life:** "trending" — সবচেয়ে বেশি search হওয়া k-টা শব্দ।

**EN:** Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.
```
Example 1: Input: nums = [1,1,1,2,2,3], k = 2   Output: [1,2]
Example 2: Input: nums = [1], k = 1             Output: [1]
```
**Constraints:** `1 <= nums.length <= 10^5` · it is guaranteed that the answer is unique.
**Follow up:** Your algorithm's time complexity must be better than O(n log n).
**Function:** `var topKFrequent = function (nums, k) {}`

**বাংলা:** সবচেয়ে বেশিবার আসা k-টা সংখ্যা। (ক) count + sort — O(n log n) (খ) **bucket** — O(n)। (heap দিয়ে December W9-এ)
**🧠 ভাবনা (ভাঙতে শেখো):** ৩টা ছোট কাজ — গোনা → frequency অনুযায়ী সাজানো → বড় থেকে k-টা তোলা। কোন frequency সর্বোচ্চ কত হতে পারে? (n)
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ○ H7 · 290. Word Pattern 🟢 ⬜
🔗 [LC 290](https://leetcode.com/problems/word-pattern/) (হুবহু)
🌍 গোপন সংকেত — প্রতিটা চিহ্ন একটা নির্দিষ্ট শব্দ।
**EN:** Given a `pattern` and a string `s`, find if `s` follows the same pattern (a bijection between letters and words). `"abba","dog cat cat dog"` → `true`; `"abba","dog cat cat fish"` → `false`; `"aaaa","dog cat cat dog"` → `false`.
**বাংলা:** Isomorphic-এর আত্মীয় — দুই দিকের mapping।

**বলো:** *"Anagrams share the same character counts, so I build a key from the counts and group words under that key in a map."*

---

## Day 20 · W3 D6 · শনি ২৪ অক্টো — Topic 13: Hashing ৩ — Set-এর চতুর ব্যবহার ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **"ধারা কোথায় শুরু":** `x - 1` না থাকলে x একটা ধারার শুরু — শুধু সেখান থেকে গোনো।
- একাধিক নিয়ম একসাথে (row, column, box)? → প্রতিটার আলাদা Set, বা `"r-3"` ধাঁচের string key।
- চক্র (loop) ধরা? → Set-এ আগের অবস্থা রাখো; আবার দেখলেই চক্র।

### 📘 Concept phases + ছোট problem

**Phase 13.8 — ধারার শুরু চেনা** ⬜
- **P13.8 · Sequence Starts** 🟢 ⬜ — 🌍 লাইব্রেরির তাকে বইয়ের নম্বর — কোনগুলো একটা টানা সারির প্রথম বই? **EN:** For `[100, 4, 200, 1, 3, 2]`, list numbers `x` where `x - 1` is not in the set. → `100, 200, 1`

**Phase 13.9 — String key দিয়ে একাধিক নিয়ম** ⬜
- **P13.9 · Box Index** 🟢 ⬜ — **EN:** For a 9×9 grid, compute the 3×3 box number of `(r, c)` = `Math.floor(r / 3) * 3 + Math.floor(c / 3)`. `(4, 7)` → `5`. **বাংলা:** সূত্রটা কেন কাজ করে — কাগজে আঁকো।

**Phase 13.10 — চক্র ধরা** ⬜
- **P13.10 · Repeat State** 🟢 ⬜ — **EN:** Starting at 4, repeatedly replace n with the sum of squares of its digits. Stop when you see a number again. Print the sequence. → `4 16 37 58 89 145 42 20 4`

### ★ মূল problem

#### ★ H8 · 128. Longest Consecutive Sequence 🟡 Medium ⬜
🔗 [LC 128](https://leetcode.com/problems/longest-consecutive-sequence/) (হুবহু)
🌍 **Real-life:** gym app — টানা কত দিন ব্যায়াম করেছ (দিনগুলো এলোমেলো ক্রমে দেওয়া)।

**EN:** Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.
```
Example 1: Input: nums = [100,4,200,1,3,2]         Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2: Input: nums = [0,3,7,2,5,8,4,6,0,1]     Output: 9
```
**Constraints:** `0 <= nums.length <= 10^5`
**Function:** `var longestConsecutive = function (nums) {}`

**বাংলা:** টানা সংখ্যার (১,২,৩,৪…) সবচেয়ে লম্বা ধারার দৈর্ঘ্য — O(n)-এ। sort দিয়ে O(n log n) আগে, তারপর Set।
**🧠 ভাবনা:** P13.8 — শুধু ধারার শুরু থেকে গুনলে প্রতিটা সংখ্যা কতবার দেখা হয়? **কেন ভেতরের `while` সত্ত্বেও O(n)?** (`03-complexity-guide` অংশ ২(খ))
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ H9 · 36. Valid Sudoku 🟡 Medium ⬜
🔗 [LC 36](https://leetcode.com/problems/valid-sudoku/) (হুবহু)
🌍 **Real-life:** Sudoku app-এ ভুল সংখ্যা বসালে লাল দাগ।

**EN:** Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated: each row must contain the digits 1-9 without repetition; each column must contain the digits 1-9 without repetition; each of the nine 3 x 3 sub-boxes must contain the digits 1-9 without repetition. Empty cells are `"."`.
```
Example 1: Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2: Same board but the "5" in the top-left corner is changed to "8".
Output: false
Explanation: There are two 8's in the top-left 3x3 sub-box.
```
**Function:** `var isValidSudoku = function (board) {}`

**বাংলা:** ৯×৯ board বৈধ কিনা — শুধু ভরা ঘরগুলো দেখে: কোনো row, column বা ৩×৩ box-এ একই সংখ্যা দুবার না।
**🧠 ভাবনা:** ৩ ধরনের নিয়ম → ৩ ধরনের Set। box নম্বর P13.9-এর সূত্র।
**⏱️ লক্ষ্য:** Time O(81) = O(1) · Space O(1)

#### ○ H10 · 202. Happy Number 🟢 ⬜
🔗 [LC 202](https://leetcode.com/problems/happy-number/) (হুবহু)
🌍 সংখ্যার খেলা — শেষে ১-এ পৌঁছায়, নাকি চিরকাল ঘোরে?
**EN:** Replace `n` by the sum of the squares of its digits repeatedly; return `true` if it reaches 1, `false` if it loops forever. `19` → `true` (1+81=82 → 68 → 100 → 1); `2` → `false`.
**বাংলা:** P13.10 — চক্র ধরা Set দিয়ে।

**বলো:** *"I only start counting from numbers that begin a sequence, meaning x - 1 isn't in the set. That way each number is visited at most twice, so the total is O(n)."*

### 🚪 Gate — Topic 13 (Hashing) ⬜

---

## Day 21 · W3 D7 · রবি ২৫ অক্টো — Revision · Practical JS ২ · Unseen ⬜

### 🔁 Re-solve (ফাঁকা editor, timer)
- ⬜ A7 Maximum Subarray · ⬜ A10 Product Except Self · ⬜ H2 Two Sum · ⬜ H5 Group Anagrams · ⬜ W2-এর A4 Rotate (reverse version)

### 🛠️ Practical JS ২ (Objects)

#### ★ P4 · Deep Clone 🟡 ⬜
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** form-এর "undo" — পুরনো state-এর সম্পূর্ণ আলাদা কপি রাখা।

**EN:** Write `deepClone(value)` that copies objects, arrays, and primitives so that changing the clone never affects the original. (Discuss only: what happens with `Date`, `Map`, and cycles?)
```
Example 1: Input: const a = { x: [1, { y: 2 }] }; const b = deepClone(a); b.x[1].y = 9;
           Output: a.x[1].y is still 2
```
**বাংলা:** nested object/array-র পুরো আলাদা কপি।
**🧠 ভাবনা:** value primitive হলে? array হলে? object হলে? — তিনটা case, আর ভেতরের প্রতিটা জিনিসের জন্য একই কাজ (recursion)।
**⏱️ লক্ষ্য:** Time O(মোট জিনিস) · Space O(মোট জিনিস)

#### ★ P5 · Deep Equal 🟡 ⬜
🔗 কাছাকাছি: [LC 2628 · JSON Deep Equal](https://leetcode.com/problems/json-deep-equal/)
🌍 **Real-life:** form-এ কিছু বদলেছে কিনা — "Save" button চালু করব?

**EN:** Write `deepEqual(a, b)` that compares nested objects/arrays by value. Different key order must still be equal.
```
Example 1: Input: a = { x: 1, y: [1, 2] }, b = { y: [1, 2], x: 1 }   Output: true
Example 2: Input: a = { x: 1 }, b = { x: 1, z: 2 }                   Output: false
```
**বাংলা:** দুটো nested জিনিস মানে মানে একই কিনা।
**🧠 ভাবনা:** কখন সাথে সাথে `false`? (type আলাদা, key সংখ্যা আলাদা) তারপর প্রতিটা key-র value-তে একই প্রশ্ন।

### 🕵️ Unseen (আগে লেখো: Pattern ___ কারণ ___)

#### ★ U2 · First Big Spender ⬜
🌍 **Real-life:** e-commerce-এ loyalty badge — কোন order-এ একজন user প্রথম ১০০০ টাকা ছাড়াল।
**EN:** Given `orders = [{ userId, amount }]` in time order, find the first moment any user's total spending exceeds 1000. Return the index of that order, or `-1`.
```
Example 1: Input: [{u:"a",amount:600},{u:"b",amount:300},{u:"a",amount:500}]   Output: 2
Explanation: user "a" reaches 1100 at index 2.
```
**বাংলা:** প্রতিটা user-এর মোট খরচ চলতে চলতে রাখো — প্রথম কে, কোন order-এ ১০০০ ছাড়াল?

#### ○ U3 · Common Words in Order ⬜
🔗 কাছাকাছি: [LC 349](https://leetcode.com/problems/intersection-of-two-arrays/)
🌍 দুই বন্ধুর পছন্দের সিনেমার তালিকা — দুজনেরই আছে এমনগুলো। **EN:** Return words present in both lists, in the first list's order, each once. **বাংলা:** প্রথম list-এর ক্রম রেখে, প্রতিটা একবার।

### 📝 Week Review
nested loop দেখে কি Map-এর কথা মাথায় আসছে? কোন problem-এ "key কী হবে" ভাবতে আটকেছি?

---

# 📕 WEEK 4 — Scope/Closure/`this` · Class & OOP · Sorting · Month Review

**সপ্তাহের লক্ষ্য:**
1. Closure আর `this` — full-stack interview-এর "output বলো" প্রশ্নে আত্মবিশ্বাস।
2. Class দিয়ে নিজের data structure বানানো (November থেকে LinkedList, Heap, Trie সবই class)।
3. Sorting algorithm নিজে হাতে লেখা — আর **কখন কোনটা, কেন** বলতে পারা।
4. অক্টোবরের সব pattern একসাথে — নাম ছাড়া problem-এ চেনা।

---

## Day 22 · W4 D1 · সোম ২৬ অক্টো — Topic 14: Scope · Closure · `this` ◆ ⬜

**Interview-এ যেভাবে আসে:** "এই code-এর output কী?" (setTimeout + var), "এমন counter বানাও যার state বাইরে থেকে বদলানো যায় না", "`once` / `memoize` লেখো"।

**🧠 এই topic-এ কীভাবে ভাবব:**
- variable খুঁজতে JS **কোথায় লেখা** হয়েছে সেটা দেখে, কোথায় ডাকা হয়েছে সেটা না (lexical scope)।
- function শেষ হওয়ার পরেও কিছু **মনে রাখতে** হবে? → closure (বাইরের function-এ variable, ভেতরের function ফেরত)।
- `this` দেখলে প্রশ্ন: **function-টা কীভাবে ডাকা হলো?** (`obj.fn()`, `fn()`, `new`, `call/bind`) — arrow হলে বাইরের `this`।

### 📘 Concept phases + ছোট problem

**Phase 14.1 — Lexical scope আর scope chain** ⬜
- **P14.1 · Who Do I See?** 🟢 ⬜ — 🌍 ঘরের ভেতর থেকে বারান্দা দেখা যায়, বারান্দা থেকে ঘরের ভেতর না। **EN:** Predict: `const a = 1; function outer() { const b = 2; function inner() { return a + b; } return inner(); } outer();` → `3`. Can `outer` read a variable declared inside `inner`?

**Phase 14.2 — Closure: function মনে রাখে** ⬜
- **P14.2 · Make Adder** 🟢 ⬜ — 🌍 VAT মেশিন — একবার rate সেট করলে মনে রাখে। **EN:** `const add5 = makeAdder(5); add5(10)` → `15`. `makeAdder` শেষ হওয়ার পরেও `5` কোথায় থাকে?

**Phase 14.3 — Private state** ⬜
- **P14.3 · Bank Balance** 🟢 ⬜ — 🌍 account-এর balance বাইরে থেকে সরাসরি বদলানো যাবে না। **EN:** `const acc = createAccount(100); acc.deposit(50); acc.getBalance()` → `150`; `acc.balance` → `undefined`.

**Phase 14.4 — `var` + `setTimeout`-এর classic ফাঁদ** ⬜
- **P14.4** 🟢 ⬜ — **EN:** Predict: `for (var i = 0; i < 3; i++) setTimeout(() => console.log("var", i));` and the same with `let`. → `var 3` ×3, `let 0 1 2`. **বাংলা:** কেন আলাদা — প্রতি ঘুরে নতুন `i` তৈরি হয় কোনটায়?

**Phase 14.5 — `this`-এর ৪ নিয়ম** ⬜
- **P14.5 · How Was It Called?** 🟢 ⬜ — **EN:** `const user = { name: "A", hi() { return this.name; } };` Predict `user.hi()`, and `const f = user.hi; f()` (strict mode). → `"A"`, error/`undefined`. Fix with `bind`.

**Phase 14.6 — Arrow-এর `this`** ⬜
- **P14.6** 🟢 ⬜ — **EN:** `const obj = { name: "A", arrow: () => this?.name, regular() { return this.name; } };` Predict both. **বাংলা:** arrow-এর নিজের `this` নেই — বাইরের থেকে নেয়।

### ★ মূল problem

#### ★ C1 · 2620. Counter + 2665. Counter II 🟢 Easy ⬜
🔗 [LC 2620](https://leetcode.com/problems/counter/) · [LC 2665](https://leetcode.com/problems/counter-ii/) (হুবহু)
🌍 **Real-life:** দোকানের token মেশিন — প্রতিবার চাপলে পরের নম্বর, কেউ বাইরে থেকে নম্বর বদলাতে পারে না।

**EN (2620):** Given an integer `n`, return a `counter` function. This counter function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).
```
Example 1: Input: n = 10, ["call","call","call"]   Output: [10,11,12]
Explanation: counter() = 10, counter() = 11, counter() = 12
Example 2: Input: n = -2, ["call","call","call","call","call"]   Output: [-2,-1,0,1,2]
```
**EN (2665):** Write `createCounter(init)` returning an object with `increment()` (+1, returns value), `decrement()` (−1, returns value), and `reset()` (sets to `init`, returns value).
```
Example: Input: init = 5, calls = ["increment","reset","decrement"]   Output: [6,5,4]
```
**Function:** `var createCounter = function (n) {}`

**বাংলা:** এমন counter বানাও যার সংখ্যা ভেতরে লুকানো, শুধু দেওয়া method দিয়েই বদলায়।
**🧠 ভাবনা:** count কোথায় থাকবে যাতে বাইরে থেকে ছোঁয়া না যায়, কিন্তু প্রতিটা call-এ মনে থাকে? (P14.3)
**⏱️ লক্ষ্য:** প্রতিটা call Time O(1) · Space O(1)

#### ★ C2 · 2666. Allow One Function Call 🟢 Easy ⬜
🔗 [LC 2666](https://leetcode.com/problems/allow-one-function-call/) (হুবহু — LC-তে পরের call `undefined` দেয়)
🌍 **Real-life:** "Pay" button দুবার চাপলেও টাকা একবারই কাটবে।

**EN:** Given a function `fn`, return a new function that is identical to the original function except that it ensures `fn` is called at most once. The first time the returned function is called, it should return the same result as `fn`. Every subsequent time it is called, it should return `undefined`.
```
Example 1: Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
           Output: [{"calls":1,"value":6}]
Explanation: const onceFn = once(fn); onceFn(1, 2, 3); // 6 · onceFn(2, 3, 6); // undefined, fn was not called
```
**Function:** `var once = function (fn) {}`

**বাংলা:** function একবারই চলবে; পরে ডাকলে `undefined` (plan-এর version: আগের ফলাফলই ফেরত — দুটোই লেখো)।
**🧠 ভাবনা:** কী মনে রাখতে হবে? ("আগে চলেছে কিনা", আর চাইলে "ফলাফল কী ছিল")
**⏱️ লক্ষ্য:** Time O(1) · Space O(1)

#### ★ C3 · 2623. Memoize 🟡 Medium ⬜
🔗 [LC 2623](https://leetcode.com/problems/memoize/) (হুবহু)
🌍 **Real-life:** ক্যালকুলেটরে একই কঠিন হিসাব বারবার না করে আগের উত্তর খাতায় লিখে রাখা (cache)।

**EN:** Given a function `fn`, return a memoized version of that function. A memoized function is a function that will never be called twice with the same inputs; instead it returns a cached value. `fn` can be `sum(a, b)`, `fib(n)`, or `factorial(n)`.
```
Example 1: Input: fnName = "sum", calls = ["call","call","getCallCount","call","getCallCount"], inputs = [[2,2],[2,2],[],[1,2],[]]
           Output: [4,4,1,3,2]
Explanation: sum(2,2) computed once (4), second (2,2) comes from cache; callCount = 1; sum(1,2) computed → callCount = 2.
```
**Function:** `function memoize(fn) {}`

**বাংলা:** একই input-এ function দ্বিতীয়বার না চালিয়ে cache থেকে উত্তর দাও। cache কোথায় থাকে? (closure!)
**🧠 ভাবনা:** cache-এর key কী হবে যখন argument একাধিক? (`"2,2"` ধরনের string — W3-এর array-key ফাঁদ মনে করো)
**⏱️ লক্ষ্য:** cache-hit Time O(1) · Space O(আলাদা input সংখ্যা)

#### ○ C4 · myBind ⬜
🌍 নিজের `bind` — একটা function-কে নির্দিষ্ট object-এর সাথে বেঁধে দেওয়া। **EN:** `myBind(fn, thisArg, ...args)` using `call`/`apply`. **বাংলা:** নতুন function ফেরত দাও যেটা সবসময় `thisArg` দিয়ে চলে।

**বলো:** *"The inner function closes over the `count` variable, so the state stays private. Only the returned methods can change it."*

### 🚪 Gate — Topic 14 ⬜

---

## Day 23 · W4 D2 · মঙ্গল ২৭ অক্টো — Topic 15: Class & OOP · Error Handling ★ ⬜

**কেন জরুরি:** JS-এ Queue, Heap, Trie, LinkedList, Union Find — কোনোটাই built-in নেই। interview-এ নিজে class লিখতে হয়।

**🧠 এই topic-এ কীভাবে ভাবব:**
- data structure ডিজাইন = **কী data রাখব** (constructor) + **কী কী কাজ** (method) + **প্রতিটা কাজের খরচ**।
- বাইরে থেকে বদলানো যাবে না এমন জিনিস? → `#private`।
- ভুল ব্যবহার (খালি stack-এ pop)? → interviewer-কে জিজ্ঞেস: `throw`? `undefined`? `-1`?

### 📘 Concept phases + ছোট problem

**Phase 15.1 — `class`, `constructor`, method** ⬜
- **P15.1 · Rectangle** 🟢 ⬜ — 🌍 ঘরের মাপ। **EN:** `new Rectangle(3, 4).area()` → `12`, `.perimeter()` → `14`.

**Phase 15.2 — `#private`, getter/setter, `static`** ⬜
- **P15.2 · Temperature** 🟢 ⬜ — **EN:** Store `#celsius`; getter `fahrenheit` returns `c * 9/5 + 32`; setter rejects values below -273.15 by throwing. `static fromF(f)` creates from Fahrenheit.

**Phase 15.3 — `extends` / `super`** ⬜
- **P15.3 · Animal → Dog** 🟢 ⬜ — **EN:** `Dog extends Animal`; `new Dog("Tom").speak()` → `"Tom barks"`, using `super(name)`.

**Phase 15.4 — ভেতরের কাজ: prototype আর `new`** ⬜
- **P15.4** 🟢 ⬜ — **EN:** Predict `Object.getPrototypeOf(new Dog("a")) === Dog.prototype` and `new Dog("a") instanceof Animal`. → `true true`. **বাংলা:** `new` আসলে কোন ৪টা কাজ করে?

**Phase 15.5 — Error handling** ⬜
- **P15.5 · Safe Parse** 🟢 ⬜ — 🌍 ভাঙা JSON এলে app crash করবে না। **EN:** `safeParse('{"a":1}')` → `{ a: 1 }`; `safeParse("oops")` → `null` using `try/catch`.

**Phase 15.6 — JS queue-র সমস্যা: `shift` O(n)** ⬜
- **P15.6** 🟢 ⬜ — **EN:** Simulate a queue with an array + `head` index: enqueue 1, 2, 3; dequeue twice → `1, 2` without `shift`. (skeleton 3.14)

### ★ মূল problem

#### ★ K1 · Stack Class 🟢 Easy ⬜
🔗 পরে: [LC 155 · Min Stack](https://leetcode.com/problems/min-stack/) (November W8)
🌍 **Real-life:** থালার স্তূপ — শেষে রাখা থালা আগে তোলা (browser-এর back button)।

**EN:** Implement a `Stack` class with `push(x)`, `pop()`, `peek()`, `isEmpty()`, `size()`. Decide and document what `pop()` does on an empty stack.
```
Example: s.push(1); s.push(2); s.peek() → 2; s.pop() → 2; s.size() → 1; s.isEmpty() → false
```
**বাংলা:** নিজের Stack class। খালি stack-এ pop হলে কী — সিদ্ধান্ত লেখো।
**⏱️ লক্ষ্য:** প্রতিটা method O(1)

#### ★ K2 · Queue Class with O(1) Dequeue 🟡 Medium ⬜
🔗 পরে: [LC 232](https://leetcode.com/problems/implement-queue-using-stacks/) · [LC 622](https://leetcode.com/problems/design-circular-queue/) (November W8)
🌍 **Real-life:** ব্যাংকের লাইন — যে আগে এল, সে আগে।

**EN:** Implement a `Queue` class with `enqueue(x)`, `dequeue()`, `peek()`, `size()`, all O(1). Using `shift()` is not allowed. How will you clean up the internal array occasionally?
```
Example: q.enqueue(1); q.enqueue(2); q.dequeue() → 1; q.peek() → 2; q.size() → 1
```
**বাংলা:** `shift` ছাড়া O(1) dequeue — head index দিয়ে। ভেতরের array কখনো কখনো পরিষ্কার করবে কীভাবে?
**🧠 ভাবনা:** "সামনের মানুষ" কোথায় আছে মনে রাখতে একটা সংখ্যাই যথেষ্ট — array থেকে সত্যিই সরাতে হয় না।
**⏱️ লক্ষ্য:** প্রতিটা method O(1) (amortized)

#### ○ K3 · Shopping Cart Class ⬜
🌍 e-commerce cart। **EN:** `add(item, qty)`, `remove(id)`, `total()`; throw an error for invalid `qty` (≤ 0 or not an integer). **বাংলা:** ভুল qty-তে error।

**বলো:** *"JavaScript arrays don't give an O(1) dequeue, because shift moves every element. So I keep a head index and advance it instead."*

### 🚪 Gate — Topic 15 ⬜

---

## Day 24 · W4 D3 · বুধ ২৮ অক্টো — Topic 16: Sorting ১ — Bubble · Selection · Insertion (হাতে) ⬜

**লক্ষ্য:** এগুলো interview-এ সরাসরি কম আসে, কিন্তু **loop, swap, invariant** চিন্তার সেরা অনুশীলন। "stable / in-place" ধারণা এখান থেকেই।
তোমার পুরনো `codeAbc/selectionSort.js`, `insertionSort.js` খুলবে না — ফাঁকা editor থেকে।

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Invariant:** প্রতিটা pass-এর পর **কোন অংশ নিশ্চিতভাবে ঠিক জায়গায়?** (bubble: শেষের অংশ; selection: সামনের অংশ; insertion: বাঁয়ের অংশ sorted)
- কখন থামা যায়? (bubble-এ কোনো swap না হলে)
- সমান element-এর ক্রম কি থাকে? (stable)

### 📘 Concept phases + ছোট problem

**Phase 16.1 — Swap আর এক pass** ⬜
- **P16.1 · One Bubble Pass** 🟢 ⬜ — 🌍 লাইনে পাশাপাশি দুজনের উচ্চতা তুলনা করে লম্বাজনকে পেছনে পাঠানো। **EN:** Do one pass on `[5, 1, 4, 2]` swapping neighbors when left > right. → `[1, 4, 2, 5]` — largest is now at the end.

**Phase 16.2 — Minimum খুঁজে সামনে** ⬜
- **P16.2 · Find Min Index** 🟢 ⬜ — **EN:** Return the index of the smallest element from position `i` to the end. `([4, 2, 7, 1], 1)` → `3`

**Phase 16.3 — Sorted অংশে ঢোকানো** ⬜
- **P16.3 · Insert Into Sorted** 🟢 ⬜ — 🌍 তাসের হাত — নতুন তাস ঠিক জায়গায় ঢোকানো। **EN:** Insert `3` into sorted `[1, 2, 4, 5]` by shifting larger elements right. → `[1, 2, 3, 4, 5]`

**Phase 16.4 — Stable বনাম unstable** ⬜
- **P16.4** 🟢 ⬜ — **EN:** Sort `[{n:"A",age:20},{n:"B",age:19},{n:"C",age:20}]` by age. In a stable sort, does A still come before C? **বাংলা:** সমান হলে আগের ক্রম থাকা কেন গুরুত্বপূর্ণ (যেমন আগে নাম, পরে বয়স দিয়ে sort)?

### ★ মূল problem (built-in sort নিষেধ)

#### ★ SO1 · Bubble Sort (early stop) 🟢 ⬜
🔗 [LC 912 · Sort an Array](https://leetcode.com/problems/sort-an-array/) — submit করে দেখো: O(n²) বড় input-এ **Time Limit Exceeded** দেবে, এটাই শেখা!
🌍 **Real-life:** লাইনের মানুষ পাশাপাশি তুলনা করে নিজেরা জায়গা বদলায়।
**EN:** Sort `nums` ascending with bubble sort; stop early if a pass makes no swaps. Give best and worst complexity. `[5,2,3,1]` → `[1,2,3,5]`
**বাংলা:** bubble sort, কোনো swap না হলে থামো। best/worst complexity।
**⏱️ লক্ষ্য:** worst O(n²) · best O(n) (already sorted) · Space O(1)

#### ★ SO2 · Selection Sort 🟢 ⬜
🌍 **Real-life:** তাক থেকে প্রতিবার সবচেয়ে ছোট বই বেছে সামনে রাখা।
**EN:** Sort with selection sort. Why is it unstable? Give a small example. **বাংলা:** কেন unstable — উদাহরণ দাও।
**⏱️ লক্ষ্য:** সবসময় O(n²) · Space O(1)

#### ★ SO3 · Insertion Sort 🟢 ⬜
🌍 **Real-life:** হাতের তাস সাজানো।
**EN:** Sort with insertion sort. How many comparisons on an already sorted input? **বাংলা:** already sorted input-এ কত তুলনা?
**⏱️ লক্ষ্য:** worst O(n²) · best O(n) · Space O(1) · প্রায়-sorted data-তে দ্রুত

#### ○ SO4 · Comparison Table ⬜
**EN:** Table for all three: best / average / worst / space / stable / when to use. **বাংলা:** তিনটার তুলনার টেবিল।

---

## Day 25 · W4 D4 · বৃহস্পতি ২৯ অক্টো — Topic 16: Sorting ২ — Merge Sort · Quick Sort ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Divide and conquer:** বড় problem → অর্ধেক অর্ধেক → ছোটগুলো solve → **জোড়া লাগাও**।
- আগে **helper** আলাদা লিখে test করো (`merge`, `partition`), তারপর মূল function।
- recursion tree আঁকো: কত স্তর (log n)? প্রতি স্তরে কত কাজ (n)?

### 📘 Concept phases + ছোট problem

**Phase 16.5 — দুটো sorted array জোড়া (merge)** ⬜
- **P16.5 · Merge Two Lists** 🟢 ⬜ — 🌍 দুই শাখার sorted salary list এক করা। **EN:** `merge([1, 4, 7], [2, 3, 9])` → `[1, 2, 3, 4, 7, 9]` with two pointers. (W2-এর A2-এর আত্মীয়)

**Phase 16.6 — অর্ধেক করা (recursion)** ⬜
- **P16.6 · Split Tree** 🟢 ⬜ — **EN:** Draw how `[8, 3, 5, 1, 9, 2, 7, 4]` splits until single elements. How many levels? → `3` (log₂ 8)

**Phase 16.7 — Partition (pivot)** ⬜
- **P16.7 · Pivot Split** 🟢 ⬜ — 🌍 শিক্ষক বললেন "৫০-এর কম যারা পেয়েছ বাঁয়ে, বেশি যারা ডানে"। **EN:** Rearrange `[7, 2, 9, 1, 5]` around pivot `5` (last element) so smaller go left. → Lomuto gives `[2, 1, 5, 7, 9]`, pivot at index 2.

### ★ মূল problem

#### ★ SO5 · Merge Sort 🟡 Medium ⬜
🔗 [LC 912 · Sort an Array](https://leetcode.com/problems/sort-an-array/) (হুবহু — এটায় Accepted হবে)
🌍 **Real-life:** ১০০০ খাতা — দুই ভাগ করে দুজনকে দাও, তারা আবার ভাগ করে… শেষে sorted গাদা জোড়া।

**EN:** Given an array of integers `nums`, sort the array in ascending order and return it. You must solve the problem without using any built-in functions in O(n log n) time complexity.
```
Example 1: Input: nums = [5,2,3,1]       Output: [1,2,3,5]
Example 2: Input: nums = [5,1,1,2,0,0]   Output: [0,0,1,1,2,5]
```
**Constraints:** `1 <= nums.length <= 5 * 10^4`
**Function:** `var sortArray = function (nums) {}`

**বাংলা:** merge sort দিয়ে sort — আগে `merge(left, right)` helper আলাদা লিখে test, তারপর `mergeSort`। n = 8-এর recursion tree আঁকো।
**🧠 ভাবনা:** base case কী? (১টা বা ০টা element) প্রতিটা স্তরে merge-এ মোট কত কাজ?
**⏱️ লক্ষ্য:** Time O(n log n) সবসময় · Space O(n) · stable

#### ★ SO6 · Quick Sort 🟡 Medium ⬜
🔗 [LC 912](https://leetcode.com/problems/sort-an-array/) (sorted input-এ TLE হতে পারে — কেন?)
🌍 **Real-life:** P16.7-এর শিক্ষক — বারবার pivot দিয়ে ভাগ।
**EN:** Implement quick sort with a separate `partition` (Lomuto) helper. What happens on already-sorted input if the last element is always the pivot? Why does a random pivot help?
**বাংলা:** partition helper আলাদা। sorted input-এ শেষ element pivot দিলে কী হয়?
**⏱️ লক্ষ্য:** গড়ে O(n log n) · খারাপ pivot-এ O(n²) · Space O(log n) stack · in-place · unstable

#### ○ SO7 · ⏳ Count Inversions ⬜
🔗 কাছাকাছি: [LC 493 · Reverse Pairs](https://leetcode.com/problems/reverse-pairs/) (Hard)
🌍 র‍্যাঙ্কিং কতটা এলোমেলো — কতজোড়া উল্টো ক্রমে। **EN:** Count pairs `i < j` with `a[i] > a[j]` during merge. **বাংলা:** এখন শুধু চেষ্টা, না পারলে January।

**বলো:** *"Merge sort always splits in half, so there are log n levels, and merging each level costs O(n). That's O(n log n) in every case, but it needs O(n) extra space."*

---

## Day 26 · W4 D5 · শুক্র ৩০ অক্টো — Topic 16: Sorting ৩ — Comparator · Sort দিয়ে problem সহজ করা ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- নতুন problem-এ প্রথম প্রশ্নগুলোর একটা: **"আগে sort করলে কি সহজ হয়?"** (November-এ two pointers, December-এ intervals)
- comparator: **negative → a আগে**, positive → b আগে।
- একাধিক নিয়ম? → প্রথম নিয়মে সমান হলে `||` দিয়ে পরের নিয়ম।
- মাত্র ৩ রকম value? → sort না, **গুনে** বা **তিন pointer**।

### 📘 Concept phases + ছোট problem

**Phase 16.8 — Comparator** ⬜
- **P16.8 · Sort Prices Desc** 🟢 ⬜ — 🌍 "দাম: বেশি থেকে কম"। **EN:** Sort `[300, 50, 1200]` descending with a comparator. → `[1200, 300, 50]`. Then sort names with `localeCompare`.

**Phase 16.9 — একাধিক key** ⬜
- **P16.9** 🟢 ⬜ — **EN:** Sort students by grade desc, then name A→Z: `(a, b) => b.grade - a.grade || a.name.localeCompare(b.name)`.

**Phase 16.10 — `sort` mutate করে** ⬜
- **P16.10** 🟢 ⬜ — **EN:** Show that `arr.sort()` changes `arr`; keep the original with `toSorted` or `[...arr].sort(...)`.

**Phase 16.11 — তিন ভাগ এক pass-এ (Dutch flag)** ⬜
- **P16.11 · Trace Three Pointers** 🟢 ⬜ — 🌍 লাল, সাদা, নীল বল এক লাইনে সাজানো। **EN:** Trace `low/mid/high` on `[2, 0, 1]` step by step. → `[0, 1, 2]`

### ★ মূল problem

#### ★ SO8 · Multi-Key User Sort 🟢 ⬜
🔗 কাছাকাছি: [LC 2724 · Sort By](https://leetcode.com/problems/sort-by/)
🌍 **Real-life:** admin table — বয়স অনুযায়ী, সমান হলে নাম, তারপর নতুন account আগে।
**EN:** Sort users by `age` ascending; if equal, `name` A→Z; if still equal, `createdAt` newest first. Keep the original array unchanged.
**বাংলা:** তিন ধাপের নিয়মে sort, আসল array অক্ষত।
**⏱️ লক্ষ্য:** Time O(n log n) · Space O(n) (copy)

#### ★ SO9 · 75. Sort Colors 🟡 Medium ⬜
🔗 [LC 75](https://leetcode.com/problems/sort-colors/) (হুবহু)
🌍 **Real-life:** কাপড়ের দোকানে লাল, সাদা, নীল শার্ট আলাদা করে সাজানো।

**EN:** Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We use the integers `0`, `1`, and `2` to represent red, white, and blue. You must solve this problem without using the library's sort function.
```
Example 1: Input: nums = [2,0,2,1,1,0]   Output: [0,0,1,1,2,2]
Example 2: Input: nums = [2,0,1]         Output: [0,1,2]
```
**Constraints:** `1 <= n <= 300` · `nums[i]` is `0`, `1`, or `2`.
**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?
**Function:** `var sortColors = function (nums) {}` (in-place)

**বাংলা:** 0/1/2 সাজাও এক pass-এ, O(1) space। (ক) গুনে আবার লেখা (দুই pass) (খ) Dutch flag তিন pointer।
**🧠 ভাবনা:** তিনটা অঞ্চল: ০-দের জায়গা, ১-দের, ২-দের। `mid`-এ 2 পেলে `high`-এর সাথে swap — তারপর `mid` কেন বাড়াবে না?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ SO10 · 179. Largest Number 🟡 Medium ⬜
🔗 [LC 179](https://leetcode.com/problems/largest-number/) (হুবহু)
🌍 **Real-life:** সংখ্যার টুকরা জুড়ে সবচেয়ে বড় lottery নম্বর বানানো।

**EN:** Given a list of non-negative integers `nums`, arrange them such that they form the largest number and return it. Since the result may be very large, you need to return a string instead of an integer.
```
Example 1: Input: nums = [10,2]          Output: "210"
Example 2: Input: nums = [3,30,34,5,9]   Output: "9534330"
```
**Constraints:** `1 <= nums.length <= 100` · `0 <= nums[i] <= 10^9`
**Function:** `var largestNumber = function (nums) {}`

**বাংলা:** সংখ্যাগুলো এমনভাবে সাজাও যাতে জুড়লে সবচেয়ে বড় সংখ্যা হয়। সব 0 হলে (`[0,0]` → `"0"`)?
**🧠 ভাবনা:** দুটো সংখ্যা a, b — কে আগে বসবে? `a + b` বনাম `b + a` (string হিসেবে) তুলনা করো।
**⏱️ লক্ষ্য:** Time O(n log n · k) · Space O(n)

#### ★ SO11 · 215. Kth Largest Element in an Array 🟡 Medium ⬜
🔗 [LC 215](https://leetcode.com/problems/kth-largest-element-in-an-array/) (হুবহু)
🌍 **Real-life:** পরীক্ষায় তৃতীয় সর্বোচ্চ নম্বর কত।

**EN:** Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array. Note that it is the `k`th largest element in the sorted order, not the `k`th distinct element. Can you solve it without sorting?
```
Example 1: Input: nums = [3,2,1,5,6,4], k = 2         Output: 5
Example 2: Input: nums = [3,2,3,1,2,4,5,5,6], k = 4   Output: 4
```
**Constraints:** `1 <= k <= nums.length <= 10^5`
**Function:** `var findKthLargest = function (nums, k) {}`

**বাংলা:** k-তম বৃহত্তম সংখ্যা (duplicate সহ গোনা)। আপাতত sort দিয়ে; December W9-এ heap দিয়ে O(n log k)।
**⏱️ লক্ষ্য:** আজ Time O(n log n) · Space O(1)

#### ○ SO12 · 791. Custom Sort String 🟡 ⬜
🔗 [LC 791](https://leetcode.com/problems/custom-sort-string/) (হুবহু)
🌍 নিজের পছন্দের ক্রমে অক্ষর সাজানো।
**EN:** `order` is a permutation of unique letters; rearrange `s` so letters follow `order`'s sequence (others anywhere). `order = "cba", s = "abcd"` → `"cbad"`.
**বাংলা:** comparator বানাও order-এর index দিয়ে, বা count করে লেখো।

**বলো:** *"To compare two numbers, I check which concatenation is larger: a + b or b + a. Sorting with that comparator gives the largest overall number."*

### 🚪 Gate — Topic 16 (Sorting) ⬜

---

## Day 27 · W4 D6 · শনি ৩১ অক্টো — অক্টোবর Review · Mixed Unseen Set ★ ⬜

**আজ নতুন কিছু শেখা নেই।** অক্টোবরের সব pattern (loops, strings, arrays, objects, hashing, sorting) — **নাম ছাড়া** problem। প্রতিটায় আগে লেখো: *"Pattern: ___ কারণ ___"*, তারপর solve।
**Timer: প্রতিটা ২৫ মিনিট। Hint নেওয়ার আগে অন্তত ১৫ মিনিট।**

**🧠 নাম-ছাড়া problem-এ কীভাবে ভাবব:** শব্দ না, **গঠন** দেখো — "কতবার?" → count map · "জোড়া?" → complement map · "সবচেয়ে বড়/ছোট?" → track · "ক্রম?" → sort · "আগে দেখেছি?" → Set।

#### ★ M1 · Messages per User ⬜
🌍 chat app-এ কে কতগুলো message পাঠিয়েছে।
**EN:** Given `messages = [{ userId, text }]`, return `[userId, count]` pairs sorted by count descending.
**বাংলা:** প্রতিটা user কতগুলো message — বেশি থেকে কম।

#### ★ M2 · Biggest Temperature Rise ⬜
🔗 কাছাকাছি: [LC 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) (ছদ্মবেশে!)
🌍 কোন দুই দিনের মধ্যে (আগের দিন → পরের দিন) তাপমাত্রা সবচেয়ে বেশি বাড়ল।
**EN:** Given temperatures, find the maximum `temps[j] - temps[i]` with `j > i`. Return the two day indices.
**বাংলা:** পরের দিনটা অবশ্যই পরে — সবচেয়ে বড় পার্থক্য।

#### ★ M3 · 392. Is Subsequence ⬜
🔗 [LC 392](https://leetcode.com/problems/is-subsequence/) (হুবহু)
🌍 লম্বা message থেকে কিছু অক্ষর মুছে (ক্রম না বদলে) কি ছোট শব্দটা পাওয়া যায়?
**EN:** Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`. `s = "abc", t = "ahbgdc"` → `true`; `s = "axc", t = "ahbgdc"` → `false`.
**বাংলা:** `"ace"`, `"abcde"` → true।

#### ★ M4 · Most Expensive per Category ⬜
🌍 প্রতিটা category-র সবচেয়ে দামি product।
**EN:** Given `products = [{ id, category, price }]`, return `{ category: idOfMostExpensive }`.
**বাংলা:** প্রতিটা ভাগে সবচেয়ে বড় দাম — কোন দুই pattern একসাথে?

#### ○ M5 · Smallest Missing Positive ⬜
🔗 [LC 41 · First Missing Positive](https://leetcode.com/problems/first-missing-positive/) (⏳ Hard — O(1) space)
🌍 parking-এ সবচেয়ে ছোট খালি নম্বর। **EN:** Return the smallest positive integer not in the array. First with a Set. **বাংলা:** প্রথমে Set দিয়ে; O(1) space January-তে।

**Reflection:** কোন problem-এ pattern নাম ছাড়া চিনতে দেরি হলো? কোন clue-টা চোখ এড়িয়েছিল?

---

## Day 28 · W4 D7 · রবি ১ নভে — Practical JS ৩ · অক্টোবর শেষের মূল্যায়ন ⬜

### 🛠️ Practical JS ৩ (সবচেয়ে বেশি জিজ্ঞেস করা)

#### ★ P6 · 2627. Debounce 🟡 Medium ⬜
🔗 [LC 2627](https://leetcode.com/problems/debounce/) (হুবহু)
🌍 **Real-life:** search box — প্রতিটা অক্ষরে API call না করে, টাইপ থামার ৩০০ms পরে একবার।

**EN:** Given a function `fn` and a time in milliseconds `t`, return a debounced version of that function. A debounced function is a function whose execution is delayed by `t` milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.
```
Example: t = 50, calls at 30ms and 60ms → the 30ms call is cancelled, fn runs once at 110ms (60 + 50) with the second call's arguments.
```
**Function:** `var debounce = function (fn, t) {}`

**বাংলা:** শেষ call-এর `t` ms পরে একবার চলবে; মাঝে আবার ডাকলে timer নতুন করে শুরু।
**🧠 ভাবনা:** কী মনে রাখতে হবে? (timer-এর id — closure!) নতুন call এলে পুরনো timer কী করবে?

#### ★ P7 · Throttle 🟡 Medium ⬜
🔗 কাছাকাছি: [LC 2676 · Throttle](https://leetcode.com/problems/throttle/) (premium হতে পারে)
🌍 **Real-life:** scroll event — প্রতি ২০০ms-এ সর্বোচ্চ একবার position update।
**EN:** Write `throttle(fn, wait)` so `fn` runs at most once every `wait` ms. Explain the difference from debounce in one line.
**বাংলা:** `wait` ms-এ সর্বোচ্চ একবার। debounce-এর সাথে পার্থক্য এক লাইনে।

#### ○ P8 · Debounce with `cancel` and `leading` ⬜
**EN:** Add `cancel()` and a `leading: true` option to your debounce. **বাংলা:** শুরুতেই একবার চালানোর option।

### 🔁 Re-solve
- ⬜ H8 Longest Consecutive · ⬜ H6 Top K (bucket) · ⬜ SO9 Sort Colors · ⬜ C3 Memoize

### 📊 অক্টোবর মূল্যায়ন (`TRACKER.md`-এ)
1. মোট ★ কতগুলো শেষ? কতগুলো Day +7 re-solve পাস করেছে?
2. সবচেয়ে কঠিন ৩টা problem — কেন?
3. ফাঁকা editor দেখে এখন অনুভূতি (১–১০)? মাসের শুরুতে কেমন ছিল?
4. পিছিয়ে আছি? → কোন ★ নভেম্বরের প্রথম সপ্তাহে যাবে।

### ✅ মাস শেষে নিজেকে যাচাই
- ⬜ Two Sum, Valid Anagram, Group Anagrams, Maximum Subarray, Product Except Self — প্রতিটা ফাঁকা editor থেকে ২০ মিনিটে
- ⬜ যেকোনো snippet দেখে complexity বলতে পারি, কারণসহ
- ⬜ `debounce` আর `throttle` লিখতে আর পার্থক্য বলতে পারি
- ⬜ নাম ছাড়া problem দেখে "এটা hashing/sorting/simple traversal" — চিনতে পারি

**বলো (৩ মিনিট, record করো):** "Two Sum" interviewer-কে পুরো ব্যাখ্যা — clarify থেকে alternative পর্যন্ত। পরের মাসে আবার record করে তুলনা করবে।

---

➡️ **পরের মাস:** [november-plan.md](../month-2-november/november-plan.md)
