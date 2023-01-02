//select element
//addEventListener()
//pass in the event type and add callback function

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');
const mouseAction = document.querySelector('h1')


//Function reference
function changeColors() {
    const hasClass = heading.classList.contains('red');
    hasClass? heading.classList.remove('red'): heading.classList.add('blue');
}

btn.addEventListener('click', changeColors);


/****** MOUSE EVENTS  ******/
//click - fires after full action occurs
//mousedown - button is pressed
//mouseup - button is released
//mouseenter - moved onto an element
//mouseleave - moved out of an element

btn.addEventListener('click', function () {
    console.log('you clicked me');
});
btn.addEventListener('mouseup', function () {
    console.log('up');
});
btn.addEventListener('mousedown', function () {
    console.log('down');
});

mouseAction.addEventListener('mouseenter', () =>{
    mouseAction.classList.add('green')
})

mouseAction.addEventListener('mouseleave', () =>{
    mouseAction.classList.remove('green');
})


/****** KEY EVENTS  ******/
//keypress - when key is pressed
//keydown - when key is down
//keyup - when key is released 

const nameInput = document.getElementById('name');

//nameInput.addEventListener('keypress', () => {console.log('you pressed a key')})
//nameInput.addEventListener('keydown', () => {console.log('you down pressed a key')})
nameInput.addEventListener('keyup', () => {console.dir(nameInput.value)})



/****** EVENT OBJECT  ******/
//event object argument e, evt
//info about triggered event
//event.type
//event.currentTarget -- helps to target the element we want and apply the changes
//this keyword -- cannot be used on an arrow function but can be used on the function expression or reference
//preventDefault() - prevents default behaviour


const heading2 = document.querySelector('.example');
const btn1 = document.querySelector('.btn1');
const link = document.querySelector('#link');

heading2.addEventListener('click', (event) => {
    //console.log(event); this will give u a large object
    event.currentTarget.classList.add('blue');
    console.log(event.currentTarget)
    console.log(this); //this wont work becos of the arrow function
})

btn1.addEventListener('click', (event) => {
    event.currentTarget.classList.add('green');
})

function someFunc(e) {
    e.preventDefault(); //This will prevent the default scrolling up to the page when the link is clicked.
}

link.addEventListener('click', someFunc)


//currentTarget --- always refers to the element to which the event handler has been attached to
//target --- identifies the element on which the event occured

const btn2 = document.querySelectorAll('.btn2');

btn2.forEach(function(ele){
    ele.addEventListener('click', function(e){
        //e.currentTarget.style.color = 'green'
        //console.log(e.currentTarget)
        e.target.style.color = 'red';
        console.log(e.target)
    })
})


//EVENT PROPAGATION
/*
This refers to the order the events are fired, that is we can select elements without targeting them. We have Event Bubbling and Event Capturing.
Event Bubbling -- it fires at the element and then bubbles up (default)
Event Capturing -- fires at the root and down until it reaches the target
*/

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
    console.log('current target', e.currentTarget);
  // console.log('target', e.target);
  // if (e.target.classList.contains('link')) {
  //   console.log('you clicked on the link');
  // }
}
function stopPropogation(e) {
    e.stopPropagation();
}

list.addEventListener('click', showBubbling, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });
