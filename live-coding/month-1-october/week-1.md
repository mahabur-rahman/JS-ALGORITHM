# October · Week 1 (সামগ্রিক W1) — ৫ থেকে ১১ অক্টোবর
## Phase A: JavaScript ভিত্তি + Framework

**সপ্তাহের লক্ষ্য:** যেকোনো easy problem দেখে ১ মিনিটে বলতে পারা — *"loop-এর আগে এটা, ভেতরে এটা, পরে এটা"* — আর প্রথম ৩ লাইন দ্বিধা ছাড়া লেখা।

**নিয়ম (Phase A):** তোমার ৪+ বছরের অভিজ্ঞতা আছে। প্রতিদিনের **"Output আন্দাজ"** অংশে সব ঠিক হলে concept অংশ দ্রুত পার হয়ে problem-এ যাও। ভুল হলে সেটাই আজকের পড়ার জায়গা।

**এই সপ্তাহে নিষেধ:** `map`, `filter`, `reduce`, `Math.max(...arr)`, `sort` — যদি না problem-এ আলাদা করে বলা থাকে। সব loop দিয়ে।

---

## Day 1 — সোম, ৫ অক্টোবর — Setup · Framework · Variables & Memory · Data Types

**আজকের লক্ষ্য:** কাজের পরিবেশ তৈরি + reference আর value-এর পার্থক্য হাড়ে হাড়ে বোঝা।

**Setup (১০ মিনিট):**
- `live-coding/practice/october/week-1/` folder বানাও। প্রতিদিন `day-N.js`।
- চালানো: `node live-coding/practice/october/week-1/day-1.js`
- নিজের test: `console.assert(sum([1,2]) === 3, "sum failed");` — ভুল হলে শুধু তখনই message দেখায়।
- (জেনে রাখো: HackerRank ধরনের platform-এ input `stdin` থেকে আসে — W12-এ একবার practice করবে।)

**পড়বে (১৫ মিনিট):** `00-framework/01-master-framework.md` — অংশ ১, ২, ৪ (Anti-Freeze)।

**শিখবে:**
- **Declaration:** `const` default, `let` শুধু বদলালে, `var` কেন না।
- **Scope:** block (`let/const`) বনাম function (`var`) — `var` `if/for` থেকে বাইরে পালায়।
- **Hoisting & TDZ:** `var` → `undefined`; `let/const` → ReferenceError।
- **Primitive বনাম Reference ★:** copy by value বনাম একই জিনিসের দুটো নাম; **mutation** (`push`) বনাম **reassignment** (`=`); `const` array-তে push চলে; function-এ array পাঠালে push আসলটা বদলায়, `=` বদলায় না।
- **Data types:** ৭টা primitive (string, number, boolean, null, undefined, bigint, symbol) + object/array/function।
- **`typeof` ফাঁদ:** `typeof null` → `"object"`, `typeof []` → `"object"`, `typeof NaN` → `"number"`। সঠিক যাচাই: `Array.isArray`, `=== null`, `Number.isNaN`।
- **null বনাম undefined:** ইচ্ছাকৃত খালি বনাম এখনো দেওয়া হয়নি।

**Output আন্দাজ (আগে খাতায়, তারপর চালাও):**
```js
let a = 5; let b = a; b = 10; console.log(a);
const arr = [1, 2]; const copy = arr; copy.push(3); console.log(arr);
console.log(x); var x = 1;
// console.log(y); let y = 1;   // কী হবে? (আলাদা করে চালাও)
function f(list) { list.push(4); list = []; }
const n = [1]; f(n); console.log(n);
for (var i = 0; i < 3; i++) {} console.log(i);
console.log(typeof null, typeof [], typeof NaN, typeof function () {});
```

