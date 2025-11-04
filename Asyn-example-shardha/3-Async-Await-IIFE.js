function getData(dataID) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data", dataID);
         resolve("Success Promise Chain")
      }, 3000)
   });
}

// async function getAllData() {
//    console.log("Fetching Data 1")
//    await getData(1);
//    console.log("Fetching Data 2")
//    await getData(2);
//    console.log("Fetching Data 3")
//    await getData(3);
// }

//IIFE - Immediately Invoked(execute) Function Expresssion
(async () => {
   console.log("Fetching Data 1")
   await getData(1);
   console.log("Fetching Data 2")
   await getData(2);
   console.log("Fetching Data 3")
   await getData(3);
})();