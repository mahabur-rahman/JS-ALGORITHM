# December · Week 4 (সামগ্রিক W12) — ২১ থেকে ২৭ ডিসেম্বর
## Greedy (শেষ) · Dynamic Programming (1D + 2D-র শুরু)

**সপ্তাহের লক্ষ্য:**
1. DP-কে ভয় না পাওয়া: **DP = recursion + মনে রাখা।** নতুন কোনো জাদু না।
2. প্রতিটা DP problem-এ **৪ প্রশ্ন** লিখে শুরু: state · transition · base case · answer।
3. রাস্তা: **recursion → memo → tabulation → space optimization** — প্রতিটা ★ problem-এ অন্তত প্রথম তিনটা।

**পড়বে:** `04-patterns-and-skeletons.md` — skeleton 3.26, 3.27 আর অংশ ৪। `03-complexity-guide.md` অংশ ২(ছ) (Fibonacci)।

---

## Day 1 — সোম, ২১ ডিসেম্বর — Greedy ২ ★

**শিখবে:**
- **"শেষ সম্ভাব্য জায়গা" চিন্তা:** প্রতিটা অক্ষর শেষবার কোথায় আছে → partition কোথায় কাটা যাবে।
- **মোট যোগফল দিয়ে সম্ভাব্যতা:** gas station-এ মোট gas < মোট cost হলে অসম্ভব; নইলে যেখানে ট্যাংক negative হলো তার পর থেকে শুরু।
- Interval scheduling = end দিয়ে sort (W9-এর IN5 আবার দেখো এই চোখে)।

**Problems:**
- [ ] ★ **GR5 Gas Station** — brute force O(n²) আগে। `D`
- [ ] ★ **GR6 Partition Labels** `C`
- [ ] ○ **GR7 Jump Game II** — BFS-এর মতো level (প্রতিটা jump এক level)। `D`
- [ ] ⏳ Huffman Coding — ধারণা: সবচেয়ে কম frequency-র দুটো heap থেকে নিয়ে জোড়া → January

**বলো:** *"If the total gas is at least the total cost, a solution exists. Whenever my tank goes negative, no station between the start and here can work, so I start again from the next station."*

---

## Day 2 — মঙ্গল, ২২ ডিসেম্বর — DP ১: Foundation — Recursion থেকে Table ★★

**শিখবে:**
- **Overlapping subproblems:** একই ছোট প্রশ্ন বারবার (fib call tree মনে করো)।
- **Optimal substructure:** বড় উত্তর ছোট উত্তর দিয়ে বানানো যায়।
- **৪ প্রশ্ন (প্রতিটা problem-এ কমেন্টে লেখো):**
  ```
  // State:      dp[i] = ...এক বাক্যে...
  // Transition: dp[i] = ...
  // Base case:  dp[0] = ..., dp[1] = ...
  // Answer:     dp[n]
  ```
- **রাস্তা:** (১) সরল recursion (২) memo যোগ (Map) (৩) bottom-up array (৪) শুধু শেষ দুটো মান রেখে O(1) space।
- top-down বনাম bottom-up — কখন কোনটা সহজ।

**Problems (প্রতিটা চার ধাপেই):**
- [ ] ★ **DP1 Fibonacci** — চার ধাপ, প্রতিটার time/space টেবিল। `B`
- [ ] ★ **DP2 Climbing Stairs** — "শেষ ধাপে কীভাবে এলাম?" → 1 বা 2 ধাপ থেকে। `B`
- [ ] ★ **DP3 Min Cost Climbing Stairs** — "উপায় গোনা" থেকে "minimum খরচ"-এ — transition কীভাবে বদলায়? `B`

**বলো:** *"dp[i] is the number of ways to reach step i. I can arrive from step i-1 or i-2, so dp[i] = dp[i-1] + dp[i-2]. Since I only need the last two values, space is O(1)."*

---

## Day 3 — বুধ, ২৩ ডিসেম্বর — DP ২: নেব / নেব না ★

**শিখবে:**
- **"এই element নেব, নাকি নেব না?"** — DP-র সবচেয়ে common transition।
- House robber: `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`।
- **Kadane = DP:** "i-এ শেষ হওয়া সেরা" (W3-এর A7 আবার দেখো — এখন DP-র ভাষায়)।
- circular হলে: দুই ভাগে ভাগ করে দুবার চালানো।

**Problems:**
- [ ] ★ **DP4 House Robber** — recursion → memo → table → O(1)। `C`
- [ ] ★ **DP5 Maximum Subarray** — DP state লিখে আবার। (W3-এর সাথে তুলনা) `C`
- [ ] ○ **DP6 House Robber II** (circular) `D`
- [ ] ○ **DP7 Decode Ways** — `"0"`-এর ফাঁদ। `D`

**বলো:** *"For each house, I either skip it and keep the best up to the previous house, or rob it and add its value to the best up to two houses back. I take the maximum."*

---

