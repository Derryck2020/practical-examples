// Web Storage API - provided by browser and they are local storage and session storage
// local storage - any data stored with the localStorage will be available after the browser is restarted
// session storage - data avaliable only when browser is in used.
// These are the methods used on them: setItem, getItem , removeItem, clear

// localStorage.setItem('name','john')
// sessionStorage.setItem('name','john')

localStorage.setItem('surname', 'john');
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');

const surname = localStorage.getItem('surname');
console.log(surname);

localStorage.removeItem('surname');
const anotherName = localStorage.getItem('surname');
//console.log(anotherName);


// Passing Mutiple Values in localStorage or sessionStorage
// We use JSON.stringify(),and JSON.parse to deal with mutiple values
// JSON.stringify() --- this convert it to a string
// JSON.parse --- convert it back to an array

const friends = ['john', 'peter', 'bob', 'ama', 'ben', 'freda'];
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[4]);


//Example to check if the value is already stored in the local storage and if not, we store it
let fruits;

if (localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
    fruits = [];
}
console.log(fruits);
//fruits.push('apple');
//fruits.push('orange');
//localStorage.setItem('fruits', JSON.stringify(fruits));
