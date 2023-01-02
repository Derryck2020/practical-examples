/*
The window object is also known as browser API's, In simple terms, it gives us methods and 
properties that we can use to access the browser and work with it.

Within the window object, we have document object. console.log(window) and you will see the 
properties and methods the window object have. Example, alert(), document, clearTimeout() ...
*/

console.log(window)

console.log(document); //It wont give you the properties and methods you want.

//Because the document is an object within the window, to check it properties and methods, we have to use .dir instead of .log
console.dir(document)