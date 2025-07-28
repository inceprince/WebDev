
// Created an element

// function attach(content,month){
//  const parent = document.getElementById("root");//jis jagha muje element insert karwana hain uski parent element ko lena hain.

// const element = document.createElement('li');//created a element.
// element.innerHTML = content;
// const element2 = document.createElement('li');
// element2.innerHTML = `${content} completes in ${month}`
// // parent.appendChild(element);  //yaha ek  elememt last me add ho jyega.
// parent.append(element,element2);//yaha multiple elememts last me add ho jyega.
// };

// attach("TS",'March');
// attach("React","April");
// attach("Node","May-June");


// *****************TextNode*******************

// const element = document.createTextNode("WE Will Rock It.");

// const parent = document.getElementById("root");
// parent.append(element);


// *****************Attribute Node*******************

// const element = document.createAttribute("id");
// element.value = "first";


// access to first list
// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);


// access to second list

// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);



//******** access attribute of a element******/ 

// const element  = document.getElementById("root");
// console.log(element.getAttribute("style"));
// element.setAttribute("custom", "20");
// element.setAttribute("class", "Roahn");
// element.removeAttribute("custom");




// ***********Add nodes to the DOM************


// const parent = document.getElementById("root");
//  Assume as an array
// const element = document.createElement('li');
// element.innerHTML = "TS";

// Array Data and use methods (suppose)
// parent.prepend(element);// first place  attach 
// parent.append(element); // last place attach

// const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);



// const parent = document.getElementById("root");
// parent.innerHTML += "<li>TS</li>";

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// // parent.insertAdjacentElement("beforebegin", element);
// parent.insertAdjacentElement("afterend", element);



// Delete node or element

// const element = document.querySelector('li');
// element.remove();





