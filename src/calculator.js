// calculator.js: compares monthly diesel and electric running costs (no server)

// The ids of the six input fields (they match the ids in solutions.html)
const fieldIds = ["distance", "days", "diesel-use", "diesel-price", "ev-use", "ev-price"];

// Rule: the value is a number greater than zero.
// An empty string would turn into 0 with Number(), so it is checked first.
function isPositiveNumber(value) {
  if (value.trim() === "") {
    return false;
  }
  const number = Number(value);
  return !isNaN(number) && number > 0;
}

// Shows an error message next to a field and marks it invalid
function showCalcError(fieldId, message) {
  document.getElementById(fieldId + "-error").textContent = message;
  document.getElementById(fieldId).setAttribute("aria-invalid", "true");
}

// Removes the error message and the invalid mark from a field
function clearCalcError(fieldId) {
  document.getElementById(fieldId + "-error").textContent = "";
  document.getElementById(fieldId).removeAttribute("aria-invalid");
}

// Works out all the results from the six numbers and returns them together
function calculateCosts(distance, days, dieselUse, dieselPrice, evUse, evPrice) {
  const monthlyKm = distance * days;
  const dieselCost = monthlyKm / 100 * dieselUse * dieselPrice;
  const electricCost = monthlyKm / 100 * evUse * evPrice;
  const monthlySaving = dieselCost - electricCost;
  const yearlySaving = monthlySaving * 12;

  return {
    dieselCost: dieselCost,
    electricCost: electricCost,
    monthlySaving: monthlySaving,
    yearlySaving: yearlySaving
  };
}

// Writes the results on the page, rounded to 2 decimals
function showResult(result) {
  let summary;
  if (result.monthlySaving > 0) {
    summary = "Electric saves you " + result.monthlySaving.toFixed(2) + " per month.";
  } else if (result.monthlySaving < 0) {
    summary = "With these figures, electric costs " + Math.abs(result.monthlySaving).toFixed(2) + " MORE per month.";
  } else {
    summary = "With these figures, both cost the same.";
  }

  document.getElementById("calc-result").innerHTML =
    "<h3>Results (per month)</h3>" +
    "<p>Diesel: " + result.dieselCost.toFixed(2) + "</p>" +
    "<p>Electric: " + result.electricCost.toFixed(2) + "</p>" +
    "<p><strong>" + summary + "</strong></p>" +
    "<p>Over 12 months: " + result.yearlySaving.toFixed(2) + "</p>";
}

// Runs when the user clicks Calculate
function handleCalculate(event) {
  event.preventDefault(); // stops the page reloading

  let allValid = true;
  const values = {};

  // Check every field: it must be a number greater than zero
  for (const id of fieldIds) {
    const value = document.getElementById(id).value.trim();
    if (!isPositiveNumber(value)) {
      showCalcError(id, "Enter a number greater than 0.");
      allValid = false;
    } else {
      clearCalcError(id);
      values[id] = Number(value);
    }
  }

  if (!allValid) {
    // Remove old results and move the cursor to the first field with an error
    document.getElementById("calc-result").innerHTML = "";
    document.querySelector('#calc-form [aria-invalid="true"]').focus();
    return;
  }

  const result = calculateCosts(
    values["distance"], values["days"],
    values["diesel-use"], values["diesel-price"],
    values["ev-use"], values["ev-price"]
  );
  showResult(result);
}

// Connects handleCalculate to the form's submit event
document.getElementById("calc-form").addEventListener("submit", handleCalculate);

// Fills the form with illustrative example values so the client can see how it works.
// These numbers are made up for demonstration and are not real prices.
function fillExample() {
  const example = {
    "distance": 100, "days": 26,
    "diesel-use": 30, "diesel-price": 5,
    "ev-use": 80, "ev-price": 1
  };
  for (const id of fieldIds) {
    document.getElementById(id).value = example[id];
    clearCalcError(id);
  }
  document.getElementById("calc-result").innerHTML = "";
}

document.getElementById("example-button").addEventListener("click", fillExample);