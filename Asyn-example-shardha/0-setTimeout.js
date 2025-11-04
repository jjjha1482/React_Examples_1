// function Hello() {
//    console.log("Hello");
// }
// setTimeout(Hello, 4000);

console.log("1");  // imeediat print
console.log("2");

setTimeout(() => {
   console.log("Bye")
}, 4000);    // print last because print afer 4 sec so hello print first  2s before Bye
setTimeout(() => {
   console.log("Hello")
}, 2000);

//output: 1 2 Hello Bye