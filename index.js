alert("this is some joovooscropt!");

class Calculator {
  // constructor(prevOperandElement, currentOperandElement) {
  //   this.prevOperandElement = prevOperand;
  //   this.currentOperandElement = currentOperand;
  // }

  allClear() {
    alert("all clear");
  }
  updateDisplay() {
    alert("updating display!");
  }
  del() {
    alert("deleting!");
  }
  addendNumber() {
    alert("clicked a num!");
  }
  calculate() {
    alert("calculating!");
  }
  chooseOperation() {
    alert("clicked an operation!");
  }
}

//get previous and current operand elements
// const prevOperandElement = document.querySelector("#previous-operand");
// const currentOperandElement = document.querySelector("#current-operand");

// const calculator = new Calculator(prevOperandElement, currentOperandElement);
const calculator = new Calculator();
calculator.allClear();

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
    calculator.addendNumber();
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
