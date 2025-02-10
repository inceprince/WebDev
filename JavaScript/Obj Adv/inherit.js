//prototype(interview)

let user1 = {
    name: "Prince",
    age: 21,
}

let user2 = {
    amount:420,
    loan:"50k"
}
console.log(user2.name) //undefined
user2.__proto__ = user1;//aab user2 user1 ke property ko bhi use kar sakta hain i.e inherit kar liya.
console.log(user2.name)//Prince

let arr = [10,20,30,40];
console.log(arr.__proto__== Array.prototype)
console.log(arr.__proto__.__proto__== Object.prototype)
console.log(arr.__proto__.__proto__.__proto__== null)
