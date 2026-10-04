# October · Week 2 (সামগ্রিক W2) — ১২ থেকে ১৮ অক্টোবর
## Big-O · Strings · Arrays (শুরু)

**সপ্তাহের লক্ষ্য:**
1. যেকোনো code দেখে **time আর space নিজে হিসাব** করতে পারা — মুখস্থ না, গুনে।
2. String-এর সাধারণ interview problem-এ (palindrome, anagram, reverse) একাধিক উপায় লিখে তুলনা করতে পারা।
3. Array-র কোন method আসল array বদলায় আর কোনটার লুকানো খরচ O(n) — জানা।

**আজ থেকে প্রতিটা problem-এর শেষে বাধ্যতামূলক:**
```js
// Time:  O(?) because ...
// Space: O(?) because ...
```

---

## Day 1 — সোম, ১২ অক্টোবর — Big-O ১: Time Complexity ★

**পড়বে:** `00-framework/03-complexity-guide.md` — অংশ ১, ২, ৩ (পুরোটা মনোযোগ দিয়ে)।

**শিখবে:**
- Big-O-র আসল প্রশ্ন: *"n ১০ গুণ হলে কাজ কত গুণ?"*
- ৫ ধাপে মাপা: n কী → প্রতিটা loop কতবার → nested = গুণ, পরপর = যোগ → লুকানো খরচ → constant বাদ।
- O(1), O(log n) (বারবার অর্ধেক), O(n), O(n log n) (sort), O(n²), O(2ⁿ) (প্রতি call-এ দুই শাখা), O(n!) (permutation)।
- **সব nested loop O(n²) না** — ভেতরের loop **মোট** কতবার চলে।
- Recursion: tree আঁকো — branching^depth।

**Exercise (এটাই আজকের "problem") — প্রতিটার Time আর Space লেখো + কেন:**
- [ ] ★ **B1** নিচের ৮টা snippet:
```js
// (a)
for (let i = 0; i < n; i++) total += arr[i];
// (b)
for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) count++;
// (c)
for (let i = 0; i < n; i++) for (let j = i; j < n; j++) count++;
// (d)
for (let i = 1; i < n; i *= 2) count++;
// (e)
for (let i = 0; i < n; i++) count++;
for (let j = 0; j < m; j++) count++;
// (f)
for (let i = 0; i < n; i++) for (let j = 0; j < 5; j++) count++;
// (g)
function f(n) { if (n <= 1) return 1; return f(n - 1) + f(n - 1); }
// (h)
function g(n) { if (n <= 1) return 1; return g(n / 2) + 1; }
```
- [ ] ★ **B2** তোমার W1-এর ৫টা ★ problem-এর complexity লেখো (8.1, 8.3, 8.4, 7.4, 5.2)।
- [ ] ○ **B3** n = 1,000,000 হলে O(n), O(n log n), O(n²) — আনুমানিক কত operation? কোনটা ১ সেকেন্ডে চলবে?

**বলো:** *"The outer loop runs n times and the inner loop runs n times for each, so it's O(n²). If n doubles, the work roughly quadruples."*

---

## Day 2 — মঙ্গল, ১৩ অক্টোবর — Big-O ২: Space · লুকানো খরচ · Constraint ★

**পড়বে:** `03-complexity-guide.md` — অংশ ৪, ৫, ৬, ৭।

**শিখবে:**
- **Space:** input বনাম auxiliary; recursion stack = সর্বোচ্চ গভীরতা; in-place মানে O(1) extra।
- **JS built-in-এর খরচ টেবিল** — বিশেষ করে: `includes/indexOf/shift/unshift/splice/slice` = **O(n)**; `sort` = O(n log n); Map/Set = O(1)।
- **লুকানো O(n²):** loop-এর ভেতরে `includes`, `indexOf`, `shift`, `slice`, `[...arr]`।
- **Constraint → লক্ষ্য:** n ≤ 10⁵ দেখলে O(n²) চলবে না।
- Trade-off: space দিয়ে time কেনা।

