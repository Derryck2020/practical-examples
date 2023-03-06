/*

## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters
4. create 3 vars "order1","order2","order3"
5. call calculateTotal, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/
//Function declaration
function calculateTotal(subTotal, tax){
    return subTotal + tax;
}

const order1 = calculateTotal(20, 11);
const order2 = calculateTotal(31, 8);
const order3 = calculateTotal(88, 21);

console.log(order1, order2, order3)


//Function expression
let calculateResult = function work(subTotals, taxs){
    return subTotals + taxs;
}
let delivery1 = calculateResult(30, 20);
let delivery2 = calculateResult(110, 15); 
console.log(delivery1, delivery2)
