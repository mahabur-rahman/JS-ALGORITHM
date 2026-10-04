# 02 — Hint System · Debug Framework · Edge Cases

---

## ১. Hint System (Level 0–7)

**No-Solution-First নিয়ম:** কোনো problem-এর solution আগে দেখবে না। আটকে গেলে আমার কাছে (Claude) একটা নির্দিষ্ট hint level চাইবে।

| Level | নাম | কেমন দেখতে | কে দেবে |
|---|---|---|---|
| 0 | No hint | — | তুমি নিজে |
| 1 | Clarifying question | "Input-এ negative থাকতে পারে কি? তাহলে কী বদলায়?" | তুমি নিজে চেষ্টা করবে |
| 2 | Thinking direction | "Brute force-এ কোন কাজ বারবার হচ্ছে?" | তুমি নিজে চেষ্টা করবে |
| 3 | Data-structure clue | "এমন কিছু চাই যেটা O(1)-এ বলে দেয় কোনো value আগে দেখেছ কিনা।" | আমি |
| 4 | Pattern clue | "এটা variable sliding window।" | আমি |
| 5 | Algorithm outline | "right বাড়াও, duplicate হলে left সরাও..." | আমি |
| 6 | Pseudocode | পুরো pseudocode | আমি |
| 7 | Full solution | code | আমি — শেষ উপায় |

**নিয়ম:**
- প্রতিটা problem-এ Level 0–2 নিজে চেষ্টা করবে, **অন্তত ১৫–২০ মিনিট।**
- তারপর এক এক করে level বাড়াবে। প্রতি hint-এর পর আবার ৫–১০ মিনিট চেষ্টা।
- আমাকে লিখবে: **"W2 D3 Valid Palindrome — Hint 3 দাও"**
- কত নম্বর hint লাগল, `TRACKER.md`-এ লিখবে। Hint 5+ লাগলে সেই problem আবার solve করার তালিকায় যাবে।

---

## ২. Debug Framework — code ভুল হলে

Debug একটা চিন্তার skill, অনুমানের খেলা না। এই প্রশ্নগুলো **ক্রমানুসারে**:

1. **কী আশা করেছিলাম?** (expected output লেখো)
2. **আসলে কী হলো?** (actual output লেখো)
3. **কোন input-এ ভুল হলো?** → সবচেয়ে **ছোট** input খোঁজো যেটায় ভুল হয়।
4. **কোন variable-এর value ভুল?** → loop-এর ভেতরে `console.log({ i, left, right, sum })`।
5. **Loop কি বেশি বা কম বার চলছে?** (`<` বনাম `<=`, শুরু 0 নাকি 1)
6. **Condition কি উল্টো?** (`>` বনাম `>=`, `&&` বনাম `||`)
7. **State কি ঠিক সময়ে update হচ্ছে?** (check-এর আগে update করলাম নাকি পরে?)
8. **কিছু কি অনিচ্ছায় mutate হলো?** (array/object reference শেয়ার)
9. **Off-by-one?** (`arr[i+1]` যখন `i = n-1`)
10. **Data structure-এর অবস্থা ঠিক আছে?** (Map/Set/stack-এ যা থাকার কথা তা আছে?)

**Dry-run টেবিল** (সবচেয়ে শক্তিশালী উপায়):

```
input: [2, 7, 11, 15], target 9
| i | nums[i] | need | map before    | action        |
|---|---------|------|---------------|---------------|
| 0 | 2       | 7    | {}            | store 2→0     |
| 1 | 7       | 2    | {2:0}         | found! [0,1]  |
```

**JS-এর সাধারণ bug:**
- `sort()` comparator ছাড়া → string হিসেবে sort।
- `Array(n).fill([])` → সব row একই array।
- `if (count)` যখন count `0` হতে পারে।
- `forEach`-এর ভেতরে `return` → শুধু callback থেকে বের হয়, function থেকে না।
- `map.get(x) + 1` যখন key নেই → `NaN`। ঠিক: `(map.get(x) ?? 0) + 1`।
- `for...in` array-তে → index string হিসেবে আসে।
- integer division ভুলে যাওয়া: `(lo + hi) / 2` → `Math.floor(...)`।
- string-এ `s[i] = 'x'` → কিছুই হয় না (immutable)।

---

## ৩. Edge Case Checklist

প্রতিটা problem-এ এই list থেকে **প্রাসঙ্গিক** অন্তত ৩টা test করবে।

| # | Edge case | উদাহরণ |
|---|---|---|
| 1 | খালি input | `[]`, `""` |
| 2 | একটা element | `[5]`, `"a"` |
| 3 | দুটো element | `[1, 2]`, `[2, 1]` |
| 4 | Duplicate | `[3, 3, 1]` |
| 5 | সব সমান | `[7, 7, 7]` |
| 6 | Already sorted | `[1, 2, 3, 4]` |
| 7 | উল্টো sorted | `[4, 3, 2, 1]` |
| 8 | Negative সংখ্যা | `[-3, -1, -2]` |
| 9 | Zero | `[0, 0]`, target `0` |
| 10 | খুব বড় value | `Number.MAX_SAFE_INTEGER` |
| 11 | খুব বড় input | n = 10⁵ (complexity যাচাই) |
| 12 | কোনো valid উত্তর নেই | target পাওয়া যায় না |
| 13 | একাধিক valid উত্তর | কোনটা ফেরত দেব? |
| 14 | সীমানা | প্রথম/শেষ index, window size = n |
| 15 | null / undefined | যেখানে প্রাসঙ্গিক (tree-তে null root, linked list-এ null head) |
| 16 | String-বিশেষ | uppercase, space, punctuation, unicode |
| 17 | Graph/Tree-বিশেষ | cycle, disconnected, একটাই node, skewed tree |

**নিজে edge case বানানোর কৌশল:**
1. প্রতিটা **সংখ্যা**-কে চরমে নাও: 0, 1, সবচেয়ে বড়।
2. প্রতিটা **শর্ত**-কে ভাঙো: "sorted" → unsorted দিলে? "unique" → duplicate দিলে?
3. তোমার code-এর প্রতিটা `if`-এর জন্য: এমন input কী, যেটা এই `if`-এ **ঢোকে**, আর এমন কী, যেটা **ঢোকে না**?
4. প্রতিটা loop-এর জন্য: loop **একবারও** না চললে কী হয়? ঠিক **একবার** চললে?