**Exercise:**
- [ ] ★ **B4** এই function-এর complexity কত? তারপর এটাকে O(n)-এ নামাও (Set দিয়ে):
```js
function hasDuplicate(arr) {
  const seen = [];
  for (const x of arr) {
    if (seen.includes(x)) return true;
    seen.push(x);
  }
  return false;
}
```
- [ ] ★ **B5** লুকানো খরচ খোঁজো — complexity কত, আর কেন?
```js
function process(queue) { while (queue.length) { const x = queue.shift(); /* O(1) কাজ */ } }
function prefixes(s) { const out = []; for (let i = 1; i <= s.length; i++) out.push(s.slice(0, i)); return out; }
```
- [ ] ★ **B6** Constraint থেকে আন্দাজ: (ক) n ≤ 20 (খ) n ≤ 2000 (গ) n ≤ 2 × 10⁵ (ঘ) n ≤ 10⁹ — প্রতিটায় সবচেয়ে ধীর কোন complexity চলবে?
- [ ] ○ **B7** recursive `sum(arr, i)` লেখো — time আর space কত? iterative-এর সাথে তুলনা।

**বলো:** *"`includes` inside the loop is O(n) on its own, so the whole thing is O(n²). Using a Set makes each lookup O(1), bringing it down to O(n) time but O(n) space."*

---

## Day 3 — বুধ, ১৪ অক্টোবর — Strings ১: ভিত্তি · Methods · Character code ★

**Interview-এ যেভাবে আসে:** palindrome, reverse, anagram, শব্দ গোনা, normalize করা — প্রায় প্রতিটা screening round-এ একটা string problem থাকে।

**শিখবে:**
- **Immutable:** `s[0] = "x"` কাজ করে না। বদলাতে হলে array-তে ভেঙে (`s.split("")` বা `[...s]`), তারপর `join`।
- index, `length`, `at(-1)`, `charAt`।
- **Methods:** `slice` বনাম `substring`, `split/join`, `includes/indexOf`, `startsWith/endsWith`, `replace/replaceAll`, `trim`, `toLowerCase/toUpperCase`, `repeat`, `padStart`।
- **Character code ★:** `"a".charCodeAt(0)` = 97; `c.charCodeAt(0) - 97` → 0..25 → **২৬ ঘরের count array**; `String.fromCharCode(97 + i)`।
- **তুলনা:** `"a" < "b"` lexicographic; `"10" < "9"` সত্য (!); `localeCompare`।
- **String বানানো:** লুপে `+=` বনাম `parts.push(...)` → `parts.join("")`।
- **Regex basics:** `/[^a-z0-9]/gi` দিয়ে alphanumeric বাদে সব সরানো; `test`, `match`, `replace`।
- **Helper লিখতে শেখো:** `isAlphaNumeric(ch)` — regex ছাড়া, char code দিয়ে।

**Output আন্দাজ:**
```js
const s = "Hello";
s[0] = "J"; console.log(s);
console.log(s.slice(-3), s.substring(1, 3), s.at(-1));
console.log("a,b,,c".split(","), "abc".split(""));
console.log("10" < "9", 10 < 9);
console.log("z".charCodeAt(0) - "a".charCodeAt(0));
```

**Problems:**
- [ ] ★ **S1 Reverse String** — char-এর array in-place উল্টাও (`["h","e","l","l","o"]`)। দুইভাবে: (ক) নতুন array (খ) in-place দুই pointer দিয়ে (Two Pointers-এর প্রথম স্বাদ)। `A` · O(n), O(1)
- [ ] ★ **S2 Valid Palindrome** — `"A man, a plan, a canal: Panama"` → true। শুধু অক্ষর আর সংখ্যা, case উপেক্ষা। দুইভাবে: (ক) পরিষ্কার করে উল্টে তুলনা (খ) দুই pointer, কোনো নতুন string ছাড়া। **তুলনার টেবিল বানাও।** `B` · O(n), O(1)
- [ ] ○ **S3** `capitalizeWords("hello world")` → `"Hello World"` — `split/map/join` ছাড়া একবার, সাথে একবার। `A`

