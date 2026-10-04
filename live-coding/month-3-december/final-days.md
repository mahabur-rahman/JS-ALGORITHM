# December · শেষ ৪ দিন — ২৮ থেকে ৩১ ডিসেম্বর
## Bit Manipulation · Trie · Math & Number Theory · ৩ মাসের চূড়ান্ত মূল্যায়ন

> এই ৪ দিনে বাকি তিনটা topic-এর **core** শেষ হবে — কোনো topic বাদ থাকবে না।
> ডিসেম্বরে পিছিয়ে থাকলে: এই দিনগুলো আগে পিছিয়ে পড়া ★ শেষ করতে ব্যবহার করো, আর Bit/Trie/Math January-র প্রথম সপ্তাহে যাবে। আমাকে জানালে plan সমন্বয় করব।

---

## Day 1 — সোম, ২৮ ডিসেম্বর — Bit Manipulation ★

**Interview-এ যেভাবে আসে:** "একবারই আছে এমন সংখ্যা", permission flag (read/write/execute bits), "power of two কিনা" — ছোট কিন্তু চালাক প্রশ্ন।

**শিখবে:**
- `&` AND · `|` OR · `^` XOR · `~` NOT · `<<` left shift · `>>` right shift (sign রাখে) · `>>>` (unsigned)।
- **JS ফাঁদ ★:** bitwise operator ৩২-bit signed integer-এ কাজ করে → বড় সংখ্যা বা negative-এ অবাক ফল; unsigned দরকার হলে `>>> 0`।
- **কৌশল:**
  - odd/even: `n & 1`
  - i-তম bit check: `(n >> i) & 1`; set: `n | (1 << i)`; clear: `n & ~(1 << i)`; toggle: `n ^ (1 << i)`
  - power of two: `n > 0 && (n & (n - 1)) === 0`
  - সবচেয়ে ডানের 1 মুছে দেওয়া: `n & (n - 1)`
- **XOR-এর বৈশিষ্ট্য:** `a ^ a = 0`, `a ^ 0 = a`, ক্রম যেকোনো — জোড়ায় জোড়ায় বাতিল।
- bitmask দিয়ে subset: `0` থেকে `(1 << n) - 1` পর্যন্ত প্রতিটা সংখ্যা একটা subset।

**Problems:**
- [ ] ★ **BI1 Single Number** — XOR। Map দিয়ে কেন O(n) space লাগে আর XOR কেন O(1)? `B`
- [ ] ★ **BI2 Number of 1 Bits** — (ক) প্রতিটা bit (খ) `n & (n - 1)` কৌশল। `B`
- [ ] ★ **BI3 Power of Two** `A`
- [ ] ★ **BI4 Missing Number** — W2-তে যোগফল দিয়ে করেছিলে; এবার XOR। `B`
- [ ] ○ **BI5 Counting Bits** (DP + bit: `bits[i] = bits[i >> 1] + (i & 1)`) `C`
- [ ] ○ **BI6 Subsets using bitmask** `C`
- [ ] ⏳ Reverse Bits → January

**বলো:** *"XOR cancels equal numbers, since a XOR a is zero. If every number appears twice except one, XOR-ing everything leaves only the single number, in O(n) time and O(1) space."*

---

## Day 2 — মঙ্গল, ২৯ ডিসেম্বর — Trie ★

**Interview-এ যেভাবে আসে:** search box autocomplete, spell checker, "এই prefix দিয়ে কতগুলো শব্দ" — full-stack-এ বাস্তব উদাহরণ সহ খুব প্রাসঙ্গিক।

**শিখবে:**
- **Prefix tree:** প্রতিটা node = একটা অক্ষর; root থেকে path = prefix।
- node: `{ children: Map (বা object), isEnd: false }`।
- `insert`, `search` (শেষে `isEnd` check), `startsWith` (শুধু পথ আছে কিনা) — প্রতিটা O(শব্দের দৈর্ঘ্য)।
- **কেন Set-এর চেয়ে ভালো prefix-এ:** Set-এ prefix খুঁজতে সব শব্দ দেখতে হয়।
- autocomplete: prefix-এর node-এ পৌঁছে DFS দিয়ে সব শব্দ।
- `"."` wildcard → সব child-এ DFS।

