# December · Week 3 (সামগ্রিক W11) — ১৪ থেকে ২০ ডিসেম্বর
## Union Find · Shortest Path (Dijkstra) · Backtracking · Greedy (শুরু)

**সপ্তাহের লক্ষ্য:**
1. Union Find আর Dijkstra — **core ধারণা + একটা ★ problem করে**; বিস্তারিত January-তে।
2. **Backtracking skeleton** (choose → explore → undo) এতটা হাতে যে subsets/permutations/combinations ১০ মিনিটে।
3. Greedy: "এখনকার সেরা সিদ্ধান্ত" — আর **কেন** সেটা সামগ্রিক সেরা, এক লাইনে যুক্তি।

---

## Day 1 — সোম, ১৪ ডিসেম্বর — Union Find / DSU ★

**Interview-এ যেভাবে আসে:** "দুটো account কি একই মানুষের?", "network-এ কতগুলো আলাদা group?", "কোন connection বাড়তি (cycle বানায়)?" — বারবার connect + "একই group কিনা" প্রশ্ন।

**শিখবে:**
- প্রতিটা node-এর `parent`; শুরুতে নিজেই নিজের parent।
- `find(x)`: root খোঁজো; **path compression** (পথে সবাইকে root-এর কাছে)।
- `union(a, b)`: দুই root জোড়া; **union by size/rank** (ছোট গাছ বড়টার নিচে)।
- দুটো optimization একসাথে → প্রায় O(1) প্রতি operation।
- DFS/BFS বনাম DSU: edge একটা একটা করে আসতে থাকলে (online) DSU ভালো।

**Skeleton drill:** 3.23 — ৩ বার।

**Problems:**
- [ ] ★ **UF1** DSU class (path compression + union by size) + `count` (কতগুলো component)। `C`
- [ ] ★ **UF2 Number of Provinces** — W10-এ DFS দিয়ে করেছিলে; এবার DSU। তুলনা। `C`
- [ ] ★ **UF3 Redundant Connection** — কোন edge cycle বানায়? `D`
- [ ] ○ **UF4 Accounts Merge** `E`
- [ ] ○ **UF5 Graph Valid Tree** `D`

**বলো:** *"Union-find keeps a parent pointer for each node. If two nodes already share the same root when I try to connect them, that edge creates a cycle."*

---

## Day 2 — মঙ্গল, ১৫ ডিসেম্বর — Shortest Path: Dijkstra ★

**শিখবে:**
- **কেন BFS যথেষ্ট না:** weight থাকলে কম ধাপ ≠ কম খরচ।
- **Dijkstra:** min heap-এ `[distance, node]`; সবচেয়ে কাছেরটা বের করো; প্রতিবেশীর দূরত্ব কমলে heap-এ দাও; পুরনো (stale) entry skip।
- **negative weight-এ Dijkstra ভুল** → Bellman-Ford (ধারণা: n-1 বার সব edge relax)।
- Floyd-Warshall — সব জোড়ার দূরত্ব, O(n³) — শুধু নাম আর ধারণা।
- তোমার W9-এর MinHeap এখানে আবার কাজে লাগবে।

**Problems:**
- [ ] ★ **SP1 Network Delay Time** — Dijkstra + তোমার MinHeap। `D`
- [ ] ○ **SP2 Path With Minimum Effort** (grid + Dijkstra, বা binary search + BFS!) `D`
- [ ] ○ **SP3 Cheapest Flights Within K Stops** (Bellman-Ford ধরনের) `E`
- [ ] ⏳ Word Ladder → January

**বলো:** *"With weighted edges, fewer steps doesn't mean lower cost, so I use Dijkstra: a min-heap always gives me the closest unprocessed node, and I relax its neighbors. That's O((V + E) log V)."*

---

## Day 3 — বুধ, ১৬ ডিসেম্বর — Backtracking ১: Skeleton · Subsets · Combinations ★★

**Interview-এ যেভাবে আসে:** "সব সম্ভাব্য...", "কত উপায়ে..." (n ছোট হলে), phone keypad, password generator, team selection।

**শিখবে:**
- **Choose → Explore → Undo।**
- **Decision tree** কাগজে আঁকা — প্রতিটা problem-এ আগে।
- **`start` index:** combination-এ পেছনে না ফেরা (`[1,2]` আর `[2,1]` একই)।
- **কখন result-এ রাখি:** প্রতিটা node-এ (subsets) বনাম শুধু পাতায় (দৈর্ঘ্য k হলে)।
- **Pruning:** অসম্ভব শাখা আগেই কাটা (যোগফল ছাড়িয়ে গেলে থামো)।
- complexity: পাতার সংখ্যা × প্রতিটা কপির খরচ।

**Skeleton drill:** 3.25 — ৩ বার।

**Problems:**
- [ ] ★ **BT1 Subsets** — W7-এ করেছিলে; এবার skeleton দিয়ে ৮ মিনিটে। `C`
- [ ] ★ **BT2 Combinations** — n থেকে k টা। pruning: বাকি element যথেষ্ট না থাকলে থামো। `C`
- [ ] ○ **BT3 Subsets II** — duplicate আছে: sort + একই level-এ একই মান skip (`i > start && nums[i] === nums[i-1]`)। `D`

