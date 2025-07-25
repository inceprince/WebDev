import React from "react";
import ReactDOM from "react-dom/client";

//JSx:Javascript XML: HTML Code direct js ke anddar likh sakte hain.
const devName = "Prince";
const clientName = "XYZ company";

const prodcutInfo = {
  duration: "6 Months",
  budget: "25 Lakhs",
};
//React Elemet
const element = (
  <>
    <h1 id="first" className="same">
      Hlo I am developer {devName}
    </h1>
    <h2 id="second" className="same">
      Hii I am client {clientName}
    </h2>
    <p id="para" className="same">
      Duration of Product :{prodcutInfo.duration}
    </p>
  </>
);

/*
| Value Type        | Use Curly Braces `{}` in JSX? |
| ----------------- | ----------------------------- |
| String (literal)  | ❌ (`<h1>Hello</h1>`)          |
| String (variable) | ✅ (`<h1>{name}</h1>`)         |
| Number            | ✅ (`<p>{age}</p>`)            |
| Array             | ✅ (`{arr.map(...)}`)          |
| Object            | ✅ (specific property only)    |
| Boolean           | ✅ (for conditional rendering) |
| Function call     | ✅ (`<p>{getMessage()}</p>`)   |
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);







// React Component
// a)function based component
//b)class based component(not used now )

// a)function based component

function greet(cb1) {
  const ele = <p>How Are You?</p>;
  const ele2 = cb1();
  return (
    <>
      {ele}
      {ele2}
    </>
  );
}
function meet() {
  return <p>Mai Badiya hoon</p>;
}
const res = greet(meet);

root.render(res);
