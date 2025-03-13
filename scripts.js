const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  let { dividend, divider } = Object.fromEntries(entries);

 // Check if inputs are missing
 if (!dividend.trim() || !divider.trim()) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  return;
}

// Convert input values to numbers
dividend = parseFloat(dividend);
divider = parseFloat(divider);

// Check if inputs are numbers
if (isNaN(dividend) || isNaN(divider)) {
  console.error("Critical error: Non-numeric input detected.");
  document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
  throw new Error("Non-numeric input detected");
}

// Check if division by zero occurs
if (divider === 0) {
  console.error("Division by zero error.");
  result.innerText = "Division not performed. Invalid number provided. Try again.";
  return;
}

// Perform division (decimal results allowed)
let divisionResult = dividend / divider;
  // Display result
  result.innerText = divisionResult;
});
