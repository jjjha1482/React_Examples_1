let getPromise = new Promise((resolve, reject) => {
   console.log("I am Promise");
   resolve(123);
})

let promise = getPromise;
promise.then((res) => {
   console.log("Promise Pass", res)
})

promise.catch((err) => {
   console.log("Promise Fail", err)
})