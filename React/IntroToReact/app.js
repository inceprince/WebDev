//React code
const element=React.createElement("h1",{},"I am Prince");
// ReactDOM.render(element,document.getElementById("root"));// old version //Note--> this "ReactDOM.render" were used in react17 where the js was handling the root container in which all the roots elemt were loaded then only we can go to some other part fo the code


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(element); //note--> but here "ReactDOM.CreateRoot" the root elemt is controleed by the react so let say if we want to go to some oter part of code it will go without waiting to load all the lemets in root


//Note-->CDN=Content Delivery Network