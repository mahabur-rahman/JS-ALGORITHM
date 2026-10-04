# 03 — Complexity: কীভাবে মাপতে হয় (মুখস্থ না, হিসাব)

> Big-O মুখস্থ করার জিনিস না। এটা একটা প্রশ্ন: **"n যদি ১০ গুণ বড় হয়, কাজ কত গুণ বাড়বে?"**

---

## ১. Time Complexity মাপার ৫ ধাপ

1. **n কী?** — input-এর কোন মাপটা বাড়ে? (array length, string length, node সংখ্যা, grid-এর r × c)। একাধিক input হলে আলাদা নাম: n, m।
2. **প্রতিটা loop কতবার চলে?** — n-এর হিসাবে লেখো।
3. **Nested হলে গুণ, পরপর হলে যোগ।**
4. **Loop-এর ভেতরে লুকানো খরচ যোগ করো।** (`includes`, `slice`, `shift`, `sort` — নিচের টেবিল)
5. **Constant আর ছোট term বাদ দাও।** O(2n + 5) → O(n); O(n² + n) → O(n²)।

---

## ২. উদাহরণ দিয়ে — তোমার list-এর ৮টা

### (ক) Single loop
```js
for (let i = 0; i < n; i++) sum += arr[i];
```
Loop n বার, ভেতরে O(1) → **O(n)**। Space: `sum` একটা variable → **O(1)**।

### (খ) Nested loop
```js
for (let i = 0; i < n; i++)
  for (let j = i + 1; j < n; j++) /* O(1) */;
```
ভেতরের loop চলে (n-1) + (n-2) + ... + 1 = n(n-1)/2 বার → **O(n²)**। (½ constant বাদ।)

**সাবধান — সব nested loop O(n²) না:**
```js
for (let i = 0; i < n; i++)
  for (let j = 0; j < 3; j++) ... // ভেতরেরটা constant → O(n)
```
```js
let j = 0;
for (let i = 0; i < n; i++)
  while (j < n && ...) j++;       // j পুরো সময়ে মোট n বারই বাড়ে → O(n) (sliding window!)
```
**নিয়ম:** "ভেতরের loop মোট কতবার চলে, পুরো program জুড়ে?" — প্রতি বার না, **মোট**।

### (গ) Binary search
প্রতি ধাপে range অর্ধেক: n → n/2 → n/4 → ... → 1। কত ধাপ? যতবার ২ দিয়ে ভাগ করলে ১ হয় = log₂ n → **O(log n)**।
n = 1,000,000 হলে মাত্র ~20 ধাপ।

### (ঘ) Two pointer
```js
let l = 0, r = n - 1;
while (l < r) { /* l++ অথবা r-- */ }
```
প্রতি ধাপে দুই pointer-এর মাঝের দূরত্ব ১ কমে → মোট n ধাপ → **O(n)**, Space **O(1)**।

### (ঙ) HashMap solution
```js
const map = new Map();
for (const x of arr) { if (map.has(target - x)) ...; map.set(x, ...); }
```
Loop n বার × Map operation O(1) গড়ে → **O(n)** time। Map-এ সর্বোচ্চ n টা জিনিস → **O(n)** space।
**Trade-off:** space দিয়ে time কিনলাম (O(n²) → O(n))।

### (চ) Recursive factorial
```js
function fact(n) { return n <= 1 ? 1 : n * fact(n - 1); }
```
n টা call, প্রতিটায় O(1) কাজ → **O(n)** time। Call stack-এ একসাথে n টা frame → **O(n)** space।
**Recursion-এর space = সর্বোচ্চ কত গভীর।**

### (ছ) Fibonacci recursion
```js
function fib(n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
```
প্রতিটা call দুটো call করে → call tree-র প্রায় 2ⁿ টা node → **O(2ⁿ)** time।
গভীরতা n → **O(n)** space।
Memo দিলে প্রতিটা n একবারই হিসাব → **O(n)** time। (এটাই DP-র মূল কথা।)

### (জ) Merge sort
- প্রতি স্তরে array অর্ধেক → log n স্তর।
- প্রতি স্তরে merge করতে মোট n কাজ।
- মোট = n × log n → **O(n log n)**। Space: merge-এর জন্য temp array → **O(n)**।

---

## ৩. Recursion-এর Complexity — tree আঁকো

