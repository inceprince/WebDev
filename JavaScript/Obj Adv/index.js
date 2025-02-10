// let obj1 = {
//     a:1,
//     b:2
// }

// let obj2 = obj1;
// // shallow copy(refrence copy)
// obj2.a=10;
// console.log(obj2, obj1);

// //  deep copy 
// let obj3 = structuredClone(obj1);
// obj3.a = 20;
// console.log(obj3, obj1);


////  Nested object
// const user = {
//     name:"Prince",
//     balance: 120,
//     address: {
//         pincode: 560048,
//         city: "Bangalore,whitefield"
//     }
// }
// console.log(user)
// console.log(user.address.pincode);

////duplicate(assign and spread ) is shallow copy but netsted is deep copy.
// const duplicate=Object.assign({},user)
// console.log(duplicate)
// console.log(user==duplicate)
// duplicate.address.city="dhanbad";

// console.log(duplicate) ////Outputs: "dhanbad" (original is affected!)
// console.log(user);

////to overcome nested we use structed cloning.
// const copy= structuredClone(user);
// //modify the copy
// copy.address.city="dhanbad"
// console.log(copy);//(original is  not affected!)

//// Destructruing of an object
// let obj = {
//     name: "Prince",
//     money: 430,
//     balance: 30,
//     age: 21,
//     aadhar: "20198576697"
// };
// const {name:full_name, balance:amount, age:umar} = obj;
// console.log(full_name,amount,umar);
// const {name:full_name , balance: amount, age:Umar} = obj;
// const {name, age,...obj1} = obj;
// console.log(obj1);
//// array destructure
// const arr = [3,2,1,5,10];
// const [first,second] = arr;
// const [first,second, ,third] = arr;
// const [first,second,...third] = arr;////fiirst second destrstructure ho jyen aur third walli kisis dure array me chla jyeen.
// console.log(first,second) //3 2
// console.log(third);//[ 1, 5, 10 ]
// console.log(arr);//[ 3, 2, 1, 5, 10 ]


////nested destructure.

let obj = {
        name: "Prince",
        age: 21,
        arr: [90,40,60,80],
         address: {
            pincode:560048,
            city:"Banaglore",
            
        },
        hometown:{
            state:"Jharkhand"
        }

 };
// const {address:{pincode, city}} = obj;
// console.log(pincode,city)
// const {arr: [first]} = obj;
// console.log(first);
// const{arr}=obj;
// console.log(arr);
// const{arr:[second]}=obj
// console.log(second)
// const {name,age,arr,address:{pincode,city},hometown:{state}}=obj
// console.log(name,age,arr,pincode,city,state);


////object with function
// let user = {
//     name: "Prince",
//     amount: 220,
//     greet: function(){
//         return"Hello dosto"
//     },
//     meet: function(){
//         return 20;
//     }
// }

// console.log(user.greet());
// console.log(user.meet());

// let obj = {
//     name:"Rohit",
//     amount:420,
//     greet: function(){
//         return 10;
//     }
// }


// console.log(obj.toString())
// // arr is an object
// let arr = [2,3,1,8];
// arr.push(10); //never say built-in function in interview.






