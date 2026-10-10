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

// Formats a number as money in bolivianos with 2 decimals, e.g. "Bs 1,820.00"
function formatBs(amount) {
  return "Bs " + amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Builds one row of the bar chart: a label, a coloured bar and the amount.
// width is a percentage (0 to 100) of the full bar.
function barRow(label, amount, width, className) {
  return '<div class="bar-row">' +
    '<span class="bar-label">' + label + '</span>' +
    '<span class="bar"><span class="bar-fill ' + className + '" style="width: ' + width.toFixed(1) + '%"></span></span>' +
    '<span class="bar-value">' + formatBs(amount) + '</span>' +
    '</div>';
}

// Writes the results on the page, as a small bar chart plus a sentence
function showResult(result) {
  let summary;
  if (result.monthlySaving > 0) {
    summary = "Electric saves you " + formatBs(result.monthlySaving) + " a month, about " +
      formatBs(result.yearlySaving) + " a year.";
  } else if (result.monthlySaving < 0) {
    // Math.abs() removes the minus sign, so the sentence reads naturally
    summary = "With these figures, electric costs " + formatBs(Math.abs(result.monthlySaving)) +
      " more a month, about " + formatBs(Math.abs(result.yearlySaving)) + " a year.";
  } else {
    summary = "With these figures, both cost the same.";
  }

  // The bigger cost fills the whole bar; the other one is a share of it
  const biggest = Math.max(result.dieselCost, result.electricCost);
  const dieselWidth = result.dieselCost / biggest * 100;
  const electricWidth = result.electricCost / biggest * 100;

  document.getElementById("calc-result").innerHTML =
    "<h3>Your monthly running costs</h3>" +
    barRow("Diesel", result.dieselCost, dieselWidth, "bar-diesel") +
    barRow("Electric", result.electricCost, electricWidth, "bar-electric") +
    '<p class="result-summary"><strong>' + summary + "</strong></p>" +
    '<p class="hint">This only covers energy. It does not include the price of the vehicle, maintenance or financing.</p>';
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