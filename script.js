// Dynamically update conversion units based on input unit selection
function updateConversionUnits() {
  const inputUnit = document.getElementById("inputUnit").value;
  const conversionUnit = document.getElementById("conversionUnit");

  // Clear the current conversion options
  conversionUnit.innerHTML = "";

  // Add options excluding the selected input unit
  const units = {
    celsius: "Celsius (°C)",
    fahrenheit: "Fahrenheit (°F)",
    kelvin: "Kelvin (K)",
  };

  for (const [key, label] of Object.entries(units)) {
    if (key !== inputUnit) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = label;
      conversionUnit.appendChild(option);
    }
  }
}

document.getElementById("convertBtn").addEventListener("click", function () {
  const temperature = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const inputUnit = document.getElementById("inputUnit").value;
  const conversionUnit = document.getElementById("conversionUnit").value;
  const resultDiv = document.getElementById("result");

  // Input validation
  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid number.";
    resultDiv.style.color = "red";
    return;
  }

  let convertedTemp = 0;
  let convertedUnit = "";

  // Conversion logic
  if (inputUnit === "celsius" && conversionUnit === "fahrenheit") {
    convertedTemp = (temperature * 9) / 5 + 32;
    convertedUnit = "Fahrenheit (°F)";
  } else if (inputUnit === "celsius" && conversionUnit === "kelvin") {
    convertedTemp = temperature + 273.15;
    convertedUnit = "Kelvin (K)";
  } else if (inputUnit === "fahrenheit" && conversionUnit === "celsius") {
    convertedTemp = ((temperature - 32) * 5) / 9;
    convertedUnit = "Celsius (°C)";
  } else if (inputUnit === "fahrenheit" && conversionUnit === "kelvin") {
    convertedTemp = ((temperature - 32) * 5) / 9 + 273.15;
    convertedUnit = "Kelvin (K)";
  } else if (inputUnit === "kelvin" && conversionUnit === "celsius") {
    convertedTemp = temperature - 273.15;
    convertedUnit = "Celsius (°C)";
  } else if (inputUnit === "kelvin" && conversionUnit === "fahrenheit") {
    convertedTemp = ((temperature - 273.15) * 9) / 5 + 32;
    convertedUnit = "Fahrenheit (°F)";
  }

  resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(
    2
  )} ${convertedUnit}`;
  resultDiv.style.color = "#fff";
});

// Initialize the conversion options on page load
updateConversionUnits();
