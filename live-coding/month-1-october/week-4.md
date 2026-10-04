# October · Week 4 (সামগ্রিক W4) — ২৬ অক্টোবর থেকে ১ নভেম্বর
## Scope/Closure/`this` · Class & OOP · Sorting · Month-1 Review

**সপ্তাহের লক্ষ্য:**
1. Closure আর `this` — full-stack interview-এর "output বলো" প্রশ্নে আত্মবিশ্বাস।
2. Class দিয়ে নিজের data structure বানানো (W7 থেকে LinkedList, Heap, Trie সবই class)।
3. Sorting algorithm নিজে হাতে লেখা — আর **কখন কোনটা, কেন** বলতে পারা।
4. অক্টোবরের সব pattern একসাথে — নাম ছাড়া problem-এ চেনা।

---

## Day 1 — সোম, ২৬ অক্টোবর — Scope · Closure · `this` ◆

**Interview-এ যেভাবে আসে:** "এই code-এর output কী?" (setTimeout + var), "একটা counter বানাও যার state বাইরে থেকে বদলানো যায় না", "`once` / `memoize` লেখো", "`bind` polyfill"।

**শিখবে:**
- **Scope:** global / function / block; lexical scope (কোথায় **লেখা** হয়েছে, কোথায় ডাকা হয়েছে না); scope chain; shadowing।
- **Closure ★:** ভেতরের function তার জন্মস্থানের variable মনে রাখে — function শেষ হওয়ার পরেও।
- ব্যবহার: private state (counter), `once`, `memoize`, factory function।
- **Classic ফাঁদ:** `for (var i ...) setTimeout(() => console.log(i))` বনাম `let` — কেন আলাদা।
- **`this`-এর ৪ নিয়ম:** default (strict-এ `undefined`) · implicit (`obj.fn()` → obj) · explicit (`call/apply/bind`) · `new`।
- **Arrow function-এর `this`:** নিজের নেই — বাইরের থেকে নেয়।
- **ফাঁদ:** `const f = obj.method; f();` → `this` হারায়।

**Output আন্দাজ:**
```js
for (var i = 0; i < 3; i++) setTimeout(() => console.log("var", i));
for (let j = 0; j < 3; j++) setTimeout(() => console.log("let", j));

const obj = {
  name: "A",
  regular() { return this.name; },
  arrow: () => typeof this,
  later() { return [1].map(function () { return this; })[0]; },
};
console.log(obj.regular(), obj.arrow());
const fn = obj.regular; try { console.log(fn()); } catch (e) { console.log("error"); }
```

**Problems:**
- [ ] ★ **C1** `createCounter(start)` → `{ increment, decrement, reset, value }`। count বাইরে থেকে সরাসরি বদলানো যাবে না। `B`
- [ ] ★ **C2** `once(fn)` — প্রথমবার চালায়, পরে আগের ফলাফলই ফেরত দেয়। `B`
- [ ] ★ **C3** `memoize(fn)` — এক argument-এর জন্য। cache কোথায় থাকে? (closure!) একাধিক argument-এর জন্য W7-এ। `C`
- [ ] ○ **C4** `myBind(fn, thisArg, ...args)` — `call`/`apply` দিয়ে। `C`

**বলো:** *"The inner function closes over the `count` variable, so the state stays private. Only the returned methods can change it."*

---

## Day 2 — মঙ্গল, ২৭ অক্টোবর — Class & OOP · Error Handling ★

**কেন জরুরি:** JS-এ Queue, Heap, Trie, LinkedList, Union Find — কোনোটাই built-in নেই। interview-এ নিজে class লিখতে হয়।

**শিখবে:**
- `class`, `constructor`, method, field, `static`, **private `#field`**, getter/setter।
- `extends` / `super`।
- **ভেতরের কাজ ◆:** prototype chain; `new` আসলে ৪টা কাজ করে (নতুন object, prototype link, constructor চালানো, return); `instanceof`।
- **Error handling:** `throw new Error("...")`, `try/catch/finally`, নিজের Error class; **invalid input-এ কী করব** — interviewer-কে জিজ্ঞেস (throw? null? -1?)।
- **JS-এ queue-র সমস্যা:** `shift()` O(n) → head index দিয়ে O(1) (`04-patterns` skeleton 3.14)।

**Problems:**
- [ ] ★ **K1 Stack class** — `push / pop / peek / isEmpty / size`। খালি stack-এ `pop` হলে? `A`
- [ ] ★ **K2 Queue class (O(1) dequeue)** — `enqueue / dequeue / peek / size`। `shift()` ব্যবহার নিষেধ। মাঝে মাঝে ভেতরের array পরিষ্কার করবে কীভাবে? `C`
- [ ] ○ **K3 ShoppingCart class** — `add(item, qty)`, `remove(id)`, `total()`, invalid qty-তে error। `B`

**বলো:** *"JavaScript arrays don't give an O(1) dequeue, because shift moves every element. So I keep a head index and advance it instead."*

---

## Day 3 — বুধ, ২৮ অক্টোবর — Sorting ১: Bubble · Selection · Insertion (হাতে)

**লক্ষ্য:** এগুলো interview-এ খুব কম সরাসরি আসে, কিন্তু **loop, swap, invariant** চিন্তার সেরা অনুশীলন। আর "stable / in-place" ধারণা এখান থেকেই।

**শিখবে:**
- **Bubble:** পাশাপাশি তুলনা করে বড়টাকে শেষে ঠেলো; একটা pass-এ কোনো swap না হলে থামো।
- **Selection:** বাকি অংশের সবচেয়ে ছোটটা খুঁজে সামনে বসাও।
- **Insertion:** বাঁয়ের অংশ সবসময় sorted; নতুনটাকে ঠিক জায়গায় ঢোকাও — **প্রায়-sorted data-তে দ্রুত।**
- **Invariant:** প্রতিটা pass-এর পর কোন অংশ নিশ্চিতভাবে ঠিক জায়গায়?
- **Stable** (সমান element-এর আগের ক্রম থাকে) বনাম unstable; **in-place**।

**Problems (built-in sort নিষেধ):**
- [ ] ★ **SO1** Bubble sort (early-stop সহ) — best/worst complexity। `B`
- [ ] ★ **SO2** Selection sort — কেন unstable? একটা উদাহরণ দাও। `B`
- [ ] ★ **SO3** Insertion sort — already sorted input-এ কত তুলনা? `B`
- [ ] ○ **SO4** তিনটার টেবিল: best / average / worst / space / stable / কখন ব্যবহার। `A`

তোমার পুরনো `codeAbc/selectionSort.js`, `insertionSort.js` খুলবে না — ফাঁকা editor থেকে।

---

## Day 4 — বৃহস্পতি, ২৯ অক্টোবর — Sorting ২: Merge Sort · Quick Sort ★

**শিখবে:**
- **Merge sort:** ভাগ করো (অর্ধেক) → দুই দিক sort (recursion) → **merge** (দুটো sorted array জোড়া — A2-এর আত্মীয়)। O(n log n) সবসময়; O(n) space; stable।
- **Quick sort:** pivot বেছে ছোটদের বাঁয়ে, বড়দের ডানে (partition) → দুই দিক recursion। গড়ে O(n log n), খারাপ pivot-এ O(n²); in-place; unstable। random pivot কেন।
- **Divide and conquer** চিন্তা — W7 Recursion-এর ভিত্তি।
- JS-এর `sort` ভেতরে TimSort (merge + insertion) — stable।

**Problems:**
- [ ] ★ **SO5 Merge Sort** — `merge(left, right)` helper আগে আলাদা করে লেখো ও test করো, তারপর `mergeSort`। recursion tree আঁকো (n = 8)। `C`
- [ ] ★ **SO6 Quick Sort** — partition (Lomuto) helper আলাদা। already-sorted input-এ শেষ element pivot দিলে কী হয়? `D`
- [ ] ○ **SO7** ⏳ Count Inversions — merge-এর সময় গোনো (এখন শুধু চেষ্টা, না পারলে January)। `E`

**বলো:** *"Merge sort always splits in half, so there are log n levels, and merging each level costs O(n). That's O(n log n) in every case, but it needs O(n) extra space."*

---

## Day 5 — শুক্র, ৩০ অক্টোবর — Sorting ৩: Comparator · Sort দিয়ে problem সহজ করা ★

**শিখবে:**
- **Comparator:** `(a, b) => a - b`; negative → a আগে। string: `a.localeCompare(b)`।
- **একাধিক key:** `(a, b) => a.age - b.age || a.name.localeCompare(b.name)`।
- `sort` mutate করে → দরকার হলে `toSorted` বা `[...arr].sort(...)`।
- **"আগে sort করলে কি সহজ হয়?"** — অনেক problem-এর প্রথম প্রশ্ন (W5-এ two pointers, W9-এ intervals)।
- **Dutch National Flag:** তিন pointer দিয়ে এক pass-এ তিন ভাগ।

**Problems:**
- [ ] ★ **SO8** user list sort: আগে `age` ascending, সমান হলে `name` A→Z, তারপর `createdAt` নতুন আগে। আসল array অক্ষত রাখো। `B`
- [ ] ★ **SO9 Sort Colors** — 0/1/2-এর array, এক pass, O(1) space। (ক) count করে আবার লেখা (খ) Dutch flag তিন pointer। `D`
- [ ] ★ **SO10 Largest Number** — `[3,30,34,5,9]` → `"9534330"`। comparator-এর চালাকি: `a + b` বনাম `b + a`। সব 0 হলে? `D`
- [ ] ★ **SO11 Kth Largest Element** — আপাতত sort দিয়ে (O(n log n))। W9-এ heap দিয়ে O(n log k)। `B`
- [ ] ○ **SO12 Custom Sort String** `C`

**বলো:** *"To compare two numbers, I check which concatenation is larger: a + b or b + a. Sorting with that comparator gives the largest overall number."*

---

## Day 6 — শনি, ৩১ অক্টোবর — অক্টোবর Review · Mixed Unseen Set ★

**আজ নতুন কিছু শেখা নেই।** অক্টোবরের সব pattern (loops, strings, arrays, objects, hashing, sorting) — **নাম ছাড়া** problem। প্রতিটায় আগে লেখো: *"Pattern: ___ কারণ ___"*, তারপর solve।

**Timer: প্রতিটা ২৫ মিনিট। Hint নেওয়ার আগে অন্তত ১৫ মিনিট।**
- [ ] ★ **M1** *"একটা chat app-এ message-এর list। প্রতিটা user কতগুলো message পাঠিয়েছে — সবচেয়ে বেশি থেকে কম ক্রমে `[userId, count]` ফেরত দাও।"*
- [ ] ★ **M2** *"একটা temperature-এর array। এমন দুটো দিন খোঁজো (আগের দিন, পরের দিন) যাদের পার্থক্য সবচেয়ে বেশি — পরের দিনটা অবশ্যই পরে হতে হবে।"*
- [ ] ★ **M3** *"দুটো string। একটা থেকে কিছু অক্ষর মুছে (ক্রম না বদলে) কি অন্যটা পাওয়া যায়?"* (`"ace"`, `"abcde"` → true)
- [ ] ★ **M4** *"একটা product-এর list `[{ id, category, price }]`। প্রতিটা category-র সবচেয়ে দামি product-এর id।"*
- [ ] ○ **M5** *"পূর্ণসংখ্যার array। এমন সবচেয়ে ছোট ধনাত্মক পূর্ণসংখ্যা যেটা array-তে নেই।"* (প্রথমে Set দিয়ে; O(1) space — ⏳ First Missing Positive)

**Reflection:** কোন problem-এ pattern নাম ছাড়া চিনতে দেরি হলো? কোন clue-টা চোখ এড়িয়েছিল?

---

## Day 7 — রবি, ১ নভেম্বর — Practical JS ৩ · অক্টোবর শেষের মূল্যায়ন

**Practical JS ৩ (সবচেয়ে বেশি জিজ্ঞেস করা):**
- [ ] ★ **P6 debounce(fn, wait)** — শেষ call-এর `wait` ms পরে একবার চলে। search box-এর উদাহরণ দিয়ে ব্যাখ্যা। `C`
- [ ] ★ **P7 throttle(fn, wait)** — `wait` ms-এ সর্বোচ্চ একবার। debounce-এর সাথে পার্থক্য — এক লাইনে। `C`
- [ ] ○ **P8** debounce-এ `cancel()` আর `leading` option যোগ করো। `D`

**Re-solve:** [ ] H8 Longest Consecutive · [ ] H6 Top K (bucket) · [ ] SO9 Sort Colors · [ ] C3 memoize

**অক্টোবর মূল্যায়ন (`TRACKER.md`-এ লেখো):**
1. মোট ★ কতগুলো শেষ? কতগুলো Day +7 re-solve পাস করেছে?
2. সবচেয়ে কঠিন ৩টা problem কোনগুলো — কেন?
3. ফাঁকা editor দেখে এখন অনুভূতি কেমন (১–১০)? মাসের শুরুতে কেমন ছিল?
4. পিছিয়ে আছি? → কোন ★ নভেম্বরের প্রথম সপ্তাহে যাবে — আমাকে জানাও, আমি plan সমন্বয় করব।

**বলো (৩ মিনিট, record করো):** "Two Sum" problem-টা interviewer-কে পুরো ব্যাখ্যা — clarify থেকে alternative পর্যন্ত। পরের মাসে আবার record করে তুলনা করবে।
