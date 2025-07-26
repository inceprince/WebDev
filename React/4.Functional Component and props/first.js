import React from "react";
import ReactDOM from "react-dom/client";

/* ✅ JSX: JavaScript Expressions (can be used inside curly braces `{}` in JSX)
Examples of expressions: value, function call, ternary operator, arithmetic, etc.
const name = "Prince";
const element = <h1>Hello, {name.toUpperCase()}</h1>; // ✅ works

❌ JSX: JavaScript Statements (like if, for, while, assignments) CANNOT be used directly inside JSX
This will NOT work:
const element = <h1>{let a = 10}</h1>; // ❌ Invalid

✅ Allowed (outside JSX)
let age = 20;
const display = (
  <div>
    {age > 18 ? <p>Adult</p> : <p>Minor</p>}  // ✅ Ternary operator is an expression
  </div>
);

 ✅ You can also use objects/arrays in JSX — but only in ways that produce output
const arr = [1, 2, 3];
const ele = (
  <div>
    {arr.map(num => <p key={num}>{num}</p>)}  // ✅ Valid expression that returns JSX
  </div>
); */

const element1 = <h1>Hello Developer</h1>;
//To pass parameter in functional component we use "props" which is an object
function Greet(props) {
  return (
    <h2>
      Hii {props.name} {props.age}
    </h2>
  );
}
function Meet(props) {
  return(
    <p>
        Hii I am in {props.city}
    </p>
  );
}
//diffrent eleemt in one container
const container = (
  <>
    {element1}
    <Greet name="Prince" age="21" />
    <Meet city="Banaglore" />
  </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
