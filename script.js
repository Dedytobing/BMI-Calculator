function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight === "" || height === "") {
    alert("Harap isi berat badan dan tinggi badan!");
    return;
  }

  const bmi = weight / Math.pow(height / 100, 2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  const result = document.getElementById("result");
  result.innerHTML = `Your BMI is <span>${bmi.toFixed(1)}</span> which means You are <span>${category}</span>`;
}
