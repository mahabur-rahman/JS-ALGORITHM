// October · Week 1 · Day 2 — Operators & Coercion · Conditions
// চালাও: node live-coding/practice/october/week-1/day-2.js

// ===== Warm-up (variant) =====

// /**
//  * @param {{name: string, price: number}} product
//  * @param {number} percent
//  * @return {{name: string, price: number}}
//  */
// var applyDiscount = function (product, percent) {

//   const discount = product.price * percent / 100;
//   const newPrice = product.price - discount

//   return {
//     ...product,
//     price: newPrice
//   }

// };

// const product = { name: "Pen", price: 200 };
// console.log(applyDiscount(product, 10)); // { name: 'Pen', price: 90 }
// console.log(product); // { name: 'Pen', price: 100 }

// ===== Problem: Get Port =====

// var getPort = function (config) {
//   return config?.port ?? 3000;
// };

// console.log(getPort({ port: 8080 }));
// console.log(getPort({ port: 0 }));
// console.log(getPort({}));
// console.log(getPort());

/**
 * @param {{isActive: boolean, role: string} | null} user
 * @return {boolean}
 */

// var canAccess = function (user) {

//     return Boolean(user && user.isActive === true && (user.role === 'admin' || user.role === 'editor'))
// };

// console.log(canAccess({ isActive: true, role: "admin" }));
// console.log(canAccess({ isActive: false, role: "admin" }));
// console.log(canAccess({ isActive: true, role: "viewer" }));
// console.log(canAccess(null));
// console.log(canAccess(undefined));

// ===== Topic 4: Conditions =====

// function ticket(age) {
//   if (age < 5) return "free";
//   else if (age < 18) return "child";
//   else if (age >= 60) return "senior";
//   else return "adult";
// }
// console.log(ticket(3), ticket(12), ticket(30), ticket(65));

// function divide(a, b) {
// //   console.log(`a : ${a}, b : ${b}`)

// if(b === 0) return "cannot divide by zero"

// return a / b

// }
// console.log(divide(10, 2), divide(5, 0), divide(5, 3));   // 5 cannot divide by zero

// function showStockWrong(stock) {
//   if (stock) return `${stock} items left`;
//   return "stock unknown";
// }

// function showStockRight(stock) {
//   if (stock === undefined || stock === null) return "stock unknown";
//   return `${stock} items left`;
// }

// console.log(showStockWrong(5), "|", showStockWrong(0));
// console.log(showStockRight(5), "|", showStockRight(0), "|", showStockRight(undefined));

// for (const v of [[], {}, "0", "false", 0, ""]) {
//   console.log(JSON.stringify(v), "→", v ? "truthy" : "falsy");
// }

// function dayType(day) {
//   switch (day) {
//     case "sat":
//     case "sun":
//       return "weekend";
//     case "mon":
//     case "tue":
//     case "wed":
//     case "thu":
//     case "fri":
//       return "weekday";
//     default:
//       return "invalid";
//   }
// }
// console.log(dayType("sun"), dayType("tue"), dayType("xyz"));

// const PRICE = { small: 100, medium: 150, large: 200 };
// function getPrice(size) {
//   return PRICE[size] ?? "unknown size";
// }
// console.log(getPrice("medium"), getPrice("xl"));

// function fall(level) {
//   let msg = "";
//   switch (level) {
//     case 1: msg += "one ";
//     case 2: msg += "two ";
//     case 3: msg += "three ";
//   }
//   return msg;
// }
// console.log(fall(2));
// console.log(fall(1));

// ===== Problem 412: Fizz Buzz =====

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5
// answer[i] == "Fizz" if i is divisible by 3
// answer[i] == "Buzz" if i is divisible by 5
// answer[i] == i (as a string) if none of the above are true

// const fizzBuzz = function (n) {
//   const answer = [];

//   for (let i = 1; i <= n; i++) {
//     // console.log(`${i}`)

//     let result;

//     if (i % 3 === 0 && i % 5 === 0) {
//       // console.log(`${i} is divisible by 3 and 5`);
//       // answer.push(`FizzBuzz`);
//       result = "fizzBuzz"
//     } else if (i % 3 === 0) {
//       // console.log(`${i} is divisible by 3`);
//       // answer.push(`Fizz`);
//       result = "Fizz"
//     } else if (i % 5 === 0) {
//       // console.log(`${i} is divisible by 5`);
//       // answer.push(`Buzz`);
//       result = "Buzz"
//     }else {
//       // answer.push(String(i))
//       result = String(i)
//     }

//     answer.push(result)
//   }

//   return answer;
// };

// console.log(fizzBuzz(15));

// ===== Problem: Grade Calculator =====

// /**
//  * @param {*} score
//  * @return {string}
//  */
// var grade = function (score) {

// console.log(score )

//   if(typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 100) return 'Invalid'

//   if(score >= 90){
//     return "A"
//   }else if(score >= 80) {
//     return "B"
//   }else if(score >= 70) {
//     return "C"
//   }else if(score >=60) {
//     return 'D'
//   }else {
//     return "F"
//   }
// };

// const score = 60
// console.log(grade(score))

// ===== Problem: Leap Year =====

/**
 * @param {number} year
 * @return {boolean}
 */
// var isLeapYear = function (year) {
//   //   if (year % 4 === 0) {
//   //     return true;
//   //   }

//   //   if (year % 100 === 0) {
//   //     return false;
//   //   }

//   //   if (year % 400 === 0) {
//   //     return true;
//   //   }

//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//    return true
//   };

//   return false;
// };

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2023));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2100));



// function check(x) {
//   switch (x) {
//     case 1: return "one";
//     case 2:
//     case 3: return "two-or-three";
//     default: return "other";
//   }
// }
// console.log(check(1), check(3), check(5), check("1"));


function shipping(weight) {

  if(typeof weight !== "number" || weight <= 0){
    return "invalid"
  }
  
  if(weight > 20) {
    return 'frieght'
  }

  if(weight > 5){
    return "heavy"
  }

  return "standard"
}
console.log(shipping(3), shipping(5), shipping(12), shipping(25), shipping(0), shipping("2"));


