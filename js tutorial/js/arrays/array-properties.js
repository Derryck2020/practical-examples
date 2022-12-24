// Array Properties and Methods
let names = ['john', 'peter', 'angel', 'darina', 'rita', 'fred'];

//length
console.log(names.length);
console.log(names[names.length-1]);

//concat
const lastNames = ['akins', 'berry', 'poper', 'wisdom'];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift ---> add item at the beginning of the array
allNames.unshift('susy');
allNames.unshift('kwame');
console.log(allNames);

//shift ---> remove first item of the array
allNames.shift('susy');
console.log(allNames);

//push ---> add item at the end of the array
allNames.push('breto');
allNames.push('steps');
console.log(allNames);

//pop ---> remove item at the end of the array
allNames.pop();
allNames.pop();
console.log(allNames);

//splice - mutates original array (we can add and remove at the same time)
const removeName = allNames.splice(2, 3, 'one', 'twi');
console.log(removeName)
console.log(allNames)