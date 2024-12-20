//IIFE & Callback Function
//1. IIFE (Immediately Invoked Function Expression)

//a. No params, args, & return value
// (function (){
//     console.log("Hello Wolrd")
// })();

//b. With params, args, & return value
// let output = (function (fullName) {
//     return "Hello " + fullName;
// })("John Doe");
// console.log(output)

//2. Callback Function

//a. No params, args, & return value
// function sayHello (callback) {
//     callback();
// }

// sayHello(function (){
//     console.log("Hello World"); //Callback function
// })

//b. With params, args, & return value
function sayHello(callback) {
  let result = callback("John Doe");
  return result;
}

let output = sayHello(function (fullName) {
  return "Hello " + fullName;
});
console.log(output);
