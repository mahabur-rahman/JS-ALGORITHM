// add total number

// function sumOfAll(n) {
//   let total = 0;

//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }

//   return total;
// }

function sumOfAll(n) {
  return (n * (n - 1)) / 2;
}

console.log(sumOfAll(5));
