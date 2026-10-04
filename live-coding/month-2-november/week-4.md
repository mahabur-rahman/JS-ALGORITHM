# November · Week 4 (সামগ্রিক W8) — ২৩ থেকে ২৯ নভেম্বর
## Stack · Monotonic Stack · Queue/Deque · Binary Tree (শুরু) · প্রথম Mock

**সপ্তাহের লক্ষ্য:**
1. Stack চেনা: **"শেষে যা এসেছে, সেটাকেই আগে দরকার"** — matching, nested, undo।
2. Monotonic stack: "next greater" ধরনের O(n²) problem-কে O(n)-এ নামানো।
3. Tree-র DFS আর BFS skeleton হাতে।
4. **জীবনের প্রথম পূর্ণ mock interview** (Day 7)।

---

## Day 1 — সোম, ২৩ নভেম্বর — Stack ১: Matching · Design ★

**Interview-এ যেভাবে আসে:** bracket মেলানো, HTML tag বৈধ কিনা, undo/redo, browser back button, "min stack" design।

**শিখবে:**
- LIFO; JS-এ array দিয়ে: `push`, `pop`, `stack[stack.length - 1]` (peek), `stack.at(-1)`।
- **চেনার প্রশ্ন:** *"এখন যা দেখছি, সেটা কি সবচেয়ে সাম্প্রতিক অসম্পূর্ণ জিনিসের সাথে মিলবে?"*
- closing → opening-এর map (`{ ")": "(", "]": "[", "}": "{" }`)।
- **Min stack কৌশল:** প্রতিটা অবস্থায় "এখন পর্যন্ত min" আলাদা stack-এ।

**Skeleton drill:** 3.12 — ২ বার।

**Problems:**
- [ ] ★ **ST1 Valid Parentheses** — শুধু `)` বা শুধু `(`? খালি string? `B`
- [ ] ★ **ST2 Min Stack** — `push/pop/top/getMin` সব O(1)। `C`
- [ ] ★ **ST3 Remove All Adjacent Duplicates in String** — `"abbaca"` → `"ca"`। `B`
- [ ] ○ **ST4** browser history: `visit(url)`, `back(steps)`, `forward(steps)` — দুটো stack দিয়ে। `C`

**বলো:** *"Every closing bracket must match the most recent unmatched opening bracket, which is exactly what a stack gives me."*

---

## Day 2 — মঙ্গল, ২৪ নভেম্বর — Stack ২: Expression Processing ★

**শিখবে:**
- **RPN (postfix):** সংখ্যা → push; operator → দুটো pop, হিসাব, push। **pop-এর ক্রম** (`b` আগে বের হয়, তারপর `a` → `a - b`)।
- integer division truncation: `Math.trunc(a / b)`।
- **Nested decode:** `"3[a2[c]]"` → stack-এ (আগের string, count) রাখো; `]`-এ বের করে জোড়া।
- path normalize: `/a/./b/../../c/` → `/c`।

**Problems:**
- [ ] ★ **ST5 Evaluate Reverse Polish Notation** `C`
- [ ] ★ **ST6 Decode String** — `"3[a2[c]]"` → `"accaccacc"`। একাধিক digit-এর সংখ্যা (`"12[a]"`)? `D`
- [ ] ○ **ST7 Simplify Path** `C`
- [ ] ○ **ST8 Asteroid Collision** `D`

**বলো:** *"When I see an opening bracket, I push the current string and repeat count onto the stack and start fresh. On a closing bracket, I pop them and repeat the inner string."*

---

## Day 3 — বুধ, ২৫ নভেম্বর — Monotonic Stack ★★

**Interview-এ যেভাবে আসে:** "প্রতিটা দিনের জন্য — আরো গরম দিন আসতে কত দিন লাগবে?", "পরের বড় দাম", stock span।

**শিখবে:**
- **Brute force:** প্রতিটার জন্য ডানে খোঁজা → O(n²)।
- **চিন্তা:** যাদের উত্তর এখনো পাইনি, তাদের stack-এ অপেক্ষা করাই; নতুন element এলে, যাদের সে "ছাড়িয়ে যায়", তাদের উত্তর পেয়ে গেল → pop।
- stack-এ **index** রাখো (মান না) — দূরত্বও বের করা যায়।
- stack সবসময় কমতে থাকা (decreasing) ক্রমে — তাই "monotonic"।
- প্রতিটা element একবার push, একবার pop → O(n)।

**Skeleton drill:** 3.13 — ৩ বার।

**Problems:**
- [ ] ★ **ST9 Daily Temperatures** — brute force আগে, তারপর monotonic stack। `[73,74,75,71,69,72,76,73]` দিয়ে stack-এর অবস্থা টেবিলে। `D`
- [ ] ★ **ST10 Next Greater Element I** (+ Map) `C`
- [ ] ○ **ST11 Online Stock Span** `D`
- [ ] ⏳ Largest Rectangle in Histogram → January

**বলো:** *"I keep a stack of indices still waiting for a warmer day. When a warmer temperature arrives, I pop every waiting day it beats and record the distance. Each index is pushed and popped once, so it's O(n)."*

---

## Day 4 — বৃহস্পতি, ২৬ নভেম্বর — Queue · Deque · Monotonic Deque

**Interview-এ যেভাবে আসে:** task queue, rate limiting ("গত ৩০০০ ms-এ কতগুলো request"), BFS-এর ভিত্তি।

**শিখবে:**
- FIFO; **JS-এ `shift()` O(n)** → head index (W4-এর K2) বা linked list।
- **Circular queue:** fixed array + `(i + 1) % capacity`।
- **Deque:** দুই দিক থেকে যোগ/বাদ।
- **Monotonic deque:** sliding window-এর max — সামনে থেকে মেয়াদোত্তীর্ণ index বাদ, পেছন থেকে ছোটগুলো বাদ।
- **Queue দিয়ে stack / stack দিয়ে queue** — চিন্তার ব্যায়াম।

