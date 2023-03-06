/*
## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score
4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message
*/

const score1 = 10;
const score2 = 7.5;
const score3 = 25;

const total_score = score1 + score2 + score3;
const average_score = (score1 + score2 + score3) / 3;

console.log(total_score);
console.log(average_score);

let plates = 20;
let people = 7;

let platesRem = 20 % 7;
console.log(platesRem)
platesRem++
console.log (platesRem)
let message = 'There are ' + platesRem + ' plates available';
console.log(message)