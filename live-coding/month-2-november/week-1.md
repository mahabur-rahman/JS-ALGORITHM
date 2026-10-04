# November · Week 1 (সামগ্রিক W5) — ২ থেকে ৮ নভেম্বর
## Searching & Binary Search · Two Pointers

**সপ্তাহের লক্ষ্য:**
1. Binary search-এর তিনটা skeleton (classic, lower bound, on-answer) হাতে মুখস্থ — আর **off-by-one ছাড়া** লেখা।
2. বোঝা: *"binary search শুধু sorted array-র জন্য না — যেখানে উত্তরের সম্ভাবনা একদিকে বদলায়, সেখানেই চলে।"*
3. Two pointers-এর দুই রূপ (দুই প্রান্ত থেকে, আর read/write) চেনা ও লেখা।

**পড়বে (সপ্তাহের শুরুতে):** `04-patterns-and-skeletons.md` — skeleton 3.3, 3.4, 3.9, 3.10, 3.11।

---

## Day 1 — সোম, ২ নভেম্বর — Linear Search · Binary Search (classic) ★

**Interview-এ যেভাবে আসে:** সরাসরি "binary search লেখো" কম আসে; বেশি আসে এর রূপ — insert position, rotated, "minimum speed", "first bad version"।

**শিখবে:**
- **Linear search:** প্রথম occurrence, শেষ occurrence, শর্ত মেনে প্রথমটা — O(n)।
- **Binary search কেন:** sorted হলে প্রতি তুলনায় অর্ধেক বাদ → O(log n)।
- **তিনটা variable:** `lo`, `hi`, `mid` — `mid = lo + Math.floor((hi - lo) / 2)`।
- **`lo <= hi` বনাম `lo < hi`:** classic-এ `<=` আর `hi = mid - 1`; bound-এ `<` আর `hi = mid`। মিশিয়ে ফেললে infinite loop।
- **Invariant লেখো:** *"উত্তর যদি থাকে, সেটা সবসময় [lo, hi]-এর মধ্যে।"*

**Skeleton drill:** 3.9 ফাঁকা editor-এ ৩ বার।

**Problems:**
- [ ] ★ **BS1 Binary Search** — পেলে index, না পেলে -1। iterative + recursive। `A` · O(log n)
- [ ] ★ **BS2 Search Insert Position** — না পেলে কোথায় বসবে। শেষ পর্যন্ত `lo` কেন উত্তর? dry run দিয়ে দেখাও। `B`
- [ ] ○ **BS3** Linear search-এ: শর্ত মেনে প্রথম element (`findFirst(arr, predicate)`) — built-in ছাড়া। `A`

**বলো:** *"Since the array is sorted, I compare with the middle element and discard half of the search space each time, which gives O(log n)."*

---

## Day 2 — মঙ্গল, ৩ নভেম্বর — Lower / Upper Bound · First & Last ★

**শিখবে:**
- **Lower bound:** প্রথম index যেখানে `arr[i] >= target`।
- **Upper bound:** প্রথম index যেখানে `arr[i] > target`।
- First occurrence = lower bound (যদি সেখানে target থাকে); last occurrence = upper bound − 1।
- **"শর্ত সত্য/মিথ্যা" চিন্তা:** array-কে `F F F T T T` হিসেবে দেখো — প্রথম `T` খোঁজা।

**Skeleton drill:** 3.10 ফাঁকা editor-এ ৩ বার।

**Problems:**
- [ ] ★ **BS4 Find First and Last Position** — `[5,7,7,8,8,10]`, 8 → `[3,4]`; নেই → `[-1,-1]`। একটা `lowerBound` helper দিয়ে দুটো উত্তর। `C` · O(log n)
- [ ] ★ **BS5 Sqrt(x)** — floor of square root, `Math.sqrt` ছাড়া। "কোন সংখ্যার বর্গ ≤ x" — এটাই শর্ত। বড় x-এ overflow? (JS-এ সমস্যা কম, কিন্তু interview-এ উল্লেখ করো) `C`
- [ ] ○ **BS6** count of target in sorted array — O(log n)-এ। `B`

