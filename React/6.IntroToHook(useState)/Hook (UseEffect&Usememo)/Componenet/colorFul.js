import React, { useState, useEffect } from "react";

function ColorFul() {
  const [bgColor, setBgColor] = useState("white");

  //useEffecr(callback function,dependency)
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <>
      <div>
        <h1 style={{ color: "#333" }}>Change Background Color</h1>
      </div>
      <div>
        <button
          className="btn"
          style={{ backgroundColor: "black" }}
          onClick={() => setBgColor("black")}
        >
          Black
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "red" }}
          onClick={() => setBgColor("red")}
        >
          Red
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "pink" }}
          onClick={() => setBgColor("pink")}
        >
          Pink
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "lightblue" }}
          onClick={() => setBgColor("white")}
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default React.memo(ColorFul);
