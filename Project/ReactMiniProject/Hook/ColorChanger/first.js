import React, { useState } from "react";
import ReactDOM from "react-dom/client";

//setBgColor re-renders each time when button clicked
// re-render meaning function ko dobbra call karo
function ChangeColor() {
  const [bgColor, setBgColor] = useState("white");
  console.log("render");

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",  // center horizontally
        alignItems: "center",      // center vertically
        flexDirection: "column"    // stack <h1> and button row vertically
      }}
    >
     <h1 style={{ color: "#333" }}>Change Background Color</h1>


      {/* Buttons in horizontal row */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button className="btn" style={{backgroundColor:"black"}} onClick={() => setBgColor("black")}>Black</button>
        <button className="btn" style={{backgroundColor:"red"}} onClick={() => setBgColor("red")}>Red</button>
        <button className="btn" style={{backgroundColor:"pink"}} onClick={() => setBgColor("pink")}>Pink</button>
        <button className="btn" style={{backgroundColor:"lightblue"}} onClick={() => setBgColor("white")}>Reset</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChangeColor/>);
