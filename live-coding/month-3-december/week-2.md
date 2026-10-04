# December · Week 2 (সামগ্রিক W10) — ৭ থেকে ১৩ ডিসেম্বর
## Matrix · Graph (BFS/DFS) · Topological Sort

**সপ্তাহের লক্ষ্য:**
1. Grid দেখলেই **directions array + সীমানা check** — হাত থেকে আপনা আপনি।
2. **Graph-এ ভয় না পাওয়া:** graph = node + edge। শব্দ "graph" না থাকলেও চেনা (grid, prerequisite, network, friend list)।
3. Graph DFS, BFS, grid DFS, BFS shortest path, topological sort — ৫টা skeleton হাতে।

**পড়বে:** `04-patterns-and-skeletons.md` — skeleton 3.19 থেকে 3.22।

---

## Day 1 — সোম, ৭ ডিসেম্বর — Matrix / 2D Array ★

**Interview-এ যেভাবে আসে:** image rotate, spiral print, game board (tic-tac-toe, game of life), spreadsheet।

**শিখবে:**
- `grid[r][c]`, `rows = grid.length`, `cols = grid[0].length` (খালি grid?)।
- **সীমানা check:** `r >= 0 && r < rows && c >= 0 && c < cols` — helper `inBounds(r, c)`।
- **Directions array** `[[1,0],[-1,0],[0,1],[0,-1]]` (৮ দিক হলে কোণাকুণি সহ)।
- **Layer-by-layer:** top/bottom/left/right চারটা সীমা, প্রতিটা দিক শেষে সংকোচন।
- **Rotate 90°** = transpose + প্রতিটা row উল্টানো।
- in-place-এ "পুরনো মান মনে রাখা" — marker বা প্রথম row/col-কে খাতা হিসেবে।
- 2D array বানানোর ফাঁদ (W2 Day 5)!

**Problems:**
- [ ] ★ **MX1 Transpose Matrix** (আয়তাকার হলে নতুন matrix লাগে কেন?) `A`
- [ ] ★ **MX2 Spiral Matrix** — চার সীমা; এক row বা এক column-এর matrix-এ test। `C`
- [ ] ★ **MX3 Rotate Image** — in-place। `C`
- [ ] ★ **MX4 Set Matrix Zeroes** — (ক) O(r + c) space (খ) O(1) space। `D`
- [ ] ○ **MX5 Game of Life** — in-place (দুই-অবস্থার encoding)। `D`
- [ ] ○ **MX6 Search a 2D Matrix II** — উপর-ডান কোণ থেকে শুরু। `C`

**বলো:** *"I keep four boundaries — top, bottom, left and right. After walking one side, I shrink that boundary, until the boundaries cross."*

---

## Day 2 — মঙ্গল, ৮ ডিসেম্বর — Graph ১: Representation · DFS · BFS ★★

**শিখবে:**
- node, edge, directed/undirected, weighted, degree, cycle, connected component।
- **Representation:** adjacency list (Map বা array of arrays) — প্রায় সবসময় এটাই; adjacency matrix — ঘন graph-এ।
- **edge list → adjacency list** (undirected হলে দুই দিকেই)।
- **visited** ছাড়া cycle-এ অসীম loop।
- DFS (recursive বা stack) · BFS (queue, head index)।
- complexity: O(V + E)।

**Skeleton drill:** 3.19 আর 3.21 — প্রতিটা ৩ বার।

**Problems:**
- [ ] ★ **G1** `buildGraph(n, edges, directed)` helper। `A`
- [ ] ★ **G2 Find if Path Exists in Graph** — DFS আর BFS দুটোই। `B`
- [ ] ★ **G3 Number of Provinces** (connected components) — adjacency matrix input! `C`
- [ ] ○ **G4** একটা node থেকে সব node-এর দূরত্ব (unweighted) — BFS। `B`

**বলো:** *"I build an adjacency list from the edges, then run DFS from the source with a visited set, so each node and edge is processed once — O(V + E)."*

---

## Day 3 — বুধ, ৯ ডিসেম্বর — Graph ২: Grid = Graph ★

**শিখবে:**
- **প্রতিটা cell = node, পাশের cell = edge।** আলাদা graph বানাতে হয় না।
- visited: আলাদা Set (`"r,c"` key — array key-র ফাঁদ মনে আছে?) বা grid-এই চিহ্ন (mutate করা যাবে কিনা জিজ্ঞেস)।
- connected component গোনা = যতবার নতুন DFS শুরু করলাম।
- grid-এ recursion-এর গভীরতা অনেক হতে পারে (১০০০×১০০০) → iterative BFS নিরাপদ — interview-এ উল্লেখ করো।

**Skeleton drill:** 3.20 — ৩ বার।

**Problems:**
- [ ] ★ **G5 Flood Fill** — নতুন রং = পুরনো রং হলে কী হয়? `B`
- [ ] ★ **G6 Number of Islands** — DFS আর BFS। `C`
- [ ] ★ **G7 Max Area of Island** — DFS কী ফেরত দেবে? `C`
- [ ] ○ **G8 Surrounded Regions** — সীমানা থেকে উল্টো চিন্তা। `D`

