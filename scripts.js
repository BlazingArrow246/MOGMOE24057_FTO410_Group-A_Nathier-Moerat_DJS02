
//DIVISION CALCULATOR


//_______________________________Select elements from html___________________________________________

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

//_______________________________Handles form submission____________________________________________

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //___________Extracts data from submission and converts to an object to get keys___________________
  
  const entries = new FormData(event.target);
  let { dividend, divider } = Object.fromEntries(entries);

 // _____________________________Check if inputs are missing__________________________________________
 
 if (!dividend.trim() || !divider.trim()) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  return; 
}

//_______________________________Convert input values to numbers______________________________________

dividend = parseFloat(dividend);
divider = parseFloat(divider);

//_______________________________Check if inputs are numbers__________________________________________

if (isNaN(dividend) || isNaN(divider)) {
  console.error("Critical error: Non-numeric input detected.");
  document.body.innerHTML = "<h1>Something went wrong.Input must be a number..</h1>";
  throw new Error("Non-numeric input detected");
}

//______________________________Throws error when input is 0__________________________________________

if (divider === 0) {
  console.error("Division by zero error.");
  result.innerText = "Division not performed, cannot divide by 0. Try again.";
  return; 
}

//______________________________Perform division (decimal results allowed)_____________________________

let divisionResult = dividend / divider;
console.log(`Performing division: ${dividend} ÷ ${divider} = ${divisionResult}`);

  //____________________________Display result_________________________________________________________
  
  result.innerText = divisionResult;
  console.log("Division result:", divisionResult); 
});
