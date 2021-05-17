let loanAmount = 1000000;
let loanYears = 30;
let loanRate = 5;
let monthyPayment = 4434.81

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

  const form = document.getElementById("calc-form");

  form.addEventListener("submit", function(event) {

    
    loanAmount = document.getElementById("loan-amount").value;
    loanYears = document.getElementById("loan-years").value;
    loanRate = document.getElementById("loan-rate").value;

    monthyPayment = calculateMonthlyPayment(loanAmount, loanYears,loanRate);

  });

}

// Get the current values from the UI
// Update the monthly payment
function update() {

updateMonthly();

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(loanAmount, loanYears, loanRate) {

  let bottomI = loanYears*-12;

  return (loanAmount * loanRate/12)/((1 - Math.pow((1+loanRate/1200),bottomI))*100);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {

  const displayMonthly = document.getElementById("monthly-payment");

  displayMonthly.innerText = "$" + monthyPayment.toFixed(2).toString();


}
