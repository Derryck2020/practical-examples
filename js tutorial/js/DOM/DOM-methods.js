//getElementById()

const h1 = document.getElementById("title");
//h1.style.color = 'red';

// let btn = document.getElementById('btn');
// btn.style.backgroundColor = 'skyblue';
// btn.style.color = 'white';
// btn.style.border = '2px solid pink';
// btn.style.padding = '0.5rem';
// btn.style.fontSize = '1rem';

//getElementsByTagName()
/*
when used, it gives us a HTMLCollection which is like an array object. Thus, we can select element using the index,
length property but cannot use array methods on them.
*/

const headings = document.getElementsByTagName("h2");
//console.log(headings)
headings[0].style.color = "green";
//console.log(headings.length)

//getElementsByClassName()
const listItems = document.getElementsByClassName("special");
//console.log(listItems)
listItems[1].style.color = "yellow";

//For these two below, we can pass in any css we want
//querySelector('any css') ------ select single element
//querySelectorAll('any css') ---- selects all list, we can also use the forEach() on it

const result = document.querySelector("#result");
//result.style.backgroundColor = 'blue';

const lastItem = document.querySelector("li:last-child");
//console.log(lastItem)

const list = document.querySelectorAll(".special");
//console.log(list)

list.forEach((ele) => (ele.style.fontSize = "1.5rem"));

/*
                NAVIGATING THE DOM
    ***Children Property***
//childNodes- return whitespaces
//children - none
//firstChild - return whitespaces
//lastChild - return whitespaces
There are times when we can't directly use the methods, thus we have to navigate the DOM and use the 
childNodes. 
ChildNodes when used too return everything including whitespaces which is treated as a text node, hence
we have to use children.
*/
const output = document.querySelector("#result");
const allChildren = output.childNodes;
//console.log(allChildren) //this return Nodelist of 11 items which includes whitespaces

const listChildren = output.children;
//console.log(listChildren); //this return the actual 5 items

//console.log(output.firstChild); //return whitespaces
//console.log(output.lastChild); //return whitespaces

//***Parent Property***
const heading = document.querySelector("h4");
//console.log(heading.parentElement.parentElement) //Just showing the parent chain
const parent = heading.parentElement;
parent.style.color = "indigo";

//nextSibling, previousSibling, return whitesapce

// nextSibling --- we have to run it twice(nextSibling) for it to work, running it once will give u a whitespace
const first = document.querySelector(".first");
const nextSib = (first.nextSibling.nextSibling.style.color = "#1c3109");
console.log(nextSib);

// previousSibling --- we have to run it twice(previousSibling) for it to work, running it once will give u a whitespace
const last = document.querySelector("#last");
const preSib = (last.previousSibling.previousSibling.style.color = "red");

//previousElementSibling, nextElementSibling -- These two properties deals with the whitespaces and it makes it easier as compared to nextSibling and previousSibliing
first.nextElementSibling.style.fontSize = "2rem";
last.previousElementSibling.style.paddingLeft = "3.5rem";

//nodeValue, textContent -- allow us to access the text content within the element

//nodeValue
const item1 = document.getElementById("unique");
const value = item1.firstChild.nodeValue; // or item.childNodes[0].nodeValue
//console.log(value);

//textContent --- easy approach
const item2 = document.querySelector(".easy");
const easy = item2.textContent;
//console.log(easy);

//getAttribute(), setAttribute() ----- These methods are used to get and set Attributes from/in the html

//getAttribute()
const getFirst = document.querySelector(".first1");
const cValue = getFirst.getAttribute("class"); //we can also access the id by changing it to id i.e getAttribute('id') and ('href') for link
//console.log(cValue)

const link = document.querySelector("#link");
const showLink = link.getAttribute("href"); //for href
//console.log(showLink)

//setAttribute()
const active = link.nextElementSibling;
active.setAttribute("class", "first1"); // same for id and href
active.textContent = "I have also being updated with a class";
//console.log(active);

//className, classList
/*
classList is preferred because it doesn't overwrite the value when added to the next line as 
compared to className
*/

const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");

// const classValue = third.className;
// console.log(classValue);

// fourth.className = "colors";
// fourth.className = "text"; // This will override the colors property

//that's why we use the classList and they also have some methods attached to them
// fifth.classList.add("colors");
// fifth.classList.add("text");
fifth.classList.add("colors", "text");
// fifth.classList.remove("text");

/* ADDING ELEMENTS TO THE DOM
//createElement('element') --- elements like p, h1, div, span, etc.
//createTextNode('text content') --- adding content to the element
//element.appendChild(childElement) --- changing the element
*/

const result3 = document.querySelector("#result3");

//create empty element
const bodyDiv = document.createElement("div");

//create text node
const text = document.createTextNode("a simple body div");
bodyDiv.appendChild(text);
bodyDiv.style.backgroundColor = "green";
bodyDiv.classList.add("text");
document.body.appendChild(bodyDiv);

//example 2
const heading11 = document.createElement("h1");
const text2 = document.createTextNode("This the h1 for the div");
heading11.appendChild(text2);
heading11.classList.add("blue");
result3.appendChild(heading11);

//insertBefore()
//replaceChild('new', 'old')

//prepend()
//innerText

//remove()
//removeChild

//innerHTML  ---  this returns the whole html structure that is within that element
//textContent  --- this gives us the text whether from one element or the other

const list2 = document.getElementById("result2");
const ul = document.createElement("ul");
ul.innerHTML = `this is a unique content`;
document.body.appendChild(ul);