**বলো:** *"I use two pointers from both ends and skip non-alphanumeric characters, so I don't need to build a new string. That's O(n) time and O(1) extra space."*

---

## Day 4 — বৃহস্পতি, ১৫ অক্টোবর — Strings ২: Frequency · Anagram · Prefix ★

**শিখবে:**
- **Frequency counting:** object, Map, অথবা ২৬ ঘরের array — কখন কোনটা।
- **Anagram:** একই অক্ষর, একই সংখ্যায় — sort করে তুলনা (O(n log n)) বনাম count (O(n))।
- **Substring বনাম subsequence:** substring = পাশাপাশি; subsequence = ক্রম ঠিক, ফাঁক থাকতে পারে।
- **Normalization:** lowercase, space/punctuation বাদ।

**Problems:**
- [ ] ★ **S4 Valid Anagram** — তিনভাবে: (ক) sort (খ) Map count (গ) ২৬-ঘরের array। **টেবিল: time/space/কখন।** Unicode থাকলে কোনটা চলবে না? `B`
- [ ] ★ **S5 First Unique Character** — প্রথম যে অক্ষর একবারই আছে, তার index; না থাকলে -1। `B` · O(n)
- [ ] ★ **S6 Longest Common Prefix** — `["flower","flow","flight"]` → `"fl"`। খালি array? একটা শব্দ? `B` · O(total chars)
- [ ] ★ **S7 Reverse Words in a String** — `"  the sky   is blue "` → `"blue is sky the"`। প্রথমে built-in দিয়ে, তারপর **`split` ছাড়া** নিজে শব্দ খুঁজে। `C`
- [ ] ○ **S8 Isomorphic Strings** — `"egg"`/`"add"` → true, `"foo"`/`"bar"` → false। (দুই দিকের mapping লাগে কেন?) `C`
- [ ] ○ **S9 String Compression** — `"aabcccccaaa"` → `"a2b1c5a3"`; ছোট না হলে আসলটা। `B`
- [ ] ○ **S10 Ransom Note** — magazine-এর অক্ষর দিয়ে note বানানো যায়? `A`

**বলো:** *"Sorting both strings works in O(n log n). Counting characters is O(n), and if the input is only lowercase letters, a fixed array of 26 makes the space O(1)."*

---

## Day 5 — শুক্র, ১৬ অক্টোবর — Arrays ১: ভিত্তি · Mutating টেবিল · খরচ ★

**Interview-এ যেভাবে আসে:** প্রায় সব problem-এর input array। "in-place করো", "extra space ছাড়া", "একবার loop-এ" — এই শর্তগুলোই difficulty বাড়ায়।

**শিখবে:**
- **বানানো:** literal, `Array.from({ length: n }, (_, i) => i)`, `new Array(n).fill(0)`।
- **2D ফাঁদ ★:** `new Array(3).fill([])` → তিনটা row **একই** array! ঠিক: `Array.from({ length: 3 }, () => [])`।
- **Mutating বনাম non-mutating ★:**

  | আসল array বদলায় | নতুন array দেয় |
  |---|---|
  | `push pop shift unshift splice sort reverse fill` | `slice map filter concat toSorted toReversed with` |

- **খরচ:** push/pop O(1); shift/unshift O(n)।
- **`slice` বনাম `splice`** — নাম কাছাকাছি, কাজ উল্টো।
- **Search:** `includes/indexOf/lastIndexOf/find/findIndex/findLast`; `[NaN].includes(NaN)` true কিন্তু `indexOf(NaN)` -1।
- **Destructuring:** `const [first, ...rest] = arr`; swap `[a[i], a[j]] = [a[j], a[i]]`।
- **Spread copy = shallow** (nested array ভেতরে শেয়ার থাকে)।