**Problems:**
- [x] ★ **1.1** দুটো variable-এর value অদলবদল — ৩ ভাবে: temp, destructuring, যোগ-বিয়োগ। `A` · O(1)
- [x] ★ **1.2** `updateName(user, newName)` — আসল `user` না বদলে নতুন object ফেরত। প্রমাণ করো আসলটা বদলায়নি। `B` · O(k)
- [x] ★ **1.3** `addItem(cart, item)` দুইভাবে: (ক) আসল array বদলায় (খ) নতুন array ফেরত দেয়। কখন কোনটা ভালো — এক লাইনে। `B`
- [x] ★ **2.1** `getType(value)` → `"null" | "array" | "object" | "number" | "nan" | "string" | "boolean" | "undefined" | "function"`। ১০টা input-এ test। `B` · O(1)
- [ ] ○ **2.2** `isEmpty(value)` — `null, undefined, "", [], {}` → `true`। **আগে সিদ্ধান্ত নাও:** `0` আর `false` empty কিনা — interviewer-কে জিজ্ঞেস করার মতো লিখে রাখো। `C`

**বলো (English):** *"Primitives are copied by value, objects by reference. So when I pass an array to a function and push to it, the original array changes, but reassigning the parameter doesn't affect the caller."*

**শেষ হয়েছে বুঝবে যখন:** যেকোনো লাইন দেখে বলতে পারো — "এখানে নতুন জিনিস তৈরি হলো, নাকি পুরনো জিনিসের নতুন নাম?"

---

## Day 2 — মঙ্গল, ৬ অক্টোবর — Operators & Coercion · Conditions

**আজকের লক্ষ্য:** condition-এর ক্রম আর guard clause — পরিষ্কার code-এর ভিত্তি।

**শিখবে:**
- **Arithmetic:** `+ - * / % **`; `+` string পেলে জোড়ে, `-` সংখ্যা বানায়।
- **`i++` বনাম `++i`**।
- **`===` সবসময়;** `==` coercion করে।
- **Logical ★:** `&&`/`||` value ফেরত দেয়; short-circuit।
- **`||` বনাম `??` ★:** `0 || 10` → 10, `0 ?? 10` → 0।
- **`?.`**: `user?.address?.city`, `arr?.[0]`, `fn?.()`।
- **Assignment:** `+=`, `||=`, `??=`; ternary (nested এড়াও)।
- **Conditions:** `if/else if/else`; **ক্রম গুরুত্বপূর্ণ — সবচেয়ে নির্দিষ্ট আগে।**
- **Guard clause / early return ★:** ভুল input শুরুতেই `return`।
- **Truthy/Falsy ★:** ৮টা falsy — `false, 0, -0, 0n, "", null, undefined, NaN`। ফাঁদ: `if (count)`।
- **`switch`:** `break` ভুললে পরের case-এ পড়ে।
- **Lookup object:** `({ small: 10, large: 20 })[size]` — লম্বা if-chain-এর বদলে।

**Output আন্দাজ:**
```js
console.log("5" + 1, "5" - 1, 1 + true);
console.log(null == undefined, null === undefined);
console.log(0 || "x", 0 ?? "x", "" || "d", "" ?? "d");
console.log(NaN === NaN);
let i = 5; console.log(i++, i, ++i);
console.log([] ? "truthy" : "falsy", "0" ? "truthy" : "falsy");
```

**Problems:**
- [x] ★ **3.1** `getPort(config)` — না থাকলে 3000; **`port: 0` হলে 0-ই থাকবে;** `config` নিজে `undefined` হলেও crash না। `B`
- [x] ★ **3.2** `canAccess(user)` — user আছে, `isActive` true, role `"admin"` বা `"editor"` — এক লাইনে। `B`
- [x] ★ **4.1** FizzBuzz 1..n (array ফেরত)। তারপর নতুন নিয়ম: 7 → "Bazz"। তোমার code কত সহজে বদলাল? `A` · O(n)
- [ ] ★ **4.2** `grade(score)` — 90+ A, 80+ B, 70+ C, 60+ D, নিচে F; 0–100-এর বাইরে বা number না হলে `"Invalid"`। guard clause দিয়ে। `A`
- [ ] ★ **4.3** `isLeapYear(year)` — নিয়ম নিজে খুঁজে (৪, ১০০, ৪০০)। ক্রমই চ্যালেঞ্জ। `B`
- [ ] ○ **4.4** `triangleType(a, b, c)` → `"invalid" | "equilateral" | "isosceles" | "scalene"`। edge: 0, negative, a + b ≤ c। `C`

