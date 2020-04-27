// class Calculator {
//   constructor(prevOp, currentOp) {
//     this.prevOp = prevOp;
//     this.currentOp = currentOp;
//   }

//   allClear() {
//     alert("clicked all clear button");
//   }

//   del() {
//     alert("clicked delete button");
//   }

//   chooseOperation() {
//     alert("clicked operation button");
//   }

//   addendNumber() {
//     alert("clicked number button");
//   }

//   performCalc() {
//     alert("perform calc time!");
//   }

//   updateDisplay() {
//     alert("updating display!");
//   }
// }

alert("test!");

function allClear() {
  alert("clicked all clear button");
}

// //create calculator object
// const myCalc = new Calculator("", "");

//access buttons
const allClearButton = document.querySelector("[data-all-clear");
allClearButton.addEventListener("click", allClear());

// const numberButtons = document.querySelectorAll("[data-number");
// const operationButtons = document.querySelectorAll("[data-operaton]");

// for (const numButton of numberButtons) {
//   numButton.addEventListener("click", () => {
//     myCalc.addendNumber();
//     myCalc.updateDisplay();
//   });
// }
