const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "Prince",
    style: { backgroundColor: "brown", font: "30px", color: "white" },
  },
  "Hii I am Developer"
);
const element2 = React.createElement(
  "h1",
  {
    id: "second",
    className: "Prince",
    style: { backgroundColor: "darkgreen", font: "30px", color: "white" },
  },
  "Hii I am User"
);

const div = React.createElement("div", {}, [element, element2]); // wrapper <div> with both

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element); // Renders: Hii I am Developer
root.render(element2); // Replaces with: Hii I am User
root.render(div); // Replaces with: <div> both elements
