//Callback Hell means Nested Callback Callback within Callback

function getData(dataID, getNextData) {
   setTimeout(() => {
      console.log("data", dataID);
      if (getNextData) {
         getNextData();
      }
   }, 2000)

}

getData(1, () => {
   console.log("getting Data 2....")
   getData(2, () => {
      console.log("getting Data 3....")
      getData(3, () => {
         console.log("getting Data 4....")
         getData(4)
      })
   })
})


