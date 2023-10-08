function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Masukkan berat badan dan tinggi badan yang valid (lebih dari 0).");
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

