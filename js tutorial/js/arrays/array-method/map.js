/*
In simple terms, if there is an array (A) you want to operate on. map() takes in all elements in that array (A), 
performs a consistent action on each of those elements, and returns them into a new array (B).
*/


//Example:
/*Consider a list of names of some of our favourite Avengers. The problem is that the names in this list are not complete, i.e 
they are missing an important suffix. With map(), we can take all names in the array and append the "man" suffix to each and every one of them:


let firstNames = ["super", "spider", "ant", "iron"]
let lastName = "man";

let fullNames = firstNames.map(firstName => firstName + lastName);

console.log(fullNames);
*/


//Adding a woman super hero to the list
let firstNames = ['wonder', 'bat', 'spider', 'super'];
let male = 'man';
let female = 'woman';

let fullNames = firstNames.map((el,index) =>
    (index === 0)? el + female : el + male
);

//console.log(fullNames)


//Example 2
//We simply want to multiply every number in the target array by two and then return their products into a new array:
let numbers = [10, 20, 30, 40];
let multipler = 2;

let newArrayNum = numbers.map((ele) => ele * 2);

//console.log(newArrayNum)

//Example 3
//We have an array of decimals but we want each of those decimal numbers to be rounded to the nearest integer?

let nums = [8.8, 3.7, 4.26, 6.53, 11.49]

let rounded = nums.map((e) => Math.round(e))

//console.log(rounded)

//Example 4
//How to Change Strings to Numbers: we want to convert the ff string type to number

let strings = ['10', '15', '35', '8.6']

let toNumber = strings.map((elem) => Number(elem))

//console.log(toNumber)

//Example 5
/*  We have five avengers in the array, and each one has both a real name and a hero name. 
    However, we only want to retrieve their real names into the new array. 
*/

let avengers = [
    {name: "steve rogers", heroName: "captain america"},
    {name: "tony stark", heroName: "iron man"},
    {name: "bruce banner", heroName: "the hulk"},
    {name: "peter parker", heroName: "spiderman"},
    {name: "tchalla", heroName: "black panther"}
]

let realNames = avengers.map(el => el.name );

//console.log(realNames)


// Instead of defining a function directly inside of map(), we can define
// the function outside and then call it inside our map() function:

let avenge = [
    {name: "steve rogers", heroName: "captain america"},
    {name: "tony stark", heroName: "iron man"},
    {name: "bruce banner", heroName: "the hulk"},
    {name: "peter parker", heroName: "spiderman"},
    {name: "Derryck Banks", heroName: "black panther"}
]


let getName = elem =>elem.name;

let realNam = avenge.map(getName);

//console.log(realNam);


// How the Array Argument Works
/* 
    Earlier I stated that on every iteration, the map() method takes in the value being iterated over and also its index position. 
    There is another argument to add to those two, the Array argument. The array argument represents the target array being looped over, 
    along with its entire content. With this argument, you can essentially look into the full array to find something. 
*/

//  In this example, we will access the arr parameter to look in and check if the current item is the last item in the list. If it is not, 
//  we access the next item and subtract it from the current item. If it is the last, we just return it.
const oldArray = [33, 20, 10, 5];
const newArray = oldArray.map((currentVal, index, array) => {
    let nextItem = index + 1 < array.length ? array[index + 1] : 0;
    return currentVal - nextItem;
});


console.log(newArray);