**Output আন্দাজ:**
```js
const grid = new Array(2).fill([]); grid[0].push(1); console.log(grid);
const a = [1, 2, 3, 4, 5];
console.log(a.slice(1, 3), a);
console.log(a.splice(1, 2), a);
console.log([10, 9, 1, 2].sort());
const nested = [[1], [2]]; const c = [...nested]; c[0].push(9); console.log(nested);
```

**Problems (built-in sort নিষেধ):**
- [ ] ★ **A1 Missing Number** — `[0..n]` থেকে একটা নেই, খোঁজো। তিনভাবে: (ক) Set (খ) যোগফলের সূত্র (গ) XOR (শুধু চেষ্টা, W12 পরে বিস্তারিত)। তুলনা। `B` · O(n), O(1)
- [ ] ★ **A2 Merge Sorted Array** — `nums1`-এর শেষে জায়গা আছে, `nums2` মিশিয়ে in-place sorted। **পেছন থেকে কেন?** `C` · O(m + n), O(1)
- [ ] ○ **A3** `removeAt(arr, i)` আর `insertAt(arr, i, x)` — `splice` ছাড়া, নিজে সরিয়ে। complexity কত? `B`

**বলো:** *"If I merge from the front, I'd overwrite values in nums1 that I still need. Filling from the back avoids that, because the end of nums1 is empty space."*

---

## Day 6 — শনি, ১৭ অক্টোবর — Arrays ২: Index নিয়ে কাজ · Rotate · Stock ★

**শিখবে:**
- index manipulation: `(i + k) % n` দিয়ে ঘোরানো।
- **reverse-এর কৌশল:** পুরোটা উল্টাও, তারপর অংশ উল্টাও।
- "এখন পর্যন্ত সবচেয়ে ছোট" track করা — একবারের loop-এ।

**Problems:**
- [ ] ★ **A4 Rotate Array** — ডানে k ঘর ঘোরাও। **তিনভাবে:** (ক) নতুন array + `(i + k) % n` (খ) k বার একঘর করে (কেন ধীর?) (গ) তিনবার reverse — O(1) space। k > n হলে? `C`
- [ ] ★ **A5 Best Time to Buy and Sell Stock** — একবার কিনে একবার বেচে সর্বোচ্চ লাভ। brute force O(n²) আগে, তারপর এক loop-এ। *"আমি হাতে কী মনে রাখছিলাম?"* — এই প্রশ্নই উত্তর দেবে। `B` · O(n), O(1)
- [ ] ○ **A6** `secondSmallest` + `secondLargest` একসাথে, এক loop-এ। `B`

**বলো:** *"As I scan the prices, I keep the lowest price seen so far. At each day, the best profit if I sell today is today's price minus that minimum."*

---

## Day 7 — রবি, ১৮ অক্টোবর — Revision · Practical JS ১ · Week Review

**Re-solve (ফাঁকা editor, timer):**
- [ ] S2 Valid Palindrome (two pointers version) · [ ] S4 Valid Anagram (count version) · [ ] A2 Merge Sorted Array · [ ] A5 Stock · [ ] W1-এর 8.3

**Practical JS ১ (Array utility — full-stack interview-এ এমন ছোট function চায়):**
- [ ] ★ **P1** `chunk(arr, size)` — `[1,2,3,4,5], 2` → `[[1,2],[3,4],[5]]`। size ≤ 0 হলে? `B`
- [ ] ★ **P2** `uniqueBy(arr, keyFn)` — `uniqueBy(users, u => u.email)` → প্রথমবার দেখা প্রতিটা email-এর user। `B` · O(n)
- [ ] ○ **P3** `range(start, end, step = 1)` — negative step সহ। `B`

**Unseen (pattern নাম নেই):**
- [ ] ★ **U1** *"একটা log message-এর list। এমন প্রথম message খোঁজো যার আগে ঠিক একই message এসেছিল।"* (যেমন `["a","b","a","c","b"]` → `"a"`)

**Week Review:** `TRACKER.md`-এ — কোন problem-এ Hint 3+ লেগেছে? complexity হিসাব কি নিজে থেকে আসছে?
