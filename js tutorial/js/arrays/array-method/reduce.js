// /*
// The reduce() method iterates over an array and uses a callback function. It reduces the value in
// the array into a single value. The single value can be a number, an array, object, etc but it will have one value.

// This is pretty similar to the behavior of the Map function, but it has a twist–it allows us to return any value
// from our function in a particular iteration, which will then exist as a parameter (argument) in that function in
// the next iteration (that value is commonly known as the accumulator).

// In the callback function, it uses two parameters:
// param 1 (acc -> accumlator): Total of all calculations
// param 2 (curr -> current value): current iteration/value
// */

// //Example 1: Calculating the sum of arrays

// const arrItems = [2,1,3,5,4]

// const sum = arrItems.reduce((acc, curr) => acc = acc + curr, 0)

// console.log(sum)

// //Example 2 With Method2: Calculating total Salary
// const staffsDetails = [
//     { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
//     { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
//     { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
//     { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
// ];

// function callbackFunction(acc, curr){
//     acc = acc + curr.salary;
//     console.log(acc, curr)
//     return acc;
// }

// const initialValue = 0;

// const totalSalary = staffsDetails.reduce(callbackFunction, initialValue);

// console.log(totalSalary);

// const animals = [
//    "lion",
//    "dog",
//    "lion",
//    "fish",
//    "zebra",
//    "lion",
//    "dog",
//    "zebra",
// ];
// const count = animals.reduce((acc, current) => {
//    acc[current] = (acc[current] || 0) + 1;
//    return acc;
// }, {});
// console.log(count);

const numbers = [5, 10, 15, 20, 25];
let sum = numbers.reduce((acc, curr) => acc + curr, 10);

console.log(sum);
