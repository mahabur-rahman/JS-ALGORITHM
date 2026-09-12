const orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 300, status: "pending" },
  { id: 3, amount: 800, status: "completed" },
  { id: 4, amount: 200, status: "cancelled" },
  { id: 5, amount: 1000, status: "completed" },
];

// [500, 800, 1000] - 2300

const completedAmounts = orders
  .filter((order) => order.status === "completed")
  .reduce((accumulator, order) => accumulator + order.amount, 0);

console.log(completedAmounts);
