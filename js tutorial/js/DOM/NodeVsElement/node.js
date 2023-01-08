/*
There is a distinct difference between node and elements

Nodes are all the components a web page document is made up of. In other words, a web page is collection of nodes.
An element is a type of node within a document. For instance, the DOM property nodes.childNodes when used on a 
parent node will return all the different nodes contained within that specified parent node.

In the example below, the childNodes property is used on the <body> element node of the HTML document given above:
*/

//select the <body> element node with the DOM method querySelector
const body = document.querySelector('body') 
//select the children nodes with the <body> element node with the DOM property node.childNodes
const childrenNodes = body.childNodes
//console log the children nodes
console.log(childrenNodes)//NodeList(5) [text, div, text, a, text]

/*
Relationships Between Nodes in the DOM Tree
The nodes in the DOM tree have a hierarchical relationship with each other in the DOM tree. They are defined by their position relative to each other in the DOM tree.

These are the node positions present in the DOM tree illustration above:

Root node: The root node is always at the apex of the DOM tree. In an HTML document, the root node is always the <html> element.

Child node: A child node is a node embedded inside another node. In the illustration given above, the <head> and 
the <body> elements are the children of the <html> element.

Descendant node: Any node positioned below another node in the hierarchical order is the descendant of the nodes positioned above it. 
For example, although the  <h1> element is not the direct child of the <body> element, it is a descendant of the <body> and  root <html> elements.

Parent node: Any node which has another node inside it is a parent node. For example, the <body> element is the parent of the <div> and <a> elements 
in the above example. Note that only element type nodes can be a parent node.

Sibling nodes: Nodes that are on the same level in hierarchical order in the DOM tree are sibling nodes. 
For example, <div> and <a> elements in the above example are siblings.

Leaf nodes: The text inside of elements are leaf nodes. This is because they cannot have children nodes of their own.
*/