function recursion2(n) {
  let total = 0;

  for (let i = n; i > 0; i--) {
    total = total + i;
  }

  return total;
}

console.log(recursion2(5)); // 5 + 4 + 3 + 2+ 1
