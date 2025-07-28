import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Component/Card";
import Header from "./Component/Navbar";
import Footer from "./Component/Footer";
import cardData from "../Utils/cardData";


function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Card */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        {cardData.map((item, index) => (
          <Card
            key={index}
            cloth={item.cloth}
            offer={item.offer}
            img={item.img}
          />
        ))}
      </div>
      {/* Fotter */}

      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
