import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import ColorFul from "./Componenet/colorFul";

//setBgColor re-renders each time when button clicked
// re-render meaning function ko dobbra call karo
function ChangeColor() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ColorFul />
      <div className="counter">
        <h1>Counter is:{count}</h1>
        <div>
          <button
            className="btn"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChangeColor />);
