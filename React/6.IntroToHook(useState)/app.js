// Importing React and useState Hook
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Counter component
function Counter() {
  // useState Hook: creates a state variable 'count' with initial value 0
  // setCount is the function used to update the 'count' state
  let [count, setCount] = useState(0);

  // Function to increment count
  function incremnetNumber() {
    // Functional update form of setCount
    // This ensures you're working with the latest state value
    setCount((count) => count + 1);
    //  When this function is called, React re-renders the Counter component with new count
  }

  // Function to decrement count
  function decremnetNumber() {
    setCount((count) => count - 1);
  }

  // JSX to display current count and buttons to update it
  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <button onClick={incremnetNumber}>Increment</button>
      <button onClick={decremnetNumber}>Decrement</button>
    </div>
  );
}

// Rendering Counter component into the root element of the HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
