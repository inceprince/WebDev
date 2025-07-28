// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 
// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);

// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// simple for loop 
// for of loop 
// forEach 
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);

// innerHtML

// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>"
// console.log(headline.innerHTML);


//Adding TOdo list
const sectionTodo=document.querySelector(".todo-section");

// sectionTodo.classList.add("bg-dark"); //class add
// sectionTodo.classList.remove("container"); //class remove
// console.log(sectionTodo.classList);

// const ans=sectionTodo.classList.contains("container")
// console.log(ans);  //check for if class is present.

// toggle-> it is used for adding or removing class ,if not prenset it will add or if it is present it is remove
// const addClass=sectionTodo.classList.toggle("bg-dark");
// const removeClass=sectionTodo.classList.toggle("bg-dark");
 
// addlist
// innerHTML to add html Element(use when you need to change an html elemnt not useful)
// const todoList=document.querySelector(".todo-list");
// // todoList.innerHTML="<li> New Todo</li>"
// todoList.innerHTML=todoList.innerHTML +"<li> New Todo</li>"
// todoList.innerHTML+="<li>Aaj Dom Complete karna hain</li>"

//add element
const todoList=document.querySelector(".todo-list");
const newTodoItemList=document.createElement("li");
newTodoItemList.textContent="Study";
todoList.append(newTodoItemList)








