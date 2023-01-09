/*
setTimeout() - is a method that execute a piece of code once the timer is up. To stop setTimeout() we use clearTimeout()

setInterval() - is a method that execute a piece of code repeatedly for every x second. To stop setInterval() we use clearInterval()

*/

const progressBar = document.getElementById("bar");
const loadingMsg = document.getElementById("loading");
let barWidth = 0;

// const animate = () => {
//     barWidth++;
//     progressBar.style.width = `${barWidth}%`;
//     setTimeout(() => {
//         loadingMsg.innerHTML = `${barWidth}% Completed`;
//     }, 10100);
// };

// // animation starts 2 seconds after page load
// setTimeout(() => {
//     let intervalID = setInterval(() => {
//     if (barWidth === 100) {
//             clearInterval(intervalID);
//         } else {
//             animate();
//         }
//     }, 100); //this sets the speed of the animation
// }, 2000);


//Passing mutiple values in setTimout

function youHungery(food, drink){
    console.log(`I have eaten ${food} and taking in ${drink}`);
}

setTimeout(youHungery, 5000, 'Jollof', 'juice');



console.log('height :' + window.innerHeight)
console.log('width :' + window.innerWidth)
