// //JavaScipt Function
// //Cara 1. Function Declaration
// function greetings1() {
//     console.log("Hello World");
// }

// greetings1(); //Call / Execute

// //Cara 2. Function Expression
// let greetings2 = function () {
//     console.log("Hello World");

// };

// greetings2();

//Parameter & Argumen (input), Return (output)
//Cara 1.
// function greetings1(fullName) {
//   //bisa lebih dari 1 parameter
//   return "Hello" + fullName;
// }
// //          argumen
// let output = greetings1("John Doe");
// console.log(output);

//Cara 2
// let greetings2 = function (fullName) {
//   return "Hello" + fullName;
// };

// let output2 = greetings2("John Doe");
// console.log(output2);

//Function Hoisting

//          argumen
let output = greetings1("John Doe");
console.log(output);

function greetings1(fullName) {
    //bisa lebih dari 1 parameter
    return "Hello" + fullName;
  }

//Cara 2 -> ERROR

// let output2 = greetings2("John Doe");
// console.log(output2);

// let greetings2 = function (fullName) {
//   return "Hello" + fullName;
// };

//Global Scope & Local Scope 

let x = 10; //Global 

function foo() {
  let  y = 20; //Local Function
  console.log(x); //10
  console.log(y); //20
  if (y > 10) {
    let z = 30; // Local Block 
    console.log(x); //10
    console.log(y); //20
    console.log(z); //30
  }
  // console.log(z); //ERROR
}
// console.log(y); //ERROR
console.log(x); //10

foo();
