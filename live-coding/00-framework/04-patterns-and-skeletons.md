# 04 — Pattern Recognition Cheat Sheet + Code Skeletons

> **Skeleton কেন?** যারা দ্রুত code লেখে, তারা প্রতিটা লাইন নতুন করে আবিষ্কার করে না। প্রতিটা pattern-এর একটা কাঠামো
> হাতে মুখস্থ থাকে। নতুন problem-এ শুধু ভাবে: **কাঠামোর কোন ঘরে কী বসবে।**
> এখানকার skeleton কোনো নির্দিষ্ট problem-এর solution না — খালি ঘরসহ কাঠামো।
> প্রতিটা pattern topic-এর প্রথম দিনে skeleton টা ফাঁকা editor-এ **৩ বার** লিখবে, দেখে না।

---

## ১. Recognition Cheat Sheet — Problem-এর signal → প্রথমে কী ভাববে

### Data / lookup
| Signal | প্রথমে ভাববে |
|---|---|
| "আগে দেখেছি কিনা", duplicate, unique | **Set** |
| frequency, count, "কতবার" | **Map** (frequency map) |
| "x-এর জোড়া/complement আছে কিনা" (`target - x`) | **Map** (value → index) |
| একই বৈশিষ্ট্য অনুযায়ী ভাগ করা (anagram group) | **Map** (key → list) |
| দ্রুত lookup দরকার, nested loop-এ বারবার খোঁজা | **Map / Set** |

### Array / String গঠন
| Signal | প্রথমে ভাববে |
|---|---|
| sorted array + জোড়া/তিনটা খুঁজতে হবে | **Two Pointers** (opposite) |
| দুই প্রান্ত থেকে তুলনা (palindrome, reverse, container) | **Two Pointers** (opposite) |
| in-place-এ সরানো/বাদ দেওয়া (move zeroes, remove duplicates) | **Two Pointers** (read/write) |
| contiguous subarray/substring + "longest/shortest/max/min" | **Sliding Window** |
| window-এর আকার স্থির (size k) | **Fixed Sliding Window** |
| শর্ত মেনে সবচেয়ে বড়/ছোট window | **Variable Sliding Window** |
| range sum, "i থেকে j পর্যন্ত যোগফল" বারবার | **Prefix Sum** |
| "subarray sum = k" + **negative থাকতে পারে** | **Prefix Sum + Map** |
| নিজেকে ছাড়া বাকি সবার গুণফল/যোগফল | **Prefix + Suffix** |
| sorted data-তে খোঁজা | **Binary Search** |
| "minimum possible maximum" / "সর্বনিম্ন কত হলে চলবে" + উত্তর বাড়লে সম্ভাব্যতা একদিকে বদলায় | **Binary Search on Answer** |
| rotated sorted array | **Modified Binary Search** |

### Stack / Queue
| Signal | প্রথমে ভাববে |
|---|---|
| bracket matching, nested গঠন, undo, "শেষেরটা আগে" | **Stack** |
| next/previous greater/smaller element | **Monotonic Stack** |
| expression evaluate, decode `3[a2[c]]` | **Stack** |
| first-in-first-out, ক্রম অনুযায়ী প্রক্রিয়া | **Queue** |
| sliding window-এর max/min | **Monotonic Deque** |

### Linked List
| Signal | প্রথমে ভাববে |
|---|---|
| middle, cycle, n-th from end | **Fast/Slow pointers** |
| head বদলাতে পারে (delete, merge) | **Dummy node** |
| উল্টাতে হবে | **prev/curr/next তিন pointer** |

### Tree / Graph
| Signal | প্রথমে ভাববে |
|---|---|
| depth, path, subtree-র তথ্য | **DFS** (recursive) |
| level-by-level, "প্রতিটা level-এ", right side view | **BFS** (queue) |
| BST + sorted ক্রম / kth smallest | **Inorder traversal** |
| grid-এ জোড়া-লাগা অঞ্চল (islands), flood fill | **Grid DFS/BFS** |
| unweighted graph-এ shortest path / minimum steps | **BFS** |
| weighted graph-এ shortest path | **Dijkstra** (heap) |
| dependency, prerequisite, ক্রম ঠিক করা | **Topological Sort** |
| connected components, "একই group-এ কিনা", cycle in undirected | **Union Find** / DFS |
| node clone/copy | **DFS/BFS + Map (old → new)** |

