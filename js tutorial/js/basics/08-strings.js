/*
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter
*/

/*
function fullName(firstName, lastName){
    let names = (`${firstName} ${lastName}`).toUpperCase();
    return names;
}

let names = fullName('osei', 'derrick');

console.log(names)
*/


//for 6 & 7

function fullName({ firstName, lastName }){
    let names = (`${firstName} ${lastName}`).toUpperCase();
    return names;
}

let names = fullName({lastName:'dury', firstName:'peter'});

console.log(names)