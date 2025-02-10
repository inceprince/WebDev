// const a={
//     name:"Prince",
//     age:20,
//     gen:"male",
//     hi:[221,3378]
// }
// console.log(a);
// console.log(a.name);
// console.log(a["name"]);
// console.log(a.age=21);  //update
// console.log(a.hi);
// a.salary=1500;
// console.log(a); 
// delete a.salary;
// console.log(a.salary);
// console.log(a);  // give new key and obj pair 

// const person=new Object();
// console.log(person); ////empty object
// person.name="Prince"
// person.age=21;
// person.salary="54K"
// console.log(person);

////method

// let person = {
//     name: "rohit",
//     age:30,
//     account_balance:420,
//     gender:"male"
// };
// const array=Object.keys(person);
// console.log(array)

// // for( let key in person){
// //     console.log(` person object is ${key}: ${person[key]}`)
// // }
// const arr =Object.values(person);
// console.log(person);


// //key values pair  it will return as array
// const arr1=Object.entries(person);
// console.log(arr1);

////merge for diffrenent objcet. 
const ob1={
    a:1,
    b:2
}
const ob2={
    c:3,
    d:4
}
const ob3={
    e:5,
    f:6

} 
// const obj4=Object.assign(ob1,ob2,ob3);
// console.log(obj4);
// ob1.a=45;
// console.log(ob1);// it will make change value in all the object .
//// to avoid this  we use a empty element.
// const obj5=Object.assign({},ob1,ob2,ob3);
// console.log(obj5);
// console.log(ob1);

////Spread operator
// const obj6={...ob1,...ob2,...ob3};
// console.log(obj6)
// console.log(ob2);
// ob2.c=56;
// console.log(ob2)
// console.log(obj6); 






