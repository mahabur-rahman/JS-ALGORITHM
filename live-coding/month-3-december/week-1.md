# December · Week 1 (সামগ্রিক W9) — ৩০ নভেম্বর থেকে ৬ ডিসেম্বর
## Binary Tree (শেষ) · BST · Heap · Intervals

**সপ্তাহের লক্ষ্য:**
1. Tree-তে **"recursion কী ফেরত দেবে" আর "global-এ কী update করব"** আলাদা করতে পারা (diameter, LCA)।
2. BST-র inorder = sorted — এই একটা সত্য দিয়ে অনেক problem।
3. **MinHeap নিজে লেখা** (JS-এ নেই) — আর "Top K" দেখলেই heap।
4. Intervals: sort by start + scan।

---

## Day 1 — সোম, ৩০ নভেম্বর — Binary Tree ৩: View · Path ★

**শিখবে:**
- **BFS-এর রূপ:** প্রতিটা level-এর শেষ node = right side view; level-এর দিক পাল্টানো = zigzag।
- **Top-down path:** parameter-এ বাকি যোগফল পাঠানো; **leaf-এ** check (শুধু null-এ না — কেন?)।
- **Path list তৈরি:** backtracking-এর মতো `path.push` → recurse → `path.pop`।

**Problems:**
- [ ] ★ **T9 Binary Tree Right Side View** — (ক) BFS (খ) DFS (ডান আগে, depth দিয়ে)। `C`
- [ ] ★ **T10 Path Sum** — root থেকে leaf পর্যন্ত যোগফল = target? `B`
- [ ] ○ **T11 Path Sum II** — সব path ফেরত দাও। `D`
- [ ] ○ **T12 Zigzag Level Order** `C`

**বলো:** *"I pass the remaining target down the tree. At a leaf, I check whether the remaining value equals the leaf's value."*

---

## Day 2 — মঙ্গল, ১ ডিসেম্বর — Binary Tree ৪: Diameter · LCA ★★

**শিখবে:**
- **ফেরত দেওয়া মান ≠ চাওয়া উত্তর:** diameter-এ recursion **height** ফেরত দেয়, কিন্তু প্রতিটা node-এ `leftHeight + rightHeight` দিয়ে **বাইরের variable** update করে।
- **LCA চিন্তা:** "এই subtree-তে p বা q পেলে সেটা ফেরত দাও; দুই দিক থেকেই কিছু এলে আমিই LCA।"
- **Balanced:** height ফেরত, ভারসাম্যহীন হলে -1 (sentinel)।

**Problems:**
- [ ] ★ **T13 Diameter of Binary Tree** — diameter root দিয়ে না-ও যেতে পারে — উদাহরণ আঁকো। `C`
- [ ] ★ **T14 Lowest Common Ancestor of a Binary Tree** `D`
- [ ] ○ **T15 Balanced Binary Tree** — O(n²) সহজ উপায় আগে, তারপর O(n)। `C`
- [ ] ○ **T16 Count Good Nodes** `C`
- [ ] ⏳ Serialize/Deserialize · Binary Tree Maximum Path Sum → January

**বলো:** *"My helper returns the height of each subtree. While computing it, I also update a global maximum with left height plus right height, because the longest path through this node uses both sides."*

---

## Day 3 — বুধ, ২ ডিসেম্বর — Binary Search Tree ★

**Interview-এ যেভাবে আসে:** "BST বৈধ কিনা", "kth smallest", "BST-তে insert/delete" — আর ফাঁদ: শুধু parent-এর সাথে তুলনা করা।

**শিখবে:**
- **নিয়ম:** বাম subtree-র **সব** < node < ডান subtree-র **সব** (শুধু সরাসরি সন্তান না)।
- search/insert — O(h); balanced হলে O(log n), skewed হলে O(n)।
- **Inorder = sorted** → kth smallest, validate।
- **Validate:** (min, max) সীমা উপর থেকে পাঠাও।
- **Delete-এর তিন case:** leaf · একটা সন্তান · দুটো সন্তান (inorder successor)।
- **BST-তে LCA:** দুটোই ছোট → বামে; দুটোই বড় → ডানে; নইলে আমিই।

**Problems:**
- [ ] ★ **BST1 Search in a BST** + **Insert into a BST** `A`
- [ ] ★ **BST2 Validate BST** — ভুল উপায়টা (শুধু সন্তানের সাথে তুলনা) আগে লিখে এমন input বানাও যেটায় ভুল দেয়। তারপর ঠিক উপায়। `D`
- [ ] ★ **BST3 Kth Smallest Element in a BST** — inorder, k-তে থামো। `C`
- [ ] ★ **BST4 LCA of a BST** `B`
- [ ] ○ **BST5 Convert Sorted Array to BST** `B`
- [ ] ○ **BST6 Delete Node in a BST** `D`

**বলো:** *"Each node must be within a valid range, not just greater than its parent. I pass down a lower and upper bound as I recurse."*

---

## Day 4 — বৃহস্পতি, ৩ ডিসেম্বর — Heap ১: MinHeap নিজে লেখা ★★

**কেন জরুরি:** JS-এ priority queue নেই। Top K, merge K list, Dijkstra, scheduling — সব জায়গায় লাগে। Interview-এ "assume a heap exists" বলা যায় কিনা জিজ্ঞেস করবে; না বললে লিখতে হবে — **১০ মিনিটে লিখতে পারা লক্ষ্য।**

