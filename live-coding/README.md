# Live Coding Training — October থেকে December 2026

> **লক্ষ্য:** যেকোনো অপরিচিত live-coding problem দেখে মাথা বলবে —
> *"Okay. Let's break this down. I know how to start. Now I know what information I need.
> Now I can write the first line. Let's test it. Let's optimize it. I can solve this."*
>
> **মূল নিয়ম:** answer না জানলেও, **পরের step কী — সেটা সবসময় জানব।**

---

## কীভাবে ব্যবহার করবে

1. **আজ কোন দিন?** নিচের ক্যালেন্ডার থেকে week file খোলো → সেই দিনের অংশ।
2. **Session চালাও** — `00-framework/06-daily-session-template.md` অনুযায়ী (৬০–৯০ মিনিট)।
3. **Code লেখো** — `practice/<month>/week-N/day-N.js`।
4. **আটকে গেলে** — আমাকে (Claude) লেখো: `W2 D3 Valid Palindrome — Hint 2`। একবারে একটা hint।
5. **শেষে** — আমাকে লেখো: `done W2 D3` + কোথায় আটকেছিলে। আমি `TRACKER.md` update করব আর re-solve-এর তারিখ বসাব।

**Solution আগে দেখবে না।** Hint system: `00-framework/02-hints-debug-edgecases.md`।

### চিহ্ন
| চিহ্ন | মানে |
|---|---|
| ★ | Core — ৩ মাসে অবশ্যই |
| ○ | Bonus — সময় পেলে, নইলে January–June |
| ⏳ | Later — ৬ মাস থেকে ১ বছর (hard / কম গুরুত্বপূর্ণ) |
| `A`–`F` | কাঠিন্য: A খুব সহজ → D Medium → F Hard |
| ◆ | Full-stack interview-এ বিশেষভাবে জিজ্ঞেস করা হয় |

---

## Folder গঠন

```
live-coding/
├── README.md                  ← তুমি এখানে
├── TRACKER.md                 ← progress, re-solve তালিকা, মূল্যায়ন (আমি update করব)
├── 00-framework/              ← মাথার operating system — প্রথম সপ্তাহে পড়বে, পরে দরকারমতো
│   ├── 01-master-framework.md      ১৬ ধাপ · Anti-Freeze · Blank Editor · Interview time plan
│   ├── 02-hints-debug-edgecases.md Hint 0–7 · Debug প্রশ্ন · Edge case checklist
│   ├── 03-complexity-guide.md      Time/Space কীভাবে মাপতে হয় · JS built-in খরচ · Constraint
│   ├── 04-patterns-and-skeletons.md Pattern চেনার টেবিল · ২৭টা code skeleton
│   ├── 05-interview-communication.md English বাক্য · common ভুল · ৬০ সেকেন্ডের কাঠামো
│   └── 06-daily-session-template.md প্রতিদিনের session · Reflection · Re-solve নিয়ম
├── month-1-october/           ← README + week-1..4
├── month-2-november/          ← README + week-1..4
├── month-3-december/          ← README + week-1..4 + final-days
├── after-december/            ← January থেকে চলমান system
└── practice/                  ← তোমার code (প্রতিদিন নতুন file)
```

---

## ক্যালেন্ডার

| মাস | সপ্তাহ | তারিখ | Topic |
|---|---|---|---|
| **October** | [Week 1](month-1-october/week-1.md) (W1) | ৫–১১ অক্টোবর | Framework · Variables · Types · Operators · Conditions · Loops · Functions · Numbers & Math · Basic Problem Solving |
| | [Week 2](month-1-october/week-2.md) (W2) | ১২–১৮ অক্টোবর | Big-O · Strings · Arrays ১ |
| | [Week 3](month-1-october/week-3.md) (W3) | ১৯–২৫ অক্টোবর | Arrays ২ · Objects · **Hashing** |
| | [Week 4](month-1-october/week-4.md) (W4) | ২৬ অক্টোবর–১ নভেম্বর | Closure & `this` · Class · Sorting · Month review · debounce/throttle |
| **November** | [Week 1](month-2-november/week-1.md) (W5) | ২–৮ নভেম্বর | Binary Search · Two Pointers · Async ১ |
| | [Week 2](month-2-november/week-2.md) (W6) | ৯–১৫ নভেম্বর | Sliding Window · Prefix Sum · Mixed · Async ২ |
| | [Week 3](month-2-november/week-3.md) (W7) | ১৬–২২ নভেম্বর | Recursion · Linked List · curry/EventEmitter |
| | [Week 4](month-2-november/week-4.md) (W8) | ২৩–২৯ নভেম্বর | Stack · Monotonic Stack · Queue · Tree ১ · LRU · **Mock ১** |
| **December** | [Week 1](month-3-december/week-1.md) (W9) | ৩০ নভেম্বর–৬ ডিসেম্বর | Tree ২ · BST · **Heap** · Intervals · KV store · Mock ২ |
| | [Week 2](month-3-december/week-2.md) (W10) | ৭–১৩ ডিসেম্বর | Matrix · **Graph** · Topological Sort · Rate limiter · Mock ৩ |
| | [Week 3](month-3-december/week-3.md) (W11) | ১৪–২০ ডিসেম্বর | Union Find · Dijkstra · **Backtracking** · Greedy · Mock ৪ |
| | [Week 4](month-3-december/week-4.md) (W12) | ২১–২৭ ডিসেম্বর | Greedy · **Dynamic Programming** · stdin · Mock ৫ |
| | [শেষ ৪ দিন](month-3-december/final-days.md) | ২৮–৩১ ডিসেম্বর | Bit · Trie · Math · **চূড়ান্ত মূল্যায়ন** |
| **January →** | [চলমান system](after-december/README.md) | ১ জানুয়ারি থেকে | ○ Bonus · ⏳ Hard · Advanced DS · JS master · নিয়মিত Mock |

