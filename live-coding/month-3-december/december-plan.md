# 🗓️ December Plan — Advanced Problem Solving (৩০ নভেম্বর → ৩১ ডিসেম্বর)

> **এই file-টাই December-এর একমাত্র plan।** প্রতিটা দিন, concept, ছোট আর বড় problem — সব এখানে, শেষ হলে এখানেই চিহ্ন।
> সব code নিজের হাতে: `practice/december/week-N/day-N.js` · শেষ ৪ দিন: `practice/december/final-days/day-N.js`
> আগের মাস: [november-plan.md](../month-2-november/november-plan.md) · এরপর: [after-december/README.md](../after-december/README.md)

**এই মাসের মূল কথা:** কঠিন শোনানো topic (Graph, Backtracking, DP) আসলে **আগের pattern-এর মিশ্রণ।** Graph = BFS/DFS (tree-র মতো) + visited set (hashing)। DP = recursion + memo। ভয় না, ধাপ।

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

## 🧠 যেকোনো problem-এ কীভাবে ভাবব (৮ ধাপ — একই)

| ধাপ | প্রশ্ন |
|---|---|
| ১. বুঝি | "So I need to return ___ given ___." |
| ২. Input / Output | type? খালি? graph হলে directed? cycle? weighted? |
| ৩. ছোট example | কাগজে **আঁকো** — tree, grid, graph, decision tree, DP table |
| ৪. হাতে solve | কী মনে রাখলাম → variable/structure · কী বারবার করলাম → loop/recursion |
| ৫. Brute force | সব সম্ভাবনা চেষ্টা করলে কেমন? complexity? |
| ৬. Bottleneck | একই কাজ বারবার? (→ memo/DP) সবচেয়ে ছোট/বড় বারবার? (→ heap) |
| ৭. Pseudocode → Code | skeleton লেখো, তারপর ঘর ভরাও |
| ৮. Test + Complexity | ছোট example-এ dry run, edge case, Time/Space **কীভাবে মাপলাম** |

**December-এর pattern-চেনার প্রশ্ন:**
1. **Top K / বারবার min-max**? → Heap
2. **Interval / overlap / meeting**? → sort by start + scan
3. **Grid / network / dependency / friend list** ("graph" শব্দ না থাকলেও)? → Graph
4. **Minimum steps (unweighted)**? → BFS · **weighted**? → Dijkstra
5. **ক্রম ঠিক করা, prerequisite**? → Topological Sort
6. **বারবার connect + "একই group?"**? → Union Find
7. **সব combination/permutation, n ছোট**? → Backtracking
8. **"কত উপায়ে" / min-max cost + একই subproblem বারবার**? → DP
9. **প্রতিটা ধাপে স্থানীয় সেরা = সামগ্রিক সেরা** (প্রমাণ সহ)? → Greedy

---

## 📅 মাসের ছবি

| সপ্তাহ | তারিখ (লক্ষ্য) | Topic | অবস্থা |
|---|---|---|---|
| **W1** (সামগ্রিক W9) | ৩০ নভে–৬ ডিসে | Tree (view, path, diameter, LCA) · BST · **Heap** · Intervals · KV store · Mock ২ | ⬜ |
| **W2** (W10) | ৭–১৩ ডিসে | Matrix · **Graph** (DFS/BFS, grid, shortest path, clone) · Topological Sort · Rate limiter · Mock ৩ | ⬜ |
| **W3** (W11) | ১৪–২০ ডিসে | Union Find · Dijkstra · **Backtracking** · Greedy · Log aggregation · Mock ৪ | ⬜ |
| **W4** (W12) | ২১–২৭ ডিসে | Greedy · **Dynamic Programming** (1D + 2D) · stdin · Mock ৫ | ⬜ |
| **শেষ ৪ দিন** | ২৮–৩১ ডিসে | Bit · Trie · Math · **চূড়ান্ত মূল্যায়ন** | ⬜ |

> **সত্যি কথা:** এই মাসটা সবচেয়ে ঘন। **★ আগে, ○ পরে।** ○ বাদ দিলে ক্ষতি নেই — January-তে যাবে। Mock বাদ দেবে না।

---
---

# 📗 WEEK 1 (W9) — Binary Tree (শেষ) · BST · Heap · Intervals

**সপ্তাহের লক্ষ্য:**
1. Tree-তে **"recursion কী ফেরত দেবে" আর "global-এ কী update করব"** আলাদা করা (diameter, LCA)।
2. BST-র **inorder = sorted** — এই একটা সত্য দিয়ে অনেক problem।
3. **MinHeap নিজে লেখা** (JS-এ নেই) — আর "Top K" দেখলেই heap।
4. Intervals: sort by start + scan।

---

## Day 1 · W9 D1 · সোম ৩০ নভে — Topic 25: Binary Tree ৩ — View · Path ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- level-এর প্রথম/শেষ node? → **BFS** (level size দিয়ে)।
- root থেকে **leaf** পর্যন্ত কিছু? → **top-down DFS**, parameter-এ বাকি যোগফল/পথ পাঠাও।
- check **leaf-এ** করো (null-এ না) — কেন? (একদিক খালি node leaf না)
- সব path লাগবে? → `path.push` → recurse → `path.pop` (backtracking-এর ছন্দ)।

### 📘 Concept phases + ছোট problem

**Phase 25.7 — Level-এর শেষ node** ⬜
- **P25.7** 🟢 ⬜ — 🌍 ভবনের ডান পাশ থেকে প্রতি তলার কোন জানালা দেখা যায়। **EN:** For `[1,2,3,null,5,null,4]`, write each level's nodes, then the last of each. → `[1], [2,3], [5,4]` → `1, 3, 4`

**Phase 25.8 — Top-down-এ বাকি পাঠানো** ⬜
- **P25.8** 🟢 ⬜ — 🌍 পকেটে ২২ টাকা, প্রতিটা দোকানে খরচ — leaf-এ পৌঁছে ঠিক ০ হলো? **EN:** For path `5 → 4 → 11 → 2` and target 22, write the remaining value at each node. → `17, 13, 2, 0`

**Phase 25.9 — Leaf চেনা** ⬜
- **P25.9** 🟢 ⬜ — **EN:** In `[1, 2]` (1 has only a left child), is `1` a leaf? Why does checking at `null` give a wrong path sum for target `1`?

### ★ মূল problem

