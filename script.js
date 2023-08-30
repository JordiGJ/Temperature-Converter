// get elements
const inputs = document.querySelectorAll("input");

// functions
function handleClick(e) {
  const target = e.target.value;
  const id = e.target.id;
  if (id === "cel") {
    const toFah = (inputs[1].value = +target * (9 / 5) + 32);
    const toKel = +target + 273.15;
    inputs[1].value = toFah.toFixed(2);
    inputs[2].value = toKel.toFixed(2);
  }
  if (id === "fah") {
    const toCel = (+target - 32) * (5 / 9);
    const toKel = (+target + 459.67) * (5 / 9);
    inputs[0].value = toCel.toFixed(2);
    inputs[2].value = toKel.toFixed(2);
  }
  if (id === "kel") {
    const toCel = +target - 273.15;
    const toFah = +target * (9 / 5) - 459.67;
    inputs[0].value = toCel.toFixed(2);
    inputs[1].value = toFah.toFixed(2);
  }
}

// eventListeners
inputs.forEach((input) => input.addEventListener("input", handleClick));