**প্রতি সপ্তাহের Day 7 (রবিবার):** নতুন topic না — re-solve + Practical JS + unseen problem + (W8 থেকে) Mock interview।

---

## সব Topic কোথায় (কিছুই বাদ নেই)

| # | Topic | কোথায় |
|---|---|---|
| 1–8 | Variables · Types · Operators · Conditions · Loops · Functions · Numbers & Math · Basic Problem Solving | W1 D1–D6 |
| 9 | Big-O & Complexity | W2 D1–D2 (তারপর প্রতিটা problem-এ) |
| 10 | Strings (methods, char code, regex, frequency, anagram) | W2 D3–D4 |
| 11 | Arrays (mutating, খরচ, rotate, Kadane, prefix/suffix) | W2 D5 – W3 D2 |
| 12 | Objects | W3 D3 |
| 13 | Hashing — Map & Set | W3 D4–D6 |
| 14 | Scope · Closure · `this` | W4 D1 |
| 15 | Class & OOP · Error handling | W4 D2 |
| 16 | Sorting (bubble → quick, comparator) | W4 D3–D5 |
| 17 | Searching & Binary Search (bounds, rotated, on answer) | W5 D1–D4 |
| 18 | Two Pointers | W5 D5–D6 |
| 19 | Sliding Window | W6 D1–D3 |
| 20 | Prefix Sum (+ HashMap) | W6 D4–D5 |
| 21 | Recursion | W7 D1–D3 |
| 22 | Linked List (singly, doubly) | W7 D4–D6 |
| 23 | Stack · Monotonic Stack | W8 D1–D3 |
| 24 | Queue · Deque · Circular · Monotonic Deque | W8 D4 |
| 25 | Binary Tree (DFS, BFS) | W8 D5–D6, W9 D1–D2 |
| 26 | Binary Search Tree | W9 D3 |
| 27 | Heap / Priority Queue | W9 D4–D5 |
| 28 | Intervals | W9 D6 |
| 29 | Matrix / 2D Array | W10 D1 |
| 30 | Graph Fundamentals · BFS · DFS · Grid | W10 D2–D5 |
| 31 | Topological Sort | W10 D6 |
| 32 | Union Find / DSU | W11 D1 |
| 33 | Shortest Path (BFS, Dijkstra, Bellman-Ford/Floyd ধারণা) | W10 D4, W11 D2 |
| 34 | Backtracking | W7 D3 (পরিচয়), W11 D3–D5 |
| 35 | Greedy | W11 D6, W12 D1 |
| 36 | Dynamic Programming (1D, 2D) | W12 D2–D6 |
| 37 | Bit Manipulation | Dec 28 |
| 38 | Trie | Dec 29 |
| 39 | Math & Number Theory | W1 D5 (digit, prime), Dec 30 |
| 40 | Async JS (event loop, Promise, async/await) | W5 D7, W6 D7 |
| 41 | Practical JS (debounce, throttle, memoize, curry, deepClone, deepEqual, EventEmitter, LRU, KV store, rate limiter, log aggregation, promise pool...) | প্রতিটা Day 7 |
| 42 | Advanced DS (Segment Tree, Fenwick, ordered set) | after-december |
| 43 | Pattern Combinations | Mixed days (W4 D6, W6 D6) + after-december |
| 44 | Unseen & Mixed training | প্রতিটা Day 7 + W4 D6 + W6 D6 |
| 45 | Timed Live Coding & Mock Interview | W8–W12 Day 7 + Dec 31 |
| 46 | JS Master (iterator/generator, Proxy, WeakMap, memory) | after-december |
| — | Node দিয়ে চালানো, `console.assert`, stdin input | W1 D1, W12 D7 |

---

## আমার (Claude) ভূমিকা

- প্রতিটা session-এ guide করব: লক্ষ্য মনে করানো, hint (একবারে একটা), code review, mock interview।
- `TRACKER.md` update রাখব — কোথায় আছো, কী বাকি, কবে কী re-solve।
- পিছিয়ে পড়লে বা কোনো topic কঠিন লাগলে plan সমন্বয় করব — **তারিখের চেয়ে গভীরভাবে শেখা বেশি জরুরি।**

**শুরু:** সোমবার, ৫ অক্টোবর → [October Week 1, Day 1](month-1-october/week-1.md)। আমাকে লেখো **`start W1 D1`**।
