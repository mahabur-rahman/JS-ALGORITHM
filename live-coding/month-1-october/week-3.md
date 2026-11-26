# October · Week 3 (সামগ্রিক W3) — ১৯ থেকে ২৫ অক্টোবর

> 📌 **বিস্তারিত plan এখন [october-plan.md](october-plan.md)-এ** — প্রতিটা concept phase, ছোট problem, LeetCode format (English + বাংলা + real-life), আর DONE চিহ্ন ওখানে। এই file শুধু সংক্ষিপ্ত reference।

## Arrays (শেষ) · Objects · Hashing (Map & Set) ★★

**Progress (২৬ নভে):** W3 D1–D4 সম্পন্ন। D1-এ LC 53/169, D2-তে LC 238, D3-তে LC 2631/819 submission confirmed। D4-এ Map API ও key আচরণ, custom Map Commands এবং complexity সম্পন্ন; আগে করা Set/frequency/Two Sum problem repeat হয়নি। পরের ধাপ W3 D5 — Hashing 2।

**সপ্তাহের লক্ষ্য:**
1. "আমি হাতে কী মনে রাখছিলাম?" → সেটাই variable — এই চিন্তা দিয়ে Kadane, Product Except Self-এর মতো classic problem নিজে বের করা।
2. **Hashing** — interview-এর সবচেয়ে বেশি ব্যবহৃত অস্ত্র। সপ্তাহ শেষে nested loop দেখলেই মাথায় আসবে: *"এখানে Map দিলে কি একটা loop বাদ যায়?"*

---

## Day 1 — সোম, ১৯ অক্টোবর — Arrays ৩: Kadane · Majority ★

**শিখবে:**
- **"এখানে শেষ হওয়া সেরা" চিন্তা:** প্রতিটা index-এ জিজ্ঞেস করো — *"এই index-এ শেষ হওয়া সবচেয়ে ভালো subarray কোনটা?"* আগেরটার সাথে জুড়ব, নাকি নতুন শুরু করব?
- এটাই DP-র প্রথম স্বাদ (W12-এ আবার দেখবে)।
- **Voting / cancellation কৌশল (Boyer–Moore):** দুটো আলাদা জিনিস একে অপরকে বাতিল করে।

**Problems:**
- [x] ★ **A7 Maximum Subarray** — সবচেয়ে বড় যোগফলের contiguous subarray। ধাপে ধাপে: (ক) O(n³) সব subarray (খ) O(n²) running sum (গ) O(n) Kadane। **সব negative হলে?** তিনটার টেবিল। `D` · O(n), O(1) — LeetCode submission confirmed (১৬ নভে)।
- [x] ★ **A8 Majority Element** — n/2-এর বেশিবার আছে এমন element। (ক) Map count (খ) sort করে মাঝখান (কেন কাজ করে?) (গ) Boyer–Moore O(1) space। `B` — LeetCode submission confirmed (১৬ নভে)।
- ⏭️ ○ **A9** Maximum subarray-র **index** (start, end) ফেরত দাও, শুধু যোগফল না। `C` — user আপাতত optional বাদ দিয়েছেন।

**বলো:** *"At each index I decide: extend the previous subarray, or start fresh from here. I start fresh when the running sum becomes worse than the current element alone."*

---

## Day 2 — মঙ্গল, ২০ অক্টোবর — Arrays ৪: Prefix/Suffix ধারণা · In-place কৌশল ★ ✅ সম্পন্ন (১৭ নভে)

**শিখবে:**
- **Prefix / suffix ধারণা:** "আমার বাঁয়ে সবকিছুর গুণফল" × "ডানে সবকিছুর গুণফল"।
- দুই pass: বাঁ থেকে ডানে একবার, ডান থেকে বাঁয়ে একবার।
- **Index-কে marker হিসেবে ব্যবহার** (value 1..n হলে `arr[value - 1]`-কে negative করে "দেখেছি" চিহ্ন)।

**Problems:**
- [x] ★ **A10 Product of Array Except Self** — ভাগ (`/`) ছাড়া, O(n); এক-pass prefix/suffix, Time O(n), Auxiliary Space O(1), Output Space O(n); LeetCode submission user-confirmed (১৭ নভে)।
- [ ] ○ **A11 Find All Numbers Disappeared** — 1..n-এর মধ্যে যেগুলো নেই। Set দিয়ে, তারপর index-marker দিয়ে O(1) extra। ⏭️ User optional বাদ দিয়েছেন।
- [ ] ○ **A12 Find the Duplicate Number** — 1..n, একটা সংখ্যা বারবার। Set দিয়ে; (fast/slow দিয়ে O(1) — W7-এ ফিরে আসবে)। ⏭️ User optional বাদ দিয়েছেন।

**P11.15–P11.17 practice সম্পন্ন:** Left Products ও Right Products O(n); Seat Marker missing-value practice Set দিয়ে সঠিকভাবে solve (Time O(n) average, Auxiliary Space O(n)); negative index-marking concept ও trace আলোচনা হয়েছে, in-place O(1) implementation করা হয়নি। User Day 2 complete হিসেবে গণ্য করতে বলেছেন।

