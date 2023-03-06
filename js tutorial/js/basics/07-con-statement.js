/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

const person1 = {
    name: 'King',
    age: 20,
    status: 'resident'
}

const person2 = {
    name: 'Steven',
    age: 24,
    status: 'tourist'
}

if ((person1.age >= 18) && (person1.status == 'resident')){
    console.log('You are welcome to our Hotel')
} else if ((person2.age >= 18) && (person2.status == 'resident')){
    console.log('You are welcome to our House')
} else {
    console.log('you are not allowed')
}
