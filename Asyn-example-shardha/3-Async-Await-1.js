//async function automatic create promise without promise keyWord

// async function hello() {
//    console.log("hello")
// }

function api() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("Weather Data");
         resolve(200);
      }, 2000);
   });
}

async function getApi() {
   await api();
   await api();
}