**বলো:** *"For each index, the answer is the product of everything to its left times everything to its right. I compute left products in one pass and multiply by right products in a second pass."*

---

## Day 3 — বুধ, ২১ অক্টোবর — Objects ✅ সম্পন্ন (২৫ নভে; user-confirmed)

**Interview-এ যেভাবে আসে:** full-stack round-এ খুব common — API response transform, group করা, nested data থেকে মান বের করা।

**শিখবে:**
- dot বনাম bracket; **dynamic key** `{ [key]: value }`; shorthand; nested object; `?.`; `delete`।
- **key আছে কিনা:** `key in obj` বনাম `Object.hasOwn(obj, key)` বনাম `obj[key] !== undefined` — পার্থক্য।
- **Iteration:** `for...in`, `Object.keys / values / entries / fromEntries`।
- **Object-কে map হিসেবে ব্যবহারের ফাঁদ ★:** number key string হয়ে যায় (`obj[1]` আর `obj["1"]` একই); integer key আপনা থেকে sort হয়; `__proto__`। → frequency-র জন্য অনেক সময় Map ভালো।
- **Copy:** spread / `Object.assign` = shallow; `structuredClone` = deep।
- **তুলনা:** `{} === {}` false — reference দিয়ে।
- **Destructuring:** default, rename (`{ name: userName = "Guest" }`), nested।
- `JSON.stringify / parse`; `Object.freeze` (shallow)।

**Output আন্দাজ:**
```js
const o = {}; o[1] = "a"; o["1"] = "b"; console.log(o, Object.keys(o));
console.log(Object.keys({ b: 1, 2: 1, a: 1, 1: 1 }));
const u = { name: "R", address: { city: "D" } };
const c = { ...u }; c.address.city = "X"; console.log(u.address.city);
console.log("toString" in {}, Object.hasOwn({}, "toString"));
```

- [x] ★ **O1** `groupBy(items, "role")` — custom solution; কাছাকাছি LC 2631-ও submit complete।
- [x] ★ **O2** `countBy(words)` + most frequent — custom solution ও কাছাকাছি LC 819 submit complete।
- [x] ★ **O3** `flattenObject(...)` — output ঠিক; current recursive merge-এর complexity O(nh) হতে পারে। User Day 3 complete বলেছেন; optimization বাদ।
- [ ] ○ **O4** `get(obj, "a.b.c", defaultValue)` — পথের মাঝে `null` থাকলে? `B`
- [ ] ○ **O5** `invert({ a: "x", b: "y" })` → `{ x: "a", y: "b" }` — duplicate value হলে? `A`

**বলো:** *"I iterate over the items once and use the key's value as a property name, creating an empty array the first time I see it."*

---

## Day 4 — বৃহস্পতি, ২২ অক্টোবর — Hashing ১: Map/Set API · ৪টা ব্যবহার ★★ ✅ সম্পন্ন (২৬ নভে)

**No-repeat sync:** Set-এর `add/has` ও duplicate/intersection ব্যবহার আগেই হয়েছে (LC 217, LC 349, P2 Unique By, U1 First Repeated Log)। Frequency Map-ও characterFrequency-তে হয়েছে। এগুলোর problem আবার নয়; নতুন অংশ হবে Map-এর type-preserving key, array key-র reference behavior, আর আগে লেখা brute-force Two Sum-এ complement lookup ধারণা। H2-এর পুরো problem/LeetCode submission আবার assign হবে না।

**Progress (২৬ নভে):** Map `set/get/has/size/delete`, Map iteration, type-sensitive key, array reference key, `??` default ও complement lookup ধারণা আলোচনা হয়েছে। Custom Map Commands solve; Time O(q), Auxiliary Space O(k), Output Space O(r)। H1/H3/H2 exact problem repeat নয়; H4 optional বাদ। User Day 4 complete বলেছেন।

**পড়বে:** `04-patterns-and-skeletons.md` — অংশ ১ (Data/lookup) + skeleton 3.1, 3.2।
**Skeleton drill:** 3.1 আর 3.2 ফাঁকা editor-এ ৩ বার, দেখে না।

**শিখবে:**
- **Map:** `set/get/has/delete/size`, insertion order-এ iteration, যেকোনো type key।
- **Set:** `add/has/delete/size`; `new Set(arr)` দিয়ে unique; `[...set]`।
- **Map বনাম Object:** key type, `size`, prototype নেই, ঘন add/delete-এ ভালো।
- **Hashing-এর ৪টা ব্যবহার ★:**

  | প্রশ্ন | Structure | উদাহরণ |
  |---|---|---|
  | আগে দেখেছি? | Set | duplicate |
  | কতবার? | Map value → count | frequency |
  | আমার জোড়া আছে? | Map value → index | Two Sum |
  | একই বৈশিষ্ট্যের সবাই কারা? | Map key → list | group anagrams |

- **ফাঁদ:** array-কে key দিলে reference ধরে → `map.set([1,2], x)` পরে `map.get([1,2])` undefined। সমাধান: `"1,2"` string key।
- **Recognition:** *"আমি কি বারবার কিছু খুঁজছি?"* → Hashing।

