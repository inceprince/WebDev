// //how to create object
// const obj = {
//    0:20,
//    1:50,
//    2:70, 
//    name:"rohit", 
//    account_balance:420,
//    gender: "Male",
//    age: 30,
//    "account number": 231230, ////to add space we use  value as string.

// undefined: 30, ////undefined is also stord as string.

// null:"mohan", //// null is also stored as string.

// }

//-->key is stored as a string."eg:name->"name" "

// console.log(obj)
// console.log(obj.name)

// console.log(obj.account_balance) // // if there  is no space between the key.

// console.log(obj["account number"])// //if there is space beween them we use this.

// console.log(obj["undefined"]);

// console.log(obj["null"]);

// console.log(obj[0]) // // number is also stored as string.

// /---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-->array is stored as key value i.e "object"

// const arr = [20,50,70];
// console.log(arr);
// 0:20
// 1:50
// 2:70
// length:3
//In backend the arrays are as object.
// let arr={
//   0:20
// 1:50
//  2:70
// length:3
// }
// /---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -->Second method to create object

// const person = new Object();
// console.log(person);

// // property add
// person.name = "Rohit";
// person.age = 80;
// person.gender = "Male";
// console.log(person);

// // delete
// delete person.age;
// console.log(person);

// // Modify or update(If exist it will update or it will create a key value pair.)
// person.name = "Mohit";
// console.log(person);

// /---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// -->third method to create object
////(make class and add create diffrent object into it.)

// class People{
//     constructor(na, ag, gen){
        // ? constructor means to create.
//         this.name = na;
//         this.age = ag;
//         this.gender = gen;
//     }
// }

// let per1 = new People("Rohit", 20, "Male");
// let per2 = new People("Mohit", 30, "Female")
// let per3 = new People("Aman", 21, "Male")
// console.log(per1, per2,per3);
// /---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--> Object Method.

// let person = {
//     name: "rohit",
//     age:30,
//     account_balance:420,
//     gender:"male"
// };
// console.log(person)
// const arr=Object.keys(person) ////keys as array. 
// console.log(arr);

// //values
// const arr = Object.values(obj);
// console.log(arr);

// //keys; value
// const arr2 = Object.entries(person);
// console.log(arr2);

// // assign use case(merge all the object) and create a copy.
// const obj1 = {a:1,b:2};
// const obj2 = {c:3,d:4};
// const obj4= {e:5,f:6};
// const obj3 = Object.assign({},obj1,obj2,obj4);
//   ?{}-> "target" and obj3 will assign  in it.
// console.log(obj3)
// console.log(obj1.a);
// console.log(obj1);


// //The spread operator (...) in JavaScript allows you to copy, merge, and modify objects efficiently. Here's how it works with objects:

// const obj5 = {...obj1,...obj2,...obj4};
// console.log(obj5);




// ? 1.Copying an Object (Shallow Copy)not deep copy
// const person = { name: "John", age: 25 };
// const copiedPerson = { ...person };
// console.log(copiedPerson);  // //{ name: "John", age: 25 }

// ?2.Merging Two Objects
// const user = { name: "Alice", age: 30 };
// const address = { city: "New York", country: "USA" };
// const userDetails = { ...user, ...address };
// console.log(userDetails); // //{ name: "Alice", age: 30, city: "New York", country: "USA" }

// ?3.Overriding Properties
// const user = { name: "Bob", age: 22 };
// const updatedUser = { ...user, age: 25 };
// console.log(updatedUser); // //{ name: "Bob", age: 25 }

// ?4.Adding New Properties
// const car = { brand: "Tesla", model: "Model 3" };
// const newCar = { ...car, year: 2024 };
// console.log(newCar);  // //{ brand: "Tesla", model: "Model 3", year: 2024 }



// const complexObject = {
//    person: {
//      name: "John Doe",
//      age: 30,
//      hobbies: ["reading", "coding", "hiking"],
//      address: {
//        street: "123 Main St",
//        city: "Metropolis",
//        zip: 12345,
//      },
//    },
//    company: {
//      name: "Tech Solutions",
//      employees: [
//        { id: 1, name: "Alice", role: "Developer" },
//        { id: 2, name: "Bob", role: "Designer" },
//        { id: 3, name: "Charlie", role: "Manager" },
//      ],
//      revenue: 500000,
//    },
//    isActive: true,
//    launchDates: [new Date("2022-01-01"), new Date("2023-06-15")],
//    computeRevenue: function () {
//      return this.company.revenue;
//    },
//  };
//  console.log(complexObject)
//  const arr1= Object.keys(complexObject)
//  console.log(arr1)

// //freeze does not makes any changes to object it freezes object and it is only for shallow copy.

// const hw = { name: "Alice", age: 25 };
// Object.freeze(hw);
// obj.age = 30; //// Does nothing
// obj.city = "New York"; // //Does nothing
// delete hw.name; // //Does nothing

// console.log(hw);  // //Outputs: { name: "Alice", age: 25 }


// //object.seal()->Property Modification Allowed: You can update the values of existing properties.
// //Adding or deleting properties is NOT allowed.

// const obj = { name: "Alice", age: 25 };
// Object.seal(obj);

// obj.age = 30; // Allowed
// obj.city = "New York"; // Does nothing
// delete obj.name; // Does nothing

// console.log(obj); // Outputs: { name: "Alice", age: 30 }








