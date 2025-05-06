document.querySelectorAll('input[name="height-unit"]').forEach(unit => {
    unit.addEventListener("change", () => {
      const heightInput = document.getElementById("height");
      const ftInSection = document.getElementById("ft-in-inputs");
      if (unit.value === "ft-in") {
        heightInput.style.display = "none";
        ftInSection.style.display = "flex";
      } else {
        heightInput.style.display = "block";
        ftInSection.style.display = "none";
      }
    });
  });
  
  function calculateBMI() {
    const age = parseInt(document.getElementById("age").value);
    const weightUnit = document.querySelector('input[name="weight-unit"]:checked').value;
    const heightUnit = document.querySelector('input[name="height-unit"]:checked').value;
  
    let weight = parseFloat(document.getElementById("weight").value);
    let height;
  
    if (heightUnit === "cm") {
      height = parseFloat(document.getElementById("height").value) / 100;
    } else {
      const feet = parseFloat(document.getElementById("feet").value) || 0;
      const inches = parseFloat(document.getElementById("inches").value) || 0;
      height = ((feet * 12) + inches) * 0.0254; // Convert to meters
    }
  
    if (weightUnit === "lb") {
      weight = weight * 0.453592; // Convert to kg
    }
  
    const result = document.getElementById("bmi-result");
  
    if (!weight || !height || height <= 0 || !age) {
      result.textContent = "Please enter valid values.";
      return;
    }
  
    const bmi = weight / (height * height);
    let category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }
  
  function clearFields() {
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("bmi-result").textContent = "";
  }
  