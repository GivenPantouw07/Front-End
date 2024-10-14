// JavaScript Object & Condition
// Deklarasi Object
// Object Literal
// let john = {
//     firstName: "John", 
//     Age: 30,
//     isMarried: true,
//     grade: [80, 90, 100],
//     sayGreetings: function () {                             //Object Method
//         console.log("Hello my name is " + this.firstName)
//     },
//     addres: {                                               //Object dalam object
//         street: "Jl Arlnold Mononutu Airmadidi",
//         city: "Minahasa Utara",
//         province: "Sulawesi Utara",
//         postalCode : 95371,
//     },
// };
// console.log(john)

//Mengakses properti dalam object
//1. Dot notation
// console.log(john.firstName) // John
// console.log(john.Age) // 30
// john.Age = 31; //ubah Nilai
// console.log(john)
// john.job = "Teacher" //Tambah properti
// console.log(john)
//2. Bracket notation
// console.log(john["isMarried"]) //true
// john ["nationality"] = "Indonesia" //tambah properti baru

//Object method
// john.sayGreetings();

//Object inside object
// console.log(john.addres.city)

//Delete properti dalam object 
// delete john.grade;
// console.log(john);

//JavaScript Conditional
//1. if - else
//Jika suhu hari ini lebih atu sama dengan 37,
//Tampilkan suhu hari ini panas
// Jika tidak tampilkan suhu hari ini dingin

let temp = 38
if (temp >= 37) {
    console.log("Hari ini panas")
} else {
    console.log("Hari ini dingin")
}

//2, if - else - if else
//Jika nilai 100 - 80 tampilkan grade A
//Jika nilai 70 - 79 tampilkan grade B
//Jika nilai 50 - 69 tampilkan grade C
//Jika nilai dibawah 50 tampilkan grade D
let grade = 60
if (grade >= 80 && grade <= 100) {
    console.log("grade A")
} else if (grade >=70 && grade < 80) {
    console.log("grade B")
} else if (grade >= 50 && grade < 70) {
    console.log("grade C")
} else {
    console.log("grade D")
}

//3. Switch - case 
// Jika angka 1 tampilkan January
// Jika angka 2 tampilkan February
// Jika angka 3 Tampilkan March
// !
// Jika angka 12 Tampilkan December

let number = 1;
switch (number) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    default:
        console.log("Not found")
        break;
}
