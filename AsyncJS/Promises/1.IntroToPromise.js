//  Creation of Promise (This part is synchronous)
const promise1 = new Promise(function func(resolve, reject) {
    resolve("Promise resolved"); // This immediately resolves the promise
    reject("Promise rejected");  //  This line is ignored because 'resolve' is already called
});

//  Consumption of Promise (Asynchronous)
// .then() takes two callback functions: one for success and one for failure
promise1.then(function success(result) {
    console.log( result);
}, function reject(err) {
    console.log(" err);
});



//Example1-->
// function isData(item) {
    // Creating a new Promise
//     const promise = new Promise(function func(resolve, reject) {
//         if (item) {
            // If item is truthy (not null/undefined/empty), resolve the promise
//             resolve(" Promise resolved");
//         } else {
            // If item is falsy (undefined, null, "", 0, etc.),reject the promise
//             reject(" Data is empty");
//         }
//     });
//     return promise; // return the promise object
// }

// Test case 1: No argument passed → item is undefined → reject will be called
// let result = isData(); 

// Test case 2: Argument passed → item = "Pasta" (truthy) → resolve will be called
// let result = isData("Pasta");

// Consuming the promise
// result.then(
//     function success(result) {
//         console.log(result); // Output:  Promise resolved
//     },
//     function fail(err) {
//         console.log(err); // Output only if rejected (won’t run in this case)
//     }
// );




//example2-->
// Asynchronous Promise Example using setTimeout

function isData(item) {
    const promise = new Promise(function func(resolve, reject) {
        console.log("Item is being fetched")
        // Simulating async task using setTimeout
        setTimeout(function timer1() {
            if (item) {
                // If item exists, resolve the Promise
                resolve("Promise resolved");

                // This will run immediately, but may log before or after depending on resolution timing
                console.log(item); 
            } else {
                // If item is falsy (like undefined or null), reject the Promise
                reject("Data is empty");
            }
        }, 4000); // 4 second delay
    });

    return promise; // Return the promise so it can be consumed
}

// Calling the function with a valid string argument
let result = isData("Pasta");

// Consuming the promise using .then()
// This is asynchronous and will run after 4 seconds
result.then(function success(result) {
    console.log(result);  // Output after 4 seconds: "Promise resolved"
}, function fail(err) {
    console.log(err);     // Will not be called in this case
});