**বলো:** *"At each step I choose an element, recurse to explore that choice, and then undo it before trying the next one. The `start` index prevents me from generating the same combination in a different order."*

---

## Day 4 — বৃহস্পতি, ১৭ ডিসেম্বর — Backtracking ২: Permutations · Combination Sum ★

**শিখবে:**
- **Permutation:** `start` না — `used` array; প্রতিটা অবস্থানে যেকোনো অব্যবহৃত।
- **একই element বারবার নেওয়া যায়** (combination sum) → recurse-এ `i` (না `i + 1`)।
- target ছাড়িয়ে গেলে থামো (sorted হলে `break` — বাকিরা আরো বড়)।

**Problems:**
- [ ] ★ **BT4 Permutations** `D`
- [ ] ★ **BT5 Combination Sum** — `[2,3,6,7]`, 7 → `[[2,2,3],[7]]`। `D`
- [ ] ○ **BT6 Permutations II** (duplicate) `D`
- [ ] ○ **BT7 Combination Sum II** `D`

**বলো:** *"For permutations, order matters, so instead of a start index I track which elements are already used and try every unused one at each position."*

---

## Day 5 — শুক্র, ১৮ ডিসেম্বর — Backtracking ৩: String · Grid ★

**শিখবে:**
- **String তৈরি:** phone digit → অক্ষর map; বৈধ parentheses (open < n হলে `(`, close < open হলে `)`)।
- **Grid-এ backtracking:** cell চিহ্ন দাও → চার দিকে চেষ্টা → চিহ্ন মুছে দাও (undo!)।
- **Partition:** প্রতিটা কাটার জায়গা একটা choice।

**Problems:**
- [ ] ★ **BT8 Letter Combinations of a Phone Number** — খালি input? `C`
- [ ] ★ **BT9 Generate Parentheses** — কেন invalid string কখনো তৈরিই হয় না? `D`
- [ ] ○ **BT10 Word Search** (grid) `D`
- [ ] ○ **BT11 Palindrome Partitioning** `D`
- [ ] ⏳ N-Queens · Sudoku Solver → January

**বলো:** *"I only add an opening parenthesis while I still have some left, and a closing one only when it wouldn't exceed the open count. That way every string I build is valid by construction."*

---

## Day 6 — শনি, ১৯ ডিসেম্বর — Greedy ১ ★

**Interview-এ যেভাবে আসে:** scheduling, resource বণ্টন, "minimum number of ...", stock trading — দেখতে সহজ, কিন্তু **কেন সঠিক** সেটা বলতে হয়।

**শিখবে:**
- **Greedy:** প্রতিটা ধাপে স্থানীয়ভাবে সেরা সিদ্ধান্ত, আর কখনো ফিরে যাওয়া নেই।
- **কখন কাজ করে:** স্থানীয় সেরা সিদ্ধান্ত পরের কোনো ভালো সম্ভাবনা নষ্ট করে না (exchange argument — "অন্য কিছু নিলে কি ভালো হতো? না, কারণ...")।
- **কখন ভুল:** coin change `[1,3,4]`, target 6 → greedy 4+1+1 (৩টা), আসল উত্তর 3+3 (২টা) → DP লাগে।
- প্রায়ই **sort আগে** (ছোট থেকে বড়, বা end time দিয়ে)।

**Problems:**
- [ ] ★ **GR1 Assign Cookies** — sort + two pointers + greedy। `B`
- [ ] ★ **GR2 Best Time to Buy and Sell Stock II** — যতবার খুশি। কেন প্রতিটা উত্থান যোগ করলেই হয়? `B`
- [ ] ★ **GR3 Jump Game** — "সবচেয়ে দূরে কোথায় পৌঁছাতে পারি" track। `C`
- [ ] ○ **GR4** coin change-এ greedy ভুল হয় — এমন ৩টা উদাহরণ বানাও। `B`

**বলো:** *"I track the farthest index reachable so far. If I ever reach an index beyond that, I'm stuck. Choosing the farthest reach never hurts, because any position I could reach from a shorter jump I can also reach from here."*

---

## Day 7 — রবি, ২০ ডিসেম্বর — Practical (Data Transformation) · Mock ৪ · Revision

**Practical JS ১০ — Data transformation (full-stack round-এর প্রিয়):**
- [ ] ★ **P22 Log Aggregation** — input: log line-এর array, যেমন `"2026-12-20T10:00:01Z GET /api/users 200 123ms"`। output: প্রতিটা endpoint-এর জন্য `{ count, errorRate, avgLatency, p95Latency }`, count অনুযায়ী sort। invalid line skip করো। প্রতিটা ধাপ আলাদা helper (parse → group → aggregate → sort)। `D`
- [ ] ○ **P23 Simple State Store** — `createStore(reducer, initial)`: `getState`, `dispatch`, `subscribe` (unsubscribe ফেরত দেয়)। `C`

**Mock ৪ (৪৫ মিনিট):** `interview` — backtracking/greedy/graph মিশিয়ে।

**Re-solve:** [ ] UF3 Redundant Connection · [ ] BT4 Permutations · [ ] BT5 Combination Sum · [ ] BT9 Generate Parentheses · [ ] GR3 Jump Game