### Heap
| Signal | প্রথমে ভাববে |
|---|---|
| top K, kth largest/smallest | **Heap (size K)** |
| বারবার সবচেয়ে ছোট/বড়টা বের করা, data বদলাতে থাকে | **Heap** |
| K টা sorted list merge | **Heap** |
| running median | **Two Heaps** |

### Recursion / Search space
| Signal | প্রথমে ভাববে |
|---|---|
| সব combination/permutation/subset তৈরি করো | **Backtracking** |
| choice নাও → এগোও → ফিরে এসে বাতিল করো | **Backtracking** |
| constraint n ≤ 20 | **Backtracking / bitmask** |
| "কত উপায়ে", "minimum/maximum cost", আর ছোট subproblem বারবার আসে | **Dynamic Programming** |
| প্রতিটা ধাপে স্থানীয়ভাবে সেরা সিদ্ধান্তই সামগ্রিক সেরা | **Greedy** (প্রমাণ বা যুক্তি দরকার) |
| intervals: overlap, merge, meeting rooms | **Sort by start + scan** |
| prefix দিয়ে শব্দ খোঁজা, autocomplete | **Trie** |
| "একবারই আছে, বাকি সব দুবার" | **XOR** |

---

## ২. Pattern-চেনার প্রশ্নমালা (মনে মনে, ক্রমানুসারে)

1. Input কি **sorted**? (বা sort করা যায়?) → binary search / two pointers
2. **Contiguous** অংশ নিয়ে প্রশ্ন? → sliding window / prefix sum
3. **Frequency / uniqueness / আগে দেখা**? → Map / Set
4. **দুই প্রান্ত**? → two pointers
5. **আগের/পরের বড়-ছোট**? → monotonic stack
6. **Nested / matching**? → stack
7. **Level / minimum steps**? → BFS
8. **Path / depth / সব সম্ভাবনা**? → DFS / backtracking
9. **Dependency**? → topological sort
10. **Top K / বারবার min-max**? → heap
11. **একই subproblem বারবার**? → DP
12. **উত্তরের range monotonic**? → binary search on answer

---

## ৩. Skeletons

### 3.1 Frequency Map
```js
const count = new Map();
for (const x of items) {
  count.set(x, (count.get(x) ?? 0) + 1);
}
// এখন count ব্যবহার করো
```

### 3.2 Seen Map / Set (একবারের পাসে খোঁজা)
```js
const seen = new Map(); // value -> index (বা শুধু Set)
for (let i = 0; i < arr.length; i++) {
  const need = /* arr[i] থেকে যা খুঁজছি */;
  if (seen.has(need)) {
    // পেয়েছি
  }
  seen.set(arr[i], i);
}
```

### 3.3 Two Pointers — opposite
```js
let left = 0, right = arr.length - 1;
while (left < right) {
  // arr[left] আর arr[right] দিয়ে সিদ্ধান্ত
  if (/* বড় করতে হবে */) left++;
  else if (/* ছোট করতে হবে */) right--;
  else { /* পেয়েছি */ }
}
```

### 3.4 Two Pointers — read/write (in-place)
```js
let write = 0;
for (let read = 0; read < arr.length; read++) {
  if (/* arr[read] রাখতে হবে */) {
    arr[write] = arr[read];
    write++;
  }
}
// write = নতুন দৈর্ঘ্য
```

### 3.5 Sliding Window — fixed size k
```js
let windowSum = 0;
let best = /* -Infinity বা 0 */;
for (let right = 0; right < arr.length; right++) {
  windowSum += arr[right];                 // add
  if (right >= k) windowSum -= arr[right - k]; // remove the one that left
  if (right >= k - 1) best = Math.max(best, windowSum); // window পূর্ণ
}
```

### 3.6 Sliding Window — variable
```js
let left = 0;
// state: window সম্পর্কে যা মনে রাখতে হবে (count map, sum, ...)
let best = 0;
for (let right = 0; right < arr.length; right++) {
  // [add] arr[right] state-এ যোগ করো
  while (/* [condition] window অবৈধ */) {
    // [remove] arr[left] state থেকে বাদ দাও
    left++;
  }
  // [answer] window এখন বৈধ → best update (দৈর্ঘ্য = right - left + 1)
}
```

