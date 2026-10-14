# 🗓️ November Plan — Core Patterns + Data Structures (২ নভেম্বর → ২৯ নভেম্বর)

> **এই file-টাই November-এর একমাত্র plan।** প্রতিটা দিন, concept, ছোট আর বড় problem — সব এখানে, শেষ হলে এখানেই চিহ্ন।
> সব code নিজের হাতে: `practice/november/week-N/day-N.js`।
> আগের মাস: [october-plan.md](../month-1-october/october-plan.md) · পরের মাস: [december-plan.md](../month-3-december/december-plan.md)

**এই মাসের মূল কথা:** pattern-এর **skeleton** হাতে মুখস্থ করা — নতুন problem-এ শুধু ঘরগুলো ভরানো। আর বোঝা, **কখন কোন pattern ভাঙে।**

---

## 🔖 চিহ্নের মানে

| চিহ্ন | মানে |
|---|---|
| <span style="color:red">**🔴 DONE**</span> | শেষ হয়েছে (VS Code preview-এ লাল; GitHub-এ শুধু 🔴) |
| 🟡 চলছে · ⚠️ যাচাই বাকি · ⬜ শুরু হয়নি | |
| ★ Core · ○ Bonus · ⏳ Later (January+) | |
| 🟢 / 🟡 / 🔴 (title-এর পাশে) | LeetCode Easy / Medium / Hard |
| 🔗 | LeetCode link — "হুবহু" বা "কাছাকাছি" |

**P** = concept শেখার সময়ের ছোট problem · **★ / ○** = দিনের মূল problem (পুরো LeetCode format)

---

## 🧠 যেকোনো problem-এ কীভাবে ভাবব (৮ ধাপ — October থেকে একই)

| ধাপ | প্রশ্ন |
|---|---|
| ১. বুঝি | "So I need to return ___ given ___." |
| ২. Input / Output | type? খালি? sorted? negative? duplicate? |
| ৩. ছোট example | ৩–৫ element, নিজে বানানো |
| ৪. হাতে solve | কী মনে রাখলাম → variable · কী বারবার করলাম → loop |
| ৫. Brute force | সবচেয়ে সোজা উপায়, complexity সহ |
| ৬. Bottleneck | কোন কাজ বারবার? কোন তথ্য instantly পেলে দ্রুত হতো? |
| ৭. Pseudocode → Code | comment-এ ধাপ, তারপর প্রতিটার নিচে ১–২ লাইন |
| ৮. Test + Complexity | dry run, ৩টা edge case, Time/Space **কীভাবে মাপলাম** |

**November-এর pattern-চেনার প্রশ্ন (ক্রমানুসারে):**
1. Input কি **sorted** (বা উত্তরের range একদিকে বদলায়)? → Binary Search / Two Pointers
2. **Contiguous** অংশ (subarray/substring)? → Sliding Window / Prefix Sum
3. **Negative** সংখ্যা আছে আর "sum = k"? → Prefix Sum + Map (window ভাঙে!)
4. **দুই প্রান্ত** থেকে তুলনা? → Two Pointers
5. **Nested / matching / শেষেরটা আগে**? → Stack
6. **পরের বড়/ছোট**? → Monotonic Stack
7. **সব সম্ভাবনা / বারবার একই ছোট কাজ**? → Recursion
8. **Level / minimum depth**? → BFS · **Path / height**? → DFS

---

## 📅 মাসের ছবি

| সপ্তাহ | তারিখ (লক্ষ্য) | Topic | অবস্থা |
|---|---|---|---|
| **W1** (সামগ্রিক W5) | ২–৮ নভে | Binary Search (classic, bounds, rotated, on-answer) · Two Pointers · Async ১ | ⬜ |
| **W2** (W6) | ৯–১৫ নভে | Sliding Window (fixed, variable, frequency) · Prefix Sum (+ Map) · Mixed · Async ২ | ⬜ |
| **W3** (W7) | ১৬–২২ নভে | Recursion (call stack, memo, subsets) · Linked List · curry, EventEmitter | ⬜ |
| **W4** (W8) | ২৩–২৯ নভে | Stack · Monotonic Stack · Queue/Deque · Binary Tree শুরু · LRU · **প্রথম Mock** | ⬜ |

> October থেকে পিছিয়ে থাকলে November-এর তারিখও সরবে — Gate নিয়ম আগে, তারিখ পরে।

---
---

# 📗 WEEK 1 (W5) — Searching & Binary Search · Two Pointers

**সপ্তাহের লক্ষ্য:**
1. Binary search-এর তিনটা skeleton (classic, lower bound, on-answer) হাতে মুখস্থ — **off-by-one ছাড়া**।
2. বোঝা: *"binary search শুধু sorted array-র জন্য না — উত্তরের সম্ভাবনা একদিকে বদলালেই চলে।"*
3. Two pointers-এর দুই রূপ (দুই প্রান্ত থেকে, আর read/write) চেনা ও লেখা।

**পড়বে:** `04-patterns-and-skeletons.md` — skeleton 3.3, 3.4, 3.9, 3.10, 3.11।

---

## Day 1 · W5 D1 · সোম ২ নভে — Topic 17: Linear Search · Binary Search (classic) ★ ⬜

**Interview-এ যেভাবে আসে:** সরাসরি "binary search লেখো" কম; বেশি আসে এর রূপ — insert position, rotated, "minimum speed", "first bad version"।

**🧠 এই topic-এ কীভাবে ভাবব:**
- sorted? → প্রতি তুলনায় **অর্ধেক বাদ** দেওয়া যায় কি?
- তিনটা variable: `lo`, `hi`, `mid = lo + Math.floor((hi - lo) / 2)`।
- **Invariant লেখো:** *"উত্তর যদি থাকে, সেটা সবসময় [lo, hi]-এর মধ্যে।"*
- classic: `lo <= hi` আর `hi = mid - 1` — মিশিয়ে ফেললে infinite loop।

**Skeleton drill:** 3.9 ফাঁকা editor-এ ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 17.1 — Linear search: প্রথম, শেষ, শর্ত মেনে** ⬜
- **P17.1 · Last Occurrence** 🟢 ⬜ — 🌍 call log-এ এক নম্বর থেকে শেষ কবে ফোন এসেছিল। **EN:** Return the last index of `target`. `([5, 3, 5, 1], 5)` → `2`. **বাংলা:** কোন দিক থেকে খুঁজলে সবচেয়ে কম কাজ?

**Phase 17.2 — অর্ধেক বাদ দেওয়ার খেলা** ⬜
- **P17.2 · Guess the Number** 🟢 ⬜ · 🔗 [LC 374 · Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/) (হুবহু)
  - 🌍 বন্ধু ১–১০০-এর একটা সংখ্যা ভেবেছে, শুধু "বড়/ছোট" বলে। সবচেয়ে কম প্রশ্নে কীভাবে ধরবে?
  - **EN:** Write down your guesses for secret `37` in 1..100 if you always guess the middle. How many guesses at most for 1..100? → about `7` (log₂ 100)

**Phase 17.3 — `mid` আর overflow** ⬜
- **P17.3** 🟢 ⬜ — **EN:** Compute `mid` for `lo = 3, hi = 8` both ways: `Math.floor((lo + hi) / 2)` and `lo + Math.floor((hi - lo) / 2)`. → `5`. Why do other languages prefer the second?

**Phase 17.4 — হাতে trace** ⬜
- **P17.4 · Trace Table** 🟢 ⬜ — **EN:** Trace `lo, hi, mid` for target `9` in `[-1,0,3,5,9,12]`. → `(0,5,2) → (3,5,4)` found at 4.

### ★ মূল problem

