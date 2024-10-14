function calculateBMI(bb, tb) {
    let bmi = bb / (tb * tb);
    return bmi;
  }
  let bb = 45;
  let tb = 1.72;
  
  let bmi = calculateBMI(bb, tb);
  console.log("BMI ideal anda adalah : " + bmi.toFixed(2));

