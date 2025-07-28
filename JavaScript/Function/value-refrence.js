//Pass by value vs pass by reference

//Pass by value(Primitive data types)
// let a=5;
// let b=a;
// b=a+5;
// // each variable is independent to each other
// console.log(a,b)

//pass by refrence(non-primitive data types)

let obj={
    name:"vinod",
    pass:728737
}
let obj1=obj;
obj1.pass="dwugyyugdw";
console.log(obj,obj1);