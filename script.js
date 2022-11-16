"use strict";

const input = document.getElementById("calc-input");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");

function calculate(string) {
  if (
    string.endsWith(".") ||
    string.endsWith("/") ||
    string.endsWith("+") ||
    string.endsWith("-") ||
    string.endsWith("*")
  ) {
    return;
  }

  input.value = parseFloat(eval(string).toFixed(10));
}

const backspaceButton = document.querySelector(".button.backspace");

backspaceButton.addEventListener("click", () => {
  if (input.value !== "0") {
    if (input.value.length === 1) {
      input.value = 0;
    } else {
      input.value = input.value.slice(0, input.value.length - 1);
    }
  }
});

numberButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    const number = e.target.id[e.target.id.length - 1];
    const arrayOfNumbers = input.value.split(/\+|\-|\*|\//gi);
    const lastNumber = arrayOfNumbers[arrayOfNumbers.length - 1];

    if (number === "C") {
      input.value = 0;
    } else if (number === ",") {
      if (!lastNumber.includes(".")) {
        input.value += ".";
      }
    } else if (input.value === "0") {
      input.value = number;
    } else {
      input.value += number;
    }
  });
});

operatorButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    const operator = e.target.id[e.target.id.length - 1];

    if (operator === "=") {
      calculate(input.value);
    } else {
      if (
        !input.value.endsWith("+") &&
        !input.value.endsWith("-") &&
        !input.value.endsWith("/") &&
        !input.value.endsWith("*") &&
        !input.value.endsWith(".")
      ) {
        input.value += operator;
      }
    }
  });
});
