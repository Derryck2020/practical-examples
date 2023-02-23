// /*
// The filter() method is also mostly used, and the way it works is very simple.
// It entails filtering out one or more items (a subset) from a larger collection of items (a superset) based on some condition/preference.

// */

// //Example 1: filtering avengers with age less than but equal to 35
// let avengers = [
//     {name: "steve rogers", age: 35, heroName: "captain america"},
//     {name: "tony stark", age: 42, heroName: "iron man"},
//     {name: "bruce banner", age: 40, heroName: "the hulk"},
//     {name: "peter parker", age: 26, heroName: "spiderman"},
//     {name: "tchalla", age: 32, heroName: "black panther"}
// ]

// let youngActors = avengers.filter(avenger => avenger.age <= 35)

// console.log(youngActors)

// //Example 2: we filter out every person who is a toddler (whose age falls between 0 and 4 )

// let people = [
//     {name: "aaron", age: 65},
//     {name: "beth", age: 2},
//     {name: "cara", age: 13},
//     {name: "daniel", age: 3},
//     {name: "ella", age: 25},
//     {name: "fin", age: 1},
//     {name: "george", age: 43},
// ]

// let toddler = people.filter(tod => tod.age <= 4)

// console.log(toddler)

// //Example 3: In this example, we will only be filtering out the team members who are developers.

// let team = [
// 	{name: "aaron", position: "developer"},
//     {name: "beth", position: "ui designer"},
//     {name: "cara", position: "developer"},
//     {name: "daniel", position: "content manager"},
//     {name: "ella", position: "cto"},
//     {name: "fin", position: "backend engineer"},
//     {name: "george", position: "developer"},
// ]

// let onlyDevelopers = team.filter(persons => persons.position === 'developer')

// console.log(onlyDevelopers)

// //Example 4:
// /*
//     In this competition, there are three winners. The first will get the gold medal, the second will get silver, and the third, bronze.
//     By using filter and accessing the index property of every item on each iteration, we can filter out each of the three winners into different variables.
// */

// let winners = ["Anna", "Beth", "Cara"];

// let gold = winners.filter((first, index) => index === 0)
// let silver = winners.filter((second, index) => index === 1)
// let bronze = winners.filter((third, index) => index === 2);

// console.log(`Gold winner: ${gold}, Silver winner: ${silver}, Bronze winner: ${bronze}`)

// //Example 5: How to use the array parameter
// //In this example, we are going to define an array of four people. However, since there can only be three winners, the fourth person in the list will have to be discounted.

// let competitors = ["Anna", "Beth", "Cara", "David"];

// let displayWinners = (name, index, array) => {
//     let isNextItem = index + 1 < array.length? true : false;
//     if(isNextItem){
//         console.log(`The winner ${index+1} is ${name}`)
//     } else {
//         console.log(`Sorry, ${name} finished ${index+1}`)
//     }
// }

// competitors.filter((name, index, array) => displayWinners(name, index, array))

// const scores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14];
// const firstOddNumber = scores.find((number) => number % 2 === 1);
// console.log(firstOddNumber);

let employees = [
   { name: "aaron", age: 35, position: "senior developer" },
   { name: "beth", age: 25, position: "ui designer" },
   { name: "cara", age: 19, position: "developer" },
   { name: "daniel", age: 40, position: "content manager" },
   { name: "ella", age: 27, position: "cto" },
   { name: "fin", age: 30, position: "backend engineer" },
   { name: "george", age: 22, position: "developer" },
];

const youngEmployees = employees.filter((person) => person.age < 30);
console.log(youngEmployees);
