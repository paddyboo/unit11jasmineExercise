window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() { 
  const initialAmount = document.getElementById("loan-amount");  
  const initialYears = document.getElementById("loan-years");
  const initialRate = document.getElementById("loan-rate");
  initialAmount.value=400000;
  initialYears.value=15;
  initialRate.value=3;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const newValues=getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(newValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  n = values.years*12;
  monthlyRate = values.rate/100/12;
  return ((values.amount*monthlyRate)/(1-(1+monthlyRate)**-n)).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment"); 
  monthlyPayment.innerText=monthly;
}
