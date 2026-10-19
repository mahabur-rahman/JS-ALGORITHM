# TRACKER — Progress · Re-solve · মূল্যায়ন

> প্রতিদিন শেষে আমাকে লেখো `done W_ D_` + কোথায় আটকেছিলে / কত নম্বর hint লেগেছে।
> আমি এই file update করব। তুমি নিজেও লিখতে পারো।

### Sync নিয়ম (একই তথ্য দুই জায়গায় থাকবে না)
| তথ্য | একমাত্র জায়গা |
|---|---|
| কোন problem / phase শেষ হয়েছে | **মাসের plan file** (`october-plan.md`, `november-plan.md`, `december-plan.md`) — <span style="color:red">**🔴 DONE**</span> চিহ্ন |
| এখন কোথায়, মোট সংখ্যা | এই file — "এখন কোথায়" |
| দিনের সারাংশ (এক লাইন) | এই file — "দৈনিক Log" |
| শুধু কঠিন problem (Hint ≥ 3 বা re-solve fail) | এই file — "Problem Log" |
| কবে কী আবার solve | এই file — "Re-solve Queue" |
| তোমার code | `practice/` |
| কী শিখলাম (নিয়ম, ফাঁদ, প্রতিটা problem-এর complexity) | `LEARNED.md` |

---

## এখন কোথায়

| | |
|---|---|
| **বর্তমান দিন** | W1 D5 — Topic 7: Numbers & Math · P7.1 Price Total সম্পন্ন ✅ · Phase 7.1 চলছে; W1 D4 সম্পূর্ণ · LC 2629 verdict ও LC 2634 submission result জানানো বাকি |
| **পরের কাজ** | Phase 7.1-এর পরের ছোট concept: বড় integer ও `BigInt` · আলাদা pending: LC 2629 verdict, LC 2634 submission result; LC 2299 related practice (rules আলাদা) |
| **পিছিয়ে আছি?** | ক্যালেন্ডারে W2 চলছে, শেখার অবস্থান W1 D5। Gate পাস না করে পরের topic-এ যাব না; ○ Bonus কমিয়ে প্রয়োজনে সরাব। |
| **শেষ পাস করা Gate** | ✅ Topic 1 Variables & Memory (৬ অক্টো) · ✅ Topic 2 Data Types (৭ অক্টো) · ✅ Topic 3 Operators & Coercion (৮ অক্টো) · ✅ Topic 4 Conditions (৯ অক্টো) · ✅ Topic 5 Loops (১৮ অক্টো) · ✅ Topic 6 Functions (১৮ অক্টো) |
| **★ শেষ (মোট)** | 13 |
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
| ৯–১৩ অক্টো | W1 D3 ✅ | Topic 5 Loops (৫ phase) · ★ Odd-Index Sum (সামনে + পেছনে), 1512 Good Pairs, 1672 Richest Wealth, 5.4 First Descent · Topic 5 Gate (উত্তর ঠিক, যাচাই বাকি) | 4 / 4 | Hint 2 | — | label-এ index বনাম value গুলিয়ে ফেলা; "কেন"/dry-run অংশ বাদ; nested-এ ভেতরের accumulator বাইরের loop-এর ভেতরে; Gate-এর উত্তর chat-এ paste হয়েছে, `countIncreases` file-এ নিজে টাইপ হয়নি আর "কেন" follow-up বাদ গেছে |
| ১৩–১৪ অক্টো | W1 D4 (চলছে) | Topic 6 Functions — 6.1–6.4 · 6.5 callback (calculate, repeat) · LC 2703 ✅ · October plan-এ 6.5–6.6 ও LC 2667 DONE | 0 / 4 | Hint 2 (describeProduct) | — | "কেন" অংশ বারবার বাদ; output হুবহু না (`unknown` বনাম `Unknown`); অদরকারি `if`; `Math.round` দশমিক মুছে দেয় — একটা input-এ test; file save না করে "done"; P6.5a/P6.5b নিজের হাতে আবার লেখা বাকি |
| ১৫–১৮ অক্টো | W1 D4 ✅ | P6.6 Valid PIN · P6.7a Countdown · P6.7b Sum to N · ★6.1–★6.4 · Topic 6 Gate · Topic 5 warm-up Gate সম্পন্ন | 4 / 4 | — | — | Recursion-এর base case ও call stack; `sum`-এ accumulator, rest array; `map`-এ index callback-এ পাঠানো; `filter`-এ truthy/falsy; repeated function call-এ current value; output string exact match করতে হবে (`length` lowercase); loop boundary, nested-pair count ও early-return complexity যাচাই |

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
| ✅ ৯ অক্টো | Variant: `push` return value — Phase 5.1-এর ছোট problem-এ | +3 |
| W2 Strings/Arrays-এর পর | LeetCode 1154 Day of the Year (isLeapYear কাজে লাগবে) · HackerRank Grading Students | variant |
| ১২–১৩ অক্টো | Variant: reference copy + typeof/null মিশ্র | +7 |
| ✅ ১৮ অক্টো | Topic 5 Gate যাচাই: `countIncreases` নিজে টাইপ + ৩টা "কেন" (loop boundary · nested pair count · firstDescent-এর best/worst case) | Gate |
| ১৪ / ১৬ / ২০ অক্টো | 5.4 First Descent · 5.2 Good Pairs | +1 / +3 / +7 |

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
| ১৩ অক্টোবর | নিয়ম ৬–৮ যোগ (real-life example, solve-এর আগে ভাবনা, complexity মাপার পদ্ধতি) · `LEARNED.md` তৈরি · Claude `practice/`-এ কিছু লিখবে না | তোমার অনুরোধ |
| ১৫ অক্টোবর | Tracker ও Learned-কে W1 D4-এর সাম্প্রতিক plan marker-এর সাথে sync · একবারে একটি concept/problem ধাপে শেখানোর পছন্দ নথিভুক্ত · P6.6 Valid PIN-এ resume point নিশ্চিত | তোমার অনুরোধ |
