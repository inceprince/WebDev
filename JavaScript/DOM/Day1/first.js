
// console.dir(document); //→ Shows the document as a JavaScript object (useful for debugging).

// console.log(document); //→ Shows the document as an HTML structure (renders as an HTML tree).

// document.body.children; 


// HTMLCollection(2) [div#root, script, root: div#root]
// 0: div#root
// 1:script
// root: div#root
// length: 2
// [[Prototype]]:HTMLCollection
//->The returned HTMLCollection is array-like but not an actual array (it does not support array methods like map, forEach, etc.).

// let tag1=document.getElementsByTagName('h1');
// console.log(tag1);
//->retrieves all <h1> elements in the document.

// let classes=document.getElementsByClassName('header1');
// console.log(classes);//-> retrieve class of same name present in  diffrent element.

// let unique=document.getElementById("first")
// console.log(unique); //-> retrieve id of an element.

// let all=document.querySelector('.header1'); 
// console.log(all); //-> class with dot 
 
// let all=document.querySelector('#second');
// console.log(all); //->  id with #

// let all=document.querySelector('ul');
// console.log(all); 


// let all=document.querySelectorAll('.header1'); 
// console.log(all); //-> class with dot 
 
// let all=document.querySelectorAll('#second');
// console.log(all); //->  id with # and return nodelist i.e like an array(not an array) and givess diffrenet array methods to work on not like HTML collection.

// let all=document.querySelectorAll('li');
// console.log(all); 
// all.forEach((list)=>{
//     console.log(list)
// })  
//here we can use array method






