/*
#### Create Students Array

1. setup students array with 5 students
   {
   id: 1,
   name: 'peter',
   score: 80,
   favoriteSubject: 'math',
   },

#### Use Multiple Files

- easer to manage code base (file, project)
- order matters
- other ways to achieve the same result (ES6 modules, fetch DB )
- not limited to just static data

#### updatedStudents

1. add role:'student' property to each object
   using MAP method
2. assign to 'updatedStudents' variable and log

#### highScores

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log

#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log

#### averageScore

1. sum up all student.score values with reduce
2. divide by the length of the students array
3. assign to 'averageScore' and log

#### survey

1. list favorite subjects with reduce
    {
    math: 2
    english: 1
    history: 1
    physics: 1
    }
2. assign to survey and log

*/

console.log(students)

//map()
const updatedStudents = students.map(function (student) {
    student.role = 'student';
    return student;
})
console.log(updatedStudents);

//fliter()
const highScores = students.filter(el => el.score >= 80);
console.log(highScores);


//find()
const specificId = students.find(el => el.id === 2);
console.log(specificId);


//reduce()
function average(scoresTotal, student){
    (scoresTotal += student.score);
    return scoresTotal;
}

let initialValue = 0;

const averageScore = students.reduce(average, initialValue)/students.length
console.log(averageScore);


//reduce returning an object
/*
for reference:

const food = 'rice';

const sweet = {};
food[sweet] = 'some value';
console.log(sweet)
*/

const survey = students.reduce(function(total,student) {
    const favSubject = student.favoriteSubject;
    if(total[favSubject]){
        total[favSubject] += 1; 
    } else {
        total[favSubject] = 1; 
    }
    
    return total;
}, {});

console.log(survey)
