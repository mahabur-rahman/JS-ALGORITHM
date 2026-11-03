// W2 D4 — Topic 10: Strings 2 — Frequency, Anagram, Prefix
// Branch: october/week-2-day-4
// Follow Day 11 in live-coding/month-1-october/october-plan.md.
// Study concepts and attempt each problem in chat before writing your own code here.

// Mini Problem — Lowercase Letter Frequency

// Thought :
// - given s mean string then loop using for because of need index
// - declare variable like result : []

function letterFrequency(s) {
  // Step 1: Create an array with 26 positions
  const result = Array(26).fill(0);

  // Step 2: Loop through every character
  for (const ch of s) {
    // Step 3: Find the character's index (0-25)
    const index = ch.charCodeAt(0) - "a".charCodeAt(0);

    // Step 4: Increase the count

    result[index]++;
  }

  // Step 5: Return the result
  return result;
}

console.log(letterFrequency("supertuper"));
