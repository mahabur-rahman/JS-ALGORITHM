# November · Week 3 (সামগ্রিক W7) — ১৬ থেকে ২২ নভেম্বর
## Recursion · Linked List

**সপ্তাহের লক্ষ্য:**
1. Recursion-এ ভয় না পাওয়া: **"আমি ধরে নিচ্ছি ছোট problem-টা function নিজে ঠিকঠাক solve করে দেবে — আমার কাজ শুধু সেটা ব্যবহার করে বড়টা বানানো।"** (leap of faith)
2. Call stack হাতে trace করা — recursion-এর debug এভাবেই হয়।
3. Linked list-এ pointer নিয়ে কাজ, **ছবি এঁকে** — dummy node, reverse, fast/slow।

---

## Day 1 — সোম, ১৬ নভেম্বর — Recursion ১: Base Case · Call Stack ★

**শিখবে:**
- **তিনটা অংশ:** base case (কখন থামব) → ছোট problem (নিজেকে ছোট input দিয়ে ডাকা) → মিলিয়ে উত্তর।
- **Leap of faith:** `sum(arr)` লিখতে গিয়ে ধরে নাও `sum(rest)` ঠিক কাজ করে। তাহলে `arr[0] + sum(rest)`।
- **Call stack:** প্রতিটা call একটা frame; base case থেকে উত্তর উপরে ফেরে। কাগজে box এঁকে trace করো।
- **State পাঠানো:** `slice` না করে index পাঠাও (`sum(arr, i)`) — কেন? (slice O(n) কপি → মোট O(n²))
- **JS stack limit:** ~১০,০০০ গভীরতায় "Maximum call stack size exceeded"।
- recursion-এর complexity: `03-complexity-guide` অংশ ৩।

**Problems (loop নিষেধ — শুধু recursion):**
- [ ] ★ **R1** `sum(arr)`, `factorial(n)`, `countDown(n)` — প্রতিটার call stack আঁকো (n = 4)। `A`
- [ ] ★ **R2** `reverseString(s)` recursive — দুইভাবে: (ক) `slice` দিয়ে (খ) index দিয়ে। দুটোর complexity তুলনা। `B`
- [ ] ★ **R3 Pow(x, n)** — (ক) O(n) (খ) **fast power O(log n)**: `x^n = (x^(n/2))²`। negative n? `C`
- [ ] ○ **R4** `isPalindrome(s)` recursive। `B`

**বলো:** *"My base case is an empty array, which sums to zero. For the recursive case, I trust that the function correctly sums the rest, and I add the first element."*

---

## Day 2 — মঙ্গল, ১৭ নভেম্বর — Recursion ২: Tree Recursion · Nested Data · Memo-র পরিচয় ★

**শিখবে:**
- **Linear recursion** (এক call) বনাম **tree recursion** (একাধিক call)।
- **Nested data:** nested array/object — "এটা কি আবার একটা array? তাহলে নিজেকে ডাকো।" (W8-এর tree-র আগাম প্রস্তুতি)
- **Fibonacci:** call tree আঁকো (n = 5) → একই call বারবার → **memoization** (Map-এ মনে রাখা) → O(2ⁿ) থেকে O(n)। এটাই DP-র বীজ (W12)।
- **Divide and conquer** — merge sort (W4) আবার দেখো এই চোখে।

**Problems:**
- [ ] ★ **R5 Flatten Nested Array** — `[1,[2,[3,[4]]],5]` → `[1,2,3,4,5]`। `flat` ছাড়া। তারপর `depth` parameter যোগ করো। `C`
- [ ] ★ **R6 Fibonacci** — (ক) plain recursion (call গোনো n = 30-এ) (খ) memo (গ) loop দিয়ে O(1) space। তিনটার টেবিল। `C`
- [ ] ★ **R7** nested object-এ সব number-এর যোগফল: `{ a: 1, b: { c: 2, d: { e: 3 } }, f: [4, 5] }` → 15। `C`
- [ ] ○ **R8 Climbing Stairs** — (W12-এ DP হিসেবে আবার) আজ শুধু recursion + memo। `C`

**বলো:** *"Plain recursive Fibonacci recomputes the same values exponentially many times. Caching each result in a map means each n is computed once, so it drops to O(n)."*

---

## Day 3 — বুধ, ১৮ নভেম্বর — Recursion ৩: সব সম্ভাবনা তৈরি করা (Backtracking-এর দরজা) ★

**শিখবে:**
- **Decision tree:** প্রতিটা element-এ দুটো সিদ্ধান্ত — নেব / নেব না → 2ⁿ টা পাতা = 2ⁿ টা subset।
- `path` array: নিই (`push`) → ভেতরে যাই → ফিরে এসে বাদ দিই (`pop`) — **choose / explore / undo**।
- result-এ রাখার সময় **কপি** (`[...path]`) কেন — না করলে কী হয়? (reference! W1-এর শিক্ষা)
- permutation: প্রতিটা অবস্থানে বাকিদের যেকোনো একটা → n!।

**Problems:**
- [ ] ★ **R9 Subsets** — `[1,2,3]` → ৮টা subset। decision tree আগে কাগজে। `D`
- [ ] ★ **R10** `[...path]` না দিয়ে `path` push করলে output কী হয় — চালিয়ে দেখো, ব্যাখ্যা লেখো। `B`
- [ ] ○ **R11 Permutations** — `used` array দিয়ে। (পুরোটা W11-এ) `D`
- [ ] ○ **R12** একটা string-এর সব binary string দৈর্ঘ্য n (`"000"` ... `"111"`)। `B`

**বলো:** *"For each element, I make two choices: include it or skip it. That forms a binary decision tree with 2ⁿ leaves, and each leaf is one subset."*

---

