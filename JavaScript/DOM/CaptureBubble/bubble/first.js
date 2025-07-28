const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// event bubbling(andaar se bahar ki aur jyega bubble ke jaise.)

//  and event capturing(bahar se andaar.)

// syntax of addEventListener-->
// child.addEventListener('first_event',cancelIdleCallback,capture)here capture is a boolean value i.e true or false.
// if it is true it will run event capture and if it is false it will run bubble(default is false i.e bubbleing)

child.addEventListener('click', (event)=>{
    // console.log("child Clicked"); 
    // // event.stopPropagation();
    // console.log(event.target);
},false)



parent.addEventListener('click', (event)=>{
    // console.log("parent Clicked");
    // event.stopPropagation();
    // console.log(event.target);
    // console.log(event.currentTarget);
},false)

grandParent.addEventListener('click', (event)=>{
    // console.log("grandParent Clicked");
    // console.log(event.currentTarget);
    console.log(event.target);
},false)

// addEventListener(first_event, callback, capture);
//target is like it will give all from where it is clicked and till whre it is going .
//current-target is like it will give the element which is clicked

// event delegation