**শিখবে:**
- **Array-তে tree:** index i-এর parent `Math.floor((i - 1) / 2)`, সন্তান `2i + 1`, `2i + 2`।
- **push:** শেষে রাখো → **bubble up** (parent-এর চেয়ে ছোট হলে swap)।
- **pop:** root বের করো → শেষেরটা root-এ → **bubble down** (ছোট সন্তানের সাথে swap)।
- O(log n) push/pop, O(1) peek; heapify (array থেকে) O(n)।
- **comparator** দিয়ে min/max/object — একই class।
- Heap sort-এর ধারণা।

**Skeleton:** 3.24 interface থেকে শুরু।

**Problems:**
- [ ] ★ **HP1 MinHeap class** — `push`, `pop`, `peek`, `size`; comparator সহ। ১০০টা random সংখ্যা push করে pop করলে sorted আসে কিনা test। `D`
- [ ] ★ **HP2 Last Stone Weight** — max heap (comparator উল্টো)। `B`
- [ ] ○ **HP3** heap দিয়ে heap sort। `C`

**বলো:** *"A heap is a complete binary tree stored in an array. Push adds at the end and bubbles up; pop moves the last element to the root and bubbles down. Both are O(log n)."*

---

## Day 5 — শুক্র, ৪ ডিসেম্বর — Heap ২: Top K · K-way ★

**শিখবে:**
- **Top K largest → size K-এর MIN heap** (সবচেয়ে ছোটটা বের করে দাও যখন K ছাড়ায়) — উল্টো লাগে কেন?
- O(n log k) বনাম sort O(n log n) — k ছোট হলে লাভ।
- **K sorted list merge:** প্রতিটা list-এর মাথা heap-এ।
- **Scheduling:** সবচেয়ে বেশি বাকি কাজটা আগে।

**Problems:**
- [ ] ★ **HP4 Kth Largest Element in an Array** — W4-এ sort দিয়ে করেছিলে; এবার heap। তুলনা। `C`
- [ ] ★ **HP5 Top K Frequent Elements** — W3-এ bucket; এবার heap। তিনটা উপায়ের টেবিল। `D`
- [ ] ★ **HP6 K Closest Points to Origin** `C`
- [ ] ○ **HP7 Merge K Sorted Lists** `E`
- [ ] ○ **HP8 Task Scheduler** `D`
- [ ] ⏳ Find Median from Data Stream (two heaps) → January

**বলো:** *"To keep the k largest elements, I use a min-heap of size k. Its top is the smallest of the k largest, so whenever the heap grows past k, I pop it. That's O(n log k)."*

---

## Day 6 — শনি, ৫ ডিসেম্বর — Intervals ★

**Interview-এ যেভাবে আসে:** calendar/meeting app, booking system, "একসাথে কতগুলো room লাগবে", "খালি সময় খোঁজো" — product company-তে খুব common।

**শিখবে:**
- **প্রথম পদক্ষেপ প্রায় সবসময়:** start দিয়ে sort।
- **Overlap শর্ত:** `a.start <= b.end && b.start <= a.end` (বা sorted হলে `curr.start <= last.end`) — touching (`[1,2]`, `[2,3]`) overlap কিনা — **জিজ্ঞেস করো।**
- **Merge:** শেষ merged-এর end বাড়াও, নইলে নতুন যোগ করো।
- **Meeting rooms II:** start আর end আলাদা sort (sweep line), অথবা end-এর min heap।
- **Non-overlapping:** end দিয়ে sort — greedy (W11-এ আবার)।

**Problems:**
- [ ] ★ **IN1 Merge Intervals** `C`
- [ ] ★ **IN2 Insert Interval** — আগে, overlap, পরে — তিন ভাগ। `D`
- [ ] ★ **IN3 Meeting Rooms** — একজন সব meeting-এ যেতে পারবে? `B`
- [ ] ★ **IN4 Meeting Rooms II** — (ক) sweep (খ) min heap। `D`
- [ ] ○ **IN5 Non-overlapping Intervals** `D`
- [ ] ○ **IN6 Minimum Number of Arrows to Burst Balloons** `D`
- [ ] ⏳ Employee Free Time → January

**বলো:** *"After sorting by start time, overlapping intervals are always next to each other, so one pass is enough to merge them."*

---

## Day 7 — রবি, ৬ ডিসেম্বর — Practical (Multi-part) · Mock ২ · Revision

**Practical JS ৮ — Multi-part problem (product company-র প্রিয় ধরন):**
- [ ] ★ **P19 In-memory Key-Value Store** — ধাপে ধাপে (প্রতিটা ধাপ শেষ করে তবে পরেরটা পড়ো):
  1. `set(key, value)`, `get(key)`, `delete(key)`
  2. `set(key, value, ttlMs)` — সময় পার হলে `get` → `undefined` (lazy expiry)
  3. `count(value)` — কতগুলো key-তে এই value — O(1)
  4. `begin()`, `rollback()`, `commit()` — transaction (nested হতে পারে)

  প্রতিটা ধাপে আগের code কতটা বদলাতে হলো — লক্ষ করো। ভালো ডিজাইন = কম বদল।

**Mock ২ (৪৫ মিনিট):** আমাকে **`interview`** লেখো (tree / heap / interval থেকে)।

**Re-solve:** [ ] T13 Diameter · [ ] T14 LCA · [ ] BST2 Validate · [ ] HP1 MinHeap (১০ মিনিটে) · [ ] IN2 Insert Interval