**বলো:** *"I think of the array as false, false, ..., true, true, and I'm looking for the first true. That pattern works for lower bound, upper bound and many other variations."*

---

## Day 3 — বুধ, ৪ নভেম্বর — Rotated Array · Peak ★

**শিখবে:**
- **Rotated sorted array:** mid-এর একদিক সবসময় sorted — কোন দিক sorted সেটা আগে বের করো, তারপর target সেই দিকে কিনা।
- **Minimum in rotated:** `arr[mid]` বনাম `arr[hi]` তুলনা।
- **Peak:** sorted না হলেও binary search — ঢাল যেদিকে উপরে, সেদিকে peak নিশ্চিত।

**Problems:**
- [ ] ★ **BS7 Find Minimum in Rotated Sorted Array** — আগে এটা (সহজ)। `D`
- [ ] ★ **BS8 Search in Rotated Sorted Array** — `[4,5,6,7,0,1,2]`, 0 → 4। ৩টা case হাতে আঁকো। `D`
- [ ] ○ **BS9 Find Peak Element** — কেন sorted না হয়েও কাজ করে? `D`
- [ ] ○ **BS10 Search a 2D Matrix** — row-wise sorted, প্রতিটা row-এর প্রথমটা আগের শেষটার চেয়ে বড় → একটা লম্বা array ভাবো (`r = Math.floor(i / cols)`, `c = i % cols`)। `C`

**বলো:** *"In a rotated sorted array, at least one half around mid is always sorted. I check which half is sorted and whether the target falls inside it."*

---

## Day 4 — বৃহস্পতি, ৫ নভেম্বর — Binary Search on Answer ★

**Interview-এ যেভাবে আসে:** "সর্বনিম্ন কত গতি / capacity / দিন হলে কাজটা সময়মতো শেষ হবে?" — প্রশ্নে কোথাও "binary search" বা "sorted" লেখা থাকে না। **Pattern deception-এর সেরা উদাহরণ।**

**শিখবে:**
- **চেনার clue:** "minimum X such that possible" বা "maximum X such that possible" + X বাড়ালে সম্ভাব্যতা একদিকে বদলায় (monotonic)।
- **দুটো অংশ:** (১) `canDo(x)` — সাধারণত greedy, O(n) (২) উত্তরের range-এ lower bound।
- **range ঠিক করা:** `lo` = সম্ভাব্য সবচেয়ে ছোট উত্তর, `hi` = সবচেয়ে বড়।
- complexity: O(n · log(range))।

**Skeleton drill:** 3.11 ফাঁকা editor-এ ৩ বার।

**Problems:**
- [ ] ★ **BS11 Koko Eating Bananas** — আগে brute force (speed 1, 2, 3, ... চেষ্টা) লেখো, তারপর দেখো কেন binary search চলে। `canEat(speed)` আলাদা helper। `D`
- [ ] ○ **BS12 Capacity to Ship Packages Within D Days** `D`
- [ ] ○ **BS13 Minimum Number of Days to Make m Bouquets** `D`
- [ ] ⏳ Split Array Largest Sum · Median of Two Sorted Arrays → January

**বলো:** *"If Koko can finish at speed k, she can also finish at any speed above k. That monotonic property lets me binary search on the speed instead of trying every value."*

---

## Day 5 — শুক্র, ৬ নভেম্বর — Two Pointers ১: দুই প্রান্ত · Read/Write ★

**Interview-এ যেভাবে আসে:** sorted array-তে জোড়া খোঁজা, in-place বাদ দেওয়া/সরানো, palindrome — "O(1) extra space" শর্ত থাকলে প্রায়ই two pointers।

**শিখবে:**
- **Opposite direction:** `left = 0`, `right = n - 1`; প্রতি ধাপে **একটা** সরে — কোনটা সরবে, সেই সিদ্ধান্তই আসল।
- **Same direction (read/write):** `read` সব দেখে, `write` শুধু রাখার মতোগুলো লেখে।
- **কেন কাজ করে:** sorted হলে `sum < target` মানে left বাড়ালেই শুধু sum বাড়তে পারে।

