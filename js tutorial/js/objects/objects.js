//OBJECTS
/*
Objects are collections of key (property) value pairs. Property values can be strings, numbers, booleans, arrays and functons.
If the property is a function, it is called a medthod.
*/

const person = {
    name: 'peter',
    age: 16,
    married: true,
    siblings: ['anna', 'mike'],
    greeting: function (name) {
        console.log(`Hello, my name is ${name}`)
    },
    sayHello(name) {
        console.log(`Call me ${name}`)
    }
};

//console.log(person.siblings[0])
person.sayHello('jake')
person.city = 'florida'; //adding of a property
delete person.age; // deleting a property
//console.log(person)


// WORKING WITH NESTED OBJECTS
// dot notation vs bracket notation
// bracket notation are for string


const age = 50;

const person1 = {
    name: 'Aki',
    age: age,
    status: 'employee',
    mates: ['kwame', 'fredy'],
    greetings(name){
        console.log(`Goodmorning ${name}`);
    },
    job: {
        title: 'developer',
        company: {
            name: 'BooksHive',
            address: '123 main street',
        },
    },
    'car numbers': 27,
};

// console.log(person1.job.title);
// console.log(person1.job.company.name);
// console.log(person1['car numbers'])


// this keyword
/*
The this keyword is used to prevent the pitfall of a variable name being changed, any code referencing that name would need to be updated.
If an object has many references to its properties, there is a greater chance of error.
*/ 

const bob = {
    firstName: 'john',
    lastName: 'anderson',
    fullName: function(){
        console.log(this)
        console.log(`My full name is ${this.firstName} ${this.lastName}`)
    },
};

//bob.fullName();



//Constructor Functions
/*
A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, 
a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to 
create a new object and set values for any existing object properties. In simple terms, it's a blueprint for creating new objects.
It name starts with a capital letter.
*/

function Cars (brand, color, transmission, wheels) {
    this.brand = brand;
    this.color = color;
    this.transmission = transmission;
    this.wheels = wheels;
    this.sound = function(){
        console.log(`The ${this.brand} makes a beep sound `)
    };
    console.log(this);
}

//const benz = new Cars('salon', 'green', 'manual', 4)
//benz.sound();
//console.log(benz.color); 


//Constructor Property
/*
All objects in Javascript have access to constructor property that returns a constructor function that created it.
Thus, we will see built in constructor functions. Arrays and functions are objects in javascript.
*/

// const pep = {};
// console.log(pep.constructor); //This will output a constructor function with name Object
// const list = [];
// console.log(list.constructor);//This will output a constructor function with name Array
// const sayHi = function (){};
// console.log(sayHi.constructor);//This will output a constructor function with name Function



//Prototype
/*
The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property 
is accessible and modifiable and object's prototype property (aka attribute) is not visible. Every function includes prototype object by default.
The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.
Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ or [[Prototype]] property that points to prototype object of a function that created this object.
*/

function Account(name, initialBalance){
    this.name = name;
    this.balance = initialBalance;
};

const derby = new Account('derby', 250);
const prince = new Account('prince', 0);

Account.prototype.bank = 'Calbank'; //This will add the bank = 'Calbank' to the Account instance
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
}

// console.log(derby);

// derby.deposit(1000)
prince.deposit(2000)


//EVerything in Javascript is an Object, consider the following, 
//they all have access to constructor Object

console.log(derby)
console.log({})
console.log([]) //Once we create an array, we have access to a _proto_, which gives us all the properties and methods


//Classes -- syntactic sugar
/*
Classes were introduced in EcmaScript 2015 (ES6) to provide a cleaner way to follow object-oriented programming patterns.
If the property is set outside the constructor, that property is going to be with each and every instance created, whereas methods will be on the prototype.
*/


class Account2 {
    constructor(name, initialBalance){
        this.name = name;
        this.balance = initialBalance;
    }
    bank = 'UBA';
    deposit (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
}
//You can see the above code has much cleaner syntax as compared to Account
const john = new Account2('johnny', 100)
console.log(john.name);
john.deposit(5000)




function outer(){
    function inner(){
        console.log(`Hello there,the secret is:`)
    };
    return inner;
};

outer()();