#### ★ BS1 · 704. Binary Search 🟢 Easy ⬜
🔗 [LC 704](https://leetcode.com/problems/binary-search/) (হুবহু)
🌍 **Real-life:** অভিধানে শব্দ খোঁজা — মাঝখানে খুলে বাঁয়ে বা ডানে।

**EN:** Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`. You must write an algorithm with O(log n) runtime complexity.
```
Example 1: Input: nums = [-1,0,3,5,9,12], target = 9   Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2: Input: nums = [-1,0,3,5,9,12], target = 2   Output: -1
Explanation: 2 does not exist in nums so return -1
```
**Constraints:** `1 <= nums.length <= 10^4` · all integers are unique · sorted ascending.
**Function:** `var search = function (nums, target) {}`

**বাংলা:** sorted array-তে target-এর index, না থাকলে -1 — O(log n)-এ। iterative আর recursive দুটোই।
**🧠 ভাবনা:** mid-এর value target-এর চেয়ে ছোট হলে উত্তর কোন দিকে থাকতে পারে না?
**⏱️ লক্ষ্য:** Time O(log n) · Space O(1) (recursive: O(log n))

#### ★ BS2 · 35. Search Insert Position 🟢 Easy ⬜
🔗 [LC 35](https://leetcode.com/problems/search-insert-position/) (হুবহু)
🌍 **Real-life:** sorted contact list-এ নতুন নাম কোথায় বসবে।

**EN:** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.
```
Example 1: Input: nums = [1,3,5,6], target = 5   Output: 2
Example 2: Input: nums = [1,3,5,6], target = 2   Output: 1
Example 3: Input: nums = [1,3,5,6], target = 7   Output: 4
```
**Constraints:** `1 <= nums.length <= 10^4`
**Function:** `var searchInsert = function (nums, target) {}`

**বাংলা:** পেলে index, না পেলে কোথায় বসত। **শেষ পর্যন্ত `lo` কেন উত্তর?** dry run দিয়ে দেখাও।
**⏱️ লক্ষ্য:** Time O(log n) · Space O(1)

#### ○ BS3 · findFirst(arr, predicate) ⬜
🌍 order list-এ প্রথম "pending" order। **EN:** Return the first element satisfying `predicate`, without built-ins. **বাংলা:** linear search, শর্ত মেনে।

### 🔗 আরো LeetCode
[374 Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/) · [278 First Bad Version](https://leetcode.com/problems/first-bad-version/)

**বলো:** *"Since the array is sorted, I compare with the middle element and discard half of the search space each time, which gives O(log n)."*

---

## Day 2 · W5 D2 · মঙ্গল ৩ নভে — Topic 17: Lower / Upper Bound · First & Last ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- array-কে **`F F F T T T`** হিসেবে দেখো — প্রশ্ন হলো **প্রথম `T` কোথায়?**
- lower bound: প্রথম `arr[i] >= target`; upper bound: প্রথম `arr[i] > target`।
- bound skeleton: `lo < hi`, `hi = arr.length`, শর্ত সত্য হলে `hi = mid`, নইলে `lo = mid + 1`।

**Skeleton drill:** 3.10 ফাঁকা editor-এ ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 17.5 — F F F T T T চিন্তা** ⬜
- **P17.5 · Mark True/False** 🟢 ⬜ — 🌍 software version 1..10 — কোনটা থেকে bug শুরু? **EN:** For `[1,3,5,7,9]` and condition `x >= 5`, write the F/T row. → `F F T T T`, first T at index 2.

**Phase 17.6 — Lower bound** ⬜
- **P17.6** 🟢 ⬜ — **EN:** `lowerBound([5,7,7,8,8,10], 8)` → `3`; `lowerBound([1,2,3], 9)` → `3` (length).

**Phase 17.7 — Upper bound** ⬜
- **P17.7** 🟢 ⬜ — **EN:** `upperBound([5,7,7,8,8,10], 8)` → `5`. Then count of 8 = upper − lower = `2`.

### ★ মূল problem

#### ★ BS4 · 34. Find First and Last Position of Element in Sorted Array 🟡 Medium ⬜
🔗 [LC 34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) (হুবহু)
🌍 **Real-life:** sorted log-এ একটা নির্দিষ্ট তারিখের প্রথম আর শেষ entry।

**EN:** Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value. If `target` is not found in the array, return `[-1, -1]`. You must write an algorithm with O(log n) runtime complexity.
```
Example 1: Input: nums = [5,7,7,8,8,10], target = 8   Output: [3,4]
Example 2: Input: nums = [5,7,7,8,8,10], target = 6   Output: [-1,-1]
Example 3: Input: nums = [], target = 0               Output: [-1,-1]
```
**Constraints:** `0 <= nums.length <= 10^5`
**Function:** `var searchRange = function (nums, target) {}`

**বাংলা:** target-এর প্রথম আর শেষ index — একটা `lowerBound` helper দিয়ে দুটো উত্তর।
**🧠 ভাবনা:** last = (target-এর চেয়ে বড় প্রথমটা) − 1। lowerBound(target + 1) কি সেটা দেয়?
**⏱️ লক্ষ্য:** Time O(log n) · Space O(1)

#### ★ BS5 · 69. Sqrt(x) 🟢 Easy ⬜
🔗 [LC 69](https://leetcode.com/problems/sqrtx/) (হুবহু)
🌍 **Real-life:** ১০০ বর্গমিটার জমিতে সবচেয়ে বড় বর্গাকার ঘরের এক পাশ।

**EN:** Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator.
```
Example 1: Input: x = 4   Output: 2
Example 2: Input: x = 8   Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down, 2 is returned.
```
**Constraints:** `0 <= x <= 2^31 - 1`
**Function:** `var mySqrt = function (x) {}`

**বাংলা:** `Math.sqrt` ছাড়া floor of square root। "কোন সংখ্যার বর্গ ≤ x" — এটাই শর্ত।
**🧠 ভাবনা:** উত্তর 0..x-এর মধ্যে, আর `m * m <= x` শর্তটা `T T T F F` — শেষ `T` খোঁজো।
**⏱️ লক্ষ্য:** Time O(log x) · Space O(1)

#### ○ BS6 · Count of Target ⬜
**EN:** Count occurrences of `target` in a sorted array in O(log n). **বাংলা:** upper − lower।

### 🔗 আরো LeetCode
[278 First Bad Version](https://leetcode.com/problems/first-bad-version/) (F F F T T T-এর নিখুঁত উদাহরণ) · [744 Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)

**বলো:** *"I think of the array as false, false, ..., true, true, and I'm looking for the first true."*

---

## Day 3 · W5 D3 · বুধ ৪ নভে — Topic 17: Rotated Array · Peak ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- rotated sorted array: mid-এর **একদিক সবসময় sorted** — কোন দিক, আগে বের করো; তারপর target সেই দিকে কিনা।
- minimum খুঁজতে: `arr[mid]` বনাম `arr[hi]`।
- sorted না হলেও binary search: **ঢাল যেদিকে উপরে, সেদিকে peak নিশ্চিত**।

### 📘 Concept phases + ছোট problem

**Phase 17.8 — Rotated array দেখতে কেমন** ⬜
- **P17.8** 🟢 ⬜ — 🌍 ঘড়ির কাঁটা — ১২-র পরে ১। **EN:** Rotate `[0,1,2,4,5,6,7]` at index 4 → `[4,5,6,7,0,1,2]`. Mark the "drop" point.

**Phase 17.9 — কোন অর্ধেক sorted** ⬜
- **P17.9** 🟢 ⬜ — **EN:** For `[4,5,6,7,0,1,2]`, `mid = 3` (value 7): is the left half `[4..7]` sorted? Right half? → left yes, right no.

**Phase 17.10 — ঢাল দেখে peak** ⬜
- **P17.10** 🟢 ⬜ — 🌍 পাহাড়ে হাঁটা — উপরের দিকে গেলে চূড়া আসবেই। **EN:** In `[1,2,3,1]` at `mid = 1`, `nums[2] > nums[1]` — which side must contain a peak? → right.

### ★ মূল problem

#### ★ BS7 · 153. Find Minimum in Rotated Sorted Array 🟡 Medium ⬜
🔗 [LC 153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) (হুবহু)
🌍 **Real-life:** ২৪ ঘণ্টার তাপমাত্রা শুরু হয়েছে দুপুর থেকে — সবচেয়ে ঠান্ডা মুহূর্ত।

**EN:** Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times. Given the sorted rotated array `nums` of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.
```
Example 1: Input: nums = [3,4,5,1,2]         Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2: Input: nums = [4,5,6,7,0,1,2]     Output: 0
Example 3: Input: nums = [11,13,15,17]       Output: 11
Explanation: The original array was rotated 4 times (back to sorted).
```
**Function:** `var findMin = function (nums) {}`

**বাংলা:** ঘোরানো sorted array-র সবচেয়ে ছোট element — O(log n)-এ।
**🧠 ভাবনা:** `nums[mid] > nums[hi]` হলে ছোটটা কোন দিকে?
**⏱️ লক্ষ্য:** Time O(log n) · Space O(1)

#### ★ BS8 · 33. Search in Rotated Sorted Array 🟡 Medium ⬜
🔗 [LC 33](https://leetcode.com/problems/search-in-rotated-sorted-array/) (হুবহু)
🌍 **Real-life:** ঘোরানো সময়সূচিতে নির্দিষ্ট সময় খোঁজা।

**EN:** There is an integer array `nums` sorted in ascending order (with distinct values), possibly rotated at an unknown pivot. Given `nums` after the rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not. You must write an algorithm with O(log n) runtime complexity.
```
Example 1: Input: nums = [4,5,6,7,0,1,2], target = 0   Output: 4
Example 2: Input: nums = [4,5,6,7,0,1,2], target = 3   Output: -1
Example 3: Input: nums = [1], target = 0               Output: -1
```
**Function:** `var search = function (nums, target) {}`

**বাংলা:** ঘোরানো sorted array-তে target খোঁজো। ৩টা case হাতে আঁকো।
**🧠 ভাবনা (ভাঙতে শেখো):** দুটো ছোট প্রশ্ন — (১) কোন অর্ধেক sorted? (২) target কি সেই sorted অর্ধেকের range-এ? হ্যাঁ → ওদিকে যাও, না → অন্যদিকে।
**⏱️ লক্ষ্য:** Time O(log n) · Space O(1)

#### ○ BS9 · 162. Find Peak Element 🟡 ⬜
🔗 [LC 162](https://leetcode.com/problems/find-peak-element/) (হুবহু)
🌍 পাহাড়ি পথে যেকোনো একটা চূড়া।
**EN:** A peak element is strictly greater than its neighbors. Return the index of any peak in O(log n). `[1,2,3,1]` → `2`; `[1,2,1,3,5,6,4]` → `1` or `5`.
**বাংলা:** sorted না হয়েও কেন binary search চলে?

#### ○ BS10 · 74. Search a 2D Matrix 🟡 ⬜
🔗 [LC 74](https://leetcode.com/problems/search-a-2d-matrix/) (হুবহু)
🌍 সিনেমা হলের সারি-কলাম sorted সিট নম্বর।
**EN:** Each row is sorted and each row's first integer is greater than the previous row's last. Return `true` if `target` is in the matrix. `[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3` → `true`; `13` → `false`.
**বাংলা:** একটা লম্বা array ভাবো: `r = Math.floor(i / cols)`, `c = i % cols`।

**বলো:** *"In a rotated sorted array, at least one half around mid is always sorted. I check which half is sorted and whether the target falls inside it."*

---

## Day 4 · W5 D4 · বৃহস্পতি ৫ নভে — Topic 17: Binary Search on Answer ★ ⬜

**Interview-এ যেভাবে আসে:** "সর্বনিম্ন কত গতি / capacity / দিন হলে কাজটা সময়মতো শেষ হবে?" — কোথাও "binary search" বা "sorted" লেখা থাকে না। **Pattern deception-এর সেরা উদাহরণ।**

**🧠 এই topic-এ কীভাবে ভাবব:**
- চেনার clue: **"minimum X such that possible"** + X বাড়ালে সম্ভাব্যতা **একদিকে** বদলায় (monotonic)।
- দুটো অংশে ভাঙো: (১) `canDo(x)` — সাধারণত greedy, O(n) (২) উত্তরের range-এ lower bound।
- range: `lo` = সম্ভাব্য সবচেয়ে ছোট উত্তর, `hi` = সবচেয়ে বড়।

**Skeleton drill:** 3.11 ফাঁকা editor-এ ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 17.11 — `canDo(x)` লেখা** ⬜
- **P17.11 · Can Finish?** 🟢 ⬜ — 🌍 প্রতিদিন x পাতা পড়লে ৫ দিনে বই শেষ হবে? **EN:** `canFinish(chapters = [30, 11, 23], speed, days = 5)` — each chapter takes `ceil(pages / speed)` days. Is `speed = 20` enough? → `2 + 1 + 2 = 5` → `true`

**Phase 17.12 — T/F row উত্তরের উপর** ⬜
- **P17.12** 🟢 ⬜ — **EN:** For speeds 1..30 in P17.11, write where `canFinish` turns from false to true. Why is it monotonic?

### ★ মূল problem

#### ★ BS11 · 875. Koko Eating Bananas 🟡 Medium ⬜
🔗 [LC 875](https://leetcode.com/problems/koko-eating-bananas/) (হুবহু)
🌍 **Real-life:** delivery rider — দিনে সর্বনিম্ন কত পার্সেল/ঘণ্টা গতিতে চললে ৮ ঘণ্টায় সব শেষ।

**EN:** Koko loves to eat bananas. There are `n` piles of bananas, the `i`th pile has `piles[i]` bananas. The guards will come back in `h` hours. Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour. Return the minimum integer `k` such that she can eat all the bananas within `h` hours.
```
Example 1: Input: piles = [3,6,7,11], h = 8        Output: 4
Example 2: Input: piles = [30,11,23,4,20], h = 5   Output: 30
Example 3: Input: piles = [30,11,23,4,20], h = 6   Output: 23
```
**Constraints:** `1 <= piles.length <= 10^4` · `piles.length <= h <= 10^9` · `1 <= piles[i] <= 10^9`
**Function:** `var minEatingSpeed = function (piles, h) {}`

**বাংলা:** h ঘণ্টায় সব কলা শেষ করতে সর্বনিম্ন কত গতি লাগবে। আগে brute force (speed 1, 2, 3…), তারপর দেখো কেন binary search চলে। `canEat(speed)` আলাদা helper।
**🧠 ভাবনা:** উত্তর কোন range-এ? (1 থেকে সবচেয়ে বড় pile) k-তে পারলে k+1-এও পারবে?
**⏱️ লক্ষ্য:** Time O(n · log(max)) · Space O(1)

#### ○ BS12 · 1011. Capacity To Ship Packages Within D Days 🟡 ⬜
🔗 [LC 1011](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) (হুবহু)
🌍 courier truck-এর সর্বনিম্ন capacity।
**EN:** Packages must ship in order within `days` days; return the least ship capacity. `weights = [1,2,3,4,5,6,7,8,9,10], days = 5` → `15`; `[3,2,2,4,1,4], 3` → `6`.
**বাংলা:** Koko-র ভাই — range কী? (`max(weights)` থেকে `sum(weights)`)

#### ○ BS13 · 1482. Minimum Number of Days to Make m Bouquets 🟡 ⬜
🔗 [LC 1482](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) (হুবহু)
🌍 বাগানে ফুল ফোটার দিন — কবে m-টা তোড়া বানানো যাবে।
**EN:** `bloomDay = [1,10,3,10,2], m = 3, k = 1` → `3`; `m = 3, k = 2` → `-1`.
**বাংলা:** `canMake(day)` greedy — পাশাপাশি k-টা ফোটা ফুল।

- ⏳ Split Array Largest Sum · Median of Two Sorted Arrays → January

**বলো:** *"If Koko can finish at speed k, she can also finish at any speed above k. That monotonic property lets me binary search on the speed instead of trying every value."*

### 🚪 Gate — Topic 17 (Binary Search) ⬜

---

## Day 5 · W5 D5 · শুক্র ৬ নভে — Topic 18: Two Pointers ১ — দুই প্রান্ত · Read/Write ★ ⬜

**Interview-এ যেভাবে আসে:** sorted array-তে জোড়া, in-place বাদ দেওয়া/সরানো, palindrome — "O(1) extra space" শর্ত থাকলে প্রায়ই two pointers।

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Opposite:** `left = 0`, `right = n - 1`; প্রতি ধাপে **একটা** সরে — কোনটা সরবে, সেই সিদ্ধান্তই আসল।
- **Same direction (read/write):** `read` সব দেখে, `write` শুধু রাখার মতোগুলো লেখে।
- কেন কাজ করে: sorted হলে `sum < target` মানে left বাড়ালেই শুধু sum বাড়তে পারে।

**Skeleton drill:** 3.3 আর 3.4, প্রতিটা ২ বার।

### 📘 Concept phases + ছোট problem

**Phase 18.1 — দুই প্রান্ত থেকে কাছে আসা** ⬜
- **P18.1 · Reverse Numbers In-place** 🟢 ⬜ — 🌍 লাইনের দুই মাথার দুজন জায়গা বদলায়, তারপর ভেতরের দুজন। **EN:** Reverse `[1,2,3,4,5]` in-place with `left`/`right`. When to stop?

**Phase 18.2 — কোন pointer সরবে** ⬜
- **P18.2 · Pair Sum Trace** 🟢 ⬜ — **EN:** For sorted `[1, 3, 4, 6, 9]`, target `10`, trace `left, right, sum` and which pointer moves. → `(0,4)=10` found.

**Phase 18.3 — Read/Write** ⬜
- **P18.3 · Keep Positives** 🟢 ⬜ — 🌍 ঝুড়ি থেকে পচা ফল ফেলে ভালোগুলো সামনে সাজানো। **EN:** In-place keep only positives in `[3, -1, 4, -2, 5]`, return the new length. → `3`, array starts `[3, 4, 5, ...]`

### ★ মূল problem

#### ★ TP1 · 167. Two Sum II - Input Array Is Sorted 🟡 Medium ⬜
🔗 [LC 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) (হুবহু)
🌍 **Real-life:** দামের sorted তালিকা থেকে দুটো জিনিস — মোট ঠিক বাজেটের সমান।

**EN:** Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2. Your solution must use only constant extra space.
```
Example 1: Input: numbers = [2,7,11,15], target = 9   Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.
Example 2: Input: numbers = [2,3,4], target = 6       Output: [1,3]
Example 3: Input: numbers = [-1,0], target = -1       Output: [1,2]
```
**Function:** `var twoSum = function (numbers, target) {}`

**বাংলা:** sorted array-তে যোগফল target এমন জোড়া (1-indexed) — O(1) space। Map দিয়েও করা যায় — তাহলে two pointers এখানে কেন ভালো?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ TP2 · 977. Squares of a Sorted Array 🟢 Easy ⬜
🔗 [LC 977](https://leetcode.com/problems/squares-of-a-sorted-array/) (হুবহু)
🌍 **Real-life:** শূন্য থেকে দূরত্ব — দুই দিকের সবচেয়ে দূরেরটা সবচেয়ে বড়।

**EN:** Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
```
Example 1: Input: nums = [-4,-1,0,3,10]   Output: [0,1,9,16,100]
Example 2: Input: nums = [-7,-3,2,3,11]   Output: [4,9,9,49,121]
```
**Follow up:** Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
**Function:** `var sortedSquares = function (nums) {}`

**বাংলা:** বর্গ করে sorted। sort করলে O(n log n) — দুই প্রান্ত থেকে O(n)।
**🧠 ভাবনা:** সবচেয়ে বড় বর্গ কোথায় থাকতে পারে? (দুই মাথার কোনো একটায়) result কোন দিক থেকে ভরাবে?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ TP3 · 283. Move Zeroes 🟢 Easy ⬜
🔗 [LC 283](https://leetcode.com/problems/move-zeroes/) (হুবহু)
🌍 **Real-life:** to-do list-এর শেষ হওয়া কাজ (0) সব নিচে পাঠানো, বাকিদের ক্রম ঠিক রেখে।

**EN:** Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.
```
Example 1: Input: nums = [0,1,0,3,12]   Output: [1,3,12,0,0]
Example 2: Input: nums = [0]            Output: [0]
```
**Function:** `var moveZeroes = function (nums) {}`

**বাংলা:** ক্রম ঠিক রেখে সব 0 শেষে, in-place।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ TP4 · 26. Remove Duplicates from Sorted Array 🟢 Easy ⬜
🔗 [LC 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) (হুবহু)
🌍 **Real-life:** sorted attendance list থেকে দুবার লেখা নাম বাদ।

**EN:** Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements `k`. The first `k` elements of `nums` should hold the unique elements.
```
Example 1: Input: nums = [1,1,2]                   Output: 2, nums = [1,2,_]
Example 2: Input: nums = [0,0,1,1,1,2,2,3,3,4]     Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
```
**Function:** `var removeDuplicates = function (nums) {}`

**বাংলা:** in-place duplicate বাদ, নতুন length ফেরত।
**🧠 ভাবনা:** sorted — তাই duplicate-রা পাশাপাশি। write-এর আগের value-এর সাথে তুলনা।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ○ TP5 · 27. Remove Element 🟢 ⬜
🔗 [LC 27](https://leetcode.com/problems/remove-element/) (হুবহু)
**EN:** Remove all occurrences of `val` in-place; return the count of remaining. `[3,2,2,3], val = 3` → `2`, `nums = [2,2,_,_]`. **বাংলা:** P18.3-এর মতোই।

**বলো:** *"I keep a write pointer for the next position to fill. The read pointer scans every element and only copies the ones I want to keep."*

---

## Day 6 · W5 D6 · শনি ৭ নভে — Topic 18: Two Pointers ২ — Container · 3Sum ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- pointer সরানো একটা **greedy সিদ্ধান্ত** — "এটা সরালে কি কখনো ভালো হতে পারে?" যুক্তি দিয়ে বলো।
- **Sort + two pointers:** 3Sum = একটা fix + বাকি দুটোয় Two Sum II।
- sort-এর পর duplicate পাশাপাশি — **একই মান skip**।
- palindrome-এর **মাঝখান থেকে** দুই দিকে ছড়ানো (expand around center)।

### 📘 Concept phases + ছোট problem

**Phase 18.4 — ছোট দেয়ালটা সরাও** ⬜
- **P18.4** 🟢 ⬜ — 🌍 দুটো দেয়ালের মাঝে পানি — উচ্চতা ঠিক করে ছোট দেয়াল। **EN:** For heights `[1, 8, 6, 2]` with `left = 0, right = 3`: area = `min(1, 2) * 3 = 3`. Which pointer to move, and why moving the other can never help?

**Phase 18.5 — একটা fix + Two Sum II** ⬜
- **P18.5** 🟢 ⬜ — **EN:** In sorted `[-4, -1, -1, 0, 1, 2]`, fix `-1` (index 1); find pairs in the rest summing to `1`. → `(-1, 2)`, `(0, 1)`

**Phase 18.6 — Duplicate skip** ⬜
- **P18.6** 🟢 ⬜ — **EN:** In sorted `[-1, -1, 0, 1]`, why must the second `-1` be skipped as the fixed number?

**Phase 18.7 — মাঝখান থেকে ছড়ানো** ⬜
- **P18.7** 🟢 ⬜ — **EN:** Expand around center index 3 (`'e'`) of `"racecar"`: how far does the palindrome reach? → the whole string `"racecar"`.

### ★ মূল problem

#### ★ TP6 · 11. Container With Most Water 🟡 Medium ⬜
🔗 [LC 11](https://leetcode.com/problems/container-with-most-water/) (হুবহু)
🌍 **Real-life:** দুটো খুঁটির মাঝে tarpaulin টাঙিয়ে সবচেয়ে বেশি বৃষ্টির পানি ধরা।

**EN:** You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.
```
Example 1: Input: height = [1,8,6,2,5,4,8,3,7]   Output: 49
Explanation: lines at index 1 (8) and index 8 (7): min(8, 7) * (8 - 1) = 49.
Example 2: Input: height = [1,1]                 Output: 1
```
**Constraints:** `2 <= n <= 10^5`
**Function:** `var maxArea = function (height) {}`

**বাংলা:** কোন দুটো দেয়াল সবচেয়ে বেশি পানি ধরে। brute force O(n²), তারপর two pointers। "ছোটটা সরাও" কেন সঠিক — English-এ যুক্তি।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ TP7 · 15. 3Sum 🟡 Medium ⬜
🔗 [LC 15](https://leetcode.com/problems/3sum/) (হুবহু)
🌍 **Real-life:** তিনজনের দল যাদের লাভ-ক্ষতি মিলিয়ে ঠিক শূন্য।

**EN:** Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. Notice that the solution set must not contain duplicate triplets.
```
Example 1: Input: nums = [-1,0,1,2,-1,-4]   Output: [[-1,-1,2],[-1,0,1]]
Example 2: Input: nums = [0,1,1]            Output: []
Example 3: Input: nums = [0,0,0]            Output: [[0,0,0]]
```
**Constraints:** `3 <= nums.length <= 3000`
**Function:** `var threeSum = function (nums) {}`

**বাংলা:** যোগফল 0 এমন সব আলাদা ত্রয়ী। duplicate skip কোথায় কোথায় লাগে?
**🧠 ভাবনা (ভাঙতে শেখো):** sort → একটা fix → বাকিতে TP1 → পাওয়ার পর দুই pointer-ই duplicate পার করে সরাও।
**⏱️ লক্ষ্য:** Time O(n²) · Space O(1) (output বাদে)

#### ○ TP8 · 5. Longest Palindromic Substring 🟡 ⬜
🔗 [LC 5](https://leetcode.com/problems/longest-palindromic-substring/) (হুবহু)
🌍 DNA-তে সবচেয়ে লম্বা আয়না-অংশ।
**EN:** Return the longest palindromic substring. `"babad"` → `"bab"` (`"aba"` also valid); `"cbbd"` → `"bb"`.
**বাংলা:** প্রতিটা center থেকে ছড়াও — বিজোড় আর জোড় দৈর্ঘ্য দুটোই।

- ⏳ [42 Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) → January (বা সময় পেলে আজ)

**বলো:** *"The area is limited by the shorter line. Moving the taller line can never increase the area, so I always move the shorter one."*

### 🚪 Gate — Topic 18 (Two Pointers) ⬜

---

## Day 7 · W5 D7 · রবি ৮ নভে — Topic 40: Async JS ১ · Revision ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- output-order প্রশ্নে তিনটা ঝুড়ি: **sync code** (এখনই) → **microtask** (Promise `then`, `await`-এর পরের অংশ) → **macrotask** (`setTimeout`)।
- প্রতিটা microtask ঝুড়ি **পুরো খালি** হয় পরের macrotask-এর আগে।
- `await x` = "বাকি function-টা microtask-এ পাঠাও"।

### 📘 Concept phases + ছোট problem

**Phase 40.1 — Event loop** ⬜
- **P40.1** 🟢 ⬜ — 🌍 রেস্টুরেন্ট: waiter আগে টেবিলের সব order নেয় (sync), রান্না হলে পরিবেশন (async)। **EN:** Predict: `console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");` → `A C B`

**Phase 40.2 — Microtask বনাম macrotask** ⬜
- **P40.2** 🟢 ⬜ — **EN:** Predict: `setTimeout(() => console.log(1)); Promise.resolve().then(() => console.log(2)); console.log(3);` → `3 2 1`

**Phase 40.3 — Promise state আর chaining** ⬜
- **P40.3** 🟢 ⬜ — **EN:** `Promise.resolve(1).then(x => x + 1).then(x => { throw new Error("bad"); }).catch(e => "caught").then(console.log)` → `caught`

**Phase 40.4 — `async/await` + `try/catch`** ⬜
- **P40.4 · Fetch User Safely** 🟢 ⬜ — 🌍 API fail করলে app crash না। **EN:** Write `async function getName(fetchUser)` that returns the name, or `"unknown"` if `fetchUser()` rejects.

**Output আন্দাজ (সবচেয়ে common interview প্রশ্ন):**
```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
(async () => { console.log(4); await null; console.log(5); })();
console.log(6);
```

### ★ মূল problem

#### ★ P9 · 2621. Sleep 🟢 Easy ⬜
🔗 [LC 2621](https://leetcode.com/problems/sleep/) (হুবহু)
🌍 **Real-life:** "৩ সেকেন্ড পর আবার চেষ্টা করো" — retry-এর আগে অপেক্ষা।

**EN:** Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.
```
Example 1: Input: millis = 100   Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now(); sleep(100).then(() => console.log(Date.now() - t)); // 100
```
**Function:** `async function sleep(millis) {}`

**বাংলা:** `millis` ms পরে resolve হয় এমন Promise।
**⏱️ লক্ষ্য:** Time O(1) (অপেক্ষা বাদে)

#### ★ P10 · 2721. Execute Asynchronous Functions in Parallel (promiseAll) 🟡 Medium ⬜
🔗 [LC 2721](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/) (হুবহু)
🌍 **Real-life:** dashboard load — user, orders, notifications তিনটা API একসাথে; সব এলে page দেখাও, একটা fail হলে error।

**EN:** Given an array of asynchronous functions `functions`, return a new promise `promise`. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel. `promise` resolves when all the promises returned from `functions` were resolved successfully in parallel; the resolved value is an array of the resolved values in the same order as they were in `functions`. `promise` rejects when any of the promises were rejected; it should reject with the reason of the first rejection. Please solve it without using the built-in `Promise.all` function.
```
Example 1: Input: functions = [() => new Promise(resolve => setTimeout(() => resolve(5), 200))]
           Output: {"t": 200, "resolved": [5]}
Example 2: Input: functions = [() => new Promise(resolve => setTimeout(() => resolve(1), 200)),
                               () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))]
           Output: {"t": 100, "rejected": "Error"}
```
**Function:** `var promiseAll = function (functions) {}`

**বাংলা:** নিজের `Promise.all` — সব একসাথে চালাও, ফলাফল আসল ক্রমে; একটা fail হলেই reject; খালি array হলে?
**🧠 ভাবনা:** কী কী মনে রাখতে হবে? (result array, কতগুলো শেষ হলো) ফলাফল কোন index-এ বসবে — শেষ হওয়ার ক্রমে নাকি আসল ক্রমে?

#### ○ P11 · Output Puzzles ⬜
**EN:** Create 3 output-order puzzles yourself and answer them. **বাংলা:** নিজে বানালে বোঝা পাকা হয়।

### 🔁 Re-solve
- ⬜ BS4 First & Last · ⬜ BS8 Rotated · ⬜ BS11 Koko · ⬜ TP7 3Sum · ⬜ October-এর H2 Two Sum

### 🕵️ Unseen

#### ★ U4 · Entries Between Two Times ⬜
🔗 কাছাকাছি: [LC 34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
🌍 **Real-life:** server log-এ সকাল ১০টা থেকে ১১টার মধ্যে কতগুলো request।
**EN:** Given a sorted list of timestamps and two times `t1 <= t2`, return how many entries fall in `[t1, t2]`.
**বাংলা:** আগে লেখো: Pattern ___ কারণ ___।

---

# 📘 WEEK 2 (W6) — Sliding Window · Prefix Sum · Mixed Unseen

**সপ্তাহের লক্ষ্য:**
1. Sliding window skeleton (state / add / condition / remove / answer) — নতুন problem-এ শুধু ঘর ভরানো।
2. বোঝা: **কখন sliding window ভাঙে** (negative সংখ্যা) আর তখন **prefix sum + map**।
3. October + W5-এর সব pattern নাম ছাড়া চেনা।

**পড়বে:** `04-patterns-and-skeletons.md` — skeleton 3.5, 3.6, 3.7, 3.8।

---

## Day 8 · W6 D1 · সোম ৯ নভে — Topic 19: Sliding Window ১ — Fixed Size ★ ⬜

**Interview-এ যেভাবে আসে:** "k দিনের সর্বোচ্চ গড় বিক্রি", "k দৈর্ঘ্যের substring-এ সর্বোচ্চ vowel", "প্রতি k মিনিটের গড় request"।

**🧠 এই topic-এ কীভাবে ভাবব:**
- **contiguous** অংশ + **নির্দিষ্ট দৈর্ঘ্য k** → fixed window।
- bottleneck: পাশাপাশি দুটো window-এর **k−1টা element একই** — বারবার যোগ করছি।
- উপায়: নতুনটা **যোগ**, পুরনোটা **বাদ** → O(n)।
- window কখন পূর্ণ: `right >= k - 1`; কে বের হয়: `arr[right - k]`।

**Skeleton drill:** 3.5 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 19.1 — Brute force: প্রতিটা window আলাদা** ⬜
- **P19.1 · All Windows** 🟢 ⬜ — 🌍 টানা ৩ দিনের বিক্রির প্রতিটা সময়কাল। **EN:** Print every window of size 3 in `[2, 1, 5, 1, 3, 2]` and its sum. → `8, 7, 9, 6`. How many additions did you do?

**Phase 19.2 — Slide: যোগ আর বাদ** ⬜
- **P19.2 · Slide the Sum** 🟢 ⬜ — **EN:** Starting from the first window sum `8`, get the next ones by `+ new − old`. → `8 → 7 → 9 → 6`. Each step costs how much?

**Phase 19.3 — window কখন পূর্ণ** ⬜
- **P19.3** 🟢 ⬜ — **EN:** With `k = 3`, for `right = 0..5`, which `right` values have a full window? Which index leaves at `right = 4`? → `right >= 2`; index `1`.

### ★ মূল problem

#### ★ SW1 · Maximum Sum Subarray of Size K 🟢 Easy ⬜
🔗 কাছাকাছি: [LC 643 · Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
🌍 **Real-life:** দোকানের টানা k দিনের সর্বোচ্চ মোট বিক্রি।

**EN:** Given an array `nums` and an integer `k`, return the maximum sum of any contiguous subarray of size `k`. If `k > nums.length`, return `null` (ask first).
```
Example 1: Input: nums = [2,1,5,1,3,2], k = 3   Output: 9   ([5,1,3])
Example 2: Input: nums = [2,3,4,1,5], k = 2     Output: 7   ([3,4])
```
**Function:** `var maxSumK = function (nums, k) {}`

**বাংলা:** k দৈর্ঘ্যের পাশাপাশি অংশের সর্বোচ্চ যোগফল। brute force আগে, তারপর window।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ SW2 · 1456. Maximum Number of Vowels in a Substring of Given Length 🟡 Medium ⬜
🔗 [LC 1456](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) (হুবহু)
🌍 **Real-life:** গানের lyrics-এর কোন k অক্ষরের অংশ সবচেয়ে "সুরেলা" (বেশি vowel)।

**EN:** Given a string `s` and an integer `k`, return the maximum number of vowel letters in any substring of `s` with length `k`. Vowel letters in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.
```
Example 1: Input: s = "abciiidef", k = 3   Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2: Input: s = "aeiou", k = 2       Output: 2
Example 3: Input: s = "leetcode", k = 3    Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
```
**Function:** `var maxVowels = function (s, k) {}`

**বাংলা:** k দৈর্ঘ্যের কোনো অংশে সর্বোচ্চ কয়টা vowel।
**🧠 ভাবনা:** window-এর state কী? (vowel count) ঢুকলে/বের হলে কীভাবে বদলায়?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ○ SW3 · 643. Maximum Average Subarray I 🟢 ⬜
🔗 [LC 643](https://leetcode.com/problems/maximum-average-subarray-i/) (হুবহু)
**EN:** Find a contiguous subarray of length `k` with the maximum average. `[1,12,-5,-6,50,3], k = 4` → `12.75`. **বাংলা:** SW1 ÷ k।

#### ○ SW4 · Moving Averages ⬜
🌍 শেয়ারের ৫-দিনের moving average। **EN:** Return the average of every window of size `k`. **বাংলা:** প্রতিটা window-এর গড়ের array।

**বলো:** *"Consecutive windows share k - 1 elements, so instead of re-summing, I add the new element and subtract the one that just left. That's O(n) instead of O(n·k)."*

---

## Day 9 · W6 D2 · মঙ্গল ১০ নভে — Topic 19: Sliding Window ২ — Variable Size ★★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব — প্রতিটা problem-এ আগে ৫ প্রশ্ন লেখো:**
1. **State:** window সম্পর্কে কী মনে রাখব? (Set? count Map? sum?)
2. **Add:** `arr[right]` ঢোকালে state কীভাবে বদলায়?
3. **Condition:** কখন window **অবৈধ**?
4. **Remove:** `arr[left]` বের করলে state কীভাবে বদলায়?
5. **Answer:** কখন update? (longest → বৈধ হওয়ার পরে; shortest → বৈধ থাকাকালীন shrink-এর ভেতরে)

**কেন O(n):** left আর right প্রত্যেকে মোট n বারই সরে।
**Skeleton drill:** 3.6 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 19.4 — Expand আর shrink** ⬜
- **P19.4 · Rubber Band** 🟢 ⬜ — 🌍 রাবার ব্যান্ড — ডানে টেনে বড় করো, বেশি টান লাগলে বাঁ দিক ছাড়ো। **EN:** For `[1, 2, 3, 4]` and "sum ≤ 6", trace `left, right, sum` as right expands and left shrinks.

**Phase 19.5 — ৫ প্রশ্ন লেখা (code ছাড়া)** ⬜
- **P19.5** 🟢 ⬜ — **EN:** For "longest substring with no repeating characters", write only the 5 answers (state/add/condition/remove/answer). No code.

**Phase 19.6 — Longest বনাম shortest** ⬜
- **P19.6** 🟢 ⬜ — **EN:** Where does the answer update go for "longest valid window" vs "shortest valid window"? Draw it on the skeleton.

### ★ মূল problem

#### ★ SW5 · 3. Longest Substring Without Repeating Characters 🟡 Medium ⬜
🔗 [LC 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) (হুবহু)
🌍 **Real-life:** গানের playlist — টানা কতগুলো গান কোনো repeat ছাড়া বাজানো যায়।

**EN:** Given a string `s`, find the length of the longest substring without duplicate characters.
```
Example 1: Input: s = "abcabcbb"   Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2: Input: s = "bbbbb"      Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3: Input: s = "pwwkew"     Output: 3
Explanation: The answer is "wke". Notice that "pwke" is a subsequence and not a substring.
```
**Constraints:** `0 <= s.length <= 5 * 10^4`
**Function:** `var lengthOfLongestSubstring = function (s) {}`

**বাংলা:** কোনো অক্ষর repeat না হওয়া সবচেয়ে লম্বা পাশাপাশি অংশের দৈর্ঘ্য। brute force (সব substring) আগে। তারপর ৫ প্রশ্ন লিখে window: (ক) Set দিয়ে (খ) Map-এ শেষ দেখা index রেখে left লাফিয়ে।
**⏱️ লক্ষ্য:** Time O(n) · Space O(min(n, alphabet))

#### ★ SW6 · 209. Minimum Size Subarray Sum 🟡 Medium ⬜
🔗 [LC 209](https://leetcode.com/problems/minimum-size-subarray-sum/) (হুবহু)
🌍 **Real-life:** সবচেয়ে কম টানা দিনে কমপক্ষে ৭০০০ টাকা সঞ্চয়।

**EN:** Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.
```
Example 1: Input: target = 7, nums = [2,3,1,2,4,3]   Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2: Input: target = 4, nums = [1,4,4]         Output: 1
Example 3: Input: target = 11, nums = [1,1,1,1,1,1,1,1]   Output: 0
```
**Function:** `var minSubArrayLen = function (target, nums) {}`

**বাংলা:** যোগফল ≥ target এমন সবচেয়ে ছোট পাশাপাশি অংশের দৈর্ঘ্য (সব ধনাত্মক)। longest আর shortest-এ answer update-এর জায়গা কেন আলাদা?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

**বলো:** *"I expand the window to the right one step at a time. When it contains a duplicate, I shrink from the left until it's valid again. Each pointer moves at most n times, so it's O(n)."*

---

## Day 10 · W6 D3 · বুধ ১১ নভে — Topic 19: Sliding Window ৩ — Frequency Map + Window ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- window-এর ভেতরে **frequency map** — অক্ষর গোনা।
- "বৈধ" শর্ত বানাও নিজের ভাষায়: *"কতগুলো অক্ষর বদলাতে হবে?"* → `windowLength - maxFreq <= k`।
- anagram window = fixed size + count তুলনা।
- শব্দ লুকানো থাকে: "দুটো ঝুড়িতে ফল" = "সর্বোচ্চ ২টা আলাদা"।

### 📘 Concept phases + ছোট problem

**Phase 19.7 — Window-এর count map** ⬜
- **P19.7** 🟢 ⬜ — **EN:** Slide a window of size 3 over `"aabcb"` and print the count map at each step. **বাংলা:** অক্ষর ঢুকলে +1, বের হলে −1, ০ হলে মুছে দাও।

**Phase 19.8 — কতগুলো বদলাতে হবে** ⬜
- **P19.8** 🟢 ⬜ — 🌍 লাইনে সবাইকে একই রঙের জামা পরাতে কয়জনকে বদলাতে হবে। **EN:** For window `"AABA"`, maxFreq = 3 → replacements needed = `4 − 3 = 1`.

### ★ মূল problem

#### ★ SW7 · 424. Longest Repeating Character Replacement 🟡 Medium ⬜
🔗 [LC 424](https://leetcode.com/problems/longest-repeating-character-replacement/) (হুবহু)
🌍 **Real-life:** দেয়ালের টাইল — সর্বোচ্চ k-টা বদলে কত লম্বা অংশ এক রঙের বানানো যায়।

**EN:** You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times. Return the length of the longest substring containing the same letter you can get after performing the above operations.
```
Example 1: Input: s = "ABAB", k = 2      Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2: Input: s = "AABABBA", k = 1   Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.
```
**Function:** `var characterReplacement = function (s, k) {}`

**বাংলা:** সর্বোচ্চ k-টা অক্ষর বদলে একই অক্ষরের সবচেয়ে লম্বা অংশ। শর্তটা নিজে বের করো।
**⏱️ লক্ষ্য:** Time O(n) · Space O(26)

#### ★ SW8 · 438. Find All Anagrams in a String 🟡 Medium ⬜
🔗 [LC 438](https://leetcode.com/problems/find-all-anagrams-in-a-string/) (হুবহু) · [LC 567 · Permutation in String](https://leetcode.com/problems/permutation-in-string/) (একই ধারণা)
🌍 **Real-life:** লম্বা লেখায় একটা শব্দের সব এলোমেলো রূপ কোথায় কোথায় আছে (plagiarism checker)।

**EN:** Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. You may return the answer in any order.
```
Example 1: Input: s = "cbaebabacd", p = "abc"   Output: [0,6]
Explanation: "cba" at 0 and "bac" at 6 are anagrams of "abc".
Example 2: Input: s = "abab", p = "ab"          Output: [0,1,2]
```
**Function:** `var findAnagrams = function (s, p) {}`

**বাংলা:** s-এ p-এর সব anagram-এর শুরুর index। fixed window + count।
**🧠 ভাবনা:** window-এর মাপ কত? দুটো count কীভাবে দ্রুত তুলনা — নাকি "কতগুলো অক্ষর মিলেছে" counter?
**⏱️ লক্ষ্য:** Time O(n) · Space O(26)

#### ○ SW9 · Longest Substring with At Most K Distinct Characters 🟡 ⬜
🔗 [LC 340](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) (premium)
**EN:** Longest substring with at most `k` distinct characters. `"eceba", k = 2` → `3` (`"ece"`). **বাংলা:** window-এ আলাদা অক্ষর > k হলে shrink।

#### ○ SW10 · 904. Fruit Into Baskets 🟡 ⬜
🔗 [LC 904](https://leetcode.com/problems/fruit-into-baskets/) (হুবহু)
🌍 দুটো ঝুড়ি, প্রতিটায় এক রকম ফল — টানা কতগুলো গাছ থেকে তুলতে পারবে।
**EN:** `fruits = [1,2,1]` → `3`; `[0,1,2,2]` → `3`; `[1,2,3,2,2]` → `4`.
**বাংলা:** SW9 with k = 2 — শব্দে লুকানো!

**বলো:** *"A window is valid if the number of characters I need to replace — the window length minus the count of the most frequent character — is at most k."*

### 🚪 Gate — Topic 19 (Sliding Window) ⬜

---

## Day 11 · W6 D4 · বৃহস্পতি ১২ নভে — Topic 20: Prefix Sum ১ ★ ⬜

**Interview-এ যেভাবে আসে:** "বারবার range-এর যোগফল জানতে চাওয়া হবে" (dashboard: ৩ থেকে ১০ তারিখের মোট বিক্রি), "এমন index যার বাঁয়ের যোগফল = ডানের যোগফল"।

**🧠 এই topic-এ কীভাবে ভাবব:**
- একই range-এর যোগফল **বারবার** লাগবে? → একবার O(n) প্রস্তুতি, তারপর প্রতিটা প্রশ্ন O(1)।
- `prefix[i + 1] = prefix[i] + arr[i]`; length **n + 1** (খালি prefix = 0)।
- `sum(i..j) = prefix[j + 1] - prefix[i]`।
- একবারই লাগলে → আলাদা array না, শুধু running sum।

**Skeleton drill:** 3.7 — ২ বার।

### 📘 Concept phases + ছোট problem

**Phase 20.1 — Prefix array বানানো** ⬜
- **P20.1 · Odometer** 🟢 ⬜ — 🌍 গাড়ির odometer — প্রতিদিনের km যোগ হয়ে মোট। **EN:** Build prefix of `[3, 1, 4, 1, 5]` with length n + 1. → `[0, 3, 4, 8, 9, 14]`

**Phase 20.2 — Range sum O(1)-এ** ⬜
- **P20.2** 🟢 ⬜ — **EN:** Using P20.1, sum of indices 1..3? → `prefix[4] − prefix[1] = 9 − 3 = 6`. Prove it by adding `1 + 4 + 1`.

**Phase 20.3 — মোট জানলে ডানের যোগফল** ⬜
- **P20.3** 🟢 ⬜ — **EN:** If total = 14 and leftSum before index 2 = 4, what's the right sum after index 2 (value 4)? → `14 − 4 − 4 = 6`

### ★ মূল problem

#### ★ PS1 · 1480. Running Sum of 1d Array 🟢 Easy ⬜
🔗 [LC 1480](https://leetcode.com/problems/running-sum-of-1d-array/) (হুবহু)
🌍 **Real-life:** bank statement-এর "balance" column।

**EN:** Given an array `nums`, we define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`. Return the running sum of `nums`.
```
Example 1: Input: nums = [1,2,3,4]      Output: [1,3,6,10]
Example 2: Input: nums = [1,1,1,1,1]    Output: [1,2,3,4,5]
Example 3: Input: nums = [3,1,2,10,1]   Output: [3,4,6,16,17]
```
**Function:** `var runningSum = function (nums) {}`
**বাংলা:** প্রতিটা ঘরে শুরু থেকে সেই পর্যন্ত যোগফল।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1) extra (in-place) বা O(n)

#### ★ PS2 · 303. Range Sum Query - Immutable 🟢 Easy ⬜
🔗 [LC 303](https://leetcode.com/problems/range-sum-query-immutable/) (হুবহু)
🌍 **Real-life:** analytics dashboard — যেকোনো তারিখ-range-এর মোট বিক্রি তাৎক্ষণিক।

**EN:** Given an integer array `nums`, handle multiple queries: calculate the sum of the elements of `nums` between indices `left` and `right` inclusive. Implement the `NumArray` class: `NumArray(int[] nums)` initializes the object; `sumRange(left, right)` returns the sum.
```
Example 1: Input: ["NumArray","sumRange","sumRange","sumRange"], [[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]
           Output: [null,1,-1,-3]
Explanation: sumRange(0, 2) = -2 + 0 + 3 = 1; sumRange(2, 5) = 3 - 5 + 2 - 1 = -1; sumRange(0, 5) = -3
```
**Function:** `class NumArray { constructor(nums) {} sumRange(left, right) {} }`

**বাংলা:** class — constructor-এ prefix বানাও, `sumRange` O(1)।
**⏱️ লক্ষ্য:** constructor O(n) · প্রতিটা query O(1) · Space O(n)

#### ★ PS3 · 724. Find Pivot Index 🟢 Easy ⬜
🔗 [LC 724](https://leetcode.com/problems/find-pivot-index/) (হুবহু)
🌍 **Real-life:** দাঁড়িপাল্লার ভারসাম্য বিন্দু।

**EN:** Given an array of integers `nums`, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If the index is on the left edge of the array, then the left sum is `0`. Return the leftmost pivot index. If no such index exists, return `-1`.
```
Example 1: Input: nums = [1,7,3,6,5,6]   Output: 3
Explanation: Left sum = 1 + 7 + 3 = 11, Right sum = 5 + 6 = 11
Example 2: Input: nums = [1,2,3]         Output: -1
Example 3: Input: nums = [2,1,-1]        Output: 0
Explanation: Left sum = 0, Right sum = 1 + -1 = 0
```
**Function:** `var pivotIndex = function (nums) {}`

**বাংলা:** বাঁয়ের যোগফল = ডানের যোগফল — এমন প্রথম index। মোট যোগফল জানলে ডানেরটা আলাদা হিসাব লাগে? (P20.3)
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ○ PS4 · 1991. Find the Middle Index in Array 🟢 ⬜
🔗 [LC 1991](https://leetcode.com/problems/find-the-middle-index-in-array/) (হুবহু PS3-এর যমজ) — **EN:** Same as pivot index. Then return **all** such indices. **বাংলা:** সব equilibrium index।

**বলো:** *"I precompute prefix sums once in O(n). Then any range sum is just the difference of two prefix values, which is O(1) per query."*

---

## Day 12 · W6 D5 · শুক্র ১৩ নভে — Topic 20: Prefix Sum ২ — Prefix + HashMap ★★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- `sum(i..j) = k` মানে `prefix[j+1] − prefix[i] = k` মানে `prefix[i] = prefix[j+1] − k` → **"আগে কি এমন prefix দেখেছি?"** → Two Sum-এর মতো **Map**!
- `Map([[0, 1]])` দিয়ে শুরু — শুরু থেকেই শুরু হওয়া subarray-র জন্য।
- **negative থাকলে sliding window ভাঙে:** ছোট করলে যোগফল বাড়তেও পারে — monotonic না।
- remainder trick: `prefix % k` একই হলে মাঝের অংশ k দিয়ে বিভাজ্য।

**Skeleton drill:** 3.8 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 20.4 — Window কেন ভাঙে** ⬜
- **P20.4** 🟢 ⬜ — **EN:** Try sliding window for "count subarrays with sum = 0" on `[1, -1, 1, -1]`. Why does shrinking not work? (answer should be `4`)

**Phase 20.5 — Prefix-এ Two Sum** ⬜
- **P20.5 · Trace Map** 🟢 ⬜ — 🌍 ব্যাংকের balance history — কোন দুই সময়ের মধ্যে ঠিক ১০০০ টাকা খরচ হয়েছে। **EN:** For `[1, 2, 3]`, k = 3, trace `running`, `running − k`, map contents, count. → count `2`

**Phase 20.6 — Remainder** ⬜
- **P20.6** 🟢 ⬜ — **EN:** For `[23, 2, 4]`, k = 6, print `prefix % 6` at each step. Two equal remainders → the part between sums to a multiple of 6. → `5, 1, 5` → `[2, 4]` = 6 ✓

### ★ মূল problem

#### ★ PS5 · 560. Subarray Sum Equals K 🟡 Medium ⬜
🔗 [LC 560](https://leetcode.com/problems/subarray-sum-equals-k/) (হুবহু)
🌍 **Real-life:** প্রতিদিনের লাভ-ক্ষতি (negative থাকতে পারে) — কতগুলো টানা সময়ে মোট ঠিক k।

**EN:** Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`. A subarray is a contiguous non-empty sequence of elements within an array.
```
Example 1: Input: nums = [1,1,1], k = 2   Output: 2
Example 2: Input: nums = [1,2,3], k = 3   Output: 2
```
**Constraints:** `1 <= nums.length <= 2 * 10^4` · `-1000 <= nums[i] <= 1000`
**Function:** `var subarraySum = function (nums, k) {}`

**বাংলা:** যোগফল ঠিক k এমন কতগুলো পাশাপাশি অংশ। brute force O(n²) আগে, তারপর prefix + map। negative দিয়ে test করো sliding window কেন ভুল।
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ○ PS6 · 523. Continuous Subarray Sum 🟡 ⬜
🔗 [LC 523](https://leetcode.com/problems/continuous-subarray-sum/) (হুবহু)
**EN:** Return `true` if there's a subarray of length ≥ 2 whose sum is a multiple of `k`. `[23,2,4,6,7], k = 6` → `true`; `[23,2,6,4,7], k = 13` → `false`. **বাংলা:** P20.6-এর remainder।

#### ○ PS7 · 525. Contiguous Array 🟡 ⬜
🔗 [LC 525](https://leetcode.com/problems/contiguous-array/) (হুবহু)
🌍 ক্লাসে ছেলে-মেয়ে সমান সংখ্যক — সবচেয়ে লম্বা টানা সারি।
**EN:** Longest contiguous subarray with equal numbers of 0 and 1. `[0,1]` → `2`; `[0,1,0]` → `2`. **বাংলা:** 0-কে −1 ভাবো — তাহলে "sum = 0"!

- ⏳ Range Addition (difference array) → January

**বলো:** *"This is like Two Sum on prefix sums. For each running sum, I look up how many earlier prefixes equal running sum minus k. Sliding window doesn't work because negative numbers break monotonicity."*

### 🚪 Gate — Topic 20 (Prefix Sum) ⬜

---

## Day 13 · W6 D6 · শনি ১৪ নভে — Mixed Unseen Set ★ (Hashing · Sort · BS · 2P · SW · Prefix) ⬜

**নিয়ম:** প্রতিটায় আগে লেখো — *"Pattern: ___ কারণ ___ (কোন clue)"*। Timer ২৫ মিনিট।

**🧠 নাম-ছাড়া problem-এ কীভাবে ভাবব:** উপরের "pattern-চেনার প্রশ্ন" ১ থেকে ৮ ক্রমে মনে মনে চালাও — প্রথম "হ্যাঁ"-টা থেকে শুরু করো।

#### ★ M6 · Busiest 5 Minutes ⬜
🔗 কাছাকাছি: [LC 643](https://leetcode.com/problems/maximum-average-subarray-i/)
🌍 server-এর প্রতি মিনিটের request সংখ্যা। **EN:** Return the maximum total requests in any 5 consecutive minutes. **বাংলা:** টানা ৫ মিনিটে সর্বোচ্চ মোট।

#### ★ M7 · Closest to Budget ⬜
🌍 sorted price list আর একটা budget। **EN:** Pick two different items to spend as close to the budget as possible without exceeding it. Return the total. **বাংলা:** দুটো item কিনে budget-এর সবচেয়ে কাছাকাছি (না ছাড়িয়ে)।

#### ★ M8 · Longest With Two Letters ⬜
🔗 কাছাকাছি: [LC 904](https://leetcode.com/problems/fruit-into-baskets/)
**EN:** Longest substring with at most 2 distinct characters. **বাংলা:** সর্বোচ্চ ২টা আলাদা অক্ষরের সবচেয়ে লম্বা অংশ।

#### ★ M9 · Break-Even Periods ⬜
🔗 কাছাকাছি: [LC 560](https://leetcode.com/problems/subarray-sum-equals-k/)
🌍 প্রতিদিনের লাভ-ক্ষতি (negative থাকতে পারে)। **EN:** How many contiguous periods have a total of exactly 0? **বাংলা:** কতগুলো টানা সময়ের মোট ঠিক 0?

#### ○ M10 · Minimum Truck Capacity ⬜
🔗 কাছাকাছি: [LC 1011](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
**EN:** Package weights in fixed order and `t` trucks — minimum capacity per truck to send everything. **বাংলা:** ক্রম বদলানো যাবে না।

#### ○ 76. Minimum Window Substring 🔴 Hard ⬜
🔗 [LC 76](https://leetcode.com/problems/minimum-window-substring/) — শুধু চেষ্টা, ৪০ মিনিট; না পারলে January।

**Reflection:** M8 আর M10-এর pattern কি শব্দ দেখে বোঝা গেছে, নাকি গঠন দেখে?

---

## Day 14 · W6 D7 · রবি ১৫ নভে — Async JS ২ · Revision ⬜

### 📘 Concept phases + ছোট problem

**Phase 40.5 — Retry-এর ধারণা** ⬜
- **P40.5** 🟢 ⬜ — 🌍 ফোন না ধরলে ১, ২, ৪ মিনিট পর আবার কল (exponential backoff)। **EN:** Print the delays for 4 retries starting at 100ms doubling each time. → `100 200 400 800`

**Phase 40.6 — একসাথে সর্বোচ্চ কয়টা** ⬜
- **P40.6** 🟢 ⬜ — 🌍 ৩টা cash counter, ১০ জন customer। **EN:** With limit 2 and tasks taking `[3, 1, 2]` seconds, draw the timeline of which task runs when. Total time? → `3`

### ★ মূল problem

#### ★ P12 · retry(fn, retries, delayMs) 🟡 ⬜
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** payment API মাঝে মাঝে fail করে — কয়েকবার চেষ্টা করো, প্রতিবার একটু বেশি অপেক্ষা করে।
**EN:** Call async `fn`; if it rejects, try again up to `retries` more times, waiting `delayMs`, then double each time. If all attempts fail, reject with the last error.
**বাংলা:** fail হলে আবার; delay প্রতিবার দ্বিগুণ; শেষ পর্যন্ত fail হলে শেষ error।
**🧠 ভাবনা:** loop নাকি recursion? `await sleep(...)` (P9) কাজে লাগাও।

#### ★ P13 · Promise Pool 🔴 Hard ⬜
🔗 কাছাকাছি: [LC 2636 · Promise Pool](https://leetcode.com/problems/promise-pool/) (premium)
🌍 **Real-life:** API rate limit মেনে ১০০০ request — একসাথে সর্বোচ্চ ৫টা।
**EN:** `promisePool(tasks, limit)` — `tasks` is an array of functions returning promises. At most `limit` run at once; results come back in the original order.
**বাংলা:** একসাথে সর্বোচ্চ `limit`টা চলবে; ফলাফল আসল ক্রমে।
**🧠 ভাবনা (ভাঙতে শেখো):** "worker" ভাবো — `limit`টা worker, প্রতিটা worker পরের অচালু task তুলে নেয়। কোন index পরের — সেটা সবার মধ্যে ভাগ করা একটা variable।

#### ○ P14 · 2637. Promise Time Limit 🟡 ⬜
🔗 [LC 2637](https://leetcode.com/problems/promise-time-limit/) (হুবহু)
**EN:** Given async `fn` and time `t`, return a time-limited version that rejects with `"Time Limit Exceeded"` if `fn` takes longer than `t` ms. **বাংলা:** সময়মতো না এলে reject (`withTimeout`)।

### 🔁 Re-solve
- ⬜ SW5 Longest Substring · ⬜ SW7 Char Replacement · ⬜ PS5 Subarray Sum K · ⬜ TP6 Container · ⬜ BS11 Koko

**Week Review:** sliding window-এর ৫ প্রশ্ন কি আগে থেকেই মাথায় আসে? কোন problem-এ "condition" বের করতে আটকেছি?

---

# 📙 WEEK 3 (W7) — Recursion · Linked List

**সপ্তাহের লক্ষ্য:**
1. Recursion-এ ভয় না পাওয়া: **"ধরে নিচ্ছি ছোট problem-টা function নিজে ঠিকঠাক solve করবে — আমার কাজ শুধু সেটা দিয়ে বড়টা বানানো।"** (leap of faith)
2. Call stack হাতে trace করা — recursion-এর debug এভাবেই হয়।
3. Linked list-এ pointer নিয়ে কাজ, **ছবি এঁকে** — dummy node, reverse, fast/slow।

---

## Day 15 · W7 D1 · সোম ১৬ নভে — Topic 21: Recursion ১ — Base Case · Call Stack ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব — প্রতিটা recursion-এ ৩ প্রশ্ন:**
1. **Base case:** সবচেয়ে ছোট input কোনটা, যার উত্তর সরাসরি জানি? (খালি array, n = 0)
2. **ছোট problem:** নিজেকে কোন **ছোট** input দিয়ে ডাকব? (rest, n − 1, n / 2)
3. **মেলানো:** ছোটটার উত্তর পেলে (বিশ্বাস করো!), বড়টার উত্তর কীভাবে বানাব?

- `slice` না করে **index পাঠাও** — slice প্রতিবার O(n) কপি → মোট O(n²)।
- JS stack limit ~১০,০০০ গভীরতা।

### 📘 Concept phases + ছোট problem

**Phase 21.1 — Base case** ⬜
- **P21.1 · Countdown** 🟢 ⬜ — 🌍 rocket launch। **EN:** `countDown(3)` → `3 2 1 Liftoff!` recursively. Remove the base case — what error appears? → `Maximum call stack size exceeded`

**Phase 21.2 — Leap of faith** ⬜
- **P21.2 · Sum of Array** 🟢 ⬜ — 🌍 লাইনের প্রথমজন বলে: "আমার টাকা + পেছনের সবার মোট (ওরা নিজেরা হিসাব করবে)"। **EN:** `sum([2, 4, 6])` → `12` as `arr[0] + sum(rest)`.

**Phase 21.3 — Call stack আঁকা** ⬜
- **P21.3 · Factorial Stack** 🟢 ⬜ — **EN:** Draw the boxes for `factorial(4)` going down and the values coming back up. → `4 × 6 = 24`

**Phase 21.4 — `slice` বনাম index** ⬜
- **P21.4** 🟢 ⬜ — **EN:** Rewrite P21.2 as `sum(arr, i)` with no `slice`. Why is it O(n) instead of O(n²)?

### ★ মূল problem

#### ★ R1 · sum · factorial · countDown (recursive) 🟢 ⬜
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** রুশ পুতুল (matryoshka) — প্রতিটা খুললে ভেতরে ছোট একটা।
**EN:** Write `sum(arr)`, `factorial(n)`, `countDown(n)` with recursion only (no loops). Draw the call stack for n = 4 for each.
**বাংলা:** loop নিষেধ — শুধু recursion। প্রতিটার call stack আঁকো।
**⏱️ লক্ষ্য:** Time O(n) · Space O(n) (stack)

#### ★ R2 · Reverse String (recursive) 🟢 ⬜
🔗 কাছাকাছি: [LC 344](https://leetcode.com/problems/reverse-string/) (recursive করে submit)
🌍 **Real-life:** আয়নায় লেখা পড়া।
**EN:** Reverse a string recursively, two ways: (a) with `slice`, (b) with indices (two pointers + recursion). Compare complexity. `"hello"` → `"olleh"`.
**বাংলা:** দুইভাবে recursive reverse; complexity তুলনা।
**⏱️ লক্ষ্য:** (খ) Time O(n) · Space O(n)

#### ★ R3 · 50. Pow(x, n) 🟡 Medium ⬜
🔗 [LC 50](https://leetcode.com/problems/powx-n/) (হুবহু)
🌍 **Real-life:** চক্রবৃদ্ধি সুদ — ৩০ বছর পর কত।

**EN:** Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).
```
Example 1: Input: x = 2.00000, n = 10   Output: 1024.00000
Example 2: Input: x = 2.10000, n = 3    Output: 9.26100
Example 3: Input: x = 2.00000, n = -2   Output: 0.25000
Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25
```
**Constraints:** `-2^31 <= n <= 2^31 - 1`
**Function:** `var myPow = function (x, n) {}`

**বাংলা:** xⁿ — (ক) O(n) (খ) **fast power O(log n)**: `x^n = (x^(n/2))²`। negative n?
**🧠 ভাবনা:** `x^10 = (x^5)²` — `x^5` একবার হিসাব করলেই হয়, দুবার না। বিজোড় n হলে?
**⏱️ লক্ষ্য:** Time O(log n) · Space O(log n)

#### ○ R4 · isPalindrome (recursive) ⬜
**EN:** `isPal("racecar")` → `true` recursively. **বাংলা:** দুই মাথা মেলে? তাহলে ভেতরের অংশ।

**বলো:** *"My base case is an empty array, which sums to zero. For the recursive case, I trust that the function correctly sums the rest, and I add the first element."*

---

## Day 16 · W7 D2 · মঙ্গল ১৭ নভে — Topic 21: Recursion ২ — Tree Recursion · Nested Data · Memo ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- এক call (linear) বনাম একাধিক call (**tree recursion**) — call tree আঁকো।
- nested data দেখলে: *"এটা কি আবার একটা array/object? তাহলে নিজেকে ডাকো।"*
- একই call বারবার? → **memo** (Map-এ মনে রাখো) → O(2ⁿ) থেকে O(n)। এটাই DP-র বীজ।

### 📘 Concept phases + ছোট problem

**Phase 21.5 — Call tree আঁকা** ⬜
- **P21.5 · Fib Tree** 🟢 ⬜ — 🌍 খরগোশের বংশবৃদ্ধি। **EN:** Draw the call tree of `fib(5)`. How many times is `fib(2)` called? → `3`

**Phase 21.6 — Nested-এ ঢোকা** ⬜
- **P21.6 · Count Nested** 🟢 ⬜ — 🌍 বাক্সের ভেতর বাক্স — মোট কয়টা খেলনা? **EN:** Count all numbers in `[1, [2, [3, 4]], 5]`. → `5`

**Phase 21.7 — Memo যোগ** ⬜
- **P21.7** 🟢 ⬜ — **EN:** Count calls of plain `fib(30)` vs memoized `fib(30)`. → `2,692,537` calls vs `59` calls

### ★ মূল problem

#### ★ R5 · 2625. Flatten Deeply Nested Array 🟡 Medium ⬜
🔗 [LC 2625](https://leetcode.com/problems/flatten-deeply-nested-array/) (হুবহু)
🌍 **Real-life:** nested comment thread-কে এক লাইনে সাজানো।

**EN:** Given a multi-dimensional array `arr` and a depth `n`, return a flattened version of that array. A flattened array should have all sub-arrays removed and replaced with the actual elements, only if the current depth of nesting is less than `n`. The depth of the elements in the first array is `0`. Please solve it without the built-in `Array.flat` method.
```
Example 1: Input: arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0
           Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
Example 2: Same arr, n = 1
           Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
Example 3: Same arr, n = 2
           Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```
**Function:** `var flat = function (arr, n) {}`

**বাংলা:** nested array-কে n স্তর পর্যন্ত সমতল করো, `flat` ছাড়া। আগে depth ছাড়া পুরোটা, তারপর depth যোগ।
**🧠 ভাবনা:** প্রতিটা element: array আর depth বাকি আছে → ভেতরে যাও (depth − 1); নইলে push।
**⏱️ লক্ষ্য:** Time O(মোট element) · Space O(গভীরতা)

#### ★ R6 · 509. Fibonacci Number 🟢 Easy ⬜
🔗 [LC 509](https://leetcode.com/problems/fibonacci-number/) (হুবহু)
🌍 **Real-life:** সূর্যমুখী ফুলের বীজের সর্পিল।

**EN:** The Fibonacci numbers: `F(0) = 0, F(1) = 1, F(n) = F(n - 1) + F(n - 2)`. Given `n`, calculate `F(n)`.
```
Example 1: Input: n = 2   Output: 1
Example 2: Input: n = 3   Output: 2
Example 3: Input: n = 4   Output: 3
```
**Function:** `var fib = function (n) {}`

**বাংলা:** (ক) plain recursion (n = 30-এ call গোনো) (খ) memo (গ) loop দিয়ে O(1) space। তিনটার টেবিল।
**⏱️ লক্ষ্য:** (ক) O(2ⁿ) · (খ) O(n), O(n) · (গ) O(n), O(1)

#### ★ R7 · Sum All Numbers in Nested Object 🟡 ⬜
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** company-র department → team → member-এর বেতন — মোট খরচ।
**EN:** Sum every number inside a nested structure of objects and arrays. `{ a: 1, b: { c: 2, d: { e: 3 } }, f: [4, 5] }` → `15`.
**বাংলা:** nested object/array-র সব number-এর যোগফল।
**🧠 ভাবনা:** value-এর ৩ ধরন: number → যোগ, object/array → ভেতরে যাও, বাকি → বাদ।

#### ○ R8 · 70. Climbing Stairs 🟢 ⬜
🔗 [LC 70](https://leetcode.com/problems/climbing-stairs/) (হুবহু)
🌍 সিঁড়িতে ১ বা ২ ধাপ করে ওঠা — কত উপায়ে?
**EN:** `n = 2` → `2`; `n = 3` → `3`. **বাংলা:** আজ শুধু recursion + memo (December-এ DP হিসেবে)।

**বলো:** *"Plain recursive Fibonacci recomputes the same values exponentially many times. Caching each result in a map means each n is computed once, so it drops to O(n)."*

---

## Day 17 · W7 D3 · বুধ ১৮ নভে — Topic 21: Recursion ৩ — সব সম্ভাবনা তৈরি (Backtracking-এর দরজা) ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Decision tree:** প্রতিটা element-এ দুটো সিদ্ধান্ত — **নেব / নেব না** → 2ⁿ পাতা।
- `path`: নিই (`push`) → ভেতরে যাই → ফিরে এসে বাদ দিই (`pop`) — **choose / explore / undo**।
- result-এ রাখার সময় **কপি** (`[...path]`) — না করলে reference-এর ফাঁদ (Topic 1!)।

### 📘 Concept phases + ছোট problem

**Phase 21.8 — Decision tree কাগজে** ⬜
- **P21.8** 🟢 ⬜ — 🌍 pizza-র topping — প্রতিটা নেব নাকি নেব না। **EN:** Draw the include/exclude tree for `[a, b]`. List the leaves. → `[], [b], [a], [a,b]`

**Phase 21.9 — Choose / explore / undo** ⬜
- **P21.9 · Binary Strings** 🟢 ⬜ — **EN:** Print all binary strings of length 2 by pushing `"0"`/`"1"`, recursing, then popping. → `00 01 10 11`

### ★ মূল problem

#### ★ R9 · 78. Subsets 🟡 Medium ⬜
🔗 [LC 78](https://leetcode.com/problems/subsets/) (হুবহু)
🌍 **Real-life:** burger-এর সম্ভাব্য সব topping combination।

**EN:** Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.
```
Example 1: Input: nums = [1,2,3]   Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2: Input: nums = [0]       Output: [[],[0]]
```
**Constraints:** `1 <= nums.length <= 10`
**Function:** `var subsets = function (nums) {}`

**বাংলা:** সব সম্ভাব্য subset। decision tree আগে কাগজে।
**🧠 ভাবনা:** constraint n ≤ 10 — কেন এত ছোট? (2ⁿ!)
**⏱️ লক্ষ্য:** Time O(2ⁿ · n) · Space O(n) (path)

#### ★ R10 · Copy vs Reference Experiment 🟢 ⬜
**EN:** In R9, push `path` instead of `[...path]`. Run it, show the output, and explain. **বাংলা:** সব ঘরে কেন একই (খালি) array দেখায়?

#### ○ R11 · 46. Permutations 🟡 ⬜
🔗 [LC 46](https://leetcode.com/problems/permutations/) (হুবহু)
🌍 ৩ জনকে লাইনে দাঁড় করানোর সব ক্রম।
**EN:** `[1,2,3]` → all 6 orderings. **বাংলা:** `used` array দিয়ে (পুরোটা December W11-এ)।

#### ○ R12 · All Binary Strings of Length n ⬜
**EN:** Generate all `"0"/"1"` strings of length `n`. `n = 3` → 8 strings. **বাংলা:** P21.9-এর বড় রূপ।

**বলো:** *"For each element, I make two choices: include it or skip it. That forms a binary decision tree with 2ⁿ leaves, and each leaf is one subset."*

### 🚪 Gate — Topic 21 (Recursion) ⬜

---

## Day 18 · W7 D4 · বৃহস্পতি ১৯ নভে — Topic 22: Linked List ১ — বানানো · Traversal · Reverse ★ ⬜

**Interview-এ যেভাবে আসে:** reverse, merge, cycle, middle — "pointer গোলমাল না করে" কাজ করতে পারো কিনা।
তোমার `codeAbc/LinkedList/`-এর পুরনো code খুলবে না — ফাঁকা editor থেকে।

**🧠 এই topic-এ কীভাবে ভাবব:**
- **সবসময় ছবি আঁকো** — box আর তীর। প্রতিটা লাইনে কোন তীর বদলাল?
- কোনো `next` বদলানোর আগে: **পরেরটা হারিয়ে যাবে না তো?** → আগে `const next = curr.next` রাখো।
- head নিজেই বদলাতে পারে? → **dummy node**।
- test-এর জন্য প্রথমেই `fromArray` / `toArray` helper।

**Skeleton drill:** 3.15 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 22.1 — Node আর traversal** ⬜
- **P22.1 · Treasure Hunt** 🟢 ⬜ — 🌍 গুপ্তধনের খেলা — প্রতিটা চিরকুটে পরেরটার ঠিকানা। **EN:** Build `1 → 2 → 3` by hand with `ListNode`, then print values with `while (curr)`.

**Phase 22.2 — Insert / delete** ⬜
- **P22.2** 🟢 ⬜ — 🌍 ট্রেনের বগি জোড়া/খোলা। **EN:** Insert `9` after the node with value `2` in `1 → 2 → 3`. Draw which arrows change. → `1 → 2 → 9 → 3`

**Phase 22.3 — Dummy node** ⬜
- **P22.3** 🟢 ⬜ — **EN:** Delete value `1` from `1 → 2 → 3` with and without a dummy node. Which version needs a special case?

**Phase 22.4 — Reverse, ধাপে ধাপে** ⬜
- **P22.4** 🟢 ⬜ — **EN:** For `1 → 2 → 3`, draw `prev / curr / next` after each loop step.

### ★ মূল problem

#### ★ L1 · ListNode + fromArray + toArray 🟢 ⬜
🔗 LeetCode-এ হুবহু নেই (সব LeetCode linked list problem-এ test-এর জন্য লাগবে)
**EN:** Write `class ListNode { val, next }`, `fromArray([1,2,3])` → head, and `toArray(head)` → `[1,2,3]`.
**বাংলা:** test-এর helper — আগে এটা।

#### ★ L2 · 707. Design Linked List 🟡 Medium ⬜
🔗 [LC 707](https://leetcode.com/problems/design-linked-list/) (হুবহু)
🌍 **Real-life:** music player-এর playlist — শুরুতে, শেষে, মাঝে গান যোগ/বাদ।

**EN:** Design your implementation of the linked list. Implement `MyLinkedList`: `get(index)`, `addAtHead(val)`, `addAtTail(val)`, `addAtIndex(index, val)`, `deleteAtIndex(index)`. Invalid index → `get` returns `-1`, others do nothing.
```
Example: addAtHead(1), addAtTail(3), addAtIndex(1, 2)  → 1 → 2 → 3
         get(1) → 2; deleteAtIndex(1) → 1 → 3; get(1) → 3
```
**বাংলা:** নিজের linked list class। খালি list-এ প্রতিটা method-এ কী হয়?
**⏱️ লক্ষ্য:** head-এ O(1) · index-এ O(n)

#### ★ L3 · 206. Reverse Linked List 🟢 Easy ⬜
🔗 [LC 206](https://leetcode.com/problems/reverse-linked-list/) (হুবহু)
🌍 **Real-life:** ট্রেনের সব বগির দিক উল্টে দেওয়া।

**EN:** Given the `head` of a singly linked list, reverse the list, and return the reversed list.
```
Example 1: Input: head = [1,2,3,4,5]   Output: [5,4,3,2,1]
Example 2: Input: head = [1,2]         Output: [2,1]
Example 3: Input: head = []            Output: []
```
**Follow up:** A linked list can be reversed either iteratively or recursively. Could you implement both?
**Function:** `var reverseList = function (head) {}`

**বাংলা:** list উল্টাও — iterative আর recursive। recursive-টার space কত?
**⏱️ লক্ষ্য:** iterative O(n), O(1) · recursive O(n), O(n)

#### ○ L4 · Doubly Linked List ⬜
🌍 browser-এর back/forward। **EN:** `append`, and `remove(node)` in O(1) with `prev` + `next`. **বাংলা:** LRU Cache-এ লাগবে (W8 Day 7)।

**বলো:** *"I walk through the list with three pointers. At each step I save the next node, point the current node back to the previous one, then move both pointers forward."*

---

## Day 19 · W7 D5 · শুক্র ২০ নভে — Topic 22: Linked List ২ — Fast/Slow · Merge ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- middle, cycle, শেষ থেকে n-তম → **fast/slow** (fast দুই ধাপ, slow এক ধাপ)।
- জোড় দৈর্ঘ্যে middle কোনটা? → loop শর্ত বদলে দুটোই পাওয়া যায়।
- দুটো sorted list জোড়া → **dummy + tail** (October-এর A2 merge-এর আত্মীয়)।

**Skeleton drill:** 3.16 — ২ বার।

### 📘 Concept phases + ছোট problem

**Phase 22.5 — Fast/slow** ⬜
- **P22.5** 🟢 ⬜ — 🌍 দৌড়ের মাঠে একজন দ্বিগুণ গতিতে — সে শেষ লাইনে পৌঁছালে ধীরজন মাঝখানে। **EN:** Trace `slow`/`fast` on `1 → 2 → 3 → 4 → 5`. Where is `slow` when `fast` stops? → `3`

**Phase 22.6 — Cycle ধরা** ⬜
- **P22.6** 🟢 ⬜ — 🌍 গোল ট্র্যাকে দ্রুতজন একসময় ধীরজনকে পেছন থেকে ধরে ফেলে। **EN:** Why will `fast` and `slow` meet if there is a cycle? Explain in two lines.

**Phase 22.7 — Dummy + tail দিয়ে merge** ⬜
- **P22.7** 🟢 ⬜ — **EN:** Merge `1 → 4` and `2 → 3` with a dummy and a tail pointer. Draw each step. → `1 → 2 → 3 → 4`

### ★ মূল problem

#### ★ L5 · 876. Middle of the Linked List 🟢 Easy ⬜
🔗 [LC 876](https://leetcode.com/problems/middle-of-the-linked-list/) (হুবহু)
🌍 **Real-life:** লাইনের মাঝখানের মানুষ — না গুনে।

**EN:** Given the `head` of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.
```
Example 1: Input: head = [1,2,3,4,5]     Output: [3,4,5]
Example 2: Input: head = [1,2,3,4,5,6]   Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
```
**Function:** `var middleNode = function (head) {}`
**বাংলা:** list-এর মাঝখানের node; দুটো মাঝখান হলে দ্বিতীয়টা।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ L6 · 141. Linked List Cycle 🟢 Easy ⬜
🔗 [LC 141](https://leetcode.com/problems/linked-list-cycle/) (হুবহু)
🌍 **Real-life:** redirect loop — page A → B → C → আবার A।

**EN:** Given `head`, the head of a linked list, determine if the linked list has a cycle in it. Return `true` if there is a cycle, otherwise `false`.
```
Example 1: Input: head = [3,2,0,-4], pos = 1   Output: true
Explanation: There is a cycle where the tail connects to the 1st node (0-indexed).
Example 2: Input: head = [1], pos = -1         Output: false
```
**Follow up:** Can you solve it using O(1) memory?
**Function:** `var hasCycle = function (head) {}`

**বাংলা:** list-এ চক্র আছে কি? (ক) Set দিয়ে O(n) space (খ) fast/slow O(1)।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ L7 · 21. Merge Two Sorted Lists 🟢 Easy ⬜
🔗 [LC 21](https://leetcode.com/problems/merge-two-sorted-lists/) (হুবহু)
🌍 **Real-life:** দুটো sorted লাইন এক লাইনে।

**EN:** You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list by splicing together the nodes. Return the head of the merged linked list.
```
Example 1: Input: list1 = [1,2,4], list2 = [1,3,4]   Output: [1,1,2,3,4,4]
Example 2: Input: list1 = [], list2 = []             Output: []
Example 3: Input: list1 = [], list2 = [0]            Output: [0]
```
**Function:** `var mergeTwoLists = function (list1, list2) {}`
**বাংলা:** দুটো sorted list জোড়া — iterative (dummy) আর recursive।
**⏱️ লক্ষ্য:** Time O(n + m) · Space O(1) iterative

#### ○ L8 · 142. Linked List Cycle II 🟡 ⬜
🔗 [LC 142](https://leetcode.com/problems/linked-list-cycle-ii/) (হুবহু)
**EN:** Return the node where the cycle begins, or `null`. **বাংলা:** দেখা হওয়ার পর একটাকে head-এ ফেরাও, দুজনে এক ধাপ করে — কেন কাজ করে, গণিত বোঝার চেষ্টা।

**বলো:** *"The fast pointer moves twice as fast, so when it reaches the end, the slow pointer is at the middle. If there's a cycle, the fast pointer eventually laps the slow one."*

---

## Day 20 · W7 D6 · শনি ২১ নভে — Topic 22: Linked List ৩ — Gap · Palindrome · Combination ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Gap কৌশল:** একটাকে n ধাপ এগিয়ে দাও, তারপর দুটো একসাথে — শেষ থেকে n-তম এক pass-এ।
- **কৌশল জোড়া লাগানো:** বড় problem = যেগুলো জানি সেই ছোট helper-গুলোর মিশ্রণ (middle + reverse + compare)।

### 📘 Concept phases + ছোট problem

**Phase 22.8 — Gap** ⬜
- **P22.8** 🟢 ⬜ — 🌍 দুজন হাঁটছে ২ ধাপ দূরত্ব রেখে — প্রথমজন দেয়ালে পৌঁছালে দ্বিতীয়জন কোথায়? **EN:** On `1 → 2 → 3 → 4 → 5`, move `fast` 2 steps ahead, then move both until `fast` is at the last node. Where's `slow`? → `3` (2nd from end is `4`, so `slow.next`)

**Phase 22.9 — Helper মিলিয়ে বড় কাজ** ⬜
- **P22.9** 🟢 ⬜ — **EN:** List the helpers needed for "is this linked list a palindrome with O(1) space?" (no code). → middle, reverse, compare

### ★ মূল problem

#### ★ L9 · 19. Remove Nth Node From End of List 🟡 Medium ⬜
🔗 [LC 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) (হুবহু)
🌍 **Real-life:** playlist-এর শেষ থেকে দ্বিতীয় গান বাদ — না গুনে।

**EN:** Given the `head` of a linked list, remove the `n`th node from the end of the list and return its head.
```
Example 1: Input: head = [1,2,3,4,5], n = 2   Output: [1,2,3,5]
Example 2: Input: head = [1], n = 1           Output: []
Example 3: Input: head = [1,2], n = 1         Output: [1]
```
**Follow up:** Could you do this in one pass?
**Function:** `var removeNthFromEnd = function (head, n) {}`

**বাংলা:** শেষ থেকে n-তম node মুছে ফেলো — এক pass, dummy node। n = length হলে (head মুছতে হবে)?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ L10 · 234. Palindrome Linked List 🟢 Easy ⬜
🔗 [LC 234](https://leetcode.com/problems/palindrome-linked-list/) (হুবহু)
🌍 **Real-life:** ট্রেনের বগির রঙ সামনে-পেছনে একই ক্রমে?

**EN:** Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.
```
Example 1: Input: head = [1,2,2,1]   Output: true
Example 2: Input: head = [1,2]       Output: false
```
**Follow up:** Could you do it in O(n) time and O(1) space?
**Function:** `var isPalindrome = function (head) {}`

**বাংলা:** (ক) array-তে কপি O(n) space (খ) middle + reverse O(1) space।
**🧠 ভাবনা (ভাঙতে শেখো):** P22.9-এর তিনটা helper — প্রতিটা আগে আলাদা লিখে test, তারপর জোড়া।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ○ L11 · 160. Intersection of Two Linked Lists 🟢 ⬜
🔗 [LC 160](https://leetcode.com/problems/intersection-of-two-linked-lists/) (হুবহু)
🌍 দুটো রাস্তা এক মোড়ে মিলেছে — কোথায়? **EN:** Return the intersecting node or `null`. **বাংলা:** দুই pointer, শেষে পৌঁছে অন্য list-এর head-এ।

#### ○ L12 · 143. Reorder List 🟡 ⬜
🔗 [LC 143](https://leetcode.com/problems/reorder-list/) (হুবহু)
**EN:** `[1,2,3,4]` → `[1,4,2,3]`; `[1,2,3,4,5]` → `[1,5,2,4,3]`. **বাংলা:** middle + reverse + merge — তিন কৌশল একসাথে।

#### ○ L13 · 2. Add Two Numbers 🟡 ⬜
🔗 [LC 2](https://leetcode.com/problems/add-two-numbers/) (হুবহু)
🌍 হাতে যোগ — হাতে রাখা (carry)। **EN:** Digits stored in reverse order; `[2,4,3] + [5,6,4]` → `[7,0,8]` (342 + 465 = 807). **বাংলা:** carry।

- ⏳ Copy List with Random Pointer · Reverse Nodes in k-Group → January

**বলো:** *"I break it into three helpers I already know: find the middle, reverse the second half, and compare the two halves node by node."*

### 🚪 Gate — Topic 22 (Linked List) ⬜

---

## Day 21 · W7 D7 · রবি ২২ নভে — Practical JS ৬ · Revision ⬜

### 🛠️ Practical JS ৬

#### ★ P15 · curry(fn) 🟡 ⬜
🔗 কাছাকাছি: [LC 2632 · Curry](https://leetcode.com/problems/curry/) (premium)
🌍 **Real-life:** discount function-এ আগে rate বসিয়ে রাখা, পরে দাম দেওয়া।
**EN:** `curry(fn)` returns a function that collects arguments until it has `fn.length` of them, then calls `fn`. `curry(add3)(1)(2)(3)`, `(1, 2)(3)`, `(1)(2, 3)` all return `6`.
**বাংলা:** যতক্ষণ যথেষ্ট argument না আসে, নতুন function ফেরত দাও।
**🧠 ভাবনা:** এখন পর্যন্ত কতগুলো argument জমেছে — closure-এ মনে রাখো।

#### ★ P16 · 2694. Event Emitter 🟡 Medium ⬜
🔗 [LC 2694](https://leetcode.com/problems/event-emitter/) (হুবহু)
🌍 **Real-life:** YouTube subscribe — নতুন video এলে সব subscriber-কে খবর।

**EN:** Design an `EventEmitter` class. `subscribe(eventName, callback)` registers a callback and returns an object with an `unsubscribe` method. `emit(eventName, args)` calls every callback subscribed to `eventName` in the order they subscribed, passing `args`, and returns an array of their results (empty array if none).
```
Example: const e = new EventEmitter();
         const sub = e.subscribe("firstEvent", (x) => x + 1);
         e.emit("firstEvent", [5]);   // [6]
         sub.unsubscribe();
         e.emit("firstEvent", [5]);   // []
```
**বাংলা:** নিজের EventEmitter — subscribe, unsubscribe, emit। emit চলাকালীন একটা handler নিজেকে বাদ দিলে কী হয়?
**🧠 ভাবনা:** Map: event name → callback-এর list।

#### ○ P17 · Memoize with Multiple Arguments ⬜
🔗 কাছাকাছি: [LC 2630 · Memoize II](https://leetcode.com/problems/memoize-ii/) (Hard)
**EN:** Memoize a function with any number of arguments. How do you build the cache key? What goes wrong with object arguments? **বাংলা:** cache key কীভাবে?

### 🔁 Re-solve
- ⬜ R3 Fast Power · ⬜ R9 Subsets · ⬜ L3 Reverse (দুটোই) · ⬜ L9 Remove Nth · ⬜ W6-এর PS5

### 🕵️ Unseen

#### ★ U5 · Folder Size ⬜
🌍 **Real-life:** computer-এর folder — মোট size আর সবচেয়ে বড় file।
**EN:** A file system is a nested object `{ name, size?, children? }` (files have `size`, folders have `children`). Return the total size and the name of the largest single file.
**বাংলা:** আগে লেখো: Pattern ___ কারণ ___।

---

# 📕 WEEK 4 (W8) — Stack · Monotonic Stack · Queue/Deque · Binary Tree (শুরু) · প্রথম Mock

**সপ্তাহের লক্ষ্য:**
1. Stack চেনা: **"শেষে যা এসেছে, সেটাকেই আগে দরকার"** — matching, nested, undo।
2. Monotonic stack: "next greater" ধরনের O(n²)-কে O(n)-এ নামানো।
3. Tree-র DFS আর BFS skeleton হাতে।
4. **জীবনের প্রথম পূর্ণ mock interview** (Day 7)।

---

## Day 22 · W8 D1 · সোম ২৩ নভে — Topic 23: Stack ১ — Matching · Design ★ ⬜

**Interview-এ যেভাবে আসে:** bracket মেলানো, HTML tag বৈধ কিনা, undo/redo, browser back, "min stack" design।

**🧠 এই topic-এ কীভাবে ভাবব:**
- চেনার প্রশ্ন: *"এখন যা দেখছি, সেটা কি **সবচেয়ে সাম্প্রতিক অসম্পূর্ণ** জিনিসের সাথে মিলবে?"* → Stack।
- JS-এ: `push`, `pop`, peek = `stack[stack.length - 1]` বা `stack.at(-1)`।
- closing → opening-এর map: `{ ")": "(", "]": "[", "}": "{" }`।
- O(1)-এ min চাই? → প্রতিটা অবস্থায় "এখন পর্যন্ত min" আলাদা stack-এ।

**Skeleton drill:** 3.12 — ২ বার।

### 📘 Concept phases + ছোট problem

**Phase 23.1 — LIFO** ⬜
- **P23.1 · Undo** 🟢 ⬜ — 🌍 text editor-এর Ctrl+Z। **EN:** Type `"a"`, `"b"`, `"c"` (push), undo twice (pop). What's left? → `["a"]`

**Phase 23.2 — Matching চিন্তা** ⬜
- **P23.2 · Trace Brackets** 🟢 ⬜ — **EN:** Trace the stack for `"([])"` and `"(]"`. Where does the second fail?

**Phase 23.3 — পাশাপাশি বাতিল** ⬜
- **P23.3** 🟢 ⬜ — 🌍 Candy Crush — পাশাপাশি দুটো একই হলে উড়ে যায়। **EN:** Trace a stack on `"abba"` removing equal neighbors. → `""`

### ★ মূল problem

#### ★ ST1 · 20. Valid Parentheses 🟢 Easy ⬜
🔗 [LC 20](https://leetcode.com/problems/valid-parentheses/) (হুবহু)
🌍 **Real-life:** code editor বলে দেয় কোন bracket বন্ধ হয়নি।

**EN:** Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid. An input string is valid if: open brackets must be closed by the same type of brackets; open brackets must be closed in the correct order; every close bracket has a corresponding open bracket of the same type.
```
Example 1: Input: s = "()"       Output: true
Example 2: Input: s = "()[]{}"   Output: true
Example 3: Input: s = "(]"       Output: false
Example 4: Input: s = "([])"     Output: true
```
**Function:** `var isValid = function (s) {}`

**বাংলা:** bracket-গুলো ঠিকঠাক খোলা-বন্ধ হয়েছে কি? শুধু `)` বা শুধু `(`? খালি string?
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ ST2 · 155. Min Stack 🟡 Medium ⬜
🔗 [LC 155](https://leetcode.com/problems/min-stack/) (হুবহু)
🌍 **Real-life:** দামের stack — যেকোনো মুহূর্তে "এখন সবচেয়ে সস্তা কোনটা" তাৎক্ষণিক।

**EN:** Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement `MinStack`: `push(val)`, `pop()`, `top()`, `getMin()`. You must implement a solution with O(1) time complexity for each function.
```
Example: push(-2), push(0), push(-3), getMin() → -3, pop(), top() → 0, getMin() → -2
```
**বাংলা:** সব কাজ O(1), getMin সহ।
**🧠 ভাবনা:** pop করলে min বদলাতে পারে — আগের min কোথায় পাব?
**⏱️ লক্ষ্য:** প্রতিটা O(1) · Space O(n)

#### ★ ST3 · 1047. Remove All Adjacent Duplicates In String 🟢 Easy ⬜
🔗 [LC 1047](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) (হুবহু)
🌍 **Real-life:** Candy Crush (P23.3)।

**EN:** You are given a string `s` consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them. We repeatedly make duplicate removals on `s` until we no longer can. Return the final string.
```
Example 1: Input: s = "abbaca"   Output: "ca"
Explanation: remove "bb" → "aaca", then remove "aa" → "ca".
Example 2: Input: s = "azxxzy"   Output: "ay"
```
**Function:** `var removeDuplicates = function (s) {}`
**বাংলা:** পাশাপাশি একই অক্ষর বারবার মুছে শেষে কী থাকে।
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ○ ST4 · 1472. Design Browser History 🟡 ⬜
🔗 [LC 1472](https://leetcode.com/problems/design-browser-history/) (হুবহু)
🌍 browser-এর back/forward। **EN:** `visit(url)`, `back(steps)`, `forward(steps)`. **বাংলা:** দুটো stack দিয়ে।

**বলো:** *"Every closing bracket must match the most recent unmatched opening bracket, which is exactly what a stack gives me."*

---

## Day 23 · W8 D2 · মঙ্গল ২৪ নভে — Topic 23: Stack ২ — Expression Processing ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **RPN:** সংখ্যা → push; operator → দুটো pop, হিসাব, push। **pop-এর ক্রম:** `b` আগে বের হয়, তারপর `a` → `a - b`।
- integer division: `Math.trunc(a / b)`।
- **Nested decode** `"3[a2[c]]"`: `[`-এ (আগের string, count) stack-এ রাখো; `]`-এ বের করে জোড়া।

### 📘 Concept phases + ছোট problem

**Phase 23.4 — RPN হাতে** ⬜
- **P23.4** 🟢 ⬜ — 🌍 পুরনো HP calculator। **EN:** Evaluate `["3","4","+","2","*"]` by hand with a stack. → `14`

**Phase 23.5 — pop-এর ক্রম** ⬜
- **P23.5** 🟢 ⬜ — **EN:** `["10","3","-"]` → `7`, not `-7`. Which popped value is `a`, which is `b`?

**Phase 23.6 — Nested-এ state রাখা** ⬜
- **P23.6** 🟢 ⬜ — **EN:** For `"2[ab]"`, what goes on the stack at `[`, and what happens at `]`? → `"abab"`

### ★ মূল problem

#### ★ ST5 · 150. Evaluate Reverse Polish Notation 🟡 Medium ⬜
🔗 [LC 150](https://leetcode.com/problems/evaluate-reverse-polish-notation/) (হুবহু)
🌍 **Real-life:** calculator app ভেতরে এভাবেই হিসাব করে।

**EN:** You are given an array of strings `tokens` that represents an arithmetic expression in Reverse Polish Notation. Evaluate the expression and return an integer. Valid operators are `'+'`, `'-'`, `'*'`, and `'/'`. Division between two integers always truncates toward zero.
```
Example 1: Input: tokens = ["2","1","+","3","*"]    Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2: Input: tokens = ["4","13","5","/","+"]   Output: 6
Explanation: (4 + (13 / 5)) = 6
```
**Function:** `var evalRPN = function (tokens) {}`
**বাংলা:** postfix expression-এর মান।
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ ST6 · 394. Decode String 🟡 Medium ⬜
🔗 [LC 394](https://leetcode.com/problems/decode-string/) (হুবহু)
🌍 **Real-life:** compressed text খোলা।

**EN:** Given an encoded string, return its decoded string. The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times.
```
Example 1: Input: s = "3[a]2[bc]"       Output: "aaabcbc"
Example 2: Input: s = "3[a2[c]]"        Output: "accaccacc"
Example 3: Input: s = "2[abc]3[cd]ef"   Output: "abcabccdcdcdef"
```
**Function:** `var decodeString = function (s) {}`

**বাংলা:** `k[...]` মানে ভেতরেরটা k বার। একাধিক digit-এর সংখ্যা (`"12[a]"`)?
**🧠 ভাবনা:** ৪ ধরনের অক্ষর — digit, `[`, `]`, letter — প্রতিটায় কী করব, আগে লেখো।
**⏱️ লক্ষ্য:** Time O(output) · Space O(output)

#### ○ ST7 · 71. Simplify Path 🟡 ⬜
🔗 [LC 71](https://leetcode.com/problems/simplify-path/) (হুবহু)
🌍 terminal-এ `cd ../..`। **EN:** `"/home//foo/"` → `"/home/foo"`; `"/home/user/Documents/../Pictures"` → `"/home/user/Pictures"`; `"/../"` → `"/"`. **বাংলা:** `..` = pop।

#### ○ ST8 · 735. Asteroid Collision 🟡 ⬜
🔗 [LC 735](https://leetcode.com/problems/asteroid-collision/) (হুবহু)
🌍 মহাকাশে পাথরের ধাক্কা। **EN:** `[5,10,-5]` → `[5,10]`; `[8,-8]` → `[]`; `[10,2,-5]` → `[10]`. **বাংলা:** ডানমুখী stack-এ, বাঁমুখী এলে ধাক্কা।

**বলো:** *"When I see an opening bracket, I push the current string and repeat count onto the stack and start fresh. On a closing bracket, I pop them and repeat the inner string."*

---

## Day 24 · W8 D3 · বুধ ২৫ নভে — Topic 23: Monotonic Stack ★★ ⬜

**Interview-এ যেভাবে আসে:** "প্রতিটা দিনের জন্য — আরো গরম দিন আসতে কত দিন?", "পরের বড় দাম", stock span।

**🧠 এই topic-এ কীভাবে ভাবব:**
- brute force: প্রতিটার জন্য ডানে খোঁজা → O(n²)।
- চিন্তা: যাদের উত্তর **এখনো পাইনি**, তারা stack-এ **অপেক্ষা** করে; নতুন element এলে যাদের সে "ছাড়িয়ে যায়", তাদের উত্তর পেল → pop।
- stack-এ **index** রাখো (দূরত্বও বের করা যায়)।
- প্রতিটা element একবার push, একবার pop → O(n)।

**Skeleton drill:** 3.13 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 23.7 — অপেক্ষার লাইন** ⬜
- **P23.7 · Taller Person** 🟢 ⬜ — 🌍 লাইনে প্রত্যেকে জানতে চায় — সামনে প্রথম কে আমার চেয়ে লম্বা? **EN:** For heights `[2, 1, 3]`, the next taller for each. → `[3, 3, -1]`. Trace the stack.

**Phase 23.8 — Index রাখলে দূরত্ব** ⬜
- **P23.8** 🟢 ⬜ — **EN:** Same as P23.7 but return distance in positions. → `[2, 1, 0]`

### ★ মূল problem

#### ★ ST9 · 739. Daily Temperatures 🟡 Medium ⬜
🔗 [LC 739](https://leetcode.com/problems/daily-temperatures/) (হুবহু)
🌍 **Real-life:** weather app — "আর কত দিন পর গরম পড়বে?"

**EN:** Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.
```
Example 1: Input: temperatures = [73,74,75,71,69,72,76,73]   Output: [1,1,4,2,1,1,0,0]
Example 2: Input: temperatures = [30,40,50,60]               Output: [1,1,1,0]
Example 3: Input: temperatures = [30,60,90]                  Output: [1,1,0]
```
**Constraints:** `1 <= temperatures.length <= 10^5`
**Function:** `var dailyTemperatures = function (temperatures) {}`

**বাংলা:** প্রতিটা দিনের জন্য — আরো গরম দিন আসতে কত দিন। brute force আগে, তারপর monotonic stack। Example 1-এ stack-এর অবস্থা টেবিলে।
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ ST10 · 496. Next Greater Element I 🟢 Easy ⬜
🔗 [LC 496](https://leetcode.com/problems/next-greater-element-i/) (হুবহু)
🌍 **Real-life:** প্রতিটা শেয়ারের জন্য — পরের কোন দিনে প্রথম বেশি দাম।

**EN:** The next greater element of some element `x` in an array is the first greater element that is to the right of `x`. You are given two distinct arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`. For each `nums1[i]`, find the next greater element of that value in `nums2`, or `-1` if none.
```
Example 1: Input: nums1 = [4,1,2], nums2 = [1,3,4,2]   Output: [-1,3,-1]
Example 2: Input: nums1 = [2,4], nums2 = [1,2,3,4]     Output: [3,-1]
```
**Function:** `var nextGreaterElement = function (nums1, nums2) {}`
**বাংলা:** monotonic stack + Map (value → next greater)।
**⏱️ লক্ষ্য:** Time O(n + m) · Space O(n)

#### ○ ST11 · 901. Online Stock Span 🟡 ⬜
🔗 [LC 901](https://leetcode.com/problems/online-stock-span/) (হুবহু)
**EN:** For each new price, return how many consecutive days (including today) the price was ≤ today's. `[100,80,60,70,60,75,85]` → `[1,1,1,2,1,4,6]`. **বাংলা:** stack-এ (দাম, span)।

- ⏳ [84 Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) → January

**বলো:** *"I keep a stack of indices still waiting for a warmer day. When a warmer temperature arrives, I pop every waiting day it beats and record the distance. Each index is pushed and popped once, so it's O(n)."*

### 🚪 Gate — Topic 23 (Stack + Monotonic) ⬜

---

## Day 25 · W8 D4 · বৃহস্পতি ২৬ নভে — Topic 24: Queue · Deque · Monotonic Deque ⬜

**Interview-এ যেভাবে আসে:** task queue, rate limiting ("গত ৩০০০ ms-এ কতগুলো request"), BFS-এর ভিত্তি।

**🧠 এই topic-এ কীভাবে ভাবব:**
- FIFO — "যে আগে এল, সে আগে"। JS-এ `shift()` O(n) → **head index**।
- পুরনো জিনিস আর কখনো লাগবে না? → সামনে থেকে বাদ দাও (প্রতিটা একবার ঢোকে, একবার বের হয়)।
- fixed জায়গায় চক্রাকারে? → circular queue: `(i + 1) % capacity`।

### 📘 Concept phases + ছোট problem

**Phase 24.1 — FIFO + head index** ⬜
- **P24.1** 🟢 ⬜ — 🌍 ব্যাংকের token লাইন। **EN:** enqueue 1, 2, 3; dequeue; enqueue 4; dequeue. → `1, 2`, remaining `[3, 4]` (head index)

**Phase 24.2 — মেয়াদোত্তীর্ণ বাদ** ⬜
- **P24.2** 🟢 ⬜ — **EN:** Times `[1, 100, 3001, 3002]` — at time 3002, which are within the last 3000 ms? → range is `[2, 3002]`, so `100, 3001, 3002` count (answer `3`)

**Phase 24.3 — Circular index** ⬜
- **P24.3** 🟢 ⬜ — 🌍 গোল টেবিলে চেয়ার নম্বর। **EN:** With capacity 3, `rear` moves `0 → 1 → 2 → ?` → `0` via `% 3`

### ★ মূল problem

#### ★ Q1 · 933. Number of Recent Calls 🟢 Easy ⬜
🔗 [LC 933](https://leetcode.com/problems/number-of-recent-calls/) (হুবহু)
🌍 **Real-life:** rate limiter — গত ৩ সেকেন্ডে কতগুলো request এসেছে।

**EN:** You have a `RecentCounter` class which counts the number of recent requests within a certain time frame. `ping(t)` adds a new request at time `t` (in milliseconds) and returns the number of requests that have happened in the past 3000 milliseconds (including the new request), i.e. in the inclusive range `[t - 3000, t]`. Each call uses a strictly larger `t`.
```
Example: ping(1) → 1, ping(100) → 2, ping(3001) → 3, ping(3002) → 3
```
**বাংলা:** গত 3000 ms-এ কতগুলো ping।
**⏱️ লক্ষ্য:** amortized O(1) প্রতি ping

#### ★ Q2 · 232. Implement Queue using Stacks 🟢 Easy ⬜
🔗 [LC 232](https://leetcode.com/problems/implement-queue-using-stacks/) (হুবহু)
🌍 **Real-life:** দুটো থালার স্তূপ দিয়ে লাইন বানানো — চিন্তার ব্যায়াম।
**EN:** Implement a FIFO queue using only two stacks: `push`, `pop`, `peek`, `empty`. Why is it amortized O(1)?
**বাংলা:** দুটো stack দিয়ে queue।

#### ★ Q3 · 622. Design Circular Queue 🟡 Medium ⬜
🔗 [LC 622](https://leetcode.com/problems/design-circular-queue/) (হুবহু)
🌍 **Real-life:** গোল টেবিলে সীমিত চেয়ার।
**EN:** Implement `MyCircularQueue(k)` with `enQueue`, `deQueue`, `Front`, `Rear`, `isEmpty`, `isFull`, using a fixed array.
**বাংলা:** fixed array + `% capacity`।

#### ○ Q4 · 239. Sliding Window Maximum 🔴 Hard ⬜
🔗 [LC 239](https://leetcode.com/problems/sliding-window-maximum/) (হুবহু)
**EN:** `[1,3,-1,-3,5,3,6,7], k = 3` → `[3,3,5,5,6,7]`. **বাংলা:** monotonic deque — সামনে থেকে মেয়াদোত্তীর্ণ index বাদ, পেছন থেকে ছোটগুলো বাদ।

#### ○ Q5 · 225. Implement Stack using Queues 🟢 ⬜
🔗 [LC 225](https://leetcode.com/problems/implement-stack-using-queues/) (হুবহু)

**বলো:** *"Requests older than 3000 milliseconds can never count again, so I remove them from the front of the queue. Each request enters and leaves once."*

---

## Day 26 · W8 D5 · শুক্র ২৭ নভে — Topic 25: Binary Tree ১ — Traversal · DFS ★ ⬜

**Interview-এ যেভাবে আসে:** প্রায় প্রতিটা mid-level interview-এ। real life: DOM, folder, org chart, comment thread।
তোমার `codeAbc/Tree/BinaryTree.js` খুলবে না।

**🧠 এই topic-এ কীভাবে ভাবব — দুই ধরনের চিন্তা:**
- **নিচ থেকে উত্তর আনা (bottom-up):** "বাম আর ডান subtree-র উত্তর জানলে **আমার** উত্তর কী?" → max depth।
- **উপর থেকে তথ্য পাঠানো (top-down):** parameter দিয়ে (এখন পর্যন্ত depth, path sum)।
- base case প্রায় সবসময়: `if (!node) return ...`।

**Skeleton drill:** 3.17 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 25.1 — শব্দগুলো** ⬜
- **P25.1** 🟢 ⬜ — 🌍 পারিবারিক গাছ। **EN:** For `[3,9,20,null,null,15,7]`, name the root, leaves, and the depth of `15`. → root 3, leaves 9/15/7, depth 2

**Phase 25.2 — Array থেকে tree helper** ⬜
- **P25.2** 🟢 ⬜ — **EN:** Draw the tree from level-order array `[1,2,3,null,4]`.

**Phase 25.3 — তিন ক্রম** ⬜
- **P25.3** 🟢 ⬜ — **EN:** Write preorder, inorder, postorder of `[1,2,3]` (root 1, left 2, right 3). → `1 2 3`, `2 1 3`, `2 3 1`

**Phase 25.4 — Bottom-up বনাম top-down** ⬜
- **P25.4** 🟢 ⬜ — **EN:** Count nodes bottom-up: `count(node) = 1 + count(left) + count(right)`. Then print each node's depth top-down.

### ★ মূল problem

#### ★ T1 · TreeNode + buildTree + 3 Traversals 🟡 ⬜
🔗 [LC 144 Preorder](https://leetcode.com/problems/binary-tree-preorder-traversal/) · [LC 94 Inorder](https://leetcode.com/problems/binary-tree-inorder-traversal/) · [LC 145 Postorder](https://leetcode.com/problems/binary-tree-postorder-traversal/) (হুবহু)
🌍 **Real-life:** folder tree ঘুরে সব file দেখা — কোন ক্রমে?
**EN:** Write `TreeNode`, `buildTree(levelArray)`, and recursive preorder/inorder/postorder. `root = [1,null,2,3]` → preorder `[1,2,3]`, inorder `[1,3,2]`, postorder `[3,2,1]`.
**বাংলা:** helper + তিনটা traversal।
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

#### ★ T2 · Iterative Preorder and Inorder 🟡 ⬜
🔗 একই LC 144 / 94 — "Follow up: Recursive solution is trivial, could you do it iteratively?"
**EN:** Do preorder and inorder with an explicit stack. **বাংলা:** recursion-এর call stack-কে নিজের stack দিয়ে বদলাও।

#### ★ T3 · 104. Maximum Depth of Binary Tree 🟢 Easy ⬜
🔗 [LC 104](https://leetcode.com/problems/maximum-depth-of-binary-tree/) (হুবহু)
🌍 **Real-life:** company org chart-এ সবচেয়ে বেশি কয় স্তর।

**EN:** Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
```
Example 1: Input: root = [3,9,20,null,null,15,7]   Output: 3
Example 2: Input: root = [1,null,2]                Output: 2
```
**Function:** `var maxDepth = function (root) {}`
**বাংলা:** bottom-up আর top-down দুইভাবে।
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

#### ★ T4 · 100. Same Tree 🟢 Easy ⬜
🔗 [LC 100](https://leetcode.com/problems/same-tree/) (হুবহু)
🌍 **Real-life:** দুটো folder structure হুবহু একই কিনা।

**EN:** Given the roots of two binary trees `p` and `q`, check if they are the same: structurally identical with the same node values.
```
Example 1: Input: p = [1,2,3], q = [1,2,3]        Output: true
Example 2: Input: p = [1,2], q = [1,null,2]       Output: false
```
**Function:** `var isSameTree = function (p, q) {}`
**বাংলা:** দুটো tree একসাথে recursion।
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

**বলো:** *"The depth of a tree is one plus the larger depth of its two subtrees. An empty tree has depth zero — that's my base case."*

---

## Day 27 · W8 D6 · শনি ২৮ নভে — Topic 25: Binary Tree ২ — Invert · Symmetric · BFS ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **দুটো tree একসাথে** recursion (same / symmetric / mirror)।
- **"level", "closest", "minimum depth"** → BFS; **"path", "subtree", "height"** → DFS।
- BFS level by level: queue + **`levelSize`** — একটা level পুরো শেষ করে পরের level।

**Skeleton drill:** 3.18 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 25.5 — আয়না** ⬜
- **P25.5** 🟢 ⬜ — 🌍 আয়নায় নিজের ছবি — ডান হাত বাঁ দিকে। **EN:** Draw the mirror of `[1,2,3,4]`. → level order `[1,3,2,null,null,null,4]` (2-এর নিচের 4 এখন ডানে)।

**Phase 25.6 — Level ধরে queue** ⬜
- **P25.6** 🟢 ⬜ — 🌍 বহুতল ভবন — এক তলার সবাইকে শেষ করে তারপর পরের তলা। **EN:** For `[3,9,20,null,null,15,7]`, write the queue contents at the start of each level. → `[3]`, `[9,20]`, `[15,7]`

### ★ মূল problem

#### ★ T5 · 226. Invert Binary Tree 🟢 Easy ⬜
🔗 [LC 226](https://leetcode.com/problems/invert-binary-tree/) (হুবহু)
🌍 **Real-life:** ছবির mirror effect।

**EN:** Given the `root` of a binary tree, invert the tree, and return its root.
```
Example 1: Input: root = [4,2,7,1,3,6,9]   Output: [4,7,2,9,6,3,1]
Example 2: Input: root = [2,1,3]           Output: [2,3,1]
```
**Function:** `var invertTree = function (root) {}`
**বাংলা:** প্রতিটা node-এর বাম আর ডান অদলবদল — recursive + BFS।
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

#### ★ T6 · 101. Symmetric Tree 🟢 Easy ⬜
🔗 [LC 101](https://leetcode.com/problems/symmetric-tree/) (হুবহু)
🌍 **Real-life:** প্রজাপতির ডানা — দুই দিক একই?

**EN:** Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
```
Example 1: Input: root = [1,2,2,3,4,4,3]          Output: true
Example 2: Input: root = [1,2,2,null,3,null,3]    Output: false
```
**Function:** `var isSymmetric = function (root) {}`
**বাংলা:** helper `isMirror(a, b)` — কোন দুটো node-কে তুলনা করতে হবে?
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

#### ★ T7 · 102. Binary Tree Level Order Traversal 🟡 Medium ⬜
🔗 [LC 102](https://leetcode.com/problems/binary-tree-level-order-traversal/) (হুবহু)
🌍 **Real-life:** org chart — CEO, তারপর সব manager, তারপর সব team lead।

**EN:** Given the `root` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).
```
Example 1: Input: root = [3,9,20,null,null,15,7]   Output: [[3],[9,20],[15,7]]
Example 2: Input: root = [1]                       Output: [[1]]
Example 3: Input: root = []                        Output: []
```
**Function:** `var levelOrder = function (root) {}`
**বাংলা:** level ধরে ধরে node-এর মান।
**⏱️ লক্ষ্য:** Time O(n) · Space O(w) — w = সবচেয়ে চওড়া level

#### ○ T8 · 111. Minimum Depth of Binary Tree 🟢 ⬜
🔗 [LC 111](https://leetcode.com/problems/minimum-depth-of-binary-tree/) (হুবহু)
**EN:** `[3,9,20,null,null,15,7]` → `2`; `[2,null,3,null,4,null,5,null,6]` → `5`. **বাংলা:** DFS-এ ফাঁদ কী (একদিকে null)? BFS কেন স্বাভাবিক?

**বলো:** *"I process the tree level by level with a queue. I record the queue's size at the start of each level, so I know exactly which nodes belong to that level."*

---

## Day 28 · W8 D7 · রবি ২৯ নভে — LRU Cache · প্রথম Mock Interview ★ · November মূল্যায়ন ⬜

### 🛠️ Practical JS ৭

#### ★ P18 · 146. LRU Cache 🟡 Medium ⬜
🔗 [LC 146](https://leetcode.com/problems/lru-cache/) (হুবহু)
🌍 **Real-life:** browser cache / phone-এর "recent apps" — জায়গা ভরলে সবচেয়ে পুরনো ব্যবহৃতটা বাদ।

**EN:** Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement `LRUCache(capacity)`, `get(key)` (return the value if it exists, otherwise `-1`), and `put(key, value)` (update or insert; if the number of keys exceeds the capacity, evict the least recently used key). `get` and `put` must each run in O(1) average time.
```
Example: LRUCache(2); put(1,1); put(2,2); get(1) → 1; put(3,3) (evicts key 2); get(2) → -1;
         put(4,4) (evicts key 1); get(1) → -1; get(3) → 3; get(4) → 4
```
**বাংলা:** O(1) get/put; capacity ছাড়ালে সবচেয়ে পুরনো বাদ। (ক) **JS Map-এর insertion order** দিয়ে (delete + set = "নতুন") (খ) **Map + Doubly Linked List** (interviewer যদি বলে Map-এর order-এর উপর নির্ভর কোরো না)।
**🧠 ভাবনা (ভাঙতে শেখো):** দুটো প্রশ্ন আলাদা — "key দিয়ে দ্রুত খুঁজব কীভাবে?" (Map) আর "কে সবচেয়ে পুরনো, দ্রুত জানব কীভাবে?" (ক্রম রাখা list)।

### 🎤 প্রথম Mock Interview (৪৫ মিনিট)
- আমাকে লিখবে **`interview`** — November-এর topic থেকে অপরিচিত problem, pattern নাম ছাড়া।
- আমি hint দেব না যতক্ষণ না চাও; শুধু interviewer-এর মতো follow-up।
- পুরো সময় **English-এ জোরে চিন্তা** (`05-interview-communication.md`)।
- শেষে feedback: understanding, approach, code, testing, communication — প্রতিটা ১–৫।

### 📊 November মূল্যায়ন (`TRACKER.md`)
1. ★ কতগুলো শেষ, কতগুলো Day +7 re-solve পাস?
2. সবচেয়ে কঠিন ৩টা pattern?
3. Mock-এ কোন অংশে সবচেয়ে দুর্বল (clarify / approach / code / test / বলা)?
4. অক্টোবরের "Two Sum" recording আবার করো — তুলনা।
5. পিছিয়ে থাকলে জানাও — December-এর plan সমন্বয়।

### ✅ মাস শেষে নিজেকে যাচাই
- ⬜ Koko, 3Sum, Longest Substring Without Repeating, Subarray Sum Equals K, Daily Temperatures — ফাঁকা editor-এ ২৫ মিনিটে
- ⬜ Linked list reverse (দুইভাবে) আর tree level order — ১০ মিনিটে
- ⬜ Event-loop output প্রশ্নে আত্মবিশ্বাসী
- ⬜ Mock-এ চুপ না থেকে পুরো সময় জোরে চিন্তা করেছি

---

⬅️ [october-plan.md](../month-1-october/october-plan.md) · ➡️ [december-plan.md](../month-3-december/december-plan.md)
