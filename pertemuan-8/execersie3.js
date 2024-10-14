let human = {
  firstName: "Given",
  weight: 45,
  height: 1.63,
  calculateBMI: function () {
    let formula = this.weight / (this.height * this.height);
    this.bmi = formula.toFixed(2);
  },

  categoryBMI: function () {
    //let bmi = this.bmi;
    if (this.bmi <= 16.0) {
      return "Severely Underweight";
    } else if (this.bmi > 16.0 && this.bmi <= 18.4) {
      return "Underweight";
    } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
      return "Normal";
    } else if (this.bmi >= 25.0 && this.bmi <= 29.9) {
      return "Overweight";
    } else if (this.bmi >= 30.0 && this.bmi <= 34.9) {
      return "Moderately Obese";
    } else if (this.bmi >= 35.0 && this.bmi <= 39.9) {
      return "Severely Obese";
    } else if (this.bmi >= 40.0) {
      return "Morbidly Obese";
    } else {
      return "No description";
    }
  },
};

human.calculateBMI();
console.log("First Name : " + human.firstName);
console.log("Weight : " + human.weight);
console.log("Height : " + human.height);
console.log("Calculated BMI : " + human.bmi);
console.log("BMI Category : " + human.categoryBMI());