### 3.7 Prefix Sum
```js
const prefix = new Array(arr.length + 1).fill(0);
for (let i = 0; i < arr.length; i++) prefix[i + 1] = prefix[i] + arr[i];
// sum(i..j) inclusive = prefix[j + 1] - prefix[i]
```

### 3.8 Prefix Sum + Map
```js
const seenSums = new Map([[0, 1]]); // prefix sum -> কতবার দেখেছি
let running = 0;
for (const x of arr) {
  running += x;
  // খুঁজি: আগে এমন prefix ছিল কিনা যেটা বাদ দিলে চাওয়া মান পাই
  // seenSums.get(running - target)
  seenSums.set(running, (seenSums.get(running) ?? 0) + 1);
}
```

### 3.9 Binary Search — classic
```js
let lo = 0, hi = arr.length - 1;
while (lo <= hi) {
  const mid = lo + Math.floor((hi - lo) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) lo = mid + 1;
  else hi = mid - 1;
}
return -1;
```

### 3.10 Binary Search — lower bound (প্রথম index যেখানে শর্ত সত্য)
```js
let lo = 0, hi = arr.length; // hi = length (খোলা সীমা)
while (lo < hi) {
  const mid = lo + Math.floor((hi - lo) / 2);
  if (/* condition(mid) সত্য */) hi = mid;
  else lo = mid + 1;
}
return lo; // প্রথম সত্য index (না থাকলে length)
```

### 3.11 Binary Search on Answer
```js
function canDo(x) { /* x মান দিয়ে কাজটা করা সম্ভব? greedy চেক */ }
let lo = /* সম্ভাব্য সবচেয়ে ছোট উত্তর */, hi = /* সবচেয়ে বড় */;
while (lo < hi) {
  const mid = lo + Math.floor((hi - lo) / 2);
  if (canDo(mid)) hi = mid;   // mid চলে → আরো ছোট চেষ্টা
  else lo = mid + 1;
}
return lo;
```

### 3.12 Stack — matching
```js
const stack = [];
for (const ch of s) {
  if (/* খোলা */) stack.push(ch);
  else {
    if (stack.length === 0 /* || মেলে না */) return false;
    stack.pop();
  }
}
return stack.length === 0;
```

### 3.13 Monotonic Stack — next greater
```js
const result = new Array(arr.length).fill(-1);
const stack = []; // index রাখি, যাদের উত্তর এখনো পাইনি
for (let i = 0; i < arr.length; i++) {
  while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
    const idx = stack.pop();
    result[idx] = /* arr[i] বা i - idx */;
  }
  stack.push(i);
}
```

### 3.14 Queue (O(1) dequeue) — JS-এ `shift()` এড়াতে
```js
const queue = [start];
let head = 0;
while (head < queue.length) {
  const item = queue[head++];
  // item process করো, নতুনদের queue.push(...)
}
```

### 3.15 Linked List — dummy + reverse
```js
class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }

const dummy = new ListNode(0, head); // head বদলালেও dummy.next দিয়ে ফেরত দিই
let prev = null, curr = head;
while (curr) {
  const next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
// prev = নতুন head
```

### 3.16 Fast / Slow
```js
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  // cycle: if (slow === fast) ...
}
// slow = middle
```

### 3.17 Tree DFS (recursive)
```js
function dfs(node /*, উপর থেকে আসা তথ্য */) {
  if (!node) return /* base value */;
  const left = dfs(node.left);
  const right = dfs(node.right);
  return /* left, right আর node.val মিলিয়ে উত্তর */;
}
```

### 3.18 Tree BFS (level by level)
```js
if (!root) return [];
const queue = [root];
let head = 0;
while (head < queue.length) {
  const levelSize = queue.length - head;
  for (let i = 0; i < levelSize; i++) {
    const node = queue[head++];
    // node process
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  // একটা level শেষ
}
```

