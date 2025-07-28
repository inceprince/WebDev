// Function->
// function shreya(){
//     let x=10;
//     console.log(x);
// }
// shreya();//invoke or call

// function greet(){
//     console.log("Hello");
//     console.log("Mein badiya hu");
//     console.log("Aur Kya chal rha hai");
// }

// greet();

// add program
 // parameter
// function sum(number1 , number2){
//     console.log(number1+number2)
// };

// function call: argument
// sum(3,4);
// sum(10,15);



// Multiplication: function

// function multiply(number1, number2) {
//     //  console.log(number1 * number2);  // Logs the result of the multiplication to the console
//     return number1 * number2;  // Returns the result of the multiplication
// }
// multiply(5,8);
// multiply(40,8);


// let result = multiply(4, 5);  // Calls the function and stores the returned value in 'result'
// console.log(result);  // Logs the value of 'result' to the console
// console.log(multiply(5,8));  // oly for testing purpose we use console.


// const fun = function() {
   
//     console.log("Hello");              // First log statement
//     console.log("Mein toh badiya hu"); // Second log statement
//     return "Money";                   //Function returns "Money" and exits here
//     console.log("aur kya chal rha")   // This line will NOT be executed
   
// }
// console.log(typeof fun);

// console.log(fun());  // Calls the function and logs the returned value
// fun();               // Calls the function again, but does not log the return value



//  Arrow function
// const sum = (number1, number2)=>{
//    return number1+number2;
// }

// const sum = (number1, number2) => number1+number2 ;//here return statemet not required
// console.log(sum(3,4));

// const cube = number => number*number*number;
// console.log(cube(8));

//  spread operator or
// let arr = [2,3,4,5];
//worked as copy of array
//  let arr2 = [...arr];

// rest operator(any number of parameter is paassed.)
// const sum = function(...number){
//     let add=0;
//   for(let i=0;i<number.length;i++){
//     add=add+number[i];
//   }
//   console.log(add);
// // //    return add;
  
//  }
// sum(4,8,9,826,78,8,232)


// arrow Function
// const sum =(...number) => {
//         let add=0;
//   for(let i=0;i<number.length;i++){
//     add=add+number[i];
//   }
//   return add;
// }
// console.log(sum(2,3,4));
// console.log(sum(4,6,1,10,13));
// console.log(sum(2,3));
/*........................................................*/
// let obj = {
//     name: "Prince",
//     age:30,
//     amount:420,
// }

//object destructure
// const {name , amount} = obj;
// console.log(name,amount);

//Object Destrcutive in function.
// function fun({name, amount}){
// //    console.log(name , amount);
// //    return {name, amount};// return object
//       return[name,amount]; //retrurn array
// }
// // fun(obj);
// const rvalue=fun(obj);
// console.log(rvalue);

//  function love(obj1){
//           obj.name="Ayushi"
//     console.log(obj1);
// }

// love(obj); 


let obj1 = {
    a:1,
    b:2,
}
let obj2 = {
    c:1,
    d:2,
}

obj2=Object.create(obj1);
console.log(obj2.a);