**Skeleton drill:** 3.3 আর 3.4, প্রতিটা ২ বার।

**Problems:**
- [ ] ★ **TP1 Two Sum II (sorted input)** — O(1) space। Map দিয়েও করা যায় — তাহলে two pointers কেন ভালো এখানে? `B`
- [ ] ★ **TP2 Squares of a Sorted Array** — `[-4,-1,0,3,10]` → `[0,1,9,16,100]`। sort করলে O(n log n) — দুই প্রান্ত থেকে O(n)। `B`
- [ ] ★ **TP3 Move Zeroes** — ক্রম ঠিক রেখে সব 0 শেষে, in-place। `B`
- [ ] ★ **TP4 Remove Duplicates from Sorted Array** — in-place, নতুন length ফেরত। `B`
- [ ] ○ **TP5 Remove Element** `A`

**বলো:** *"I keep a write pointer for the next position to fill. The read pointer scans every element and only copies the ones I want to keep."*

---

## Day 6 — শনি, ৭ নভেম্বর — Two Pointers ২: Container · 3Sum ★

**শিখবে:**
- **Greedy সিদ্ধান্ত pointer সরানোতে:** ছোট দেয়ালটা সরাও — কেন বড়টা সরালে কখনো লাভ নেই?
- **Sort + two pointers:** 3Sum = একটা fix করো + বাকি দুটোয় Two Sum II।
- **Duplicate বাদ দেওয়া:** sort করার পর একই মান পরপর skip।
- **Expand around center:** palindrome-এর মাঝখান থেকে দুই দিকে ছড়ানো।

**Problems:**
- [ ] ★ **TP6 Container With Most Water** — brute force O(n²), তারপর two pointers। "ছোটটা সরাও" কেন সঠিক — English-এ যুক্তি। `D`
- [ ] ★ **TP7 3Sum** — unique triplet, যোগফল 0। duplicate skip কোথায় কোথায় লাগে? `D` · O(n²)
- [ ] ○ **TP8 Longest Palindromic Substring** — expand around center (বিজোড় ও জোড় দৈর্ঘ্য)। `D`
- [ ] ⏳ Trapping Rain Water → January (বা সময় পেলে আজ)

**বলো:** *"The area is limited by the shorter line. Moving the taller line can never increase the area, so I always move the shorter one."*

---

## Day 7 — রবি, ৮ নভেম্বর — Async JS ১ · Revision

**Practical JS ৪ — Async-এর ভিত্তি (Full-stack interview-এর বড় অংশ):**

**শিখবে:**
- **Event loop:** call stack → Web/Node API → queue।
- **Microtask** (Promise `then`, `queueMicrotask`) বনাম **macrotask** (`setTimeout`, I/O) — microtask আগে খালি হয়।
- Promise-এর state (pending/fulfilled/rejected), `then/catch/finally` chaining।
- `async/await` = Promise-এর সুন্দর রূপ; `try/catch` দিয়ে error।

**Output আন্দাজ (সবচেয়ে common interview প্রশ্ন):**
```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
(async () => { console.log(4); await null; console.log(5); })();
console.log(6);
```

**Problems:**
- [ ] ★ **P9** `sleep(ms)` → Promise। `A`
- [ ] ★ **P10** `promiseAll(promises)` — `Promise.all` ছাড়া। ক্রম ঠিক রাখা, একটা fail হলে সাথে সাথে reject, খালি array। `D`
- [ ] ○ **P11** আরো ৩টা output-order puzzle নিজে বানাও ও উত্তর দাও।

**Re-solve:** [ ] BS4 First & Last · [ ] BS8 Rotated · [ ] BS11 Koko · [ ] TP7 3Sum · [ ] W3-এর H2 Two Sum

**Unseen:**
- [ ] ★ **U4** *"একটা sorted timestamp-এর list (log entry-র সময়)। দুটো সময় t1, t2 দিলে, এর মধ্যে কতগুলো entry পড়েছে?"*
