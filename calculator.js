class Calculator {
  constructor(prevOperandElement, currentOperandElement) {
    this.prevOperandElement = prevOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.allClear();
  }

  //set values to defaults
  allClear() {
    this.prevOperand = ""; //previous operand
    this.currentOperand = ""; //current operand
    this.operation = undefined; //operation to perform
    this.isResult = false; //if current operant is result of calculation
  }

  //display previous and current operand in page
  updateDisplay() {
    this.prevOperandElement.innerText = this.prevOperand;
    this.currentOperandElement.innerText = this.currentOperand;
  }

  //cut off last character
  del() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  //add number to operand
  appendNumber(number) {
    //if number currently displayed is the result of a calculation,
    //clear the calculator and start new
    if (this.isResult) {
      this.allClear();
      this.isResult = false;
    }

    if (number === ".") {
      if (this.currentOperand.includes(".")) {
        return; //don't add more than 1 '.'
      } else if (this.currentOperand == "") {
        this.currentOperand += "0.";
        return;
      }
    }
    this.currentOperand += number.toString();
  }

  //perform the calculation
  calculate() {
    let prev = parseFloat(this.prevOperand);
    let current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) {
      return;
    }

    let result;

    switch (this.operation) {
      case "÷":
      case "/":
        result = prev / current;
        break;
      case "x":
      case "*":
        result = prev * current;
        break;
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case undefined:
        result = current;
    }

    this.prevOperand = "";
    this.currentOperand = result;
    this.isResult = true; //current operand is result of calculation
  }

  //get the operation for calculation
  chooseOperation(operation) {
    if (this.currentOperand == "") {
      return;
    }
    if (this.prevOperand != "") {
      this.calculate();
    }

    this.operation = operation.toString(); //convert operation to a string
    this.prevOperand =
      this.currentOperand.toString() + " " + operation.toString(); //concat to current operand
    this.currentOperand = "";
    this.isResult = false; //operand is not direct result of calculation
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

//KEYDOWN FUNCTIONALITY
function pressedKey(e) {
  let key = e.key;

  switch (key) {
    //numbers
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
      calculator.appendNumber(e.key);
      calculator.updateDisplay();
      break;
    //all clear
    case "c":
      calculator.allClear();
      calculator.updateDisplay();
      break;
    //delete
    case "Delete":
      calculator.del();
      calculator.updateDisplay();
      break;
    //operations
    case "+":
    case "-":
    case "x":
    case "*":
    case "/":
      calculator.chooseOperation(e.key);
      calculator.updateDisplay();
      break;
    case "=":
    case "Enter":
      calculator.calculate();
      calculator.updateDisplay();
  }
}

window.addEventListener("keydown", pressedKey);