```
calls per node = b (branching), depth = d
total calls ≈ b^d
time = total calls × কাজ প্রতি call
space = d (stack) + যা নিজে তৈরি করি
```
| Recursion | b | d | Time |
|---|---|---|---|
| factorial | 1 | n | O(n) |
| fib (plain) | 2 | n | O(2ⁿ) |
| binary search | 1 | log n | O(log n) |
| subsets | 2 | n | O(2ⁿ · n) (প্রতিটা subset কপি) |
| permutations | n, n-1, ... | n | O(n! · n) |
| tree DFS | — | h | O(n) time, O(h) space |

---

## ৪. Space Complexity

- **Input space:** input নিজে — সাধারণত গোনা হয় না।
- **Auxiliary space:** তুমি নিজে যা বানাও (Map, নতুন array, stack, recursion stack)। Interview-এ সাধারণত এটাই জিজ্ঞেস করে।
- **In-place:** input-কেই বদলে কাজ — O(1) auxiliary। (Interviewer-কে জিজ্ঞেস করবে input mutate করা যাবে কিনা।)
- **Output space:** ফলাফলের array — সাধারণত আলাদা করে বলো: "O(1) extra space, excluding the output."

---

## ৫. JavaScript built-in-এর খরচ (লুকানো complexity)

| Operation | খরচ | মন্তব্য |
|---|---|---|
| `arr[i]`, `arr.length` | O(1) | |
| `push`, `pop` | O(1) | amortized |
| `shift`, `unshift` | **O(n)** | সব element সরাতে হয় → queue-তে বিপদ |
| `splice(i, k)` | O(n) | |
| `slice`, `[...arr]`, `concat` | O(k) / O(n) | নতুন array কপি |
| `includes`, `indexOf`, `find` | **O(n)** | loop-এর ভেতরে দিলে O(n²) |
| `sort` | O(n log n) | |
| `reverse` | O(n) | |
| `map/filter/reduce/forEach` | O(n) | |
| `Math.max(...arr)` | O(n) | বিশাল array-তে stack overflow |
| `Map/Set` `get/set/has/delete` | O(1) গড়ে | |
| `Object.keys/values/entries` | O(k) | |
| string `s[i]`, `s.length` | O(1) | |
| string `slice/substring` | O(k) | |
| `split`, `join` | O(n) | |
| string `+=` লুপে | সাধারণত ঠিক আছে, কিন্তু interview-এ বলো: "string concatenation may create new strings; I'll use an array and join." | |
| `JSON.stringify` | O(size) | |

---

## ৬. Constraint দেখে লক্ষ্য ঠিক করো

Problem-এ constraint দেওয়া থাকে (যেমন `1 <= n <= 10^5`)। এক সেকেন্ডে মোটামুটি ~10⁸ সহজ operation হয়।

| n-এর সীমা | চলবে এমন সবচেয়ে ধীর | সম্ভাব্য pattern |
|---|---|---|
| n ≤ 10 | O(n!) | permutation, brute force |
| n ≤ 20 | O(2ⁿ) | subset, backtracking, bitmask |
| n ≤ 500 | O(n³) | 3 nested loop, interval DP |
| n ≤ 5,000 | O(n²) | 2D DP, double loop |
| n ≤ 10⁵ – 10⁶ | O(n log n) / O(n) | sort, heap, binary search, hashing, two pointers, sliding window |
| n ≤ 10⁹ বা আরো | O(log n) / O(1) | binary search on answer, math |

**ব্যবহার:** n ≤ 10⁵ দেখলে জানবে O(n²) চলবে না → hashing/two pointers/sliding window/sort খুঁজতে হবে।

---

## ৭. Interview-এ যেভাবে বলবে

- *"Time complexity is O(n) because we visit each element once, and each map operation is O(1) on average."*
- *"Space complexity is O(n) in the worst case, because the map may store every element."*
- *"Sorting dominates, so overall it's O(n log n)."*
- *"The recursion depth is at most h, the height of the tree, so space is O(h) — O(log n) for a balanced tree and O(n) in the worst case."*

---

## ৮. প্রতিদিনের অভ্যাস

প্রতিটা problem-এর শেষে লিখবে:

```js
// Time:  O(?)  because ...
// Space: O(?)  because ...
// If n becomes 10x larger, runtime becomes ~?x larger.
```
