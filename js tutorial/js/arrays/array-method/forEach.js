/*  The forEach() array method loops through any array, executing a provided function once for 
    each array element in ascending index order. This function is referred to as a callback function.
    Here are the standard ways of writing the forEach Loop:

    array.forEach(callbackFunction);
    array.forEach(callbackFunction, thisValue);

    The callback function can accept up to three different arguments, though not all of them are required. 
    Here are some examples of forEach() loops that use both the normal function and the ES6 method to declare the callback function:

    Using only Current Element
    array.forEach((currentElement) => { ... })
    array.forEach(function(currentElement) { ... })

    Using only Current Element and Index
    array.forEach((currentElement, index) => { ... })
    array.forEach(function(currentElement, index) { ... })

    Using only Current Element, Index and array
    array.forEach((currentElement, index, array) => { ... })
    array.forEach(function(currentElement, index, array){ ... })

    Using all parameters with thisValue (value of this in the callback) 
    array.forEach((currentElement, index, array) => { ... }, thisValue)
    array.forEach(function(currentElement, index, array) { ... }, thisValue)
*/

const people = [
    {name: 'bobo', age: 20, position: 'Developer'},
    {name: 'peter', age: 25, position: 'Designer'},
    {name: 'susy', age: 30, position: 'Director'},
]

//Passing an anonymous callback function directly into the forEach
//function(currentElement){} ====> anonymous function
people.forEach(function (params) {
    console.log(params.position.toUpperCase())
})


//Examples

//1.  Given an array of numbers. Return a new array of numbers that is every original number squared.
function squaredArray(arr){
    let squaredArr = [];

    arr.forEach(function(el){
    squaredArr.push(el**2)
    })

    return squaredArr;
}

console.log(squaredArray([4, 2, 3, 5])); 


//2.  Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyNumsInArr(arry){
    let product = 1;
    arry.forEach(function(ele){
        product *= ele;
    console.log(product)
    })
}

multiplyNumsInArr([1, 3, 5])


//Method 2: using arrow function
function multiplyNumsInArr(arry){
    let product = 1;
    arry.forEach(ele => product *= ele);
    //alert(product)
}

//For more illustration, read here ==> https://www.freecodecamp.org/news/javascript-foreach-js-array-for-each-example/

//Consider this example: Assume we have an array of employee details that includes their names, age, salary amount, and currency:
const staffsDetails = [
    { name: "Dennis Nosh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];


//HOW TO USE THE CURRENTELEMENT ARGUMENT
//If we want to display all of the names individually with some words around them, we can use the forEach() method as follows:
staffsDetails.forEach((staffsDetails) =>{
    let sentence = `I am ${staffsDetails.name} a staff of Ashes Royal.`;
    //console.log(sentence)
})
//or We could also destructure the currentElement value in case it’s an object that contains key/value pairs this way:
staffsDetails.forEach(({name}) =>{
    let sentence = `I am ${name} a staff of Ashes Royal.`;
    //console.log(sentence)
})

//HOW TO USE THE INDEX ARGUMENT
//We could also get the index of each array item by just making use of the unbuilt index argument this way:
staffsDetails.forEach((staffsDetails, index) =>{
    let sentence = `index ${index}: I am ${staffsDetails.name} staff of Ashes Royal.`;
    //console.log(sentence)
})

//HOW TO USE THE ARRAY ARGUMENT
staffsDetails.forEach((staffsDetails, index, array) =>{
    console.log(array)
}) //This would output the entire array 4 times since we have 4 items and the iteration runs 4 times.

//Adding all the staff member's salaries together
let totalSalary = 0 
staffsDetails.forEach(({salary}) =>{
    totalSalary += salary;
})
console.log(totalSalary + ' USD')


//How to Use Conditionals in a forEach() Callback Function
/*
When looping through arrays, we may want to check for specific conditions, as is commonly done with the for loop method. 
We can pass these conditions into our callback function or any other operation we want to run on each array item. For example, 
if we only want to show the names of people whose salaries are greater than or equal to 4000 from the array of staff details 
we declared earlier, we can do the following:
*/
staffsDetails.forEach(({name, salary}) =>{
    if(salary >= 4000){
        console.log(name)
    }
})


//COMPARING forEach() WITH A for loop
/*
The for loop is very similar to the forEach method, but each possess some features that are unique to them such as:

//Break out and continue in a Loop
When looping through an array, we may want to either break out or continue the loop when a certain condition is met (meaning we skip). 
This is possible with the break and continue instruction, but it does not work with the forEach() method, as shown below:

const scores = [12, 55, 70, 47];

scores.forEach((score) => {
    console.log(score);

    if (score === 70) 
    break;
});
This will throw a syntax error of Illegal break statement. This applies also to the continue instruction which would 
also throw an Illegal continue statement: no surrounding iteration statement.

const scores = [12, 55, 70, 47];

scores.forEach((score) => {
    console.log(score);

    if (score === 70) 
    continue;
});

But fortunately this works with the for loop method perfectly:

const scores = [12, 55, 70, 47];

for (i = 0; i < scores.length; i++) {
    console.log(scores[i]);

    if (scores[i] === 70) 
    break;
}// 12, 55, 70

And the same with the continue instruction:

const scores = [12, 55, 70, 47];

for (i = 0; i < scores.length; i++) {
    if (scores[i] === 70) 
    continue;

    console.log(scores[i]);
}// 12, 55, 47
*/


//ARRAY WITH MISSING ELEMENTS
/*
Another important comparison to make is in a situation whereby the array we are iterating over 
has some missing values/array items as seen below:

const studentsScores = [70, , 12, 55, , 70, 47];
This could be due to a developer error or something else, but these two methods take two different 
approaches to looping through these types of arrays. The for loop returns undefined where there are missing values, 
whereas the forEach() method skips them.

For Loop

const studentsScores = [70, , 12, 55, , 70, 47];

for (i = 0; i < studentsScores.length; i++) {
    console.log(studentsScores[i]);
}// 70, undefined, 12, 55, undefined, 70, 47


forEach()

const studentsScores = [70, , 12, 55, , 70, 47];

studentsScores.forEach((stundentScore) => {
    console.log(stundentScore);
});
//70, 12, 55, 70, 47
*/

//NB: Async?Await does not work with the forEach() method but works with the for loop method