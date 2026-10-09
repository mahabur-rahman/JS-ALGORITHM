# TRACKER — Progress · Re-solve · মূল্যায়ন

> প্রতিদিন শেষে আমাকে লেখো `done W_ D_` + কোথায় আটকেছিলে / কত নম্বর hint লেগেছে।
> আমি এই file update করব। তুমি নিজেও লিখতে পারো।

### Sync নিয়ম (একই তথ্য দুই জায়গায় থাকবে না)
| তথ্য | একমাত্র জায়গা |
|---|---|
| কোন problem শেষ হয়েছে | **week file-এর checkbox** (`- [x]`) |
| এখন কোথায়, মোট সংখ্যা | এই file — "এখন কোথায়" |
| দিনের সারাংশ (এক লাইন) | এই file — "দৈনিক Log" |
| শুধু কঠিন problem (Hint ≥ 3 বা re-solve fail) | এই file — "Problem Log" |
| কবে কী আবার solve | এই file — "Re-solve Queue" |
| তোমার code | `practice/` |

---

## এখন কোথায়

| | |
|---|---|
| **বর্তমান দিন** | ✅ W1 D2 সম্পূর্ণ (৭–৯ অক্টো) · পরের: **W1 D3** |
| **পরের কাজ** | W1 D3 — warm-up variant (+3: array copy + push/pop return value) → Topic 5 Loops (phase) → ★ 5.1–5.4 |
| **পিছিয়ে আছি?** | ২ দিন (৯ অক্টো = ক্যালেন্ডারে D5, শেষ হলো D2) — Gate নিয়ম মেনে, ঠিক আছে; ○ কমিয়ে ধরে ফেলব |
| **শেষ পাস করা Gate** | ✅ Topic 1 Variables & Memory (৬ অক্টো) · ✅ Topic 2 Data Types (৭ অক্টো) · ✅ Topic 3 Operators & Coercion (৮ অক্টো) · ✅ Topic 4 Conditions (৯ অক্টো) |
| **★ শেষ (মোট)** | 9 |
| **★ Day +7 re-solve পাস** | 0 |
| **Mock interview দেওয়া** | 0 / 6 |

---

## দৈনিক Log

| তারিখ | দিন | Topic | ★ শেষ / মোট | সবচেয়ে বেশি hint | আত্মবিশ্বাস (১–১০) | কোথায় আটকেছি (এক লাইন) |
|---|---|---|---|---|---|---|
| ৫ অক্টো | W1 D1 (১/৩) | Variables & Memory — phase 1.1–1.6 + Swap (৪ উপায়) + updateName | 2 / 4 | Hint 6 (updateName-এ `name: newName`) | — | `max`-এ let/const; `const` object-এ নতুন property যোগ করা যায়; primitive copy (`saved`); object-এ `key: value` আর shorthand-এর নিয়ম; spread = shallow |
| ৬ অক্টো | W1 D1 (২/৩) | ★ 1.3 Add Item · Topic 1 Gate ✅ · Topic 2 phase 2.1–2.3 | 3 / 4 | Hint 3 (Add Item: `push` length ফেরত দেয়) | — | return value দেখে test করা, আসল input-ও print করতে হয়; `push` → length; যাচাই প্রশ্নের কারণ লেখা বাদ পড়ছে |
| ৭ অক্টো | W1 D1 (৩/৩) ✅ | ★ 2.1 getType · Topic 2 Gate ✅ | 4 / 4 | Hint 2 (getType-এ value-এর বদলে নাম ফেরত) | — | `return` value বনাম type-এর নাম; guard-এর ক্রম |
| ৭–৯ অক্টো | W1 D2 ✅ | Warm-up Apply Discount · Topic 3 (৫ phase) + Gate ✅ · Topic 4 (৪ phase) · ★ getPort, canAccess, FizzBuzz, Grade, Leap Year · Topic 4 Gate ✅ | 5 / 5 | Hint 3 (Apply Discount: `price - percent` আর shorthand `result`) | — | shorthand-এ ভুল key (দ্বিতীয়বার); percent সূত্র; `&&` value ফেরত দেয় → `Boolean()`; `/` বনাম `%`; output string হুবহু (`FizzBuzz`); NaN-এর ফাঁদ (`typeof NaN` = number, `!== NaN` সবসময় true → `Number.isNaN`); `return` ছাড়া value হারায়; যাচাই প্রশ্নের "কেন" অংশ এখনো বাদ পড়ছে |

---

## Problem Log

