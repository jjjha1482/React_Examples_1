function sum(a, b) {
   console.log(a + b);
}
function cal(a, b, sumCallback) {
   sumCallback(a, b);
}   // callback means function passed as argument to another function
cal(1, 2, sum);  // cant pass like sum() beacuse it immeditley execute sum so
//2nd way
cal(1, 2, (a, b) => {
   console.log(a + b)
});

