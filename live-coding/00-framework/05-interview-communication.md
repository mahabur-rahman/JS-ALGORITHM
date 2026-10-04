# 05 — Interview Communication (Bangla → English)

> লক্ষ্য fancy English না। লক্ষ্য **পরিষ্কার, ছোট বাক্যে technical কথা বলা।**
> প্রতিটা ★ problem-এর শেষে ৬০ সেকেন্ড জোরে English-এ ব্যাখ্যা করবে। সম্ভব হলে phone-এ record করে শুনবে।

---

## ১. প্রতিটা ধাপের জন্য বাক্য

### Clarify
- "Let me make sure I understand the requirement."
- "So, given ___, I need to return ___. Is that right?"
- "Can the input be empty? What should I return in that case?"
- "Can there be duplicates / negative numbers?"
- "Is the array sorted?"
- "Roughly how large can the input be?"
- "Can I modify the input array, or should I keep it unchanged?"
- "If there are multiple valid answers, can I return any of them?"

### Example
- "Let me walk through a small example."
- "For the input `[2, 7, 11, 15]` and target `9`, the answer should be `[0, 1]`, because 2 + 7 = 9."

### Brute force
- "My first approach would be to check every pair. That's O(n²) time and O(1) space."
- "It works, but it's slow for large inputs."

### Bottleneck → Optimize
- "The bottleneck here is the inner loop, where I search for the complement again and again."
- "I can improve this by storing values I've already seen in a hash map."
- "I need constant-time lookup, so I'm considering a Map."
- "Since the array is sorted, I can use two pointers instead of extra space."
- "This brings the time complexity down to O(n), at the cost of O(n) extra space."

### Before coding
- "Before coding, I'll outline the steps."
- "I'll write it in JavaScript. I'll start with the main function and add a helper if needed."

### While coding (ছোট ছোট মন্তব্য)
- "Here I'm initializing the map."
- "Now I'm iterating through the array."
- "This check handles the case where ___."
- "I'll come back to this edge case after the main logic."

### Testing
- "Let me trace through the example to verify."
- "At index 0, the map is empty, so I store 2. At index 1, I need 2, which is in the map, so I return `[0, 1]`."
- "Let me test an edge case: an empty array."
- "I found a bug: my loop should stop at `n - 1`, not `n`. Let me fix that."

### Complexity
- "Time complexity is O(n), because I visit each element once."
- "Space complexity is O(n), because in the worst case the map stores every element."

### Alternatives / Trade-offs
- "Another approach would be to sort the array first and use two pointers. That's O(n log n) time but O(1) extra space, if sorting in place is allowed."
- "The trade-off is time versus space."

### আটকে গেলে
- "Let me think out loud for a moment."
- "I'm not sure about the optimal solution yet, so let me start with brute force."
- "Could I get a small hint about the direction?" (শুধু শেষ উপায় হিসেবে)

---

## ২. সাধারণ English ভুল (বাংলাভাষীদের)

| ❌ ভুল | ✅ ঠিক | কেন |
|---|---|---|
| "I am understanding the problem." | "I understand the problem." | understand সাধারণত continuous হয় না |
| "We will take a map." | "We'll use a map." / "I'll create a map." | data structure "take" করে না |
| "This loop will run n times, na?" | "This loop runs n times, right?" | |
| "Time complexity will be O of n." | "The time complexity is O(n)." — উচ্চারণ: "big O of n" | |
| "I am doing the brute force first." | "I'll start with a brute-force approach." | |
| "If the array is empty then we will return the empty." | "If the array is empty, we return an empty array." | "the empty" অসম্পূর্ণ |
| "Same same values" | "Duplicate values" / "Equal values" | |
| "Actually basically what I am doing is..." | "What I'm doing is..." | filler শব্দ কমাও |
| "Can you repeat the question again?" | "Could you repeat the question?" | "repeat again" দ্বিরুক্তি |
| "I have a doubt." | "I have a question." | "doubt" মানে সন্দেহ |
| "Revert back" | "Revert" / "Get back to you" | |
| "Discuss about" | "Discuss" | |
| "Output is coming wrong." | "The output is incorrect." | |
| "It's giving error." | "It throws an error." / "I'm getting an error." | |

---

## ৩. ৬০ সেকেন্ডের ব্যাখ্যার কাঠামো

```
1. Problem in one sentence.        "We need to find two indices whose values add up to the target."
2. Key insight.                    "For each number, the partner we need is target minus that number."
3. Approach.                       "I store each number's index in a map as I go, and check if the partner is already there."
4. Complexity.                     "That's O(n) time and O(n) space."
5. Trade-off / alternative.        "Sorting with two pointers would use less space but takes O(n log n) and loses the original indices."
```

প্রতিটা week file-এ প্রতিদিন **"বলো"** অংশে এই কাঠামো ব্যবহার করবে: আগে বাংলায় মাথায়, তারপর English-এ জোরে।
