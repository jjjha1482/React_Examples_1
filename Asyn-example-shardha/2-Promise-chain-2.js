function getData(dataID) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("data", dataID);
         resolve("Success Promise Chain")
      }, 3000)
   });
}

// console.log("Fetching Data 1")
// getData(1)
//    .then((res) => {
//       console.log(res)
//       console.log("Fetching Data 2")
//       getData(2)
//          .then((res) => {
//             console.log(res)
//             console.log("Fetching Data 3")
//             getData(3)
//                .then((res) => {
//                   console.log(res)
//                })
//          })
//    });

//better way

console.log("Fetching Data 1")
getData(1)
   .then(() => {
      console.log("Fetching Data 2")
      return getData(2)
   })
   .then(() => {
      console.log("Fetching Data 3")
      return getData(3)
   })
   .then(() => {
      console.log("Fetching Data 4")
      return getData(4)
   })
   .then((res) => {
      console.log(res)
   })

