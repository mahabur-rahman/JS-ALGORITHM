# November · Week 2 (সামগ্রিক W6) — ৯ থেকে ১৫ নভেম্বর
## Sliding Window · Prefix Sum · Mixed Unseen

**সপ্তাহের লক্ষ্য:**
1. Sliding window skeleton (state / add / condition / remove / answer) — নতুন problem-এ শুধু ঘরগুলো ভরানো।
2. বোঝা: **কখন sliding window ভাঙে** (negative সংখ্যা) আর তখন **prefix sum + map**।
3. Month 1 + W5-এর সব pattern নাম ছাড়া চেনা।

**পড়বে:** `04-patterns-and-skeletons.md` — skeleton 3.5, 3.6, 3.7, 3.8।

---

## Day 1 — সোম, ৯ নভেম্বর — Sliding Window ১: Fixed Size ★

**Interview-এ যেভাবে আসে:** "k দিনের সর্বোচ্চ গড় বিক্রি", "k দৈর্ঘ্যের substring-এ সর্বোচ্চ vowel", "প্রতি k মিনিটের গড় request"।

**শিখবে:**
- **Brute force:** প্রতিটা window আলাদা যোগ → O(n·k)।
- **Bottleneck:** পাশাপাশি দুটো window-এর k-1টা element একই — বারবার যোগ করছি।
- **উপায়:** নতুনটা যোগ, পুরনোটা বাদ → O(n)।
- window কখন "পূর্ণ": `right >= k - 1`; কোনটা বের হয়: `arr[right - k]`।

**Skeleton drill:** 3.5 — ৩ বার।

**Problems:**
- [ ] ★ **SW1 Maximum Sum Subarray of Size K** — brute force আগে, তারপর window। k > n হলে? `B`
- [ ] ★ **SW2 Maximum Number of Vowels in a Substring of Given Length** `B`
- [ ] ○ **SW3 Maximum Average Subarray I** `A`
- [ ] ○ **SW4** প্রতিটা k-window-এর গড়ের array ফেরত দাও। `A`

**বলো:** *"Consecutive windows share k - 1 elements, so instead of re-summing, I add the new element and subtract the one that just left. That's O(n) instead of O(n·k)."*

---

## Day 2 — মঙ্গল, ১০ নভেম্বর — Sliding Window ২: Variable Size ★★

**শিখবে:**
- **কখন variable:** "সবচেয়ে লম্বা/ছোট contiguous অংশ যেটা কোনো শর্ত মানে"।
- **দুই হাত:** right সবসময় বাড়ে (expand); শর্ত ভাঙলে left বাড়ে (shrink)।
- **৫টা প্রশ্ন (প্রতিটা problem-এ আগে লেখো):**
  1. **State:** window সম্পর্কে কী মনে রাখব? (Set? count Map? sum?)
  2. **Add:** `arr[right]` ঢোকালে state কীভাবে বদলায়?
  3. **Condition:** কখন window অবৈধ?
  4. **Remove:** `arr[left]` বের করলে state কীভাবে বদলায়?
  5. **Answer:** কখন আর কীভাবে update? (longest → বৈধ হওয়ার পর; shortest → বৈধ থাকাকালীন shrink-এর ভেতরে)
- **কেন O(n):** left আর right প্রত্যেকে মোট n বারই সরে।

**Skeleton drill:** 3.6 — ৩ বার।

**Problems:**
- [ ] ★ **SW5 Longest Substring Without Repeating Characters** — brute force (সব substring) আগে। তারপর ৫ প্রশ্ন লিখে window। (ক) Set দিয়ে (খ) Map-এ শেষ দেখা index রেখে left লাফিয়ে। `D`
- [ ] ★ **SW6 Minimum Size Subarray Sum** — যোগফল ≥ target এমন সবচেয়ে ছোট দৈর্ঘ্য (সব ধনাত্মক)। longest আর shortest-এ answer update-এর জায়গা কেন আলাদা? `D`

**বলো:** *"I expand the window to the right one step at a time. When it contains a duplicate, I shrink from the left until it's valid again. Each pointer moves at most n times, so it's O(n)."*

---

## Day 3 — বুধ, ১১ নভেম্বর — Sliding Window ৩: Frequency Map + Window ★

**শিখবে:**
- window-এর ভেতরে **frequency map** — অক্ষর গোনা।
- **"বৈধ" শর্ত বানানো:** `windowLength - maxFreq <= k` (character replacement)।
- **Anagram window:** দুটো count তুলনা — বা "কতগুলো অক্ষর মিলেছে" counter রেখে O(1) তুলনা।

**Problems:**
- [ ] ★ **SW7 Longest Repeating Character Replacement** — শর্তটা নিজে বের করো: "কতগুলো অক্ষর বদলাতে হবে?" `D`
- [ ] ★ **SW8 Find All Anagrams in a String** (বা Permutation in String) — fixed window + count। `D`
- [ ] ○ **SW9 Longest Substring with At Most K Distinct Characters** `D`
- [ ] ○ **SW10 Fruit Into Baskets** — (SW9 with k = 2 — শব্দে লুকানো!) `D`

**বলো:** *"A window is valid if the number of characters I need to replace — the window length minus the count of the most frequent character — is at most k."*

---

## Day 4 — বৃহস্পতি, ১২ নভেম্বর — Prefix Sum ১ ★

**Interview-এ যেভাবে আসে:** "বারবার range-এর যোগফল জানতে চাওয়া হবে" (analytics dashboard: ৩ থেকে ১০ তারিখের মোট বিক্রি), "এমন index খোঁজো যার বাঁয়ের যোগফল = ডানের যোগফল"।