## Day 4 — বৃহস্পতি, ১৯ নভেম্বর — Linked List ১: বানানো · Traversal · Reverse ★

**Interview-এ যেভাবে আসে:** reverse, merge, cycle, middle — "pointer গোলমাল না করে" কাজ করতে পারো কিনা দেখে।

**শিখবে:**
- `ListNode` class (`val`, `next`); array থেকে list বানানোর helper আর list থেকে array (test-এর জন্য — **প্রথমেই লিখে নাও**)।
- traversal: `let curr = head; while (curr) { ...; curr = curr.next; }`।
- insert (শুরুতে, শেষে, মাঝে), delete (মান দিয়ে)।
- **Dummy node ★:** head নিজেই বদলাতে পারলে।
- **Doubly linked list:** `prev` + `next` — insert/delete-এ চারটা pointer।
- **Reverse:** `prev / curr / next` তিনটা — **প্রতিটা ধাপ ছবি এঁকে।**

**Skeleton drill:** 3.15 — ৩ বার।

**Problems:**
- [ ] ★ **L1** `ListNode` + `fromArray(arr)` + `toArray(head)` helper। `A`
- [ ] ★ **L2** Singly list class: `append`, `prepend`, `insertAt`, `deleteValue`, `find`। খালি list-এ প্রতিটা? `B`
- [ ] ★ **L3 Reverse Linked List** — iterative আর recursive। recursive-টার space কত? `C`
- [ ] ○ **L4** Doubly linked list: `append`, `remove(node)` O(1)। (LRU Cache-এ লাগবে — W8 Day 7) `C`

তোমার `codeAbc/LinkedList/`-এর পুরনো code খুলবে না — ফাঁকা editor থেকে।

**বলো:** *"I walk through the list with three pointers. At each step I save the next node, point the current node back to the previous one, then move both pointers forward."*

---

## Day 5 — শুক্র, ২০ নভেম্বর — Linked List ২: Fast/Slow · Merge ★

**শিখবে:**
- **Fast/slow:** fast দুই ধাপ, slow এক ধাপ — fast শেষে গেলে slow মাঝখানে; cycle থাকলে কোনো একসময় দেখা হবে।
- **জোড় দৈর্ঘ্যে** middle কোনটা (প্রথম না দ্বিতীয়)? — loop শর্ত বদলে দুটোই পাওয়া যায়।
- **Merge two sorted:** dummy + tail pointer — W2-এর merge sorted array-র আত্মীয়।

**Skeleton drill:** 3.16 — ২ বার।

**Problems:**
- [ ] ★ **L5 Middle of the Linked List** `B`
- [ ] ★ **L6 Linked List Cycle** — (ক) Set দিয়ে O(n) space (খ) fast/slow O(1)। `B`
- [ ] ★ **L7 Merge Two Sorted Lists** — iterative (dummy) + recursive। `B`
- [ ] ○ **L8 Linked List Cycle II** — cycle কোথায় শুরু (দেখা হওয়ার পর একটাকে head-এ ফেরাও — কেন কাজ করে, গণিত বোঝার চেষ্টা)। `D`

**বলো:** *"The fast pointer moves twice as fast, so when it reaches the end, the slow pointer is at the middle. If there's a cycle, the fast pointer eventually laps the slow one."*

---

## Day 6 — শনি, ২১ নভেম্বর — Linked List ৩: Gap · Palindrome · Combination ★

**শিখবে:**
- **Gap কৌশল:** একটাকে n ধাপ এগিয়ে দাও, তারপর দুটো একসাথে — শেষ থেকে n-তম পাওয়া যায় এক pass-এ।
- **কৌশল জোড়া লাগানো:** palindrome = middle খোঁজো + দ্বিতীয় অর্ধেক reverse + তুলনা। (তিনটা ছোট helper!)

**Problems:**
- [ ] ★ **L9 Remove Nth Node From End** — এক pass, dummy node। n = length হলে (head মুছতে হবে)? `D`
- [ ] ★ **L10 Palindrome Linked List** — (ক) array-তে কপি O(n) space (খ) middle + reverse O(1) space। `D`
- [ ] ○ **L11 Intersection of Two Linked Lists** — দুই pointer, শেষে পৌঁছে অন্য list-এর head-এ। `C`
- [ ] ○ **L12 Reorder List** — middle + reverse + merge — তিন কৌশল একসাথে। `D`
- [ ] ○ **L13 Add Two Numbers** — carry। `D`
- [ ] ⏳ Copy List with Random Pointer · Reverse Nodes in k-Group → January

**বলো:** *"I break it into three helpers I already know: find the middle, reverse the second half, and compare the two halves node by node."*

---

## Day 7 — রবি, ২২ নভেম্বর — Practical JS ৬ · Revision

**Practical JS ৬:**
- [ ] ★ **P15 curry(fn)** — `curry(add3)(1)(2)(3)`, `(1, 2)(3)`, `(1)(2, 3)` সবই চলবে। (`fn.length` ব্যবহার) `D`
- [ ] ★ **P16 EventEmitter** — `on(event, handler)`, `off`, `once`, `emit(event, ...args)`। emit চলাকালীন একটা handler নিজেকে `off` করলে? `D`
- [ ] ○ **P17 memoize (একাধিক argument)** — cache key কীভাবে বানাবে? object argument হলে কী সমস্যা? `D`

**Re-solve:** [ ] R3 Fast Power · [ ] R9 Subsets · [ ] L3 Reverse (দুটোই) · [ ] L9 Remove Nth · [ ] W6-এর PS5

**Unseen:**
- [ ] ★ **U5** *"একটা file system-এর গঠন nested object হিসেবে: `{ name, size?, children? }`। পুরো folder-এর মোট size বের করো, আর সবচেয়ে বড় single file-এর নাম।"*
