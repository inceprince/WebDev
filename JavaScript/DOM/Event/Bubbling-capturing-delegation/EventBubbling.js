const grandParent=document.querySelector(".grandParent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
//EventBubbling->In this event when we call child then its paremt are also called via call back function
// How Event Bubbling Works-->
// When an event occurs on an element:
// The event first triggers on the target element (child).
// Then, it "bubbles up" to the parent element.
// It continues bubbling up to higher ancestor elements, all the way to the <html> and document.
child.addEventListener('click',()=>{
    console.log("clicked child"); 
});
parent.addEventListener('click',()=>{
    console.log("clicked parent"); 
});

grandParent.addEventListener('click',()=>{
    console.log("clicked grandParent"); 
});
document.body.addEventListener('click',()=>{
    console.log("clicked body"); 
});





