
/*
let num1 = 6;
let num2  = '6';

const value = num1 == num2;
const value1 = num1 === num2;

console.log(value);
console.log(value1);


function convertToCm(value){
    console.log('The value is: ' + (value * 2.54) + ' cm');
}

const wallHeight = 67;

const width = convertToCm(100);
const height = convertToCm(wallHeight);

const dimensions = [width, height];

console.log (dimensions)
*/

let longWord = 'congo';
const arr = Array.from(longWord);

console.log(arr)
let spliced = arr.splice(0, 3, 'rice', 'titi', 23)

console.log(arr)
console.log(spliced)

let negSplice = arr.splice(-1, 0, 'mango', 'fan')
console.log(arr)

let sWord = ['s', 'h', 'o', 'w', 'i', 'mango', 'n', 'g']
let vim = sWord.slice(1,3)
console.log(vim)
let negvim = sWord.slice(-2)
console.log(negvim)

let addUp = arr.concat(sWord)

console.log(addUp)

console.log(addUp.indexOf('mango'))
console.log(addUp.lastIndexOf('mango'))
console.log(addUp.includes('mang'))