### 3.19 Graph — adjacency list + DFS/BFS
```js
const graph = new Map();
for (const [u, v] of edges) {
  if (!graph.has(u)) graph.set(u, []);
  if (!graph.has(v)) graph.set(v, []);
  graph.get(u).push(v);
  graph.get(v).push(u); // undirected হলে
}
const visited = new Set();
function dfs(node) {
  if (visited.has(node)) return;
  visited.add(node);
  for (const next of graph.get(node) ?? []) dfs(next);
}
```

### 3.20 Grid DFS
```js
const rows = grid.length, cols = grid[0].length;
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function dfs(r, c) {
  if (r < 0 || c < 0 || r >= rows || c >= cols) return;
  if (/* এই cell চলবে না বা আগে দেখা */) return;
  // mark visited
  for (const [dr, dc] of dirs) dfs(r + dr, c + dc);
}
```

### 3.21 BFS shortest path (unweighted)
```js
const queue = [[start, 0]]; // [node, distance]
let head = 0;
const visited = new Set([start]);
while (head < queue.length) {
  const [node, dist] = queue[head++];
  if (node === target) return dist;
  for (const next of neighbors(node)) {
    if (!visited.has(next)) { visited.add(next); queue.push([next, dist + 1]); }
  }
}
return -1;
```

### 3.22 Topological Sort (Kahn)
```js
const indegree = new Array(n).fill(0);
const graph = Array.from({ length: n }, () => []);
for (const [to, from] of prereqs) { graph[from].push(to); indegree[to]++; }
const queue = [];
for (let i = 0; i < n; i++) if (indegree[i] === 0) queue.push(i);
const order = [];
let head = 0;
while (head < queue.length) {
  const node = queue[head++];
  order.push(node);
  for (const next of graph[node]) if (--indegree[next] === 0) queue.push(next);
}
// order.length < n হলে cycle আছে
```

### 3.23 Union Find
```js
class DSU {
  constructor(n) { this.parent = Array.from({ length: n }, (_, i) => i); this.size = new Array(n).fill(1); }
  find(x) { while (this.parent[x] !== x) { this.parent[x] = this.parent[this.parent[x]]; x = this.parent[x]; } return x; }
  union(a, b) {
    let ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.size[ra] < this.size[rb]) [ra, rb] = [rb, ra];
    this.parent[rb] = ra; this.size[ra] += this.size[rb];
    return true;
  }
}
```

### 3.24 Heap (interface — implement করবে W9)
```js
class MinHeap {
  constructor(compare = (a, b) => a - b) { this.data = []; this.compare = compare; }
  size() { return this.data.length; }
  peek() { return this.data[0]; }
  push(x) { /* শেষে রাখো, তারপর bubble up */ }
  pop() { /* প্রথমটা বের করো, শেষটাকে উপরে এনে bubble down */ }
}
```

### 3.25 Backtracking
```js
const result = [];
function backtrack(start, path) {
  if (/* path সম্পূর্ণ */) { result.push([...path]); return; }
  for (let i = start; i < choices.length; i++) {
    // if (/* এই choice চলবে না */) continue;   // pruning
    path.push(choices[i]);        // choose
    backtrack(/* i বা i + 1 */, path); // explore
    path.pop();                   // undo
  }
}
backtrack(0, []);
```

### 3.26 DP — memoization (top-down)
```js
const memo = new Map();
function dp(state) {
  if (/* base case */) return /* value */;
  if (memo.has(state)) return memo.get(state);
  const ans = /* ছোট state গুলোর dp(...) মিলিয়ে */;
  memo.set(state, ans);
  return ans;
}
```

### 3.27 DP — tabulation (bottom-up)
```js
const dp = new Array(n + 1).fill(/* initial */);
dp[0] = /* base */;
for (let i = 1; i <= n; i++) {
  dp[i] = /* dp[i-1], dp[i-2], ... থেকে transition */;
}
return dp[n];
```

---

## ৪. DP-র ৪টা প্রশ্ন (DP topic-এ বিস্তারিত)
1. **State:** `dp[i]` মানে ঠিক কী? (এক বাক্যে লেখো)
2. **Transition:** `dp[i]` কীভাবে ছোট state থেকে আসে?
3. **Base case:** সবচেয়ে ছোট state-এর মান কী?
4. **Answer:** কোন state-এ উত্তর?