**Problems:**
- [ ] ★ **Q1 Number of Recent Calls** — `ping(t)` → গত 3000 ms-এ কতগুলো। `B`
- [ ] ★ **Q2 Implement Queue using Stacks** — amortized O(1) কেন? `C`
- [ ] ★ **Q3 Design Circular Queue** `C`
- [ ] ○ **Q4 Sliding Window Maximum** — monotonic deque। (Hard-এর কাছাকাছি) `E`
- [ ] ○ **Q5 Implement Stack using Queues** `B`

**বলো:** *"Requests older than 3000 milliseconds can never count again, so I remove them from the front of the queue. Each request enters and leaves once."*

---

## Day 5 — শুক্র, ২৭ নভেম্বর — Binary Tree ১: Traversal · DFS ★

**Interview-এ যেভাবে আসে:** tree প্রায় প্রতিটা mid-level interview-এ। আর real life-এ: DOM, folder structure, org chart, comment thread।

**শিখবে:**
- root, parent, child, leaf, depth (উপর থেকে), height (নিচ থেকে)।
- `TreeNode` class + **array থেকে tree বানানোর helper** (`[3,9,20,null,null,15,7]` → level order) — test-এর জন্য আগে লিখে নাও।
- **DFS তিন ক্রম:** preorder (node → left → right), inorder (left → node → right), postorder (left → right → node)।
- recursive + **iterative (stack দিয়ে)** preorder।
- **দুই ধরনের চিন্তা:**
  - **নিচ থেকে উত্তর আনা (bottom-up):** "বাম আর ডান subtree-র উত্তর জানলে আমার উত্তর কী?" → max depth।
  - **উপর থেকে তথ্য পাঠানো (top-down):** parameter দিয়ে (এখন পর্যন্ত depth, path sum)।

**Skeleton drill:** 3.17 — ৩ বার।

**Problems:**
- [ ] ★ **T1** `TreeNode` + `buildTree(levelArray)` helper + তিনটা traversal (recursive)। `B`
- [ ] ★ **T2** iterative preorder আর inorder (stack)। `C`
- [ ] ★ **T3 Maximum Depth of Binary Tree** — bottom-up আর top-down দুইভাবে। `A`
- [ ] ★ **T4 Same Tree** `A`

তোমার `codeAbc/Tree/BinaryTree.js` খুলবে না।

**বলো:** *"The depth of a tree is one plus the larger depth of its two subtrees. An empty tree has depth zero — that's my base case."*

---

## Day 6 — শনি, ২৮ নভেম্বর — Binary Tree ২: Invert · Symmetric · BFS ★

**শিখবে:**
- **দুটো tree একসাথে recursion** (same / symmetric / mirror)।
- **BFS level by level:** queue + `levelSize` — একটা level পুরো শেষ করে পরের level।
- কখন DFS, কখন BFS: "level"/"closest"/"minimum depth" → BFS; "path"/"subtree"/"height" → DFS।

**Skeleton drill:** 3.18 — ৩ বার।

**Problems:**
- [ ] ★ **T5 Invert Binary Tree** — recursive + BFS দিয়ে। `A`
- [ ] ★ **T6 Symmetric Tree** — helper `isMirror(a, b)`। `B`
- [ ] ★ **T7 Binary Tree Level Order Traversal** `C`
- [ ] ○ **T8 Minimum Depth** — DFS-এ ফাঁদ কী (একদিকে null)? BFS কেন স্বাভাবিক? `B`

**বলো:** *"I process the tree level by level with a queue. I record the queue's size at the start of each level, so I know exactly which nodes belong to that level."*

---

## Day 7 — রবি, ২৯ নভেম্বর — LRU Cache · প্রথম Mock Interview ★ · নভেম্বর মূল্যায়ন

**Practical JS ৭ — LRU Cache (খুব বেশি জিজ্ঞেস করা):**
- [ ] ★ **P18 LRU Cache** — `get(key)`, `put(key, value)` O(1); capacity ছাড়ালে সবচেয়ে পুরনো বাদ। (ক) **JS Map-এর insertion order** দিয়ে (delete + set করে "নতুন" বানানো) (খ) **Map + Doubly Linked List** (interviewer যদি বলে "Map-এর order-এর উপর নির্ভর কোরো না")। `D`

**প্রথম Mock Interview (৪৫ মিনিট):**
- আমাকে লিখবে **`interview`** — আমি নভেম্বরের topic থেকে একটা অপরিচিত problem দেব, pattern-এর নাম ছাড়া।
- নিয়ম: আমি hint দেব না যতক্ষণ না তুমি নিজে চাও; শুধু interviewer-এর মতো follow-up প্রশ্ন।
- পুরো সময় **English-এ জোরে চিন্তা** (`05-interview-communication.md`)।
- শেষে আমি feedback দেব: understanding, approach, code, testing, communication — প্রতিটা ১–৫।

**নভেম্বর মূল্যায়ন (`TRACKER.md`):**
1. ★ কতগুলো শেষ, কতগুলো Day +7 re-solve পাস?
2. সবচেয়ে কঠিন ৩টা pattern কোনগুলো?
3. Mock-এ কোন অংশে সবচেয়ে দুর্বল ছিলাম (clarify / approach / code / test / বলা)?
4. অক্টোবর শেষে record করা "Two Sum" ব্যাখ্যা আবার record করো — তুলনা।
5. পিছিয়ে থাকলে আমাকে জানাও — ডিসেম্বরের plan সমন্বয় করব।
