let calculation = localStorage.getItem("calculation") || "";

displayResult();
function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  displayResult();
  localStorage.setItem("calculation", calculation);
}

function displayResult() {
  document.querySelector(".text").innerHTML = calculation;
}
