const counterValue = document.getElementById("counter-value");
const btnDecrease = document.getElementById("decrease-btn");
const btnReset = document.getElementById("reset-btn");
const btnIncrease = document.getElementById("increase-btn");

let count = 0;

function updated() {
  counterValue.textContent = count;
  // Clear previous classes
  counterValue.className = "";

  //Assign the correct class based on the value.
  if (count === 0) {
    counterValue.classList.add("value-zero");
  } else if (count > 0) {
    counterValue.classList.add("value-positive");
  } else {
    counterValue.classList.add("value-negative");
  }
}

updated();

btnReset.addEventListener("click", resetCount);
btnIncrease.addEventListener("click", increaseCount);
btnDecrease.addEventListener("click", decreaseCount);

function resetCount() {
  count = 0;
  updated();
}

function increaseCount() {
  count += 1;
  updated();
}

function decreaseCount() {
  count -= 1;
  updated();
}
