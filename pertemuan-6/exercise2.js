//Ubah/Modifikasi exercise 1
//menggunakan
//1. IIFE
(function (bb, tb, callback) {
  let bmi = bb / (tb * tb);
  callback(bmi);
})(45, 1.72, function (bmi) {
  console.log("BMI saya adalah : " + bmi.toFixed(2));
});

//2. Callback
function hitungBMI(bb, tb, callback) {
  let bmi = bb / (tb * tb);
  callback(bmi);
}

let bb = 45;
let tb = 1.72;

hitungBMI(bb, tb, function (bmi) {
  console.log("BMI ideal anda adalah :" + bmi.toFixed(2));
});
