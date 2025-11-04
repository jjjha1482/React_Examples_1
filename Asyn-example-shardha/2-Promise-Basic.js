// let promise = new Promise((resolve, reject) => {
//    console.log("I am Promise");
//    resolve(123);
// })

// let promise = new Promise((resolve, reject) => {
//    reject("Error");
//    console.log("I am Promise");
// });



function getData(dataID, getNextData) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data", dataID);
         resolve("Success")
         if (getNextData) {
            getNextData();
         }
      }, 5000)
   });
}

let result = getData(123);