**বলো:** *"I use early returns to handle invalid input first, so the main logic stays flat and readable."*

---

## Day 3 — বুধ, ৭ অক্টোবর — Loops ★ (Loop Template)

**আজকের লক্ষ্য:** "পরের লাইন কী লিখব" — তার প্রথম উত্তর: **Loop Template।**

**শিখবে:**
- **`for`-এর তিন সিদ্ধান্ত:** কোথা থেকে শুরু (0? 1? শেষ index?) · কোথায় থামব (`< n`? `<= n`? `< n - 1`?) · কত ধাপ (`i++`, `i += 2`, `i--`)।
- **কোন loop কখন:** `for` (index লাগে) · `for...of` (শুধু value) · `while` (কতবার জানি না) · `do...while` (অন্তত একবার) · `for...in` (object key — array-তে না) · `forEach` (থামানো যায় না)।
- **উল্টো loop, লাফানো loop।**
- **Nested loop:** ভেতরের লাইন মোট কতবার চলে — গোনো। pair loop: `j = i + 1`।
- **`break` / `continue` / labeled break** (`outer: for ...` → `break outer`)।
- **Loop Template ★:**
  ```
  Loop-এর আগে  → কী মনে রাখতে হবে?        (count = 0, max = -Infinity, result = [])
  Loop-এর ভেতরে → প্রতিটা item-এ কী সিদ্ধান্ত? (count++? max বদলাও? push?)
  Loop-এর পরে  → কী ফেরত দেব?              (return count)
  ```
- **Off-by-one:** `arr[i + 1]` ব্যবহার করলে `i < n - 1`; loop চলাকালীন array বদলানো বিপদ।

**Micro (Next-line drill):** প্রতিটার জন্য শুধু **loop-এর আগের লাইন** লেখো (পুরো code না):
1. array-তে কতগুলো even → `?`
2. সবচেয়ে ছোট সংখ্যা → `?`
3. সব negative সংখ্যা নতুন array-তে → `?`
4. প্রথম 0-এর index → `?`
5. সব সংখ্যার গুণফল → `?` (ফাঁদ: শুরু 0 দিলে?)

**Problems (map/filter/reduce/forEach নিষেধ):**
- [ ] ★ **5.1** শুধু **বিজোড় index**-এর element যোগ; তারপর **উল্টো দিক থেকে** একই কাজ। `A` · O(n), O(1)
- [ ] ★ **5.2** সব জোড়া (i < j) print। n = 5-এ কতটা জোড়া? **সূত্র নিজে বের করো।** `B` · O(n²)
- [ ] ★ **5.3** `*` দিয়ে n সারির পিরামিড। row → space/star সংখ্যার সম্পর্ক আগে টেবিল করে। `B`
- [ ] ★ **5.4** প্রথম index যেখানে `nums[i] > nums[i + 1]`, না থাকলে `-1`। early exit + boundary। `C` · O(n)
- [ ] ○ **5.5** 2D matrix-এর প্রতিটা **column**-এর যোগফল। `C` · O(r × c)

**বলো:** *"Before the loop I keep a running count. Inside the loop I check each element. After the loop I return the count."*

---

## Day 4 — বৃহস্পতি, ৮ অক্টোবর — Functions

**আজকের লক্ষ্য:** বড় problem-কে helper function-এ ভাগ করার অভ্যাস — live coding-এর জাদুকরী কৌশল।

**শিখবে:**
- declaration / expression / arrow — hoisting পার্থক্য।
- parameters: default, rest (`...nums`), destructuring (`{ name, age }`)।
- **`return` বনাম `console.log` ★** — সবচেয়ে common interview ভুল। arrow-এ object: `() => ({ a: 1 })`।
- pure function বনাম side effect।
- higher-order function, callback — function-কে value হিসেবে পাঠানো।
- **Helper-এ ভাগ করা ★:** আটকে গেলে "এই অংশটা `isValid()` — পরে লিখব" বলে এগিয়ে যাওয়া।
- recursion-এর পরিচয়: function নিজেকে ডাকে + base case বাধ্যতামূলক (বিস্তারিত W7)।