## Day 4 — বৃহস্পতি, ২৪ ডিসেম্বর — DP ৩: Unbounded · String-ভাঙা ★

**শিখবে:**
- **Coin change:** `dp[amount] = 1 + min(dp[amount - coin])` প্রতিটা coin-এর জন্য; অসম্ভব = `Infinity`।
- **Greedy কেন ভুল** (W11-এর GR4 উদাহরণ) আর DP কেন ঠিক।
- **Word break:** `dp[i]` = প্রথম i অক্ষর ভাঙা যায় কিনা; প্রতিটা j < i-তে `dp[j] && dict.has(s.slice(j, i))`।
- dictionary-কে Set বানাও (O(1) lookup)।

**Problems:**
- [ ] ★ **DP8 Coin Change** — minimum coin। অসম্ভব হলে -1। `D`
- [ ] ★ **DP9 Word Break** `D`
- [ ] ○ **DP10 Coin Change II** — কত উপায়ে (loop-এর ক্রম কেন গুরুত্বপূর্ণ?) `D`

**বলো:** *"dp[a] is the minimum number of coins to make amount a. For each coin, if I use it last, I need dp[a - coin] + 1 coins, so I take the minimum over all coins."*

---

## Day 5 — শুক্র, ২৫ ডিসেম্বর — DP ৪: LIS · 2D DP-র শুরু ★

**শিখবে:**
- **LIS:** `dp[i]` = i-তে **শেষ হওয়া** সবচেয়ে লম্বা increasing subsequence — O(n²)।
- (⏳ O(n log n) — binary search + "tails" array → January)
- **2D DP:** grid-এ `dp[r][c]` = এখানে পৌঁছানোর উপায়/খরচ = উপর + বাম থেকে।
- প্রথম row/column আলাদা base case।
- 2D → 1D space optimization (শুধু আগের row লাগে)।

**Problems:**
- [ ] ★ **DP11 Longest Increasing Subsequence** (O(n²)) `D`
- [ ] ★ **DP12 Unique Paths** — (ক) 2D table (খ) 1D row। `C`
- [ ] ○ **DP13 Unique Paths II** (obstacle) `C`

**বলো:** *"dp[r][c] is the number of ways to reach cell (r, c). I can only come from above or from the left, so it's the sum of those two."*

---

## Day 6 — শনি, ২৬ ডিসেম্বর — DP ৫: Grid খরচ · দুই String ★

**শিখবে:**
- **Min path sum:** `grid[r][c] + min(উপর, বাম)`।
- **দুই string-এর DP:** `dp[i][j]` = প্রথম string-এর i অক্ষর আর দ্বিতীয়টার j অক্ষর নিয়ে উত্তর।
  - অক্ষর মিলে গেলে → `dp[i-1][j-1] + 1`
  - না মিললে → `max(dp[i-1][j], dp[i][j-1])`
- table হাতে ভরাও (`"abcde"`, `"ace"`) — আগে কাগজে।

**Problems:**
- [ ] ★ **DP14 Minimum Path Sum** `C`
- [ ] ★ **DP15 Longest Common Subsequence** — table কাগজে ভরিয়ে তারপর code। `D`
- [ ] ○ **DP16 Edit Distance** `E`
- [ ] ○ **DP17 0/1 Knapsack** — "নেব / নেব না" + ওজনের সীমা। `D`
- [ ] ○ **DP18 Partition Equal Subset Sum** · **Target Sum** `D`
- [ ] ⏳ Longest Palindromic Subsequence · Interleaving String · Interval DP → January

**বলো:** *"dp[i][j] is the LCS of the first i characters of one string and the first j of the other. If the characters match, I extend the diagonal; otherwise I take the better of dropping one character from either string."*

---

## Day 7 — রবি, ২৭ ডিসেম্বর — Mock ৫ · Platform Practice · Revision

**Mock ৫ (৬০ মিনিট — পূর্ণ দৈর্ঘ্য):** `interview` — যেকোনো topic, pattern নাম ছাড়া। ৬০ মিনিটের time plan মেনে (`01-master-framework.md` অংশ ৭)।

**Platform practice (৩০ মিনিট):** অনেক company HackerRank/CodeSignal ব্যবহার করে, যেখানে input `stdin` থেকে আসে।
- [ ] ★ **PL1** Node-এ `stdin` থেকে পড়ে solve: প্রথম লাইনে n, দ্বিতীয় লাইনে n টা সংখ্যা → সবচেয়ে বড় subarray যোগফল print।
  ```js
  const lines = require("fs").readFileSync(0, "utf8").trim().split("\n");
  ```
  চালাও: `echo -e "5\n-2 1 -3 4 -1" | node pl1.js`
- [ ] ○ **PL2** LeetCode/HackerRank-এ একটা Easy আর একটা Medium — editor-এর autocomplete বন্ধ রেখে।

**Re-solve:** [ ] DP4 House Robber · [ ] DP8 Coin Change · [ ] DP9 Word Break · [ ] DP15 LCS · [ ] GR5 Gas Station
