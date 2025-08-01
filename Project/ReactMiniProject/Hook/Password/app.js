import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PassowrdGenerator() {
  const [Password, setPassword] = useState("");
  const [length, setlength] = useState(10);
  const [numberChanged, setnumberChnanged] = useState(false);
  const [charChanged, setcharChanged] = useState(false);

  // useCallback (for memoizing the password generation function)
  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberChanged) {
      str = str + "0123456789";
    }
    if (charChanged) {
      str = str + "+-!@#$&*";
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, charChanged, numberChanged]);
  // 📌 This memoizes the generatePassword function.
  // It will only be re-created if any dependency (length, charChanged, numberChanged) changes.
  // Prevents unnecessary re-creations of the function on every render

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  // 📌 This runs the generatePassword function automatically
  // whenever the dependencies (length, charChanged, numberChanged) change.
  // Keeps the password up to date without needing a button click.

  return (
    <>
      <p>
        <strong>Password Genarated is:</strong> <br />
        {Password}
      </p>

      <div>
        <input
          type="range"
          min={5}
          max={15}
          value={length}
          onChange={(e) => setlength(e.target.value)}
        ></input>
        <label>Length: '{length}'</label>

        <input
          type="checkbox"
          defaultChecked={numberChanged}
          onClick={() => setnumberChnanged(!numberChanged)}
        ></input>
        <label>Number</label>
        <input
          type="checkbox"
          defaultChecked={charChanged}
          onChange={() => setcharChanged(!charChanged)}
        ></input>
        <label>Character</label>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PassowrdGenerator />);
