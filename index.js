class Calculator {
  constructor(prevOperandElement, currentOperandElement) {
    this.prevOperandElement = prevOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.allClear();
  }

  allClear() {
    this.prevOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }
  updateDisplay() {
    this.prevOperandElement.innerText = this.prevOperand;
    this.currentOperandElement.innerText = this.currentOperand;
  }
  del() {
    alert("deleting!");
  }
  appendNumber(number) {
    alert("clicked a number!!");
    this.currentOperand += number.toString();
    console.log("current operand: " + this.currentOperand);
  }
  calculate() {
    alert("calculating!");
  }
  chooseOperation() {
    alert("clicked an operation!");
  }
}

alert("this is some joovooscropt!");

//get previous and current operand elements
const prevOperandElement = document.querySelector("#previous-operand");
const currentOperandElement = document.querySelector("#current-operand");

const calculator = new Calculator(prevOperandElement, currentOperandElement);
// const calculator = new Calculator();

//all clear button
const allClearButton = document.querySelector("[data-all-clear]");
allClearButton.addEventListener("click", (button) => {
  calculator.allClear();
  calculator.updateDisplay();
});

//delete button
const deleteButton = document.querySelector("[data-delete");
deleteButton.addEventListener("click", (button) => {
  calculator.del();
  calculator.updateDisplay();
});

//equals Button
const equalsButton = document.querySelector("[data-equals]");
equalsButton.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});

//number buttons
const numButtons = document.querySelectorAll("[data-number");
numButtons.forEach((numButton) => {
  numButton.addEventListener("click", (button) => {
    calculator.appendNumber(numButton.innerText);
    calculator.updateDisplay();
  });
});

//operation buttons
const operationButtons = document.querySelectorAll("[data-operation]");
operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", (button) => {
    calculator.chooseOperation();
    calculator.updateDisplay();
  });
});
