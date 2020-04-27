alert("this is some joovooscropt!");

function allClear() {
  alert("clicked the all clear button");
}

const allClearButton = document.querySelector("[data-all-clear]");
allClearButton.addEventListener("click", allClear);