**বলো:** *"Each land cell is a node, and adjacent land cells are connected. Every time I find unvisited land, I start a DFS that marks the whole island, and I count one island."*

---

## Day 4 — বৃহস্পতি, ১০ ডিসেম্বর — Graph ৩: BFS Shortest Path · Multi-source ★

**শিখবে:**
- **Unweighted graph-এ shortest path = BFS** (প্রথম যেবার পৌঁছাই, সেটাই সবচেয়ে কম ধাপ) — DFS কেন না?
- **Multi-source BFS:** শুরুতেই সব উৎস queue-তে (সব পচা কমলা একসাথে)।
- level গোনা = মিনিট / ধাপ।
- **queue-তে ঢোকানোর সময়ই visited চিহ্ন** (বের করার সময় না — কেন?)।

**Problems:**
- [ ] ★ **G9 Rotting Oranges** — কখনো সব পচবে না হলে -1। `D`
- [ ] ★ **G10 Shortest Path in Binary Matrix** (৮ দিক) `D`
- [ ] ○ **G11 01 Matrix** — প্রতিটা cell থেকে নিকটতম 0 (multi-source)। `D`

**বলো:** *"BFS explores nodes in order of distance, so the first time I reach the target is the shortest path. I put all rotten oranges in the queue at the start, and each BFS level is one minute."*

---

## Day 5 — শুক্র, ১১ ডিসেম্বর — Graph ৪: Clone · উল্টো চিন্তা

**শিখবে:**
- **Clone:** Map (পুরনো node → নতুন node) — আগে তৈরি হয়ে থাকলে আবার না; এটাই visited।
- **উল্টো দিক থেকে চিন্তা:** "কোন cell থেকে সমুদ্রে যাওয়া যায়" → "সমুদ্র থেকে কোন cell-এ ওঠা যায়"।
- directed graph-এ cycle detection (তিন রং: unvisited / visiting / done) — কাল topo sort-এ লাগবে।

**Problems:**
- [ ] ★ **G12 Clone Graph** `D`
- [ ] ○ **G13 Pacific Atlantic Water Flow** `D`
- [ ] ○ **G14** directed graph-এ cycle আছে কিনা — DFS তিন রং। `C`

**বলো:** *"I keep a map from each original node to its copy. Before cloning a neighbor, I check the map, which both avoids duplicates and handles cycles."*

---

## Day 6 — শনি, ১২ ডিসেম্বর — Topological Sort ★

**Interview-এ যেভাবে আসে:** course prerequisite, build system (কোন package আগে build), task dependency, spreadsheet formula ক্রম।

**শিখবে:**
- **DAG** (directed acyclic graph) — cycle থাকলে ক্রম সম্ভব না।
- **Indegree:** কতজন আমার আগে আসতে হবে।
- **Kahn's algorithm:** indegree 0-দের queue-তে → বের করে order-এ → প্রতিবেশীর indegree কমাও → 0 হলে queue-তে।
- `order.length < n` → cycle আছে।
- DFS দিয়ে topo (postorder উল্টো) — ধারণা।
- **edge-এর দিক সাবধানে:** `[a, b]` মানে "b আগে, তারপর a" (course schedule-এ)।

**Skeleton drill:** 3.22 — ৩ বার।

**Problems:**
- [ ] ★ **TS1 Course Schedule** — সব course শেষ করা সম্ভব? `D`
- [ ] ★ **TS2 Course Schedule II** — একটা বৈধ ক্রম। `D`
- [ ] ⏳ Alien Dictionary → January

**বলো:** *"I count how many prerequisites each course has. I start with courses that have none, and every time I finish one, I reduce the count of the courses that depend on it. If I can't process all courses, there's a cycle."*

---

## Day 7 — রবি, ১৩ ডিসেম্বর — Practical (Rate Limiter) · Mock ৩ · Revision

**Practical JS ৯:**
- [ ] ★ **P20 Rate Limiter** — `allow(userId, timestamp)`: প্রতি user প্রতি ৬০ সেকেন্ডে সর্বোচ্চ N request। (ক) sliding log (queue প্রতি user — W8-এর recent calls!) (খ) fixed window counter — তুলনা: memory বনাম সঠিকতা। `D`
- [ ] ○ **P21** token bucket ধারণা — কখন ভালো। `D`

**Mock ৩ (৪৫ মিনিট):** `interview` — graph/matrix থেকে।

**Re-solve:** [ ] MX2 Spiral · [ ] G6 Islands · [ ] G9 Rotting Oranges · [ ] TS2 Course Schedule II · [ ] W9-এর HP5 Top K

**Unseen:**
- [ ] ★ **U6** *"একটা social network-এ `friendships = [[a, b], ...]`। দুটো user দিলে — তারা কত ধাপ দূরে (friend-of-friend = 2)? সংযোগ না থাকলে -1।"*
