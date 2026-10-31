# 06 — প্রতিদিনের Session Template (৬০–৯০ মিনিট)

> প্রতিদিন practice শুরুর আগে এই template অনুযায়ী চলবে।
> Code লিখবে: `live-coding/practice/<month>/week-N/day-N.js` (যেমন `practice/october/week-1/day-1.js`)।

---

## সময় ভাগ

| সময় | অংশ | কী করবে |
|---|---|---|
| ০–৫ মিনিট | **Warm-up** | গতকালের একটা ★ problem ফাঁকা editor-এ আবার (শুধু pseudocode হলেও চলবে) |
| ৫–২৫ | **Topic আলোচনা (আগে)** | আমি topic আলোচনা করব ছোট code + আসল output দিয়ে; তুমি প্রশ্ন করবে। পুরো না বুঝে problem-এ যাবে না |
| ২৫–৭০ | **Guided Build — প্রতিটা ★ problem** | ছোট ধাপে: প্রতিটা ধাপে তুমি পরের লাইন আন্দাজ করবে, আমি `console.log` output সহ মিলিয়ে দেব, শেষে পূর্ণ solution — তুমি নিজে টাইপ করে চালাবে (`07-guided-build-method.md`) |
| ৭০–৮০ | **Complexity + তুলনা** | প্রতিটা problem-এ Time/Space + অন্তত একটা বিকল্প উপায়ের টেবিল |
| ৮০–৮৫ | **বলো** | একটা problem English-এ ৬০ সেকেন্ডে জোরে ব্যাখ্যা |
| ৮৫–৯০ | **Reflection + Tracker** | নিচের প্রশ্ন + `TRACKER.md` update (অথবা আমাকে জানাও, আমি update করব) |

৬০ মিনিট পেলে: Warm-up আর "বলো" ছোট করো, কিন্তু **Main problems আর Reflection বাদ দেবে না।**
★ সব শেষ না হলে বাকিটা পরের দিনের শুরুতে। দিন পিছালে সমস্যা নেই — ★ ঠিকঠাক শেষ করাই আসল।

---

## Reflection প্রশ্ন (প্রতিদিন, ২–৩ লাইনে উত্তর)

1. কোথায় আটকেছিলাম?
2. কেন আটকালাম?
3. কোন চিন্তা / প্রশ্ন মাথায় আসেনি, যেটা এলে আটকাতাম না?
4. কোন pattern চিনতে পারিনি? কোন clue দেখে চেনা উচিত ছিল?
5. পরের বার কী আলাদা করব?
6. আজ আত্মবিশ্বাস ১–১০: ___

---

## AI tutor-এর সঙ্গে শেখার পছন্দ ও workflow

- শেখানোর ভাষা বাংলা। আগে অল্প করে concept, trace/console output ও দরকারি edge case বোঝাবে; তারপর problem দেবে।
- Problem LeetCode-style হবে, English ও বাংলা statement, input/output/constraints এবং বাস্তব উদাহরণসহ। Exact LeetCode match থাকলে সরাসরি link দেবে।
- Learner চেষ্টা করার আগে complete solution বা final code দেবে না। Code দিলে review, bug/edge case ও complexity শেখাবে; hint চাইলে ছোট hint দেবে।
- Pattern শেখাই লক্ষ্য—হাজার problem নয়। আগে সমাধান করা একই problem আবার দেবে না; exact LC problem submit হয়ে গেলে সেটি repeat/আবার submit নয়। দরকার হলে একই concept-এর আলাদা variant স্পষ্ট করে বলবে।
- User নিজে বললে তবেই commit/push/merge করবে। Workspace-এর code বা notes user-এর হয়ে লিখবে না, যদি না user সরাসরি চায়।

## AI tutor-এর সঙ্গে কীভাবে কাজ করবে

| তুমি লিখবে | আমি করব |
|---|---|
| `start W1 D1` / "আজকের session শুরু" | দিনের লক্ষ্য মনে করিয়ে দেব, ছোট warm-up প্রশ্ন দেব |
| `W2 D3 Valid Palindrome — Hint 2` | শুধু ওই level-এর hint |
| তোমার code paste করে "review" | bug, edge case, complexity, আরো পরিষ্কার উপায় — কিন্তু তুমি নিজে ঠিক করবে |
| `done W1 D1` + reflection | `TRACKER.md` update, re-solve তারিখ বসানো, পরের দিনের preview |
| `interview` | Interviewer mode: problem দেব, follow-up প্রশ্ন করব, শেষে feedback |
| `unseen` | pattern নাম ছাড়া একটা problem |
| "পিছিয়ে গেছি" | plan পুনর্বিন্যাস — কোনটা January-তে যাবে ঠিক করব |

---

## Re-solve নিয়ম (Spaced Repetition)

Re-solve হবে শেখার প্রয়োজনে, বাধ্যতামূলক সংখ্যা পূরণ করতে নয়:
- **Day +1 / +3 / +7:** প্রয়োজন হলে pseudocode থেকে code, অথবা ফাঁকা editor থেকে timed practice
- আগে নিজে সম্পন্ন করা একই problem হলে default হিসেবে skip করে পরের নতুন problem-এ যাও; user চাইলে তবেই repeat করো
- নতুন variation হলে সেটি duplicate নয়—variation-এর পার্থক্যটি practice করো

Problem complete হিসেবে নথিভুক্ত হবে user-এর নিজের solution, প্রয়োজনীয় test ও complexity ব্যাখ্যার ভিত্তিতে; Day +7 repeat সব problem-এর বাধ্যতামূলক gate নয়।