**Problems:**
- [ ] ★ **6.1** `sum(...nums)` — যেকোনো সংখ্যক argument, `reduce` ছাড়া। `A`
- [ ] ★ **6.2** `myMap(arr, fn)` আর `myFilter(arr, fn)` — built-in ছাড়া। callback পায় `(item, index, arr)`। `B` · O(n)
- [ ] ★ **6.3** `applyNTimes(fn, n, x)` — `applyNTimes(double, 3, 1)` → 8। `B`
- [ ] ★ **6.4** `checkPassword(pw)` — ≥ 8 অক্ষর, একটা digit, একটা uppercase, কোনো space না। **ভাঙা নিয়মের list ফেরত দাও।** প্রতিটা নিয়ম আলাদা helper। `C` · O(n)
- [ ] ○ **6.5** `myReduce(arr, fn, initial)` — initial না দিলে কী হবে? খালি array + initial নেই হলে? `C`

**বলো:** *"I'll split this into small helper functions, one per rule. That makes the main function easy to read and each rule easy to test."*

---

## Day 5 — শুক্র, ৯ অক্টোবর — Numbers & Math ★

**আজকের লক্ষ্য:** digit-এর কাজ আর number-এর ফাঁদ — easy round-এ খুব আসে।

**শিখবে:**
- `0.1 + 0.2 !== 0.3` কেন; `NaN`; `Infinity` (min/max-এর শুরু); `Number.MAX_SAFE_INTEGER` → তার বেশি হলে `BigInt`।
- `Math.floor / ceil / round / trunc` — **negative-এ পার্থক্য** (`Math.floor(-2.5)` বনাম `Math.trunc(-2.5)`)।
- integer division: `Math.floor(a / b)`; `%` negative-এ negative (`-7 % 3 === -1`)।
- conversion: `Number()`, `parseInt(s, 10)`, unary `+`, `toFixed` (string দেয়), `n.toString(2)`।
- **Digit-এর দুই অস্ত্র ★:** `n % 10` → শেষ digit; `Math.floor(n / 10)` → শেষ digit বাদ।
- prime: কেন `√n` পর্যন্ত check যথেষ্ট।

**Output আন্দাজ:**
```js
console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3);
console.log(Math.floor(-2.5), Math.trunc(-2.5), Math.round(-2.5));
console.log(-7 % 3, 7 % -3);
console.log(parseInt("08"), parseInt("12px"), Number("12px"));
console.log((10).toString(2), (255).toString(16));
```

**Problems (string-এ রূপান্তর নিষেধ যেখানে বলা আছে):**
- [ ] ★ **7.1** `sumOfDigits(n)` — string ছাড়া। 1234 → 10। `A` · O(digits)
- [ ] ★ **7.2** `reverseNumber(n)` — -123 → -321, 120 → 21। negative কীভাবে? `B`
- [ ] ★ **7.3** `isPalindromeNumber(n)` — string ছাড়া। negative palindrome হয়? `B` · O(digits), O(1)
- [ ] ★ **7.4** `isPrime(n)` — আগে O(n), তারপর O(√n)। **কেন √n যথেষ্ট — English-এ।** edge: 0, 1, 2। `C`
- [ ] ○ **7.5** 1..n-এর সব Armstrong number (153 = 1³ + 5³ + 3³)। কোন helper লাগবে? `C`

**বলো:** *"If n has a divisor larger than its square root, it must also have one smaller than the square root, so checking up to √n is enough."*

---

## Day 6 — শনি, ১০ অক্টোবর — Basic Problem Solving ★ (৬টা মৌলিক কাজ)

**আজকের লক্ষ্য:** Phase A-র সবচেয়ে জরুরি দিন। "কোথা থেকে শুরু করব" — তার প্রথম পূর্ণ উত্তর।

