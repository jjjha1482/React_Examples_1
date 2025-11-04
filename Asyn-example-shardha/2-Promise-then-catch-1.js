// let getPromise = new Promise((resolve, reject) => {
//    console.log("I am Promise");
//    resolve(123);
// })

// let promise = getPromise;
// promise.then(() => {
//    console.log("Full124")
// })


let getPromise = new Promise((resolve, reject) => {
   console.log("I am Promise");
   reject(123);
})

let promise = getPromise;
promise.then(() => {
   console.log("Promise Pass")
})

promise.catch(() => {
   console.log("Promise Fail")
})