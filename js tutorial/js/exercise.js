//Arrays and loops

//Example 1
/*
const names = ['fred', 'matilda', 'kofi'];
const lastNames = ['benson'];

let newArray = [];

//for loop
for (let i = 0; i < names.length; i++){
    console.log(i, names[i])
    const fullName = `${names[i]} ${lastNames}`
    newArray.push(fullName);
};

console.log(newArray)


//Example 2
const gas = [20, 30, 50, 25];
const food = [15, 35, 64];

function calculateExpenses(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    if (total > 100){
        console.log('Whoa! You are spending too much');
        return total;
    } else {
        console.log('You are good to go')
        return total
    }
}
const gasTotal = calculateExpenses(gas)
const foodTotal = calculateExpenses(food)
const randomTotal = calculateExpenses([2, 22, 14, 30])

console.log(gasTotal)
console.log(foodTotal)
console.log(randomTotal)

//using object
console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal
})

*/
function morning(name){
    return `Goodmorning ${name.toUpperCase()}`
}

function greet(name, cb){
    const myName = 'Amber'
    console.log(`${cb(name)}, My name is ${myName}`)
}

greet('bobo', morning)