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
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand += number.toString();
  }
  calculate() {
    let prev = parseFloat(this.prevOperand);
    let current = parseFloat(this.currentOperand);
    let result;

    switch (this.operation) {
      case "÷":
        result = prev / current;
        break;
      case "x":
        result = prev * current;
        break;
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
    }
    this.prevOperand = "";
    this.currentOperand = result;
  }
  chooseOperation(operation) {
    if (this.prevOperand != "") {
      this.calculate();
    }

    this.operation = operation.toString(); //convert operation to a string
    this.prevOperand =
      this.currentOperand.toString() + " " + operation.toString(); //concat to current operand
    this.currentOperand = "";
    this.updateDisplay();
  }
}

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
    calculator.chooseOperation(operationButton.innerText);
    calculator.updateDisplay();
  });
});
