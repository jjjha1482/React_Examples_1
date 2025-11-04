function asynFunc1() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data 1")
         resolve("success Data")
      }, 3000)
   })
}

function asynFunc2() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data 2")
         resolve("success Data")
      }, 4000)
   })
}

console.log("fetching data 1")
let p1 = asynFunc1();
p1.then((res) => {
   console.log(res);
})


console.log("fetching data 2")
let p2 = asynFunc2();
p2.then((res) => {
   console.log(res);
})