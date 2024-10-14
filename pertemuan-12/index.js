//String Literals, Arrow Function, Default Parameters

//1. String Literals
let fullName = "John Doe";
let age = 33;
let addres = "Manado";

//Halo nama saya John Doe, umur saya 33 tahun dan saya tinggal di Manado

let kalimat =
  "Halo nama saya " +
  fullName +
  " umur saya " +
  age +
  " saya tinggal di " +
  addres;

console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${addres}`;
console.log(kalimat2);

//2. Arrow Function

function sayGreetings1(fullName) {
  return `Halo nama saya ${fullName}`;
}

console.log(sayGreetings1("John Doe"));

const sayGreetings2 = (fullName) => `Halo nama saya ${fullName}`;

console.log(sayGreetings2("John Doe"));

//Arrow Function pafa IIFE
let output1 = () => `Hello`();
console.log(output1);

//Arrow Function pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

//3. Default Parameters
const sayGreetings3 = (fullName, age, addres) => {
  if (!fullName) {
    fullName = "John Doe";
  }
  if (!age) {
    age = "30";
  }
  if (!addres) {
    addres = "Manado";
  }
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age}, dan alamat saya di ${addres}`
  );
};
sayGreetings3();

const sayGreetings4 = (
  fullName = "John Doe ",
  age = 30,
  address = " Manado "
) => {
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}`
  );
};
sayGreetings4();
