const calcNum = document.querySelectorAll(".calc-sm-btn");
const displayValue = document.getElementById("calc-input");
const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");
const operators = ['+', '-', '*', '/'];

let calcInput = [];
let answer = 0;

reset.addEventListener("click", function () {
  displayValue.innerHTML = "0";
  calcInput = [];
});


calcNum.forEach((element) => {
  element.addEventListener("click", function () {
    const value = element.value;
    const lastInput = calcInput[calcInput.length - 1];

    if (value === "del") {
      calcInput.pop();
    } 
    else if (operators.includes(value)) {
      if (calcInput.length > 0 && !operators.includes(lastInput)) {
        calcInput.push(value);
      }
    } 
    else {
      calcInput.push(value);
    }

    displayValue.innerHTML = calcInput.join("");
  });
});


calculate.addEventListener("click", function () {
  console.log(calcInput);
  let expression = calcInput.join("");
  let result = eval(expression);
  displayValue.innerHTML = result;
  calcInput = [];
});