**শিখবে:**
- `prefix[i + 1] = prefix[i] + arr[i]`; **length n + 1 কেন** (খালি prefix = 0, off-by-one কমে)।
- `sum(i..j) = prefix[j + 1] - prefix[i]` — নিজে প্রমাণ করো ছোট example-এ।
- একবার O(n) প্রস্তুতি → প্রতিটা প্রশ্ন O(1)।
- running sum দিয়ে, আলাদা array ছাড়া (যখন একবারই লাগে)।

**Skeleton drill:** 3.7 — ২ বার।

**Problems:**
- [ ] ★ **PS1 Running Sum of 1d Array** `A`
- [ ] ★ **PS2 Range Sum Query – Immutable** — class: constructor-এ prefix, `sumRange(i, j)` O(1)। `B`
- [ ] ★ **PS3 Find Pivot Index** — বাঁয়ের যোগফল = ডানের। মোট যোগফল জানলে ডানেরটা আলাদা হিসাব লাগে? `B`
- [ ] ○ **PS4** equilibrium index-এর সব index ফেরত দাও। `B`

**বলো:** *"I precompute prefix sums once in O(n). Then any range sum is just the difference of two prefix values, which is O(1) per query."*

---

## Day 5 — শুক্র, ১৩ নভেম্বর — Prefix Sum ২: Prefix + HashMap ★★

**শিখবে:**
- **মূল কথা:** `sum(i..j) = k` মানে `prefix[j+1] - prefix[i] = k` মানে `prefix[i] = prefix[j+1] - k` → **"আগে কি এমন prefix দেখেছি?"** → Two Sum-এর মতো Map!
- `Map([[0, 1]])` দিয়ে শুরু কেন — শুরু থেকেই subarray-র জন্য।
- **কেন sliding window এখানে চলে না:** negative সংখ্যা থাকলে window ছোট করলে যোগফল বাড়তেও পারে — monotonic না।
- remainder trick: `(prefix % k)` একই হলে মাঝের অংশ k দিয়ে বিভাজ্য।

**Skeleton drill:** 3.8 — ৩ বার।

**Problems:**
- [ ] ★ **PS5 Subarray Sum Equals K** — brute force O(n²) আগে। তারপর prefix + map। negative সংখ্যা দিয়ে test করো sliding window কেন ভুল উত্তর দেয়। `D`
- [ ] ○ **PS6 Continuous Subarray Sum** (remainder) `D`
- [ ] ○ **PS7 Contiguous Array** — 0 আর 1 সমান সংখ্যক সবচেয়ে লম্বা subarray (0 → -1 ভাবো!) `D`
- [ ] ⏳ Range Addition (difference array) → January

**বলো:** *"This is like Two Sum on prefix sums. For each running sum, I look up how many earlier prefixes equal running sum minus k. Sliding window doesn't work because negative numbers break monotonicity."*

---

## Day 6 — শনি, ১৪ নভেম্বর — Mixed Unseen Set ★ (Hashing · Sort · BS · 2P · SW · Prefix)

**নিয়ম:** প্রতিটায় আগে লেখো — *"Pattern: ___ কারণ ___ (কোন clue)"*। Timer ২৫ মিনিট।
- [ ] ★ **M6** *"একটা server-এর প্রতি মিনিটের request সংখ্যা। টানা ৫ মিনিটের মধ্যে সর্বোচ্চ মোট request কত?"*
- [ ] ★ **M7** *"একটা sorted price list আর একটা budget। দুটো আলাদা item কিনে budget-এর সবচেয়ে কাছাকাছি (না ছাড়িয়ে) কত খরচ করা যায়?"*
- [ ] ★ **M8** *"একটা string। সবচেয়ে লম্বা অংশ খোঁজো যেখানে সর্বোচ্চ ২টা আলাদা অক্ষর আছে।"*
- [ ] ★ **M9** *"প্রতিদিনের লাভ-ক্ষতির array (negative থাকতে পারে)। কতগুলো টানা দিনের অংশের মোট ঠিক 0?"*
- [ ] ○ **M10** *"package-এর ওজন আর ট্রাকের সংখ্যা দেওয়া আছে, ক্রম বদলানো যাবে না। প্রতিটা ট্রাকের সর্বনিম্ন কত capacity হলে সব পাঠানো যাবে?"*
- [ ] ○ **Minimum Window Substring** (Hard — শুধু চেষ্টা, ৪০ মিনিট; না পারলে January)

**Reflection:** M8 আর M10-এর pattern কি শব্দ দেখে বোঝা গেছে, নাকি গঠন দেখে?

---

## Day 7 — রবি, ১৫ নভেম্বর — Async JS ২ · Revision

**Practical JS ৫:**
- [ ] ★ **P12 retry(fn, retries, delayMs)** — fail হলে আবার; প্রতিবার delay দ্বিগুণ (exponential backoff)। শেষ পর্যন্ত fail হলে শেষ error। `C`
- [ ] ★ **P13 promisePool(tasks, limit)** — `tasks` হলো Promise-ফেরত-দেওয়া function-এর array; একসাথে সর্বোচ্চ `limit` টা চলবে; ফলাফল আসল ক্রমে। (real life: API rate limit মেনে ১০০০ request) `E`
- [ ] ○ **P14** `withTimeout(promise, ms)` — সময়মতো না এলে reject। `C`

**Re-solve:** [ ] SW5 Longest Substring · [ ] SW7 Char Replacement · [ ] PS5 Subarray Sum K · [ ] TP6 Container · [ ] BS11 Koko

**Week Review:** sliding window-এর ৫ প্রশ্ন কি এখন আগে থেকেই মাথায় আসে? কোন problem-এ "condition" বের করতে আটকেছি?
