# January থেকে — চলমান Mastery System

> ৩ মাসে ভিত্তি তৈরি হলো। এখন লক্ষ্য: **medium নিয়মিত, hard-এ আত্মবিশ্বাস, interview-এর জন্য সবসময় প্রস্তুত।**
> সময়: প্রতিদিন ১–১.৫ ঘণ্টা, যতদিন JavaScript নিয়ে কাজ করবে।

---

## ১. দৈনিক রুটিন (১–১.৫ ঘণ্টা)

| সময় | কাজ |
|---|---|
| ১০ মিনিট | **Re-solve:** পুরনো একটা ★ problem ফাঁকা editor থেকে (TRACKER-এর তালিকা থেকে) |
| ৪৫–৬০ মিনিট | **নতুন problem:** নিচের সাপ্তাহিক চক্র অনুযায়ী |
| ১০ মিনিট | **তুলনা + বলা:** বিকল্প উপায়ের টেবিল, English-এ ৬০ সেকেন্ড |
| ৫ মিনিট | **Reflection + tracker** |

## ২. সাপ্তাহিক চক্র

| দিন | ধরন | উদ্দেশ্য |
|---|---|---|
| সোম | **Known pattern** — চেনা pattern-এর নতুন problem | skeleton পাকা করা |
| মঙ্গল | **Slight variation** — চেনা problem-এর মোচড় | শব্দ না, গঠন দেখা |
| বুধ | **Unknown pattern** — নাম ছাড়া (`unseen`) | recognition > memory |
| বৃহস্পতি | **Mixed** — দুটো pattern একসাথে | combination চেনা |
| শুক্র | **Practical JS / design-style** | full-stack round |
| শনি | **Timed** — ৪৫ মিনিট, hint ছাড়া | চাপের মধ্যে চিন্তা |
| রবি | **Mock interview** (আমার সাথে) বা সপ্তাহের review | পুরো interview অভিজ্ঞতা |

## ৩. Progression

```
Known pattern → Slight variation → Unknown pattern → Mixed pattern → Timed → Mock → Real interview
Easy → Medium → Medium+ → Hard
```

---

## ৪. January–February: বাকি অংশ (○ আর ⏳)

**তিন মাসের ○ Bonus problem** — প্রতিটা week file-এ ○ চিহ্নিত — এগুলো আগে, topic ক্রমে।

**⏳ Later তালিকা (hard / গভীর):**

| Topic | Problems |
|---|---|
| Arrays | First Missing Positive · Trapping Rain Water |
| Sorting | Count Inversions |
| Binary Search | Split Array Largest Sum · Median of Two Sorted Arrays |
| Sliding Window | Minimum Window Substring · Sliding Window Maximum |
| Prefix Sum | Range Addition (difference array) |
| Linked List | Copy List with Random Pointer · Reverse Nodes in k-Group |
| Stack | Largest Rectangle in Histogram |
| Tree | Serialize/Deserialize · Binary Tree Maximum Path Sum |
| Heap | Find Median from Data Stream (two heaps) |
| Intervals | Employee Free Time |
| Graph | Alien Dictionary · Word Ladder · Bellman-Ford · Floyd-Warshall |
| Backtracking | N-Queens · Sudoku Solver |
| Greedy | Huffman Coding |
| DP | LIS O(n log n) · Longest Palindromic Subsequence · Interleaving String · Interval DP (Burst Balloons) · Edit Distance (যদি ○-তে বাদ থাকে) |
| Bit | Reverse Bits |
| Trie | Word Search II |

## ৫. March–April: Advanced Data Structures (Topic 42)
- **Segment Tree** — range query + point update
- **Fenwick Tree (BIT)** — prefix sum + update, O(log n)
- **Ordered set** — JS-এ নেই: sorted array + binary search, বা balanced ধারণা
- **Monotonic Queue** — গভীরে
- **Two heaps / indexed heap**

Remote full-stack interview-এ এগুলো কম আসে — **ধারণা + সাধারণ ব্যবহার** যথেষ্ট; competitive-programming স্তরের implementation অগ্রাধিকার না।

## ৬. JS Master Topics (Topic 46) — পাশাপাশি, শুক্রবারে
- iterator / generator (`Symbol.iterator`, `yield`, lazy sequence)
- Proxy / Reflect
- Symbol, WeakMap / WeakSet
- memory, garbage collection, memory leak (closure, listener)
- V8-এর মৌলিক ধারণা (hidden class, inline cache — শুধু ধারণা)
- advanced regex
- Intl / Date

## ৭. Pattern Combinations (Topic 43) — বৃহস্পতিবারে
প্রতিটা combination-এর অন্তত ২টা problem:
HashMap + Prefix Sum · HashMap + Sliding Window · Sorting + Two Pointers · Sorting + Greedy · Binary Search + Greedy · Heap + HashMap · Heap + Sorting · Stack + Array · Monotonic Stack + Array · Tree + DFS · Tree + BFS · Graph + DFS · Graph + BFS · Graph + Topological Sort · Graph + Union Find · Recursion + Backtracking · DP + HashMap · DP + Binary Search

---

## ৮. কত problem, কোথায় পৌঁছাবে

| সময় | মোট problem (গভীরভাবে) | কী পারবে |
|---|---|---|
| ডিসেম্বর শেষ | ২২২ ★ (warm-up, exercise, Practical JS সহ) | ফাঁকা editor-এ আর আটকাবে না; easy প্রায় সব; medium-এর অর্ধেকের বেশি ৪৫ মিনিটে |
| জুন | ~২৫০ | medium নিয়মিত; কিছু hard; mixed pattern চেনা |
| ১ বছর | ~৪০০ | medium-hard আরামে; top remote company-র জন্য প্রস্তুত |
| ২ বছর | চলতে থাকবে | যেকোনো problem-এ "Okay. Let's break this down." |

**মনে রাখো:** problem-এর সংখ্যা লক্ষ্য না। লক্ষ্য হলো — নতুন problem দেখে **"আমি জানি এখন কী করতে হবে"** অনুভূতি।
