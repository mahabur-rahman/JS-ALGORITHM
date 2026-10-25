// W2 D1 — Topic 9: Big-O 1 — Time Complexity
// Branch: october/week-2-day-1
// Follow the phases in live-coding/month-1-october/october-plan.md (Day 8).
// Read live-coding/00-framework/03-complexity-guide.md, sections 1–3.

// Guiding question:
// If input size n becomes 10 times larger, how does the amount of work grow?

// Phase 9.1 — Count by hand
// For n = 10 and n = 100, count count++ operations in:
// (a) one loop from 0 to n - 1
// (b) two nested loops, each running n times

// Phase 9.2 — Pair count
// Inner loop: j = i + 1 ... n - 1. For n = 5, count each iteration.

// Phase 9.3 — Repeated halving / doubling
// Count iterations for i = 1; i < n; i *= 2, with n = 8, 16, 1024.

// Phase 9.4 — Consecutive loops
// One loop over an input of length n, then one over length m.
// Count total work as n and m grow independently.

// Phase 9.5 — Nested loops that are not automatically quadratic
// (a) Outer loop n times; inner loop has a fixed 5 iterations.
// (b) Outer loop n times; a shared j increases to n and never resets.

// Phase 9.6 — Recursion call tree
// Draw f(n) = f(n - 1) + f(n - 1) for n = 3 and count all calls.

// ★ B1 — Complexity of 8 snippets
// For each: write Time and Auxiliary Space, and explain by counting work.

// (a)
// for (let i = 0; i < n; i++) total += arr[i];

// (b)
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) count++;
// }

// (c)
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) count++;
// }

// (d)
// for (let i = 1; i < n; i *= 2) count++;

// (e)
// for (let i = 0; i < n; i++) count++;
// for (let j = 0; j < m; j++) count++;

// (f)
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < 5; j++) count++;
// }

// (g)
// function f(n) {
//   if (n <= 1) return 1;
//   return f(n - 1) + f(n - 1);
// }

// (h)
// function g(n) {
//   if (n <= 1) return 1;
//   return g(n / 2) + 1;
// }

// ★ B2 — W1 complexity review
// SKIPPED: these exact problems' complexities were already explained earlier.

// ○ B3 — Optional estimate
// Estimate operation counts for O(n), O(n log n), O(n^2) when n = 1,000,000.

// Record each exercise only after solving it yourself:
// Time: O(?) because ...
// Auxiliary Space: O(?) because ...
