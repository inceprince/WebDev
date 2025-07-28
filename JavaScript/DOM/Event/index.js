// const mybutton=document.querySelectorAll(".bttn button")
// mybutton.forEach(button =>{
//     button.addEventListener('click',(e)=>{
//         // console.log(e.target)
//         e.target.style.backgroundColor="yellow";
//         e.target.style.color="white";
//     })
// })
// const mybutton=document.querySelectorAll(" button")
// mybutton.forEach(button =>{
//     button.addEventListener('click',function(){
//         // console.log(e.target)
//         this.style.backgroundColor="yellow";
//         this.style.color="white";
//     })
// })

// const mainButton=document.querySelector("button")
// const body=document.body;
// const text=document.querySelector("span");
// // console.log(text);

// function randomColorGenerator(){
//     const red=Math.floor(Math.random()*256);
//     const green=Math.floor(Math.random()*256);
//     const blue=Math.floor(Math.random()*256);
//     const rgbColor=`rgb(${red},${green},${blue})`
//     return rgbColor;
// }

// mainButton.addEventListener('click',()=>{
//     const randomColor=randomColorGenerator();
//    body.style.backgroundColor=randomColor;
//    text.textContent=randomColor
// })


// const bttn=document.querySelector(".container button");
// const body=document.body;
// const text=document.querySelector("span");



// function colorchange(){
//     const colorArr= [
//         "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Cyan", "Magenta", "Lime", "Teal", "Indigo", "Violet", "Gold", "Silver","Beige","Maroon", "Olive", "Navy", "Coral", "Turquoise", "Lavender"
//     ];
      
//     const index=Math.floor(Math.random()*colorArr.length);
//    const color=colorArr[index];
//    return color; 
// }
// bttn.addEventListener('click',()=>{
//     const randomColor=colorchange();
//     body.style.backgroundColor=randomColor;
//     text.innerText=randomColor;

// })

// const mainButton=document.querySelector("button")
// mainButton.addEventListener('click',function(e){
//     console.log(e);
// })