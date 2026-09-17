const orders = [
  { id: 1, customer: "A", amount: 500, status: "completed" },
  { id: 2, customer: "B", amount: 300, status: "pending" },
  { id: 3, customer: "C", amount: 800, status: "completed" },
  { id: 4, customer: "D", amount: 200, status: "cancelled" },
  { id: 5, customer: "E", amount: 1000, status: "completed" },
];

// result : 2300

// using here filter, map, reduce

const totalAmountOfProduct = orders
.filter(order => order.status === 'completed')
.map(order => order.amount)
.reduce((total, amount)=> total + amount, 0)


console.log(totalAmountOfProduct);
