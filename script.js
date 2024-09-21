let display = document.getElementById("display");

function addToDisplay(value) {
  display.value += value;
 
}
console,log("valor que tengo ")
function clearDisplay() {
  display.value = "";
}

function deleteDigit() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  display.value = eval(display.value);
}