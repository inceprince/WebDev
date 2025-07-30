import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./Component/Card";
import Header from "./Component/Navbar";
import Footer from "./Component/Footer";
import cardData from "../Utils/cardData";

function App() {

let [Arr,setArr]=useState(cardData);
const orginalData=cardData;


  function sortArray(){
   const Sorted= [...orginalData].sort((a,b)=>a.price-b.price);
    
    setArr(Sorted);
  }
  
  function sortArray1(){
   const filterd=Arr.filter((value)=>value.price>499)
    setArr(filterd);
  }
  return (
    <>
      <Header />

  
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <button style={{ padding: "10px 20px", fontWeight: "bold", cursor: "pointer" }}onClick={sortArray}>
          Sort - Price ₹
        </button>
        <button style={{ padding: "10px 20px", fontWeight: "bold", cursor: "pointer" }}onClick={sortArray1}>
          Price above ₹499 
        </button>
      </div>

      {/* Card Container */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        {Arr.map((item, index) => (
          <Card
            key={index}
            cloth={item.cloth}
            offer={item.offer}
            img={item.img}
            price={item.price}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
