
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const numOfDaysInMon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


//const date = new Date()
const date = new Date('10/27/2012')
const month = date.getMonth();
const day = date.getDay()

console.log(months[month])

console.log(days[day])

console.log(date.getDate())
console.log(date);

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`

console.log(sentence)

document.body.innerHTML = sentence;