যেসব ★ problem-এ **Hint 3 বা বেশি** লেগেছে, অথবা re-solve-এ fail করেছি — শুধু সেগুলো এখানে (বাকিগুলো week file-এর checkbox-এ)।

| Problem | Pattern | প্রথম তারিখ | Hint | কী মিস করেছিলাম | Re-solve +1 | +3 | +7 |
|---|---|---|---|---|---|---|---|
| Update Without Mutating (`updateName`) | Variables & Memory (reference) | ৫ অক্টো | 6 | object-এ `key: value` — বাঁয়ে key, ডানে variable; shorthand শুধু নাম এক হলে; spread shallow + ক্রম | ✅ variant (Add Item, ৬ অক্টো) | W1 D2 (variant) | ১২ অক্টো (variant) |
| Add Item: Two Ways | Variables & Memory (mutation) | ৬ অক্টো | 3 | `push` array না, নতুন length ফেরত দেয়; mutation-এ আসল input-ও print করে test | — | W1 D3 (variant) | ১৩ অক্টো (variant) |
| Apply Discount (warm-up) | Variables & Memory + Operators | ৭ অক্টো | 3 | object shorthand-এ ভুল key আবার (`result`); percent = `price * percent / 100`; একটা example-এ মিললেই ঠিক না — দুটো input-এ test | — | W1 D4 (variant) | ১৪ অক্টো (variant) |

---

## Re-solve Queue (আজ/সামনে কী আবার করতে হবে)

| তারিখ | Problem | ধাপ (+1 / +3 / +7) |
|---|---|---|
| ✅ ৬ অক্টো | Variant: Add Item (reference/mutation) — updateName-এর +1 | +1 |
| ✅ ৭ অক্টো | Variant: Apply Discount — object update without mutating | +3 |
| W1 D3 শুরুতে | Variant: array copy + `push`/`pop` return value | +3 |
| W2 Strings/Arrays-এর পর | LeetCode 1154 Day of the Year (isLeapYear কাজে লাগবে) · HackerRank Grading Students | variant |
| ১২–১৩ অক্টো | Variant: reference copy + typeof/null মিশ্র | +7 |

---

## Pattern আত্মবিশ্বাস (প্রতি মাস শেষে update)

| Pattern | অক্টোবর | নভেম্বর | ডিসেম্বর |
|---|---|---|---|
| Loops / basic | | | |
| Big-O হিসাব | | | |
| Strings | | | |
| Arrays | | | |
| Hashing | | | |
| Sorting | | | |
| Binary Search | — | | |
| Two Pointers | — | | |
| Sliding Window | — | | |
| Prefix Sum | — | | |
| Recursion | — | | |
| Linked List | — | | |
| Stack / Monotonic | — | | |
| Queue | — | | |
| Tree (DFS/BFS) | — | | |
| BST | — | — | |
| Heap | — | — | |
| Intervals | — | — | |
| Matrix | — | — | |
| Graph | — | — | |
| Topo / Union Find / Dijkstra | — | — | |
| Backtracking | — | — | |
| Greedy | — | — | |
| DP | — | — | |
| Bit / Trie / Math | — | — | |
| Practical JS / Async | | | |

(১–৫: ১ = দেখলে ভয়, ৩ = hint নিয়ে পারি, ৫ = ফাঁকা editor থেকে আত্মবিশ্বাসে)

---

## Mock Interview Log

| # | তারিখ | Problem | Understand | Approach | Code | Test | Communication | মন্তব্য |
|---|---|---|---|---|---|---|---|---|
| 1 | ২৯ নভেম্বর | | | | | | | |
| 2 | ৬ ডিসেম্বর | | | | | | | |
| 3 | ১৩ ডিসেম্বর | | | | | | | |
| 4 | ২০ ডিসেম্বর | | | | | | | |
| 5 | ২৭ ডিসেম্বর | | | | | | | |
| Final | ৩১ ডিসেম্বর | | | | | | | |

---

## মাসিক মূল্যায়ন

### অক্টোবর (১ নভেম্বর)
_W4 Day 7-এর প্রশ্নের উত্তর এখানে।_

### নভেম্বর (২৯ নভেম্বর)
_W8 Day 7-এর প্রশ্নের উত্তর এখানে।_

### ডিসেম্বর / ৩ মাস (৩১ ডিসেম্বর)
_final-days Day 4-এর প্রশ্নের উত্তর এখানে।_

---

## Plan পরিবর্তনের ইতিহাস

| তারিখ | পরিবর্তন | কারণ |
|---|---|---|
| ৪ অক্টোবর | Plan তৈরি — শুরু ৫ অক্টোবর (সোম) | — |
