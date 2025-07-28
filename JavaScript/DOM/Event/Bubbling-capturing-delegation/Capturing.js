
//Capturing Events
const grandParent=document.querySelector(".grandParent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
child.addEventListener('click',()=>{
    console.log("captue!!! child"); 
},true);
parent.addEventListener('click',()=>{
    console.log("captue!!! parent"); 
});

// grandParent.addEventListener('click',()=>{
//     console.log("captue!!! grandParent"); 
// },false);
// document.body.addEventListener('click',()=>{
//     console.log("captue!!! body"); 
// },false);
   

//notcapturing


child.addEventListener('click',()=>{
    console.log("bubble child"); 
});
parent.addEventListener('click',()=>{
    console.log("bubble parent"); 
});

grandParent.addEventListener('click',()=>{
    console.log("bubble grandParent"); 
});
document.body.addEventListener('click',()=>{
    console.log("bubble body"); 
});