**Problems:**
- [ ] ★ **TR1 Implement Trie** — `insert`, `search`, `startsWith`। `C`
- [ ] ★ **TR2 Autocomplete** — `suggest(prefix, limit)` → অভিধান ক্রমে প্রথম `limit` টা শব্দ। `D`
- [ ] ○ **TR3 Design Add and Search Words** (wildcard `.`) `D`
- [ ] ○ **TR4 Replace Words** · **Longest Word in Dictionary** `C`
- [ ] ⏳ Word Search II → January

**বলো:** *"A trie shares common prefixes, so checking a prefix takes time proportional to its length, not to the number of words. For autocomplete, I walk down to the prefix node, then DFS to collect words."*

---

## Day 3 — বুধ, ৩০ ডিসেম্বর — Math & Number Theory ★

**শিখবে:**
- **GCD (Euclid):** `gcd(a, b) = gcd(b, a % b)`, `gcd(a, 0) = a` — কেন কাজ করে, এক লাইনে।
- **LCM:** `a / gcd(a, b) * b` (আগে ভাগ — overflow কমে)।
- **Sieve of Eratosthenes:** 2 থেকে n পর্যন্ত সব prime — O(n log log n); `i * i` থেকে কাটা শুরু কেন।
- **Modular arithmetic:** `(a + b) % m`, `(a * b) % m`; বড় উত্তরে `1e9 + 7`; JS-এ গুণফল `2^53` ছাড়ালে `BigInt` লাগে।
- **বড় সংখ্যা string হিসেবে:** digit ধরে ধরে, carry সহ (W1-এর digit কৌশল + W7-এর Add Two Numbers)।
- **Base conversion:** Excel column (`A`=1 … `Z`=26, `AA`=27)।

**Problems:**
- [ ] ★ **MA1 GCD / LCM of an array** `B`
- [ ] ★ **MA2 Count Primes** — (ক) প্রতিটায় √n check (খ) sieve। তুলনা। `C`
- [ ] ★ **MA3 Add Strings** — `"456" + "77"` → `"533"`, `Number` ছাড়া। `B`
- [ ] ○ **MA4 Multiply Strings** `D`
- [ ] ○ **MA5 Excel Sheet Column Title** (1 → A, 28 → AB) — 0-indexed না হওয়ার ফাঁদ। `C`
- [ ] ○ **MA6 Happy Number** (W3-এ Set দিয়ে; এবার fast/slow দিয়ে) `B`

**বলো:** *"The GCD of a and b equals the GCD of b and a mod b, because any common divisor of a and b also divides the remainder. The numbers shrink quickly, so it's O(log min(a, b))."*

---

## Day 4 — বৃহস্পতি, ৩১ ডিসেম্বর — ৩ মাসের চূড়ান্ত মূল্যায়ন 🎯

**অংশ ১ — Final Mock (৬০ মিনিট):** `interview` — আমি দুটো problem দেব (একটা medium, একটা medium-এর একটু কঠিন), কোনো pattern নাম ছাড়া।

**অংশ ২ — Pattern Recognition Test (২০ মিনিট):** আমাকে **`pattern test`** লেখো — আমি ১৫টা ছোট problem statement দেব; প্রতিটায় শুধু লিখবে: pattern, data structure, লক্ষ্য complexity, কোন clue দেখে চিনলে। code না।

**অংশ ৩ — Recording তুলনা:** অক্টোবর আর নভেম্বরের "Two Sum" recording-এর পাশে এবার একটা **medium problem** (যেমন Longest Substring Without Repeating Characters) পুরো ব্যাখ্যা record করো।

**অংশ ৪ — Reflection (`TRACKER.md`-এ):**
1. মোট ★ কতগুলো শেষ? কতগুলো Day +7 re-solve পাস?
2. কোন ৫টা pattern এখন সবচেয়ে আত্মবিশ্বাসী? কোন ৩টা সবচেয়ে দুর্বল?
3. ফাঁকা editor দেখে এখন প্রথম অনুভূতি কী? অক্টোবর ৫-এ কী ছিল?
4. "আমি answer জানি না" আর "আমি শুরু করতে জানি না" — দ্বিতীয়টা কি চলে গেছে?
5. January-র প্রথম ৩টা লক্ষ্য।

**তারপর:** `after-december/README.md` খোলো — দৈনিক ১–১.৫ ঘণ্টার চলমান system শুরু, ১ জানুয়ারি থেকে।