**শিখবে:**
- **Input → Process → Output:** code-এর আগে input type, output type, একটা example লেখো।
- **৬টা মৌলিক কাজ** — প্রায় সব easy problem এদের কোনোটা বা মিশ্রণ:

  | কাজ | Loop-এর আগে |
  |---|---|
  | Counting | `let count = 0` |
  | Accumulation | `let sum = 0` |
  | Min/Max | `let max = -Infinity` বা `arr[0]` |
  | Search | `return` দিয়ে early exit বা `let found = -1` |
  | Build | `const result = []` |
  | Track two things | `let first = -Infinity, second = -Infinity` |

- **শুরুর value ★:** `max = 0` দিলে সব negative হলে ভুল।
- **খালি input:** কী ফেরত দেব? — **interviewer-কে জিজ্ঞেস।**
- **Dry run টেবিল** (`00-framework/02` দেখো)।

**পড়বে (১০ মিনিট):** `01-master-framework.md` অংশ ৩ (১৬ ধাপ) আর ৫ (Blank Editor)।
**আজ থেকে:** প্রতিটা ★ problem-এ Blank Editor header comment লিখে শুরু করবে।

**Problems (`Math.max`, `sort`, `reduce` নিষেধ):**
- [ ] ★ **8.1** সবচেয়ে বড় সংখ্যা। সব negative? খালি array? `A` · O(n), O(1)
- [ ] ★ **8.2** string-এ vowel আর consonant আলাদা গোনো। space, digit, uppercase? `B`
- [ ] ★ **8.3** **দ্বিতীয় বৃহত্তম distinct** — `[5,5,4]` → 4, `[3,3]` → `null`। **এক loop-এ।** `C` · O(n), O(1)
- [ ] ★ **8.4** পাশাপাশি সমান element-এর সবচেয়ে লম্বা ধারা — `[1,1,2,2,2,3]` → 3। `C` · O(n), O(1)
- [ ] ★ **8.5 (unseen)** দৈনিক লেনদেন `[100, -50, -80, 30]`, শুরু 0 — **প্রথম কোন দিন balance negative?** না হলে -1। ৬টার কোনগুলোর মিশ্রণ — নিজে চেনো। `C`

**বলো:** *"I'll track the largest and second-largest values in one pass. When I see a new maximum, the old maximum becomes the second largest."*

---

## Day 7 — রবি, ১১ অক্টোবর — Revision · Anti-Freeze Drill · Week Review

**আজকের লক্ষ্য:** সপ্তাহের ★ গুলো ফাঁকা editor থেকে আবার + Anti-Freeze protocol হাতে-কলমে।

**Re-solve (ফাঁকা editor, timer — প্রতিটা ≤ ১০ মিনিট):**
- [ ] 4.1 FizzBuzz · [ ] 5.4 first descent · [ ] 7.2 reverseNumber · [ ] 8.3 second largest · [ ] 8.5 balance

**Anti-Freeze Drill (২০ মিনিট):** নিচের problem — **solve করা লক্ষ্য না।** লক্ষ্য হলো `01-master-framework.md` অংশ ৪-এর ১৩ ধাপ editor-এ comment হিসেবে লেখা, ধাপ 1 থেকে 12 পর্যন্ত, তারপর code।
- [ ] ★ **D7.1** *"একটা দোকানের দৈনিক বিক্রির array দেওয়া আছে। সবচেয়ে লম্বা ক্রমাগত দিনের ধারা বের করো যেখানে প্রতিদিনের বিক্রি আগের দিনের চেয়ে বেশি।"* (`[3,4,5,2,6,7,8,1]` → 4)
- [ ] ○ **D7.2** *"একটা ক্লাসের নম্বরের list — প্রথম ও দ্বিতীয় স্থানের ছাত্রের নম্বরের পার্থক্য বের করো।"* (একই নম্বর দুজনের হলে?)

**Week Review (Reflection — `TRACKER.md`-এ):**
1. Loop Template কি এখন স্বয়ংক্রিয়? কোন problem-এ "loop-এর আগে কী" ভাবতে দেরি হয়েছে?
2. কোন JS ফাঁদে পড়েছি (reference, `??`, `%`, `typeof`)?
3. আত্মবিশ্বাস ১–১০।

**বলো:** সপ্তাহের যেকোনো একটা problem — ৬০ সেকেন্ডের কাঠামোয় (`05-interview-communication.md` অংশ ৩)।
