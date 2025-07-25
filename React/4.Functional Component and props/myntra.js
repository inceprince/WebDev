import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  return (
    <div style={{ backgroundColor: "yellow", padding: "2px" }}>
      <div style={{ margin: "10px", textAlign: "center" }}>
        <img src={props.img} alt={props.cloth} style={{ width: "150px", height: "200px" }} />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}
const cardData = [
  {
    cloth: "T-Shirt",
    offer: "20-40%",
    img: "https://th.bing.com/th/id/OIP.PPpfmdSPeZOrA3JuKxQ5jQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    cloth: "Jeans",
    offer: "30-40%",
    img: "https://th.bing.com/th/id/OIP.LFjyvu94JhWdnxK4yakVcgHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    cloth: "Pajama",
    offer: "40%",
    img: "https://th.bing.com/th/id/OIP.FxS5MvhOtAtZGJNvogFcfQHaMl?w=186&h=316&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    cloth: "Shirt",
    offer: "20-60%",
    img: "https://th.bing.com/th/id/OIP.410LztYwLh1r0EiYuvxP-AHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    cloth: "Linen Shirt",
    offer: "10-40%",
    img: "https://th.bing.com/th/id/OIP.af0U1tIVYtZBzFlbHBFTCAHaJ3?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    cloth: "Linen Pant",
    offer: "15-40%",
    img: "https://th.bing.com/th/id/OIP.qynKg3VaL-DVWPT0r_21KwHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  
  {
    cloth: "Kurta",
    offer: "25-50%",
    img: "https://i.pinimg.com/originals/87/71/7e/87717e76c52d21f7f77e6d723d882d26.jpg",
  },
  {
    cloth: "Blazer",
    offer: "30-55%",
    img: "https://th.bing.com/th/id/OIP.5bf3zV_Nk_Q4ensF-9P5kQHaLG?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    cloth: "Hoodie",
    offer: "10-30%",
    img: "https://th.bing.com/th/id/OIP.n0IlwagdV4pGwE6P1ypIpAHaLa?w=186&h=287&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    cloth: "Track Pants",
    offer: "20-45%",
    img: "https://th.bing.com/th/id/OIP.1Mr_AE0x1CwzyoXqMx0V7AHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    cloth: "Sweatshirt",
    offer: "25-50%",
    img: "https://th.bing.com/th/id/OIP.MTHizGEBxSBUOEYGHNUeDAHaJg?w=186&h=239&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    cloth: "Shorts",
    offer: "15-35%",
    img: "https://ts1.explicit.bing.net/th?id=OIP.NMNkiCLyV0dSUTxAip_DzAHaLH&pid=15.1",
  },
  {
    cloth: "Ethnic Set",
    offer: "35-60%",
    img: "https://th.bing.com/th/id/OIP.Nl6mi8Zc5CpqA82cl3RCJQHaLL?w=186&h=281&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    cloth: "Joggers",
    offer: "10-25%",
    img: "https://th.bing.com/th/id/OIP.48k4PQoteLbMuILHDqxfrwHaLz?w=186&h=298&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    cloth: "Cap",
    offer: "5-20%",
    img: "https://th.bing.com/th/id/OIP.jyAuVfjsy88kkfo_C9CsBwHaIO?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    cloth: "Scarf",
    offer: "15-25%",
    img: "https://th.bing.com/th/id/OIP.RGZEukX1-BeBZnCLW-CJ6wHaLH?w=124&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
];


function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", paddingTop:"30px" }}>
      
      {/* <Card
        cloth="T-Shirt"
        offer="20-40%"
        img="https://th.bing.com/th/id/OIP.PPpfmdSPeZOrA3JuKxQ5jQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      />
      <Card cloth="Jeans" offer="30-40%" img="https://th.bing.com/th/id/OIP.LFjyvu94JhWdnxK4yakVcgHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
      <Card cloth="Pajama" offer="40%" img="https://th.bing.com/th/id/OIP.FxS5MvhOtAtZGJNvogFcfQHaMl?w=186&h=316&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
      <Card cloth="Shirt" offer="20-60%" img="https://th.bing.com/th/id/OIP.410LztYwLh1r0EiYuvxP-AHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card cloth="Linen Shirt" offer="10-40%" img="https://th.bing.com/th/id/OIP.af0U1tIVYtZBzFlbHBFTCAHaJ3?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
      <Card cloth="Linen Pant" offer="15-40%" img="https://th.bing.com/th/id/OIP.qynKg3VaL-DVWPT0r_21KwHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" /> */}


      {
        cardData.map((item,index)=>(
            < Card 
            key={index}
            cloth={item.cloth} 
            offer={item.offer}
            img={item.img}
            />)
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