**Two Sum status:** আগে করা problem; complement lookup ধারণা আলোচনা সম্পন্ন। কোনো নতুন code drill বা submission নেই।

**Problems:**
- ⏭️ ★ **H1 Contains Duplicate** — W2 D2-তে LC 217 একবার solve হবে; একই problem repeat নয়।
- ⏭️ ★ **H2 Two Sum — repeat নয়:** `codeAbc/twoSum.js`-এ brute-force version আগে লেখা; Map complement lookup walkthrough সম্পন্ন, নতুন solution/submission নয়।
- ⏭️ ★ **H3 Intersection of Two Arrays** — W2 D2 Topic 9 Gate-এ সম্পন্ন; Week 3-তে একই problem repeat নয়।
- [ ] ○ **H4 Jewels and Stones** `A` ⏭️ Optional বাদ

**Interview communication:** Map lookup pattern-এর সংক্ষিপ্ত ব্যাখ্যা ইতিমধ্যে আলোচনা হয়েছে; পুনরায় drill নয়।

---

## Day 5 — শুক্র, ২৩ অক্টোবর — Hashing ২: Grouping · Top K ★

**শিখবে:**
- **Grouping key ডিজাইন:** একই group-এর সবার জন্য একই key কীভাবে বানাব? (anagram → sorted string, বা ২৬-count-এর string)
- **Bucket কৌশল:** frequency ১..n-এর মধ্যে → index = frequency, এমন array-তে রাখো → sort ছাড়া top K।

**Problems:**
- [ ] ★ **H5 Group Anagrams** — `["eat","tea","tan","ate","nat","bat"]`। key: (ক) sorted শব্দ — O(n · k log k) (খ) count-signature — O(n · k)। টেবিল। `D`
- [ ] ★ **H6 Top K Frequent Elements** — (ক) count + sort — O(n log n) (খ) **bucket** — O(n)। (heap দিয়ে আবার করবে W9-এ) `D`
- [ ] ○ **H7 Word Pattern** — `"abba"`, `"dog cat cat dog"` → true। (Isomorphic-এর আত্মীয়) `B`

**বলো:** *"Anagrams share the same character counts, so I build a key from the counts and group words under that key in a map."*

---

## Day 6 — শনি, ২৪ অক্টোবর — Hashing ৩: Set-এর চতুর ব্যবহার ★

**শিখবে:**
- **"ধারা কোথায় শুরু" চিন্তা:** `x - 1` না থাকলে x একটা ধারার শুরু — শুধু সেখান থেকে গোনো → O(n)।
- **একাধিক Set একসাথে:** row, column, box — প্রতিটার জন্য আলাদা Set (বা `"r-3"` ধরনের string key একটা Set-এ)।

**Problems:**
- [ ] ★ **H8 Longest Consecutive Sequence** — `[100,4,200,1,3,2]` → 4। sort দিয়ে O(n log n) আগে, তারপর Set দিয়ে O(n)। **কেন ভেতরের while সত্ত্বেও O(n)?** (`03-complexity-guide` অংশ ২(খ)) `D`
- [ ] ★ **H9 Valid Sudoku** — ৯×৯ board বৈধ কিনা (শুধু যা ভরা আছে)। box index = ? (`Math.floor(r / 3) * 3 + Math.floor(c / 3)`) — নিজে বের করো কেন। `D`
- [ ] ○ **H10 Happy Number** — চক্র ধরা Set দিয়ে। `B`

**বলো:** *"I only start counting from numbers that begin a sequence, meaning x - 1 isn't in the set. That way each number is visited at most twice, so the total is O(n)."*

---

## Day 7 — রবি, ২৫ অক্টোবর — Revision · Practical JS ২ · Unseen

**Re-solve (ফাঁকা editor, timer):**
- [ ] A7 Maximum Subarray · [ ] A10 Product Except Self · [ ] H2 Two Sum · [ ] H5 Group Anagrams · [ ] W2-এর A4 Rotate (reverse version)

**Practical JS ২ (Objects):**
- [ ] ★ **P4** `deepClone(value)` — object, array, primitive; (Date/Map/cycle — শুধু আলোচনা করো, কী হবে)। `C`
- [ ] ★ **P5** `deepEqual(a, b)` — nested object/array তুলনা। key-র ক্রম আলাদা হলে? `C`

**Unseen (pattern নাম নেই — আগে লেখো কোন pattern, কেন):**
- [ ] ★ **U2** *"একটা e-commerce site-এর order list `[{ userId, amount }]`। এমন প্রথম user খোঁজো যার মোট খরচ ১০০০ ছাড়িয়েছে — কোন order-এ ছাড়াল, সেই order-এর index ফেরত দাও।"*
- [ ] ○ **U3** *"দুটো শব্দের list। দুটোতেই আছে এমন শব্দগুলো, প্রথম list-এর ক্রমে, প্রতিটা একবার।"*

**Week Review:** nested loop দেখে কি Map-এর কথা মাথায় আসছে? কোন problem-এ "key কী হবে" ভাবতে আটকেছি?