#### ★ T9 · 199. Binary Tree Right Side View 🟡 Medium ⬜
🔗 [LC 199](https://leetcode.com/problems/binary-tree-right-side-view/) (হুবহু)
🌍 **Real-life:** P25.7 — ডান দিক থেকে ভবন দেখা।

**EN:** Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
```
Example 1: Input: root = [1,2,3,null,5,null,4]   Output: [1,3,4]
Example 2: Input: root = [1,null,3]              Output: [1,3]
Example 3: Input: root = []                      Output: []
```
**Function:** `var rightSideView = function (root) {}`
**বাংলা:** প্রতিটা level-এর সবচেয়ে ডানের node। (ক) BFS (খ) DFS — ডান আগে, depth দিয়ে।
**⏱️ লক্ষ্য:** Time O(n) · Space O(w) / O(h)

#### ★ T10 · 112. Path Sum 🟢 Easy ⬜
🔗 [LC 112](https://leetcode.com/problems/path-sum/) (হুবহু)
🌍 **Real-life:** P25.8।

**EN:** Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`. A leaf is a node with no children.
```
Example 1: Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22   Output: true
Explanation: The root-to-leaf path 5 → 4 → 11 → 2 sums to 22.
Example 2: Input: root = [1,2,3], targetSum = 5   Output: false
Example 3: Input: root = [], targetSum = 0        Output: false
```
**Function:** `var hasPathSum = function (root, targetSum) {}`
**বাংলা:** root থেকে leaf পর্যন্ত যোগফল = target এমন পথ আছে?
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

#### ○ T11 · 113. Path Sum II 🟡 ⬜
🔗 [LC 113](https://leetcode.com/problems/path-sum-ii/) (হুবহু)
**EN:** Return all root-to-leaf paths whose sum equals `targetSum`. **বাংলা:** সব path ফেরত — push / recurse / pop।

#### ○ T12 · 103. Binary Tree Zigzag Level Order Traversal 🟡 ⬜
🔗 [LC 103](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) (হুবহু)
**EN:** `[3,9,20,null,null,15,7]` → `[[3],[20,9],[15,7]]`. **বাংলা:** প্রতি level-এ দিক উল্টাও।

**বলো:** *"I pass the remaining target down the tree. At a leaf, I check whether the remaining value equals the leaf's value."*

---

## Day 2 · W9 D2 · মঙ্গল ১ ডিসে — Topic 25: Binary Tree ৪ — Diameter · LCA ★★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **ফেরত দেওয়া মান ≠ চাওয়া উত্তর:** helper **height** ফেরত দেয়, কিন্তু প্রতিটা node-এ `left + right` দিয়ে **বাইরের variable** update করে।
- **LCA:** "এই subtree-তে p বা q পেলে সেটা ফেরত দাও; দুই দিক থেকেই কিছু এলে **আমিই** LCA।"
- ভারসাম্য চেক: height ফেরত, ভারসাম্যহীন হলে **−1** (sentinel)।

### 📘 Concept phases + ছোট problem

**Phase 25.10 — Height ফেরত, অন্য কিছু update** ⬜
- **P25.10** 🟢 ⬜ — 🌍 গাছের প্রতিটা ডালে দাঁড়িয়ে — বাঁ দিকে কত গভীর, ডানে কত? **EN:** For `[1,2,3,4,5]`, write `leftHeight + rightHeight` at every node. Which is the largest? → node 1: `2 + 1 = 3`

**Phase 25.11 — দুই দিক থেকে কিছু এলে** ⬜
- **P25.11** 🟢 ⬜ — 🌍 দুই কাজিনের সবচেয়ে কাছের সাধারণ দাদা/নানা। **EN:** In `[3,5,1,6,2,0,8]`, for p = 6 and q = 2, what does each subtree return up to node 5? → both sides non-null → 5 is LCA

### ★ মূল problem

#### ★ T13 · 543. Diameter of Binary Tree 🟢 Easy ⬜
🔗 [LC 543](https://leetcode.com/problems/diameter-of-binary-tree/) (হুবহু)
🌍 **Real-life:** network-এ দুটো সবচেয়ে দূরের computer-এর মধ্যে কত hop।

**EN:** Given the `root` of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root. The length of a path between two nodes is represented by the number of edges between them.
```
Example 1: Input: root = [1,2,3,4,5]   Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2: Input: root = [1,2]         Output: 1
```
**Function:** `var diameterOfBinaryTree = function (root) {}`
**বাংলা:** যেকোনো দুটো node-এর মধ্যে সবচেয়ে লম্বা পথ (edge গুনে)। diameter root দিয়ে না-ও যেতে পারে — উদাহরণ আঁকো।
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

#### ★ T14 · 236. Lowest Common Ancestor of a Binary Tree 🟡 Medium ⬜
🔗 [LC 236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) (হুবহু)
🌍 **Real-life:** দুটো file-এর সবচেয়ে কাছের সাধারণ folder।

**EN:** Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q`. The LCA is the lowest node in the tree that has both `p` and `q` as descendants (a node can be a descendant of itself).
```
Example 1: Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1   Output: 3
Example 2: Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4   Output: 5
Explanation: A node can be a descendant of itself.
```
**Function:** `var lowestCommonAncestor = function (root, p, q) {}`
**বাংলা:** দুটো node-এর সবচেয়ে নিচের সাধারণ পূর্বপুরুষ।
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

#### ○ T15 · 110. Balanced Binary Tree 🟢 ⬜
🔗 [LC 110](https://leetcode.com/problems/balanced-binary-tree/) (হুবহু)
**EN:** `[3,9,20,null,null,15,7]` → `true`; `[1,2,2,3,3,null,null,4,4]` → `false`. **বাংলা:** O(n²) সহজ উপায় আগে, তারপর −1 sentinel দিয়ে O(n)।

#### ○ T16 · 1448. Count Good Nodes in Binary Tree 🟡 ⬜
🔗 [LC 1448](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) (হুবহু)
**EN:** A node is good if no node on the path from root to it is greater. `[3,1,4,3,null,1,5]` → `4`. **বাংলা:** top-down — এখন পর্যন্ত max পাঠাও।

- ⏳ Serialize/Deserialize · Binary Tree Maximum Path Sum → January

**বলো:** *"My helper returns the height of each subtree. While computing it, I also update a global maximum with left height plus right height, because the longest path through this node uses both sides."*

---

## Day 3 · W9 D3 · বুধ ২ ডিসে — Topic 26: Binary Search Tree ★ ⬜

**Interview-এ যেভাবে আসে:** "BST বৈধ কিনা", "kth smallest", "BST-তে insert/delete" — আর ফাঁদ: শুধু parent-এর সাথে তুলনা।

**🧠 এই topic-এ কীভাবে ভাবব:**
- নিয়ম: বাম subtree-র **সব** < node < ডান subtree-র **সব** — শুধু সরাসরি সন্তান না!
- **Inorder = sorted** → kth smallest, validate।
- খোঁজা: ছোট হলে বামে, বড় হলে ডানে — O(h)।
- validate: (min, max) **সীমা উপর থেকে** পাঠাও।

### 📘 Concept phases + ছোট problem

**Phase 26.1 — BST-তে খোঁজা** ⬜
- **P26.1** 🟢 ⬜ — 🌍 অভিধানের মতো — প্রতিটা ধাপে বাঁ বা ডান। **EN:** In BST `[8,3,10,1,6]`, trace the path to find `6`. → `8 → 3 → 6`

**Phase 26.2 — Inorder = sorted** ⬜
- **P26.2** 🟢 ⬜ — **EN:** Write the inorder of BST `[5,3,7,2,4]`. → `2 3 4 5 7` (sorted!)

**Phase 26.3 — ভুল validate-এর ফাঁদ** ⬜
- **P26.3** 🟢 ⬜ — **EN:** Draw `[5,1,6,null,null,3,7]`. Every parent-child pair looks fine — why is it NOT a valid BST? → `3` is in 5's right subtree but `3 < 5`

### ★ মূল problem

#### ★ BST1 · 700. Search in a BST + 701. Insert into a BST 🟡 ⬜
🔗 [LC 700](https://leetcode.com/problems/search-in-a-binary-search-tree/) · [LC 701](https://leetcode.com/problems/insert-into-a-binary-search-tree/) (হুবহু)
🌍 **Real-life:** sorted phonebook-এ নাম খোঁজা আর নতুন নাম ঢোকানো।
**EN (700):** Find the node whose value equals `val` and return the subtree rooted with that node; if it doesn't exist, return `null`. `root = [4,2,7,1,3], val = 2` → `[2,1,3]`; `val = 5` → `[]`.
**EN (701):** Insert `val` into the BST and return the root (any valid BST is accepted).
**বাংলা:** BST-তে খোঁজা আর ঢোকানো।
**⏱️ লক্ষ্য:** Time O(h) · Space O(1) iterative

#### ★ BST2 · 98. Validate Binary Search Tree 🟡 Medium ⬜
🔗 [LC 98](https://leetcode.com/problems/validate-binary-search-tree/) (হুবহু)
🌍 **Real-life:** database index ঠিক আছে কিনা যাচাই।

**EN:** Given the `root` of a binary tree, determine if it is a valid binary search tree (BST): the left subtree of a node contains only nodes with keys strictly less than the node's key; the right subtree only keys strictly greater; both subtrees must also be BSTs.
```
Example 1: Input: root = [2,1,3]                    Output: true
Example 2: Input: root = [5,1,4,null,null,3,6]      Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```
**Function:** `var isValidBST = function (root) {}`
**বাংলা:** ভুল উপায়টা (শুধু সন্তানের সাথে তুলনা) আগে লেখো আর P26.3-এর input-এ ভুল দেখাও। তারপর ঠিক উপায় (সীমা পাঠানো)।
**⏱️ লক্ষ্য:** Time O(n) · Space O(h)

#### ★ BST3 · 230. Kth Smallest Element in a BST 🟡 Medium ⬜
🔗 [LC 230](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) (হুবহু)
🌍 **Real-life:** sorted salary-র তৃতীয় সর্বনিম্ন।

**EN:** Given the `root` of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values of the nodes in the tree.
```
Example 1: Input: root = [3,1,4,null,2], k = 1             Output: 1
Example 2: Input: root = [5,3,6,2,4,null,null,1], k = 3    Output: 3
```
**Function:** `var kthSmallest = function (root, k) {}`
**বাংলা:** inorder চালাও, k-তে থামো।
**⏱️ লক্ষ্য:** Time O(h + k) · Space O(h)

#### ★ BST4 · 235. Lowest Common Ancestor of a BST 🟡 Medium ⬜
🔗 [LC 235](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) (হুবহু)
**EN:** `root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8` → `6`; `p = 2, q = 4` → `2`.
**বাংলা:** দুটোই ছোট → বামে; দুটোই বড় → ডানে; নইলে আমিই। (T14-এর চেয়ে কত সহজ!)
**⏱️ লক্ষ্য:** Time O(h) · Space O(1)

#### ○ BST5 · 108. Convert Sorted Array to BST 🟢 ⬜
🔗 [LC 108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) (হুবহু)
**EN:** Height-balanced BST from sorted array. `[-10,-3,0,5,9]` → `[0,-3,9,-10,null,5]`. **বাংলা:** মাঝেরটা root।

#### ○ BST6 · 450. Delete Node in a BST 🟡 ⬜
🔗 [LC 450](https://leetcode.com/problems/delete-node-in-a-bst/) (হুবহু)
**বাংলা:** তিন case — leaf · একটা সন্তান · দুটো সন্তান (inorder successor)।

**বলো:** *"Each node must be within a valid range, not just greater than its parent. I pass down a lower and upper bound as I recurse."*

### 🚪 Gate — Topic 25–26 (Tree + BST) ⬜

---

## Day 4 · W9 D4 · বৃহস্পতি ৩ ডিসে — Topic 27: Heap ১ — MinHeap নিজে লেখা ★★ ⬜

**কেন জরুরি:** JS-এ priority queue নেই। Top K, merge K list, Dijkstra, scheduling — সব জায়গায় লাগে। **১০ মিনিটে লিখতে পারা লক্ষ্য।**

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Array-তে tree:** index i-এর parent `Math.floor((i - 1) / 2)`, সন্তান `2i + 1`, `2i + 2`।
- **push:** শেষে রাখো → parent-এর চেয়ে ছোট হলে উপরে (**bubble up**)।
- **pop:** root বের করো → শেষেরটা root-এ → ছোট সন্তানের সাথে নিচে (**bubble down**)।
- comparator দিয়ে min / max / object — একই class।

**Skeleton:** 3.24 interface থেকে শুরু।

### 📘 Concept phases + ছোট problem

**Phase 27.1 — Array-তে tree** ⬜
- **P27.1** 🟢 ⬜ — 🌍 hospital emergency — সবচেয়ে গুরুতর রোগী সবসময় সামনে। **EN:** For heap array `[1, 3, 5, 4, 6]`, what are the children of index 1, and the parent of index 4? → `4 (idx 3), 6 (idx 4)`; parent of 4 is `1`

**Phase 27.2 — Bubble up** ⬜
- **P27.2** 🟢 ⬜ — **EN:** Push `2` into `[1, 3, 5, 4, 6]`. Trace the swaps. → `[1, 3, 2, 4, 6, 5]`

**Phase 27.3 — Bubble down** ⬜
- **P27.3** 🟢 ⬜ — **EN:** Pop from `[1, 3, 2, 4, 6, 5]`. Move last to root, trace the swaps. → returns `1`, heap `[2, 3, 5, 4, 6]`

**Phase 27.4 — Comparator** ⬜
- **P27.4** 🟢 ⬜ — **EN:** How do you turn the MinHeap into a MaxHeap without changing its code? → pass `(a, b) => b - a`

### ★ মূল problem

#### ★ HP1 · MinHeap Class 🟡 ⬜
🔗 test: [LC 912 · Sort an Array](https://leetcode.com/problems/sort-an-array/) (heap sort করে submit)
🌍 **Real-life:** task scheduler — সবচেয়ে জরুরি কাজ সবসময় হাতের কাছে।
**EN:** Implement `MinHeap` with `push`, `pop`, `peek`, `size`, and a comparator. Test: push 100 random numbers, pop all — are they sorted?
**বাংলা:** নিজের MinHeap — comparator সহ। ১০০টা random push করে pop করলে sorted আসে কিনা।
**⏱️ লক্ষ্য:** push/pop O(log n) · peek O(1)

#### ★ HP2 · 1046. Last Stone Weight 🟢 Easy ⬜
🔗 [LC 1046](https://leetcode.com/problems/last-stone-weight/) (হুবহু)
🌍 **Real-life:** দুটো সবচেয়ে ভারী পাথরের ঠোকাঠুকি।

**EN:** You are given an array of integers `stones`. On each turn, we choose the heaviest two stones and smash them together. If `x == y`, both stones are destroyed; if `x != y`, the stone of weight `x` is destroyed and the other has new weight `y - x`. At the end, there is at most one stone left. Return the weight of the last remaining stone. If there are no stones left, return `0`.
```
Example 1: Input: stones = [2,7,4,1,8,1]   Output: 1
Explanation: 7 and 8 → 1; 2 and 4 → 2; 2 and 1 → 1; 1 and 1 → 0; last is 1.
Example 2: Input: stones = [1]             Output: 1
```
**Function:** `var lastStoneWeight = function (stones) {}`
**বাংলা:** max heap (comparator উল্টো)।
**⏱️ লক্ষ্য:** Time O(n log n) · Space O(n)

#### ○ HP3 · Heap Sort ⬜
**EN:** Sort with your heap. **বাংলা:** সব push, তারপর সব pop।

**বলো:** *"A heap is a complete binary tree stored in an array. Push adds at the end and bubbles up; pop moves the last element to the root and bubbles down. Both are O(log n)."*

---

## Day 5 · W9 D5 · শুক্র ৪ ডিসে — Topic 27: Heap ২ — Top K · K-way ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Top K largest → size K-এর MIN heap** — উল্টো লাগে কেন? (heap-এর মাথায় k-টার মধ্যে **সবচেয়ে দুর্বল**, তাকেই বের করে দিতে হয়)
- O(n log k) বনাম sort O(n log n) — k ছোট হলে লাভ।
- K sorted list merge: প্রতিটা list-এর মাথা heap-এ।

### 📘 Concept phases + ছোট problem

**Phase 27.5 — Size-k heap** ⬜
- **P27.5** 🟢 ⬜ — 🌍 ক্লাসের top 3 — নতুন ছাত্র এলে top 3-এর সবচেয়ে কমজনের সাথে তুলনা। **EN:** Keep the 3 largest of `[5, 1, 9, 3, 7, 8]` with a size-3 min heap; trace it. → `{7, 8, 9}`

**Phase 27.6 — দূরত্ব দিয়ে তুলনা** ⬜
- **P27.6** 🟢 ⬜ — **EN:** Comparator for points by distance from origin without `Math.sqrt`. → `(a, b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2)`

### ★ মূল problem

#### ★ HP4 · 215. Kth Largest Element in an Array 🟡 Medium ⬜
🔗 [LC 215](https://leetcode.com/problems/kth-largest-element-in-an-array/) (হুবহু)
🌍 **Real-life:** leaderboard-এর k-তম স্থান।
**EN:** `[3,2,1,5,6,4], k = 2` → `5`; `[3,2,3,1,2,4,5,5,6], k = 4` → `4`.
**বাংলা:** October-এ sort দিয়ে করেছিলে; এবার size-k min heap। তুলনা।
**⏱️ লক্ষ্য:** Time O(n log k) · Space O(k)

#### ★ HP5 · 347. Top K Frequent Elements (heap) 🟡 Medium ⬜
🔗 [LC 347](https://leetcode.com/problems/top-k-frequent-elements/) (হুবহু)
**EN:** `[1,1,1,2,2,3], k = 2` → `[1,2]`.
**বাংলা:** October-এ bucket; এবার heap। **তিনটা উপায়ের টেবিল** (sort / bucket / heap)।

#### ★ HP6 · 973. K Closest Points to Origin 🟡 Medium ⬜
🔗 [LC 973](https://leetcode.com/problems/k-closest-points-to-origin/) (হুবহু)
🌍 **Real-life:** Foodpanda — তোমার কাছের ৫টা রেস্টুরেন্ট।

**EN:** Given an array of `points` where `points[i] = [xi, yi]` represents a point on the X-Y plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`. The distance is the Euclidean distance. You may return the answer in any order.
```
Example 1: Input: points = [[1,3],[-2,2]], k = 1           Output: [[-2,2]]
Explanation: distance of (1,3) is √10, of (-2,2) is √8 — closer.
Example 2: Input: points = [[3,3],[5,-1],[-2,4]], k = 2    Output: [[3,3],[-2,4]]
```
**Function:** `var kClosest = function (points, k) {}`
**বাংলা:** origin-এর সবচেয়ে কাছের k-টা বিন্দু। (P27.6-এর comparator, size-k **max** heap)
**⏱️ লক্ষ্য:** Time O(n log k) · Space O(k)

#### ○ HP7 · 23. Merge k Sorted Lists 🔴 Hard ⬜
🔗 [LC 23](https://leetcode.com/problems/merge-k-sorted-lists/) (হুবহু)
**EN:** `[[1,4,5],[1,3,4],[2,6]]` → `[1,1,2,3,4,4,5,6]`. **বাংলা:** প্রতিটা list-এর মাথা heap-এ।

#### ○ HP8 · 621. Task Scheduler 🟡 ⬜
🔗 [LC 621](https://leetcode.com/problems/task-scheduler/) (হুবহু)
**EN:** `tasks = ["A","A","A","B","B","B"], n = 2` → `8`. **বাংলা:** সবচেয়ে বেশি বাকি কাজটা আগে।

- ⏳ Find Median from Data Stream (two heaps) → January

**বলো:** *"To keep the k largest elements, I use a min-heap of size k. Its top is the smallest of the k largest, so whenever the heap grows past k, I pop it. That's O(n log k)."*

### 🚪 Gate — Topic 27 (Heap) ⬜

---

## Day 6 · W9 D6 · শনি ৫ ডিসে — Topic 28: Intervals ★ ⬜

**Interview-এ যেভাবে আসে:** calendar/meeting app, booking system, "একসাথে কতগুলো room", "খালি সময়" — product company-তে খুব common।

**🧠 এই topic-এ কীভাবে ভাবব:**
- প্রথম পদক্ষেপ প্রায় সবসময়: **start দিয়ে sort**।
- overlap শর্ত (sorted হলে): `curr.start <= last.end`। touching (`[1,2]`, `[2,3]`) overlap কিনা — **জিজ্ঞেস করো**।
- একসাথে কতগুলো চলছে? → start আর end **আলাদা** sort (sweep line), বা end-এর min heap।
- সবচেয়ে কম বাদ দিয়ে overlap-মুক্ত? → **end দিয়ে sort** (greedy)।

### 📘 Concept phases + ছোট problem

**Phase 28.1 — Overlap চেনা** ⬜
- **P28.1** 🟢 ⬜ — 🌍 দুটো meeting কি একসাথে পড়ছে? **EN:** Do `[1,3]` and `[2,6]` overlap? `[1,2]` and `[3,4]`? `[1,2]` and `[2,3]`? → yes, no, depends (ask!)

**Phase 28.2 — Sort করলে পাশাপাশি** ⬜
- **P28.2** 🟢 ⬜ — **EN:** Sort `[[8,10],[1,3],[2,6]]` by start. Now which overlapping pairs are neighbors? → `[1,3]` & `[2,6]`

**Phase 28.3 — Sweep line** ⬜
- **P28.3** 🟢 ⬜ — 🌍 অফিসের meeting room — একসাথে সর্বোচ্চ কতজন ভেতরে। **EN:** For `[[0,30],[5,10],[15,20]]`, list +1 at each start and −1 at each end in time order; track the running count. → max `2`

### ★ মূল problem

#### ★ IN1 · 56. Merge Intervals 🟡 Medium ⬜
🔗 [LC 56](https://leetcode.com/problems/merge-intervals/) (হুবহু)
🌍 **Real-life:** calendar-এ overlapping busy সময়গুলো জোড়া — "আজ কখন কখন ব্যস্ত"।

**EN:** Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
```
Example 1: Input: intervals = [[1,3],[2,6],[8,10],[15,18]]   Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2: Input: intervals = [[1,4],[4,5]]                  Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```
**Function:** `var merge = function (intervals) {}`
**বাংলা:** overlapping interval-গুলো জোড়া লাগাও।
**⏱️ লক্ষ্য:** Time O(n log n) · Space O(n)

#### ★ IN2 · 57. Insert Interval 🟡 Medium ⬜
🔗 [LC 57](https://leetcode.com/problems/insert-interval/) (হুবহু)
🌍 **Real-life:** ভরা calendar-এ নতুন meeting বসানো।

**EN:** You are given an array of non-overlapping intervals sorted by start and a `newInterval`. Insert `newInterval` so that intervals is still sorted and non-overlapping (merge if necessary). Return the result.
```
Example 1: Input: intervals = [[1,3],[6,9]], newInterval = [2,5]   Output: [[1,5],[6,9]]
Example 2: Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
           Output: [[1,2],[3,10],[12,16]]
```
**Function:** `var insert = function (intervals, newInterval) {}`
**বাংলা:** তিন ভাগ — আগে, overlap, পরে।
**⏱️ লক্ষ্য:** Time O(n) · Space O(n)

#### ★ IN3 · Meeting Rooms 🟢 Easy ⬜
🔗 [LC 252](https://leetcode.com/problems/meeting-rooms/) (premium)
🌍 **Real-life:** একজন মানুষ কি সব meeting-এ যেতে পারবে?
**EN:** Given meeting time intervals, determine if a person could attend all meetings. `[[0,30],[5,10],[15,20]]` → `false`; `[[7,10],[2,4]]` → `true`.
**বাংলা:** sort, তারপর পাশাপাশি overlap চেক।

#### ★ IN4 · Meeting Rooms II 🟡 Medium ⬜
🔗 [LC 253](https://leetcode.com/problems/meeting-rooms-ii/) (premium)
🌍 **Real-life:** অফিসে সর্বনিম্ন কতগুলো meeting room লাগবে।
**EN:** Return the minimum number of conference rooms required. `[[0,30],[5,10],[15,20]]` → `2`; `[[7,10],[2,4]]` → `1`.
**বাংলা:** (ক) sweep (P28.3) (খ) end-এর min heap।
**⏱️ লক্ষ্য:** Time O(n log n) · Space O(n)

#### ○ IN5 · 435. Non-overlapping Intervals 🟡 ⬜
🔗 [LC 435](https://leetcode.com/problems/non-overlapping-intervals/) (হুবহু)
**EN:** Minimum number of intervals to remove to make the rest non-overlapping. `[[1,2],[2,3],[3,4],[1,3]]` → `1`. **বাংলা:** end দিয়ে sort — greedy।

#### ○ IN6 · 452. Minimum Number of Arrows to Burst Balloons 🟡 ⬜
🔗 [LC 452](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) (হুবহু)
**EN:** `[[10,16],[2,8],[1,6],[7,12]]` → `2`. **বাংলা:** IN5-এর আত্মীয়।

- ⏳ Employee Free Time → January

**বলো:** *"After sorting by start time, overlapping intervals are always next to each other, so one pass is enough to merge them."*

### 🚪 Gate — Topic 28 (Intervals) ⬜

---

## Day 7 · W9 D7 · রবি ৬ ডিসে — Practical (Multi-part) · Mock ২ · Revision ⬜

### 🛠️ Practical JS ৮ — Multi-part problem (product company-র প্রিয় ধরন)

#### ★ P19 · In-memory Key-Value Store 🟡 ⬜
🔗 কাছাকাছি: [LC 981 · Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
🌍 **Real-life:** ছোট Redis বানানো।
**EN:** Build it in stages — finish one before reading the next:
1. `set(key, value)`, `get(key)`, `delete(key)`
2. `set(key, value, ttlMs)` — after the time passes, `get` returns `undefined` (lazy expiry)
3. `count(value)` — how many keys currently have this value, in O(1)
4. `begin()`, `rollback()`, `commit()` — transactions (can be nested)

**বাংলা:** ধাপে ধাপে — প্রতিটা ধাপে আগের code কতটা বদলাতে হলো, লক্ষ করো। **ভালো ডিজাইন = কম বদল।**
**🧠 ভাবনা:** ধাপ ৩-এর জন্য কোন বাড়তি Map লাগবে (value → count)? ধাপ ৪-এ পুরনো value কোথায় রাখবে (stack of changes)?

### 🎤 Mock ২ (৪৫ মিনিট)
আমাকে **`interview`** লেখো (tree / heap / interval থেকে)।

### 🔁 Re-solve
- ⬜ T13 Diameter · ⬜ T14 LCA · ⬜ BST2 Validate · ⬜ HP1 MinHeap (১০ মিনিটে) · ⬜ IN2 Insert Interval

---

# 📘 WEEK 2 (W10) — Matrix · Graph (BFS/DFS) · Topological Sort

**সপ্তাহের লক্ষ্য:**
1. Grid দেখলেই **directions array + সীমানা check** — হাত থেকে আপনা আপনি।
2. **Graph-এ ভয় না পাওয়া:** graph = node + edge। "graph" শব্দ না থাকলেও চেনা (grid, prerequisite, network, friend list)।
3. Graph DFS, BFS, grid DFS, BFS shortest path, topological sort — ৫টা skeleton হাতে।

**পড়বে:** `04-patterns-and-skeletons.md` — skeleton 3.19 থেকে 3.22।

---

## Day 8 · W10 D1 · সোম ৭ ডিসে — Topic 29: Matrix / 2D Array ★ ⬜

**Interview-এ যেভাবে আসে:** image rotate, spiral print, game board (tic-tac-toe, game of life), spreadsheet।

**🧠 এই topic-এ কীভাবে ভাবব:**
- `rows = grid.length`, `cols = grid[0].length` (খালি grid?)।
- সীমানা: `r >= 0 && r < rows && c >= 0 && c < cols` → helper `inBounds(r, c)`।
- চার দিক: `[[1,0],[-1,0],[0,1],[0,-1]]`।
- layer-by-layer? → top/bottom/left/right **চারটা সীমা**, এক দিক শেষ হলে সেই সীমা সরাও।
- in-place-এ পুরনো মান হারাবে? → marker, বা প্রথম row/col-কে খাতা।

### 📘 Concept phases + ছোট problem

**Phase 29.1 — Row/col আর সীমানা** ⬜
- **P29.1** 🟢 ⬜ — 🌍 দাবার বোর্ড — কোন ঘর বোর্ডের বাইরে? **EN:** For a 3×4 grid, is `(2, 3)` inside? `(3, 0)`? → yes, no. Write `inBounds`.

**Phase 29.2 — চার দিকের প্রতিবেশী** ⬜
- **P29.2** 🟢 ⬜ — 🌍 Minesweeper — পাশের ঘরগুলো। **EN:** List the in-bounds neighbors of `(0, 0)` in a 3×3 grid using the directions array. → `(1,0), (0,1)`

**Phase 29.3 — Transpose হাতে** ⬜
- **P29.3** 🟢 ⬜ — **EN:** Transpose `[[1,2],[3,4]]` by hand. → `[[1,3],[2,4]]`. Which cells swap?

**Phase 29.4 — Rotate = transpose + row উল্টানো** ⬜
- **P29.4** 🟢 ⬜ — 🌍 phone ঘোরালে ছবি ৯০°। **EN:** Transpose `[[1,2],[3,4]]` then reverse each row. → `[[3,1],[4,2]]` — is that a 90° clockwise rotation?

### ★ মূল problem

#### ★ MX1 · 867. Transpose Matrix 🟢 Easy ⬜
🔗 [LC 867](https://leetcode.com/problems/transpose-matrix/) (হুবহু)
🌍 **Real-life:** Excel-এ row আর column অদলবদল (Paste Special → Transpose)।

**EN:** Given a 2D integer array `matrix`, return the transpose of `matrix`. The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
```
Example 1: Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]   Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2: Input: matrix = [[1,2,3],[4,5,6]]           Output: [[1,4],[2,5],[3,6]]
```
**Function:** `var transpose = function (matrix) {}`
**বাংলা:** row আর column অদলবদল। আয়তাকার হলে নতুন matrix লাগে কেন?
**⏱️ লক্ষ্য:** Time O(r × c) · Space O(r × c)

#### ★ MX2 · 54. Spiral Matrix 🟡 Medium ⬜
🔗 [LC 54](https://leetcode.com/problems/spiral-matrix/) (হুবহু)
🌍 **Real-life:** শামুকের খোলের মতো বাইরে থেকে ভেতরে ঘোরা।

**EN:** Given an `m x n` matrix, return all elements of the matrix in spiral order.
```
Example 1: Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]              Output: [1,2,3,6,9,8,7,4,5]
Example 2: Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]     Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```
**Function:** `var spiralOrder = function (matrix) {}`
**বাংলা:** চার সীমা; এক row বা এক column-এর matrix-এ test।
**🧠 ভাবনা (ভাঙতে শেখো):** চারটা ছোট কাজ বারবার — উপরের row (বাঁ→ডান), ডানের col (উপর→নিচ), নিচের row (ডান→বাঁ), বাঁয়ের col (নিচ→উপর) — প্রতিটার পরে একটা সীমা সরাও।
**⏱️ লক্ষ্য:** Time O(r × c) · Space O(1) extra

#### ★ MX3 · 48. Rotate Image 🟡 Medium ⬜
🔗 [LC 48](https://leetcode.com/problems/rotate-image/) (হুবহু)
🌍 **Real-life:** photo app-এ ছবি ৯০° ঘোরানো।

**EN:** You are given an `n x n` 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix.
```
Example 1: Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]   Output: [[7,4,1],[8,5,2],[9,6,3]]
```
**Function:** `var rotate = function (matrix) {}`
**বাংলা:** in-place ৯০° ঘোরাও (P29.4)।
**⏱️ লক্ষ্য:** Time O(n²) · Space O(1)

#### ★ MX4 · 73. Set Matrix Zeroes 🟡 Medium ⬜
🔗 [LC 73](https://leetcode.com/problems/set-matrix-zeroes/) (হুবহু)
🌍 **Real-life:** spreadsheet — একটা ঘরে error থাকলে সেই row আর column বাতিল।

**EN:** Given an `m x n` integer matrix, if an element is `0`, set its entire row and column to `0`'s. You must do it in place.
```
Example 1: Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]           Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2: Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]     Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```
**Follow up:** Could you devise a constant space solution?
**Function:** `var setZeroes = function (matrix) {}`
**বাংলা:** (ক) O(r + c) space — কোন row/col শূন্য হবে আলাদা রাখো (খ) O(1) — প্রথম row/col-কে খাতা।
**🧠 ভাবনা:** সাথে সাথে 0 বসালে কী ভুল হয়? (নতুন 0 দেখে আরো row মুছে যায়)
**⏱️ লক্ষ্য:** Time O(r × c) · Space O(1)

#### ○ MX5 · 289. Game of Life 🟡 ⬜
🔗 [LC 289](https://leetcode.com/problems/game-of-life/) (হুবহু)
**বাংলা:** in-place — দুই-অবস্থার encoding (পুরনো আর নতুন একসাথে)।

#### ○ MX6 · 240. Search a 2D Matrix II 🟡 ⬜
🔗 [LC 240](https://leetcode.com/problems/search-a-2d-matrix-ii/) (হুবহু)
**বাংলা:** উপর-ডান কোণ থেকে শুরু — বড় হলে বামে, ছোট হলে নিচে।

**বলো:** *"I keep four boundaries — top, bottom, left and right. After walking one side, I shrink that boundary, until the boundaries cross."*

---

## Day 9 · W10 D2 · মঙ্গল ৮ ডিসে — Topic 30: Graph ১ — Representation · DFS · BFS ★★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- আগে প্রশ্ন: **node কী? edge কী? directed? weighted?**
- edge list → **adjacency list** (undirected হলে দুই দিকেই)।
- **visited** ছাড়া cycle-এ অসীম loop।
- DFS (recursive বা stack) · BFS (queue, head index) — দুটোই O(V + E)।

**Skeleton drill:** 3.19 আর 3.21 — প্রতিটা ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 30.1 — Graph-এর শব্দ** ⬜
- **P30.1** 🟢 ⬜ — 🌍 শহর (node) আর রাস্তা (edge); একমুখী রাস্তা = directed। **EN:** For edges `[[0,1],[1,2],[2,0]]`: how many nodes, edges? Is there a cycle? → 3, 3, yes

**Phase 30.2 — Adjacency list বানানো** ⬜
- **P30.2** 🟢 ⬜ — **EN:** Build the undirected adjacency list for `n = 4, edges = [[0,1],[0,2],[2,3]]`. → `0: [1,2], 1: [0], 2: [0,3], 3: [2]`

**Phase 30.3 — Visited কেন** ⬜
- **P30.3** 🟢 ⬜ — **EN:** Run DFS on P30.1's triangle without a visited set (mentally). What happens? → infinite loop

**Phase 30.4 — DFS বনাম BFS ক্রম** ⬜
- **P30.4** 🟢 ⬜ — 🌍 গুজব — DFS = একজন একজন করে গভীরে; BFS = সবাই একসাথে পাশের সবাইকে। **EN:** From node 0 in P30.2's graph, write DFS and BFS visit orders. → DFS `0 1 2 3`, BFS `0 1 2 3` (try another graph where they differ!)

### ★ মূল problem

#### ★ G1 · buildGraph Helper 🟢 ⬜
🔗 LeetCode-এ হুবহু নেই (সব graph problem-এ লাগবে)
**EN:** `buildGraph(n, edges, directed)` → adjacency list (array of arrays).
**বাংলা:** test আর পরের সব problem-এর জন্য helper।

#### ★ G2 · 1971. Find if Path Exists in Graph 🟢 Easy ⬜
🔗 [LC 1971](https://leetcode.com/problems/find-if-path-exists-in-graph/) (হুবহু)
🌍 **Real-life:** Google Maps — A থেকে B-তে কোনো রাস্তা আছে কি?

**EN:** There is a bi-directional graph with `n` vertices labeled `0` to `n - 1`, and edges given as `edges[i] = [ui, vi]`. Determine if there is a valid path from `source` to `destination`.
```
Example 1: Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2   Output: true
Example 2: Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5   Output: false
```
**Function:** `var validPath = function (n, edges, source, destination) {}`
**বাংলা:** DFS আর BFS দুটোই।
**⏱️ লক্ষ্য:** Time O(V + E) · Space O(V + E)

#### ★ G3 · 547. Number of Provinces 🟡 Medium ⬜
🔗 [LC 547](https://leetcode.com/problems/number-of-provinces/) (হুবহু)
🌍 **Real-life:** কতগুলো আলাদা বন্ধু-দল (যারা কোনোভাবে যুক্ত)।

**EN:** There are `n` cities. `isConnected[i][j] = 1` if city `i` and city `j` are directly connected. A province is a group of directly or indirectly connected cities. Return the total number of provinces.
```
Example 1: Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]   Output: 2
Example 2: Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]   Output: 3
```
**Function:** `var findCircleNum = function (isConnected) {}`
**বাংলা:** connected component গোনো — **adjacency matrix** input!
**🧠 ভাবনা:** যতবার একটা নতুন (unvisited) city থেকে DFS শুরু করছ — ততটা province।
**⏱️ লক্ষ্য:** Time O(n²) · Space O(n)

#### ○ G4 · Distances From a Node ⬜
**EN:** Return the BFS distance from node 0 to every node (unweighted). **বাংলা:** BFS level = দূরত্ব।

**বলো:** *"I build an adjacency list from the edges, then run DFS from the source with a visited set, so each node and edge is processed once — O(V + E)."*

---

## Day 10 · W10 D3 · বুধ ৯ ডিসে — Topic 30: Graph ২ — Grid = Graph ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **প্রতিটা cell = node, পাশের cell = edge** — আলাদা graph বানাতে হয় না।
- visited: আলাদা Set (`"r,c"` key — array key-র ফাঁদ মনে আছে?) বা grid-এই চিহ্ন (mutate করা যাবে কিনা জিজ্ঞেস)।
- connected component গোনা = **যতবার নতুন DFS শুরু**।
- বড় grid-এ recursion গভীর হয় → iterative BFS নিরাপদ (interview-এ উল্লেখ করো)।

**Skeleton drill:** 3.20 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 30.5 — Cell থেকে ছড়ানো** ⬜
- **P30.5** 🟢 ⬜ — 🌍 Paint app-এর bucket tool। **EN:** In `[[1,1,0],[1,0,0],[0,0,1]]`, starting from `(0,0)`, which cells are reached through 1s? → `(0,0),(0,1),(1,0)`

**Phase 30.6 — দ্বীপ গোনা হাতে** ⬜
- **P30.6** 🟢 ⬜ — **EN:** Count islands in P30.5 by hand. How many times did you start a new "spread"? → `2`

### ★ মূল problem

#### ★ G5 · 733. Flood Fill 🟢 Easy ⬜
🔗 [LC 733](https://leetcode.com/problems/flood-fill/) (হুবহু)
🌍 **Real-life:** MS Paint-এর bucket fill।

**EN:** An image is an `m x n` grid where `image[i][j]` is the pixel value. Given `sr`, `sc`, and `color`, perform a flood fill: change the starting pixel and all pixels connected 4-directionally with the same original color to `color`. Return the modified image.
```
Example 1: Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
           Output: [[2,2,2],[2,2,0],[2,0,1]]
Example 2: Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
           Output: [[0,0,0],[0,0,0]]
```
**Function:** `var floodFill = function (image, sr, sc, color) {}`
**বাংলা:** একই রঙের জোড়া অঞ্চল নতুন রঙে। **নতুন রং = পুরনো রং হলে কী হয়?** (Example 2 — infinite loop-এর ফাঁদ)
**⏱️ লক্ষ্য:** Time O(r × c) · Space O(r × c)

#### ★ G6 · 200. Number of Islands 🟡 Medium ⬜
🔗 [LC 200](https://leetcode.com/problems/number-of-islands/) (হুবহু)
🌍 **Real-life:** satellite map-এ কতগুলো আলাদা দ্বীপ।

**EN:** Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
```
Example 1: Input: grid = [["1","1","1","1","0"],
                          ["1","1","0","1","0"],
                          ["1","1","0","0","0"],
                          ["0","0","0","0","0"]]   Output: 1
Example 2: Input: grid = [["1","1","0","0","0"],
                          ["1","1","0","0","0"],
                          ["0","0","1","0","0"],
                          ["0","0","0","1","1"]]   Output: 3
```
**Function:** `var numIslands = function (grid) {}`
**বাংলা:** কতগুলো আলাদা দ্বীপ — DFS আর BFS। (cell-এর মান string `"1"`, number না!)
**⏱️ লক্ষ্য:** Time O(r × c) · Space O(r × c)

#### ★ G7 · 695. Max Area of Island 🟡 Medium ⬜
🔗 [LC 695](https://leetcode.com/problems/max-area-of-island/) (হুবহু)
🌍 **Real-life:** সবচেয়ে বড় জমির টুকরা।
**EN:** Return the maximum area of an island (number of 1-cells). If there is no island, return `0`. Small example: `[[1,1,0],[0,1,0],[0,0,1]]` → `3`.
**বাংলা:** DFS কী **ফেরত** দেবে? (এই অংশের cell সংখ্যা)
**⏱️ লক্ষ্য:** Time O(r × c) · Space O(r × c)

#### ○ G8 · 130. Surrounded Regions 🟡 ⬜
🔗 [LC 130](https://leetcode.com/problems/surrounded-regions/) (হুবহু)
**বাংলা:** উল্টো চিন্তা — সীমানা থেকে যেগুলো পৌঁছানো যায়, সেগুলো বাঁচবে।

**বলো:** *"Each land cell is a node, and adjacent land cells are connected. Every time I find unvisited land, I start a DFS that marks the whole island, and I count one island."*

---

## Day 11 · W10 D4 · বৃহস্পতি ১০ ডিসে — Topic 30 + 33: BFS Shortest Path · Multi-source ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **unweighted-এ shortest path = BFS** — প্রথম যেবার পৌঁছাই, সেটাই সবচেয়ে কম ধাপ। (DFS কেন না?)
- **Multi-source:** শুরুতেই সব উৎস queue-তে।
- level গোনা = মিনিট / ধাপ।
- **queue-তে ঢোকানোর সময়ই visited** চিহ্ন (বের করার সময় না — নইলে একই cell বারবার ঢোকে)।

### 📘 Concept phases + ছোট problem

**Phase 33.1 — BFS = দূরত্ব অনুযায়ী** ⬜
- **P33.1** 🟢 ⬜ — 🌍 পুকুরে ঢিল — ঢেউ বৃত্তে বৃত্তে ছড়ায়। **EN:** In a 3×3 empty grid from `(0,0)`, write each cell's BFS distance. → corner `(2,2)` = `4`

**Phase 33.2 — একসাথে অনেক উৎস** ⬜
- **P33.2** 🟢 ⬜ — **EN:** In `[0, 1, 1, 1, 0]` (0 = fire), with both 0s starting together, how many steps until all cells burn? → `2`

### ★ মূল problem

#### ★ G9 · 994. Rotting Oranges 🟡 Medium ⬜
🔗 [LC 994](https://leetcode.com/problems/rotting-oranges/) (হুবহু)
🌍 **Real-life:** virus ছড়ানো — প্রতি মিনিটে পাশের সবাই আক্রান্ত।

**EN:** You are given an `m x n` grid where each cell is `0` (empty), `1` (fresh orange), or `2` (rotten orange). Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.
```
Example 1: Input: grid = [[2,1,1],[1,1,0],[0,1,1]]   Output: 4
Example 2: Input: grid = [[2,1,1],[0,1,1],[1,0,1]]   Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten.
Example 3: Input: grid = [[0,2]]                     Output: 0
```
**Function:** `var orangesRotting = function (grid) {}`
**বাংলা:** সব কমলা পচতে কত মিনিট; কখনো সব না পচলে -1।
**🧠 ভাবনা:** শুরুতে কী কী গুনে রাখবে? (সব পচা queue-তে, তাজা কয়টা)
**⏱️ লক্ষ্য:** Time O(r × c) · Space O(r × c)

#### ★ G10 · 1091. Shortest Path in Binary Matrix 🟡 Medium ⬜
🔗 [LC 1091](https://leetcode.com/problems/shortest-path-in-binary-matrix/) (হুবহু)
🌍 **Real-life:** game-এ চরিত্র ৮ দিকে হাঁটতে পারে — বাধা এড়িয়ে সবচেয়ে ছোট পথ।

**EN:** Given an `n x n` binary matrix `grid`, return the length of the shortest clear path from top-left to bottom-right (cells are `0`; moves are 8-directional; length counts cells). If there is no clear path, return `-1`.
```
Example 1: Input: grid = [[0,1],[1,0]]                 Output: 2
Example 2: Input: grid = [[0,0,0],[1,1,0],[1,1,0]]     Output: 4
Example 3: Input: grid = [[1,0,0],[1,1,0],[1,1,0]]     Output: -1
```
**Function:** `var shortestPathBinaryMatrix = function (grid) {}`
**বাংলা:** ৮ দিক — directions array-তে কোণাকুণি যোগ।
**⏱️ লক্ষ্য:** Time O(n²) · Space O(n²)

#### ○ G11 · 542. 01 Matrix 🟡 ⬜
🔗 [LC 542](https://leetcode.com/problems/01-matrix/) (হুবহু)
**EN:** Distance of the nearest 0 for each cell. `[[0,0,0],[0,1,0],[1,1,1]]` → `[[0,0,0],[0,1,0],[1,2,1]]`. **বাংলা:** multi-source — সব 0 একসাথে শুরু।

**বলো:** *"BFS explores nodes in order of distance, so the first time I reach the target is the shortest path. I put all rotten oranges in the queue at the start, and each BFS level is one minute."*

---

## Day 12 · W10 D5 · শুক্র ১১ ডিসে — Topic 30: Graph ৪ — Clone · উল্টো চিন্তা ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Clone:** Map (পুরনো node → নতুন node) — আগে তৈরি হয়ে থাকলে আবার না; এই Map-ই visited।
- **উল্টো দিক থেকে চিন্তা:** "কোন cell থেকে সমুদ্রে যাওয়া যায়" → "সমুদ্র থেকে কোন cell-এ ওঠা যায়"।
- directed graph-এ cycle: **তিন রং** — unvisited / visiting / done।

### 📘 Concept phases + ছোট problem

**Phase 30.7 — Old → new Map** ⬜
- **P30.7** 🟢 ⬜ — 🌍 পুরো বন্ধু-তালিকার কপি — প্রত্যেকের কপির বন্ধুও কপি। **EN:** Deep-copy `{ a: { friend: b }, b: { friend: a } }` (a cycle). Why does plain recursion loop forever, and how does a Map fix it?

**Phase 30.8 — তিন রং** ⬜
- **P30.8** 🟢 ⬜ — **EN:** For directed edges `0→1, 1→2, 2→0`, run DFS with colors. When do you meet a "visiting" (gray) node? → at `2→0` → cycle

### ★ মূল problem

#### ★ G12 · 133. Clone Graph 🟡 Medium ⬜
🔗 [LC 133](https://leetcode.com/problems/clone-graph/) (হুবহু)
🌍 **Real-life:** social network-এর একটা অংশ test server-এ কপি করা।

**EN:** Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node contains a value (`int`) and a list (`List[Node]`) of its neighbors.
```
Example 1: Input: adjList = [[2,4],[1,3],[2,4],[1,3]]   Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: 4 nodes; node 1's neighbors are 2 and 4, node 2's are 1 and 3, etc.
Example 2: Input: adjList = [[]]                        Output: [[]]
Example 3: Input: adjList = []                          Output: []
```
**Function:** `var cloneGraph = function (node) {}`
**বাংলা:** পুরো graph-এর গভীর কপি।
**⏱️ লক্ষ্য:** Time O(V + E) · Space O(V)

#### ○ G13 · 417. Pacific Atlantic Water Flow 🟡 ⬜
🔗 [LC 417](https://leetcode.com/problems/pacific-atlantic-water-flow/) (হুবহু)
**বাংলা:** দুই সমুদ্র থেকে উল্টো DFS, দুটোতেই পৌঁছানো cell।

#### ○ G14 · Cycle in Directed Graph ⬜
🔗 কাছাকাছি: [LC 207](https://leetcode.com/problems/course-schedule/)
**EN:** Return `true` if a directed graph has a cycle, using DFS with three colors. **বাংলা:** কাল topo sort-এ লাগবে।

**বলো:** *"I keep a map from each original node to its copy. Before cloning a neighbor, I check the map, which both avoids duplicates and handles cycles."*

---

## Day 13 · W10 D6 · শনি ১২ ডিসে — Topic 31: Topological Sort ★ ⬜

**Interview-এ যেভাবে আসে:** course prerequisite, build system (কোন package আগে), task dependency, spreadsheet formula ক্রম।

**🧠 এই topic-এ কীভাবে ভাবব:**
- "**আগে X, তারপর Y**" ধরনের নিয়ম + ক্রম ঠিক করা → topo sort।
- **Indegree:** কতজন আমার আগে আসতে হবে।
- **Kahn:** indegree 0-দের queue-তে → বের করে order-এ → প্রতিবেশীর indegree কমাও → 0 হলে queue-তে।
- `order.length < n` → **cycle** (ক্রম অসম্ভব)।
- **edge-এর দিক সাবধানে:** `[a, b]` মানে "b আগে, তারপর a"।

**Skeleton drill:** 3.22 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 31.1 — Dependency আঁকা** ⬜
- **P31.1** 🟢 ⬜ — 🌍 সকালের রুটিন: ঘুম থেকে ওঠা → দাঁত ব্রাশ → নাস্তা; জামা পরা → জুতা। **EN:** Draw arrows and write one valid order.

**Phase 31.2 — Indegree গোনা** ⬜
- **P31.2** 🟢 ⬜ — **EN:** For prerequisites `[[1,0],[2,0],[3,1],[3,2]]` (`[a, b]` = b before a), compute indegrees. → `0:0, 1:1, 2:1, 3:2`

**Phase 31.3 — Kahn হাতে** ⬜
- **P31.3** 🟢 ⬜ — **EN:** Run Kahn's algorithm on P31.2 by hand. → e.g. `0, 1, 2, 3`

### ★ মূল problem

#### ★ TS1 · 207. Course Schedule 🟡 Medium ⬜
🔗 [LC 207](https://leetcode.com/problems/course-schedule/) (হুবহু)
🌍 **Real-life:** university-র course — prerequisite মেনে সব course নেওয়া সম্ভব?

**EN:** There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. Return `true` if you can finish all courses. Otherwise, return `false`.
```
Example 1: Input: numCourses = 2, prerequisites = [[1,0]]         Output: true
Explanation: To take course 1 you should have finished course 0. So it is possible.
Example 2: Input: numCourses = 2, prerequisites = [[1,0],[0,1]]   Output: false
Explanation: Course 1 needs 0, and course 0 needs 1. So it is impossible.
```
**Function:** `var canFinish = function (numCourses, prerequisites) {}`
**বাংলা:** সব course শেষ করা সম্ভব? (cycle আছে কিনা)
**⏱️ লক্ষ্য:** Time O(V + E) · Space O(V + E)

#### ★ TS2 · 210. Course Schedule II 🟡 Medium ⬜
🔗 [LC 210](https://leetcode.com/problems/course-schedule-ii/) (হুবহু)
**EN:** Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible, return an empty array.
```
Example 1: Input: numCourses = 2, prerequisites = [[1,0]]                       Output: [0,1]
Example 2: Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]     Output: [0,2,1,3]  (or [0,1,2,3])
Example 3: Input: numCourses = 1, prerequisites = []                            Output: [0]
```
**Function:** `var findOrder = function (numCourses, prerequisites) {}`
**বাংলা:** একটা বৈধ ক্রম; অসম্ভব হলে `[]`।
**⏱️ লক্ষ্য:** Time O(V + E) · Space O(V + E)

- ⏳ Alien Dictionary → January

**বলো:** *"I count how many prerequisites each course has. I start with courses that have none, and every time I finish one, I reduce the count of the courses that depend on it. If I can't process all courses, there's a cycle."*

### 🚪 Gate — Topic 29–31 (Matrix · Graph · Topo) ⬜

---

## Day 14 · W10 D7 · রবি ১৩ ডিসে — Practical (Rate Limiter) · Mock ৩ · Revision ⬜

### 🛠️ Practical JS ৯

#### ★ P20 · Rate Limiter 🟡 ⬜
🔗 কাছাকাছি: [LC 359 · Logger Rate Limiter](https://leetcode.com/problems/logger-rate-limiter/) (premium) · [LC 933](https://leetcode.com/problems/number-of-recent-calls/)
🌍 **Real-life:** API-তে প্রতি user প্রতি মিনিটে সর্বোচ্চ ১০০ request।
**EN:** `allow(userId, timestamp)` returns `true` if the user has made fewer than N requests in the last 60 seconds. (a) Sliding log — a queue per user (like W8's Recent Calls) (b) Fixed window counter. Compare memory vs accuracy.
**বাংলা:** দুই উপায় আর তুলনা — memory বনাম সঠিকতা।

#### ○ P21 · Token Bucket ⬜
**বাংলা:** ধারণা — কখন ভালো (হঠাৎ burst সামলানো)।

### 🎤 Mock ৩ (৪৫ মিনিট)
`interview` — graph/matrix থেকে।

### 🔁 Re-solve
- ⬜ MX2 Spiral · ⬜ G6 Islands · ⬜ G9 Rotting Oranges · ⬜ TS2 Course Schedule II · ⬜ W9-এর HP5 Top K

### 🕵️ Unseen

#### ★ U6 · Degrees of Separation ⬜
🌍 **Real-life:** LinkedIn — "2nd degree connection"।
**EN:** Given `friendships = [[a, b], ...]` and two users, return how many steps apart they are (friend-of-friend = 2), or `-1` if not connected.
**বাংলা:** আগে লেখো: Pattern ___ কারণ ___।

---

# 📙 WEEK 3 (W11) — Union Find · Shortest Path (Dijkstra) · Backtracking · Greedy (শুরু)

**সপ্তাহের লক্ষ্য:**
1. Union Find আর Dijkstra — **core ধারণা + একটা ★ problem**; বিস্তারিত January-তে।
2. **Backtracking skeleton** (choose → explore → undo) এতটা হাতে যে subsets/permutations/combinations ১০ মিনিটে।
3. Greedy: "এখনকার সেরা সিদ্ধান্ত" — আর **কেন** সেটা সামগ্রিক সেরা, এক লাইনে যুক্তি।

---

## Day 15 · W11 D1 · সোম ১৪ ডিসে — Topic 32: Union Find / DSU ★ ⬜

**Interview-এ যেভাবে আসে:** "দুটো account কি একই মানুষের?", "network-এ কতগুলো আলাদা group?", "কোন connection বাড়তি (cycle বানায়)?"

**🧠 এই topic-এ কীভাবে ভাবব:**
- **বারবার connect** + **"একই group কিনা"** প্রশ্ন → DSU।
- প্রতিটা node-এর `parent`; শুরুতে নিজেই নিজের parent (প্রত্যেকে নিজের দলের নেতা)।
- `find(x)`: নেতা খোঁজো (+ path compression); `union(a, b)`: দুই নেতার একজনকে অন্যজনের নিচে (+ size)।
- connect করতে গিয়ে দেখলে **আগেই একই নেতা** → এই edge cycle বানায়।

**Skeleton drill:** 3.23 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 32.1 — Parent array** ⬜
- **P32.1** 🟢 ⬜ — 🌍 প্রতিটা ছাত্রের একজন class captain — captain-এর captain… শেষে যে নিজেই নিজের captain, সে নেতা। **EN:** `parent = [0, 0, 1, 3]`. Who is the leader of 2? Of 3? → `0`, `3`

**Phase 32.2 — Union** ⬜
- **P32.2** 🟢 ⬜ — **EN:** Start with `parent = [0,1,2,3]`. Do `union(0,1)`, `union(2,3)`, `union(1,3)`. Write `parent` after each. How many groups at the end? → `1`

**Phase 32.3 — Path compression** ⬜
- **P32.3** 🟢 ⬜ — **EN:** With chain `3 → 2 → 1 → 0`, after `find(3)` with compression, what is `parent`? → everyone points to `0`

### ★ মূল problem

#### ★ UF1 · DSU Class 🟡 ⬜
🔗 LeetCode-এ হুবহু নেই (পরের সব DSU problem-এ লাগবে)
**EN:** Implement `DSU(n)` with `find` (path compression), `union` (by size, returns `false` if already joined), and `count` (number of groups).
**বাংলা:** নিজের DSU class।
**⏱️ লক্ষ্য:** প্রতিটা operation প্রায় O(1)

#### ★ UF2 · 547. Number of Provinces (DSU) 🟡 Medium ⬜
🔗 [LC 547](https://leetcode.com/problems/number-of-provinces/) (হুবহু)
**EN:** Same as W10's G3. `[[1,1,0],[1,1,0],[0,0,1]]` → `2`.
**বাংলা:** W10-এ DFS দিয়ে করেছিলে; এবার DSU। তুলনা।

#### ★ UF3 · 684. Redundant Connection 🟡 Medium ⬜
🔗 [LC 684](https://leetcode.com/problems/redundant-connection/) (হুবহু)
🌍 **Real-life:** office network-এ কোন cable বাড়তি (loop তৈরি করছে)।

**EN:** A tree with `n` nodes had one additional edge added. The graph is given as `edges` where `edges[i] = [ai, bi]`. Return an edge that can be removed so that the resulting graph is a tree of `n` nodes. If there are multiple answers, return the answer that occurs last in the input.
```
Example 1: Input: edges = [[1,2],[1,3],[2,3]]                 Output: [2,3]
Example 2: Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]     Output: [1,4]
```
**Function:** `var findRedundantConnection = function (edges) {}`
**বাংলা:** কোন edge cycle বানায়? (union `false` দিলে সেটাই)
**⏱️ লক্ষ্য:** Time O(n · α(n)) ≈ O(n) · Space O(n)

#### ○ UF4 · 721. Accounts Merge 🟡 ⬜
🔗 [LC 721](https://leetcode.com/problems/accounts-merge/) (হুবহু)
**বাংলা:** একই email থাকলে একই মানুষ — DSU + Map।

#### ○ UF5 · Graph Valid Tree 🟡 ⬜
🔗 [LC 261](https://leetcode.com/problems/graph-valid-tree/) (premium)
**বাংলা:** n − 1 edge আর কোনো cycle নেই।

**বলো:** *"Union-find keeps a parent pointer for each node. If two nodes already share the same root when I try to connect them, that edge creates a cycle."*

---

## Day 16 · W11 D2 · মঙ্গল ১৫ ডিসে — Topic 33: Shortest Path — Dijkstra ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- weight আছে → **কম ধাপ ≠ কম খরচ** → BFS যথেষ্ট না।
- **Dijkstra:** min heap-এ `[distance, node]`; সবচেয়ে কাছেরটা বের করো; প্রতিবেশীর দূরত্ব কমলে heap-এ দাও (relax); পুরনো (stale) entry skip।
- **negative weight-এ Dijkstra ভুল** → Bellman-Ford (ধারণা)। Floyd-Warshall — সব জোড়া, O(n³) (শুধু নাম)।
- W9-এর তোমার MinHeap এখানে কাজে লাগবে।

### 📘 Concept phases + ছোট problem

**Phase 33.3 — BFS কেন ভুল** ⬜
- **P33.3** 🟢 ⬜ — 🌍 ২টা বাস বদলে ৫০ টাকা বনাম ১টা taxi-তে ৩০০ টাকা — কম ধাপ, বেশি খরচ। **EN:** Edges `A→B (1), B→C (1), A→C (5)`. BFS says A→C is 1 step. What's the cheapest cost? → `2`

**Phase 33.4 — Relax হাতে** ⬜
- **P33.4** 🟢 ⬜ — **EN:** Run Dijkstra by hand from A on P33.3. Write the `dist` table after each pop. → `A:0, B:1, C:2`

### ★ মূল problem

#### ★ SP1 · 743. Network Delay Time 🟡 Medium ⬜
🔗 [LC 743](https://leetcode.com/problems/network-delay-time/) (হুবহু)
🌍 **Real-life:** একটা server থেকে update সব server-এ পৌঁছাতে কত সময়।

**EN:** You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (ui, vi, wi)`. We will send a signal from a given node `k`. Return the minimum time it takes for all the `n` nodes to receive the signal. If it is impossible for all the `n` nodes to receive the signal, return `-1`.
```
Example 1: Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2   Output: 2
Example 2: Input: times = [[1,2,1]], n = 2, k = 1                   Output: 1
Example 3: Input: times = [[1,2,1]], n = 2, k = 2                   Output: -1
```
**Function:** `var networkDelayTime = function (times, n, k) {}`
**বাংলা:** Dijkstra + তোমার MinHeap; উত্তর = সবচেয়ে দূরের node-এর দূরত্ব।
**⏱️ লক্ষ্য:** Time O((V + E) log V) · Space O(V + E)

#### ○ SP2 · 1631. Path With Minimum Effort 🟡 ⬜
🔗 [LC 1631](https://leetcode.com/problems/path-with-minimum-effort/) (হুবহু)
**বাংলা:** grid + Dijkstra, বা binary search + BFS!

#### ○ SP3 · 787. Cheapest Flights Within K Stops 🟡 ⬜
🔗 [LC 787](https://leetcode.com/problems/cheapest-flights-within-k-stops/) (হুবহু)
**বাংলা:** Bellman-Ford ধরনের — k+1 বার relax।

- ⏳ Word Ladder → January

**বলো:** *"With weighted edges, fewer steps doesn't mean lower cost, so I use Dijkstra: a min-heap always gives me the closest unprocessed node, and I relax its neighbors. That's O((V + E) log V)."*

### 🚪 Gate — Topic 32–33 (DSU · Dijkstra) ⬜

---

## Day 17 · W11 D3 · বুধ ১৬ ডিসে — Topic 34: Backtracking ১ — Skeleton · Subsets · Combinations ★★ ⬜

**Interview-এ যেভাবে আসে:** "সব সম্ভাব্য…", "কত উপায়ে…" (n ছোট হলে), phone keypad, password generator, team selection।

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Choose → Explore → Undo।**
- **Decision tree কাগজে আঁকো** — প্রতিটা problem-এ আগে।
- **`start` index:** combination-এ পেছনে ফেরা নিষেধ (`[1,2]` আর `[2,1]` একই)।
- কখন result-এ রাখি: **প্রতিটা node-এ** (subsets) বনাম **শুধু পাতায়** (দৈর্ঘ্য k হলে)।
- **Pruning:** অসম্ভব শাখা আগেই কাটা।
- complexity = পাতার সংখ্যা × প্রতিটা কপির খরচ।

**Skeleton drill:** 3.25 — ৩ বার।

### 📘 Concept phases + ছোট problem

**Phase 34.1 — Decision tree, start index সহ** ⬜
- **P34.1** 🟢 ⬜ — 🌍 ৪ জন থেকে ২ জনের দল — একই দল দুবার গোনা যাবে না। **EN:** Draw the tree for choosing 2 from `[1,2,3]` with a `start` index. List the leaves. → `[1,2] [1,3] [2,3]`

**Phase 34.2 — কখন record** ⬜
- **P34.2** 🟢 ⬜ — **EN:** In the subsets tree of `[1,2]`, mark every node where you record. Compare with combinations where you record only at length k.

**Phase 34.3 — Pruning** ⬜
- **P34.3** 🟢 ⬜ — **EN:** Choosing 3 from `[1..4]`: if you're at `start = 4` with an empty path, can you still reach length 3? → no → prune

### ★ মূল problem

#### ★ BT1 · 78. Subsets (skeleton দিয়ে, ৮ মিনিটে) 🟡 Medium ⬜
🔗 [LC 78](https://leetcode.com/problems/subsets/) (হুবহু)
🌍 **Real-life:** burger-এর topping combination।
**EN:** `[1,2,3]` → `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`.
**বাংলা:** November W7-এ করেছিলে; এবার skeleton দিয়ে ৮ মিনিটে।
**⏱️ লক্ষ্য:** Time O(2ⁿ · n) · Space O(n)

#### ★ BT2 · 77. Combinations 🟡 Medium ⬜
🔗 [LC 77](https://leetcode.com/problems/combinations/) (হুবহু)
🌍 **Real-life:** ১১ জন থেকে ৫ জনের team — কত রকম।

**EN:** Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`. You may return the answer in any order.
```
Example 1: Input: n = 4, k = 2   Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Example 2: Input: n = 1, k = 1   Output: [[1]]
```
**Function:** `var combine = function (n, k) {}`
**বাংলা:** 1..n থেকে k-টা। pruning: বাকি element যথেষ্ট না থাকলে থামো।
**⏱️ লক্ষ্য:** Time O(C(n,k) · k) · Space O(k)

#### ○ BT3 · 90. Subsets II 🟡 ⬜
🔗 [LC 90](https://leetcode.com/problems/subsets-ii/) (হুবহু)
**EN:** `[1,2,2]` → `[[],[1],[1,2],[1,2,2],[2],[2,2]]`. **বাংলা:** sort + একই level-এ একই মান skip (`i > start && nums[i] === nums[i-1]`)।

**বলো:** *"At each step I choose an element, recurse to explore that choice, and then undo it before trying the next one. The `start` index prevents me from generating the same combination in a different order."*

---

## Day 18 · W11 D4 · বৃহস্পতি ১৭ ডিসে — Topic 34: Backtracking ২ — Permutations · Combination Sum ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **ক্রম গুরুত্বপূর্ণ** (permutation) → `start` না, **`used` array**; প্রতিটা অবস্থানে যেকোনো অব্যবহৃত।
- **একই element বারবার নেওয়া যায়** → recurse-এ `i` (না `i + 1`)।
- target ছাড়ালে থামো (sorted হলে `break` — বাকিরা আরো বড়)।

### 📘 Concept phases + ছোট problem

**Phase 34.4 — `used` array** ⬜
- **P34.4** 🟢 ⬜ — 🌍 ৩ জনকে লাইনে দাঁড় করানো — প্রথম জায়গায় যেকোনো ৩ জন, দ্বিতীয়তে বাকি ২… **EN:** Draw the tree for permutations of `[1,2]` using `used`. → `[1,2] [2,1]`

**Phase 34.5 — `i` বনাম `i + 1`** ⬜
- **P34.5** 🟢 ⬜ — **EN:** For candidates `[2,3]`, target 6, why must the recursive call pass `i` (not `i + 1`) to find `[2,2,2]`?

### ★ মূল problem

#### ★ BT4 · 46. Permutations 🟡 Medium ⬜
🔗 [LC 46](https://leetcode.com/problems/permutations/) (হুবহু)
🌍 **Real-life:** ৩টা বইয়ের তাকে সাজানোর সব ক্রম।

**EN:** Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.
```
Example 1: Input: nums = [1,2,3]   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2: Input: nums = [0,1]     Output: [[0,1],[1,0]]
Example 3: Input: nums = [1]       Output: [[1]]
```
**Function:** `var permute = function (nums) {}`
**⏱️ লক্ষ্য:** Time O(n! · n) · Space O(n)

#### ★ BT5 · 39. Combination Sum 🟡 Medium ⬜
🔗 [LC 39](https://leetcode.com/problems/combination-sum/) (হুবহু)
🌍 **Real-life:** ২, ৩, ৫ টাকার কয়েন দিয়ে ঠিক ৮ টাকা — সব উপায়।

**EN:** Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. The same number may be chosen from `candidates` an unlimited number of times.
```
Example 1: Input: candidates = [2,3,6,7], target = 7   Output: [[2,2,3],[7]]
Example 2: Input: candidates = [2,3,5], target = 8     Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3: Input: candidates = [2], target = 1         Output: []
```
**Function:** `var combinationSum = function (candidates, target) {}`
**বাংলা:** একই সংখ্যা বারবার নেওয়া যায় — যোগফল target এমন সব combination।
**⏱️ লক্ষ্য:** exponential — pruning দিয়ে কমাও

#### ○ BT6 · 47. Permutations II 🟡 ⬜
🔗 [LC 47](https://leetcode.com/problems/permutations-ii/) (হুবহু) — **বাংলা:** duplicate সহ।

#### ○ BT7 · 40. Combination Sum II 🟡 ⬜
🔗 [LC 40](https://leetcode.com/problems/combination-sum-ii/) (হুবহু) — **বাংলা:** প্রতিটা একবার + duplicate skip।

**বলো:** *"For permutations, order matters, so instead of a start index I track which elements are already used and try every unused one at each position."*

---

## Day 19 · W11 D5 · শুক্র ১৮ ডিসে — Topic 34: Backtracking ৩ — String · Grid ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **String তৈরি:** প্রতিটা অবস্থানে কোন কোন অক্ষর বসতে পারে? (digit → letters map)
- **নিয়ম মেনে তৈরি:** শুধু বৈধ choice-ই নাও → invalid কখনো তৈরিই হয় না।
- **Grid:** cell চিহ্ন দাও → চার দিকে চেষ্টা → **চিহ্ন মুছে দাও** (undo!)।
- **Partition:** প্রতিটা কাটার জায়গা একটা choice।

### 📘 Concept phases + ছোট problem

**Phase 34.6 — অক্ষর map থেকে তৈরি** ⬜
- **P34.6** 🟢 ⬜ — 🌍 পুরনো Nokia keypad — "2" চাপলে a/b/c। **EN:** For digits `"2"`, list all strings. → `a b c`

**Phase 34.7 — শুধু বৈধ choice** ⬜
- **P34.7** 🟢 ⬜ — **EN:** Building parentheses of n = 2: at `"("` (open = 1, close = 0), which characters may come next? → `(` or `)`. At `"()"`? → only `(`

**Phase 34.8 — Grid-এ চিহ্ন + undo** ⬜
- **P34.8** 🟢 ⬜ — **EN:** In grid `[["A","B"],["C","D"]]`, can you spell `"ABDC"` moving to neighbors without reusing a cell? Why must you unmark on the way back?

### ★ মূল problem

#### ★ BT8 · 17. Letter Combinations of a Phone Number 🟡 Medium ⬜
🔗 [LC 17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) (হুবহু)
🌍 **Real-life:** T9 typing — "43556" দিয়ে "hello"।

**EN:** Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
```
Example 1: Input: digits = "23"   Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2: Input: digits = "2"    Output: ["a","b","c"]
```
**Function:** `var letterCombinations = function (digits) {}`
**বাংলা:** digit-গুলো থেকে সম্ভাব্য সব অক্ষর-জোড়া। খালি input (`""`) হলে কী ফেরত — জিজ্ঞেস করো।
**⏱️ লক্ষ্য:** Time O(4ⁿ · n) · Space O(n)

#### ★ BT9 · 22. Generate Parentheses 🟡 Medium ⬜
🔗 [LC 22](https://leetcode.com/problems/generate-parentheses/) (হুবহু)
🌍 **Real-life:** code formatter — সব বৈধ bracket বিন্যাস।

**EN:** Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
```
Example 1: Input: n = 3   Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2: Input: n = 1   Output: ["()"]
```
**Function:** `var generateParenthesis = function (n) {}`
**বাংলা:** n জোড়া bracket-এর সব বৈধ বিন্যাস। **কেন invalid string কখনো তৈরিই হয় না?**
**⏱️ লক্ষ্য:** Catalan সংখ্যার মতো বাড়ে

#### ○ BT10 · 79. Word Search 🟡 ⬜
🔗 [LC 79](https://leetcode.com/problems/word-search/) (হুবহু) — **বাংলা:** grid backtracking (P34.8)।

#### ○ BT11 · 131. Palindrome Partitioning 🟡 ⬜
🔗 [LC 131](https://leetcode.com/problems/palindrome-partitioning/) (হুবহু) — **বাংলা:** প্রতিটা কাটা একটা choice; অংশটা palindrome হলেই নাও।

- ⏳ N-Queens · Sudoku Solver → January

**বলো:** *"I only add an opening parenthesis while I still have some left, and a closing one only when it wouldn't exceed the open count. That way every string I build is valid by construction."*

### 🚪 Gate — Topic 34 (Backtracking) ⬜

---

## Day 20 · W11 D6 · শনি ১৯ ডিসে — Topic 35: Greedy ১ ★ ⬜

**Interview-এ যেভাবে আসে:** scheduling, resource বণ্টন, "minimum number of …", stock trading — দেখতে সহজ, কিন্তু **কেন সঠিক** সেটা বলতে হয়।

**🧠 এই topic-এ কীভাবে ভাবব:**
- প্রতিটা ধাপে **স্থানীয়ভাবে সেরা** সিদ্ধান্ত, আর কখনো ফিরে যাওয়া নেই।
- **কেন ঠিক?** exchange argument: "অন্য কিছু নিলে কি ভালো হতো? না, কারণ…"
- **কখন ভুল:** একটা ছোট counterexample খোঁজো — পেলে DP লাগবে।
- প্রায়ই **আগে sort** (ছোট থেকে বড়, বা end time দিয়ে)।

### 📘 Concept phases + ছোট problem

**Phase 35.1 — স্থানীয় সেরা** ⬜
- **P35.1** 🟢 ⬜ — 🌍 দোকানে ভাংতি দেওয়া — সবচেয়ে বড় নোট আগে। **EN:** Make 68 with notes `[50, 10, 5, 1]` greedily. → `50 + 10 + 5 + 1 + 1 + 1` (6 notes)

**Phase 35.2 — Greedy কখন ভুল** ⬜
- **P35.2** 🟢 ⬜ — **EN:** Coins `[1, 3, 4]`, target 6. Greedy picks? Best answer? → greedy `4+1+1` (3 coins), best `3+3` (2 coins) → DP লাগে

**Phase 35.3 — আগে sort** ⬜
- **P35.3** 🟢 ⬜ — 🌍 সবচেয়ে ছোট পেটের বাচ্চাকে সবচেয়ে ছোট বিস্কুট। **EN:** Why does sorting both lists first make matching easy?

### ★ মূল problem

#### ★ GR1 · 455. Assign Cookies 🟢 Easy ⬜
🔗 [LC 455](https://leetcode.com/problems/assign-cookies/) (হুবহু)
🌍 **Real-life:** P35.3।

**EN:** Each child `i` has a greed factor `g[i]` (minimum cookie size they'll be content with); each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, child `i` will be content. Each child gets at most one cookie. Maximize the number of content children and output the maximum number.
```
Example 1: Input: g = [1,2,3], s = [1,1]     Output: 1
Example 2: Input: g = [1,2], s = [1,2,3]     Output: 2
```
**Function:** `var findContentChildren = function (g, s) {}`
**বাংলা:** sort + two pointers + greedy।
**⏱️ লক্ষ্য:** Time O(n log n + m log m) · Space O(1)

#### ★ GR2 · 122. Best Time to Buy and Sell Stock II 🟡 Medium ⬜
🔗 [LC 122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) (হুবহু)
🌍 **Real-life:** যতবার খুশি কেনাবেচা — সব ছোট উত্থান থেকে লাভ।

**EN:** You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`th day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. Find and return the maximum profit you can achieve.
```
Example 1: Input: prices = [7,1,5,3,6,4]   Output: 7
Explanation: Buy day 2 (1), sell day 3 (5): +4. Buy day 4 (3), sell day 5 (6): +3. Total 7.
Example 2: Input: prices = [1,2,3,4,5]     Output: 4
Example 3: Input: prices = [7,6,4,3,1]     Output: 0
```
**Function:** `var maxProfit = function (prices) {}`
**বাংলা:** কেন প্রতিটা উত্থান (`prices[i] > prices[i-1]`) যোগ করলেই হয়?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ GR3 · 55. Jump Game 🟡 Medium ⬜
🔗 [LC 55](https://leetcode.com/problems/jump-game/) (হুবহু)
🌍 **Real-life:** নদীর পাথরে লাফ — শেষ পাড়ে পৌঁছানো যাবে?

**EN:** You are given an integer array `nums`. You are initially positioned at the array's first index, and each element represents your maximum jump length at that position. Return `true` if you can reach the last index, or `false` otherwise.
```
Example 1: Input: nums = [2,3,1,1,4]   Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2: Input: nums = [3,2,1,0,4]   Output: false
Explanation: You will always arrive at index 3, whose maximum jump length is 0.
```
**Function:** `var canJump = function (nums) {}`
**বাংলা:** "সবচেয়ে দূরে কোথায় পৌঁছাতে পারি" track।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ○ GR4 · Greedy Fails — 3 Examples ⬜
**EN:** Build 3 coin sets where greedy coin change gives a wrong answer. **বাংলা:** P35.2-এর মতো আরো ৩টা।

**বলো:** *"I track the farthest index reachable so far. If I ever reach an index beyond that, I'm stuck. Choosing the farthest reach never hurts."*

---

## Day 21 · W11 D7 · রবি ২০ ডিসে — Practical (Data Transformation) · Mock ৪ · Revision ⬜

### 🛠️ Practical JS ১০ — Data transformation (full-stack round-এর প্রিয়)

#### ★ P22 · Log Aggregation 🟡 ⬜
🔗 LeetCode-এ হুবহু নেই
🌍 **Real-life:** monitoring dashboard — কোন API কতবার call হলো, কত error, কত ধীর।
**EN:** Input: an array of log lines like `"2026-12-20T10:00:01Z GET /api/users 200 123ms"`. Output: for each endpoint `{ count, errorRate, avgLatency, p95Latency }`, sorted by count. Skip invalid lines. Write each step as its own helper: parse → group → aggregate → sort.
**বাংলা:** প্রতিটা endpoint-এর হিসাব; ভুল লাইন বাদ।
**🧠 ভাবনা (ভাঙতে শেখো):** ৪টা helper — প্রতিটা আলাদা লিখে test করো, তারপর জোড়া। এটাই বড় problem-কে ছোট করার নিখুঁত উদাহরণ।

#### ○ P23 · Simple State Store ⬜
🌍 ছোট Redux। **EN:** `createStore(reducer, initial)` with `getState`, `dispatch`, `subscribe` (returns unsubscribe). **বাংলা:** নিজের store।

### 🎤 Mock ৪ (৪৫ মিনিট)
`interview` — backtracking/greedy/graph মিশিয়ে।

### 🔁 Re-solve
- ⬜ UF3 Redundant Connection · ⬜ BT4 Permutations · ⬜ BT5 Combination Sum · ⬜ BT9 Generate Parentheses · ⬜ GR3 Jump Game

---

# 📕 WEEK 4 (W12) — Greedy (শেষ) · Dynamic Programming (1D + 2D শুরু)

**সপ্তাহের লক্ষ্য:**
1. DP-কে ভয় না পাওয়া: **DP = recursion + মনে রাখা।** নতুন কোনো জাদু না।
2. প্রতিটা DP problem-এ **৪ প্রশ্ন** লিখে শুরু: state · transition · base case · answer।
3. রাস্তা: **recursion → memo → tabulation → space optimization** — প্রতিটা ★-এ অন্তত প্রথম তিনটা।

**পড়বে:** `04-patterns-and-skeletons.md` — skeleton 3.26, 3.27 আর অংশ ৪। `03-complexity-guide.md` অংশ ২(ছ)।

---

## Day 22 · W12 D1 · সোম ২১ ডিসে — Topic 35: Greedy ২ ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **"শেষ সম্ভাব্য জায়গা":** প্রতিটা অক্ষর শেষবার কোথায় → partition কোথায় কাটা যাবে।
- **মোট যোগফল দিয়ে সম্ভাব্যতা:** মোট gas < মোট cost হলে অসম্ভব; নইলে যেখানে ট্যাংক negative হলো তার পর থেকে শুরু।
- interval scheduling = end দিয়ে sort (W9-এর IN5 আবার দেখো এই চোখে)।

### 📘 Concept phases + ছোট problem

**Phase 35.4 — শেষবার কোথায়** ⬜
- **P35.4** 🟢 ⬜ — 🌍 ছবির album ভাগ — একজন মানুষের সব ছবি এক ভাগে থাকবে। **EN:** For `"abac"`, write the last index of each letter. → `a:2, b:1, c:3`

**Phase 35.5 — ট্যাংক negative হলে নতুন শুরু** ⬜
- **P35.5** 🟢 ⬜ — 🌍 গাড়ির তেল — কোন পাম্প থেকে শুরু করলে পুরো চক্কর? **EN:** gains `[1, -2, 3]` (gas − cost). Start at 0: tank goes `1, -1` ✗. Restart at 2: `3, 4, 2` ✓ → start `2`

### ★ মূল problem

#### ★ GR5 · 134. Gas Station 🟡 Medium ⬜
🔗 [LC 134](https://leetcode.com/problems/gas-station/) (হুবহু)
🌍 **Real-life:** P35.5।

**EN:** There are `n` gas stations along a circular route, where the amount of gas at the `i`th station is `gas[i]`. You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `i`th station to its next station. You begin the journey with an empty tank at one of the gas stations. Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`. If there exists a solution, it is guaranteed to be unique.
```
Example 1: Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]   Output: 3
Example 2: Input: gas = [2,3,4], cost = [3,4,3]           Output: -1
```
**Function:** `var canCompleteCircuit = function (gas, cost) {}`
**বাংলা:** কোন পাম্প থেকে শুরু করলে পুরো চক্কর দেওয়া যায়। brute force O(n²) আগে।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ GR6 · 763. Partition Labels 🟡 Medium ⬜
🔗 [LC 763](https://leetcode.com/problems/partition-labels/) (হুবহু)
🌍 **Real-life:** P35.4।

**EN:** You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.
```
Example 1: Input: s = "ababcbacadefegdehijhklij"   Output: [9,7,8]
Explanation: The partition is "ababcbaca", "defegde", "hijhklij".
Example 2: Input: s = "eccbbbbdec"                 Output: [10]
```
**Function:** `var partitionLabels = function (s) {}`
**⏱️ লক্ষ্য:** Time O(n) · Space O(26)

#### ○ GR7 · 45. Jump Game II 🟡 ⬜
🔗 [LC 45](https://leetcode.com/problems/jump-game-ii/) (হুবহু)
**EN:** Minimum number of jumps to reach the last index. `[2,3,1,1,4]` → `2`. **বাংলা:** BFS-এর মতো level (প্রতিটা jump এক level)।

- ⏳ Huffman Coding → January

**বলো:** *"If the total gas is at least the total cost, a solution exists. Whenever my tank goes negative, no station between the start and here can work, so I start again from the next station."*

### 🚪 Gate — Topic 35 (Greedy) ⬜

---

## Day 23 · W12 D2 · মঙ্গল ২২ ডিসে — Topic 36: DP ১ — Recursion থেকে Table ★★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব — প্রতিটা DP problem-এ comment-এ ৪ প্রশ্ন:**
```
// State:      dp[i] = ...এক বাক্যে...
// Transition: dp[i] = ...
// Base case:  dp[0] = ..., dp[1] = ...
// Answer:     dp[n]
```
- চেনা: **"কত উপায়ে"** বা **"min/max খরচ"** + ছোট একই প্রশ্ন বারবার।
- সবচেয়ে কাজের প্রশ্ন: **"শেষ ধাপে কীভাবে এলাম?"** — সেখান থেকেই transition।
- রাস্তা: (১) সরল recursion (২) memo (৩) bottom-up array (৪) শুধু শেষ দুটো মান রেখে O(1)।

### 📘 Concept phases + ছোট problem

**Phase 36.1 — একই প্রশ্ন বারবার** ⬜
- **P36.1** 🟢 ⬜ — 🌍 পরীক্ষায় একই অঙ্ক বারবার কষা — একবার খাতায় লিখে রাখলেই হয়। **EN:** In the `fib(5)` call tree, circle every repeated call. → `fib(3)` ×2, `fib(2)` ×3

**Phase 36.2 — "শেষ ধাপে কীভাবে এলাম"** ⬜
- **P36.2** 🟢 ⬜ — 🌍 ৪ নম্বর সিঁড়িতে কীভাবে পৌঁছালাম? ৩ থেকে ১ ধাপ, বা ২ থেকে ২ ধাপ। **EN:** Write `ways(4)` in terms of smaller `ways`. → `ways(3) + ways(2)`

**Phase 36.3 — Table হাতে ভরানো** ⬜
- **P36.3** 🟢 ⬜ — **EN:** Fill `dp[0..5]` for stairs with `dp[0] = 1, dp[1] = 1`. → `1 1 2 3 5 8`

**Phase 36.4 — শুধু শেষ দুটো** ⬜
- **P36.4** 🟢 ⬜ — **EN:** Rewrite P36.3 with two variables `prev2, prev1` instead of an array. Space? → `O(1)`

### ★ মূল problem (প্রতিটা চার ধাপেই)

#### ★ DP1 · 509. Fibonacci Number 🟢 Easy ⬜
🔗 [LC 509](https://leetcode.com/problems/fibonacci-number/) (হুবহু)
**EN:** `F(0) = 0, F(1) = 1, F(n) = F(n − 1) + F(n − 2)`. `n = 4` → `3`.
**বাংলা:** চার ধাপ, প্রতিটার time/space টেবিল।

#### ★ DP2 · 70. Climbing Stairs 🟢 Easy ⬜
🔗 [LC 70](https://leetcode.com/problems/climbing-stairs/) (হুবহু)
🌍 **Real-life:** P36.2।

**EN:** You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?
```
Example 1: Input: n = 2   Output: 2
Explanation: 1. 1 step + 1 step  2. 2 steps
Example 2: Input: n = 3   Output: 3
Explanation: 1+1+1, 1+2, 2+1
```
**Function:** `var climbStairs = function (n) {}`
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ DP3 · 746. Min Cost Climbing Stairs 🟢 Easy ⬜
🔗 [LC 746](https://leetcode.com/problems/min-cost-climbing-stairs/) (হুবহু)
🌍 **Real-life:** প্রতিটা ধাপে টোল — সবচেয়ে কম খরচে উপরে।

**EN:** You are given an integer array `cost` where `cost[i]` is the cost of the `i`th step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index `0`, or the step with index `1`. Return the minimum cost to reach the top of the floor.
```
Example 1: Input: cost = [10,15,20]                          Output: 15
Explanation: Start at index 1, pay 15, climb two steps to the top.
Example 2: Input: cost = [1,100,1,1,1,100,1,1,100,1]         Output: 6
```
**Function:** `var minCostClimbingStairs = function (cost) {}`
**বাংলা:** "উপায় গোনা" থেকে "minimum খরচ"-এ — transition কীভাবে বদলায়? (`+` → `min`)
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

**বলো:** *"dp[i] is the number of ways to reach step i. I can arrive from step i-1 or i-2, so dp[i] = dp[i-1] + dp[i-2]. Since I only need the last two values, space is O(1)."*

---

## Day 24 · W12 D3 · বুধ ২৩ ডিসে — Topic 36: DP ২ — নেব / নেব না ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- DP-র সবচেয়ে common transition: **"এই element নেব, নাকি নেব না?"**
- House robber: `dp[i] = max(dp[i-1], dp[i-2] + nums[i])` — নিলে আগেরটা নেওয়া যায় না।
- Kadane = DP: "i-এ শেষ হওয়া সেরা" (October-এর A7 এখন DP-র ভাষায়)।
- circular? → দুই ভাগে ভাগ করে দুবার চালাও।

### 📘 Concept phases + ছোট problem

**Phase 36.5 — নেব/নেব না টেবিল** ⬜
- **P36.5** 🟢 ⬜ — 🌍 চোর পাশাপাশি দুই বাড়িতে ঢুকলে alarm বাজে। **EN:** Fill `dp` for houses `[2, 7, 9]`: `dp[0] = 2`, `dp[1] = 7`, `dp[2] = ?` → `max(7, 2 + 9) = 11`

**Phase 36.6 — Kadane = DP** ⬜
- **P36.6** 🟢 ⬜ — **EN:** Write Kadane's four DP questions: state `dp[i]` = best subarray **ending at** i; transition `max(nums[i], dp[i-1] + nums[i])`; base `dp[0] = nums[0]`; answer `max(dp)`.

### ★ মূল problem

#### ★ DP4 · 198. House Robber 🟡 Medium ⬜
🔗 [LC 198](https://leetcode.com/problems/house-robber/) (হুবহু)
🌍 **Real-life:** P36.5।

**EN:** You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed; adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
```
Example 1: Input: nums = [1,2,3,1]     Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 4.
Example 2: Input: nums = [2,7,9,3,1]   Output: 12
Explanation: Rob house 1 (2), house 3 (9) and house 5 (1). Total = 12.
```
**Function:** `var rob = function (nums) {}`
**বাংলা:** recursion → memo → table → O(1)।
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ DP5 · 53. Maximum Subarray (DP-র ভাষায়) 🟡 Medium ⬜
🔗 [LC 53](https://leetcode.com/problems/maximum-subarray/) (হুবহু)
**বাংলা:** DP state লিখে আবার — October-এর সাথে তুলনা।

#### ○ DP6 · 213. House Robber II 🟡 ⬜
🔗 [LC 213](https://leetcode.com/problems/house-robber-ii/) (হুবহু)
**EN:** Houses are in a circle. `[2,3,2]` → `3`; `[1,2,3,1]` → `4`. **বাংলা:** প্রথম বাদ দিয়ে একবার, শেষ বাদ দিয়ে একবার।

#### ○ DP7 · 91. Decode Ways 🟡 ⬜
🔗 [LC 91](https://leetcode.com/problems/decode-ways/) (হুবহু)
**EN:** `"12"` → `2` (`"AB"`, `"L"`); `"226"` → `3`; `"06"` → `0`. **বাংলা:** `"0"`-এর ফাঁদ।

**বলো:** *"For each house, I either skip it and keep the best up to the previous house, or rob it and add its value to the best up to two houses back. I take the maximum."*

---

## Day 25 · W12 D4 · বৃহস্পতি ২৪ ডিসে — Topic 36: DP ৩ — Unbounded · String-ভাঙা ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Coin change:** `dp[amount] = 1 + min(dp[amount − coin])` প্রতিটা coin-এর জন্য; অসম্ভব = `Infinity`।
- greedy কেন ভুল (P35.2) আর DP কেন ঠিক — সব সম্ভাবনা দেখে।
- **Word break:** `dp[i]` = প্রথম i অক্ষর ভাঙা যায়? → কোনো `j < i`-তে `dp[j] && dict.has(s.slice(j, i))`।
- dictionary-কে **Set** বানাও।

### 📘 Concept phases + ছোট problem

**Phase 36.7 — Coin table হাতে** ⬜
- **P36.7** 🟢 ⬜ — 🌍 ১, ৩, ৪ টাকার কয়েনে ৬ টাকা — সবচেয়ে কম কয়টা কয়েন? **EN:** Fill `dp[0..6]` for coins `[1, 3, 4]`. → `0 1 2 1 1 2 2`

**Phase 36.8 — Word break table** ⬜
- **P36.8** 🟢 ⬜ — **EN:** For `s = "catdog"`, dict `{cat, dog}`, fill `dp[0..6]`. → `T F F T F F T`

### ★ মূল problem

#### ★ DP8 · 322. Coin Change 🟡 Medium ⬜
🔗 [LC 322](https://leetcode.com/problems/coin-change/) (হুবহু)
🌍 **Real-life:** vending machine — সবচেয়ে কম কয়েনে ফেরত।

**EN:** You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`. You may assume that you have an infinite number of each kind of coin.
```
Example 1: Input: coins = [1,2,5], amount = 11   Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2: Input: coins = [2], amount = 3        Output: -1
Example 3: Input: coins = [1], amount = 0        Output: 0
```
**Function:** `var coinChange = function (coins, amount) {}`
**⏱️ লক্ষ্য:** Time O(amount × coins) · Space O(amount)

#### ★ DP9 · 139. Word Break 🟡 Medium ⬜
🔗 [LC 139](https://leetcode.com/problems/word-break/) (হুবহু)
🌍 **Real-life:** hashtag ভাঙা — `#iloveyou` → "i love you"।

**EN:** Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words. The same word in the dictionary may be reused multiple times.
```
Example 1: Input: s = "leetcode", wordDict = ["leet","code"]                       Output: true
Example 2: Input: s = "applepenapple", wordDict = ["apple","pen"]                  Output: true
Example 3: Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]    Output: false
```
**Function:** `var wordBreak = function (s, wordDict) {}`
**⏱️ লক্ষ্য:** Time O(n² · k) · Space O(n)

#### ○ DP10 · 518. Coin Change II 🟡 ⬜
🔗 [LC 518](https://leetcode.com/problems/coin-change-ii/) (হুবহু)
**EN:** Number of combinations. `amount = 5, coins = [1,2,5]` → `4`. **বাংলা:** loop-এর ক্রম (coin বাইরে নাকি amount) কেন গুরুত্বপূর্ণ?

**বলো:** *"dp[a] is the minimum number of coins to make amount a. For each coin, if I use it last, I need dp[a - coin] + 1 coins, so I take the minimum over all coins."*

---

## Day 26 · W12 D5 · শুক্র ২৫ ডিসে — Topic 36: DP ৪ — LIS · 2D DP-র শুরু ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **LIS:** `dp[i]` = i-তে **শেষ হওয়া** সবচেয়ে লম্বা increasing subsequence → আগের সব j দেখো।
- **2D grid:** `dp[r][c]` = এখানে পৌঁছানোর উপায়/খরচ = **উপর + বাম** থেকে।
- প্রথম row/column আলাদা base case।
- শুধু আগের row লাগে → 2D থেকে 1D।

### 📘 Concept phases + ছোট problem

**Phase 36.9 — "এখানে শেষ" LIS** ⬜
- **P36.9** 🟢 ⬜ — 🌍 প্রতিদিনের ওজন — সবচেয়ে লম্বা ক্রমাগত-বাড়ার ধারা (দিন বাদ দেওয়া যায়)। **EN:** Fill `dp` for `[3, 1, 4, 2, 5]`. → `1 1 2 2 3`

**Phase 36.10 — Grid table** ⬜
- **P36.10** 🟢 ⬜ — 🌍 শহরের রাস্তায় শুধু ডানে আর নিচে হাঁটা — কত পথে অফিসে পৌঁছাবে? **EN:** Fill a 3×3 unique-paths table. → bottom-right = `6`

### ★ মূল problem

#### ★ DP11 · 300. Longest Increasing Subsequence 🟡 Medium ⬜
🔗 [LC 300](https://leetcode.com/problems/longest-increasing-subsequence/) (হুবহু)
🌍 **Real-life:** P36.9।

**EN:** Given an integer array `nums`, return the length of the longest strictly increasing subsequence.
```
Example 1: Input: nums = [10,9,2,5,3,7,101,18]   Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2: Input: nums = [0,1,0,3,2,3]           Output: 4
Example 3: Input: nums = [7,7,7,7,7,7,7]         Output: 1
```
**Function:** `var lengthOfLIS = function (nums) {}`
**বাংলা:** O(n²) DP। (⏳ O(n log n) — binary search + "tails" → January)
**⏱️ লক্ষ্য:** Time O(n²) · Space O(n)

#### ★ DP12 · 62. Unique Paths 🟡 Medium ⬜
🔗 [LC 62](https://leetcode.com/problems/unique-paths/) (হুবহু)
🌍 **Real-life:** P36.10।

**EN:** There is a robot on an `m x n` grid. The robot is initially located at the top-left corner and tries to move to the bottom-right corner. The robot can only move either down or right at any point in time. Given the two integers `m` and `n`, return the number of possible unique paths.
```
Example 1: Input: m = 3, n = 7   Output: 28
Example 2: Input: m = 3, n = 2   Output: 3
Explanation: Right → Down → Down; Down → Down → Right; Down → Right → Down
```
**Function:** `var uniquePaths = function (m, n) {}`
**বাংলা:** (ক) 2D table (খ) 1D row।
**⏱️ লক্ষ্য:** Time O(m × n) · Space O(n)

#### ○ DP13 · 63. Unique Paths II 🟡 ⬜
🔗 [LC 63](https://leetcode.com/problems/unique-paths-ii/) (হুবহু) — **বাংলা:** obstacle থাকলে সেই ঘর 0।

**বলো:** *"dp[r][c] is the number of ways to reach cell (r, c). I can only come from above or from the left, so it's the sum of those two."*

---

## Day 27 · W12 D6 · শনি ২৬ ডিসে — Topic 36: DP ৫ — Grid খরচ · দুই String ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **Min path sum:** `grid[r][c] + min(উপর, বাম)`।
- **দুই string:** `dp[i][j]` = প্রথমটার i অক্ষর আর দ্বিতীয়টার j অক্ষর নিয়ে উত্তর।
  - অক্ষর মিলে গেলে → `dp[i-1][j-1] + 1`
  - না মিললে → `max(dp[i-1][j], dp[i][j-1])`
- table **আগে কাগজে** ভরাও।

### 📘 Concept phases + ছোট problem

**Phase 36.11 — Min path হাতে** ⬜
- **P36.11** 🟢 ⬜ — 🌍 শহরের প্রতিটা মোড়ে toll — সবচেয়ে কম খরচের পথ। **EN:** Fill the min-path table for `[[1,3],[1,5]]`. → `[[1,4],[2,7]]`, answer `7`

**Phase 36.12 — দুই string-এর table** ⬜
- **P36.12** 🟢 ⬜ — 🌍 দুটো DNA-র মিল / git diff। **EN:** Fill the LCS table for `"ab"` and `"cb"` (size 3×3 with an empty row/col). → answer `1`

### ★ মূল problem

#### ★ DP14 · 64. Minimum Path Sum 🟡 Medium ⬜
🔗 [LC 64](https://leetcode.com/problems/minimum-path-sum/) (হুবহু)
🌍 **Real-life:** P36.11।

**EN:** Given an `m x n` grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.
```
Example 1: Input: grid = [[1,3,1],[1,5,1],[4,2,1]]   Output: 7
Explanation: The path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2: Input: grid = [[1,2,3],[4,5,6]]           Output: 12
```
**Function:** `var minPathSum = function (grid) {}`
**⏱️ লক্ষ্য:** Time O(m × n) · Space O(n)

#### ★ DP15 · 1143. Longest Common Subsequence 🟡 Medium ⬜
🔗 [LC 1143](https://leetcode.com/problems/longest-common-subsequence/) (হুবহু)
🌍 **Real-life:** `git diff` — দুটো file-এ কতটা মিল।

**EN:** Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return `0`.
```
Example 1: Input: text1 = "abcde", text2 = "ace"   Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2: Input: text1 = "abc", text2 = "abc"     Output: 3
Example 3: Input: text1 = "abc", text2 = "def"     Output: 0
```
**Function:** `var longestCommonSubsequence = function (text1, text2) {}`
**বাংলা:** table কাগজে ভরিয়ে তারপর code।
**⏱️ লক্ষ্য:** Time O(n × m) · Space O(n × m)

#### ○ DP16 · 72. Edit Distance 🔴 ⬜
🔗 [LC 72](https://leetcode.com/problems/edit-distance/) (হুবহু) — **EN:** `"horse" → "ros"` → `3`. **বাংলা:** spell checker।

#### ○ DP17 · 0/1 Knapsack ⬜
🌍 ব্যাগের ওজনের সীমা — কোন জিনিসগুলো নিলে দাম সবচেয়ে বেশি। **বাংলা:** "নেব / নেব না" + ওজনের সীমা।

#### ○ DP18 · 416. Partition Equal Subset Sum · 494. Target Sum 🟡 ⬜
🔗 [LC 416](https://leetcode.com/problems/partition-equal-subset-sum/) · [LC 494](https://leetcode.com/problems/target-sum/) (হুবহু)
**EN (416):** `[1,5,11,5]` → `true` (`[1,5,5]` and `[11]`); `[1,2,3,5]` → `false`. **বাংলা:** knapsack-এর রূপ।

- ⏳ Longest Palindromic Subsequence · Interleaving String · Interval DP → January

**বলো:** *"dp[i][j] is the LCS of the first i characters of one string and the first j of the other. If the characters match, I extend the diagonal; otherwise I take the better of dropping one character from either string."*

### 🚪 Gate — Topic 36 (DP) ⬜

---

## Day 28 · W12 D7 · রবি ২৭ ডিসে — Mock ৫ · Platform Practice · Revision ⬜

### 🎤 Mock ৫ (৬০ মিনিট — পূর্ণ দৈর্ঘ্য)
`interview` — যেকোনো topic, pattern নাম ছাড়া। `01-master-framework.md` অংশ ৭-এর ৬০ মিনিটের time plan মেনে।

### 💻 Platform practice (৩০ মিনিট)
অনেক company HackerRank/CodeSignal ব্যবহার করে, যেখানে input `stdin` থেকে আসে।

#### ★ PL1 · Max Subarray from stdin ⬜
🔗 logic: [LC 53](https://leetcode.com/problems/maximum-subarray/)
🌍 **Real-life:** HackerRank-এর test — input file থেকে পড়া।
**EN:** Read from `stdin`: first line `n`, second line `n` numbers. Print the maximum subarray sum.
```js
const lines = require("fs").readFileSync(0, "utf8").trim().split("\n");
```
Run: `echo -e "5\n-2 1 -3 4 -1" | node pl1.js` → `4`
**বাংলা:** stdin থেকে পড়ে solve।

#### ○ PL2 ⬜
**বাংলা:** LeetCode/HackerRank-এ একটা Easy আর একটা Medium — editor-এর autocomplete বন্ধ রেখে।

### 🔁 Re-solve
- ⬜ DP4 House Robber · ⬜ DP8 Coin Change · ⬜ DP9 Word Break · ⬜ DP15 LCS · ⬜ GR5 Gas Station

---
---

# 🏁 শেষ ৪ দিন — Bit · Trie · Math · ৩ মাসের চূড়ান্ত মূল্যায়ন

> পিছিয়ে থাকলে: এই দিনগুলো আগে পিছিয়ে পড়া ★ শেষ করতে ব্যবহার করো, আর Bit/Trie/Math January-র প্রথম সপ্তাহে যাবে।

---

## Day 29 · সোম ২৮ ডিসে — Topic 37: Bit Manipulation ★ ⬜

**Interview-এ যেভাবে আসে:** "একবারই আছে এমন সংখ্যা", permission flag (read/write/execute), "power of two কিনা"।

**🧠 এই topic-এ কীভাবে ভাবব:**
- "জোড়ায় জোড়ায় বাতিল" → **XOR** (`a ^ a = 0`, `a ^ 0 = a`, ক্রম যেকোনো)।
- একটা নির্দিষ্ট bit? → `(n >> i) & 1`; set `n | (1 << i)`; clear `n & ~(1 << i)`।
- সবচেয়ে ডানের 1 মুছে দেওয়া → `n & (n − 1)`।
- **JS ফাঁদ:** bitwise ৩২-bit signed-এ কাজ করে → unsigned দরকার হলে `>>> 0`।

### 📘 Concept phases + ছোট problem

**Phase 37.1 — Binary দেখা** ⬜
- **P37.1** 🟢 ⬜ — 🌍 ৮টা light switch — প্রতিটা on/off = একটা bit। **EN:** Write `5`, `6`, `5 & 6`, `5 | 6`, `5 ^ 6` in binary. → `101, 110, 100 (4), 111 (7), 011 (3)`

**Phase 37.2 — XOR বাতিল** ⬜
- **P37.2** 🟢 ⬜ — **EN:** Compute `4 ^ 1 ^ 2 ^ 1 ^ 2` step by step. → `4`

**Phase 37.3 — `n & (n − 1)`** ⬜
- **P37.3** 🟢 ⬜ — **EN:** For `12` (`1100`), what is `12 & 11`? → `8` (`1000`) — the rightmost 1 is gone.

**Phase 37.4 — Permission flags** ⬜
- **P37.4** 🟢 ⬜ — 🌍 file permission: read = 4, write = 2, execute = 1। **EN:** User has `6`. Can they write? Execute? → `6 & 2` → yes, `6 & 1` → no

### ★ মূল problem

#### ★ BI1 · 136. Single Number 🟢 Easy ⬜
🔗 [LC 136](https://leetcode.com/problems/single-number/) (হুবহু)
🌍 **Real-life:** মোজার ঝুড়ি — সবগুলোর জোড়া আছে, একটা ছাড়া।

**EN:** Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.
```
Example 1: Input: nums = [2,2,1]       Output: 1
Example 2: Input: nums = [4,1,2,1,2]   Output: 4
Example 3: Input: nums = [1]           Output: 1
```
**Function:** `var singleNumber = function (nums) {}`
**বাংলা:** XOR। Map দিয়ে কেন O(n) space, আর XOR কেন O(1)?
**⏱️ লক্ষ্য:** Time O(n) · Space O(1)

#### ★ BI2 · 191. Number of 1 Bits 🟢 Easy ⬜
🔗 [LC 191](https://leetcode.com/problems/number-of-1-bits/) (হুবহু)
**EN:** Return the number of set bits in the binary representation of `n`. `n = 11` (`1011`) → `3`; `n = 128` → `1`.
**বাংলা:** (ক) প্রতিটা bit দেখো (খ) `n & (n − 1)` কৌশল — যতবার করা যায়।
**⏱️ লক্ষ্য:** Time O(set bits) · Space O(1)

#### ★ BI3 · 231. Power of Two 🟢 Easy ⬜
🔗 [LC 231](https://leetcode.com/problems/power-of-two/) (হুবহু)
**EN:** Return `true` if `n` is a power of two. `1` → `true`; `16` → `true`; `3` → `false`.
**বাংলা:** `n > 0 && (n & (n − 1)) === 0` — কেন?

#### ★ BI4 · 268. Missing Number (XOR) 🟢 Easy ⬜
🔗 [LC 268](https://leetcode.com/problems/missing-number/) (হুবহু)
**বাংলা:** October-এ যোগফল দিয়ে করেছিলে; এবার XOR।

#### ○ BI5 · 338. Counting Bits 🟢 ⬜
🔗 [LC 338](https://leetcode.com/problems/counting-bits/) (হুবহু)
**EN:** `n = 5` → `[0,1,1,2,1,2]`. **বাংলা:** DP + bit: `bits[i] = bits[i >> 1] + (i & 1)`।

#### ○ BI6 · Subsets using Bitmask ⬜
🔗 [LC 78](https://leetcode.com/problems/subsets/) — **বাংলা:** `0` থেকে `(1 << n) − 1` — প্রতিটা সংখ্যা একটা subset।

- ⏳ Reverse Bits → January

**বলো:** *"XOR cancels equal numbers, since a XOR a is zero. If every number appears twice except one, XOR-ing everything leaves only the single number, in O(n) time and O(1) space."*

---

## Day 30 · মঙ্গল ২৯ ডিসে — Topic 38: Trie ★ ⬜

**Interview-এ যেভাবে আসে:** search box autocomplete, spell checker, "এই prefix দিয়ে কতগুলো শব্দ"।

**🧠 এই topic-এ কীভাবে ভাবব:**
- **prefix** দিয়ে খোঁজা বারবার? → Trie (Set-এ prefix খুঁজতে সব শব্দ দেখতে হয়)।
- node: `{ children: Map, isEnd: false }`; root থেকে path = prefix।
- `insert`, `search` (শেষে `isEnd`), `startsWith` (শুধু পথ) — প্রতিটা O(শব্দের দৈর্ঘ্য)।
- autocomplete: prefix-এর node-এ পৌঁছে **DFS** দিয়ে সব শব্দ।

### 📘 Concept phases + ছোট problem

**Phase 38.1 — Trie আঁকা** ⬜
- **P38.1** 🟢 ⬜ — 🌍 অভিধানের index-এর মতো — "ca" পাতায় car, cat, cap। **EN:** Draw the trie for `["car", "cat", "cap", "dog"]`. How many nodes under `c → a`? → 3

**Phase 38.2 — search বনাম startsWith** ⬜
- **P38.2** 🟢 ⬜ — **EN:** With only `"apple"` inserted, what do `search("app")` and `startsWith("app")` return? → `false`, `true`

### ★ মূল problem

#### ★ TR1 · 208. Implement Trie (Prefix Tree) 🟡 Medium ⬜
🔗 [LC 208](https://leetcode.com/problems/implement-trie-prefix-tree/) (হুবহু)
🌍 **Real-life:** phone keyboard-এর word suggestion।

**EN:** Implement the `Trie` class: `insert(word)` inserts the string; `search(word)` returns `true` if the string is in the trie; `startsWith(prefix)` returns `true` if any previously inserted string has the prefix.
```
Example: insert("apple"); search("apple") → true; search("app") → false;
         startsWith("app") → true; insert("app"); search("app") → true
```
**বাংলা:** নিজের Trie class।
**⏱️ লক্ষ্য:** প্রতিটা O(L) · Space O(মোট অক্ষর)

#### ★ TR2 · 1268. Search Suggestions System 🟡 Medium ⬜
🔗 [LC 1268](https://leetcode.com/problems/search-suggestions-system/) (হুবহু autocomplete)
🌍 **Real-life:** Daraz/Amazon search box — প্রতিটা অক্ষর টাইপ করলে ৩টা suggestion।

**EN:** You are given an array of strings `products` and a string `searchWord`. Design a system that suggests at most three product names from `products` after each character of `searchWord` is typed. Suggested products should have a common prefix with `searchWord`. If there are more than three products with a common prefix, return the three lexicographically minimum products. Return a list of lists of the suggested products after each character is typed.
```
Example 1: Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
           Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
```
**Function:** `var suggestedProducts = function (products, searchWord) {}`
**বাংলা:** `suggest(prefix, limit)` — অভিধান ক্রমে প্রথম `limit`টা শব্দ। (Trie + DFS, বা sort + binary search!)

#### ○ TR3 · 211. Design Add and Search Words Data Structure 🟡 ⬜
🔗 [LC 211](https://leetcode.com/problems/design-add-and-search-words-data-structure/) (হুবহু) — **বাংলা:** `"."` wildcard → সব child-এ DFS।

#### ○ TR4 · 648. Replace Words · 720. Longest Word in Dictionary 🟡 ⬜
🔗 [LC 648](https://leetcode.com/problems/replace-words/) · [LC 720](https://leetcode.com/problems/longest-word-in-dictionary/)

- ⏳ Word Search II → January

**বলো:** *"A trie shares common prefixes, so checking a prefix takes time proportional to its length, not to the number of words. For autocomplete, I walk down to the prefix node, then DFS to collect words."*

---

## Day 31 · বুধ ৩০ ডিসে — Topic 39: Math & Number Theory ★ ⬜

**🧠 এই topic-এ কীভাবে ভাবব:**
- **GCD (Euclid):** `gcd(a, b) = gcd(b, a % b)`, `gcd(a, 0) = a`।
- **LCM:** `a / gcd(a, b) * b` (আগে ভাগ — overflow কমে)।
- অনেক prime একসাথে? → **Sieve** (`i * i` থেকে কাটা শুরু কেন?)।
- বড় সংখ্যা string-এ? → digit ধরে ধরে, **carry** সহ (October-এর digit কৌশল + November-এর Add Two Numbers)।
- বড় উত্তর → `% (1e9 + 7)`; `2^53` ছাড়ালে `BigInt`।

### 📘 Concept phases + ছোট problem

**Phase 39.1 — GCD হাতে** ⬜
- **P39.1** 🟢 ⬜ — 🌍 ১২ আর ১৮টা চকলেট সমান ভাগে — সবচেয়ে বড় কত জনের দল? **EN:** Trace `gcd(18, 12)`. → `gcd(12, 6) → gcd(6, 0) → 6`

**Phase 39.2 — Sieve হাতে** ⬜
- **P39.2** 🟢 ⬜ — **EN:** Cross out multiples on 2..20 starting from `i * i`. Which remain? → `2 3 5 7 11 13 17 19`

**Phase 39.3 — String-এ যোগ** ⬜
- **P39.3** 🟢 ⬜ — 🌍 স্কুলের হাতে-যোগ। **EN:** Add `"95"` + `"7"` digit by digit from the right with carry. → `"102"`

### ★ মূল problem

#### ★ MA1 · 1979. Find Greatest Common Divisor of Array 🟢 Easy ⬜
🔗 [LC 1979](https://leetcode.com/problems/find-greatest-common-divisor-of-array/) (হুবহু)
**EN:** Return the greatest common divisor of the smallest number and largest number in `nums`. `[2,5,6,9,10]` → `2`; `[7,5,6,8,3]` → `1`; `[3,3]` → `3`.
**বাংলা:** min আর max-এর GCD; তারপর পুরো array-র GCD/LCM।
**⏱️ লক্ষ্য:** Time O(n + log(max)) · Space O(1)

#### ★ MA2 · 204. Count Primes 🟡 Medium ⬜
🔗 [LC 204](https://leetcode.com/problems/count-primes/) (হুবহু)
**EN:** Given an integer `n`, return the number of prime numbers that are strictly less than `n`. `n = 10` → `4` (2, 3, 5, 7); `n = 0` → `0`; `n = 1` → `0`.
**বাংলা:** (ক) প্রতিটায় √n check (খ) sieve। তুলনা।
**⏱️ লক্ষ্য:** sieve O(n log log n) · Space O(n)

#### ★ MA3 · 415. Add Strings 🟢 Easy ⬜
🔗 [LC 415](https://leetcode.com/problems/add-strings/) (হুবহু)
🌍 **Real-life:** bank-এর বিশাল টাকার অঙ্ক যা Number-এ ধরে না।
**EN:** Given two non-negative integers `num1` and `num2` represented as strings, return the sum as a string, without converting the inputs to integers directly. `"11" + "123"` → `"134"`; `"456" + "77"` → `"533"`; `"0" + "0"` → `"0"`.
**বাংলা:** `Number` ছাড়া — P39.3।
**⏱️ লক্ষ্য:** Time O(max(n, m)) · Space O(max(n, m))

#### ○ MA4 · 43. Multiply Strings 🟡 ⬜
🔗 [LC 43](https://leetcode.com/problems/multiply-strings/) (হুবহু) — `"123" × "456"` → `"56088"`

#### ○ MA5 · 168. Excel Sheet Column Title 🟢 ⬜
🔗 [LC 168](https://leetcode.com/problems/excel-sheet-column-title/) (হুবহু) — `1` → `"A"`, `28` → `"AB"`, `701` → `"ZY"`। **বাংলা:** 0-indexed না হওয়ার ফাঁদ।

#### ○ MA6 · 202. Happy Number (fast/slow) 🟢 ⬜
🔗 [LC 202](https://leetcode.com/problems/happy-number/) — **বাংলা:** October-এ Set দিয়ে; এবার fast/slow দিয়ে O(1) space।

**বলো:** *"The GCD of a and b equals the GCD of b and a mod b, because any common divisor of a and b also divides the remainder. The numbers shrink quickly, so it's O(log min(a, b))."*

### 🚪 Gate — Topic 37–39 (Bit · Trie · Math) ⬜

---

## Day 32 · বৃহস্পতি ৩১ ডিসে — ৩ মাসের চূড়ান্ত মূল্যায়ন 🎯 ⬜

**অংশ ১ — Final Mock (৬০ মিনিট):** `interview` — দুটো problem (একটা medium, একটা একটু কঠিন), pattern নাম ছাড়া।

**অংশ ২ — Pattern Recognition Test (২০ মিনিট):** আমাকে **`pattern test`** লেখো — ১৫টা ছোট problem statement; প্রতিটায় শুধু: pattern, data structure, লক্ষ্য complexity, কোন clue দেখে চিনলে। code না।

**অংশ ৩ — Recording তুলনা:** অক্টোবর আর নভেম্বরের "Two Sum" recording-এর পাশে এবার একটা **medium** (যেমন Longest Substring Without Repeating Characters) পুরো ব্যাখ্যা record করো।

**অংশ ৪ — Reflection (`TRACKER.md`):**
1. মোট ★ কতগুলো শেষ? কতগুলো Day +7 re-solve পাস?
2. কোন ৫টা pattern সবচেয়ে আত্মবিশ্বাসী? কোন ৩টা সবচেয়ে দুর্বল?
3. ফাঁকা editor দেখে এখন প্রথম অনুভূতি কী? অক্টোবর ৫-এ কী ছিল?
4. "আমি answer জানি না" আর "আমি শুরু করতে জানি না" — দ্বিতীয়টা কি চলে গেছে?
5. January-র প্রথম ৩টা লক্ষ্য।

### ✅ মাস শেষে নিজেকে যাচাই
- ⬜ MinHeap, DSU, Trie class — প্রতিটা ১০ মিনিটে ফাঁকা editor থেকে
- ⬜ Number of Islands, Course Schedule, Subsets, Permutations, Coin Change, LCS — ২৫ মিনিটে
- ⬜ নতুন problem দেখে ২ মিনিটে সম্ভাব্য pattern বলতে পারি, কারণসহ
- ⬜ ৬০ মিনিটের mock-এ পুরো সময় পরিষ্কার English-এ কথা বলেছি

**তারপর:** [after-december/README.md](../after-december/README.md) — দৈনিক ১–১.৫ ঘণ্টার চলমান system, ১ জানুয়ারি থেকে।

---

⬅️ [november-plan.md](../month-2-november/november-plan.md)
