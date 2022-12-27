/*
The find() method is an Array.prototype (aka built-in) method which takes in a callback function and calls that function 
for every item it iterates over inside of the array it is bound to.

When it finds a match (in other words, the callback function returns true), the method returns that particular array item 
and immediately breaks the loop. So the find() method returns the first element inside an array which satisfies the callback function.
*/

//Example: we want find a person with a age = 2;

let people = [
    {name: "aaron", age: 65},
    {name: "beth", age: 2},
    {name: "ella", age: 25},
    {name: "cara", age: 13},
    {name: "daniel", age: 3},
    {name: "fredy", age: 2},
    {name: "fin", age: 1},
    {name: "george", age: 43},
]

let individual = people.find((indiv) => indiv.age === 2);

console.log(individual)

/*  You could see we had two people with age: 2, but the find() return the first instance whiles ignoring the second.
    It is important to know that it stops executing once the callback function returns a true statement. */

// How to find an item by its index
/*  Here we will be finding and returning the spot belonging to 'ella' from inside the array using its unique index value. 
    This demonstrates one way we can use the index property inside of our callback function with the find() method: */

function findByIndex(person, index) {
    return index === 2;
}

let chosenPerson = people.find((person, index) => findByIndex(person, index))

console.log(chosenPerson)


//HOW TO USE THE CONTEXT OBJECT WITH find()

/*
EXAMPLE

Let's say we have an array of job applications and want to select just the first applicant who meets all of the criteria.
All criteria is defined inside a context object called criteria and that object is subsequently passed as a second parameter 
into the find() method. Then, from inside the callback function, we access the object to check if an applicant matches all of 
the criteria specified there.
*/

let applicants = [
    {name: "aaron", yrsOfExperience: 18, age: 66},
    {name: "beth", yrsOfExperience:  0, age: 18},
    {name: "cara", yrsOfExperience: 4, age: 22},
    {name: "daniel", yrsOfExperience: 3, age: 16},
    {name: "ella", yrsOfExperience: 5, age: 25},
    {name: "fin", yrsOfExperience: 0, age: 16},
    {name: "george", yrsOfExperience: 6, age: 28},
]

let criteria = {
	minimumExperience: 3,
    lowerAge: 18,
    upperAge: 65
}

let luckyApplicant = applicants.find(function(applicant) {
	return applicant.yrsOfExperience >= this.minimumExperience && applicant.age <= this.upperAge && applicant.age >= this.lowerAge ;
}, criteria)

console.log(luckyApplicant);
/*  Technically, three applicants (Cara, Ella and George) all qualify based on the criteria. In other words, 
    the three of them are at least 18 years old, not older than 65, and have at least 3 years of working experience.
    However since the find() method always returns ONLY the first instance which evaluates to true, 
    the other two will be ignored and the loop will be broken.
*/


//DIFFERENCE BETWEEN filter() AND find()

/*
1.  filter() returns an array containing the element that satisfies the condition, 
    but find() returns the element itself that satisfies the condition.

2.  In filter(), whole array is iterated despite the fact that the element being searched for is present at the beginning. 
    But in find(), as soon as the element that satisfies the condition is found, it gets returned.
*/

//Example: Say we want to access the name of Daniel with filter() and find() separately

//find()
const personName = applicants.find(person => person.age === 16);
console.log(personName)
console.log(personName.name)

//filter()
const personName2 = applicants.filter(person => person.age === 16);
console.log(personName2)
console.log(personName2[0].name)