//create elemt throgh javascript

const { createElement } = require("react");

// const { createElement } = require("react");

// const header1=document.createElement("h1");
// header1.innerText="Hii Prince";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2=document.createElement("h2");
// header2.innerText="Hiii";
// header2.style.backgroundColor="yellow";
// header2.style.fontSize="30px";
// header2.style.color="black";

// const root=document.getElementById("root");

// root.append(header1);
// root.append(header2);



// // Creating function
// const React = {
//   createElement: function (tag, styles, children) {
//     const elemt = document.createElement(tag);
//     elemt.innerText = children;

//     // Apply styles
//     for (let key in styles) {
//       elemt.style[key] = styles[key];
//     }

//     return elemt;
//   },
// };

// // Creating elements
// const header1 = React.createElement(
//   "h1",
//   { color: "blue", backgroundColor: "white" },
//   "Hii I am Prince"
// );

// const header2 = React.createElement(
//   "h2",
//   { color: "yellow", backgroundColor: "black" },
//   "Hii kaise ho Prince"
// );
// const header3 = React.createElement(
//   "h2",
//   { color: "yellow", fontSize:"30px",backgroundColor: "black" },
//   "Hii kaise ho Prince"
// );

// // Rendering and appending
// const ReactDOM = {
//   render: (element, root) => {
//     root.append(element);
//   },
// };

// const root = document.getElementById("root");
// ReactDOM.render(header1, root);
// ReactDOM.render(header2, root);
// // ReactDOM.render(header3, document.getElementById("root"));
// //or
// ReactDOM.render(header3, root);

/*Note-->React:Object,ReactDOM:Object*/


// Example2--> List OF frontend Tools

const React = {
  createElement: function (tag, styles, children) {
    const elemt = document.createElement(tag);
 
    if(typeof children=== "object"){
        for (let value of children) {
            elemt.append(value);
            
        }

    }else if(typeof children==="string"){
        elemt.innerText=children;
    }

    // Apply styles
    for (let key in styles) {
      elemt.style[key] = styles[key];
    }

    return elemt;
  },
};
const list1=React.createElement('li',{},"HTML");
const list2=React.createElement('li',{},"Css");
const list3=React.createElement('li',{},"Js");

const ul=React.createElement('ul',{ color: "yellow", fontSize:"30px",backgroundColor: "black" },[list1,list2,list3]);


const ReactDOM = {
  render: (element, root) => {
    root.append(element);
  },
};
const root=document.getElementById("root");
ReactDOM.render(ul,root);


