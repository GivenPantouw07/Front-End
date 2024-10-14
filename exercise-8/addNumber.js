const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
  
    numbers.map((num) => (sum += num)); // Menggunakan map untuk menjumlahkan
    return sum;
  };

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));
export default addNumber;